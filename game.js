var score, word1, word2, scoreTextValue, random, data, correct, wrong, word, example, i ; 
var Game = {

     preload : function() {
     game.load.image('background', 'img/background1.png');
     game.load.image('undo', 'img/back.png');
     this.ajax();
     
    },

    create : function(){

        score = 0;
        i = 0;
        var background = game.add.image(0,0,'background');
        background.scale.setTo(0.80 ,0.79);
        var undo = game.add.button(0,0,'undo', this.onclick);
        undo.scale.setTo(0.5,0.5);

        //Taskai
        random = 0;
        var textStyle_Key = { font: "50px Comic Sans MS", fill: "#FF0000", align: "center" };
        var textStyle_Value = { font: "50px Comic Sans MS", fill: "#000", align: "center" };
        game.add.text(260, 450, "TAŠKAI: ", textStyle_Key);
        scoreTextValue = game.add.text(490, 450, score.toString(), textStyle_Value);
       
    },

    update: function()
    {    
      this.show();
      if(i < 10){
          var size = data.length;
          word = data[random].word;
          document.getElementById("words").innerHTML = word;

          correct = data[random].correct;
          word1 = data[random].correct;
          word2 = data[random].wrong;

          if (random % 2 === 0 ) {
            document.getElementById("word1").innerHTML = word1;
            document.getElementById("word2").innerHTML = word2;
          }
          else{
            document.getElementById("word1").innerHTML = word2;
            document.getElementById("word2").innerHTML = word1;
          }

         
          document.getElementById("word1").onclick = function(){
            if(document.getElementById("word1").innerHTML == correct) {
                score++;
                scoreTextValue.text = score.toString(); 
                i++;
                random = Math.floor((Math.random() * size ) + 0);
            }
            else{
              i++;
                document.getElementById("name").innerHTML = "Neteisingai";
                document.getElementById("text").innerHTML = word + "<br>" + "Teisingas variantas: " + correct;
                modal();
                random = Math.floor((Math.random() * size ) + 0);
            }
          }
          document.getElementById("word2").onclick = function() {
            if(document.getElementById("word2").innerHTML == correct) {
                score++;
                scoreTextValue.text = score.toString(); 
                i++;
                random = Math.floor((Math.random() * size ) + 0);
            }
            else{
                i++;
                document.getElementById("name").innerHTML = "Neteisingai";
                document.getElementById("text").innerHTML = word + "<br>" + "Teisingas variantas: " + correct;
                modal();
                random = Math.floor((Math.random() * size ) + 0);
            }
          }

          example = data[random].example;
           document.getElementById("clue").onclick = function()
              {
                document.getElementById("name").innerHTML = "Pavyzdys";
                document.getElementById("text").innerHTML = example;
                modal();
              }      
      }

      else if(i == 10)
      { 

      	this.sendScore();
        document.getElementById("name").innerHTML = "Taškų skaičius: " + score;
        
        if(score < 5){
          document.getElementById("text").innerHTML = "Reiktų dar pasimokyti";
        }
        else if(score == 5){
            document.getElementById("text").innerHTML = "Puse jau įveikta";
        }
        else if(score > 5 || score < 7) {
          document.getElementById("text").innerHTML = "Tau sekasi vis geriau";
        }
        else if(score > 6 || score < 10) {
          document.getElementById("text").innerHTML = "Jau beveik tobula";
        }        
        else if(score == 10) {
          document.getElementById("text").innerHTML = "Šaunuolis !";
        }
        modal();
        this.onclick();
      }
    },

    onclick: function()
    {
        game.state.start('Menu');
        document.getElementById("game").style.visibility = "hidden";
    },
    
    show: function(){
        document.getElementById("game").style.visibility = "visible";    
    },

    sendScore: function()
    {
        var ajax = new XMLHttpRequest();
           
        ajax.onreadystatechange = function()
        {
          if(this.readyState == 4 && this.status == 200)
           { 
            console.log("nusiunte");
           }
        };
        ajax.open("GET", "post.php?q="+score, false);
        ajax.send();    
    },
    ajax: function()
    {
        var ajax = new XMLHttpRequest();
        var method = "GET";
        var url = "get.php";
        var asynchronous = false;        
        ajax.onreadystatechange = function()
        {
          if(this.readyState == 4 && this.status == 200)
           { 
            data = JSON.parse(this.responseText);
           }
        };
        ajax.open(method, url, asynchronous);
        ajax.send();
    }
};
function modal()
{
                var modal = document.getElementById("myModal");
                modal.style.display = "block";
                var span = document.getElementsByClassName("close")[0];
                span.onclick = function()     
                  {
                    modal.style.display = "none";
                  }
}