function calculateTotalPrice() {
    grocery1_amount=parseFloat(document.getElementById("grocery1").value);
    grocery2_amount=parseFloat(document.getElementById("grocery2").value);
    grocery3_amount=parseFloat(document.getElementById("grocery3").value);

    let total_amount = grocery1_amount+grocery2_amount+grocery3_amount;

    document.getElementById('result').innerText = `The total amount is: $ ${total_amount}`;
}

