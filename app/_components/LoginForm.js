"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { loginUser } from "../_lib/actions";
import CustomForm from "./CustomForm";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import SignInButton from "./SignInButton";

function LoginForm() {
  const [state, formAction] = useActionState(loginUser, { message: null });
  const router = useRouter();

  useEffect(() => {
    if (state?.message === "Login successful.") {
      router.push("/account");
    }
  }, [state, router]);

  return (
    <div className="w-1/2">
      <CustomForm action={formAction}>
        <h2 className="text-center text-3xl">Login</h2>
        <FormInput label={"email"} type={"email"} />
        <FormInput label={"password"} type={"password"} />
        {state?.message && <p className="text-red-500">{state.message}</p>}
        <SubmitButton title="Login" />
        <p className="text-sm">
          Do you have not any account yet?{" "}
          <Link className="hover:underline text-primary-600" href={"/register"}>
            Register
          </Link>
        </p>
      </CustomForm>
      <SignInButton />
    </div>
  );
}

export default LoginForm;
