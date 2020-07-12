document.addEventListener('DOMContentLoaded', ()=>{

    //card options
    const cardArray = [
        {
            name:'hotdog',
            img : 'imges/hotdog.png'
        },
        {
            name:'hotdog',
            img : 'imges/hotdog.png'
        },
        {
            name:'hotdog2',
            img : 'imges/hotdog2.png'
        },
        {
            name:'hotdog2',
            img : 'imges/hotdog2.png'
        },
        {
            name:'hotdog3',
            img : 'imges/hotdog3.png'
        },
        {
            name:'hotdog3',
            img : 'imges/hotdog3.png'
        },
        {
            name:'hotdog4',
            img : 'imges/hotdog4.png'
        },
        {
            name:'hotdog4',
            img : 'imges/hotdog4.png'
        },
        {
            name:'hotdog5',
            img : 'imges/hotdog5.png'
        },
        {
            name:'hotdog5',
            img : 'imges/hotdog5.png'
        },
        {
            name:'hotdog6',
            img : 'imges/hotdog6.png'
        },
        {
            name:'hotdog6',
            img : 'imges/hotdog6.png'
        }
    ]
 })

 const grid = document.querySelector('.grid')

 function createBoard() {
    for (let i = 0; i < 12; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
 }

createBoard();