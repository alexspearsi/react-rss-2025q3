import styles from './Skeleton.module.css';

export function CardSkeleton() {
  return (
    <div className={styles.card_skeleton}>
      <div className={styles.skeleton_circle}></div>
      <div className={styles.skeleton_texts}>
        <div className={`${styles.skeleton_line} ${styles.short}`}></div>
        <div className={`${styles.skeleton_line} ${styles.long}`}></div>
      </div>
    </div>
  )
}