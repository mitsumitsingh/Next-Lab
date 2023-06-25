"use client";
import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { FcAbout } from "react-icons/fc";
import { MdContacts, MdMovie } from "react-icons/md";
import { HiHome, HiMenu, HiMoon, HiSun } from "react-icons/hi";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("#003ed4eb", "#1F2937");
  const color = useColorModeValue("#ffffff", "#CCCCCC");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const { isOpen, onOpen, onClose } = useDisclosure(); // State for mobile menu

  const links = [
    {
      id: 1,
      link: "/",
      name: "Home",
      icon: <HiHome />,
    },
    { id: 2, link: "about", name: "About", icon: <FcAbout /> },
    {
      id: 3,
      link: "contact",
      name: "Contact",
      icon: <MdContacts />,
    },
    {
      id: 4,
      link: "movie",
      name: "movie",
      icon: <MdMovie />,
    },
  ];

  const handleToggleColorMode = () => {
    toggleColorMode();
  };

  return (
    <div>
      <Box bg={bgColor} borderBottom={`1px solid ${borderColor}`}>
        <Flex
          maxW="8xl"
          mx="auto"
          px={{ base: 4, md: 8 }}
          py={4}
          align="center"
          justify="space-between"
        >
          <Heading as="h2" size="md" color={color}>
            <Link href="/">Logo</Link>
          </Heading>

          <IconButton
            aria-label="Toggle Color Mode"
            icon={colorMode === "light" ? <HiMoon /> : <HiSun />}
            variant="ghost"
            onClick={handleToggleColorMode}
            style={{ height: "0px", width: "0px" }}
          />

          <HStack
            spacing="4"
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {links.map((li) => (
              <Link
                key={li.id}
                href={li.link}
                color={color}
                fontWeight="medium"
                _hover={{ textDecoration: "underline" }}
              >
                {li.name}
              </Link>
            ))}
          </HStack>

          <IconButton
            aria-label="Toggle Menu"
            icon={<HiMenu />}
            variant="ghost"
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Box>

      {/* Mobile Menu */}
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        allowPinchZoom={true}
        blockScrollOnMount={true}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent maxW="55vw">
          <DrawerCloseButton />
          <DrawerHeader bg={bgColor} color={color} borderBottomWidth="1px">
            <Link href="/">Logo</Link>
          </DrawerHeader>

          <DrawerBody px={4}>
            <Stack spacing="24px">
              {links.map((li) => (
                <div key={li.id}>
                  <Flex direction={"row"}>
                    <IconButton
                      aria-label="Toggle Menu"
                      icon={li.icon}
                      variant="ghost"
                      display={{ base: "flex", md: "none" }}
                      onClick={onOpen}
                      mt={4}
                    />
                    <Link
                      href={li.link}
                      fontWeight="medium"
                      mt={6}
                      _hover={{ textDecoration: "underline" }}
                    >
                      {li.name}
                    </Link>
                  </Flex>
                </div>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
