console.log('working!');
const Songs = {
  song1: {
    songTitle: ' "Even Flow" ',
    artist: 'Pearl Jam',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Even_Flow_%28Pearl_Jam_song_-_sample%29.ogg',
  },
  song2: {
    songTitle: ' "Money Trees" ',
    artist: 'Kendrick Lamar',
    mp3URL: '......',
  },
  song3: {
    songTitle: ' "On My Own" ',
    artist: 'Eponine from Les Miserables',
    mp3URL: '......',
  },
  song4: {
    songTitle: ' "It Takes Two" ',
    artist: 'Rob Base and DJ E-Z Rock',
    mp3URL: '......',
  },
  song5: {
    songTitle: ' "Dance Yrself Clean" ',
    artist: 'LCD Soundsystem',
    mp3URL: '......',
  },
  song6: {
    songTitle: ' "Fade" ',
    artist: 'Kanye West',
    mp3URL: '......',
  },
  song7: {
    songTitle: ' "Mr. Brownstone" ',
    artist: 'Guns N\' Roses',
    mp3URL: '......',
  },
  song8: {
    songTitle: ' "Manic Monday" ',
    artist: 'The Bangles',
    mp3URL: '......',
  },
  song9: {
    songTitle: ' "All Night Long" ',
    artist: 'Lionel Richie',
    mp3URL: '......',
  },
  song10: {
    songTitle: ' "D\'yer Mak\'er" ',
    artist: 'Led Zeppelin',
    mp3URL: '......',
  },
};


const body = document.querySelector('body');
const songLocation = document.querySelector('.song-list-column');
let result;
let guessedNumbers = [];
let forceGet = true;


function startGame() {
  body.querySelector('.startButton').addEventListener('click', populateSong);
}
startGame();


function gameOver() {
  // let modal = document.getElementById('myModal');
  if (guessedNumbers.length >=10) {
    alert("Game Over! You got x out of 10 correct!");
   // $("#myModal").modal();//
   }
   window.reload();
}

function populateSong() {
  let newSong = document.createElement('div');
  newSong.setAttribute('id', 'song-in-play');
  songLocation.appendChild(newSong);
  // let pressPlay = document.createElement('audio');
  // pressPlay.setAttribute('src', Songs.mp3URL);
  // newSong.appendChild(pressPlay);
  // pressPlay.play();
  const randomSong = function pickRandomSong() {
    // for (let song in Songs) {
        // console.log(Songs[song]);
    let number = null;
    let randomNumber = (Math.floor(Math.random() * 10) + 1);
    if (guessedNumbers.length >= 10) {
      gameOver();
    }
    while (!number) {
      if (guessedNumbers.includes(randomNumber)) {
        randomNumber = (Math.floor(Math.random() * 10) + 1);
      } else {
        number = randomNumber;
        guessedNumbers.push(number);
      }
    }
    let currentSong = 'song' + number;
    result = Songs[currentSong].songTitle;
    return result;
  };
  newSong.innerHTML = randomSong();
}



// function keepScore() {
      // let scoreBox = document.querySelector('#score-box');
//   if answer is correct or true, store 1 point in a score array
//   when a matching artist is clicked, the score/point is stored
      // create score box div with id #score-box to append to header to show running score  1/1, 2/2, 2/3, 3/4, etc.
// }
function artistClick() {
  // document.querySelector('.buttons').addEventListener('click', gameRules);
  document.body.querySelector('#button1').addEventListener('click', populateSong);
  document.body.querySelector('#button2').addEventListener('click', populateSong);
  document.body.querySelector('#button3').addEventListener('click', populateSong);
  document.body.querySelector('#button4').addEventListener('click', populateSong);
  document.body.querySelector('#button5').addEventListener('click', populateSong);
  document.body.querySelector('#button6').addEventListener('click', populateSong);
  document.body.querySelector('#button7').addEventListener('click', populateSong);
  document.body.querySelector('#button8').addEventListener('click', populateSong);
  document.body.querySelector('#button9').addEventListener('click', populateSong);
  document.body.querySelector('#button10').addEventListener('click', populateSong);
  document.body.querySelector('#button1').addEventListener('click', removeSongOfPlay);
  document.body.querySelector('#button2').addEventListener('click', removeSongOfPlay);
  document.body.querySelector('#button3').addEventListener('click', removeSongOfPlay);
  document.body.querySelector('#button4').addEventListener('click', removeSongOfPlay);
  document.body.querySelector('#button5').addEventListener('click', removeSongOfPlay);
  document.body.querySelector('#button6').addEventListener('click', removeSongOfPlay);
  document.body.querySelector('#button7').addEventListener('click', removeSongOfPlay);
  document.body.querySelector('#button8').addEventListener('click', removeSongOfPlay);
  document.body.querySelector('#button9').addEventListener('click', removeSongOfPlay);
  document.body.querySelector('#button10').addEventListener('click', removeSongOfPlay);
}
artistClick();


function removeSongOfPlay() {
    let buttons = body.querySelector('.buttons');
    let songInPlay = body.querySelector('#song-in-play');
    buttons.onclick = function() {
      songInPlay.parentNode.removeChild(songInPlay);
      // return false;
    }
      return buttons.onclick();
}
removeSongOfPlay();


// function gameRules() {
//       let answer = ;
      // for (let song in Songs);
//       if (Songs[currentSong].songTitle === Songs[currentSong].artist) {
//       console.log('true!');
//     } else {
//       answer = false;
//     }
// }
//   gameRules();

//    if (answer === true)
//     if answer is true, border of .song-list-column will flash green
//     if answer is false, border of .song-list-column will flash red
//    when an artist is clicked the prevous Songs[song].Title is removed
      // when an artist is clicked, activate populateSong function
// }

// WHEN START GAME IS CLICKED, BRING IN A NEW SONG IN PLAY
// WHEN ARTIST IS CLICKED, BRING IN A NEW SONG IN PLAY













    // for (let song in Songs) {
    //     // console.log(Songs[song]);
    //     if (Math.random() < 1/++count) {
    //       result = Songs[song].songTitle;
    //        // + Songs[song].mp3URL;
    //     }
    //       result = Songs[song].songTitle;
    // }

 // for (let song in Songs) {
 //        // console.log(Songs[song]);
 //      let randomNumber = Math.floor(Math.random() * 9) + 1;

 //        let currentSong = 'song' + num;
 //        guessedSongs.push(currentSong);
 //        result = Songs[song].songTitle;

 //  }


// var aud = new Audio();
// aud.src = 'https://upload.wikimedia.org/wikipedia/en/f/f3/Even_Flow_%28Pearl_Jam_song_-_sample%29.ogg';
// aud.play();


// function Choice () {
//     var box = document.getElementById("box");
//     var yes = document.getElementById("yes");
//     var no = document.getElementById("no");

//     if (yes.clicked == true) {
//         box.style.backgroundColor = "red";
//     } else if (no.clicked == true) {
//         box.style.backgroundColor = "green";
//     } else {
//         box.style.backgroundColor = "purple";
//     };
// };

// Choice ();


// function populateSong() {
//   let newSong = document.createElement('div');
//   newSong.setAttribute('id', 'song-in-play');
//   songLocation.appendChild(newSong);

//   // let pressPlay = document.createElement('audio');
//   // pressPlay.setAttribute('src', Songs.mp3URL);
//   // newSong.appendChild(pressPlay);
//   // pressPlay.play();
//   let randomSong = function pickRandomSong() {
//     let result;
//     let guessedNumbers = [];
//     for (let song in Songs) {
//         // console.log(Songs[song]);
//       let number = null;
//       let randomNumber = (Math.floor(Math.random() * 10) + 1);
//       while (!number) {
//         if (guessedNumbers.includes(randomNumber)) {
//           randomNumber = (Math.floor(Math.random() * 10) + 1);
//         } else {
//           number = randomNumber;
//           guessedNumbers.push(number);
//         }
//       }
//         // result = randomNumber;
//       let currentSong = 'song' + number;
//       result = Songs[currentSong].songTitle;
//     }
//     return result;
//   };
//   newSong.innerHTML = randomSong();
// }

//   // let pressPlay = document.createElement('audio');
//   // pressPlay.setAttribute('src', Songs.mp3URL);
//   // newSong.appendChild(pressPlay);
//   // pressPlay.play();
//   let randomSong = function pickRandomSong() {

  // pressPlay.play();
