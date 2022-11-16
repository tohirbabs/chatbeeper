import { useState } from "react";
import {
  FormLayout,
  PersonalDetailsForm,
  OtherDetails,
  Username,
} from "../../../components/Form";

export default function PersonalAccount() {
  const [currentForm, setCurrentForm] = useState(0);
  // console.log(currentForm);
  return (
    <FormLayout currentForm={currentForm} setCurrentForm={setCurrentForm}>
      {currentForm === 0 ? (
        <PersonalDetailsForm setCurrentForm={setCurrentForm} />
      ) : currentForm === 1 ? (
        <OtherDetails setCurrentForm={setCurrentForm} />
      ) : (
        <Username />
      )}
    </FormLayout>
  );
}
