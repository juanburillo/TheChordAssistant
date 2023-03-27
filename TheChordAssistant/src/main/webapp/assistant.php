<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>TheChordAssistant &#183; Asistente</title>
  <?php
  include = "./includes/head.php"
  ?>
  <!-- CSS -->
  <link rel="stylesheet" href="./css/assistant.css">
  <link rel="stylesheet" href="./css/chordPage.css">
  <!-- JS -->
  <script src="./js/piano.js"></script>
</head>

<body>
  <header>
    <?php
    include "./includes/header.php";
    ?>
  </header>

  <main>
    <div id="note-switch">
      <p>Mostrar nombre de notas</p>
      <div id="slider-wrapper">
        <label class="switch">
          <input type="checkbox" name="switch">
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <div id="piano">
      <div id="black-tiles">
        <div class="black" id="one"><p class="note-name">F# Gb</p></div>
        <div class="black" id="two"><p class="note-name">G# Ab</p></div>
        <div class="black" id="three"><p class="note-name">A# Bb</p></div>
        <div class="black" id="four"><p class="note-name">C# Db</p></div>
        <div class="black" id="five"><p class="note-name">D# Eb</p></div>
        <div class="black" id="six"><p class="note-name">F# Gb</p></div>
        <div class="black" id="seven"><p class="note-name">G# Ab</p></div>
      </div>
      <div id="white-tiles">
        <div class="white"><p class="note-name">F</p></div>
        <div class="white"><p class="note-name">G</p></div>
        <div class="white"><p class="note-name">A</p></div>
        <div class="white"><p class="note-name">B</p></div>
        <div class="white"><p class="note-name">C</p></div>
        <div class="white"><p class="note-name">D</p></div>
        <div class="white"><p class="note-name">E</p></div>
        <div class="white"><p class="note-name">F</p></div>
        <div class="white"><p class="note-name">G</p></div>
        <div class="white" id="last-white"><p class="note-name">A</p></div>
      </div>
    </div>

    <div id="bottom-buttons">
      <img src="./resources/img/icons/reset.svg" id="resetButton">
      <button id="chordButton">Introduce el acorde y haz click aquí</button>
      <img src="./resources/img/icons/volume-on.svg" id="volumeButton">
    </div>
  </main>

  <section id="chord-page">
    <div id="header">
      <h1 id="chord-name"></h1>
      <p id="chord-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, a eaque odio necessitatibus molestiae adipisci. Itaque minima mollitia illo minus ut eligendi, vitae repudiandae iure, magni aliquam obcaecati laudantium adipisci!</p>
    </div>

    <div id="main-image">
      <img id="chord-image" src="">
    </div>

    <div id="variations">
      <h2 id="variations-title"></h2>
      <div id="chord-inversions">
        <h3>Primera Inversión</h3>
        <img id="first-inversion" src="">
        <h3>Segunda Inversión</h3>
        <img id="second-inversion" src="">
      </div>
    </div>

    <div id="songs">
      <h2 id="songs-title"></h2>
      <div id="song">
      </div>
    </div>

    <div id="scales-wrapper">
      <h2>ESCALAS RELACIONADAS</h2>
      <div id="scales">
        <h3 class="scale-title"></h3>
        <img class="scale" src="">
        <h3 class="scale-title"></h3>
        <img class="scale" src="">
        <h3 class="scale-title"></h3>
        <img class="scale" src="">
      </div>
    </div>
    
    <button id="goUp">Volver Arriba</button>
  </section>

  <footer>
    <?php
    include "./includes/footer.php"
    ?>
  </footer>
</body>

</html>