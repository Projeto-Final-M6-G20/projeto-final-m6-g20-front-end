import { z } from 'zod';

export const resetPasswordSchema = z
  .object({
    password: z.string().nonempty('Senha obrigatoria'),
    passwordConfirm: z
      .string()
      .nonempty('Digite a senha novamente')
      .min(1, 'A confirmação de senha é obrigatória')
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: 'As senhas precisam ser iguais',
    path: ['confirm']
  });

export const sendEmailResetPasswordSchema = z.object({
  email: z.string().email('E-mail inválido')
});

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
export type SendEmailResetPasswordData = z.infer<
  typeof sendEmailResetPasswordSchema
>;
