$(document).ready(function () {
    $("#carrete img").hide();
    $("#mostrar").click(function () {
        $("#carrete img").show(3000);
    });
    $("#ocultar").click(function () {
        $("#carrete img").hide(3000);
    });
});
