"use client";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardBody,
  Text,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;

  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={curElem.jawSummary.backgroundImage.url}
            alt="Image Loading..."
            width={260}
            height={200}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title.substring(0, 18)}</Heading>
            <Text>{`${synopsis.substring(0, 66)} ...`}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default MovieCard;
