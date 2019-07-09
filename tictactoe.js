var squares = document.querySelectorAll('td');

var playerMarker = 'X';

function changeSquare(){
    
    this.textContent = playerMarker

    if (playerMarker === 'X') {
        playerMarker = 'O';
    }else {
        playerMarker = 'X';
    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',changeSquare);
}
