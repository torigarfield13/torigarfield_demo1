var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 1000,
};
var game = new Phaser.Game(config);
var score = 0; 
var scoreText;
game.state.add('state0', demo.state0);
game.state.add('state1', demo.state1);
game.state.start('state0');
