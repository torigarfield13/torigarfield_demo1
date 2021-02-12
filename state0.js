var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, megaman, speed = 6; 
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('megaman', 'assets/spritesheet/megamanSheet.png', 240, 270);
        game.load.image('background', 'assets/backgrounds/background.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');
        addChangeStateEventListeners();
        game.world.setBounds(0,0, 2800, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var background = game.add.sprite(0, 0, 'background');
        megaman = game.add.sprite(centerX, centerY, 'megaman');
        megaman.anchor.setTo(0.5, -0.9);
        megaman.scale.setTo(1.5, 1.5);
        game.physics.enable(megaman);
        megaman.body.collideWorldBounds = true;
        megaman.animations.add('walk', [0, 1, 2, 3, 4]);
        game.camera.follow(megaman); 
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    },
    update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            megaman.scale.setTo(-1.5, 1.5);
            megaman.x += speed; 
            megaman.animations.play('walk', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            megaman.scale.setTo(1.5, 1.5);
            megaman.x -= speed; 
            megaman.animations.play('walk', 14, true);
        } 
        else {
            megaman.animations.stop('walk');
            megaman.frame = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            megaman.y -= speed; 
            if (megaman.y < -9.5) {
                megaman.y = -9.5; 
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            megaman.y += speed; 
            if (megaman.y > 110.5) {
                megaman.y = 110.5; 
            }
        }
    }
};

function changeState(i, stateNum) {
    game.state.start('state' + stateNum); 
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}