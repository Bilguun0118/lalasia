import "../style/Landing.css";
// import { RiSearch2Line } from "react-icons/ri";
import {
  Benefits,
  Product,
  Article,
  OutProduct,
  Testimonial,
} from "../components";
import { LandingPage } from "../data/pagesData";
import { Button } from "../components/Button";


export const Landing = () => {
  return (
    <div className="flex flex-d align-items justify-content">
      {LandingPage.map((data) => (
        <>
          <h1>{data.title}</h1>
          <span>{data.text}</span>
          <img src={data.img} alt="" />
        </>
      ))}
      <Benefits />
      <Product />
      <OutProduct />
      <Testimonial />
      <Article />
      <div className="join we me">
        <h1>Join with me to get special discount</h1>
        <div>learn me</div>
        <Button name = "go"/>
      </div>
    </div>
  );
};
