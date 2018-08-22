angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
    var httpContatos = config.baseUrl + "/contatos";

    var _getContatos = function () {
        return $http.get(httpContatos);
    }


    var _saveContato = function (contato) {
        return $http.post(httpContatos, contato);
    }

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    };
});