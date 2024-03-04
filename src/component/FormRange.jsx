import { useState } from "react";
import { formatPrice } from "../utilis";
import PropTypes from "prop-types";
const FormRange = ({ price }) => {
  const [selectedprice, setSelectedPrice] = useState(price || 100000);
  return (
    <div className="form-control">
      <div className="flex justify-between">
        <h1>Select Price:</h1>
        <span>{formatPrice(selectedprice)}</span>
      </div>
      <input
        type="range"
        name="price"
        min={0}
        max={100000}
        step={1000}
        value={selectedprice}
        onChange={(e) => setSelectedPrice(e.target.value)}
      />
      <div className="flex justify-between text-xs font-bold">
        <h1>0</h1>
        <span>max:{formatPrice(100000)}</span>
      </div>
    </div>
  );
};

FormRange.propTypes = {
  price: PropTypes.string,
};

export default FormRange;
