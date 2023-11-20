import gameState from "../gameState.js";
import gameSettings from "../settings.js";
import functions from "../functions.js";

class Game {

    assignImages(imgNum) {

        let length = gameState.cards.length;

        // For each image available
        for (let i = 1; i <= gameSettings.numberOfImages; i++) {

            const randomOdd = functions.randomOddNumber(length / 2);

            assignImg(randomOdd, i);
            length = length - randomOdd;

        }

    }

}

function assignImg(num, img) {

    for (let i = 1; i <= num; i++) {

        let randomIndex = Math.floor(Math.random() * gameState.unAssigned.length);
        let randomCard = gameState.unAssigned[randomIndex]

        gameState.codes[randomCard] = img;
        gameState.cards[randomCard].style.backgroundImage = `url(../../Assets/Images/${img}.png)`;
        gameState.unAssigned.splice(randomIndex, 1);
    }
}


export default Game;