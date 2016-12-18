 $(document).ready(function() {
    $(".expand-button").click(function () {
        $header = $(this);
        $content = $header.next();
        $(".hiddenContent").not($content).slideUp().prev().text("Expand");
        $content.slideToggle(500, function () {
            $header.text(function () {
                return $content.is(":visible") ? "Collapse" : "Expand";
            });
        });
    });
});