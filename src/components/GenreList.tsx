import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "../services/image-url";
import useGameQueryStore from "../stores/GameQueryStore";

export const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
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
                    setSelectedGenreId(genre.id);
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
