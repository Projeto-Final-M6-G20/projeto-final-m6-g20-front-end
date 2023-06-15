import { z } from 'zod';

export const userSchema = z.object({
  fullname: z.string(),
  email: z.string(),
  cpf: z.string(),
  cellphone: z.string(),
  birth_date: z.string(),
  description: z.string(),
  is_advertiser: z.boolean(),
  is_buyer: z.boolean(),
  street: z.string(),
  zip_code: z.string(),
  number: z.string(),
  city: z.string(),
  state: z.string(),
  complement: z.string(),
  password: z.string(),
  passwordConfirmed: z.string()
});

export type UserData = z.infer<typeof userSchema>;
