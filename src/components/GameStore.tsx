import {
  Button,
  GridItem,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
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
  if (error) return;
  return (
    <>
      <Text marginLeft={3} fontSize={"18px"} color={"gray.400"}>
        Where to buy
      </Text>
      <SimpleGrid spacing={2} columns={{ base: 1, sm: 2, xl: 3 }}>
        {data?.results.map((store) => (
          <GridItem key={store.id} margin={3}>
            <Link isExternal href={store.url}>
              <Button color={"gray.400"}>
                {iconMap[store.store_id].storeName}
                <Icon
                  marginLeft={2}
                  boxSize={"20px"}
                  as={iconMap[store.store_id].icon}
                ></Icon>
              </Button>
            </Link>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};
