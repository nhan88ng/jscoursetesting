let length, width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let grocery1, grocery2, grocery3;

function groceryTracker(){
    grocery1 = parseFloat(document.getElementById('grocery-1').value);
    grocery2 = parseFloat(document.getElementById('grocery-2').value);
    grocery3 = parseFloat(document.getElementById('grocery-3').value);

    let total = grocery1 + grocery2 + grocery3;

    document.getElementById('totalAmount').innerText = `The total amount is: ${total}`;
}