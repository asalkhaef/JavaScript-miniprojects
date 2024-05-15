function rollDice() {
  const numDice = document.getElementById("num").value;
  const diceText = document.getElementById("dice-text");
  const diceImg = document.getElementById("dice-img");

  const value = [];
  const imgs = [];

  for (let i = 0; i < numDice; i++) {
    const temp = Math.floor(Math.random() * 6 + 1);
    value.push(temp);
    imgs.push(`<img src="img/${temp}.png">`);
  }

  diceText.textContent = `Dice: ${value.join("-")}`;
  diceImg.innerHTML = imgs.join(" ");
}
