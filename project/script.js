
// create a new div
const myDiv = document.createElement('div')
const myDiv2 = document.createElement('div2')
const myDiv3 = document.createElement('div3')
// console.log(myDiv)

// get element from DOM
const messageDiv = document.getElementById('myMessage')
const messageDiv2 = document.getElementById('myMessage2')
const messageDiv3 = document.getElementById('myMessage3')
// console.log(messageDiv)

// append myDiv to messageDiv
messageDiv.append(myDiv)
messageDiv2.append(myDiv2)
messageDiv3.append(myDiv3)

// get the Button
const theButton = document.getElementById('myButton')
const theButton2 = document.getElementById('myButton2')
const theButton3 = document.getElementById('myButton3')
// console.log(theButton)

// Add click event listner to the button
theButton.addEventListener('click', () => {
  // get data from the cat facts api, using fetch()
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then((response) => response.json())
      .then((data) => {
      myDiv.innerText = '$' + data.bitcoin.usd
  });
  console.log('Call made to API')
})

theButton2.addEventListener('click', () => {
  // get data from the cat facts api, using fetch()
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then((response) => response.json())
      .then((data) => {
      myDiv2.innerText = '$' + data.ethereum.usd
  });
  console.log('Call made to API')
})

theButton3.addEventListener('click', () => {
  // get data from the cat facts api, using fetch()
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd')
    .then((response) => response.json())
      .then((data) => {
      myDiv3.innerText = '$' + data.dogecoin.usd
  });
  console.log('Call made to API')
})


