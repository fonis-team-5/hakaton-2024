import React, { useState } from 'react';

function Fruits() {
  const [amount, setAmount] = useState(0);

  const spinSlots = () => {
    if (amount < 10) {
      alert('Nemate dovoljno kredita.');
      return;
    } else {
      setAmount(prevAmount => prevAmount - 10);

      var slots = document.querySelectorAll('.slot');
      var images = [
        'images/apple.png',
        'images/banana.png',
        'images/orange.png',
        'images/grapes.png',
        'images/cherry.png',
        'images/gift.png',
      ];
      var flickerDuration = 500; // Duration of flickering in milliseconds

      var slotImages = [];

      slots.forEach(function (slot, index) {
        var flickerInterval = setInterval(function () {
          var randomIndex = Math.floor(Math.random() * images.length);
          var imageUrl = images[randomIndex];
          slotImages[index] = imageUrl;
          slot.innerHTML = '<img src="' + imageUrl + '" alt="Fruit">';
        }, 50); // Flicker very fast

        // Stop flickering after flickerDuration
        setTimeout(function () {
          clearInterval(flickerInterval);

          // Land on a random image
          var randomIndex = Math.floor(Math.random() * images.length);
          var imageUrl = images[randomIndex];
          slotImages[index] = imageUrl;
          slot.innerHTML = '<img src="' + imageUrl + '" alt="Fruit">';

          // Check if all slots have the same image
          if (index === slots.length - 1) {
            var allSame = slotImages.every(function (image, i) {
              return i === 0 || image === slotImages[i - 1];
            });
            if (allSame && slotImages[0] !== 'images/gift.png') {
              setAmount(prevAmount => prevAmount + 20);
            }
            if (allSame && slotImages[0] === 'images/gift.png') {
              alert('Čestitamo! Osvojili ste 30% popusta na članarinu u teretani Ahilej!');
            }
          }
        }, flickerDuration);
      });
    }
  };

  return (
    <div>
      <div id="credits">
        <input
          type="number"
          id="amount-input"
          placeholder="Uplati (1-100 din)"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <p id="message"></p>
        <button id="amount-button" className="amount-button" onClick={spinSlots}>
          Uplati
        </button>
        <div id="amount-display">Iznos: {amount}</div>
      </div>

      <img src="images/slots.jpg" alt="Slots" id="slots" />
      <div id="slot-machine">
        <div className="slot" id="slot1">
          <img src="images/apple.png" alt="Apple" />
          <img src="images/banana.png" alt="Banana" />
          <img src="images/orange.png" alt="Orange" />
          <img src="images/grapes.png" alt="Grapes" />
          <img src="images/cherry.png" alt="Cherry" />
          <img src="images/gift.png" alt="Gift" />
        </div>
        <div className="slot" id="slot2">
          <img src="images/apple.png" alt="Apple" />
          <img src="images/banana.png" alt="Banana" />
          <img src="images/orange.png" alt="Orange" />
          <img src="images/grapes.png" alt="Grapes" />
          <img src="images/cherry.png" alt="Cherry" />
          <img src="images/gift.png" alt="Gift" />
        </div>
        <div className="slot" id="slot3">
          <img src="images/apple.png" alt="Apple" />
          <img src="images/banana.png" alt="Banana" />
          <img src="images/orange.png" alt="Orange" />
          <img src="images/grapes.png" alt="Grapes" />
          <img src="images/cherry.png" alt="Cherry" />
          <img src="images/gift.png" alt="Gift" />
        </div>
        <button id="spin-button" onClick={spinSlots}>POKRENI</button>
      </div>
    </div>
  );
}

export default Fruits;
