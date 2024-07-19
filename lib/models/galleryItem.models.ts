import mongoose, { Document, Schema } from 'mongoose';

export interface IGalleryItem extends Document {
  title: string;
  date: Date;
  imageUrl: string;
}

const galleryItemSchema = new Schema<IGalleryItem>({
  title: { type: String, required: true },
  date: { type: Date, default: new Date},
  imageUrl: { type: String, required: true }
});

const GalleryItem = mongoose.model<IGalleryItem>('GalleryItem', galleryItemSchema);

export default GalleryItem;
