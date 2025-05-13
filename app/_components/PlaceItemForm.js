"use client";

import React, { useActionState, useEffect } from "react";
import FormInput from "./FormInput";
import CustomForm from "./CustomForm";
import { createPostAction } from "../_lib/actions";
import { useRouter } from "next/navigation";
import SubmitButton from "./SubmitButton";

function PlaceItemForm({ place, user, fn, edit = false }) {
  const btnText = edit ? "Update" : "Save";
  const [state, formAction] = useActionState(fn, {
    message: null,
  });
  const router = useRouter();

  useEffect(() => {
    if (state?.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);
  return (
    <CustomForm action={formAction}>
      {edit && (
        <input type="hidden" name="postId" value={place._id.toString()} />
      )}
      {!edit && (
        <input type="hidden" name="userId" value={user._id.toString()} />
      )}
      {!edit && (
        <div className="flex flex-col ">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            className="bg-accent-900 p-3 outline-none text-gray-500 focus:text-primary-100"
          />
        </div>
      )}
      <FormInput
        label={"title"}
        name={"title"}
        inputElement={"input"}
        type={"text"}
        defaultValue={place?.title ?? ""}
      />
      <FormInput
        label={"description"}
        name={"description"}
        inputElement={"textarea"}
        defaultValue={place?.description ?? ""}
      />
      {state?.message && <p className="text-red-500">{state.message}</p>}
      <div className="flex justify-end">
        <SubmitButton title={btnText} />
      </div>
    </CustomForm>
  );
}

export default PlaceItemForm;
