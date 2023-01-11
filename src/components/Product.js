import { nanoid } from "nanoid";
import "../style/Product.css";

const productCard = [
  {
    _id: nanoid(),
    img: require("../assets/product1.jpg"),
    category: "Chair",
    title: "White Aesthetic Chair",
    text: "Combination of wood and wool",
    price: "63.47",
  },
  {
    _id: nanoid(),
    img: require("../assets/product2.png"),
    category: "Chair",
    title: "White Aesthetic Chair",
    text: "Combination of wood and wool",
    price: "63.47",
  },
  {
    _id: nanoid(),
    img: require("../assets/product3.png"),
    category: "Chair",
    title: "White Aesthetic Chair",
    text: "Combination of wood and wool",
    price: "63.47",
  },
  {
    _id: nanoid(),
    img: require("../assets/product4.png"),
    category: "Chair",
    title: "White Aesthetic Chair",
    text: "Combination of wood and wool",
    price: "63.47",
  },
];
export const Product = () => {
  return (
    <div>
      <span>Product</span>
      <h2>Out popular product</h2>
      <span>
        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non purus parturient.
      </span>
      <div className="products flex ">
        {productCard.map((e) => (
          <div className="productCard">
            <img
              src={e.img}
              alt=""
              style={{ height: "360px", width: "394px" }}
            />
            <span>{e.category}</span>
            <h2>{e.title}</h2>
            <span>{e.text}</span>
            <span>{e.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
