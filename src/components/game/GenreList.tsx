import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImages from "../../services/image-url";
import useGameQueryStore from "../../stores/GameQueryStore";

export const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading)
    return (
      <>
        <Heading
          marginBottom={3}
          fontSize={"3xl"}
          color={"transparet"}
          background={
            "linear-gradient(0deg, rgba(63,94,251,1) 39%, rgba(131,58,180,1) 73%);"
          }
          backgroundClip={"text"}
        >
          Genres
        </Heading>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="gray.600"
          size="lg"
        ></Spinner>
      </>
    );
  return (
    <>
      <Heading
        marginBottom={3}
        fontSize={"3xl"}
        color={"transparet"}
        background={
          "linear-gradient(0deg, rgba(63,94,251,1) 39%, rgba(131,58,180,1) 73%);"
        }
        backgroundClip={"text"}
      >
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
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  background={
                    "linear-gradient(0deg, rgba(63,94,251,1) 39%, rgba(131,58,180,1) 73%);"
                  }
                  backgroundClip={"text"}
                  color={genre.id === selectedGenreId ? "transparent" : ""}
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
