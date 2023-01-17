
let firstGame
let currentGame

fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(gameNames => gameNames.forEach(gameName => {
        if(firstGame === undefined) {
            firstGame = gameName
            currentGame = firstGame
            renderGame(firstGame)
        }
    
       

    let gameNameList = document.createElement('h5')
    gameNameList.textContent = `${gameName.name}(${gameName.manufacturer_name})`

    gameNameList.addEventListener('click', (event) => {
        currentGame = gameName
        renderGame(gameName)

    })
    
    
    document.querySelector('.game-list').append(gameNameList)

    
    }))


function renderGame(game) {
    const gameImage = document.getElementById('detail-image')
    gameImage.src = game.image

    const gameTitle = document.getElementById('detail-title')
    gameTitle.textContent = game.name

    const gameScore = document.getElementById('detail-high-score')
    gameScore.textContent = game.high_score

}




const highScoreForm = document.getElementById('high-score-form')
highScoreForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let scoreInput = document.getElementById('score-input')
    currentGame.high_score = scoreInput.value
    renderGame(currentGame)
    
    highScoreForm.reset()


})

