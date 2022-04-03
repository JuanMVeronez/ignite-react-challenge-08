import { Flex, Text } from "@chakra-ui/react";

type Continent = {
  id: number
  name: string;
  helpline: string;
  bannerImg: string;
}

interface ContinentCardProps {
  continent?: Continent;
  goToContinent: (continentId?: number) => void;
}

export function ContinentCard({continent, goToContinent}: ContinentCardProps) {
  return (
    <Flex onClick={() => goToContinent(continent?.id)} 
      color="headingsAndTexts.50"
      bgImage="/static/slides/europe.png"
      direction="column"
      h="15.625rem"
      justify="center"
      align="center"
      gap="3"
    >
      <Text fontWeight="bold" fontSize="2xl" >Europa</Text>
      <Text fontWeight="bold" fontSize="sm">O continente mais antigo.</Text>
    </Flex>
  );
}