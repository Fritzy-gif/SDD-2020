document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,
    1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,
    1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,
    1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,
    1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,4,4,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,1,0,1,2,2,2,2,1,0,1,0,0,0,0,1,
    1,0,1,1,0,0,0,1,2,2,2,2,1,0,0,0,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,1,
    1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,
    1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,
    1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,
    1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  ]
  // Index:
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const squares = []

  //creating game board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      //add layout to the board
      if(layout[i] === 0) {
        squares[i].classList.add('pac-dot')
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
      } else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
      } else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet')
      }
    }
  }
  createBoard()
  // You perfrom the function createBoard, which just creates the game board that we will be using

  let ghostCurrentIndex = 229
  squares[ghostCurrentIndex].classList.add('ghost')




})