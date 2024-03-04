import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utilis";

const ProductsGrid = () => {
  const { product } = useLoaderData();
  return (
    <div className="grid mt-10 mg:grid-cols-2 lg:grid-cols-3  gap-x-[10rem]  ">
      {product.map((item) => {
        const { title, price, image } = item.attributes;
        const rupees = formatPrice(price);
        return (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-10 pt-10 ">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover "
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title ">{title}</h2>
              <p className="text-secondary ">{rupees}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
