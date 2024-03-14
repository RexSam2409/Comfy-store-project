import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, Submit } from "../component";
import { customFetch } from "../utilis";
import { toast } from "react-toastify";
import { loginUser } from "../Features/cart/user/user";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(`data:${data}`);
    try {
      const response = await customFetch.post("/auth/local", data);
      console.log(`response:${response.data}`);
      toast.success("logged successfully");
      store.dispatch(loginUser(response.data));
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginuser = async () => {
    try {
      const resp = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(resp.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("error in guest");
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput label="Email" name="identifier" type="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <Submit text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginuser}
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
