const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Montserrat"],
  },
  palette: {
    mode,
    ...(mode === "light+"
      ? {
          //  palette values for light mode
          primary: {
            main: "#295B85",
          },
          secondary: {
            main: "#295B85",
          },
          text: { primary: "#0A151E", secondary: "#9E9E9E" },
          //   error: "#DF3800",
          background: { default: "#FFFFFF", paper: "#0A151E" },
          //   success: "#33DB39",
          action: {
            disabled: "#FFFFFF",
            disabledBackground: "#D8D8D8",
          },
        }
      : {
          //  palette values for dark mode
          primary: {
            main: "#295B85",
          },
          secondary: {
            main: "#295B85",
          },
          text: { primary: "#FFFFFF", secondary: "#9E9E9E" },
          background: { default: "#0A151E", paper: "#0A151E" },
          //   error: "#DF3800",
          //   success: "#33DB39",
        }),
  },
});

export default getDesignTokens;
