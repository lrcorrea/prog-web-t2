
var app;
var $window = $(window);

function Main() {
    this.init();
};

Main.prototype.init = function(){
    console.log('init');
};

jQuery(function() {
    app = new Main();
});