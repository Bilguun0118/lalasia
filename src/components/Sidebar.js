import { nanoid } from "nanoid";
import "../style/Sidebar.css";

const menuItems = [
  {
    _id: nanoid(),
    name: "Product",
    link: "../pages/Landing.js",
  },
  {
    _id: nanoid(),
    name: "Services",
    link: "/services",
  },
  {
    _id: nanoid(),
    name: "Article",
    link: "/article",
  },
  {
    _id: nanoid(),
    name: "About Us",
    link: "/about-us",
  },
];

function Sidebar() {
  return (
    <header className="flex align-items space-around">
      <div className="Logo flex align-items">
        <img src={require("../assets/logo.png")} alt="" />
        <img src={require("../assets/Lalasia.png")} alt="" />
      </div>
      <div className="NavS flex space-between">
        {menuItems.map((item) => (
          <a href={item.link} key={item._id}>
            {item.name}
          </a>
        ))}
      </div>
      <div>
        <img src={require("../assets/bag.png")} alt="" />
        <img src={require("../assets/user.png")} alt="" />
      </div>
    </header>
  );
}

export default Sidebar;
