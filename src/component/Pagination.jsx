import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const noOfpages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlepage = (pageNo) => {
    const searchparam = new URLSearchParams(search);
    searchparam.set("page", pageNo);
    navigate(`${pathname}?${searchparam.toString()}`);
  };
  if (noOfpages.length < 2) return null;

  return (
    <div className="flex justify-end items-center text-xl join">
      <button
        className="btn btn-base-200  join-item btn-xs sm:btn-md"
        onClick={() => {
          let prev = page - 1;
          if (prev < 1) prev = pageCount;
          handlepage(prev);
        }}
      >
        Prev
      </button>
      {noOfpages.map((item) => {
        return (
          <button
            className={`btn btn-base-200 join-item  hover:shadow-2xl transition duration-300 btn-xs sm:btn-md ${
              item === page && "border-1 btn-primary"
            }`}
            onClick={() => handlepage(item)}
            key={item}
          >
            {item}
          </button>
        );
      })}
      <button
        className="btn btn-base-200 join-item btn-xs sm:btn-md"
        onClick={() => {
          let prev = page + 1;
          if (prev > pageCount) prev = 1;
          handlepage(prev);
        }}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
