import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-full min-h-screen ">
        <div className="max-w-5xl mx-auto">
          <Navbar />
          <div className="grid grid-cols-2 gap-12">
            <div className="bg-sky-400 h-50">e</div>
            <div className="bg-green-400 h-50">e</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
