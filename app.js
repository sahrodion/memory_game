
// document.addEventListener('DOMContentLoaded', () =>{
    
    //card options
    const cardArray = [
        {   name: 'Attack on titan',
           img: '/memory_game/assets/AOT.jpg'
        },
       
        {   name: 'Attack on titan',
        img: '/memory_game/assets/AOT.jpg'
       },
        
        {   name: 'Naruto',
        img: '/memory_game/assets/NARUTO.jpg'
       },
       
       {   name: 'Naruto',
        img: '/memory_game/assets/NARUTO.jpg'
       },
        
       {   name: 'Jujutsu Kaisen',
       img: '/memory_game/assets/JUJUTSU KAISEN.jpg'
       },
       
       {   name: 'Jujutsu Kaisen',
       img: '/memory_game/assets/JUJUTSU KAISEN.jpg'
       },
       
       {   name: 'One punch man',
       img: '/memory_game/assets/one punch man.jpg'
       },
       
       {   name: 'One punch man',
       img: '/memory_game/assets/one punch man.jpg'
       },
       
       {   name: 'Dragon ball z',
       img: '/memory_game/assets/dragon ball z.jpg'
       },
       
       {   name: 'Dragon ball z',
       img: '/memory_game/assets/dragon ball z.jpg'
       },

       {   name: 'bleach',
       img: '/memory_game/assets/BLEACH.jpg'
       },
       
       {   name: 'bleach',
       img: '/memory_game/assets/BLEACH.jpg'
       },

    ]
   
   cardArray.sort( () => 0.5 - Math.random())
         
   const grid = document.querySelector('.grid');
   let cardsChosen = [];
   let cardsChosenId = [];
   let cardsWon = [];



   //craete game board
   function createBoard(){
       for (let i = 0; i < cardArray.length; i++){
       var card = document.createElement('img');
       card.setAttribute('src', '/memory_game/assets/blankk.jpg');
       card.setAttribute('data-id', i);
       card.addEventListener('click', flipCard)
       grid.appendChild(card)}
   }


// check for matches
function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const option1 = cardsChosenId[0];
    const option2 = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]){
        alert("you found a match")
        cards[option1].setAttribute('src', '/memory_game/assets/white.png');
        cards[option2].setAttribute('src', '/memory_game/assets/white.png');
        cardsWon.push(cardsChosen) 
    
    } else{

        cards[option1].setAttribute('src', '/memory_game/assets/blankk.jpg');
        cards[option2].setAttribute('src', '/memory_game/assets/blankk.jpg');
        alert('sorry, try again');
    }
    
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2){
        alert('congratulation! you found them all')
    }
}

       


//    flip card
function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    let currentCard = cardsChosenId;
    if (currentCard.addEventListener('click', () =>{
        alert("choose another card")
    }))
    if (cardsChosen.length === 2){
        setTimeout (checkForMatch, 500)
    }
       
}


   createBoard();
