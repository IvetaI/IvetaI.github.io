var Menu = {

    preload : function() {
        game.load.image('button', 'img/button.png');
        game.load.image('resultButton', 'img/button2.png')
        game.load.image('background', 'img/background1.png');
        game.load.image('logout', 'img/logout.png');
    },

    create: function () {
        var background = game.add.image(0,0,'background');
        background.scale.setTo(0.80 ,0.79);
        var start = game.add.button(300, 320, 'button', this.actionOnClick);
        start.scale.setTo(0.35,0.35);
        var result = game.add.button(300, 420, 'resultButton', this.actionOnResultClick);
        result.scale.setTo(0.35,0.35);
        var logout = game.add.button(750, 20, 'logout', this.logout);
        logout.scale.setTo(0.75,0.75);
        var text = "Žodžių diktantas";
        var text2= "puiki mokymosi priemonė išmokti \nrašyti supanašėjusius ir susiliejusius priebalsius\n";
        var style = {font: "50px Comic Sans MS", fill: "#000000", align: "left" };
        var style2= {font: "27px Comic Sans MS", fill: "#000000", align: "center" };
        var t = game.add.text(245, 120, text, style);
        var t1 = game.add.text(135, 205, text2, style2);    
    },
     actionOnClick: function()
    {
       game.state.start('Game');
    },
    actionOnResultClick: function()
    {
        game.state.start('Results');
    },
    logout: function()
    {
        window.location = "logout.php";
    }
};
