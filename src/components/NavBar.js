import { nanoid } from "nanoid";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

const menuItems = [
  {
    _id: nanoid(),
    name: "Product",
    link: "product",
  },
  {
    _id: nanoid(),
    name: "Services",
    link: "services",
  },
  {
    _id: nanoid(),
    name: "Article",
    link: "article",
  },
  {
    _id: nanoid(),
    name: "About Us",
    link: "about-us",
  },
];

const menuIcons = [
  {
    _id: nanoid(),
    img: require("../assets/bag.png"),
    link: "product",
  },
  {
    _id: nanoid(),
    img: require("../assets/user.png"),
    link: "about-us",
  },
];

export const NavBar = () => {
  return (
    // <header className="flex align-items space-between">
    <nav className="flex align-items space-between">
      <Link to="/" className="Logo flex align-items">
        <img src={require("../assets/logo.png")} alt="" />
        <img src={require("../assets/Lalasia.png")} alt="" />
      </Link>
      <div className="flex align-items space-between ">
        {menuItems.map((e) => (
          <>
            <Link className="item" to={e.link}>{e.name}</Link>
          </>
        ))}
      </div>
      <div className="flex align-items space-between">
        {menuIcons.map((e) => (
          <Link className="iconMenu" to={e.link}>
            <img src={e.img} alt="img" />
          </Link>
        ))}
      </div>
    </nav>
  );
};
