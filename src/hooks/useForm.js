import { useState } from 'react';

/**
 *
 * @param {ChangeEvent<HTMLInputElement>} inputValue event onChange of input
 * @returns {object} object with values, setValue and handleChange
 */
const useForm = (inputValue) => {
  const [values, setValues] = useState(inputValue);

  const handleChange = (e) => {
    e.target.value = e.target.value.replace(/^0+/, 1);
    const { value, name } = e.target;

    if (name === 'count') {
      if (value <= 0 || isNaN(value)) {
        setValues({ ...values, [name]: 1 });
      } else {
        setValues({ ...values, [name]: +value });
      }
    }
  };

  return { values, handleChange, setValues };
};

export default useForm;
