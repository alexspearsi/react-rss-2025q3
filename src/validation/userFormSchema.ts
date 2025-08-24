import { z } from 'zod';
import { countriesList } from '../utils/countriesList';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ['image/jpeg', 'image/png'];

export const userFormSchema = z
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

    country: z
      .string()
      .min(1, 'Select a country')
      .refine((val) => countriesList.includes(val), 'Select a valid country'),

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

export type UserForm = z.infer<typeof userFormSchema>;
export { countriesList };
