// This style is shared with the otherDetails form

export const button = {
  fontFamily: "Syne",
  width: "100%",
  textTransform: "capitalize",
  padding: "0.8rem",
  fontSize: "16px",
  fontWeight: "600",
  borderRadius: "1.2rem",
};

export const roundedInput = {
  [`& fieldset`]: { borderRadius: "1.5rem" },
  fontFamily: "Montserrat",
};

export const gender = {
  container: {
    display: "flex",
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
    borderRadius: "1.5rem",
    border: "1px solid  grey",
  },
  field: {
    position: "absolute",
    left: "0",
    top: "-2rem",
  },
};
