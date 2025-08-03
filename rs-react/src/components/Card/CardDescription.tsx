import styles from './Card.module.css';

type Props = {
  children: React.ReactNode;
};

export function CardDescription({ children }: Props) {
  return <div className={styles.description}>{children}</div>;
}
