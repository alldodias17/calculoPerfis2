
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
      var AuxComp2 = form02.AuxComp2;
      var re_AuxComp2 = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxComp2.test(AuxComp2.value)) {
        AuxComp2.value = AuxComp2.value.replace(re_AuxComp2, "$1$2,00");
      
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
    var str = document.getElementById("AuxComp2").value;
    var res = str.replace(",", ".");
    document.getElementById("AuxComp2").value = res;
    var str = document.getElementById("AuxCargQ").value;
    var res = str.replace(",", ".");
    document.getElementById("AuxCargQ").value = res;
    
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
    
//AUXCOMPT = AuxComp1.Value + AuxComp2.Value
var AuxComp1 = parseFloat(form01.AuxComp1.value);
var AuxComp2 = parseFloat(form02.AuxComp2.value);
AUXCOMPT = (AuxComp1 + AuxComp2).toFixed(2);

//AUXPESO = AuxCargQ.Text / AUXCOMPT
var AuxCargQ = parseFloat(form03.AuxCargQ.value);
AUXPESO = (AuxCargQ / AUXCOMPT).toFixed(2);

//AUX_M1 = AUXPESO * AUXCOMPT ^ 2 / 8
AUX_M1 = AUXPESO * AUXCOMPT**2 / 8;

//AUX_M2 = AuxCargP.Value * AuxComp1.Value * AuxComp2.Value / AUXCOMPT
var AuxCargP = parseFloat(form01.AuxCargP.value);
AUX_M2 = AuxCargP * AuxComp1 * AuxComp2 / AUXCOMPT;

//AUX_R1 = (AuxCargP.Value * AUXCOMPT - AuxCargP.Value * AuxComp1.Value) / AUXCOMPT
AUX_R1 = (AuxCargP * AUXCOMPT - AuxCargP * AuxComp1) / AUXCOMPT;

//AUX_M3 = AUX_M1 + AUX_R1 * AUXCOMPT / 2
AUX_M3 = (AUX_M1 + AUX_R1 * AUXCOMPT / 2);

//AUX_M4 = AUXPESO * AUXCOMPT * AuxComp1.Value / 2 - AUXPESO * AuxComp1.Value ^ 2 / 2
AUX_M4 = AUXPESO * AUXCOMPT * AuxComp1.Value / 2 - AUXPESO * AuxComp1.Value**2 / 2;

//AUX_M5 = AUX_M4 + AUX_M2
AUX_M5 = AUX_M4 + AUX_M2;

//Aux_m = AUX_M3
//If AUX_M5 > AUX_M3 Then Aux_m = AUX_M5
form02.txtMomento.value = (AUX_M3).toFixed(2);
var txtMomento = parseFloat(form02.txtMomento.value);
if(AUX_M5 > AUX_M3){
    form02.txtMomento.value = (AUX_M5).toFixed(2);
}


//Aux_Wx = Aux_m / (AuxTenes * 0.6)
var AuxTenes = parseFloat(form03.AuxTenes.value);
form03.txtWx.value = txtMomento / (AuxTenes * a);

//Aux_Ix = (AUXPESO * AUXCOMPT ^ 5 - 12.8 * AuxCargP.Value * AuxComp2.Value * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - AuxComp2 ^ 2) * AUXCOMPT / 2)) / (8064 * AUXCOMPT ^ 2)
form03.txtIx.value = (AUXPESO * AUXCOMPT**5 - 12.8 * AuxCargP * AuxComp2 * (AUXCOMPT**3 / 8 - (AUXCOMPT**2 - AuxComp2**2) * AUXCOMPT / 2)) / (8064 * AUXCOMPT**2);
var txtIx = parseFloat(form03.txtIx.value);

//Aux_Fc = (AUXPESO * AUXCOMPT ^ 2 + 2 * AuxCargP.Value * AuxComp1.Value)
Aux_Fc1 = (AUXPESO * AUXCOMPT**2 + 2 * AuxCargP * AuxComp1);

//Aux_Fc = Aux_Fc / (2 * AUXCOMPT) / AuxTenes / 0.4
form04.xtAreaFC.value = Aux_Fc1 / (2 * AUXCOMPT) / AuxTenes / b;



          
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