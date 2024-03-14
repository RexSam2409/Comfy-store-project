// import { useLoaderData } from "react-router-dom";
import { Hero } from "../component";
import FeaturedProducts from "../component/FeaturedProducts";
import { customFetch } from "../utilis/index";

const featuredProductsquery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch.get("/products?featured=true"),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsquery);
  const product = response.data.data;
  // console.log({ product });
  return { product };
};

const Landing = () => {
  // const data = useLoaderData();
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
export default Landing;
