var menu = $("nav")
var menuLinks = menu.find("a");


menuLinks.on ("click", function(event){
    event.preventDefault();

//ACTIVE MENU LINKS

    $(this).addClass("active")
           .siblings("a").removeClass("active");

//SCROLLOVANIE + LOCATION HASH 
    var id = this.hash;

    $("html, body").animate({ scrollTop: $(id).offset().top}, 2000, function(){
        window.location.hash = id;
    }); 
});


//OVERLAY + IMG

var gallery = $("article")
var overlay = $("<div/>", {id: "overlay"})
var image = $("<div/>", {id: "image"});

overlay.appendTo("body").hide();
gallery.find(".img").on("click", function(){
    overlay.fadeIn().html(image);        
});

overlay.on("click", function() {
    $(this).hide();
});

$(document).on("keyup", function(event){
    if (event.which===27) overlay.fadeOut();
}); 

//BACK-TO-TOP

var back = $("#back-to-top")
var win = $(window);

back.hide()
    .on ("click", function(){
    $("body,html").animate({scrollTop: 0},1000);
});

win.on("scroll", function() {
    if (win.scrollTop() >= 400) back.fadeIn();
    else back.hide();
});

//SEARCH

var searchForm = $("#search-form")
var searchIcon = $("#search-icon");

searchForm.hide();
searchIcon.on("click", function(event) {
    event.preventDefault();
    $(this).hide();
    searchForm.fadeIn();
});

//Dark mode

var darkIcon = $("#dark-mode")

darkIcon.on("click", function () {
    $("html").toggleClass("dark");
})
