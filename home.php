<?php
session_start();
// Jei vartotojas neprisijunges, nukelti jį į prisijungimo puslapį
if (!isset($_SESSION['loggedin'])) {
  header('Location: index.html');
  exit();
}
?>

<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8"/>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

  <body>
    
 <div id="my-game" class='my-game'></div>
  <script src="phaser.min.js"></script>
  <script src="results.js"></script>
  <script src="menu.js"></script>
  <script src="game.js"></script>
  <script src="main.js"></script>


  <div id='game' class='my-words'style="visibility:hidden;" >
  <button id="clue" class ="clue" >Pavyzdys</button>
  <p id="words"></p>
  <p id="do">Pasirinkite tinkančią raidę</p>
  <p id="word1"></p>
  <p id="word2"></p> 
  </div>

  <div id="myModal" class="modal">

  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
     <p id="name">Pavyzdys</p> 
    </div>
    <div class="modal-body">
    <p id = "text">tekstas</p> 
    </div>
  </div>
</div>  
</body>
</html>
