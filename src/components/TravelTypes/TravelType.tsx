import { Flex, Text } from "@chakra-ui/react";
import { CircleIcon } from "../CircleIcon";

interface TravelTypeProps {
  text: string;
}

export function TravelType({ text }: TravelTypeProps) {
  return (
    <Flex align="baseline">
      <CircleIcon boxSize={2.5} color="highlight" mr="2"/>
      <Text>{text}</Text>
    </Flex>
  );
}