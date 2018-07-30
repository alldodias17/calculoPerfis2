
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
      var form02 = document.getElementById("form02");
      var AuxCargF = form02.AuxCargF;
      var re_AuxCargF = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxCargF.test(AuxCargF.value)) {
        AuxCargF.value = AuxCargF.value.replace(re_AuxCargF, "$1$2,00");
      
      }
      var form03 = document.getElementById("form03");
      var AuxCargQ = form03.AuxCargQ;
      var re_AuxCargQ = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxCargQ.test(AuxCargQ.value)) {
        AuxCargQ.value = AuxCargQ.value.replace(re_AuxCargQ, "$1$2,00");
      
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
      var str = document.getElementById("AuxCargF").value;
      var res = str.replace(",", ".");
      document.getElementById("AuxCargF").value = res;
      var str = document.getElementById("AuxCargQ").value;
      var res = str.replace(",", ".");
      document.getElementById("AuxCargQ").value = res;     


var a = parseFloat(0.6);
var b = parseFloat(0.4);
var c = parseFloat(133.47);
var d = parseFloat(4.5);
var e = parseFloat(2.5);

//AUXCOMPT = AuxComp1 * 4
var AuxComp1 = parseFloat(form01.AuxComp1.value);
var AuxComp2 = parseFloat(form02.AuxComp2.value);
AUXCOMPT = (AuxComp1 * 4).toFixed(2);

//AUXPESO = AuxCargQ.Value / AUXCOMPT
var AuxCargQ = parseFloat(form03.AuxCargQ.value);
AUXPESO = (AuxCargQ / AUXCOMPT).toFixed(2);

//Aux_m = (AUXCOMPT * (AUXPESO * AUXCOMPT + 2 * AuxCargF.Value) + 8 * AuxCargP * AuxComp1) / 8
var AuxCargP = parseFloat(form01.AuxCargP.value);
var AuxCargF = form02.AuxCargF.value;
form02.txtMomento.value = ((AUXCOMPT * (AUXPESO * AUXCOMPT + 2 * AuxCargF) + 8 * AuxCargP * AuxComp1) / 8).toFixed(2);
var txtMomento = parseFloat(form02.txtMomento.value);

//Aux_Wx = Aux_m / (AuxTenes * 0.6)
var AuxTenes = parseFloat(form03.AuxTenes.value);
form03.txtWx.value = (txtMomento / (AuxTenes * a)).toFixed(2);

//Aux_Ix = (3.2 * AuxCargP * AUXCOMPT ^ 2 * (3 * AuxComp1 / AUXCOMPT - 4 * AuxComp1 ^ 3 / AUXCOMPT ^ 3) + AUXPESO * AUXCOMPT ^ 3 + 1.6 * AuxCargF.Value * AUXCOMPT ^ 2) / 8064
form03.txtIx.value = (3.2 * AuxCargP * AUXCOMPT**2 * (3 * AuxComp1 / AUXCOMPT - 4 * AuxComp1**3 / AUXCOMPT**3) + AUXPESO * AUXCOMPT**3 + 1.6 * AuxCargF * AUXCOMPT**2) / 8064;
var txtIx = parseFloat(form03.txtIx.value);

//Aux_Fc = ((AUXPESO * AUXCOMPT + 2 * AuxCargP + AuxCargF.Value) / 2) / AuxTenes / 0.4
aux_01 = AUXPESO * AUXCOMPT;
aux_02 = 2 * AuxCargP;
aux_03 = aux_01 + aux_02 + AuxCargF;
aux_04 = aux_03 / 2;
form04.xtAreaFC.value = aux_04 / AuxTenes / 0.4;
    
  
  
    
    
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
    var d = parseFloat(4.5);
    var e = parseFloat(2.5);
    
//AUXCOMPT = AuxComp1.Value + AuxComp1.Value + AuxComp2.Value
var AuxComp1 = parseFloat(form01.AuxComp1.value);
var AuxComp2 = parseFloat(form02.AuxComp2.value);
AUXCOMPT = (AuxComp1 + AuxComp1 + AuxComp2).toFixed(2);

//AUXPESO = AuxCargQ.Value / AUXCOMPT
var AuxCargQ = parseFloat(form03.AuxCargQ.value);
AUXPESO = (AuxCargQ / AUXCOMPT).toFixed(2);

//Aux_m = (AUXCOMPT ^ 2 * AUXPESO + 8 * AuxCargP.Value * AuxComp1.Value) / 8
var AuxCargP = parseFloat(form01.AuxCargP.value);
form02.txtMomento.value = ((AUXCOMPT**2 * AUXPESO + 8 * AuxCargP * AuxComp1) / 8).toFixed(2);
var txtMomento = parseFloat(form02.txtMomento.value);

//Aux_Wx = Aux_m / (AuxTenes.Value * 0.6)
var AuxTenes = parseFloat(form03.AuxTenes.value);
form03.txtWx.value = (txtMomento / (AuxTenes * a)).toFixed(2);

//Aux_Ix = (3.2 * AuxCargP.Value * AUXCOMPT ^ 2 * (3 * AuxComp1.Value / AUXCOMPT - 4 * AuxComp1.Value ^ 3 / AUXCOMPT ^ 3) + AUXPESO * AUXCOMPT ^ 3) / 8064
form03.txtIx.value = ((3.2 * AuxCargP * AUXCOMPT**2 * (3 * AuxComp1 / AUXCOMPT - 4 * AuxComp1**3 / AUXCOMPT**3) + AUXPESO * AUXCOMPT**3) / 8064).toFixed(2);
var txtIx = parseFloat(form03.txtIx.value);

//Aux_Fc = ((AUXPESO * AUXCOMPT + 2 * AuxCargP.Value) / 2) / AuxTenes.Value / 0.4
form04.xtAreaFC.value = (((AUXPESO * AUXCOMPT + 2 * AuxCargP) / 2) / AuxTenes / b).toFixed(2);


          
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