import "../App.css";
import { productCard } from "../data/productCard";
import { Link, useNavigate, useParams } from "react-router-dom"
import { Products } from ".";
import { Product } from "../components";

export const SingleProduct = () => {

  const navigate = useNavigate();
  const { productId } = useParams();

  const singleProduct = productCard.find(e => e._id === parseInt(productId) )

  const {  title, price, img, category } = singleProduct;
  
  console.log("product id", productId );

  return (
    <div className="flex flex-d align-items justify-content">
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate('/products')}>Product</button>
      <div className="singleProduct">
        
        <div className="img"></div>
        <div className="texts">
          <h3>Title</h3>
          <span>text</span>
          <span>Color</span>
          <span>all text</span>
          <span>$53.2</span>
          <div>
            <button>buy Now</button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
