import styles from './UserProfile.module.css';

export default function UserProfile() {
  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>User's information</h2>

      <div className={styles.avatar}>
        <img src="./avatar.jpg"></img>
      </div>

      <div className={styles.field}>
        <label>Name:</label>
        <span>Alexander</span>
      </div>

      <div className={styles.field}>
        <label>Gender:</label>
        <span>Male</span>
      </div>

      <div className={styles.field}>
        <label>Age:</label>
        <span>26</span>
      </div>

      <div className={styles.field}>
        <label>Country:</label>
        <span>Israel</span>
      </div>

      <div className={styles.field}>
        <label>Email:</label>
        <span>alex@yandex.ru</span>
      </div>

      <div className={styles.field}>
        <label>Phone number:</label>
        <span>+972-50-123-4567</span>
      </div>
    </div>
  );
}
