angular.module("listaTelefonica").filter("ellipsis", function (){
    return function (input, size) {
        if(input.length <= size) return input;
        //(size || 15) função if do javascript se size === undefined ou false ou null então 15
        var output = input.substring(0,(size || 15)) + "...";
        return output;
    };
});