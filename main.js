$(document).ready(function(){

    $(".btn").click(function(){
        var value=$(this).text();
        console.log(value);
        $("#calc").attr("value",value);
        $("#calc").attr("placeholder",value);
    })




});