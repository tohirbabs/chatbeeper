import { Field } from "formik";

import { gender } from "./style";

export default function GenderSelect({ value, id, icon, label, formikValue }) {
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
