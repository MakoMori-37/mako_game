const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const COLORS = {
  primary: "#00B1DA",
  secondary: "#0C5C88",
  tertiary: "#FFDFC8",
  lightBlue: "#60CAE3",
  sky: "#00B1DA",
  vayuBlue: "#53B8D2",

  gray: "#83829A",
  gray2: "#C1C0C8",
  gray3: "#3C3C43",

  white: "#F3F4F8",
  lightWhite: "#F1F6FF",
  lightBg: "#FEFEFE",

  darkBlue: "#004167",
  deepBlue: "#0C5C88",
  darkGray: "#555555",

  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  black: "#070308",
  // black: "#111111",
  pink: "#e57cd8",
  blurPink: "#efddf7",
  gold: "#FFCB74",
  blurBlack: "#2F2F2F",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  xSmall: {
    shadowColor: "#555555",
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  large: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 7,
  },
  xLarge: {
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 14,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
