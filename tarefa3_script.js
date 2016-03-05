/**
 * Created by bruno on 04/03/2016.
 */


function principal(){
     var contador = 0;
     var totalItens = 0;
     var contadorObserver = [];
     var observer = {};

     observer.start=function() {
         var x = 0;
         while (x < contadorObserver.length) {
             var y = contadorObserver[x];
             y();
             ++totalItens;
             x++;
         }
         console.log("total item na lista: "+ totalItens);
     }

     observer.contador=function(){
         ++contador;
         return contador;
     }

     observer.adcionar=function(parametro){
         contadorObserver.push(parametro);

     }


    return observer;
}





function testando(){
    console.log("inserindo observer...");
}


function printarContador(){
    console.log("contador = "+teste.contador());

}

function printarContador2() {
    console.log("contador = " +teste2.contador());
}




var teste = principal();
teste.adcionar(testando);
teste.adcionar(printarContador);
teste.adcionar(testando);
teste.adcionar(printarContador);
teste.adcionar(testando);
teste.adcionar(printarContador);
teste.start();

var teste2 = principal();
teste2.adcionar(testando);
teste2.adcionar(printarContador2);
teste2.adcionar(testando);
teste2.adcionar(printarContador2);
teste2.adcionar(testando);
teste2.adcionar(printarContador2);
teste2.start();
