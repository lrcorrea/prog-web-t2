
var app;
var $window = $(window);

function Main() {
    this.init();
};

Main.prototype.init = function(){
    var hash = window.location.hash.substr(1);
    if(hash){
        setTimeout(function(){
            console.log($('#'+hash));
            UIkit.scroll($window).scrollTo($('#'+hash));
        }, 1000);
    }
};

jQuery(function() {
    app = new Main();
});