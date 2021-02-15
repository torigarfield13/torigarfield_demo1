var hsText = [], hs = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffcc00';
        addChangeStateEventListeners();
        for (var i = 1; i < 11; i++) {
            game.add.text(500, 20 + (i * 90), i + '. ', {fontSize: '40px'}).anchor.setTo(1,0);
        }
        for (var i = 0; i < 10; i++) {
            hsText[i] = game.add.text(500, 20 + ((i + 1) * 90), hs[i], {fontSize: '40px'});
        }
    },
    update: function(){}
};