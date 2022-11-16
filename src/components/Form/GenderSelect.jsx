import { useState } from 'react';

import Box from '@mui/material/Box';

import { Field } from 'formik';

import { ManIcon, WomanIcon } from '../../assets/icons';
import { gender } from './PersonalDetailsForm/style';

export default function GenderSelect({
  value,
  id,
  icon,
  label,
  formikValue,
  fieldValue,
  setFieldValue,
}) {
  return (
    <label
      htmlFor={id}
      style={{
        ...gender.content,
        backgroundColor: formikValue === value ? '#295B85' : 'inherit',
        color: formikValue === value ? 'white' : 'black',
      }}
    >
      <Field
        id={id}
        style={gender.field}
        value={value}
        name='gender'
        type='radio'
      />
      <span>{label}</span> <img src={icon} alt={`${id} icon`} />
    </label>
  );
}
