const Songs = {
  song1: {
    songTitle: ' "Even Flow" ',
    artist: 'Pearl Jam',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Even_Flow_%28Pearl_Jam_song_-_sample%29.ogg',
  },
  song2: {
    songTitle: ' "Swimming Pools" ',
    artist: 'Kendrick Lamar',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Kendrick_Lamar_-_Swimming_Pools_%28Drank%29.ogg',
  },
  song3: {
    songTitle: ' "Rumour Has It" ',
    artist: 'Adele',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/1/10/Adele_-_Rumour_Has_It.ogg',
  },
  song4: {
    songTitle: ' "Back in Black" ',
    artist: 'AC/DC',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/4/45/ACDC_-_Back_In_Black-sample.ogg',
  },
  song5: {
    songTitle: ' "Karma Chameleon" ',
    artist: 'Culture Club',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Culture_club-karma_chameleon-28_sec.ogg',
  },
  song6: {
    songTitle: ' "Mirrors" ',
    artist: 'Justin Timberlake',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Justin_Timberlake_-_Mirrors.ogg',
  },
  song7: {
    songTitle: ' "Come Together" ',
    artist: 'The Beatles',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Beatles_cometogether.ogg',
  },
  song8: {
    songTitle: ' "Poker Face" ',
    artist: 'Lady Gaga',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Lady_GaGa-Poker_Face.ogg',
  },
  song9: {
    songTitle: ' "Fight For Your Right" ',
    artist: 'Beastie Boys',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Fight_for_Your_Right_by_the_Beastie_Boys.ogg',
  },
  song10: {
    songTitle: ' "Walk This Way" ',
    artist: 'Aerosmith',
    mp3URL: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Walk_This_Way_%28Aerosmith%29_sample.ogg',
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


function populateSong() {
  let newSong = document.createElement('div');
  newSong.setAttribute('id', 'song-in-play');
  songLocation.appendChild(newSong);
  const randomSong = function pickRandomSong() {
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
    let audio = document.createElement('audio');
    audio.setAttribute('id', 'songPlaying');
    songLocation.appendChild(audio);
    audio.src = Songs[currentSong].mp3URL;
    result = Songs[currentSong].songTitle;
    activeSong = Songs[currentSong];
    audio.play();
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
  let songPlaying = body.querySelector('#songPlaying');
  buttons.onclick = function() {
    songInPlay.parentNode.removeChild(songInPlay);
    songPlaying.parentNode.removeChild(songPlaying);
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


