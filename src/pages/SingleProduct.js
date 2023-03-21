import "../App.css";
import "../style/SingleProduct.css";
import { productCard } from "../data/productCard";
import { useNavigate, useParams } from "react-router-dom";

export const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // get product
  const singleProduct = productCard.find((product) => product._id === productId);

  console.log(typeof productId);

  const { _id, img, category, title, text, price, link, details } =
    singleProduct;

  console.log("product id", productId);
  console.log("product - ", singleProduct);

  return (
    <div className="singleProduct-Container flex flex-d align-items justify-content">
      <button onClick={() => navigate(-1)}>back</button>
      {/* <button onClick={() => navigate("/products")}>Product</button> */}
      <div className="singleProduct flex align-items justify-content">
        <div className="img">
          <img src={img} alt="" className="singleProduct-img" />
        </div>
        <div className="texts flex align-start flex-d">
          <h3 className="singleProduct-Title">{title}</h3>
          <span className="singleProduct-text">{text}</span>
          <span className="ColorText">Color</span>
          <span className="singleProduct-text">{details}</span>
          <span className="singleProduct-price">{`$` + price}</span>
          <div className="buyButtons flex space-between">
            <button className="buyButton">buy Now</button>
            <button className="addButton" onClick={() => navigate("/card")}>Add to cart</button>
          </div>
        </div>
      </div>
      <div>
        <h3>Related Items</h3>
        <div>
          <img src={img} alt="" />
          <span>{category}</span>
          <span>{title}</span>
          <span>{text}</span>
          <span>{`$` + price}</span>
        </div>
      </div>
    </div>
  );
};
