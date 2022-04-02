import { Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BackButton } from "./BackButton";

export const Header = () => {
  const router = useRouter()
  const isHomePage = router.asPath === '/';

  return (
    <Flex as="header" align="center" justify="center" my="4">
      {!isHomePage && <BackButton navegateHandler={() => router.push('/')}/>}
      <Image src="/static/logo.svg" 
        alt="logo da Woldtrip que tem trip com uma cor chamativa e um avião subindo voo e passando pela palavra"
        h="5" 
      />
    </Flex>
  );
};