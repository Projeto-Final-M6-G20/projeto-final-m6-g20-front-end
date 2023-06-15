import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('Email obrigatorio'),
  password: z.string().nonempty('Senha obrigatoria')
});

export type LoginData = z.infer<typeof LoginSchema>;
