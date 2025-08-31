import styles from './Loading.module.css';

export function Loading() {
  const rows = Array.from({ length: 20 });

  return (
    <>
      {rows.map((_, index) => (
        <tr key={index}>
          <td>
            <div className={styles.skeleton}></div>
          </td>
          <td>
            <div className={styles.skeleton}></div>
          </td>
          <td>
            <div className={styles.skeleton}></div>
          </td>
        </tr>
      ))}
    </>
  );
}
