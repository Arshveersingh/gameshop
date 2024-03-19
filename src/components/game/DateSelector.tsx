import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import useGameQueryStore from "../../stores/GameQueryStore";

// returns string YYYY-MM-DD,YYYY-MM-DD for querying server
// second date should be older
const calcluateDates = (days: number): string => {
  const startDate = new Date();
  const endDate = new Date();

  // end date comes after start date
  if (days > 0) endDate.setDate(startDate.getDate() + days);
  else startDate.setDate(startDate.getDate() + days);

  return (
    startDate.toISOString().split("T")[0] +
    "," +
    endDate.toISOString().split("T")[0]
  );
};
export const DateSelector = () => {
  const setDates = useGameQueryStore((s) => s.setDates);
  const dates = useGameQueryStore((s) => s.gameQuery.dates);
  const [menuText, setMenuText] = useState("Select Release Date");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {dates === "" ? "Select Release Date" : menuText}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            setDates(calcluateDates(-7));
            setMenuText("Last 7 Days");
          }}
        >
          Last 7 Days
        </MenuItem>
        <MenuItem
          onClick={() => {
            setDates(calcluateDates(-30));
            setMenuText("Last 30 Days");
          }}
        >
          Last 30 Days
        </MenuItem>
        <MenuItem
          onClick={() => {
            setDates(calcluateDates(30));
            setMenuText("Next 30 Days");
          }}
        >
          Next 30 Days
        </MenuItem>
        <MenuItem
          onClick={() => {
            setDates(calcluateDates(60));
            setMenuText("Next 60 Days");
          }}
        >
          Next 60 Days
        </MenuItem>
        <MenuItem
          onClick={() => {
            setDates(calcluateDates(90));
            setMenuText("Next 90 Days");
          }}
        >
          Next 90 Days
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
