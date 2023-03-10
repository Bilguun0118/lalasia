import "../style/Landing.css";
import "../App.css";
import { Input, Footer } from "../components/index"

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
        <div className="landingPage">
          <div className="containerTitle flex flex-d align-items justify-content landingTitle">
            <h1 className="bigTitle">{data.title}</h1>
            <span className="bigText">{data.text}</span>
          </div>
          <Input/>
          <img src={data.img} alt="" />
        </div>
      ))}
      <Benefits />
      <Product />
      <OutProduct />
      <Testimonial />
      <Article />
      <div className="join we me">
        <h1>Join with me to get special discount</h1>
        <div>learn me</div>
        <Button name="go" />
      </div>
    </div>
  );
};
