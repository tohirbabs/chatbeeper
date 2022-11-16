import { useState } from 'react';
import { FormLayout } from '../../../components/Form';

export default function BusinessAccount() {
  const [currentForm, setCurrentForm] = useState(0);

  return <FormLayout currentForm={currentForm}></FormLayout>;
}
