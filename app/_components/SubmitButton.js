import React from "react";
import SpinnerMini from "./SpinnerMini";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ title }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className=" rounded-md bg-primary-800 text-white py-4 hover:bg-primary-900 transition-all px-6 w-full grid items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-600"
    >
      {pending ? <SpinnerMini /> : title}
    </button>
  );
}
