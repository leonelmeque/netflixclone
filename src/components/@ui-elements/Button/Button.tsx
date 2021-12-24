import styles from './index.module.css';
import * as React from 'react';
import * as Icons from 'react-feather';
import { forwardRef } from '@chakra-ui/react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'text';
  size: 'lg' | 'md' | 'sm';
  className?: string;
  icon?: string;
}

type _ButtonProps = Omit<ButtonProps, 'label' | 'variant' | 'size'>

type CircleButtonProps = {
  size: number;
  style?: object;
} & _ButtonProps;

// Regular button
const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = (props, ref) => {
  const { label, variant, size, className, icon, ...args } =
    props;
  const Icon = icon ? Icons[icon] : <></>;

  return (
    <button
      ref={ref}
      className={[
        styles.nxBtn,
        styles[variant],
        styles[size],
        className,
      ].join(' ')}
      {...args}>
      {icon && <Icon />}
      <span>{label}</span>
    </button>
  );
};

const CircleButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  CircleButtonProps
> = (props, ref) => {
  const { icon, size, ...args } = props;
  const Icon = icon ? Icons[icon] : <></>;
  return (
    <button
      ref={ref}
      className={styles.circleBtn}
      {...args}>
      <Icon size={size} />
    </button>
  );
};

// Display names
Button.displayName = 'Button';
CircleButton.displayName = 'CircleButton';
const ForwardedCircleButton = forwardRef(CircleButton)
ForwardedCircleButton.displayName = 'CircleButton'
export default forwardRef(Button);
export { ForwardedCircleButton as CircleButton };
