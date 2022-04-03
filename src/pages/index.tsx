import { Flex, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Banner } from '../components/Banner';
import { Divider } from '../components/Divider';
import { TravelOptions } from '../components/TravelOptions';
import { TravelTypes } from '../components/TravelTypes';

const Home: NextPage = () => {
  return (
    <>
      <Banner imageSrc="/static/banner/homeBanner.png" 
        direction="column" 
        color="headingsAndTexts.50"
        gap="2"
      >
        <Text fontSize="xl" fontWeight="medium">
          5 Continentes, <br/> infinitas possibilidades.
        </Text>
        <Text fontSize="sm">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Banner>
      <TravelTypes />
      <Divider />
      <TravelOptions />
    </>
  );
}

export default Home;
