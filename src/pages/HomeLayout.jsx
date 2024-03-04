import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading, Navbar } from "../component";

const HomeLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <Navbar />
      {/* <nav className="text-4xl text-primary">Comfy</nav> */}
      <section className="align-element py-8">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </section>
    </>
  );
};
export default HomeLayout;
