var data, name, score, i, a, style, b, numberText;
var Results = {

    preload : function() {
        game.load.image('background', 'img/background1.png');
        game.load.image('undo', 'img/back.png');
        this.ajax();
    },

    create: function () {
        var background = game.add.image(0,0,'background');
        background.scale.setTo(0.80 ,0.79);
        var undo = game.add.button(0,0,'undo', this.onClick);
        undo.scale.setTo(0.5,0.5);
        style ={font: "25px Comic Sans MS", fill: "#000000"};
        var style2= {font: "45px Comic Sans MS", fill: "#000000", align: "center" };
        var text = "TOP 5 žaidėjai";
        var t = game.add.text(250, 120, text, style2);

        var vardas = "Vardas";
        var v  = game.add.text(340, 200,vardas,style);

        var nr = "Nr. ";
        var n  = game.add.text(270, 200, nr,style);

        var taskai = "Taškai";
        var tas = game.add.text(470,200,taskai, style);

        i = 0;
        a = 200;
        b = 1;
    },
    update: function()
    {
        if(i<5)
        {
            a = a + 40;
            number = b++;
            numberText = game.add.text(280,a,number.toString(),style);
            name = game.add.text(350, a, data[i].name, style);
            var s = data[i].scores;
            score = game.add.text(490, a, s.toString(), style);
            i++;
        } 
    },
    ajax: function()
    {
        var ajax = new XMLHttpRequest();
        var method = "GET";
        var url = "results.php";
        var asynchronous = false;        
        ajax.onreadystatechange = function()
        {
          if(this.readyState == 4 && this.status == 200)
           { 
            data = JSON.parse(this.responseText);
            console.log(data);
           }
        };
        ajax.open(method, url, asynchronous);
        ajax.send();

    },
     onClick: function()
    {
       game.state.start('Menu');
    }
};