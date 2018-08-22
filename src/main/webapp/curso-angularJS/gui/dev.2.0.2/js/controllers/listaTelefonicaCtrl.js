angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, contatos, operadoras, serialGenerator) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;


	var init = function () {
		calcularImpostos($scope.contatos);
        generateSerial($scope.contatos);
    }


    var calcularImpostos = function (contatos) {
		contatos.forEach(function (contato) {
			contato.operadora.precoComImposto = calcularImposto(contato.operadora.operadora_preco);
        })
    }

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
		$scope.verificarContatoSelecionado($scope.contatos);
	};

	//$scope.isContatoSelecionado = function (contatos) {
	$scope.verificarContatoSelecionado= function (contatos) {
		$scope.hasContatoSelecionado = contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};


	var calcularImposto = function (operadora_preco) {

        var imposto = 1.2;
        return operadora_preco * imposto;
    }

    init();
});