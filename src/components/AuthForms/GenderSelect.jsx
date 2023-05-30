import { Field } from "formik";

export default function GenderSelect({ value, id, icon, label, formikValue }) {
  const gender = {
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
      borderRadius: "0.5rem",
      border: "1px solid  grey",
    },
    field: {
      position: "absolute",
      left: "0",
      top: "-2rem",
    },
  };
  return (
    <label
      htmlFor={id}
      style={{
        ...gender.content,
        backgroundColor: formikValue === value ? "#295B85" : "inherit",
        color: formikValue === value ? "white" : "text.primary",
      }}
    >
      <Field
        id={id}
        style={gender.field}
        value={value}
        name="gender"
        type="radio"
      />
      <span>{label}</span> <img src={icon} alt={`${id} icon`} />
    </label>
  );
}
