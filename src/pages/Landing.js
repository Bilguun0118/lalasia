import "../style/Landing.css";
import { nanoid } from "nanoid";

const title = [
  {
    _id: nanoid(),
    title: "Discover Furniture With High Quality Wood",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.",
    img: "../assets/Rectangle.jpg",
  }
]

export const Landing = () => {
  return (
    <div className="flex flex-d align-items justify-content">
      {title.map((e) => (
        <div>
          <h1>{e.title}</h1>
          <span>{e.text}</span>
          <input type="text" placeholder="Search property"/>
          <img src={e.img} alt="img" />
        </div>
      ))}
      <img src={require() } alt="" />
      
      <img src={require("../assets/Rectangle.svg")} alt="" />
      <div>
        <div>
          <div>
            <span>benefits</span>
            <span>Benefits when using our services</span>
          </div>
          <div>
            <span>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </span>
          </div>
        </div>
        <div>
          <div>card</div>
          <div>card</div>
          <div>card</div>
        </div>
      </div>
      <div>
        <span>two</span>
        <h1>one</h1>
        <span>three</span>
      </div>
      <div className="productCard">
        <img src="" alt="" />
        <span className="category"></span>
        <title></title>
        <span className="cardText"></span>
        <span className="price"></span>
      </div>
      <div>
        <div>
          <div className="outProduct">
            <span>out product</span>
            <h2>crafted by</h2>
          </div>
          <span>al;sdkfj</span>
          <div className="boxGreen"></div>
          <img src={require("../assets/outProduct.jpg")} alt=""/>
        </div>
        <div>
            <div>
                <div className="tooshuu"></div>
            </div>
            <img src={require('../assets/outProduct2.jpg')} alt="" />
        </div>
      </div>
      <div className="testimonials">
        <p>Testimonials</p>
        <h1>what our</h1>
        <span>alk;sdjflkas</span>
        <div className="pidback">
            <div className="pidbackCard">
                <img src={require("../assets/vuesax/bold/quote-up.png")} alt="" />
                <span>text</span>
                <div>
                    <div>
                        <div className="avatar"></div>
                        <div className="avtarName"></div>
                    </div>
                    <div>
                        <img src={require('../assets/star.png')} alt="" />
                        <p>4.5</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="articles">
        <div>
            <div>article title</div>
            <span>text</span>
            <div>
            <img src={require('../assets/article1.jpg')} alt="" />
                <div></div>
                <div></div>
            </div>
        </div>
        <div>
            <div>
                <img src={require('../assets/Rectangle20.jpg')} alt="" />
                <div>
                    <span>span</span>
                    <h1>title</h1>
                    <span>text</span>
                    <div>
                        <div>
                            <div>awatra</div>
                            <div>name</div>
                        </div>
                        <div>date</div>
                    </div>
                </div>
            </div>
            <div>
                <img src={require('../assets/Rectangle20.jpg')} alt="" />
                <div>
                    <span>span</span>
                    <h1>title</h1>
                    <span>text</span>
                    <div>
                        <div>
                            <div>awatra</div>
                            <div>name</div>
                        </div>
                        <div>date</div>
                    </div>
                </div>
            </div>
            <div>
                <img src={require('../assets/Rectangle20.jpg')} alt="" />
                <div>
                    <span>span</span>
                    <h1>title</h1>
                    <span>text</span>
                    <div>
                        <div>
                            <div>awatra</div>
                            <div>name</div>
                        </div>
                        <div>date</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="join we me">
        <h1>Join with me</h1>
        <div>learn me</div>
      </div>
      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
};
