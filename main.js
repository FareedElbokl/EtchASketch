let color = "black";
let click = true;

function populateBoard(size) {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll('div') //selects all divs inside board
    squares.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)` //will make 16 columns, and each column will have width 1/16th width of container
    board.style.gridTemplateRows = `repeat(${size}, 1fr)` //16 rows
    // made 16 cols and 16 rows, so a 16x16 grid

    let amount = size*size
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener("mouseover", (colorSquare))
        square.style.backgroundColor = "white"
        board.insertAdjacentElement("beforeend", square)
    
}
}

populateBoard(16)

function changeSize(input) {
    if (input >=2 && input <= 100 ) {
        populateBoard(input);
    } else {
        console.log("too many squares")
    }
    
}

function colorSquare() {
    if (click) {
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color ;
        }
    
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector(".board")
    let squares = board.querySelectorAll('div') //selects all divs inside board
    squares.forEach((div) => div.style.backgroundColor = "white")
}


document.querySelector("body").addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON") {
        click = !click
        if (click) {
            document.querySelector(".mode").innerText = "Mode: Colouring (Click Anywhere)"
        } else {
            document.querySelector(".mode").innerText = "Mode: Not Colouring (Click Anywhere)"
        }
    }
})