/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




var player1 = "o";
var player2 = "x";
var currentPlayer = null;
//var spaces = [null, null, null, null, NaN, NaN, NaN, NaN, NaN];
var spaces = new Array(9);

var playerSwitch = function () {
    if (currentPlayer === player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
    $('#switchPlayer').text(currentPlayer);
};

var checkBoard = function () {

    // horizontally equal
    if (spaces[0] === spaces[1] && spaces[1] === spaces[2] && typeof spaces[0] !== "undefined") {
        alert("Congratulations! You Won!");
        return true;
    } else if (spaces[3] === spaces[4] && spaces[4] === spaces[5] && typeof spaces[3] !== "undefined") {
        alert("Congraduations! You Won!");
        return true;
    } else if (spaces[6] === spaces[7] && spaces[7] === spaces[8] && typeof spaces[6] !== "undefined") {
        alert("Congraduations! You Won!");
        return true;
    }
    // vertically equal 
    else if (spaces[0] === spaces[3] && spaces[3] === spaces[6] && typeof spaces[0] !== "undefined") {
        alert("Congraduations! You Won!");
        return true;
    } else if (spaces[1] === spaces[4] && spaces[4] === spaces[7] && typeof spaces[1] !== "undefined") {
        alert("Congraduations! You Won!");
        return true;
    } else if (spaces[2] === spaces[5] && spaces[5] === spaces[8] && typeof spaces[2] !== "undefined") {
        alert("Congraduations! You Won!");
        return true;
    }
    // diagonal euqal
    else if (spaces[0] === spaces[4] && spaces[4] === spaces[7] && typeof spaces[4] !== "undefined") {
        alert("Congraduations! You Won!");
        return true;
    } else if (spaces[2] === spaces[4] && spaces[6] === spaces[4] && typeof spaces[6] !== "undefined") {
        alert("Congraduations! You Won!");
        return true;
    } else
        return false;

};

$(document).on('click', '#board .cell', function (e) {

    var index = $(e.currentTarget).index();
    //console.log('clicked on cell #' + spaceNum);\
    if (spaces[index] === undefined) {
        spaces[index] = currentPlayer;
        $('#board .cell:eq(' + index + ')').addClass(currentPlayer);

    }
    if(checkBoard()) {
        reset();
    }else {
        playerSwitch();
    }
    if(checkFull()) reset();
});



function checkFull() {
    // check whether has space in board
    for (var i = 0; i < 9; i++) {
        //console.log(Boolean(spaces[i]));
        if(!spaces[i]) return false; 
    }
    alert("This is a tie!");
    return true;
}

function reset(){
    for (var i = 1; i < 10; i++) {
        if($("#cell"+i).hasClass("o") ){
            $("#cell"+i).removeClass("o");
        }
        if($("#cell"+i).hasClass("x") ){
            $("#cell"+i).removeClass("x");
        }    
    }
    spaces = new Array(9);
}


$(document).ready(function () {
    playerSwitch();
});