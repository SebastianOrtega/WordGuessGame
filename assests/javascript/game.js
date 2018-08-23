$(document).ready(function() {
    console.log("ready!");
    var breeds = ["Akita", "Husky", "Alaskan", "Pit Bull", "Terrier", "Pug", "Bull Dog", "Chihuahua", "Dalmata", "Retriever", "Dachshund"];




    function randomWord() {
        var word;
        word = breeds[Math.floor((Math.random() * breeds.length))];
        return word;
    }



    var palabra;

    palabra = randomWord()
    console.log(palabra);
    console.log(palabra.length);

    for (var i = 0; i < palabra.length; i++) {
        console.log("Letra: " + palabra[i]);
        var letter = $("<div>");
        $(letter).addClass("letter");
        //$(letter).attr("data-letter", palabra[i]);
        $(letter).text("___");
        $(".goodletter").append(letter);

    }







});