import * as React from 'react';
import styles from './index.module.css';

interface InputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  inputName: string;
  placeholder: string;
}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    { inputName, className, placeholder, ...args },
    ref
  ): JSX.Element => {
    return (
      <label
        className={[styles.input, className].join(' ')}>
        <input
          ref={ref}
          data-testid='input'
          id={`id-nx-input-${inputName}`}
          placeholder={placeholder}
          autoComplete='false'
          {...args}
        />
        <label htmlFor={`id-nx-input-${inputName}`}>
          {placeholder}
        </label>
      </label>
    );
  }
);

export default Input;
