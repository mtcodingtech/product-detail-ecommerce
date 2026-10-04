import { links } from "../../utils/dummyData";

function Drawer({ setIsDrawerOpen }) {
  return (
    <div className="bg-white h-screen top-0 absolute z-30 w-[70%] p-5">
      <div className="">
        <img
          src="/images/icon-close.svg"
          alt="close"
          onClick={() => setIsDrawerOpen(false)}
        />
      </div>
      <ul className="mt-4 grid gap-3">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Drawer;
