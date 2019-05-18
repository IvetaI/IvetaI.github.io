var Game = {
    preload : function() {
     game.load.image('background', 'img/background1.png');
     game.load.image('undo', 'img/back.png');
     
    },
    create : function(){
        var background = game.add.image(-35,0,'background');
        background.scale.setTo(1.03,1.04);
        var undo = game.add.button(0,0,'undo', this.onclick);
        undo.scale.setTo(0.5,0.5);
        this.ajax();
    },
    update: function()
    {
        this.show();
    },
    onclick: function()
    {
        game.state.start('Menu');
        document.getElementById("clue").style.visibility = "hidden";
        document.getElementById("words").style.visibility = "hidden";
        document.getElementById("correct").style.visibility = "hidden";
        document.getElementById("wrong").style.visibility = "hidden"; 
        document.getElementById("do").style.visibility = "hidden"; 
    },
    
    show:function(){
      document.getElementById("clue").style.visibility = "visible";
        document.getElementById("words").style.visibility = "visible";
        document.getElementById("correct").style.visibility = "visible";
        document.getElementById("wrong").style.visibility = "visible";
        document.getElementById("do").style.visibility = "visible";
    },
    ajax: function()
    { 
        var ajax = new XMLHttpRequest();
        var method = "GET";
        var url = "get.php";
        var asynchronous = true;

        ajax.open(method, url, asynchronous); 
        // siunčiam ajax užklausa
        ajax.send();
        //gauname atsakymą
       
        ajax.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
           { 
            console.log(this.responseText);
               // convertuojam json i array
             var data = JSON.parse(this.responseText);
             console.log(data);

             //Žaidimas
              
              var i = 1; 
              var word = data[i].word;
              document.getElementById("words").innerHTML = word;
              // jei pavyzdį paspaudžia
              var example = data[i].example;
              document.getElementById("clue").onclick = function()
              {
                alert(example);
              }
              // raidės
              var correct = data[i].correct;
              document.getElementById("correct").innerHTML = correct;
              var wrong = data[i].wrong;
              document.getElementById("wrong").innerHTML = wrong;
              //raidžių paspaudimai
              document.getElementById("wrong").onclick = function(){
                alert("Neteisingai");              
              }
              document.getElementById("correct").onclick = function(){
                alert("Teisingai");
            }
            }
        }
    }      
};
 