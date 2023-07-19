import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { genres, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};
