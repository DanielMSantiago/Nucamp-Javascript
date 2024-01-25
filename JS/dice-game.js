function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6);
        alert("You rolled a " + roll + ". Gold Coins: " + goldCoins);
        if (roll === 1) {
            alert("Game Over! All Rolls Forfeited");
            break;
        } else if (roll < 5) {
            alert("Congratulations. You won 5 golden Shekels");
            goldCoins += 5;
            continue;
        } else {
            alert("Congratulations. You won 6 gold Shekels");
            goldCoins += 6;
            continue;
        }
    }


}