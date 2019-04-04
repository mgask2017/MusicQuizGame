const tunesMain = {
    MusicTune1: { artist: "Oasis", src: 'img/oasis.png'},
    MusicTune2: { artist: "Stone Roses", src: 'img/roses.png'},
    MusicTune3: { artist: "Rolling Stones", src: 'img/roll.png'},
    MusicTune4: { artist: "Beatles", src: 'img/beatles.png'},
    MusicTune5: { artist: "Thin Lizzy", src: 'img/thin.png'},
    MusicTune6: { artist: "Police", src: 'img/police.png'},
    MusicTune7: { artist: "Cream", src: 'img/cream.png' },
    MusicTune8: { artist: "Arctic Monkeys", src: 'img/monkeys.png' },
    MusicTune9: { artist: "Kasabian", src: 'img/kasabian.png' },
    MusicTune10: { artist: "Killers", src: 'img/killers.png' },
    MusicTune11: { artist: "Mumford and Sons", src: 'img/mumfordandsons.png' },
    MusicTune12: { artist: "Blur", src: 'img/blur.png' },
    MusicTune13: { artist: "Deep Purple", src: 'img/deep.png' }
};

//Define UI vars
const musicClue = document.querySelector('#music-clue');
const startQuiz = document.querySelector('#start-quiz-form');
const form = document.querySelector('#answer-form');
const plrArtistAnswer = document.querySelector('.answers');
let plrScore = 0;
let wrongAnswerCount = 2;
let score = document.querySelector('#score-value').innerHTML = plrScore;
let plrLives = document.querySelector('#player-lives').innerHTML = wrongAnswerCount;
console.log('Player score', plrScore);
//Create a arrays for music clue
let newArtistArray = [];
// Create Artist array for form entry
let plrArtistEntryArr = [];

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
    //Start Quiz
    startQuiz.addEventListener('submit', generateClue);
    //Add Answers
    form.addEventListener('submit', addPlrAnswers);

}


function generateClue(e) {

    //Outputs random method #1 object values from tunesMain:
    const keys = Object.keys(tunesMain);
    const randomIndex = keys[Math.floor(Math.random() * keys.length)];
    const item = tunesMain[randomIndex];

    //Create the Music Clue
    const newArtist = item.artist;
    const newImage = item.src;
    const firstLetterArtist = newArtist.substring(0, 3).toLowerCase();
    let newImageClue = newImage;
    newArtistArray = [];
    newArtistArray.push(newArtist.toLowerCase());
    console.log('newArtistArray:' ,newArtistArray);
    
    //Display Artist and Image Clue
    document.querySelector('#artist-clue').innerHTML =  firstLetterArtist;
    let createImage = document.createElement('IMG');
    createImage.setAttribute("src", newImageClue);
    createImage.setAttribute("id", "artist-img");
    createImage.setAttribute("alt", "artist img");
    createImage.setAttribute("width","64");
    createImage.setAttribute("height", "64");
    document.querySelector('#picture-clue').appendChild(createImage);


    //clear the form field
    document.getElementById("answer-form").reset(); 

    e.preventDefault(); //stops the form submit (default)

}

//Deletes img everything user clicks 'New Clue' button
function deleteImg() {
    let createImage = document.createElement('IMG');
        let el = document.getElementById('artist-img');
        el.parentNode.removeChild(el);
        console.log('img deleted');
}


//Submit answers
function addPlrAnswers(f) {

    // Capture form input and add to array
    let plrArtistEntry = document.querySelector('#artist').value;
    plrArtistEntryArr.push(plrArtistEntry);
    JSON.stringify(plrArtistEntry.value);
    console.log('Players answer = ', plrArtistEntryArr);

//THE CODE below prints previos answer to the DOM
    //Create li element
    //let li = document.createElement('li');
    //Add class
    //li.className = 'artistAnswer';
    //Create text node and append to li
    //li.appendChild(document.createTextNode(plrArtistEntryArr));
    //Append li to ul
    //plrArtistAnswer.appendChild(li);
    //Clear the entry
    //plrArtistEntry.value = '';

    answerCorrect();

    f.preventDefault();
};


// func to compare two arrays: the artist clue === player input
function answerCorrect() {

    if (JSON.stringify(newArtistArray) === JSON.stringify(plrArtistEntryArr)) {
        console.log(plrArtistEntryArr, newArtistArray);
        plrScore += 3;
        let score = document.querySelector('#score-value').innerHTML = plrScore;
        console.log('Player Score: ', plrScore);
        alert('Correct Answer, well done!');
        let = plrArtistEntryArr = [];
        let = newArtistArray = [];
        document.getElementById("answer-form").reset(); //clear the form field
        document.querySelector('#artist-clue').innerHTML = ''; //clears HTML artist clue
        deleteImg() //runs delete img func
        console.log('Artist array --> ', plrArtistEntryArr);
    }


    if (JSON.stringify(newArtistArray) != JSON.stringify(plrArtistEntryArr)) {
        alert ('Wrong answer, please try again, -2 pts');
        plrScore -= 2;
        wrongAnswerCount -= 1;
        let score = document.querySelector('#score-value').innerHTML = plrScore;
        let plrLives = document.querySelector('#player-lives').innerHTML = wrongAnswerCount;
        console.log('Player Score: ', plrScore);
        let = plrArtistEntryArr = [];
        let newArtistArray = [];
        console.log('newArtistArray before reset: ', newArtistArray);
        document.getElementById("answer-form").reset(); //clear the form field
        document.querySelector('#artist-clue').innerHTML = ''; //clears HTML artist clue
        
        console.log(newArtistArray);
    }

    if (wrongAnswerCount === 0) {
        alert('Sorry, you have lost the game, better of luck next time!');
        document.getElementById("answer-form").reset(); //clear the form field
        location.reload();
    }
   

}






