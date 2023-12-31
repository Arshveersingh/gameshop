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
import { HStack, Icon } from "@chakra-ui/react";
import Platform from "../entities/Platform";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
export const PlatfromIconList = ({ platforms }: Props) => {
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
      <HStack marginY={1}>
        {platforms?.map((platform, index) => (
          <Icon as={iconMap[platform.slug]} key={index} color="gray.500"></Icon>
        ))}
      </HStack>
    </>
  );
};
