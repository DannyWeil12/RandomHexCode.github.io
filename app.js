function newColor(){
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

    var hexcode = '';
    for (var i=0;i < 6;i++){
        var random_index = Math.floor(Math.random() * hex_numbers.length);

        hexcode += hex_numbers[random_index]
    }
    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
    document.getElementById("title").style.color = "#fff"
    document.getElementById("title2").style.color = "#fff"
}
