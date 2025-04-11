
// All the colors for the candy pieces, list items corespond to the img names
var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];

var board = [];

var rows = 9;
var columns = 9;
var score = 0;

window.onload = function() {
    startGame();
}

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)]; // 0-5.99
}

// Initialize the board by generating random candies and placing them on the board
function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = []; // Holds all img tags for a row
        for (let c = 0; c < columns; c++) {
            // Create a <img> tag 
            let tile = document.createElement("img");
            // Asign an id to img tag: <img id = "0-0">
            tile.i = r.toString() + "-" + c.toString();
            // Generate a src for img
            tile.src = "./images/" + randomCandy() + ".png";

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    } 
}