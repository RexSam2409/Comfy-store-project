import { Form, Link, redirect } from "react-router-dom";
import { FormInput, Submit } from "../component";
import { customFetch } from "../utilis";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const res = await request.formData();
  const data = Object.fromEntries(res);
  try {
    await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="grid place-items-center h-screen ">
      <Form
        method="POST"
        className="card shadow-lg bg-base-100 w-96  p-8 gap-y-4"
      >
        <h4 className="text-3xl text-center font-bold ">Register</h4>
        <FormInput label="Username" name="username" type="text" />
        <FormInput label="Email" name="email" type="email" />
        <FormInput label="password" name="password" type="password" />
        <div className="mt-4">
          <Submit text="register" />
        </div>
        <div className="text-center mt-2">
          <span>Already a member?</span>
          <Link
            className="ml-2 link link-hover link-primary capitalize"
            to="/login"
          >
            login
          </Link>
        </div>
      </Form>
    </section>
  );
};
export default Register;

// position: relative;
//   display: flex;
//   flex-direction: column;
//   border-radius: var(--rounded-box, 1rem/* 16px */)
