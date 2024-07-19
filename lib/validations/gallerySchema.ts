// src/schemas/gallery-schema.ts
import { z } from 'zod';

export const gallerySchema = z.object({
  title: z.string().min(1, 'Title is required'),
  imageUrl: z.string().url('Invalid URL'),
});

export type GalleryFormValues = z.infer<typeof gallerySchema>;


