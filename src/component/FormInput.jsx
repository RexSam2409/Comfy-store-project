import PropTypes from "prop-types";

const FormInput = (props) => {
  const { label, defaultValue, name, type, size } = props;
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text ">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size} `}
      />
    </div>
  );
};
FormInput.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};
export default FormInput;
