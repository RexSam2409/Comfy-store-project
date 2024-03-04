import { Link } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
];

const Navlinks = () => {
  return (
    <>
      {links.map((item) => {
        const { id, url, text } = item;
        return (
          <li key={id}>
            <Link to={url} className="uppercase">
              {text}
            </Link>
          </li>
        );
      })}
    </>
  );
};
export default Navlinks;
