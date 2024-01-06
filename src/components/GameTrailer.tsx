import { SwiperSlide } from "swiper/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
export const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];
  return first ? (
    <SwiperSlide>
      <video
        src={first.data[480]}
        controls
        width="80%"
        poster={first.preview}
      ></video>
    </SwiperSlide>
  ) : null;
};
