import Slot from "./Slot";
import cs from "./media/cs.png";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/fruits");
  };
  return (
    <div className="card-container">
        <p onClick={handleNavigate}>
            Fruits
        </p>
      <Slot
        imageUrl="https://placehold.co/1600x900"
        title="🎇 Gambling Game 🎇"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit!"
      />
      <Slot
        imageUrl="https://placehold.co/1600x900"
        title="🎇 Gambling Game 🎇"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit!"
      />
      <Slot
        imageUrl="https://placehold.co/1600x900"
        title="🎇 Gambling Game 🎇"
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit!"
      />
    </div>
  );
}

export default Cards;
