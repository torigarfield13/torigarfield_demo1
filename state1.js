demo.state1 = function(){};
var cursors, vel = 500, rocks, grass, timeCheck = 0; 
demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grass', 'assets/tilemaps/grass.png');
        game.load.image('rock', 'assets/tilemaps/rock.png');
        game.load.image('megaman', 'assets/sprites/megaman.png');
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD'; 
        addChangeStateEventListeners();
        var map = game.add.tilemap('field');
        map.addTilesetImage('grass');
        map.addTilesetImage('rock');
        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');
        map.setCollisionBetween(3, 11, true, 'rocks');
        map.setCollision(1, true, 'grass');
        megaman = game.add.sprite(200, 200, 'megaman'); 
        megaman.scale.setTo(0.4, 0.4); 
        game.physics.enable(megaman);
        megaman.body.collideWorldBounds = true;
        cursors = game.input.keyboard.createCursorKeys();
        scoreText = this.add.text(16, 16, 'Score: ' + score, { fontSize: '32px', fill: '#000' });
        scoreText.fixedToCamera = true; 
    },
    update: function(){
        game.physics.arcade.collide(megaman, rocks, decreaseScoreRock);
        game.physics.arcade.collide(megaman, grass, decreaseScoreGrass);
        if (cursors.up.isDown){
            megaman.body.velocity.y = -vel;
        } 
        else if (cursors.down.isDown){
            megaman.body.velocity.y = vel;
        } else {
            megaman.body.velocity.y = 0; 
        }
        if (cursors.left.isDown){
            megaman.scale.setTo(0.4, 0.4);
            megaman.body.velocity.x = -vel;
        } 
        else if (cursors.right.isDown){
            megaman.scale.setTo(-0.4, 0.4);
            megaman.body.velocity.x = vel;
        } else {
            megaman.body.velocity.x = 0; 
        }
    }
};

function decreaseScoreRock() {
    if (game.time.now - timeCheck > 250) {
        score -= 10;
        scoreText.setText('Score: ' + score);
        timeCheck = game.time.now; 
    }
};

function decreaseScoreGrass() {
    if (game.time.now - timeCheck > 250) {
        score -= 5;
        scoreText.setText('Score: ' + score);
        timeCheck = game.time.now; 
    }
}