(function()
  {
    "use strict";
    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded',function(){
      //campos Datos Usuario
      var nombre= document.getElementById('nombre');
      var apellido= document.getElementById('apellido');
      var email= document.getElementById('email');

      //Campo de pase
      var pase_dia = document.getElementById('pase_dia');
      var pase_dosdia= document.getElementById('pase_dosdia');
      var pase_completo = document.getElementById('pase_completo');

      //Botones y divs
      var calcular= document.getElementById('calcular');
      var errorDiv= document.getElementById('error');
      var botonRegistro= document.getElementById('btnRegistro');
      var lista_productos= document.getElementById('lista-productos');
      var suma=document.getElementById('suma-total');

      //Extras
      var camisas= document.getElementById('camisa_evento')
      var etiquetas= document.getElementById('etiquetas');

      calcular.addEventListener('click',calcularMontos);

      function calcularMontos(event){
        event.preventDefault();
        if(regalo.value === ''){
          alert("Debes elegir un Regalo");
          regalo.focus();
        }
        else{
          var boletosDia= pase_dia.value,
              boletos2Dias= pase_dosdia.value,
              boletoCompleto= pase_completo.value,
              cantCamisas= camisas.value,
              cantEtiquetas= etiquetas.value;


            var totalPagar= (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);
            console.log("Su total a pagar es de " + totalPagar);

            var listadoProductos=[];
            if(boletosDia>0){
              listadoProductos.push(boletosDia + " Pases por dia");
            }
            if(boletos2Dias>0){
              listadoProductos.push(boletos2Dias + " Pases por 2 dias");
            }
            if(boletoCompleto>0){
              listadoProductos.push(boletoCompleto + " Pases Completos");
            }
            if(cantCamisas>0){
              listadoProductos.push(cantCamisas + " Camisas");
            }
            if(cantEtiquetas>0){
              listadoProductos.push(cantEtiquetas + " Etiquetas");
            }
            lista_productos.style.display="block";
            lista_productos.innerHTML ="";
            for(var i=0;i< listadoProductos.length;i++){
              lista_productos.innerHTML+= listadoProductos[i] + '<br/>';
            }
            suma.innerHTML="$ " + totalPagar.toFixed(2);
        }
      }





    });//DOMContentLoaded

  }
)();
