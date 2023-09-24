function rotate(){
    let paymentCard=document.getElementById('container');
    var flip="transform: rotateY(180deg);" 
    paymentCard.setAttribute('style', flip);
    console.log("I'm called");
}