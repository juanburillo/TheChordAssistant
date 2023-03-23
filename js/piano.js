function highlightWhiteKey(key, isSelected) {
  if (isSelected) {
    key.style.boxShadow = "none";
    isSelected = false;
  } else {
    key.style.boxShadow = "inset 0 0 20px 10px #91a8a4";
    isSelected = true;
  }
  return isSelected;
}

function highlightBlackKey(key, isSelected) {
  if (isSelected) {
    key.style.backgroundColor = "black";
    isSelected = false;
  } else {
    key.style.backgroundColor = "#91a8a4";
    key.style.border = "3px solid black";
    key.style.borderTop = "none";
    isSelected = true;
  }
  return isSelected;
}

window.onload = function () {
  let whiteTiles = document.getElementsByClassName("white");
  let blackTiles = document.getElementsByClassName("black");

  let tiles = new Array(16);

  for (let i = 0; i < tiles.length; i++) {
    tiles[i] = false;
  }

  // Tile Event Listeners
  whiteTiles[0].addEventListener("click", function () {
    tiles[0] = highlightWhiteKey(whiteTiles[0], tiles[0]);
  });

  blackTiles[0].addEventListener("click", function () {
    tiles[1] = highlightBlackKey(blackTiles[0], tiles[1]);
  });

  whiteTiles[1].addEventListener("click", function () {
    tiles[2] = highlightWhiteKey(whiteTiles[1], tiles[2]);
  });

  blackTiles[1].addEventListener("click", function () {
    tiles[3] = highlightBlackKey(blackTiles[1], tiles[3]);
  });

  whiteTiles[2].addEventListener("click", function () {
    tiles[4] = highlightWhiteKey(whiteTiles[2], tiles[4]);
  });

  blackTiles[2].addEventListener("click", function () {
    tiles[5] = highlightBlackKey(blackTiles[2], tiles[5]);
  });

  whiteTiles[3].addEventListener("click", function () {
    tiles[6] = highlightWhiteKey(whiteTiles[3], tiles[6]);
  });

  whiteTiles[4].addEventListener("click", function() {
    tiles[7] = highlightWhiteKey(whiteTiles[4], tiles[7]);
  });

  blackTiles[3].addEventListener("click", function () {
    tiles[8] = highlightBlackKey(blackTiles[3], tiles[8]);
  });

  whiteTiles[5].addEventListener("click", function() {
    tiles[9] = highlightWhiteKey(whiteTiles[5], tiles[9]);
  });

  blackTiles[4].addEventListener("click", function () {
    tiles[10] = highlightBlackKey(blackTiles[4], tiles[10]);
  });

  whiteTiles[6].addEventListener("click", function() {
    tiles[11] = highlightWhiteKey(whiteTiles[6], tiles[11]);
  });

  whiteTiles[7].addEventListener("click", function() {
    tiles[12] = highlightWhiteKey(whiteTiles[7], tiles[12]);
  });

  blackTiles[5].addEventListener("click", function () {
    tiles[13] = highlightBlackKey(blackTiles[5], tiles[13]);
  });

  whiteTiles[8].addEventListener("click", function() {
    tiles[14] = highlightWhiteKey(whiteTiles[8], tiles[14]);
  });

  blackTiles[6].addEventListener("click", function () {
    tiles[15] = highlightBlackKey(blackTiles[6], tiles[15]);
  });

  whiteTiles[9].addEventListener("click", function() {
    tiles[16] = highlightWhiteKey(whiteTiles[9], tiles[16]);
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
