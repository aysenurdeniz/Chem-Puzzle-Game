$(document).ready(function() {
    var rows = 4, columns = 4;
    var pieces = "";
    for (var i = 0, top = 0; i < rows; i++, top -= 100) {
        for (var j = 0, left = 0; j < columns; j++, left -= 100) {
            pieces += "<div style='background-image:none' class = 'piece' > < /div>";
        }
    }
    $("#puzzleContainer").html(pieces);
    $("#butonStart").click(function (){
        var pieces =$("#puzzleContainer div");
        pieces.each(function (){
            var leftPosition =
                    Math.floor(Math.random()*290) + "px";
            var topPosition=
                    Math.floor(Math.random()*290) + "px";
            $(this).css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            })
            $("#pieceContainer").append($(this));
    });
});
