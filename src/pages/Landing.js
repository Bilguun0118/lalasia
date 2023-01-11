import "../style/Landing.css";
import { nanoid } from "nanoid";
import { RiSearch2Line } from 'react-icons/ri';
import { Benefits, Product } from "../components";

const title = [
  {
    _id: nanoid(),
    title: "Discover Furniture With High Quality Wood",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.",
    img: require("../assets/Rectangle.jpg"),
  },
];

const BenefitsCard = [
  {
    _id: nanoid(),
    img: require("../assets/benefitsCard1.png"),
    title: "Many Choices",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    _id: nanoid(),
    img: require("../assets/benefitsCard2.png"),
    title: "Fast and On Time",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
  {
    _id: nanoid(),
    img: require("../assets/benefitsCard3.png"),
    title: "Affordable Price",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
  },
];

const productCard = [
  {
    _id: nanoid(),
    img: require("../assets/product1.jpg"),
    category: "Chair",
    title: "White Aesthetic Chair",
    text: "Combination of wood and wool",
    price: "63.47",
  },
  {
    _id: nanoid(),
    img: require("../assets/product2.png"),
    category: "Chair",
    title: "White Aesthetic Chair",
    text: "Combination of wood and wool",
    price: "63.47",
  },
  {
    _id: nanoid(),
    img: require("../assets/product3.png"),
    category: "Chair",
    title: "White Aesthetic Chair",
    text: "Combination of wood and wool",
    price: "63.47",
  },
  {
    _id: nanoid(),
    img: require("../assets/product4.png"),
    category: "Chair",
    title: "White Aesthetic Chair",
    text: "Combination of wood and wool",
    price: "63.47",
  },
];

const articleCard = [
  {
    _id: nanoid(),
    img: require("../assets/article1.jpg"),
    category: "Tips and Trick",
    title: "6 ways to give your home minimalistic vibes",
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar1.png"),
        name: "Jesica Merre",
        date: " new Date()",
      },
    ],
  },
];

export const Landing = () => {
  return (
    <div className="flex flex-d align-items justify-content">
      {title.map((e) => (
        <div className="flex flex-d align-items justify-content">
          <div className="landingPageTitle">
            <h1 className="landingTitle">{e.title}</h1>
            <span className="landingText">{e.text}</span>
          </div>
            <div className="search flex align-items justify-content">
              <RiSearch2Line style={{width: "33px", height: "33px"}}/>
              <input type="text" placeholder="Search property" />
              <button>Search</button>
            </div>
          <img src={e.img} alt="" />
        </div>
      ))}
      <Benefits/>
      <Product />
      <div>
        <div>
          <div className="outProduct">
            <span>out product</span>
            <h2>crafted by</h2>
          </div>
          <span>al;sdkfj</span>
          <div className="boxGreen"></div>
          <img src={require("../assets/outProduct.jpg")} alt="" />
        </div>
        <div>
          <div>
            <div className="tooshuu"></div>
          </div>
          <img src={require("../assets/outProduct2.jpg")} alt="" />
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
                <img src={require("../assets/star.png")} alt="" />
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
            <img src={require("../assets/article1.jpg")} alt="" />
            <div></div>
            <div></div>
          </div>
        </div>
        {articleCard.map((e) => (
          <div>
            <img src={e.img} alt="" />
            <p>{e.category}</p>
            <h1>{e.title}</h1>
            <span>{e.text}</span>
            {e.user.map((child) => (
              <div key={child._id}>
                <img src={child.avatar} alt="one" />
                <span>{child.name}</span>
                <span>{child.date}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="join we me">
        <h1>Join with me to get special discount</h1>
        <div>learn me</div>
      </div>
      <footer>
        <div>
          <div>
            <div>logo</div>
            <div>lalasia</div>
          </div>
          <div>
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </div>
  );
};
