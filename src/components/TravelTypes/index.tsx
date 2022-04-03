import { Flex } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  const travelTypes = [
    {
      id: 0,
      text: 'vida noturna'
    },
    {
      id: 1,
      text: 'praia'
    },
    {
      id: 2,
      text: 'moderno'
    },
    {
      id: 3,
      text: 'clássico'
    },
    {
      id: 4,
      text: 'e mais...'
    },
  ]

  return (
    <Flex gap="6" direction="column" mx="12" my="9" maxW="72" >
      <Flex justify="space-between">
        <TravelType text={travelTypes[0].text}/>
        <TravelType text={travelTypes[1].text}/>
      </Flex>
      <Flex justify="space-between">
        <TravelType text={travelTypes[2].text}/>
        <TravelType text={travelTypes[3].text}/>
      </Flex>
      <Flex justify="center">
        <TravelType text={travelTypes[4].text}/>
      </Flex>
    </Flex>
  );
}