var game;

game = new Phaser.Game(800, 600, Phaser.AUTO, 'my-game');

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Results', Results);

game.state.start('Menu');
