angular.module("listaTelefonica").directive("uiAlert",function () {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
        scope: {
            title: "@"
        }, 
        transclude: true 
    };
});


// A - Diretiva restrita ao atributo do elemento        <ui-alert></ui-alert>
// E - Diretiva restrita ao elemento                    <div></div>
// C - Diretiva restrita a classe do elemento           <div class=""></div>
// M - Diretiva restrita ao comentário do elemento      <!--directive:alert-->
//                                                      <div></div>