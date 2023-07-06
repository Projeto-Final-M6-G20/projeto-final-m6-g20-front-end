import { z } from 'zod';

export const NewAdSchema = z.object({
  title: z.string({ required_error: 'Campo obrigatário' }),
  brand: z.string({ required_error: 'Campo obrigatário' }),
  model: z.string({ required_error: 'Campo obrigatário' }),
  year: z.number({ required_error: 'Campo obrigatário' }),
  fuel_type: z.string({ required_error: 'Campo obrigatário' }),
  mileage: z.string({ required_error: 'Campo obrigatário' }),
  color: z.string({ required_error: 'Campo obrigatário' }),
  price: z.string({ required_error: 'Campo obrigatário' }),
  fipe_price: z.number({ required_error: 'Campo obrigatário' }),
  description: z.string({ required_error: 'Campo obrigatário' }),
  urls: z.string().array().optional()
});

export type NewAdData = z.infer<typeof NewAdSchema>;
