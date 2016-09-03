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


let body = document.querySelector('body');
let songLocation = document.querySelector('.song-list-column');
let result;
let guessedNumbers = [];
let modal = document.getElementById('myModal');
let modalScore = document.getElementsByClassName('modal-score');
let buttons = document.querySelectorAll('.buttons');
let span = document.getElementsByClassName('close')[0];
let activeSong = {};
let score = 0;


function startGame() {
  body.querySelector('.startButton').addEventListener('click', populateSong);
}
startGame();


// function gameOver() {
//   if (guessedNumbers.length >= 10) {
//     document.querySelector('.modal-score').innerHTML = 'You Scored ' + score + ' out of 10!';
//     modal.style.display = 'block';
//   };
//   span.onclick = function() {
//     modal.style.display = 'none';
//   };
// }


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
    activeSong = Songs[currentSong];
    return result;
  };
  newSong.innerHTML = randomSong();
}


function artistClick() {
  const buttons = document.querySelectorAll('.buttons');
  for (let button of buttons) {
    button.addEventListener('click', checkAnswer);
  }
  for (let button of buttons) {
    button.addEventListener('click', populateSong);
  }
  for (let button of buttons) {
    button.addEventListener('click', removeSongOfPlay);
  }
  // button.addEventListener('click', function(){
  //   populatesong()
  //   checkanswer()
  //   removeSongOfPlay()
  // })
}
artistClick();


function removeSongOfPlay() {
  let buttons = body.querySelectorAll('.buttons');
  let songInPlay = body.querySelector('#song-in-play');
  buttons.onclick = function() {
    songInPlay.parentNode.removeChild(songInPlay);
      // return false;
  };
  return buttons.onclick();
}


function checkAnswer() {
  // if (document.querySelectorAll('.buttons').innerText === activeSong.artist) {
  // const songLocation = document.querySelector('.song-list-column');
  if (event.target.innerText === activeSong.artist) {
    score += 1;
    document.getElementById('actual-score').innerHTML = score + '/10';
    let $blinkColumn = $('.song-list-column');
    setTimeout(function() {
      $blinkColumn.addClass('flash2');
      setTimeout(function() {
        $blinkColumn.removeClass('flash2');
      }, 200);
    });
  } else {
    let $blinkColumn = $('.song-list-column');
    setTimeout(function() {
      $blinkColumn.addClass('flash');
      setTimeout(function() {
          $blinkColumn.removeClass('flash');
    }, 200);
    });
  }
}

function gameOver() {
  if (guessedNumbers.length >= 10) {
    document.querySelector('.modal-score').innerHTML = 'You Scored ' + score + ' out of 10!';
    modal.style.display = 'block';
  };
  span.onclick = function() {
    modal.style.display = 'none';
  };
  window.reload();
}



// var aud = new Audio();
// aud.src = 'https://upload.wikimedia.org/wikipedia/en/f/f3/Even_Flow_%28Pearl_Jam_song_-_sample%29.ogg';
// aud.play();





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


