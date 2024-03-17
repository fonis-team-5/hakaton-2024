import Slot from "./Slot";
import cs from "./media/cs.png";
import lucky6 from "./media/lucky6.png";
import vockice from "./media/vockice.jpeg";


function Cards() {
  
  return (
    <div className="card-container">

      <Slot
        imageUrl={vockice}
        title="🎇 Voćkice 🎇"
        description="Voćkice mi život upropastile"
      />
      <Slot
        imageUrl={lucky6}
        title="🎇 Lucky Six 🎇"
        description="Za prave kockare"
      />
      <Slot
        imageUrl={cs}
        title="🎇 Rulet 🎇"
        description="Uskoro dostupno na našoj platformi"
      />
    </div>
  );
}

export default Cards;
