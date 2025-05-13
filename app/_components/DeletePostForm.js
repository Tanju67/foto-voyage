"use client";

import React, { useActionState, useEffect } from "react";
import { deletePostAction } from "../_lib/actions";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

export default function DeletePostForm({ postId }) {
  const { pending } = useFormStatus();
  const [state, formAction] = useActionState(deletePostAction, {
    message: null,
  });
  const router = useRouter();

  useEffect(() => {
    if (state?.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);
  return (
    <form
      action={formAction}
      className="flex-1 hover:bg-primary-900 transition-all flex items-center justify-center"
    >
      <input type="hidden" name="postId" value={postId} />
      <button disabled={pending}>
        {pending ? <SpinnerMini /> : "🗑️ Delete"}
      </button>
    </form>
  );
}
