import { Divider as ChakraDivider, Flex } from '@chakra-ui/react'

export function Divider() {
  return (
    <Flex justify="center">
      <Flex w="16">
        <ChakraDivider borderColor='headingsAndTexts.500' opacity={1} />
      </Flex>
    </Flex>
  );
}