import "../App.css";
import "../style/Product.css";
import { ProductsPage } from "../data/pagesData";
import { Input, Footer } from "../components/index";
import { productCard } from "../data/productCard";

export const Products = () => {
  return (
    //products endees ehlej bn
    <div className="flex flex-d align-items justify-content">
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
          {/* <Input />x */}
          <input type="text" placeholder=" Search property" />
          <button className="aav">Find Now</button>
        </div>
        <button>Filter</button>
      </div>
      <div className="products">
        <div className="flex space-between">
          <div className="flex align-items">
            <h1>Total Product</h1>
            <span>184</span>
          </div>
          <div>
            <span>Sort By</span>
          </div>
        </div>
        <div className="productCards">
          {productCard.map((e) => (
            <div key={e._id} className="product-cards flex flex-d space-around align-start">
              <img src={e.img} alt="img" />
              <span>{e.category}</span>
              <h2>{e.title}</h2>
              <span>{e.text}</span>
              <span>{e.price}</span>
            </div>
          ))}
        </div>
      </div>
      {/* <nav className="pagination flex flex-d">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};
