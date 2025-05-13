"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import User from "../_models/user";
import { signIn, signOut } from "./auth";
import {
  createPost,
  deleteImageFromCloudinary,
  deletePostById,
  updatePostById,
  updateUserInDB,
  uploadImageToCloudinary,
  uploadPostImageToCloudinary,
} from "./data-service";
import connectDB from "./db";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function registerUser(prevState, formData) {
  try {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!fullName || !email || !password) {
      return { message: "All fields are required." };
    }

    if (fullName.length < 3 || fullName.length > 50) {
      return {
        message:
          "Full name must be at least 3 characters long and at most 50 characters long.",
      };
    }

    if (password.length < 6) {
      return { message: "Password must be at least 6 characters long." };
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { message: "An account with this email already exists." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
      image: "", // temporarily empty
    });

    return { message: "Registration successful.", redirectTo: "/login" };
  } catch (error) {
    return {
      message: "An error occurred during registration. Please try again.",
    };
  }
}

export async function loginUser(prevState, formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return { message: "All fields are required." };
    }

    await connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      return {
        message: "No user found with this email address.",
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { message: "Incorrect password." };
    }

    await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    return { message: "Login successful." };
  } catch (error) {
    console.error("Login error:", error);
    return {
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

export async function updateUserProfile(prevState, formData) {
  const fullName = formData.get("fullName");
  const imageFile = formData.get("image"); // Yeni fotoğraf
  const userId = formData.get("userId");
  const oldImage = await User.findById(userId).select("image");
  const oldImageUrl = oldImage.image;

  if (fullName.length < 3 || fullName.length > 50) {
    return {
      message:
        "Full name must be at least 3 characters long and at most 50 characters long.",
    };
  }

  if (!imageFile || imageFile.size === 0) {
    return {
      message: "Image is required.",
    };
  }

  try {
    // Eğer yeni bir fotoğraf varsa, Cloudinary'ye yükle ve eskiyi sil
    let imageUrl = oldImageUrl;
    if (imageFile && imageFile.name) {
      imageUrl = await uploadImageToCloudinary(imageFile, oldImageUrl); // Yeni fotoğrafı yükle
    }

    // Kullanıcıyı güncelle
    const updatedUser = await updateUserInDB(userId, {
      fullName,
      image: imageUrl, // Yeni fotoğraf URL'si
    });
    revalidatePath("/account");
    return { message: "Profile updated successfully.", redirectTo: "/account" };
  } catch (error) {
    console.error("updateUserProfile error:", error);
    return { message: "An error occurred. Please try again." };
  }
}

export async function createPostAction(prevState, formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const imageFile = formData.get("image"); // type: File
  const userId = formData.get("userId");

  if (!title || !description) {
    return { message: "Title and description are required." };
  }

  if (title.length < 3 || title.length > 50) {
    return {
      message: "Title must be between 3 and 50 characters long.",
    };
  }

  if (description.length < 50 || description.length > 500) {
    return {
      message: "Description must be between 50 and 500 characters long.",
    };
  }

  if (!imageFile || imageFile.size === 0) {
    return {
      message: "Image is required.",
    };
  }

  try {
    // 1. Cloudinary'e resmi yükle
    const imageUrl = await uploadPostImageToCloudinary(imageFile);

    // 2. Postu veritabanına kaydet
    await createPost({
      title,
      description,
      image: imageUrl,
      userId,
    });

    return { message: "Post created successfully.", redirectTo: "/account" };
  } catch (error) {
    console.error("createPostAction error:", error);
    return { message: "An error occurred. Please try again." };
  }
}

export async function updatePostAction(prevState, formData) {
  const postId = formData.get("postId");
  const title = formData.get("title");
  const description = formData.get("description");

  if (!postId || !title || !description) {
    return { message: "All fields are required." };
  }

  if (!title || !description) {
    return { message: "Title and description are required." };
  }

  if (title.length < 3 || title.length > 50) {
    return {
      message: "Title must be between 3 and 50 characters long.",
    };
  }

  if (description.length < 50 || description.length > 500) {
    return {
      message: "Description must be between 50 and 500 characters long.",
    };
  }

  try {
    const updatedPost = await updatePostById(postId, { title, description });

    if (!updatedPost) {
      return { message: "Post not found or update failed." };
    }

    return {
      message: "Post updated successfully.",
      redirectTo: `/account`, // yönlendirme örneği
    };
  } catch (error) {
    console.error("updatePostAction error:", error);
    return { message: "An unexpected error occurred." };
  }
}

export async function deletePostAction(prevState, formData) {
  const postId = formData.get("postId");

  if (!postId) {
    return { message: "Post ID is required." };
  }

  try {
    const deletedPost = await deletePostById(postId);

    if (!deletedPost) {
      return { message: "Post not found or deletion failed." };
    }

    // Cloudinary'den resmi sil
    if (deletedPost.image) {
      await deleteImageFromCloudinary(deletedPost.image);
    }

    return {
      message: "Post and image deleted successfully.",
      redirectTo: "/account",
    };
  } catch (error) {
    console.error("deletePostAction error:", error);
    return { message: "An unexpected error occurred." };
  }
}
