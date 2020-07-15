const squares = document.querySelectorAll('.grid div'),
    result = document.querySelector('#result'),
    displayCurrentPlayer = document.querySelector('#current-player')

let currentPlayer = 1

for (var i = 0, len = squares.length; i < len ; i++)
    (function(index){
        squares[i].onclick = function(){
        // 클래스가 taken이면 젤 위로 감
            if(squares[index+7].classList.contains('taken')) {
                console.log('이거는')
                if(currentPlayer === 1) {
                    console.log('이게 실행이안돼?')
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    // 플레이어 체인지
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer === 2){
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
            } else alert('cant go here')
    }

})

    console.log(squares[38].classList.contains('taken'))