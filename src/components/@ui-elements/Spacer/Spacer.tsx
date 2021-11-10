import styles from './styles.module.css';
import * as React from 'react';
interface SpacerInterface
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  size:
    | 'xxs'
    | 'xs'
    | 'ss'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl';
}

const Spacer = ({ size }) => {
  return (
    <div
      className={`${styles[size]} ${styles.spacer}`}></div>
  );
};

export default Spacer;
