import styles from './Card.module.css';

type Props = {
  children: React.ReactNode;
};

export function CardTitle({ children }: Props) {
  return <h2 className={styles.title}>{children}</h2>;
}
