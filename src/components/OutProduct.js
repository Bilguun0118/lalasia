import "../App.css";

export const OutProduct = () => {
  return (
    <>
      <div className="flex align-items space-between">
        <div>
          <div className="outProduct flex flex-d ">
            <span>out product</span>
            <h2>crafted by</h2>
            <span>al;sdkfj</span>
            <button className="boxGreen">Learn More</button>
          </div>
          <img src={require("../assets/page/landing/outProduct.jpg")} alt="" />
        </div>
        <div>
          <div>
            <div className="tooshuu flex">
              <div className="flex flex-d">
                <span>20+</span>
                <span>Years Experience</span>
              </div>
              <div className="flex flex-d">
                <span>483</span>
                <span>Happy Client</span>
              </div>
              <div className="flex flex-d">
                <span>150+</span>
                <span>Project Finished</span>
              </div>
            </div>
          </div>
          <img src={require("../assets/page/landing/outProduct2.jpg")} alt="" />
        </div>
      </div>
    </>
  );
};
