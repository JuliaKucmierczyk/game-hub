import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: Relevance
          <MenuList>
            <MenuItem>Relavance</MenuItem>
            <MenuItem>Date added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average rating</MenuItem>
          </MenuList>
        </MenuButton>
      </Menu>
    </>
  );
};

export default SortSelector;
