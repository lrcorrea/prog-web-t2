
var app;
var $window = $(window);

function Main() {
    this.init();
};

Main.prototype.init = function(){
    var hash = window.location.hash.substr(1);
    UIkit.scroll($window).scrollTo($('a[href="#'+hash+'"]'));
};

jQuery(function() {
    app = new Main();
});