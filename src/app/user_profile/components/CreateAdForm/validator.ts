import { z } from 'zod';

export const NewAdSchema = z.object({
  id: z.string(),
  brand: z.string({ required_error: 'Campo obrigatário' }),
  model: z.string({ required_error: 'Campo obrigatário' }),
  title: z.string(),
  year: z.string().optional(),
  fuel_type: z.string().optional(),
  milleage: z.string({ required_error: 'Campo obrigatário' }),
  color: z.string({ required_error: 'Campo obrigatário' }),
  price: z.string({ required_error: 'Campo obrigatário' }),
  fipe_price: z.number().optional(),
  description: z.string({ required_error: 'Campo obrigatário' }),
  is_available: z.boolean(),
  is_good_price: z.boolean().optional(),
  published: z.boolean().optional(),
  urls: z.string().array().optional()
});

export type NewAdData = z.infer<typeof NewAdSchema>;
