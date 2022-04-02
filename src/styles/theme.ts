import { DeepPartial, extendTheme, Theme } from "@chakra-ui/react";

type CustomTheme = Theme & {
  colors: {
    highlight: string;
    highlightAlpha: string;
    headingsAndTexts: {
      50: string
      500: string;
    }
    info: {
      50: string;
      200: string;
    }
    infoAlpha: string;
  }
}

const customTheme: DeepPartial<CustomTheme> = {
  colors: {
    yellow: {
      "500": "#FFBA08"
    },
    gray: {
      "700": "#47585B",
      "500": "#999999",
      "300": "#DADADA",
      "100": "#F5F8FA",
    },
    black: "#000000",
    white: "#FFFFFF",
    highlight: '#FFBA08',
    highlightAlpha: '#FFBA0880',
    headingsAndTexts: {
      "50": "#F5F8FA",
      "500": "#47585B",
    },
    info: {
      "50": "#DADADA",
      "200": "#999999",
    },
    infoAlpha: "#99999980"
  },
  fonts: {
    body: "poppins",
    heading: "poppins"
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "headingsAndTexts.500"
      }
    }
  }

};

export const theme = extendTheme(customTheme);
