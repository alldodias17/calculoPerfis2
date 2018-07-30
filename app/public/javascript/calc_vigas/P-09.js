
window.onload = function () {
    document.getElementById("AuxComp1").focus();
  };
  
  $(document).ready(function () {
    $("#AuxComp1").focus(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#AuxCargQ").focus(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#AuxTenes").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    
  });
    function validar() {
      var form01 = document.getElementById("form01");
      var AuxComp1 = form01.AuxComp1;
      var re_AuxComp1 = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxComp1.test(AuxComp1.value)) {
        AuxComp1.value = AuxComp1.value.replace(re_AuxComp1, "$1$2,00");
      
      }
      var form03 = document.getElementById("form03");
      var AuxTenes = form03.AuxTenes;
      var re_AuxTenes = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxTenes.test(AuxTenes.value)) {
        AuxTenes.value = AuxTenes.value.replace(re_AuxTenes, "$1$2,00");
      
      }
      var form01 = document.getElementById("form01");
      var AuxCargP = form01.AuxCargP;
      var re_AuxCargP = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxCargP.test(AuxCargP.value)) {
        AuxCargP.value = AuxCargP.value.replace(re_AuxCargP, "$1$2,00");
      
      }
      
      
      
      
  
    
  
  
    var str = document.getElementById("AuxComp1").value;
    var res = str.replace(",", ".");
    document.getElementById("AuxComp1").value = res;
    var str = document.getElementById("AuxTenes").value;
    var res = str.replace(",", ".");
    document.getElementById("AuxTenes").value = res;
    var str = document.getElementById("AuxCargP").value;
    var res = str.replace(",", ".");
    document.getElementById("AuxCargP").value = res;
    
    
    
  }
  
  function SomenteNumero(e) {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 43 && tecla < 58)) return true;
    else {
      if (tecla == 8 || tecla == 0) return true;
      else return false;
    }    
  }
  function id(el) {
    return document.getElementById(el);
  }
  function soma() {
  
    var a = parseFloat(0.6);
    var b = parseFloat(0.4);
    var c = parseFloat(133.47);
    var d = parseFloat(1.5);
    
//AUXCOMPT = AuxComp1.Value * 5
var AuxComp1 = parseFloat(form01.AuxComp1.value);
AUXCOMPT = (AuxComp1 * 5).toFixed(2);

//Aux_m = 3 * AuxCargP.Value * AuxComp1.Value
var AuxCargP = parseFloat(form01.AuxCargP.value);
form02.txtMomento.value = (3 * AuxCargP * AuxComp1).toFixed(2);
var txtMomento = parseFloat(form02.txtMomento.value);

//Aux_Wx = Aux_m / (AuxTenes.Value * 0.6)
var AuxTenes = parseFloat(form03.AuxTenes.value);
form03.txtWx.value = (txtMomento / (AuxTenes * a)).toFixed(2);

//Aux_Ix = AUXCOMPT ^ 2 * AuxCargP.Value / 1668
form03.txtIx.value = (AUXCOMPT**2 * AuxCargP / 1668).toFixed(2);
var txtIx = parseFloat(form03.txtIx.value);

//Aux_Fc = (AuxCargP.Value * 2) / AuxTenes.Value / 0.4
form04.xtAreaFC.value = ((AuxCargP * 2) / AuxTenes / b).toFixed(2);



          
          window.onload = function () {
            id('copiar').onclick = function () {
              soma();
            }
          }
        
    
    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }
  }