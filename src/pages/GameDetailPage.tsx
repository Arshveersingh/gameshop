import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ExpandableText } from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import { GameAttributes } from "../components/GameAttributes";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <>
      <Heading marginBottom={1}>{game?.name}</Heading>
      <ExpandableText maxChars={300}>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}></GameAttributes>
    </>
  );
};
