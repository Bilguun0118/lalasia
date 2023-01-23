import "../App.css"
import { nanoid } from "nanoid";
import { ServicesPage } from "../data/pagesData";


const Servic = [
  {
    _id: nanoid(),
    number: "01",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "02",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "03",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "04",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "05",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
  {
    _id: nanoid(),
    number: "06",
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door.",
  },
];

export const Services = () => {
  return (
    <div className="flex flex-d align-items justify-content">
      {ServicesPage.map((data) => (
        <>
          <div className="containerTitle flex flex-d align-items justify-content">
            <h1 className="bigTitle">{data.title}</h1>
            <span className="bigText">{data.text}</span>
          </div>
          <img src={data.img} alt="" />
        </>
      ))}
      <div>
        {Servic.map((e) => (
          <>
            <h1>{e.number}</h1>
            <h4>{e.title}</h4>
            <span>{e.text}</span>
          </>
        ))}
      </div>
      <div>
        <div>
          <div>
            <span className="textCategory">Protofolia</span>
            <h2>Amazing projext we've done before</h2>
          </div>
          <div>
            <span>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </span>
            <span>View Portofolia</span>
          </div>
        </div>
        <div>
          <img src={require("../assets/page/Services/Services1.png")} alt="" />
          <img src={require("../assets/page/Services/Services2.png")} alt="" />
          <img src={require("../assets/page/Services/Services3.png")} alt="" />
        </div>
      </div>
      <div>
        <h1>Are you interested work with us? </h1>
        <button>Let's Talk</button>
      </div>
    </div>
  );
};
