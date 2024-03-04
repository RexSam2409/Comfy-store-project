import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utilis";

const ProductsGrid = () => {
  const { product } = useLoaderData();
  return (
    <div className="card grid mt-10 gap-y-10 ">
      {product.map((item) => {
        const { title, price, image } = item.attributes;
        const rupees = formatPrice(price);
        return (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="w-2/4 h-64 sm:w-full sm:h-52 flex flex-wrap group hover:shadow-2xl rounded-xl shadow-xl duration-300 "
          >
            <img
              src={image}
              className="w-32 h-32  rounded-3xl object-cover sm:w-52 sm:h-52 p-4 group-hover:scale-105"
            />
            <div className=" card-body ">
              <h1 className="card-title">{title}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
// border-2 border-red-600
