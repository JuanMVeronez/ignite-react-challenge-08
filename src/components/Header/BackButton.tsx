import { ChevronLeftIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface BackButtonProps {
  navegateHandler: () => void;
}

export function BackButton({ navegateHandler }: BackButtonProps) {
  return (
    <IconButton onClick={navegateHandler} 
      icon={<ChevronLeftIcon w="4" h="4" />} 
      aria-label="back to home page"
      variant="ghost"
      size="sm" fontSize="sm"
      position="absolute" 
      left="4"
    /> 
  );
}