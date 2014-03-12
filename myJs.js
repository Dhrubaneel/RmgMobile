$(document).ready(function(){

$("#menu").on("tap",function(){
$("#menuList").slideToggle();
});

$("li>a").on("tap",function(){
$("#menuList").slideUp();
});

});