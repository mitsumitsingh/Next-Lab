"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Herosection = ({ title }) => {
  return (
    <Box as="main">
      <Flex>
        <Flex>
          <Box p={20} pt={40} pb={40}>
            <Heading pb={4}>{title}</Heading>
            <Text pb={4}>
              From award-winning dramas to blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today.
            </Text>
            <Link href="/movie">
              <Button>Explore Movies</Button>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Herosection;
