import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearcart } from "../Features/cart/cartSlice";
import { logoutUser } from "../Features/cart/user/user";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);
  const queryClient = useQueryClient();
  const handlelogout = () => {
    navigate("/");
    dispatch(clearcart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content ">
      <div className="align-element flex justify-center sm:justify-end  ">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handlelogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link
              to="/login"
              className="capitalize link link-hover text-xs sm:text-sm  "
            >
              sign in / Guest
            </Link>
            <Link
              to="/register"
              className="capitalize link link-hover text-xs sm:text-sm"
            >
              {" "}
              create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
