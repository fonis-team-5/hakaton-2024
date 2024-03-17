import React from 'react';
import ahilej from './media/ahilej.png';
import evroliga from './media/evroliga.png';
import burito from './media/burito.png';

class Nagrada {
    constructor(naziv,slika,tip) {
        this.slika = slika;
        this.naziv = naziv;
        this.tip = tip;
    }

    prikazi(){
        return(
            <div className="reward-l">
                <div className='cl-text'>
                    <h2 className='tip-nagrade'>{this.tip}</h2>
                    <p>{this.naziv}</p>
                </div>
                <div className='cl-img'>
                    <img src={this.slika}></img>
                </div>
            </div>
        )
    }
}

const nagrada1 = new Nagrada("Popust od 30% na članarinu u teretani Ahilej",ahilej,"DNEVNA");
const nagrada2 = new Nagrada("Besplatna karta za utakmicu Partizan - Real Madrid", evroliga, "NEDELJNA");
const nagrada3 = new Nagrada("Tri besplatna obroka po izboru u Burito Madreu",burito,"MESEČNA");


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
            </div>
        </div>
    );
}

export default Rewards