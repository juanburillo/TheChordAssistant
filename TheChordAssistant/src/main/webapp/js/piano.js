// Función que genera una página dinámica dependiendo del acorde introducido
function generateChordPage(data) {
  let chordPage = document.querySelector("#chord-page");
  chordPage.style.display = "block";
  let footer = document.querySelector("footer");
  footer.style.display = "flex";
  
  let chordName = document.querySelector("#chord-name");
  chordName.innerHTML = data[0].name;

  let description = document.querySelector("#chord-description");
  description.innerHTML = data[0].description;

  let chordImage = document.querySelector("#chord-image");
  chordImage.src = "./resources/img/chords/fundamentals/" + data[0].image;
  
  let variationsTitle = document.querySelector("#variations-title");
  variationsTitle.innerHTML = "VARIACIONES DE " + data[0].name;

  let firstInversion = document.querySelector("#first-inversion");
  firstInversion.src = "./resources/img/chords/first_inversions/" + data[0].image;

  let secondInversion = document.querySelector("#second-inversion");
  secondInversion.src = "./resources/img/chords/second_inversions/" + data[0].image;
  
  let songTitle = document.querySelector("#songs-title");
  songTitle.innerHTML = "CANCIÓN DESTACADA CON " + data[0].name;

  let song = document.querySelector("#song");
  song.innerHTML = "<iframe id='song' style='border-radius:12px' src='https://open.spotify.com/embed/track/" + data[0].featuredSong + "?utm_source=generator' width='50%' height='352' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'>";
  
  let scaleTitles = document.getElementsByClassName("scale-title");
  scaleTitles[0].innerHTML = (data[0].scale1).replaceAll("_", " ");
  scaleTitles[1].innerHTML = (data[0].scale2).replaceAll("_", " ");
  scaleTitles[2].innerHTML = (data[0].scale3).replaceAll("_", " ");
  
  let scales = document.getElementsByClassName("scale");
  scales[0].src = "./resources/img/scales/" + data[0].scale1 + ".png";
  scales[1].src = "./resources/img/scales/" + data[0].scale2 + ".png";
  scales[2].src = "./resources/img/scales/" + data[0].scale3 + ".png";
  
}

// Función que realiza una petición ajax y pasa a la función "printData()" un JSON
function ajax(url) {
  fetch(url)
  .then(data => data.json())
  .then(data => generateChordPage(data));
}

/**
 * Función que, según la combinación de teclas del piano que se le pase por parámetro,
 * TODO
 * @param num (número con la combinación de teclas. Por ejemplo, "0_1_2" significa que
 * las tres primeras teclas han sido seleccionadas) 
 */
function getChord(num) {
  if(num == "0_4_7" || num == "4_7_12" || num == "0_7_16") {
    ajax("List?id=" + 6); // F
  } else if(num == "0_3_7" || num == "3_7_12" || num == "7_12_15" || num == "0_7_15") {
    ajax("List?id=" + 18); // Fm
  } else if(num == "1_5_8" || num == "5_8_13") {
    ajax("List?id=" + 7); // F#
  } else if(num == "1_4_8" || num == "4_8_13" || num == "1_8_16" || num == "8_13_16") {
    ajax("List?id=" + 19); // F#m
  } else if(num == "2_6_9" || num == "6_9_14") {
    ajax("List?id=" + 8); // G
  } else if(num == "2_5_9" || num == "5_9_14") {
    ajax("List?id=" + 20); // Gm
  } else if(num == "3_7_10" || num == "7_10_15") {
    ajax("List?id=" + 9); // G#
  } else if(num == "3_6_10" || num == "6_10_15") {
    ajax("List?id=" + 21); // G#m
  } else if(num == "4_8_11" || num == "8_11_16") {
    ajax("List?id=" + 10); // A
  } else if(num == "4_7_11" || num == "7_11_16") {
    ajax("List?id=" + 22); // Am
  } else if(num == "5_9_12" || num == "0_5_9") {
    ajax("List?id=" + 11); // A#
  } else if(num == "5_8_12" || num == "0_5_8") {
    ajax("List?id=" + 23); // A#m
  } else if(num == "6_10_13" || num == "1_6_10") {
    ajax("List?id=" + 12); // B
  } else if(num == "6_9_13" || num == "1_6_9") {
    ajax("List?id=" + 24); // Bm
  } else if(num == "7_11_14" || num == "2_7_11") {
    ajax("List?id=" + 1); // C
  } else if(num == "7_10_14" || num == "2_7_10") {
    ajax("List?id=" + 13); // Cm
  } else if(num == "8_12_15" || num == "0_8_15" || num == "3_8_12" || num == "0_3_8") {
    ajax("List?id=" + 2); // C#
  } else if(num == "8_11_15" || num == "3_8_11") {
    ajax("List?id=" + 14); // C#m
  } else if(num == "9_13_16" || num == "4_9_13" || num == "1_4_9" || num == "1_9_16") {
    ajax("List?id=" + 3); // D
  } else if(num == "9_12_16" || num == "4_9_12" || num == "0_4_9" || num == "0_9_16") {
    ajax("List?id=" + 15); // Dm
  } else if(num == "5_10_14" || num == "2_5_10") {
    ajax("List?id=" + 4); // D#
  } else if(num == "5_10_13" || num == "1_5_10") {
    ajax("List?id=" + 16); // D#m
  } else if(num == "6_11_15" || num == "3_6_11") {
    ajax("List?id=" + 5); // E
  } else if(num == "2_6_11" || num == "6_11_14") {
    ajax("List?id=" + 17); // Em
  } else {
    window.alert("Acorde no reconocido...\nPrueba con una triada mayor o menor.") // Else
  }
}

/**
 * Función que crea una cadena de texto según la combinación de teclas
 * seleccionadas al pulsar el botón principal del asistente.
 * @param tiles (array de teclas con valores booleanos que indican si están
 * seleccionadas o no)
 */
function processChord(tiles) {
  let chordCombination = "";
  let noNotesSelected = true; 
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i]) {
      chordCombination += i + "_";
      noNotesSelected = false;
    }
  }

  if(!noNotesSelected) {
    chordCombination = chordCombination.slice(0, -1);
    getChord(chordCombination);
  }
}

/**
 * Función que genera un sombreado para resaltar la tecla (blanca) seleccionada
 * y que establece dicha tecla como seleccionada en el array de booleanos
 * @param key (la tecla)
 * @param isSelected (el elemento del array de teclas seleccionadas que coincide con la tecla)
 * @param sound (el sonido que se generará al tocar una tecla)
 * @returns un valor booleano según si se ha seleccionado la tecla o deseleccionado.
 */
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

/**
 * Función que cambia el color de la tecla (negra) seleccionada
 * y que establece dicha tecla como seleccionada en el array de booleanos
 * @param key (la tecla)
 * @param isSelected (el elemento del array de teclas seleccionadas que coincide con la tecla)
 * @param sound (el sonido que se generará al tocar una tecla)
 * @returns un valor booleano según si se ha seleccionado la tecla o deseleccionado.
 */
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

/**
 * Función que carga un array vacío con diferentes audios de notas musicales
 * @param tiles (array de teclas)
 * @returns el array cargado
 */
function loadSounds(tiles) {
  tiles[0] = new Audio("./resources/audio/F2.mp3");
  tiles[1] = new Audio("./resources/audio/Gb2.mp3");
  tiles[2] = new Audio("./resources/audio/G2.mp3");
  tiles[3] = new Audio("./resources/audio/Ab2.mp3");
  tiles[4] = new Audio("./resources/audio/A2.mp3");
  tiles[5] = new Audio("./resources/audio/Bb2.mp3");
  tiles[6] = new Audio("./resources/audio/B2.mp3");
  tiles[7] = new Audio("./resources/audio/C3.mp3");
  tiles[8] = new Audio("./resources/audio/Db3.mp3");
  tiles[9] = new Audio("./resources/audio/D3.mp3");
  tiles[10] = new Audio("./resources/audio/Eb3.mp3");
  tiles[11] = new Audio("./resources/audio/E3.mp3");
  tiles[12] = new Audio("./resources/audio/F3.mp3");
  tiles[13] = new Audio("./resources/audio/Gb3.mp3");
  tiles[14] = new Audio("./resources/audio/G3.mp3");
  tiles[15] = new Audio("./resources/audio/Ab3.mp3");
  tiles[16] = new Audio("./resources/audio/A3.mp3");
  return tiles;
}

window.onload = function () {
  // Arrays para teclas blancas y negras
  let whiteTiles = document.getElementsByClassName("white");
  let blackTiles = document.getElementsByClassName("black");

  /* El array "selectedTiles" contiene valores booleanos que indican si 
  cierta tecla está seleccionada en el momento o no */
  let selectedTiles = new Array(17);
  // Por defecto, todas las teclas estarán sin seleccionar
  for (let i = 0; i < selectedTiles.length; i++) {
    selectedTiles[i] = false;
  }

  // El array "tileSounds" contiene los sonidos de cada una de las notas del piano
  let tileSounds = new Array(17);
  // Se carga el array
  tileSounds = loadSounds(tileSounds);

  // Event Listeners de todas las teclas del piano del asistente
  whiteTiles[0].addEventListener("click", function () {
    selectedTiles[0] = highlightWhiteKey(whiteTiles[0], selectedTiles[0], tileSounds[0]);
  });

  blackTiles[0].addEventListener("click", function () {
    selectedTiles[1] = highlightBlackKey(blackTiles[0], selectedTiles[1], tileSounds[1]);
  });

  whiteTiles[1].addEventListener("click", function () {
    selectedTiles[2] = highlightWhiteKey(whiteTiles[1], selectedTiles[2], tileSounds[2]);
  });

  blackTiles[1].addEventListener("click", function () {
    selectedTiles[3] = highlightBlackKey(blackTiles[1], selectedTiles[3], tileSounds[3]);
  });

  whiteTiles[2].addEventListener("click", function () {
    selectedTiles[4] = highlightWhiteKey(whiteTiles[2], selectedTiles[4], tileSounds[4]);
  });

  blackTiles[2].addEventListener("click", function () {
    selectedTiles[5] = highlightBlackKey(blackTiles[2], selectedTiles[5], tileSounds[5]);
  });

  whiteTiles[3].addEventListener("click", function () {
    selectedTiles[6] = highlightWhiteKey(whiteTiles[3], selectedTiles[6], tileSounds[6]);
  });

  whiteTiles[4].addEventListener("click", function() {
    selectedTiles[7] = highlightWhiteKey(whiteTiles[4], selectedTiles[7], tileSounds[7]);
  });

  blackTiles[3].addEventListener("click", function () {
    selectedTiles[8] = highlightBlackKey(blackTiles[3], selectedTiles[8], tileSounds[8]);
  });

  whiteTiles[5].addEventListener("click", function() {
    selectedTiles[9] = highlightWhiteKey(whiteTiles[5], selectedTiles[9], tileSounds[9]);
  });

  blackTiles[4].addEventListener("click", function () {
    selectedTiles[10] = highlightBlackKey(blackTiles[4], selectedTiles[10], tileSounds[10]);
  });

  whiteTiles[6].addEventListener("click", function() {
    selectedTiles[11] = highlightWhiteKey(whiteTiles[6], selectedTiles[11], tileSounds[11]);
  });

  whiteTiles[7].addEventListener("click", function() {
    selectedTiles[12] = highlightWhiteKey(whiteTiles[7], selectedTiles[12], tileSounds[12]);
  });

  blackTiles[5].addEventListener("click", function () {
    selectedTiles[13] = highlightBlackKey(blackTiles[5], selectedTiles[13], tileSounds[13]);
  });

  whiteTiles[8].addEventListener("click", function() {
    selectedTiles[14] = highlightWhiteKey(whiteTiles[8], selectedTiles[14], tileSounds[14]);
  });

  blackTiles[6].addEventListener("click", function () {
    selectedTiles[15] = highlightBlackKey(blackTiles[6], selectedTiles[15], tileSounds[15]);
  });

  whiteTiles[9].addEventListener("click", function() {
    selectedTiles[16] = highlightWhiteKey(whiteTiles[9], selectedTiles[16], tileSounds[16]);
  });

  // Función que controla el mecanismo de mostrar los nombres de las notas
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

  /* Función que controla el evento de "click" sobre el botón principal del asistente que inicia
  el procesamiento del acorde */
  let chordButton = document.querySelector("#chordButton");
  chordButton.addEventListener("click", function() {
    processChord(selectedTiles);
  });

  // Función que controla el reseteo de teclas seleccionadas
  let resetButton = document.querySelector("#resetButton");
  resetButton.addEventListener("click", function() {
    for(let i = 0; i < whiteTiles.length; i++) {
      whiteTiles[i].style.boxShadow = "none";
    }
    for(let i = 0; i < blackTiles.length; i++) {
      blackTiles[i].style.backgroundColor = "black";
    }
    for(let i = 0; i < selectedTiles.length; i++) {
      selectedTiles[i] = false;
    }
  });

  // Función que mutea / desmutea el audio al seleccionar teclas en el piano. El icono de sonido cambia.
  let volumeButton = document.querySelector("#volumeButton");
  volumeButton.addEventListener("click", function() {
    console.log(volumeButton.src.search("on.svg"));
    if (volumeButton.src.search("on.svg") == -1) {
      volumeButton.src = "./resources/img/icons/volume-on.svg";
      for(let i = 0; i < tileSounds.length; i++) {
        tileSounds[i].muted = false;
      }
    } else {
      volumeButton.src = "./resources/img/icons/volume-off.svg";
      for(let i = 0; i < tileSounds.length; i++) {
        tileSounds[i].muted = true;
      }
    }
  });
  
  // TODO
  document.querySelector("#goUp").addEventListener("click", function() {	  
	  window.location.href = "#top";
  });

};
