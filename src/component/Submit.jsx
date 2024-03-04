/* eslint-disable react/prop-types */

import { useNavigation } from "react-router-dom";

const Submit = ({ text }) => {
  const navigation = useNavigation();
  console.log(navigation.state);
  const isLoading = navigation.state === "submitting";

  return (
    <div className="place-items-center ">
      <button
        type="submit"
        className="btn btn-primary btn-block  "
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className="loading loading-spinner"></span>
            sending...
          </>
        ) : (
          text || "submit"
        )}
      </button>
    </div>
  );
};
export default Submit;

{
  /* <button className="btn">
  <span className="loading loading-spinner"></span>
  loading
</button> */
}
