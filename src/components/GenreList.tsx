import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImages from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
export const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      ></Spinner>
    );
  return (
    <>
      <List>
        {genres.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  borderRadius={8}
                  boxSize="32px"
                  src={getCroppedImages(genre.image_background)}
                ></Image>
                <Button
                  onClick={() => {
                    onSelectedGenre(genre);
                  }}
                  variant="link"
                  fontSize="lg"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
