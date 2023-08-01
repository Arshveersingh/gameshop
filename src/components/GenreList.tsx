import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImages from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number | null;
}

export const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
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
      <Heading marginBottom={3} fontSize={"3xl"}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  borderRadius={8}
                  boxSize="32px"
                  src={getCroppedImages(genre.image_background)}
                  objectFit="cover"
                ></Image>
                <Button
                  onClick={() => {
                    onSelectGenre(genre);
                  }}
                  variant="link"
                  fontSize="lg"
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  whiteSpace="normal"
                  textAlign="left"
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
