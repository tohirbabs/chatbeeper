import {
  button,
  account,
} from "../../Pages/Registration/AccountCreation/style";

import Button from "@mui/material/Button";

export default function AccountTypeSelect({ icon, label, type, setType }) {
  return (
    <>
      {type === label ? (
        <Button
          variant="contained"
          sx={button}
          onClick={() => {
            setType(label);
            console.log(type);
          }}
        >
          {icon}
          {label}
          <span style={account}>account</span>
        </Button>
      ) : (
        <Button
          variant="outlined"
          sx={button}
          onClick={() => {
            setType(label);
            console.log(type);
          }}
        >
          {icon}
          {label}
          <span style={account}>account</span>{" "}
        </Button>
      )}
    </>
  );
}
