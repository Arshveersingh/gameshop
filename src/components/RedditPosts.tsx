import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import useRedditPosts from "../hooks/useRedditPosts";
import noImage from "../assets/no-image-placeholder.webp";
import { ExpandableText } from "./ExpandableText";

interface Props {
  gameId: number;
}
export const RedditPosts = ({ gameId }: Props) => {
  const { data, error } = useRedditPosts(gameId);
  if (error) {
    throw error;
  }
  if (data?.count === 0) {
    return;
  }
  return (
    <>
      <Heading margin={5}>Reddit Posts</Heading>
      <SimpleGrid spacing={3} columns={{ base: 1, sm: 2, xl: 3 }}>
        {data?.results.map((post) => (
          <GridItem key={post.id}>
            <HStack>
              <Image
                boxSize={"50px"}
                src={post.image || noImage}
                padding={0}
                objectFit={"cover"}
              ></Image>
              <Text paddingLeft={2} fontSize={"18px"} fontWeight={"bold"}>
                {post.name}
              </Text>
            </HStack>
            <Text pt={2} fontSize={"16px"} color={"gray.400"}>
              <ExpandableText maxChars={100}>
                {post.text.replace(/<[^>]*>/g, "")}
              </ExpandableText>
            </Text>
            <Text fontWeight={"bold"} padding={2} fontStyle={"italic"}>
              {post.username.replace("/u/", "")}
            </Text>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};
