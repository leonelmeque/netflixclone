import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import styles from './index.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputname?: string;
}


const Input: ForwardRefRenderFunction<HTMLInputElement,InputProps> = (props, ref): JSX.Element => (
  <label htmlFor='' className={`${styles.input}`}>
    <input
      ref={ref}
      data-testid='input'
      id={`id-nx-input-${props.inputname}`}
      autoComplete='false'
      {...props}
    />
  </label>
);
Input.displayName = "Input"
export default forwardRef(Input)
