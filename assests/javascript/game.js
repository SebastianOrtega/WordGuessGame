$(document).ready(function() {
    console.log("ready!");
    var breeds = ["akita", "husky", "alaskan", "pit bull", "terrier", "pug", "bull dog", "chihuahua", "dalmata", "retriever", "dachshund"];
    var usedLetters = [];
    var badCounter = 90;
    var goodCount = 0;
    var keyboardDisabled = false;



    function randomWord() {
        var word;
        word = breeds[Math.floor((Math.random() * breeds.length))];
        return word;
    }

    function badLetter(badletter) {

        console.log("Letra mala: " + badletter);
        var letter = $("<div>");
        $(letter).addClass("usedletter");
        //$(letter).attr("data-letter", palabra[i]);
        $(letter).text(badletter);
        $(".usedletters").append(letter);

    }



    var palabra;

    palabra = randomWord()
    console.log(palabra);
    console.log(palabra.length);

    for (var i = 0; i < palabra.length; i++) {
        console.log("Letra: " + palabra[i]);
        var letter = $("<div>");
        $(letter).addClass("usedletter no-word letter-" + palabra[i]);
        $(letter).text(palabra[i]);
        $(".goodletter").append(letter);

    }

    // Reload button (Play Again)
    $(".btn").on("click", function() {
        console.log("Reload");
        location.reload();
    });

    // on Keydown

    document.onkeyup = function(event) {
        var keyDown = event.key;
        console.log(keyDown);
        if (!keyboardDisabled) {

            if (palabra.indexOf(keyDown) !== -1) {

                $(".letter-" + keyDown).addClass("good");
                console.log(keyDown + "  Es buena");
                var repetition = 0;
                for (var n = 0; n < palabra.length; n++) {
                    if (keyDown === palabra[n])
                        repetition++;
                }
                console.log("Letras repetidas: " + repetition)


            } else {
                console.log(keyDown + "  Es mala");
                var numeroImagen = ++badCounter;
                if (badCounter === 100)
                    keyboardDisabled = true;
                var stringImagen = "assests/images/" + numeroImagen + ".jpg";
                console.log("Numeor de imagen: " + stringImagen);


                $("#imagen").attr("src", stringImagen);

                badLetter(keyDown);
            }
        }

    }











});