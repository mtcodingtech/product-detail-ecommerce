import { links } from "../../utils/dummyData";

function NavLinks() {
  return (
    <ul className="md:flex items-center gap-8 hidden">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
