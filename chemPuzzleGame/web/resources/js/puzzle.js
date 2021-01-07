$(document).ready(function() {
    var rows = 7, columns = 7;
    var pieces = "";
    /*puzzleContainer a resmin olduğu kareleri oluşturma döngüsü*/
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece' data-order=" + order + "></div>";
        }
    }
    /*puzzleContainer a resmin olduğu kareleri ekleme işlemi*/
    $("#puzzleContainer").html(pieces);
    $("#btnStart").click(function() {
        /*puzzleContainer divleri üzerinde işemler tanımlanacak*/
        var pieces = $("#puzzleContainer div");
        /*puzzleContainer ın konumlandırılması*/
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece").css({
                /*parçaların yeni pozisyonları*/
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer").append($(this));
        });
        /*puzzleContainer a resmin olmadığı boş kareleri oluşmak için döngü*/
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece droppableSpace'></div>";
            }
        }
        /*puzzleContainer a resmin olmadığı boş kareleri ekleme lemi*/
        $("#puzzleContainer").html(emptyString);
        $(this).hide();
        /* Yukarıdaki işlemlerden sonra reset butonunu göster*/
        $("#btnReset").show();
        /* efektlerin yazılacağı metot */
        implementLogic();
    });
    $("#btnReset").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer .droppedPiece").length != 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer .droppedPiece:eq(" + k + ")");
            var order = item.data("order");
            if (k != order) {
                $("pieceContainer").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        /*Yerleştirirken parçayı kareye tam yerleştirebilme */
        $(".draggablePiece").draggable({
            /*Aynı alana tek parça yerleştirmek için*/
            revert: "invalid",
            start: function() {
                /*Bir alana parça yerleştikten sonra oluşan droppedPiece özelliği varsa*/
                if ($(this).hasClass("droppedPiece"))
                    /*remove et*/
                    $(this).removeClass("droppedPiece");
                else
                    $(this).parent().removeClass("piecePresent");
            }
        });
        /*Yerleştirirken parçayı çeken efekt */
        $(".droppableSpace").droppable({
            /*Yerleştirirken büyük alan kapsayan parçaya gider */
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }
});