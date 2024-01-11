import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FreeMode, Keyboard, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useScreenshots from "../../hooks/useScreenshots";
import useTrailers from "../../hooks/useTrailers";
import styles from "./GameCarousel.module.css";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface Props {
  gameId: number;
}

export const GameCarousel = ({ gameId }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<typeof Swiper | null>(null);
  const { data: trailers } = useTrailers(gameId);

  const { data: screenshots, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <Swiper
        loop={false}
        spaceBetween={50}
        navigation={true}
        keyboard={true}
        slidesPerView={1}
        modules={[Thumbs, FreeMode, Navigation, Keyboard]}
        thumbs={{
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
            <Image className={styles.slide} src={screenshot.image}></Image>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Thumbs, FreeMode, Navigation]}
        className={styles.thumbnails}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
      >
        {trailers?.results.map((trailer) => (
          <SwiperSlide className={styles.videoThumbnail} key={trailer.id}>
            <Image src={trailer.preview}></Image>
            <FaRegCirclePlay
              size={40}
              className={styles.videoPlay}
            ></FaRegCirclePlay>
          </SwiperSlide>
        ))}
        {screenshots?.results.map((screenshot) => (
          <SwiperSlide key={screenshot.id}>
            <Image src={screenshot.image}></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GameCarousel;
