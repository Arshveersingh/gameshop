import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Orderby: {currentSortOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => {
          return (
            <MenuItem
              onClick={() => {
                onSelectSortOrder(order.value);
              }}
              key={order.label}
            >
              {order.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
