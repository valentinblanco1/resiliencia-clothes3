<script type="./">
$(document).ready(function() {

    $("#open").on("click", function() {
        $("#popup").fadeIn("slow");
   });
   $("#close").on("click" , function() {
    $("#popup").fadeOut("slow");
   });
});

</script>