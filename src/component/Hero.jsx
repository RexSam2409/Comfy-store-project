import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;

// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <div className="flex  items-center gap-24 border-2 border-indigo-600">
//       <div className=" border-2 border-indigo-600 gap-2 max-w-md sm:gap-x-6 ">
//         <div>
//           <h1 className="text-4xl mt-6 font-bold sm:text-6xl ">
//             We are changing the way people shop
//           </h1>
//           <p className="mt-6 text-lg">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
//             repellat explicabo enim solutas temporibu asperiores aut obcaecati
//             perferendis porro nobis.
//           </p>

//           <Link to="/porducts" className="uppercase btn btn-primary">
//             our products
//           </Link>
//         </div>
//       </div>
//       <div className=" border-2 border-red-600 hidden h-[28rem] lg:carousel carousel-end rounded-box max-w-md">
//         <div className="carousel-item">
//           <img
//             src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
//             alt="Drink"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
//             alt="Drink"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
//             alt="Drink"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
//             alt="Drink"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
//             alt="Drink"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
//             alt="Drink"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
//             alt="Drink"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Hero;
