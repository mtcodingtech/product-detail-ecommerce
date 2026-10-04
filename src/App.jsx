import "./App.css";
import CartLogic from "./components/CartLogic";
import Navbar from "./components/Navbar";
import SelectProduct from "./components/SelectProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./components/CustomSlider";

function App() {
  return (
    <>
      <div className="w-full min-h-screen ">
        <div className="max-w-5xl mx-auto">
          <Navbar />
          <div className="w-full md:hidden">
            <CustomSlider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 m-0 md:m-12 place-items-center">
            <div className="hidden md:block">
              <SelectProduct />
            </div>
            <div className="">
              <CartLogic></CartLogic>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
