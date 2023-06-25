"use client";
import React from "react";
import { Grid, GridItem, Box, Center, Flex } from "@chakra-ui/react";
import SendMail from "./SendMail";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Box className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </Box>
      <Box
        backgroundColor="#24282c"
        color={"white"}
        paddingTop={8}
        paddingLeft={2}
        paddingRight={2}
        paddingBottom={12}
        paddingX={{ sm: 16, md: 10 }}
      >
        <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          <GridItem w="100%" h="auto">
            <SendMail />
          </GridItem>
          <GridItem w="100%" h="auto" mt={8}>
            <Center>
              <Grid templateColumns="repeat(1, 1fr)" gap={6}>
                <GridItem w="100%">
                  <Link href={"tel:+65 89256736"}>
                    <Flex alignItems="center" gap={6}>
                      <PhoneIcon h={6} w={6} mr={4} />
                      <Box fontSize={25}>+65 89256736</Box>
                    </Flex>
                  </Link>
                </GridItem>
                <GridItem w="100%">
                  <Link href="mailto:sksingq@gmail.com">
                    <Flex alignItems="center" gap={6}>
                      <EmailIcon h={6} w={6} mr={3} />
                      <Box fontSize={25}>sksingq@gmail.com</Box>
                    </Flex>
                  </Link>
                </GridItem>
              </Grid>
            </Center>
          </GridItem>
          <GridItem w="100%" h="auto" ml={4}>
            <Box fontSize={25}>About Me</Box>
            <Flex mt={2} mb={2} color={"#8f9296"}>
              Full stack developer with 4.5+ years of professional experience in
              e-commerce, finance and banking domain with agile development
              environment.
            </Flex>
            <Flex>
              <SocialIcons />
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
