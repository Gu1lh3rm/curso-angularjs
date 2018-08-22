angular.module("listaTelefonica").directive("uiDate", function () {
    return {
        require: "ngModel",
        link:  function (scope, element, attrs, ctrl) {
            
            //Função formata a data fazendo replace caso oque está sendo digitado não seja numérico
            //em seguida a function adiciona uma / depois da posição 2 caso a string seja maior que 2
            //em seguida a function adiciona uma / depois da posição 5 caso a string seja maior que 5 e não permite que sejá adicionado mais que 9 caracteres
            
            var _formatDate = function (date) {
                
                date = date.replace(/[^0-9]+/g, "");
                
                if(date.length > 2){
                    date = date.substring(0,2) + "/" + date.substring(2);
                }
                
                if(date.length > 5){
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }

                return date;
            };
            

            //Function devolve para o controller o objeto formatado 
            element.bind("keyup", function (){
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function (value) {
                
                if(value.length === 10){
                        
                        
                        var dateArray = value.split("/");
                        
                        return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
                }
            });
            
        }
    };
});

// date.replace(/[^0-9]+/g,""); Subistitui tudo que não é de 0 a 9 por vazio