function highlightWhiteKey(key, isSelected, sound) {
  if (isSelected) {
    key.style.boxShadow = "none";
    isSelected = false;
  } else {
    key.style.boxShadow = "inset 0 0 20px 10px #91a8a4";
    isSelected = true;
    sound.play();
  }
  return isSelected;
}

function highlightBlackKey(key, isSelected, sound) {
  if (isSelected) {
    key.style.backgroundColor = "black";
    isSelected = false;
  } else {
    key.style.backgroundColor = "#91a8a4";
    key.style.border = "3px solid black";
    key.style.borderTop = "none";
    isSelected = true;
    sound.play();
  }
  return isSelected;
}

function loadSounds(tiles) {
  tiles[0] = new Audio("../audio/F2.mp3");
  tiles[1] = new Audio("../audio/Gb2.mp3");
  tiles[2] = new Audio("../audio/G2.mp3");
  tiles[3] = new Audio("../audio/Ab2.mp3");
  tiles[4] = new Audio("../audio/A2.mp3");
  tiles[5] = new Audio("../audio/Bb2.mp3");
  tiles[6] = new Audio("../audio/B2.mp3");
  tiles[7] = new Audio("../audio/C3.mp3");
  tiles[8] = new Audio("../audio/Db3.mp3");
  tiles[9] = new Audio("../audio/D3.mp3");
  tiles[10] = new Audio("../audio/Eb3.mp3");
  tiles[11] = new Audio("../audio/E3.mp3");
  tiles[12] = new Audio("../audio/F3.mp3");
  tiles[13] = new Audio("../audio/Gb3.mp3");
  tiles[14] = new Audio("../audio/G3.mp3");
  tiles[15] = new Audio("../audio/Ab3.mp3");
  tiles[16] = new Audio("../audio/A3.mp3");
  return tiles;
}

window.onload = function () {
  let whiteTiles = document.getElementsByClassName("white");
  let blackTiles = document.getElementsByClassName("black");

  let tileSelected = new Array(17);
  let tileSounds = new Array(17);
  tileSounds = loadSounds(tileSounds);

  for (let i = 0; i < tileSelected.length; i++) {
    tileSelected[i] = false;
  }

  // Tile Event Listeners
  whiteTiles[0].addEventListener("click", function () {
    tileSelected[0] = highlightWhiteKey(whiteTiles[0], tileSelected[0], tileSounds[0]);
  });

  blackTiles[0].addEventListener("click", function () {
    tileSelected[1] = highlightBlackKey(blackTiles[0], tileSelected[1], tileSounds[1]);
  });

  whiteTiles[1].addEventListener("click", function () {
    tileSelected[2] = highlightWhiteKey(whiteTiles[1], tileSelected[2], tileSounds[2]);
  });

  blackTiles[1].addEventListener("click", function () {
    tileSelected[3] = highlightBlackKey(blackTiles[1], tileSelected[3], tileSounds[3]);
  });

  whiteTiles[2].addEventListener("click", function () {
    tileSelected[4] = highlightWhiteKey(whiteTiles[2], tileSelected[4], tileSounds[4]);
  });

  blackTiles[2].addEventListener("click", function () {
    tileSelected[5] = highlightBlackKey(blackTiles[2], tileSelected[5], tileSounds[5]);
  });

  whiteTiles[3].addEventListener("click", function () {
    tileSelected[6] = highlightWhiteKey(whiteTiles[3], tileSelected[6], tileSounds[6]);
  });

  whiteTiles[4].addEventListener("click", function() {
    tileSelected[7] = highlightWhiteKey(whiteTiles[4], tileSelected[7], tileSounds[7]);
  });

  blackTiles[3].addEventListener("click", function () {
    tileSelected[8] = highlightBlackKey(blackTiles[3], tileSelected[8], tileSounds[8]);
  });

  whiteTiles[5].addEventListener("click", function() {
    tileSelected[9] = highlightWhiteKey(whiteTiles[5], tileSelected[9], tileSounds[9]);
  });

  blackTiles[4].addEventListener("click", function () {
    tileSelected[10] = highlightBlackKey(blackTiles[4], tileSelected[10], tileSounds[10]);
  });

  whiteTiles[6].addEventListener("click", function() {
    tileSelected[11] = highlightWhiteKey(whiteTiles[6], tileSelected[11], tileSounds[11]);
  });

  whiteTiles[7].addEventListener("click", function() {
    tileSelected[12] = highlightWhiteKey(whiteTiles[7], tileSelected[12], tileSounds[12]);
  });

  blackTiles[5].addEventListener("click", function () {
    tileSelected[13] = highlightBlackKey(blackTiles[5], tileSelected[13], tileSounds[13]);
  });

  whiteTiles[8].addEventListener("click", function() {
    tileSelected[14] = highlightWhiteKey(whiteTiles[8], tileSelected[14], tileSounds[14]);
  });

  blackTiles[6].addEventListener("click", function () {
    tileSelected[15] = highlightBlackKey(blackTiles[6], tileSelected[15], tileSounds[15]);
  });

  whiteTiles[9].addEventListener("click", function() {
    tileSelected[16] = highlightWhiteKey(whiteTiles[9], tileSelected[16], tileSounds[16]);
  });

  let noteSwitch = document.getElementsByName("switch")[0];
  noteSwitch.addEventListener("click", function() {
    let noteNames = document.getElementsByClassName("note-name");
    if(noteSwitch.checked) {
      for(let i = 0; i < noteNames.length; i++) {
        noteNames[i].style.display = "inline";
      }
    } else {
      for(let i = 0; i < noteNames.length; i++) {
        noteNames[i].style.display = "none";
      }
    }
  });

};
