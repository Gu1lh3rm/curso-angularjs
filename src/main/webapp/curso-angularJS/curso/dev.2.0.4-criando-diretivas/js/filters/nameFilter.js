angular.module("listaTelefonica").filter("name", function (){
    return function (input){
        var listaDeNomes = input.split(" ");
        var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
            if(nome === "da" || nome === "de" || nome === "di" || nome === "do" || nome === "du" ||
               nome === "das" || nome === "des" || nome === "dis" || nome === "dos" || nome === "dus") return nome;
            //if (/(da|de|di|do|du|das|des|dis|dos|dus)/.test(nome)) return nome; //Expressão regular node
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });        
        return listaDeNomesFormatada.join(" ");
    };
});