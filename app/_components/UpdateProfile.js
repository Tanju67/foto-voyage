"use client";

import React, { useActionState, useEffect } from "react";
import CustomForm from "./CustomForm";
import FormInput from "./FormInput";
import { useRouter } from "next/navigation";
import { updateUserProfile } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfile({ user }) {
  const [state, formAction] = useActionState(updateUserProfile, {
    message: null,
  });
  const router = useRouter();

  useEffect(() => {
    if (state?.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Update your profile</h2>
      <CustomForm action={formAction}>
        <input type="hidden" name="userId" value={user._id.toString()} />
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
        <FormInput
          label={"fullName"}
          inputElement={"input"}
          type={"text"}
          defaultValue={user.fullName ?? ""}
        />

        {state?.message && <p className="text-red-500">{state.message}</p>}

        <div className="flex justify-end">
          <SubmitButton title={"Update"} />
        </div>
      </CustomForm>
    </div>
  );
}

export default UpdateProfile;
