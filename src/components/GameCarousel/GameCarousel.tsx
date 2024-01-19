import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FreeMode, Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import useScreenshots from "../../hooks/useScreenshots";
import useTrailers from "../../hooks/useTrailers";
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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);
  const swiper = useSwiper();
  const { data: trailers } = useTrailers(gameId);
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <Box marginBottom={5}>
      <Swiper
        onSlideChange={(swiper) => {
          let videoElements = document.getElementsByTagName("video");
          for (let i = 0; i < videoElements.length; i++) {
            videoElements[i].pause();
          }
        }}
        loop={false}
        spaceBetween={50}
        navigation={true}
        keyboard={true}
        slidesPerView={1}
        modules={[Thumbs, FreeMode, Navigation, Keyboard]}
        thumbs={{
          //@ts-ignoreF
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {trailers?.results.map((trailer) => (
          <SwiperSlide key={trailer.id}>
            <video
              className={styles.slide}
              src={trailer.data[480]}
              controls
              width="80%"
              poster={trailer.preview}
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

      <Swiper
        modules={[Thumbs, FreeMode, Navigation]}
        className={styles.thumbnailsContainer}
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
      >
        {trailers?.results.map((trailer) => (
          <SwiperSlide className={styles.videoThumbnail} key={trailer.id}>
            <Image
              aspectRatio={"16 / 9"}
              className={styles.thumbnail}
              src={trailer.preview}
            ></Image>
            <FaRegCirclePlay
              size={40}
              className={styles.videoPlay}
            ></FaRegCirclePlay>
          </SwiperSlide>
        ))}
        {screenshots?.results.map((screenshot) => (
          <SwiperSlide key={screenshot.id}>
            <Image
              aspectRatio={"16 / 9"}
              className={styles.thumbnail}
              src={screenshot.image}
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default GameCarousel;
