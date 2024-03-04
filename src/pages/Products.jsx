import Filter from "../component/Filter";
import Pagination from "../component/Pagination";
import ProductContainer from "../component/ProductContainer";
import { customFetch } from "../utilis/index";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const { data } = await customFetch.get("/products", { params });
  const product = data.data;
  const meta = data.meta;

  return { product, meta, params };
};

const Products = () => {
  return (
    <>
      <Filter />
      <ProductContainer />
      <Pagination />
    </>
  );
};
export default Products;
