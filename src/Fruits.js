document.getElementById('spin-button').addEventListener('click', spinSlots);

var amountDisplay = document.getElementById('amount-display');
var amount = parseInt(amountDisplay.textContent.replace('Iznos: ', '')); // Parse the current amount
var messageParagraph = document.getElementById('message');

function spinSlots() {
    if (amount < 10) {
        alert('Nemate dovoljno kredita.');
        return;
    } else {
        amount -= 10; // Decrease the amount by 1
        if (amount === 0) {
            amountDisplay.textContent = 'Iznos: ' + amount;
            messageParagraph.textContent = 'Dosta je bilo za sad, vratite se opet sutra.';
            document.getElementById('amount-button').classList.add('disabled');
        } else {
            amountDisplay.textContent = 'Iznos: ' + amount;
        
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

        slots.forEach(function(slot, index) {
            var flickerInterval = setInterval(function() {
                var randomIndex = Math.floor(Math.random() * images.length);
                var imageUrl = images[randomIndex];
                slotImages[index] = imageUrl;
                slot.innerHTML = '<img src="' + imageUrl + '" alt="Fruit">';
            }, 50); // Flicker very fast

            // Stop flickering after flickerDuration
            setTimeout(function() {
                clearInterval(flickerInterval);

                // Land on a random image
                var randomIndex = Math.floor(Math.random() * images.length);
                var imageUrl = images[randomIndex];
                slotImages[index] = imageUrl;
                slot.innerHTML = '<img src="' + imageUrl + '" alt="Fruit">';

                // Check if all slots have the same image
                if (index === slots.length - 1) {
                    var allSame = slotImages.every(function(image, i) {
                        return i === 0 || image === slotImages[i - 1];
                    });
                    if (allSame && slotImages[0] !== 'images/gift.png') {
                        amount += 20; // Increase amount by 100
                        amountDisplay.textContent = 'Iznos: ' + amount;
                    }
                    if (allSame && slotImages[0] === 'images/gift.png') {
                        alert('Čestitamo! Osvojili ste 30% popusta na članarinu u teretani Ahilej!');
                    }
                }
            }, flickerDuration);
        });
        }
        
    }
}
