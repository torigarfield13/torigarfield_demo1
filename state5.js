demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff9900';
        addChangeStateEventListeners();
    },
    update: function(){}
};