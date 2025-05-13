import { v2 as cloudinary } from "cloudinary";
import User from "@/app/_models/user";
import connectDB from "./db";
import Post from "../_models/post";
import mongoose from "mongoose";

// Create a new user
export async function createUser({ fullName, email, password, image }) {
  try {
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email is already registered");
    }

    // Create and save new user
    const newUser = new User({ fullName, email, password, image });
    await newUser.save();

    return newUser;
  } catch (error) {
    throw new Error(error.message || "Failed to create user");
  }
}

export async function createUserIfNotExists({ fullName, email, image }) {
  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) return existingUser;

  const newUser = await User.create({
    fullName,
    email,
    image,
    password: "",
  });

  return newUser;
}

export async function getUserByEmail(email) {
  try {
    await connectDB();
    const user = await User.findOne({ email }).lean();
    if (user) {
      user._id = user._id.toString();
    }
    return user;
  } catch (error) {
    console.error("Kullanıcı bulunamadı:", error);
    return null;
  }
}

export async function getUserById(userId) {
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error("Invalid user ID format");
    }

    const user = await User.findById(userId).lean();
    if (user) {
      // _id'yi string'e dönüştür
      user._id = user._id.toString();
    }
    return user;
  } catch (error) {
    console.error("getUserById error:", error);
    return null;
  }
}

export async function uploadImageToCloudinary(imageFile, oldImageUrl) {
  try {
    if (oldImageUrl) {
      // Eski fotoğrafı Cloudinary'den sil
      const publicId = oldImageUrl.split("/").pop().split(".")[0]; // URL'den public_id'yi al
      console.log("publicId", publicId, oldImageUrl);
      await cloudinary.uploader.destroy("users/" + publicId);
    }

    // Yeni fotoğrafı yükle
    const buffer = await imageFile.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");

    const uploadResponse = await cloudinary.uploader.upload(
      `data:${imageFile.type};base64,${base64Image}`,
      { folder: "users" } // Klasör ismi
    );

    return uploadResponse.secure_url; // Yüklenen fotoğrafın URL'sini döndür
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image.");
  }
}

// Update user data in DB
export async function updateUserInDB(userId, updateData) {
  try {
    await connectDB();

    // Kullanıcıyı bul ve güncelle
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true, // Güncel veriyi döndür
    });

    return updatedUser;
  } catch (error) {
    console.error("Update user error:", error);
    throw new Error("Failed to update user.");
  }
}

export async function createPost(postData) {
  try {
    await connectDB();

    const { title, description, image, userId } = postData;

    if (!title || !description || !image || !userId) {
      throw new Error(
        "All fields (title, description, image, userId) are required."
      );
    }

    const newPost = await Post.create({
      title,
      description,
      image, // Cloudinary URL
      userId,
    });

    return newPost;
  } catch (error) {
    console.error("createPost error:", error);
    throw new Error("Failed to create post.");
  }
}

export async function uploadPostImageToCloudinary(imageFile) {
  if (!imageFile || imageFile.size === 0) {
    throw new Error("Image file is required.");
  }

  try {
    // Resmi Cloudinary'ye yükle
    const buffer = await imageFile.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");

    const uploadResponse = await cloudinary.uploader.upload(
      `data:${imageFile.type};base64,${base64Image}`,
      { folder: "posts" } // Yükleme klasörü
    );

    return uploadResponse.secure_url; // Yüklenen resmin URL'sini döndür
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image.");
  }
}

export async function getPostByUserId(userId) {
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error("Invalid user ID format.");
    }

    const posts = await Post.find({ userId }).sort({ createdAt: -1 }).lean();
    return posts;
  } catch (error) {
    console.error("getPostByUserId error:", error);
    return [];
  }
}

export async function getAllPosts() {
  try {
    await connectDB();

    const posts = await Post.find()
      .populate("userId", "fullName email image") // sadece bu alanları getir
      .sort({ createdAt: -1 }) // en yeniler en üstte
      .lean();

    return posts;
  } catch (error) {
    console.error("getAllPosts error:", error);
    throw new Error("Failed to fetch posts.");
  }
}

export async function getPostById(postId) {
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      throw new Error("Invalid post ID format.");
    }

    const post = await Post.findById(postId).lean();
    if (post) {
      // _id'yi string'e dönüştür
      post._id = post._id.toString();
    }

    return post;
  } catch (error) {
    console.error("getPostById error:", error);
    return null;
  }
}

export async function updatePostById(postId, updateData) {
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      throw new Error("Invalid post ID format.");
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $set: {
          title: updateData.title,
          description: updateData.description,
        },
      },
      { new: true } // güncellenmiş veriyi döndür
    ).lean();

    return updatedPost;
  } catch (error) {
    console.error("updatePostById error:", error);
    return null;
  }
}

export async function deletePostById(postId) {
  try {
    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(postId)) {
      throw new Error("Invalid post ID format.");
    }

    const deletedPost = await Post.findByIdAndDelete(postId);

    return deletedPost;
  } catch (error) {
    console.error("deletePostById error:", error);
    return null;
  }
}

export async function deleteImageFromCloudinary(imageUrl) {
  try {
    // public_id'yi URL'den çıkart
    const segments = imageUrl.split("/");
    const publicIdWithExtension = segments.slice(-2).join("/"); // örn: posts/abc123.jpg
    const publicId = publicIdWithExtension.split(".")[0]; // uzantıyı kaldır: posts/abc123

    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Cloudinary silme hatası:", error);
    return null;
  }
}
