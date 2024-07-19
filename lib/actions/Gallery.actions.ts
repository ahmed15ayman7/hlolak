"use server";
import { connectDB } from "@/mongoose";
import GalleryItem from "../models/galleryItem.models";
import { revalidatePath } from "next/cache";

interface AddGalleryItemParams {
  title: string;
  path: string;
  imageUrl: string;
}

export const addGalleryItem = async ({
  path,
  title,
  imageUrl,
}: AddGalleryItemParams) => {
  try {
    await connectDB();
    const newGalleryItem = new GalleryItem({
      title,
      imageUrl,
    });
    await newGalleryItem.save();
    console.log(newGalleryItem)
    revalidatePath(path)
    return newGalleryItem;
  } catch (err) {
    console.error(err);
    console.error("Failed to add gallery item!");
  }
};

export const deleteGalleryItem = async (id: number) => {
  try {
    await connectDB();
    const result = await GalleryItem.deleteOne({ id });
    if (result.deletedCount === 1) {
      console.log("Item deleted successfully");
    } else {
      console.log("Item not found");
    }
  } catch (err) {
    console.error(err);
    console.error("Failed to delete gallery item!");
  }
};
export const getAllGalleryItems = async () => {
  try {
    await connectDB();
    const galleryItems = await GalleryItem.find({});
    return galleryItems;
  } catch (err) {
    console.error(err);
    console.error("Failed to fetch gallery items!");
  }
};
