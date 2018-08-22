angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
	var _getContatos = function () {
		return $http.get(config.baseUrl + "/contatos");
	};

	var _getContato = function (id) {
		// PHP: $http.get(config.baseUrl + "/contatosBackend.php?id=" + id)
		return $http.get(config.baseUrl + "/contatos/" + id);
	};

	var _saveContato = function (contato) {
		return $http.post(config.baseUrl + "/contatos", contato);
	};

	var _deletarContato = function (contato) {
		return $http.delete(config.baseUrl + "/contatos/" + contato);
	};

	return {
		getContatos: _getContatos,
		getContato: _getContato,
		saveContato: _saveContato,
		deletarContato: _deletarContato
	};
});