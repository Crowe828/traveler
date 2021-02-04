import CardItem from "./CardItem";
import Img1 from "../images/img-1.jpg";
import Img3 from "../images/img-3.jpg";
import Img5 from "../images/img-5.jpg";
import Img6 from "../images/img-6.jpg";
import Img7 from "../images/img-7.jpg";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our clients favorite destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* Different locations that clients have visited */}
            <CardItem
              src={Img1}
              text="Explore the most beautiful mountains in the world"
              label="Adventure"
              path="/products"
              className="cards__item"
            />
            <CardItem
              src={Img3}
              text="Sail through the Atlantic and visit remote islands"
              label="Mystery"
              path="/products"
              className="cards__item"
            />
            <CardItem
              src={Img5}
              text="Wander through the city that never sleeps"
              label="Luxury"
              path="/products"
              className="cards__item"
            />
            <CardItem
              src={Img6}
              text="Get a taste for the big city"
              label="Metropolitan"
              path="/products"
              className="cards__item"
            />
            <CardItem
              src={Img7}
              text="Experience the thrill of a lifetime"
              label="Adrenaline"
              path="/products"
              className="cards__item"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
