var limit = 1000;
$(function() {
    $("#txt_detalle").on("input", function () {
        //al cambiar el texto del txt_detalle
        var init = $(this).val().length;
        total_characters = (limit - init);

        $('#contador').html(total_characters + " caracteres restantes");
    });
});