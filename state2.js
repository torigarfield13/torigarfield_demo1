demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffff00';
        addChangeStateEventListeners();
    },
    update: function(){}
};