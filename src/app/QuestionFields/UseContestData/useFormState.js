import { useState } from 'react';

const useFormState = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return [formData, setFormData, handleChange];
};

export default useFormState;
