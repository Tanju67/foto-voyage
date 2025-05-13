"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerUser } from "../_lib/actions";
import CustomForm from "./CustomForm";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
function RegisterForm() {
  const [state, formAction] = useActionState(registerUser, { message: null });
  const router = useRouter();

  useEffect(() => {
    if (state?.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);
  return (
    <div className="w-1/2">
      <CustomForm action={formAction}>
        <h2 className="text-center text-3xl">Register</h2>
        <FormInput label={"fullName"} type={"text"} />
        <FormInput label={"email"} type={"email"} />
        <FormInput label={"password"} type={"password"} />

        {state?.message && <p className="text-red-500">{state.message}</p>}

        <SubmitButton title="Register" />
        <p className="text-sm">
          Do you have already an account?{" "}
          <Link className="hover:underline text-primary-600" href={"/login"}>
            Login
          </Link>
        </p>
      </CustomForm>
    </div>
  );
}

export default RegisterForm;
