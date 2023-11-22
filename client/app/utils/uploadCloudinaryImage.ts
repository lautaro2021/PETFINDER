import axios from "axios";

export const uploadImage = async (file: File) => {
  const cloudinaryForm = new FormData();
  cloudinaryForm.append("file", file);
  cloudinaryForm.append(
    "upload_preset",
    `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`
  );
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      cloudinaryForm
    );
    return res.data.url;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
