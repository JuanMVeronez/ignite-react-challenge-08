import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BannerProps extends FlexProps {
  imageSrc: string;
  children: ReactNode;
}

export function Banner({ imageSrc, children, ...rest }: BannerProps) {
  return (
    <Flex bgImage={imageSrc} minH="40" w="100vw" px={4} py={7} {...rest}>
      {children}
    </Flex>
  );
}