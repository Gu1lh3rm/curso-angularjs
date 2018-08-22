angular.module("listaTelefonica").factory("operadorasAPI", function($http,config){
    var httpOperadoras = config.baseUrl + "/operadoras";

    var _getOperadoras = function () {
        return $http.get(httpOperadoras);
    }

    return {
        getOperadoras: _getOperadoras
    };
});