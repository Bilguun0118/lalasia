import "../App.css";
import "../style/Footer.css";
import { nanoid } from "nanoid";

const footerData = [
  {
    _id: nanoid(),
    Title: "Product",
    category: [
      { _id: nanoid(), name: "New Arrivals" },
      { _id: nanoid(), name: "Best Selling" },
      { _id: nanoid(), name: "Home Decor" },
      { _id: nanoid(), name: "Kitchen Set" },
    ],
  },
  {
    _id: nanoid(),
    Title: "Services",
    category: [
      { _id: nanoid(), name: "Catalog" },
      { _id: nanoid(), name: "Blog" },
      { _id: nanoid(), name: "FaQ" },
      { _id: nanoid(), name: "Pricing" },
    ],
  },
  {
    _id: nanoid(),
    Title: "Follow Us",
    category: [
      { _id: nanoid(), name: "Facebook" },
      { _id: nanoid(), name: "Instagram" },
      { _id: nanoid(), name: "Twitter" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="flex align-items space-between">
      <div>
        <div className="logoStyle flex align-items">
          <img src={require("../assets/icon-img/logo.png")} alt="logo" />
          <div>Lalasia</div>
        </div>
        <div className="footerText">
          <span>
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </span>
        </div>
      </div>
      <div className="footerCategory ">
        <div className="footerCategorys flex space-between">
          {footerData.map((data) => (
            <div className="flex flex-d align-start space-around">
              <h2>{data.Title}</h2>
              {data.category.map((categorys) => (
                <span>{categorys.name}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
