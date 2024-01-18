import {
  GridItem,
  HStack,
  Stack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import noImage from "../assets/no-image-placeholder.webp";
import useRedditPosts from "../hooks/useRedditPosts";
import { ExpandableText } from "./ExpandableText";

interface Props {
  gameId: number;
}
const removeHtmlEntities = (str: string) => {
  var doc = new DOMParser().parseFromString(str, "text/html");
  return doc.body.textContent || "";
};
export const RedditPosts = ({ gameId }: Props) => {
  const { data, error } = useRedditPosts(gameId);
  const { colorMode } = useColorMode();
  if (error) {
    throw error;
  }
  if (data?.count === 0) {
    return;
  }
  var color = colorMode === "dark" ? "gray.400" : "black.900";
  return (
    <Box>
      <Heading margin={5}>Reddit Posts</Heading>
      <SimpleGrid spacing={3}>
        {data?.results.map((post) => (
          <GridItem key={post.id}>
            <HStack>
              <Stack>
                <Image
                  boxSize={"60px"}
                  src={post.image || noImage}
                  padding={0}
                  objectFit={"cover"}
                  borderRadius={"30px"}
                ></Image>
                <Text fontWeight={"bold"} padding={2} fontStyle={"italic"}>
                  {post.username.replace("/u/", "")}
                </Text>
              </Stack>
              <Box>
                <Text paddingLeft={2} fontSize={"18px"} fontWeight={"bold"}>
                  {post.name}
                  <Text as={"div"} pt={2} fontSize={"16px"} color={color}>
                    {removeHtmlEntities(post.text)}
                  </Text>
                </Text>
              </Box>
            </HStack>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};
