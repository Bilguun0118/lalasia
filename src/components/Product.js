import "../style/Product.css";
import { productCard } from "../data/productCard";

export const Product = () => {
  return (
    <>
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
    </>
  );
};
