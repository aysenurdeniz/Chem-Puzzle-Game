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
        if ($("#puzzleContainer .droppedPiece").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer .droppedPiece:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
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

    /*---------------------------------------------------------------------------------- 2 ------------------- */
    
    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece2' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer2").html(pieces);
    $("#btnStart2").click(function() {
        var pieces = $("#puzzleContainer2 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece2").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer2").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece2 droppableSpace2'></div>";
            }
        }
        $("#puzzleContainer2").html(emptyString);
        $(this).hide();
        $("#btnReset2").show();
        implementLogic();
    });
    $("#btnReset2").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer2 .droppedPiece2").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer2 .droppedPiece2:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer2").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer2").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece2").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece2"))
                    $(this).removeClass("droppedPiece2");
                else
                    $(this).parent().removeClass("piecePresent2");
            }
        });
        $(".droppableSpace2").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent2");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent2");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 3 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece3' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer3").html(pieces);
    $("#btnStart3").click(function() {
        var pieces = $("#puzzleContainer3 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece3").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer3").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece3 droppableSpace3'></div>";
            }
        }
        $("#puzzleContainer3").html(emptyString);
        $(this).hide();
        $("#btnReset3").show();
        implementLogic();
    });
    $("#btnReset3").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer3 .droppedPiece3").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer3 .droppedPiece3:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer3").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer3").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece3").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece3"))
                    $(this).removeClass("droppedPiece3");
                else
                    $(this).parent().removeClass("piecePresent3");
            }
        });
        $(".droppableSpace3").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent3");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent3");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 4 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece4' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer4").html(pieces);
    $("#btnStart4").click(function() {
        var pieces = $("#puzzleContainer4 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece4").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer4").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece4 droppableSpace4'></div>";
            }
        }
        $("#puzzleContainer4").html(emptyString);
        $(this).hide();
        $("#btnReset4").show();
        implementLogic();
    });
    $("#btnReset4").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer4 .droppedPiece4").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer4 .droppedPiece4:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer4").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer4").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece4").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece4"))
                    $(this).removeClass("droppedPiece4");
                else
                    $(this).parent().removeClass("piecePresent4");
            }
        });
        $(".droppableSpace4").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent4");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent4");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 5 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece5' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer5").html(pieces);
    $("#btnStart5").click(function() {
        var pieces = $("#puzzleContainer5 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece5").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer5").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece5 droppableSpace5'></div>";
            }
        }
        $("#puzzleContainer5").html(emptyString);
        $(this).hide();
        $("#btnReset5").show();
        implementLogic();
    });
    $("#btnReset5").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer5 .droppedPiece5").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer5 .droppedPiece5:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer5").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer5").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece5").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece5"))
                    $(this).removeClass("droppedPiece5");
                else
                    $(this).parent().removeClass("piecePresent5");
            }
        });
        $(".droppableSpace5").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent5");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent5");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 6 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece6' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer6").html(pieces);
    $("#btnStart6").click(function() {
        var pieces = $("#puzzleContainer6 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece6").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer6").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece6 droppableSpace6'></div>";
            }
        }
        $("#puzzleContainer6").html(emptyString);
        $(this).hide();
        $("#btnReset6").show();
        implementLogic();
    });
    $("#btnReset6").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer6 .droppedPiece6").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer6 .droppedPiece6:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer6").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer6").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece6").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece6"))
                    $(this).removeClass("droppedPiece6");
                else
                    $(this).parent().removeClass("piecePresent6");
            }
        });
        $(".droppableSpace6").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent6");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent6");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 7 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece7' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer7").html(pieces);
    $("#btnStart7").click(function() {
        var pieces = $("#puzzleContainer7 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece7").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer7").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece7 droppableSpace7'></div>";
            }
        }
        $("#puzzleContainer7").html(emptyString);
        $(this).hide();
        $("#btnReset7").show();
        implementLogic();
    });
    $("#btnReset7").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer7 .droppedPiece7").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer7 .droppedPiece7:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer7").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer7").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece7").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece7"))
                    $(this).removeClass("droppedPiece7");
                else
                    $(this).parent().removeClass("piecePresent7");
            }
        });
        $(".droppableSpace7").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent7");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent7");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 8 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece8' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer8").html(pieces);
    $("#btnStart8").click(function() {
        var pieces = $("#puzzleContainer8 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece8").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer8").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece8 droppableSpace8'></div>";
            }
        }
        $("#puzzleContainer8").html(emptyString);
        $(this).hide();
        $("#btnReset8").show();
        implementLogic();
    });
    $("#btnReset8").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer8 .droppedPiece8").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer8 .droppedPiece8:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer8").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer8").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece8").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece8"))
                    $(this).removeClass("droppedPiece8");
                else
                    $(this).parent().removeClass("piecePresent8");
            }
        });
        $(".droppableSpace8").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent8");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent8");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 9 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece9' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer9").html(pieces);
    $("#btnStart9").click(function() {
        var pieces = $("#puzzleContainer9 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece9").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer9").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece9 droppableSpace9'></div>";
            }
        }
        $("#puzzleContainer9").html(emptyString);
        $(this).hide();
        $("#btnReset9").show();
        implementLogic();
    });
    $("#btnReset9").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer9 .droppedPiece9").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer9 .droppedPiece9:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer9").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer9").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece9").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece9"))
                    $(this).removeClass("droppedPiece9");
                else
                    $(this).parent().removeClass("piecePresent9");
            }
        });
        $(".droppableSpace9").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent9");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent9");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 10 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece10' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer10").html(pieces);
    $("#btnStart10").click(function() {
        var pieces = $("#puzzleContainer10 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece10").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer10").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece10 droppableSpace10'></div>";
            }
        }
        $("#puzzleContainer10").html(emptyString);
        $(this).hide();
        $("#btnReset10").show();
        implementLogic();
    });
    $("#btnReset10").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer10 .droppedPiece10").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer10 .droppedPiece10:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer10").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer10").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece10").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece10"))
                    $(this).removeClass("droppedPiece10");
                else
                    $(this).parent().removeClass("piecePresent10");
            }
        });
        $(".droppableSpace10").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent10");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent10");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 11 ------------------- */
    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece11' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer11").html(pieces);
    $("#btnStart11").click(function() {
        var pieces = $("#puzzleContainer11 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece11").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer11").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece11 droppableSpace11'></div>";
            }
        }
        $("#puzzleContainer11").html(emptyString);
        $(this).hide();
        $("#btnReset11").show();
        implementLogic();
    });
    $("#btnReset11").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer11 .droppedPiece11").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer11 .droppedPiece11:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer11").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer11").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece11").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece11"))
                    $(this).removeClass("droppedPiece11");
                else
                    $(this).parent().removeClass("piecePresent11");
            }
        });
        $(".droppableSpace11").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent11");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent11");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 12 ------------------- */
    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece12' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer12").html(pieces);
    $("#btnStart12").click(function() {
        var pieces = $("#puzzleContainer12 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece12").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer12").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece12 droppableSpace12'></div>";
            }
        }
        $("#puzzleContainer12").html(emptyString);
        $(this).hide();
        $("#btnReset12").show();
        implementLogic();
    });
    $("#btnReset12").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer12 .droppedPiece12").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer12 .droppedPiece12:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer12").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer12").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece12").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece12"))
                    $(this).removeClass("droppedPiece12");
                else
                    $(this).parent().removeClass("piecePresent12");
            }
        });
        $(".droppableSpace12").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent12");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent12");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 13 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece13' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer13").html(pieces);
    $("#btnStart13").click(function() {
        var pieces = $("#puzzleContainer13 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece13").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer13").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece13 droppableSpace13'></div>";
            }
        }
        $("#puzzleContainer13").html(emptyString);
        $(this).hide();
        $("#btnReset13").show();
        implementLogic();
    });
    $("#btnReset13").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer13 .droppedPiece13").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer13 .droppedPiece13:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer13").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer13").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece13").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece13"))
                    $(this).removeClass("droppedPiece13");
                else
                    $(this).parent().removeClass("piecePresent13");
            }
        });
        $(".droppableSpace13").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent13");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent13");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 14 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece14' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer14").html(pieces);
    $("#btnStart14").click(function() {
        var pieces = $("#puzzleContainer14 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece14").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer14").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece14 droppableSpace14'></div>";
            }
        }
        $("#puzzleContainer14").html(emptyString);
        $(this).hide();
        $("#btnReset14").show();
        implementLogic();
    });
    $("#btnReset14").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer14 .droppedPiece14").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer14 .droppedPiece14:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer14").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer14").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece14").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece14"))
                    $(this).removeClass("droppedPiece14");
                else
                    $(this).parent().removeClass("piecePresent14");
            }
        });
        $(".droppableSpace14").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent14");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent14");
                $(draggableElement).addClass().css({
                    top: 0,
                    left: 0,
                    position: "relative"
                }).appendTo(droppedOn);
                checkIfPuzzleSolved();
            }
        });
    }

    /*---------------------------------------------------------------------------------- 15 ------------------- */

    var pieces = "";
    for (var i = 0, top = 0, order = 0; i < rows; i++, top -= 60) {
        for (var j = 0, left = 0; j < columns; j++, left -= 60, order++) {
            pieces += "<div style='background-position:"
                    + left + "px " + top + "px;' class='piece15' data-order=" + order + "></div>";
        }
    }
    $("#puzzleContainer15").html(pieces);
    $("#btnStart15").click(function() {
        var pieces = $("#puzzleContainer15 div");
        pieces.each(function() {
            var leftPosition =
                    Math.floor(Math.random() * 290) + "px";
            var topPosition =
                    Math.floor(Math.random() * 290) + "px";
            $(this).addClass("draggablePiece15").css({
                position: "absolute",
                left: leftPosition,
                top: topPosition
            });
            $("#pieceContainer15").append($(this));
        });
        var emptyString = "";
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                emptyString += "<div style='background-image:none;' class='piece15 droppableSpace15'></div>";
            }
        }
        $("#puzzleContainer15").html(emptyString);
        $(this).hide();
        $("#btnReset15").show();
        implementLogic();
    });
    $("#btnReset15").click(function() {

    });
    function checkIfPuzzleSolved() {
        if ($("#puzzleContainer15 .droppedPiece15").length !== 49) {
            return false;
        }
        for (var k = 0; k < 49; k++) {
            var item = $("#puzzleContainer15 .droppedPiece15:eq(" + k + ")");
            var order = item.data("order");
            if (k !== order) {
                $("pieceContainer15").text("Doğru Yerleştirilmedi! Tekrar düzenleyiniz");
                return false;
            }
        }
        $("pieceContainer15").text("Tebrikler! Hepsini doğru yerleştirdiniz.");
        return true;
    }
    function implementLogic() {
        $(".draggablePiece15").draggable({
            revert: "invalid",
            start: function() {
                if ($(this).hasClass("droppedPiece15"))
                    $(this).removeClass("droppedPiece15");
                else
                    $(this).parent().removeClass("piecePresent15");
            }
        });
        $(".droppableSpace15").droppable({
            hoverClass: "ui-state-highlight",
            accept: function() {
                return !$(this).hasClass("piecePresent15");
            },
            drop: function(event, ui) {
                var draggableElement = ui.draggable;
                var droppedOn = $(this);
                droppedOn.addClass("piecePresent15");
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

