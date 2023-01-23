import { ArticleCard } from "../data/articleCard";
import { ArticlePage } from "../data/pagesData";

export const Article = () => {
  return (
    <div className="flex flex-d align-items justify-content">
      {ArticlePage.map((data) => (
        <>
          <div className="containerTitle flex flex-d align-items justify-content">
            <h1 className="bigTitle">{data.title}</h1>
            <span className="bigText">{data.text}</span>
          </div>
          <img src={data.img} alt="" />
        </>
      ))}
      <h1>Article</h1>
      <span>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </span>
      {/* <div>
        <img
          src={require("../assets/page/article/ArticlePage.png")}
          alt="img"
        />
        <div>
          <span>Tips and Trick</span>
          <span>
            This 400-Square-Foot New York Apartment Is Maximized With Custom
            Millwork
          </span>
          avatar
        </div>
      </div> */}
      <div>
        <span>Daily News</span>
        <h2>Today top headlines</h2>
        {ArticleCard.map((card) => (
          <>
            <img src={card.img} alt="" />
            <span>{card.cotegory}</span>
            <h2>{card.title}</h2>
            <span>{card.text}</span>
            <div>
              {card.user.map((avatar) => (
                <>
                  {/* <img src={avatar.img} alt="" /> */}
                  <span>{avatar.name}</span>
                  <span>{avatar.date}</span>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
      <div>
        <span>Trending Topics</span>
        <h2>Popular last week</h2>

        <div>
          <nav>
            <ul>
              <li>All</li>
              <li>Tips and Trick </li>
              <li>Intrerior Design</li>
              <li>Design Inspiration</li>
              <li>Color Guide</li>
            </ul>
          </nav>
          <button>Filter</button>
        </div>
        {ArticleCard.map((card) => (
          <>
            {/* <img src={card.img} alt="" /> */}
            <div>
              <span>{card.cotegory}</span>
              <h2>{card.title}</h2>
              <span>{card.text}</span>
              <div>
                {card.user.map((avatar) => (
                  <>
                    {/* <img src={avatar.img} alt="" /> */}
                    <h2>{avatar.name}</h2>
                    <span>{avatar.date}</span>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
        <button>Load More</button>
      </div>
      <div>
        <h2>Subscribe our newsletter</h2>
        <button>Let's Talk</button>
      </div>
    </div>
  );
};
