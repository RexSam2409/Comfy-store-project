import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Orders,
  Products,
  Error,
  Register,
  Login,
  SingleProduct,
} from "./pages/index";
import { ErrorElement } from "./component";
import { loader as landingloader } from "./pages/Landing";
import { loader as singleloader } from "./pages/SingleProduct";
import { loader as productsloader } from "./pages/Products";
import { action as regiterAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { store } from "./Store";
import { loader as checkoutloader } from "./pages/Checkout";
import { action as checkoutAction } from "./component/CheckoutForm";
import { loader as orderloader } from "./pages/Orders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingloader(queryClient),
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsloader(queryClient),
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleloader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutloader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: "orders",
        element: <Orders />,
        loader: orderloader(store, queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: regiterAction,
  },
]);

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};
export default App;
