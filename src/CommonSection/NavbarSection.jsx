import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  SpeedDialHandler,
  SpeedDial,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  Bars2Icon,
  Bars3Icon,
  CogIcon,
  HomeIcon,
  PlusIcon,
  Square3Stack3DIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium text-md"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium text-md"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium text-md"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Project
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium text-md"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Blog</ListItem>
      </Typography>
    </List>
  );
}

const NavbarSection = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const smallMenu = (
    <>
      <div className="absolute bottom-0 right-0 mr-5">
        <SpeedDial placement="right">
          <SpeedDialHandler>
            <IconButton
              color="white"
              size="lg"
              className="rounded-full h-12 w-12"
            >
              <Bars3Icon className="h-8 w-8 " />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row ">
            <SpeedDialAction className="bg-blue-gray-50">
              <HomeIcon className="h-5 w-5 text-blue-gray-900" />
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <CogIcon className="h-5 w-5 text-blue-gray-900" />
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <Square3Stack3DIcon className="h-5 w-5 text-blue-gray-900" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </>
  );

  return (
    <Navbar className=" max-w-full bg-none border-none shadow-none py-2 lg:px-12 px-12">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className=" flex gap-5 items-center justify-center">
          <img
            className="h-[35px] w-[35px]"
            src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png"
            alt=""
          />
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 "
          >
            DEVPS
          </Typography>
        </div>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <></> : <></>}
        </IconButton>
      </div>
      <div className="lg:hidden" open={openNav}>
        {smallMenu}
      </div>
    </Navbar>
  );
};

export default NavbarSection;
