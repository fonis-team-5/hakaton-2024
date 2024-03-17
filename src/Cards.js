import Slot from "./Slot";
import cs from "./media/cs.png"

function Cards() {
    return(
        <div className="card-container">
          <Slot imageUrl="https://placehold.co/1600x900" title="🎇 Gambling Game 🎇" description="Lorem ipsum dolor sit amet consectetur adipiscing elit!" />
          <Slot imageUrl="https://placehold.co/1600x900" title="🎇 Gambling Game 🎇" description="Lorem ipsum dolor sit amet consectetur adipiscing elit!" />
          <Slot imageUrl="https://placehold.co/1600x900" title="🎇 Gambling Game 🎇" description="Lorem ipsum dolor sit amet consectetur adipiscing elit!" />

          
        </div>
    );

}

export default Cards;