import styles from './ControlledForm.module.css';
import { useForm, type SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  gender: 'male' | 'female';
  age: number;
  country: string;
  email: string;
  tel: string;
  password: string;
  passwordRepeat: string;
  terms: boolean;
};

export default function UncontrolledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form Data: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.profile}>
        <h2 className={styles.title}>User's registration</h2>

        {/* AVATAR */}
        <div className={styles.avatarWrapper}>
          <img src="./avatar.jpg" alt="avatar" className={styles.avatar} />
          <input
            id="avatarUpload"
            type="file"
            accept="image/png, image/jpeg"
            style={{ display: 'none' }}
          />
          <label htmlFor="avatarUpload" className={styles.uploadBtn}>
            Upload
          </label>
        </div>

        {/* NAME */}
        <div className={styles.field}>
          <label>Name:</label>
          <div className={styles.inputWrapper}>
            <input
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[A-Z][a-z]*$/,
                  message: 'Invalid name',
                },
              })}
              type="text"
            />
            <span className={styles.error}>
              {errors.name?.message?.toString()}
            </span>
          </div>
        </div>

        {/* GENDER */}
        <div className={styles.field}>
          <label>Gender:</label>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <label>
                <input
                  type="radio"
                  value="male"
                  {...register('gender', { required: 'Please select gender' })}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="female"
                  {...register('gender', { required: 'Please select gender' })}
                />
                Female
              </label>
              <span className={styles.error}>
                {errors.gender?.message?.toString()}
              </span>
            </div>
          </div>
        </div>

        {/* AGE */}
        <div className={styles.field}>
          <label>Age:</label>
          <div className={styles.inputWrapper}>
            <input
              {...register('age', {
                required: 'Age is required',
                min: {
                  value: 0,
                  message: 'Age cannot be less than 0',
                },
              })}
              type="number"
            />
            <span className={styles.error}>
              {errors.age?.message?.toString()}
            </span>
          </div>
        </div>

        {/* COUNTRY */}
        <div className={styles.field}>
          <label>Country:</label>
          <div className={styles.inputWrapper}>
            <select
              {...register('country', { required: 'Please select a country' })}
              defaultValue=""
            >
              <option value="" disabled>
                -- Select country --
              </option>
              <option value="Belaurs">Belarus</option>
              <option value="Russia">Russia</option>
            </select>
            <span className={styles.error}>
              {errors.country?.message?.toString()}
            </span>
          </div>
        </div>

        {/* EMAIL */}
        <div className={styles.field}>
          <label>Email:</label>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email',
                },
              })}
            />
            <span className={styles.error}>
              {errors.email?.message?.toString()}
            </span>
          </div>
        </div>

        {/* TEL */}
        <div className={styles.field}>
          <label>Tel:</label>
          <div className={styles.inputWrapper}>
            <input
              type="tel"
              {...register('tel', {
                required: 'Telephone is required',
              })}
            />
            <span className={styles.error}>
              {errors.tel?.message?.toString()}
            </span>
          </div>
        </div>

        {/* PASSWORD */}
        <div className={styles.field}>
          <label>Password:</label>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                  message: 'Must include: upper, lower, number, special char',
                },
              })}
            />
            <span className={styles.error}>
              {errors.password?.message?.toString()}
            </span>
          </div>
        </div>

        {/* PASSWORD AGAIN */}
        <div className={styles.field}>
          <label>Password:</label>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              {...register('passwordRepeat', {
                required: 'Password repeat is required',
              })}
            />
            <span className={styles.error}>
              {errors.passwordRepeat?.message?.toString()}
            </span>
          </div>
        </div>

        <div className={styles.field}>
          <label>Terms:</label>
          <div className={styles.inputWrapper}>
            <input
              type="checkbox"
              {...register('terms', { required: 'You must accept the Terms' })}
            />
            <span className={styles.error}>
              {errors.terms?.message?.toString()}
            </span>
          </div>
        </div>
      </div>

      {/* BUTTON SUBMIT */}
      <div style={{ textAlign: 'center' }}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
