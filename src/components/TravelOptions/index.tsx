import { Flex, Text } from "@chakra-ui/react";
import { ContinentSwiper } from "./ContinentSwiper";

export function TravelOptions() {
  return (
    <Flex justify="center" my="6" gap="5" direction="column">
      <Text align="center"
        fontWeight="medium"
        fontSize="xl"
      >Vamos nessa? <br /> Então escolha seu continente</Text>
      <ContinentSwiper />
    </Flex>
  );
}