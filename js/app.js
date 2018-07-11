/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


var cardList = [];
var matchCounter = 0;
var scoreCounter = 0;

document.querySelector('.deck').addEventListener('click', function(evt){
    let tgt = evt.target;
    if(tgt.nodeName === 'LI'){
        console.log("li was clicked");
        openCard(tgt);

        listCard(tgt);
        
/*         console.log("here " + tgt.childNodes[1].nodeName);
 */        /* for(let i = 0; i < tgt.childNodes.length; i++){
            console.log(tgt.childNodes[i]);
        } */
        //

    }
})

function openCard(tgt){
    tgt.setAttribute('class', 'card open show');
}

function listCard(tgt){
    let tgtClass = tgt.childNodes[1].className;
    if(cardList.length == 1){
        checkMatch(tgtClass, tgt);
    } else{
        cardList.push(tgtClass);
    }

    
}

function checkMatch(tgtClass, tgt) {
    if(tgtClass == cardList[0]){
        console.log("We have a match!");
        lockCards(tgtClass);
    }else{
        //noMatch(tgt);
        console.log("set to card");
        setTimeout(() => {
            tgt.setAttribute('class', 'card');
            cardList[0].setAttribute('class', 'card');
        }, 3000);
        cardList.pop();
        cardList.pop();
    }

    
}

function lockCards(tgtClass) {
    let matches = document.getElementsByClassName(tgtClass);
    for(let i = 0; i < matches.length; i++){
        matches[i].parentElement.setAttribute('class', 'card match');
        console.log("node: " + matches[i].nodeName);
    }
}

function noMatch(tgt) {
    
    console.log("noMatch: " + tgt.className);

    //tgt.setAttribute('class', 'card');

}

function bigWinner() {
    console.log("Winner Winner Chicken Dinner!");
}
