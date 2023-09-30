var cardNumberCurrentState = '';

function rotate(){
    let paymentCard = document.getElementById('container');
    var flip = "transform: rotateY(180deg);" 
    paymentCard.setAttribute('style', flip);
}

function rotateBack(){
    let paymentCard = document.getElementById('container');
    var flip = "transform: rotateY(0deg);"
    paymentCard.setAttribute('style', flip);
}

function updateCardNumber() {
    let cardInput = document.getElementsByClassName('form-card-number-input')[0].value;
    if (cardInput == '') {
        cardNumberCurrentState = '#### #### ####';
        return;
    }

    let countOfCardInput = cardInput.toString().length;
    let countOfCurrentState = cardNumberCurrentState.toString().length;
    console.log('Count of Card Input' + countOfCardInput.toString());
    console.log('Count of current state ' + countOfCurrentState);
    if (countOfCardInput > countOfCurrentState) {
        console.log('Need to add the last character');
        cardNumberCurrentState += cardInput[countOfCardInput - 1];
    } else if (countOfCardInput < countOfCurrentState) {
        console.log('Need to remove the last character');
        cardNumberCurrentState = cardNumberCurrentState.slice(0, -1);
    }
}