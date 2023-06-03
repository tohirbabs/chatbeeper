const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: "Qucksand Book",
    h1: {
      fontFamily: "Nunito",
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    link: {
      textDecoration: "none",
      color: "#386FA4",
      fontSize: "0.9rem",
    },
    body: {
      fontSize: "0.9rem",
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            "-webkit-box-shadow": "0 0 0 100px #0A151E  inset",
            "-webkit-text-fill-color": "#fff",
          },
        },
        root: {
          "& fieldset": {
            borderRadius: "0.5rem",
            borderColor: "#505558",
          },
          fontFamily: "Montserrat",
        },
      },
    },
  },

  palette: {
    mode,
    ...(mode === "light"
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
          background: { default: "#fff", paper: "#0A151E" },
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
            main: "#fff",
          },
          text: { primary: "#FFFFFF", secondary: "#9E9E9E" },
          background: { default: "#0A151E", paper: "#0A151E" },
          //   error: "#DF3800",
          //   success: "#33DB39",
        }),
  },
});

export default getDesignTokens;
