import { z } from 'zod';

const urlSchema = z.object({
  url: z.string()
});

export const NewAdSchema = z.object({
  id: z.string(),
  brand: z.string({ required_error: 'Campo obrigatário' }),
  model: z.string({ required_error: 'Campo obrigatário' }),
  title: z.string(),
  year: z.string().optional(),
  fuel_type: z.string().optional(),
  mileage: z.string({ required_error: 'Campo obrigatário' }),
  color: z.string({ required_error: 'Campo obrigatário' }),
  price: z.string({ required_error: 'Campo obrigatário' }),
  fipe_price: z.string().optional(),
  description: z.string({ required_error: 'Campo obrigatário' }),
  is_available: z.boolean(),
  is_good_price: z.boolean().optional(),
  published: z.boolean().optional(),
  images: z.array(urlSchema),
  url_image: z.string({ required_error: 'Campo obrigatário' }),
  images_1: z.string().optional(),
  images_2: z.string().optional(),
  images_3: z.string().optional(),
  images_4: z.string().optional(),
  images_5: z.string().optional(),
  images_6: z.string().optional()
});

export type NewAdData = z.infer<typeof NewAdSchema>;
