import "../App.css";
import "../style/SingleProduct.css"
import { productCard } from "../data/productCard";
import { useNavigate, useParams } from "react-router-dom";

export const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // get product
  const singleProduct = productCard.find(
    (product) => product._id === productId
  );

  console.log(typeof productId);

  const { _id, img, category, title, text, price, link, details } =
    singleProduct;

  console.log("product id", productId);
  console.log("product - ", singleProduct);

  return (
    <div className="flex flex-d align-items justify-content">
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate("/products")}>Product</button>
      <div className="singleProduct flex align-items space-around">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="texts flex align-start flex-d">
          <h3 className="singleProduct-Title">{title}</h3>
          <span className="singleProduct-text">{text}</span>
          <span className="ColorText">Color</span>
          <span className="singleProduct-text">{details}</span>
          <span className="singleProduct-price">{`$` + price}</span>
          <div>
            <button>buy Now</button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
