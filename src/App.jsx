import "./App.css";
import CartLogic from "./components/CartLogic";
import Navbar from "./components/Navbar";
import SelectProduct from "./components/SelectProduct";

function App() {
  return (
    <>
      <div className="w-full min-h-screen ">
        <div className="max-w-5xl mx-auto">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 m-0 md:m-12">
            <div className="">
              <SelectProduct />
            </div>
            <div className="h-50">
              <CartLogic></CartLogic>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
