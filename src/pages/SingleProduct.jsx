import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utilis";
import { useState } from "react";
import { generateOption } from "../utilis/function";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/cart/cartSlice";

const singleProductsquery = (id) => {
  return {
    queryKey: ["singleProducts", id],
    queryFn: () => customFetch.get(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { data } = await queryClient.ensureQueryData(
      singleProductsquery(params.id)
    );
    const resp = data.data;
    return resp;
  };

const SingleProduct = () => {
  const data = useLoaderData();

  const { title, price, image, company, description, colors } = data.attributes;
  const Inr = formatPrice(price);
  const [productcolor, setProductcolor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const handleSelect = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const cartProduct = {
    cartID: data.id + productcolor,
    productID: data.id,
    image,
    title,
    price,
    company,
    productcolor,
    amount,
  };

  const dispatch = useDispatch();

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{Inr}</p>

          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-2">
            <h1 className="text-lg font-semibold">Colors</h1>
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  type="button"
                  className={`h-6 mt-2 w-6 mr-2 badge ${
                    color === productcolor && "border-2 border-secondary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductcolor(color)}
                ></button>
              );
            })}
          </div>
          <div className="mt-2 form-control w-full max-w-xs">
            <label htmlFor="amount" className="text-lg font-semibold">
              <h1 className="text-lg font-semibold">Amount</h1>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={amount}
              onChange={handleSelect}
            >
              {generateOption(20)}
            </select>
          </div>
          <div className="mt-10">
            <button
              className="btn btn-secondary btn-md"
              onClick={() => dispatch(addItem({ product: cartProduct }))}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;

{
  /* <section className="mt-20 ">
  <div className=" flex gap-x-3">
    <Link to="/">Home</Link>
    <span>{`>`}</span>
    <Link to="/products">Products</Link>
  </div>
  <div className=" grid grid-cols-1 gap- mt-4  sm:grid-cols-2">
    <div className="mr-4 border-2 border-indigo-600">
      <img
        className="w-96 h-96 object-cover rounded-lg lg:w-full"
        src={image}
      />
    </div>
    <div className="p-4  border-2 border-indigo-600">
      <h1 className="text-3xl capitalize font-bold   ">{title}</h1>
      <h4>{company}</h4>
      <h4>{Inr}</h4>
      <p>{description}</p>
    </div>
  </div>
</section>; */
}
