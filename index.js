document.getElementById('calculateButton').addEventListener('click', function() {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    var totalAmount = calculateTotal(subtotal, tipPercentage);
    document.getElementById('totalAmount').textContent = "Total Amount: $" + totalAmount.toFixed(2);
});

function calculateTotal(subtotal, tipPercentage) {
    var tipAmount = (subtotal * tipPercentage) / 100;
    return subtotal + tipAmount;
}
