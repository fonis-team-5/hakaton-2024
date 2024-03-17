import React from 'react';
import ahilej from './media/ahilej.png';
import evroliga from './media/evroliga.png';
import burito from './media/burito.png';
import mona from "./media/mona.jpg";
import fiat from "./media/fiat.png";

class Nagrada {
    constructor(naziv,slika,tip) {
        this.slika = slika;
        this.naziv = naziv;
        this.tip = tip;
    }

    prikazi(){
        return(
            <div className="reward">
                    <h2>{this.naziv}</h2>
                    <img src={this.slika}></img>
                    <p className='tip-nagrade'>{this.tip}</p>
            </div>
        )
    }
}

const nagrada1 = new Nagrada("Popust od 30% na članarinu u teretani Ahilej",ahilej,"dnevna");
const nagrada2 = new Nagrada("Besplatna karta za utakmicu Partizan - Real Madrid", evroliga, "nedeljna");
const nagrada3 = new Nagrada("Tri besplatna obroka po izboru u Burito Madreu",burito,"mesečna");
const nagrada4 = new Nagrada("Dve noći u Hotelu Mona na Zlatiboru",mona,"mesečna");
const nagrada5 = new Nagrada("Fiat 500",fiat,"godišnja");



function Rewards() {
    return (
        <div className="rewards-container">
            <h1>Nagrade</h1>
            <div className="rewards-wrapper">
                <div className="reward">
                    {nagrada1.prikazi()}
                </div>
                <div className='reward'>
                    {nagrada2.prikazi()}
                </div>
                <div className='reward'>
                    {nagrada3.prikazi()}
                </div>
                <div className='reward'>
                    {nagrada4.prikazi()}
                </div>
                <div className="reward">
                    {nagrada5.prikazi()}
                </div>
            </div>
        </div>
    );
}

export default Rewards