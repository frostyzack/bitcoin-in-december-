async function getBTC(){
    const endpoint = "https://api.coinbase.com/v2/prices/spot?currency=USD"
    const response = await fetch(endpoint);
    const data = await response.json();
    const price = data.data.amount;
    var priceOnDec1 = 19633.77;
    var amountOfCoinIfYouPutIn1k = 1000 / priceOnDec1;
    var amount = Math.round(((price * amountOfCoinIfYouPutIn1k) + Number.EPSILON) * 100) / 100;
    //document.getElementById("btc-price").textContent = price;
    document.getElementById("btc-amount").textContent = amount;

    var txt = price;
    var i = 0;
    var speed = 135;
    function typeWriter() {
        if (i < txt.length) {
          document.getElementById("btc-price").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      typeWriter();
}
getBTC();



