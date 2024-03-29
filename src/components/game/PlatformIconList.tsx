import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaAndroid,
  FaLinux,
  FaXbox,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import Platform from "../../entities/Platform";
import { IconType } from "react-icons";

interface Props {
  boxSize?: string | number;
  gap?: string | number;
  platforms: Platform[];
}
export const PlatformIconList = ({
  platforms,
  boxSize = "1.3rem",
  gap = "0.5rem",
}: Props) => {
  const iconColor = useColorModeValue("gray.500", "white");
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <>
      <HStack marginY={1} gap={gap}>
        {platforms?.map((platform, index) => (
          <Icon
            boxSize={boxSize}
            as={iconMap[platform.slug]}
            key={index}
            color={iconColor}
          ></Icon>
        ))}
      </HStack>
    </>
  );
};
