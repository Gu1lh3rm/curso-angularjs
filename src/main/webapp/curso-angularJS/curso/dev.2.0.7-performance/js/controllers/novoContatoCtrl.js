angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, operadoras) {
	$scope.operadoras = operadoras.data;

	$scope.adicionarContato = function (contato) {
		//contato.contato_serial = serialGenerator.generate();
		contato.operadora_id = contato.operadora.operadora_id;
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos");
		});
	};
});