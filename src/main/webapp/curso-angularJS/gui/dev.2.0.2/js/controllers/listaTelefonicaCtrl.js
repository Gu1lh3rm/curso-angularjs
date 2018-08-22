angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, contatos, operadoras, serialGenerator) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;


	var generateSerial = function (contatos) {
		contatos.forEach(function (item) {
			item.serial = serialGenerator.generate();
		});
	};

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(function (contato) {
			if(!contato.selecionado){
				return contato;
			} else{
				console.log(contato.contato_id);
				
				contatosAPI.deletarContato(contato.contato_id).success(function (data){
					console.log("true");
				});

			}
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	generateSerial($scope.contatos);

	$scope.calcularImposto = function (operadora_preco) {
        var imposto = 1.2;
        return operadora_preco * imposto;
    }
});