import { useLoaderData } from "react-router-dom";
import { ProductList } from ".";
import ProductsGrid from "./ProductsGrid";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState } from "react";
const ProductContainer = () => {
  const { meta } = useLoaderData();
  const total = meta.pagination.total;
  const [layout, setLayout] = useState("grid");
  const setStyle = (pattern) => {
    return ` text-xl btn btn-circle btn-sm  ${
      pattern === layout
        ? "btn-primary text-primary-content "
        : "btn-ghost text-based-content"
    }`;
  };
  return (
    <>
      <div className=" mt-24 flex justify-between items-center  border-1 border-red-300 ">
        <div>
          <h1 className="font-medium text-md">
            {total} product{total > 1 && "s"}
          </h1>
        </div>
        <div className="flex gap-x-2">
          <button
            type="button"
            className={setStyle("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            className={setStyle("list")}
            onClick={() => setLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {total === 0 ? (
          "No match found"
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
};
export default ProductContainer;
