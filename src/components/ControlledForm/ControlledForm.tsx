import styles from './ControlledForm.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userFormSchema, type UserForm } from '../../validation/userFormSchema';

import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../../state/form/formSlice';
import { convertToBase64 } from '../../utils/convertToBase64';
import type { RootState } from '../../state/store';
import { useState } from 'react';

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

  const countries = useSelector((state: RootState) => state.countries);
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const avatarFile = watch('avatar');

  async function onSubmit(data: UserForm) {
    const result = userFormSchema.safeParse(data);

    if (result.success) {
      const base64 = await convertToBase64(avatarFile[0]);
      dispatch(saveUserData({ ...data, avatar: base64 }));
      console.log('success', result);
    } else {
      console.log('error', result);
    }
  }

  const suggestion = countries.find((country) =>
    country.toLowerCase().startsWith(query.toLowerCase()),
  );

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
                <input
                  type="text"
                  value={query}
                  {...register('country', {
                    onChange: (e) => {
                      setQuery(e.target.value);
                    },
                  })}
                />
                {suggestion && query && (
                  <span className={styles.suggestion}>
                    {query}
                    <span>{suggestion.slice(query.length)}</span>
                  </span>
                )}
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
