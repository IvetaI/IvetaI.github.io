var Menu = {

    preload : function() {
        game.load.image('button', 'img/button.png');
        game.load.image('background', 'img/background1.png');
    },

    create: function () {
        var background = game.add.image(-35,0,'background');
        background.scale.setTo(1.03,1.04);
        var start = game.add.button(350, 425, 'button', this.actionOnClick);
        start.scale.setTo(0.5,0.5);
        var text = "Žodžių diktantas";
        var text2= "puiki mokymosi priemonė išmokti \nrašyti supanašėjusius ir susiliejusius priebalsius\n";
        var style = {font: "50px Comic Sans MS", fill: "#000000", align: "left" };
        var style2= {font: "30px Comic Sans MS", fill: "#000000", align: "center" };
        var t = game.add.text(330, 150, text, style);
        var t1 = game.add.text(190, 250, text2, style2);

       
    },
     actionOnClick: function()
    {
       game.state.start('Game');
    }
};
