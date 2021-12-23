import styles from './index.module.css';

type DividerProps = {
  size: number;
};

export default function Divider({
  size,
}: DividerProps): JSX.Element {
  return <div className={styles.space}></div>;
}
