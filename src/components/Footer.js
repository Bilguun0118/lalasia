import "../App.css";
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
    <footer className="flex ">
      <div>
        <div>
          <img src={require("../assets/logo.png")} alt="logo" />
          <div>Lalasia</div>
        </div>
        <div>
          Lalasia is digital agency that help you make better experience iaculis
          cras in.
        </div>
      </div>
      <div className="flex">
        <div className="flex ">
          {footerData.map((data) => (
            <div className="flex flex-d">
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
