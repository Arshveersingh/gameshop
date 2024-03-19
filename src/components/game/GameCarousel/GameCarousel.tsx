import { Box, Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FreeMode, Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  IoIosArrowDropright,
  IoIosArrowDropleft,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import useScreenshots from "../../../hooks/useScreenshots";
import useTrailers from "../../../hooks/useTrailers";
import getCroppedImages from "../../../services/image-url";
import styles from "./GameCarousel.module.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/swiper-bundle.css";

interface Props {
  gameId: number;
}

export const GameCarousel = ({ gameId }: Props) => {
  const swiper = useSwiper();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);
  const { data: trailers } = useTrailers(gameId);
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <Box marginBottom={5} position={"relative"}>
      <Swiper
        onSlideChange={(swiper) => {
          let videoElements = document.getElementsByTagName("video");
          for (let i = 0; i < videoElements.length; i++) {
            videoElements[i].pause();
          }
          setSwiperActiveIndex(swiper.activeIndex);
        }}
        loop={false}
        spaceBetween={50}
        navigation={{
          nextEl: ".nextButton",
          prevEl: ".prevButton",
        }}
        keyboard={true}
        slidesPerView={1}
        modules={[Thumbs, FreeMode, Navigation, Keyboard]}
        thumbs={{
          //@ts-ignoreF
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        <Button
          className="prevButton"
          left={"12%"}
          onClick={() => swiper.slidePrev()}
          padding={0}
          position={"absolute"}
          top={"50%"}
          transform={"translateY(-50%);"}
          variant={"none"}
          zIndex={100}
        >
          <IoIosArrowDropleft size={"3rem"}></IoIosArrowDropleft>
        </Button>
        <Button
          className="nextButton"
          onClick={() => swiper.slideNext()}
          padding={0}
          position={"absolute"}
          right={"12%"}
          top={"50%"}
          transform={"translateY(-50%);"}
          variant={"none"}
          zIndex={100}
        >
          <IoIosArrowDropright size={"3rem"}></IoIosArrowDropright>
        </Button>
        {trailers?.results.map((trailer) => (
          <SwiperSlide key={trailer.id}>
            <video
              className={styles.slide}
              controls
              poster={trailer.preview}
              src={trailer.data[480]}
              width="80%"
            ></video>
          </SwiperSlide>
        ))}
        {screenshots?.results.map((screenshot) => (
          <SwiperSlide key={screenshot.id}>
            <Image
              aspectRatio={"16 / 9"}
              className={styles.slide}
              src={screenshot.image}
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box>
        <Swiper
          className={styles.thumbnailsContainer}
          modules={[Thumbs, FreeMode, Navigation]}
          // @ts-ignore
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={20}
          watchSlidesProgress
          navigation={{
            nextEl: ".nextButtonThumb",
            prevEl: ".prevButtonThumb",
          }}
        >
          <Button
            className="prevButtonThumb"
            left={"10px"}
            onClick={() => {
              if (thumbsSwiper) {
                //@ts-ignore
                thumbsSwiper.slidePrev();
              }
            }}
            padding={0}
            position={"absolute"}
            top={"50%"}
            transform={"translateY(-50%);"}
            variant={"none"}
            zIndex={100}
          >
            <IoIosArrowBack size={"2rem"}></IoIosArrowBack>
          </Button>
          <Button
            className="nextButtonThumb"
            onClick={() => {
              if (thumbsSwiper) {
                //@ts-ignore
                thumbsSwiper.slideNext();
              }
            }}
            padding={0}
            position={"absolute"}
            right={"10px"}
            top={"50%"}
            transform={"translateY(-50%);"}
            variant={"none"}
            zIndex={100}
          >
            <IoIosArrowForward size={"2rem"}></IoIosArrowForward>
          </Button>
          {trailers?.results.map((trailer, i) => (
            <SwiperSlide className={styles.videoThumbnail} key={trailer.id}>
              <Image
                aspectRatio={"16 / 9"}
                className={
                  swiperActiveIndex === i
                    ? styles.activeSlide
                    : styles.thumbnail
                }
                src={trailer.preview}
                fallbackSrc={getCroppedImages(trailer.preview)}
              ></Image>
              <FaRegCirclePlay
                size={40}
                className={styles.videoPlay}
              ></FaRegCirclePlay>
            </SwiperSlide>
          ))}
          {screenshots?.results.map((screenshot, i) => (
            <SwiperSlide key={screenshot.id}>
              <Image
                aspectRatio={"16 / 9"}
                className={
                  swiperActiveIndex === i + (trailers?.count || 0)
                    ? styles.activeSlide
                    : styles.thumbnail
                }
                src={getCroppedImages(screenshot.image)}
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default GameCarousel;
