// import { useLoaderData } from "react-router-dom";
import { Hero } from "../component";
import FeaturedProducts from "../component/FeaturedProducts";
import { customFetch } from "../utilis/index";
export const loader = async () => {
  const response = await customFetch.get("/products?featured=true");
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
