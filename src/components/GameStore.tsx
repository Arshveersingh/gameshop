import { Box, Button, Icon, Link, Text, useColorMode } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaApple,
  FaGooglePlay,
  FaItchIo,
  FaPlaystation,
  FaSteam,
  FaXbox,
} from "react-icons/fa6";
import { SiEpicgames, SiGogdotcom, SiNintendo } from "react-icons/si";
import useStore from "../hooks/useStore";

interface Props {
  gameId: number;
}

const iconMap: { [storeId: number]: { icon: IconType; storeName: string } } = {
  1: { storeName: "Steam", icon: FaSteam },
  2: { storeName: "Xbox One", icon: FaXbox },
  3: { storeName: "PlatstationStore", icon: FaPlaystation },
  4: { storeName: "Apple App Store", icon: FaApple },
  5: { storeName: "GOG", icon: SiGogdotcom },
  6: { storeName: "Nintendo Store", icon: SiNintendo },
  7: { storeName: "Xbox360", icon: FaXbox },
  8: { storeName: "Google Play", icon: FaGooglePlay },
  9: { storeName: "Itch", icon: FaItchIo },
  11: { storeName: "Epic Games", icon: SiEpicgames },
};

export const GameStores = ({ gameId: id }: Props) => {
  const { data, error } = useStore(id);
  const { colorMode } = useColorMode();
  if (error) return;
  if (data?.count === 0) return;
  var color = colorMode === "dark" ? "gray.400" : "gray.500";
  return (
    <>
      <Text
        marginTop={"2.5rem"}
        marginLeft={3}
        fontSize={"2rem"}
        textAlign={"center"}
        color={color}
      >
        Where to Buy
      </Text>
      <Box
        margin={"1rem auto"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {data?.results.map((store) => (
          <Link key={store.id} isExternal href={store.url}>
            <Button
              margin={"1rem"}
              padding={"2rem"}
              border={"solid"}
              color={color}
              background={"transparent"}
            >
              <Text fontSize={"1.5rem"}>
                {iconMap[store.store_id].storeName}
              </Text>
              <Icon
                marginLeft={2}
                boxSize={"3rem"}
                as={iconMap[store.store_id].icon}
              ></Icon>
            </Button>
          </Link>
        ))}
      </Box>
    </>
  );
};
