import { nanoid } from "nanoid";

const testimonials = [
  {
    _id: nanoid(),
    img: require("../assets/vuesax/bold/quote-up.png"),
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar/avatar1.png"),
        name: "Hanne Cooper",
        star: require("../assets/icon-img/star.png"),
        starNumber: "4.3",
      },
    ],
  },
  {
    _id: nanoid(),
    img: require("../assets/vuesax/bold/quote-up.png"),
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar/avatar1.png"),
        name: "Hanne Cooper",
        star: require("../assets/icon-img/star.png"),
        starNumber: "4.3",
      },
    ],
  },
  {
    _id: nanoid(),
    img: require("../assets/vuesax/bold/quote-up.png"),
    text: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    user: [
      {
        _id: nanoid(),
        avatar: require("../assets/avatar/avatar1.png"),
        name: "Hanne Cooper",
        star: require("../assets/icon-img/star.png"),
        starNumber: "4.3",
      },
    ],
  },
];

export const Testimonial = () => {
  return (
    <div className="testimonials">
      <span>Testimonials</span>
      <h1>What our customer say</h1>
      <span>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.</span>
      <div className="pidback">
        <div className="pidbackCard">
          {testimonials.map((e) => (
            <>
              <img key={e._id} src={e.img} alt="check img"/>
              <span>{e.text}</span>
              {e.user.map((avatar) => (
                <div>
                  <div>
                    <img key={avatar._id} src={avatar.avatar} alt="avatar img"/>
                    <span>{avatar.name}</span>
                  </div>
                  <div>
                    <img src={avatar.star} alt="star" />
                    <span>{avatar.starNumber}</span>
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
