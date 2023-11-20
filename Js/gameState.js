const gameState = {
    score: 0,
    cards: document.querySelectorAll('.grid-item'),
    codes: {}
}

gameState.unAssigned = Array.from({length: gameState.cards.length}, (_,index)=> index );

export default gameState;