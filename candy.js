
// All the colors for the candy pieces, list items corespond to the img names
var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];

var board = [];

var rows = 9;
var columns = 9;
var score = 0;

// The candy you dragging
var currTile;
// The candy you dropping onto
var otherTile;

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

            // Drag functionality
            tile.addEventListener("dragstart", dragStart); // Click on a candy, initialize drag process
            tile.addEventListener("dragover", dragOver); // Mouse btn down, start moving mouse to drag the candy
            tile.addEventListener("dragenter", dragEnter); // Dragging initial candy on top of another candy
            tile.addEventListener("dragleave", dragLeave); // Leave candy over another candy
            tile.addEventListener("drop", dragDrop); // Dropping a candy over another candy, mouse btn up
            tile.addEventListener("dragend", dragEnd); // After drag process completed, we swap candies

            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    } 

}

function dragStart() {
    // This refers to tile that was clicked on for dragging
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    // this refers to the target tile that was dropped on
    otherTile = this;
}

function dragEnd() {
    // Swap the image sorces
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
}