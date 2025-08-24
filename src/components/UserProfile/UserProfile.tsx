import styles from './UserProfile.module.css';

import { useSelector } from 'react-redux';
import { type RootState } from '../../state/store';

export default function UserProfile() {
  const { formData } = useSelector((state: RootState) => state.userForm);

  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>User's information</h2>

      <div className={styles.avatar}>
        <img
          src={formData?.avatar || './avatar.jpg'}
          alt={formData?.avatar ? 'user avatar' : 'default avatar'}
        />
      </div>

      <div className={styles.field}>
        <label>Name:</label>
        <span>{formData?.name}</span>
      </div>

      <div className={styles.field}>
        <label>Gender:</label>
        <span>{formData?.gender}</span>
      </div>

      <div className={styles.field}>
        <label>Age:</label>
        <span>{formData?.age}</span>
      </div>

      <div className={styles.field}>
        <label>Country:</label>
        <span>{formData?.country}</span>
      </div>

      <div className={styles.field}>
        <label>Email:</label>
        <span>{formData?.email}</span>
      </div>

      <div className={styles.field}>
        <label>Phone number:</label>
        <span>{formData?.tel}</span>
      </div>
    </div>
  );
}
