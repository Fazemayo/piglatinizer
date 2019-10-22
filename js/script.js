function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

$( "document" ).ready(function() {
    $("#button").click(function() {
        var name = $(".input").val();
        var fist= name.charAt(0);
        var bool = isVowel(fist);
        $(".output").text(bool);


    });
});