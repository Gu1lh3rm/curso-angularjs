angular.module("listaTelefonica").factory("contatosAPI", function ($http){
	var httpContatos 	= "http://localhost:3412/contatos";
	var httpOperadoras 	= "http://localhost:3412/operadoras";
	
	var _getContatos = function () {
        return $http.get(httpContatos);
    };
    
    var _saveContato = function (contato) {
    	return $http.post(httpContatos, contato);
    };
    var _getOperadoras = function () {
    	return $http.get(httpOperadoras);
    };
    
    return {
        getContatos: _getContatos,
        saveContato: _saveContato,
        getOperadoras: _getOperadoras
    };
});