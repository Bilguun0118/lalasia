import "../App.css";
import { nanoid } from "nanoid";

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

export const Article = () => {
  return (
    <>
      <div className="articles flex">
        <div>
          <span>Article</span>
          <h1>The best furniture comes from Lalasia</h1>
          <span>Pellentesque etiam blandit in tincidunt at donec.</span>
          <div>
            <img src={require("../assets/article1.jpg")} alt="" />
            <span>Tips and Trick</span>
            <span>Create Cozy Dinning Room Vibes</span>
            <span>
              Decorating with neutrals bring balance to the dining room...
            </span>
            <span>Read More</span>
          </div>
        </div>
        <div className="flex flex-d">
          {articleCard.map((e) => (
            <div className="flex">
              <img src={e.img} alt="" />
              <div >
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
