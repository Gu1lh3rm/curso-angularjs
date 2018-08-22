angular.module("listaTelefonica")
.controller("listaTelefonicaCtrl",
function ($scope, contatosAPI, operadorasAPI){
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];

    /* 
    *   Função carrega contatos 
    *   função acessa o servidor "http://localhost:3412/contatos"
    *   que está declarado na pasta services no arquivo contatosAPIServices
    */
    var carregarContatos = function(){
        contatosAPI.getContatos().then(
            function (response){
                $scope.contatos = response.data;
            }
        ).catch(function (data, status){
            $scope.error = "Não foi possível carregar os dados!";  
        });
    }

    /* 
    *   Função carrega operadoras 
    *   função acessa o servidor "http://localhost:3412/operadoras"
    *   que está declarado na pasta services no arquivo operadorasAPIServices
    */
    var carregaOperadoras = function(){
        operadorasAPI.getOperadoras().then(
            function (response){
                $scope.operadoras = response.data;
            }
        );
    }

    /*
    * Recebe a seleção anterior e a seleção atual
    * Retorna para o scope as variáveis direcaoDaOrdenacao e criterioDaOrdenacao
    */
    $scope.ordenarPor = function (selecaoAtual, selecaoAnterior ){
        //compara os parametros que estão sendo passados
        if(selecaoAtual !== selecaoAnterior){
            $scope.direcaoDaOrdenacao = false;
        }
        $scope.criterioDeOrdenacao = selecaoAtual;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
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
        $scope.contatos = contatos.filter(function(contato){
            if(!contato.selecionado) {
                return contato;
            }
        })
    }


    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        })
    }

    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    

    carregarContatos();
    carregaOperadoras();
})