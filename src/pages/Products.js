import "../App.css";
import "../style/Product.css";
import { CgSortAz } from "react-icons/cg";
import { ProductsPage } from "../data/pagesData";
import { productCard } from "../data/productCard";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    //products endees ehlej bn
    <div className="Product-container flex flex-d align-items justify-content">
      {ProductsPage.map((data) => (
        <>
          <div className="containerTitle flex flex-d align-items justify-content">
            <h1 className="bigTitle">{data.title}</h1>
            <span className="bigText">{data.text}</span>
          </div>
          <img src={data.img} alt="" />
        </>
      ))}
      <div className="sortfilter flex space-around">
        <div>
          <input type="text" placeholder=" Search property" />
          <button className="aav">Find Now</button>
        </div>
        <button>Filter</button>
      </div>
      <div className="products">
        <div className="title-product flex space-between">
          <div className="flex align-items">
            <h1 className="total-product-title">Total Product</h1>
            <span className="total-product-count">184</span>
          </div>
          <div className="product-sort-button flex align-items justify-content">
            <CgSortAz size="2em" />
            <span className="product-sort">Sort By</span>
          </div>
        </div>
        <div className="productCards">
          {productCard.map((product) => (
            <>
              <div
                className="product-cards flex flex-d"
              >
                <div className="card-img">
                  <img src={product.img} alt="img" />
                </div>
                <div className="card-description-text flex flex-d space-between">
                  <span className="card-categoryName">{product.category}</span>
                  <h2 className="card-productName">{product.title}</h2>
                  <span className="card-material-description">{product.text}</span>
                  <span className="card-price">{`$` + product.price}</span>
                  <Link to={`/products/${product._id}`}>Detail &#8594;</Link>
                </div>
              </div>
            </>
          ))}
          
        </div>
      </div>
    </div>
  );
};
