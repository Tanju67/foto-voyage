export async function getCloudinary() {
  const cloudinaryModule = await import("cloudinary");
  const cloudinary = cloudinaryModule.v2;

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  return cloudinary;
}
