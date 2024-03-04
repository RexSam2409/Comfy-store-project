import { Form, Link } from "react-router-dom";
import FormFilter from "./FormFilter";
import { FormInput } from "./index";
import { useLoaderData } from "react-router-dom";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filter = () => {
  const { meta, params } = useLoaderData();
  const { search, category, company, order, price, shipping } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center ">
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormFilter
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      <FormFilter
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      <FormFilter
        label="sort by"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      <FormRange price={price} />
      <FormCheckbox
        name="shipping"
        defaultValue={shipping}
        label="free shipping"
        size="checkbox-sm"
      />
      <button type="submit" className="btn-sm btn btn-primary">
        Search
      </button>
      <Link to="/products" className="btn-sm btn btn-accent">
        Reset
      </Link>
    </Form>
  );
};
export default Filter;
