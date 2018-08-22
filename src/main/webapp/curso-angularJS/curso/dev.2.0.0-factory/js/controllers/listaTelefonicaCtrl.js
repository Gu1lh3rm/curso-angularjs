angular.module("listaTelefonica")
            .controller("listaTelefonicaCtrl",
            function ($scope, $http, contatosAPI) {
                $scope.app = "Lista Telefonica"; 
                $scope.contatos = [];
                $scope.operadoras = [];

                var carregarContatos = function () {
                	contatosAPI.getContatos().then(
                	function (response) {
                		$scope.contatos = response.data;
                	});
                }
                
                var carregarOperadoras = function () {
                	contatosAPI.getOperadoras().then(
                	function (response){
                		$scope.operadoras = response.data;	
                	});
                }
                
               $scope.adicionarContato = function (contato){
            	   contato.data = new Date();
            	   contato.cor = "blue";
            	   
            	   contatosAPI.saveContato(contato)
            	   .then(function (data){
            		   $scope.contatos.push(angular.copy(contato));
                       delete $scope.contato;
                       $scope.contatoForm.$setPristine();
            	   }).catch(function(data,status){
                       	$scope.message = "Erro ao gravar o contato: " + message;
                   });
               }
                
                $scope.apagarContato = function(contatos){
                    
                    $scope.contatos = contatos.filter(function (contato){
                        if(!contato.selecionado) return contato;
                    });
                }
                $scope.isContatoSelecionado = function(contatos){
                   return contatos.some(function (contato) {
                       return contato.selecionado;
                   })
                }
                $scope.classe1 = "selecionado";
                $scope.classe2 = "negrito";
                $scope.ordenarPor = function (campo) {
                	$scope.criterioDeOrdenacao = campo;
                	$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
                }
                
                carregarContatos();
                carregarOperadoras();
            });