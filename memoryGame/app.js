// const DOMContentLoaded = document.addEventListener('DOMContentLoaded', ()=>{

//     //card options
//     const cardArray = [
//         {
//             name:'hotdog',
//             img : 'imges/hotdog.png'
//         },
//         {
//             name:'hotdog',
//             img : 'imges/hotdog.png'
//         },
//         {
//             name:'hotdog2',
//             img : 'imges/hotdog2.png'
//         },
//         {
//             name:'hotdog2',
//             img : 'imges/hotdog2.png'
//         },
//         {
//             name:'hotdog3',
//             img : 'imges/hotdog3.png'
//         },
//         {
//             name:'hotdog3',
//             img : 'imges/hotdog3.png'
//         },
//         {
//             name:'hotdog4',
//             img : 'imges/hotdog4.png'
//         },
//         {
//             name:'hotdog4',
//             img : 'imges/hotdog4.png'
//         },
//         {
//             name:'hotdog5',
//             img : 'imges/hotdog5.png'
//         },
//         {
//             name:'hotdog5',
//             img : 'imges/hotdog5.png'
//         },
//         {
//             name:'hotdog6',
//             img : 'imges/hotdog6.png'
//         },
//         {
//             name:'hotdog6',
//             img : 'imges/hotdog6.png'
//         }
//     ]
//  });



const cardArray = [
    {
        name:'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name:'hotdog',
        img : 'images/hotdog.png'
    },
    {
        name:'hotdog2',
        img : 'images/hotdog2.png'
    },
    {
        name:'hotdog2',
        img : 'images/hotdog2.png'
    },
    {
        name:'hotdog3',
        img : 'images/hotdog3.png'
    },
    {
        name:'hotdog3',
        img : 'images/hotdog3.png'
    },
    {
        name:'hotdog4',
        img : 'images/hotdog4.png'
    },
    {
        name:'hotdog4',
        img : 'images/hotdog4.png'
    },
    {
        name:'hotdog5',
        img : 'images/hotdog5.png'
    },
    {
        name:'hotdog5',
        img : 'images/hotdog5.png'
    },
    {
        name:'hotdog6',
        img : 'images/hotdog6.png'
    },
    {
        name:'hotdog6',
        img : 'images/hotdog6.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
        
    }
 }

function checkForMAtch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent ='Congratulations! You found them all!'
    }
}

function flipcard(){
     var cardId = this.getAttribute('data-id')
     cardsChosen.push(cardArray[cardId].name)
     cardsChosenId.push(cardId)
     this.setAttribute('src', cardArray[cardId].img)
     if (cardsChosen.length === 2) {
         setTimeout(checkForMAtch, 500)
     }
 }

createBoard();