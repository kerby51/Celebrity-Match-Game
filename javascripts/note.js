function flyingMusicNotes(numNotes) {

  let $note;
  const $body = $('body');

  for (let i = 0; i < numNotes; i++) {
    $note = $('<h1>').addClass('note').html('&#9834');
    $body.append($note);

    $note.animate({
      top: Math.floor(Math.random() * 180) - 35 + '%',
      left: Math.floor(Math.random() * 125) - 30 + '%',
      opacity: 0,
    }, 2000, 'linear');
  }
}

setInterval(() => {
  flyingMusicNotes(10);
}, 2000);
flyingMusicNotes(10);



