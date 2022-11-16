export const container = (theme) => ({
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
  },
  paddingTop: "4rem",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const box = (theme) => ({
  [theme.breakpoints.up("md")]: {
    width: "max-content",
  },
  width: "90vw",
});
export const heading = {
  fontSize: "48px",
  fontWeight: "600",
  marginTop: "4rem",
};

export const textBox = {
  display: "flex",
  flexDirection: "column",
  margin: "16px 0 48px 0",
  fontSize: "20px",
  fontWeight: "400",
};
export const button = (theme) => ({
  [theme.breakpoints.up("md")]: {
    margin: "11px auto",
  },
  width: "250px",
  height: "48px",
  borderRadius: "6px",

  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  gap: "2px",
});

export const accountType = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    width: "100%",
  },
  content: {
    width: "100%",
    maxWidht: "178px",
    height: "48px",
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: "14px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",
    borderRadius: "6px",
    border: "1px solid  grey",
  },
  field: {
    position: "absolute",
    left: "0",
    top: "-2rem",
  },
};

export const account = {
  textTransform: "lowercase",
};
export const nextButton = {
  width: "100%",
  height: "54px",
  maxWidth: "372px",
  borderRadius: "6px",
  marginTop: "5rem",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: "600",
};

// export const styles = (theme) => ({
//   root: {
//     padding: theme.spacing(1),
//     [theme.breakpoints.down("md")]: {
//       backgroundColor: theme.palette.secondary.main,
//     },
//     [theme.breakpoints.up("md")]: {
//       backgroundColor: theme.palette.primary.main,
//     },
//     [theme.breakpoints.up("lg")]: {
//       backgroundColor: green[500],
//     },
//   },
// });
