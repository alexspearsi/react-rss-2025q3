import styles from './Main.module.css';

type Props = {
  children: React.ReactNode;
};

export function Main({ children }: Props) {
  return (
    <main className={styles.main}>
      {children ? children : (
        <p className={styles.nothing_found}>
          We searched the multiverse... and found nothing
        </p>
      )}
    </main>
  );
}
