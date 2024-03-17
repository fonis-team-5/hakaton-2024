document.getElementById('amount-button').addEventListener('click', function() {
    var amountInput = parseInt(document.getElementById('amount-input').value);
    if (amountInput >= 1 && amountInput <= 100) {
        amount += amountInput; // Add the input amount to the current amount
        document.getElementById('amount-display').textContent = "Iznos: " + amount;
    } else {
        alert("Iznos koji ste uneli je izvan dozvoljenog opsega.");
    }
});
