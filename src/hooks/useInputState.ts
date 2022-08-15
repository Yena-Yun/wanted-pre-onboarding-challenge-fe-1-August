import { useState } from 'react';

const UseInputState = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const reset = () => setValue('');

  return [value, onChangeHandler, reset];
};

export default UseInputState;
