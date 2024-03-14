import Filter from "../component/Filter";
import Pagination from "../component/Pagination";
import ProductContainer from "../component/ProductContainer";
import { customFetch } from "../utilis/index";

const productsQuery = (queryparams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryparams;
  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch.get("/products", { params: queryparams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await queryClient.ensureQueryData(productsQuery(params));
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
