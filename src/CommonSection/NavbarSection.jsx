import React, { useEffect, useState } from "react";
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
import { FcAbout } from "react-icons/fc";
import { FaBlog, FaCode, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#home"
        variant="small"
        color="blue-gray"
        className="font-medium text-md"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#about"
        variant="small"
        color="blue-gray"
        className="font-medium text-md"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">About</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#project"
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
        href="#technology"
        variant="small"
        color="blue-gray"
        className="font-medium text-md"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Technology
        </ListItem>
      </Typography>
    </List>
  );
}

const NavbarSection = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const smallMenu = (
    <>
      <div className="absolute bottom-0 right-0 mr-5 ">
        <SpeedDial placement="right">
          <SpeedDialHandler className=" bg-none bg-[#F3F5F5] shadow-none hover:shadow-none">
            <IconButton
              color="white"
              size="lg"
              className="rounded-full h-12 w-12 bg-none"
            >
              <Bars3Icon className="h-8 w-8 " />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row ">
            <SpeedDialAction href="#home" size="sm" className="bg-[#F3F5F5]">
              <Typography
                as="a"
                href="#home"
                variant="small"
                color="blue-gray"
                className="font-medium text-md"
              >
                <HomeIcon className="h-5 w-5 text-blue-gray-900" />
              </Typography>
            </SpeedDialAction>
            <SpeedDialAction as="a" href="#about" className="bg-blue-gray-50">
              <Typography
                as="a"
                href="#about"
                variant="small"
                color="blue-gray"
                className="font-medium text-md"
              >
                <FcAbout
                  as="a"
                  href="#about"
                  className="h-5 w-5 text-blue-gray-900"
                />
              </Typography>
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <Typography
                as="a"
                href="#project"
                variant="small"
                color="blue-gray"
                className="font-medium text-md"
              >
                <FaProjectDiagram className="h-4 w-4 text-blue-gray-900" />
              </Typography>
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <Typography
                as="a"
                href="#technology"
                variant="small"
                color="blue-gray"
                className="font-medium text-md"
              >
                <FaCode className="h-5 w-5 text-blue-gray-900" />
              </Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </>
  );
  const navAnimation = {
    hidden: {
      y: -40,
    },
    visible: {
      y: -0,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 120,
      },
    },
  };
  return (
    <Navbar className="bg-[#F3F5F5] max-w-full bg-none border-none shadow-none py-2 lg:px-12 px-12 sticky top-0 z-10">
      <motion.div
        variants={navAnimation}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between text-blue-gray-900"
      >
        <div className=" flex gap-5 items-center justify-center">
          <img
            className="h-[35px] w-[35px]"
            src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png"
            alt=""
          />
          {/* <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 "
          >
            DEVPS
          </Typography> */}
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
      </motion.div>
      <div className="lg:hidden" open={openNav}>
        {smallMenu}
      </div>
    </Navbar>
  );
};

export default NavbarSection;
