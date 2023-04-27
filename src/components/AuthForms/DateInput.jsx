import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateInput({
  value,
  onChange,
  id,
  label,
  helperText,
  error,
  name,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        disableFuture
        value={value}
        onChange={onChange}
        inputFormat="DD/MM/YYYY"
        renderInput={(params) => (
          <TextField
            name={name}
            helperText={helperText}
            error={error}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}
