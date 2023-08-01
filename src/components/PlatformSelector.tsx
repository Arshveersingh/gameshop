import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: Props) => {
  const { data: platforms, error } = usePlatforms();
  const selectedPlatform = selectedPlatformId
    ? platforms?.results.find((platform) => platform.id == selectedPlatformId)
    : null;

  if (error) {
    return;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              onSelectPlatform(platform);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
