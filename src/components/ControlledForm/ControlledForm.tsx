import styles from './ControlledForm.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ['image/jpeg', 'image/png'];

const userFormSchema = z
  .object({
    avatar: z
      .any()
      .refine((file) => file?.length > 0, 'You need to upload an avatar')
      .refine(
        (file) => file?.length > 0 && file[0].size <= MAX_FILE_SIZE,
        'File is too big (max 5MB)',
      )
      .refine(
        (file) => file?.length > 0 && ACCEPTED_TYPES.includes(file[0].type),
        'Only PNG or JPEG',
      ),
    name: z.string().regex(/^[A-Z]/, 'Must contain first uppercased letter'),

    gender: z.enum(['male', 'female'], {
      message: 'Select your gender',
    }),

    age: z.number().min(0, 'No negative values'),

    country: z.string().min(1, 'Select a country'),

    email: z.email('Invalid email address'),

    tel: z.string().min(10, 'Enter a valid phone number'),

    password: z
      .string()
      .regex(/[A-Z]/, 'Must contain at least one upper case letter')
      .regex(/[a-z]/, 'Must contain at least one lower case letter')
      .regex(/\d/, 'Must contain at least one number')
      .regex(/[!@#$%^&*()]/, 'Must contain at least on special character'),

    passwordRepeat: z.string(),
    terms: z.boolean().refine((v) => v === true, 'You must accept the terms'),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: 'Password do not match',
    path: ['passwordRepeat'],
  });

type UserForm = z.infer<typeof userFormSchema>;

export default function ControlledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
    mode: 'onChange',
  });

  const avatarFile = watch('avatar');

  function onSubmit(data: UserForm) {
    console.log('check');
    const result = userFormSchema.safeParse(data);

    if (result.success) {
      console.log('success', result);
    } else {
      console.log('error', result);
    }
  }
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
            {...register('avatar')}
          />
          <label htmlFor="avatarUpload" className={styles.uploadBtn}>
            {avatarFile?.length > 0 && !errors.avatar ? 'Uploaded' : 'Upload'}
          </label>
          <span
            style={{
              position: 'absolute',
              color: 'red',
              fontSize: '12px',
              bottom: '-17px',
              left: '90px',
            }}
          >
            {errors.avatar?.message?.toString()}
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: '300px' }}>
            {/* NAME */}
            <fieldset className={styles.field}>
              <label htmlFor="name">Name:</label>
              <div className={styles.inputWrapper}>
                <input id="name" type="text" {...register('name')} />
                <span className={styles.error}>
                  {errors.name?.message?.toString()}
                </span>
              </div>
            </fieldset>

            {/* EMAIL */}
            <fieldset className={styles.field}>
              <label htmlFor="email">Email:</label>
              <div className={styles.inputWrapper}>
                <input id="email" type="email" {...register('email')} />
                <span className={styles.error}>
                  {errors.email?.message?.toString()}
                </span>
              </div>
            </fieldset>

            {/* PASSWORD */}
            <fieldset className={styles.field}>
              <label htmlFor="password">Password:</label>
              <div className={styles.inputWrapper}>
                <input
                  id="password"
                  type="password"
                  {...register('password')}
                />
                <span className={styles.error}>
                  {errors.password?.message?.toString()}
                </span>
              </div>
            </fieldset>

            {/* PASSWORD AGAIN */}
            <fieldset className={styles.field}>
              <label htmlFor="passwordAgain">Password:</label>
              <div className={styles.inputWrapper}>
                <input
                  id="passwordAgain"
                  type="password"
                  {...register('passwordRepeat')}
                />
                <span className={styles.error}>
                  {errors.passwordRepeat?.message?.toString()}
                </span>
              </div>
            </fieldset>
          </div>
          <div style={{ width: '300px' }}>
            {/* AGE */}
            <fieldset className={styles.field}>
              <label htmlFor="age">Age:</label>
              <div className={styles.inputWrapper}>
                <input
                  id="age"
                  type="number"
                  {...register('age', { valueAsNumber: true })}
                />
                <span className={styles.error}>
                  {errors.age?.message?.toString()}
                </span>
              </div>
            </fieldset>

            {/* GENDER */}
            <fieldset className={styles.field}>
              <label>Gender:</label>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <label htmlFor="gender-male">
                    <input
                      id="gender-male"
                      type="radio"
                      value="male"
                      {...register('gender')}
                    />
                    Male
                  </label>
                  <label htmlFor="gender-female">
                    <input
                      id="gender-female"
                      type="radio"
                      value="female"
                      {...register('gender')}
                    />
                    Female
                  </label>
                  <span className={styles.error}>
                    {errors.gender?.message?.toString()}
                  </span>
                </div>
              </div>
            </fieldset>

            {/* COUNTRY */}
            <fieldset className={styles.field}>
              <label htmlFor="country">Country:</label>
              <div className={styles.inputWrapper}>
                <select id="country" defaultValue="" {...register('country')}>
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
            </fieldset>

            {/* TEL */}
            <fieldset className={styles.field}>
              <label htmlFor="tel">Tel:</label>
              <div className={styles.inputWrapper}>
                <input id="tel" type="tel" {...register('tel')} />
                <span className={styles.error}>
                  {errors.tel?.message?.toString()}
                </span>
              </div>
            </fieldset>
          </div>
        </div>

        {/* TERMS */}
        <div style={{ position: 'relative', marginTop: '10px' }}>
          <label>I accept the terms and agreement </label>
          <input id="terms" type="checkbox" {...register('terms')} />
          <span
            style={{
              position: 'absolute',
              display: 'block',
              color: 'red',
              top: '20px',
              left: '60px',
              width: 'fit-content',
              fontSize: '12px',
            }}
          >
            {errors.terms?.message?.toString()}
          </span>
        </div>
      </div>

      {/* BUTTON SUBMIT */}
      <div style={{ textAlign: 'center' }}>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  );
}
