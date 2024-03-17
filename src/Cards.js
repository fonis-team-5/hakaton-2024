import Slot from "./Slot";
function Cards() {
    return(
        <div className="card-container">
          <Slot />
          <div className="card card3">
            <h2>Treca igra</h2>
            <img src=""></img>
          </div>
        </div>
    );

}

export default Cards;