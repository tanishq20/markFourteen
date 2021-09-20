const buyingPrice = document.querySelector('#buying-price')
const sellingPrice = document.querySelector('#selling-price')
const quantity = document.querySelector('#quantity')
const showBtn = document.querySelector('#show-btn')
const output = document.querySelector('#output')

showBtn.addEventListener('click', clickHandler)

function clickHandler() {
  var buyPrice = Number(buyingPrice.value)
  var sellPrice = Number(sellingPrice.value)
  var qty = Number(quantity.value)

  if (
    buyPrice == 0 ||
    buyPrice < 0 ||
    sellPrice == 0 ||
    sellPrice < 0 ||
    qty == 0 ||
    qty < 0
  ) {
    showMessage(
      'Please fill all the fields and all values must be positive 🤨',
      'orange'
    )
  } else {
    calculateProfitAndLoss(buyPrice, sellPrice, qty)
  }
}

function showMessage(msg, color) {
  output.style.background = color
  output.innerText = msg
}

function calculateProfitAndLoss(buyPrice, sellPrice, qty) {
  if (sellPrice > buyPrice) {
    var profitPrice = (sellPrice - buyPrice) * qty
    var profitPercentage = ((sellPrice - buyPrice) * 100) / buyPrice

    showMessage(
      `Yaay!! Your profit is ${profitPrice} and gain percentage is ${profitPercentage.toFixed(
        2
      )}% 🥳🥳`,
      'green'
    )
  } else if (buyPrice > sellPrice) {
    var lossPrice = (buyPrice - sellPrice) * qty
    var lossPercentage = ((buyPrice - sellPrice) * 100) / buyPrice

    showMessage(
      `Oops Your loss is ${lossPrice} and loss Percentage ${lossPercentage.toFixed(
        2
      )}% 😐😐`,
      'red'
    )
  } else if (buyPrice === sellPrice) {
    showMessage('No pain no gain and no gain no pain 😉😎', 'orange')
  }
}
