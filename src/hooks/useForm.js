import { useState } from 'react';

/**
 *
 * @param {number} initialValue value of counter number
 * @param {number} maxValue max value of count
 * @param {number} minValue min value of count
 * @returns {} values, inputValue, increment, decrement, handleInputChange, handleBlur, handleFocus,
 */
const useForm = (initialValue, maxValue, minValue) => {
  const [values, setValues] = useState(initialValue);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const increment = () => {
    setValues((prev) => Math.min(prev + 1, maxValue));
  };

  const decrement = () => {
    setValues((prev) => Math.max(prev - 1, minValue));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value <= 0 || isNaN(value)) {
      setInputValue(1);
    } else if (value >= maxValue) {
      setInputValue(maxValue);
    } else {
      setInputValue(value);
    }
  };

  const handleBlur = () => {
    setIsInputFocused(false);
    if (inputValue !== '') {
      const parsedValue = Math.min(
        Math.max(parseInt(inputValue, 10), minValue),
        maxValue
      );
      setValues(parsedValue);
    }
    setInputValue('');
  };

  const handleFocus = () => {
    setIsInputFocused(true);
    setInputValue('');
  };

  return {
    values,
    inputValue: isInputFocused ? inputValue : values,
    increment,
    decrement,
    handleInputChange,
    handleBlur,
    handleFocus,
  };
};

export default useForm;
