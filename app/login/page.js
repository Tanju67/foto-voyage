import LoginForm from "../_components/LoginForm";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 my-10 items-center px-10">
      <h2 className="text-3xl font-semibold">
        Sign in to access your user account
      </h2>
      <LoginForm />
    </div>
  );
}
