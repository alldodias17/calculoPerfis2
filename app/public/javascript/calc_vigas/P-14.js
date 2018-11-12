
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
      var form02 = document.getElementById("form02");
      var AuxComp2 = form02.AuxComp2;
      var re_AuxComp2 = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxComp2.test(AuxComp2.value)) {
        AuxComp2.value = AuxComp2.value.replace(re_AuxComp2, "$1$2,00");
      
      }
      var form03 = document.getElementById("form03");
      var AuxComp3 = form03.AuxComp3;
      var re_AuxComp3 = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxComp3.test(AuxComp3.value)) {
        AuxComp3.value = AuxComp3.value.replace(re_AuxComp3, "$1$2,00");
      
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
      var str = document.getElementById("AuxComp2").value;
      var res = str.replace(",", ".");
      document.getElementById("AuxComp2").value = res;
      var str = document.getElementById("AuxComp3").value;
      var res = str.replace(",", ".");
      document.getElementById("AuxComp3").value = res;
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
    var a = parseFloat(0.6);
var b = parseFloat(0.4);
var c = parseFloat(133.47);
var d = parseFloat(4.5);
var e = parseFloat(2.5);

//AUXCOMPT = AuxComp1 + AuxComp2 + AuxComp3
var AuxComp1 = parseFloat(id('AuxComp1').value);
var AuxComp2 = parseFloat(id('AuxComp2').value);
var AuxComp3 = parseFloat(id('AuxComp3').value);
AUXCOMPT = (AuxComp1 + AuxComp2 + AuxComp3).toFixed(2);

//AUXPESO = AuxCargQ.Value / AUXCOMPT
var AuxCargQ = parseFloat(id('AuxCargQ').value);
AUXPESO = (AuxCargQ / AUXCOMPT).toFixed(2);

//AUX_R2 = (AUXPESO * AuxComp3 * (AuxComp2 + AuxComp3 / 2) + AUXPESO * AuxComp2 ^ 2 / 2 -AUXPESO * AuxComp1 ^ 2 / 2) / AuxComp2
AUX_R2 = (AUXPESO * AuxComp3 * (AuxComp2 + AuxComp3 / 2) + AUXPESO * AuxComp2**2 / 2 - AUXPESO * AuxComp1**2 / 2) / AuxComp2;

//AUX_R1 = AUXPESO * AUXCOMPT - AUX_R2
AUX_R1 = AUXPESO * AUXCOMPT - AUX_R2;

//AUX_M1 = AUXPESO * AuxComp3 * AuxComp3 / 2
AUX_M1 = AUXPESO * AuxComp3 * AuxComp3 / 2;

//AUX_M2 = AUXPESO * AuxComp1 ^ 2 / 2
AUX_M2 = AUXPESO * AuxComp1**2 / 2;

//AUX_M3 = (AUX_M1 + AUX_M2) / 2
AUX_M3 = (AUX_M1 + AUX_M2) / 2;

//AUX_M4 = (AUX_M3 - AUXPESO * AuxComp2 ^ 2 / 8)
AUX_M4 = (AUX_M3 - AUXPESO * AuxComp2**2 / 8);

//Aux_m = AUX_M1
//If AUX_M2 > Aux_m Then Aux_m = AUX_M2
id('txtMomento').value = AUX_M1;
if(AUX_M2 > id('txtMomento').value){
  id('txtMomento').value = AUX_M2;
  var txtMomento = parseFloat(id('txtMomento').value);
}

//If AUX_M4 > Aux_m Then Aux_m = AUX_M4

if(AUX_M4 > form03.txtWx.value){
  form03.txtWx.value = AUX_M4;   
}


//Aux_Wx = Aux_m / (AuxTenes * 0.6)
var AuxTenes = parseFloat(id('AuxTenes').value);
var aux_01 = parseFloat(0.6);
form03.txtWx.value = form02.txtMomento.value/ (AuxTenes * aux_01);

//AUX_Q1 = AUXPESO * AuxComp1
AUX_Q1 = AUXPESO * AuxComp1;

//AUX_Q2 = AUXPESO * AuxComp3
AUX_Q2 = AUXPESO * AuxComp3;

//AUX_Q3 = AUX_R1 - AUX_Q1
AUX_Q3 = AUX_R1 - AUX_Q1;

//AUX_Q4 = AUX_R2 - AUX_Q2
AUX_Q4 = AUX_R2 - AUX_Q2;

//Aux_Fc = AUX_Q1
//If AUX_Q2 > Aux_Fc Then Aux_Fc = AUX_Q2
//If AUX_Q3 > Aux_Fc Then Aux_Fc = AUX_Q3
//If AUX_Q4 > Aux_Fc Then Aux_Fc = AUX_Q4
Aux_Fc = AUX_Q1;
if(AUX_Q2 > Aux_Fc){
    Aux_Fc = AUX_Q2;  
}
if(AUX_Q3 > Aux_Fc){
    Aux_Fc = AUX_Q3;
}
if(AUX_Q4 > Aux_Fc){
    Aux_Fc = AUX_Q4;
}

//Aux_Fc = Aux_Fc / AuxTenes / 0.4
form04.xtAreaFC.value = Aux_Fc / AuxTenes / 0.4;

//AUX_IX1 = AUXPESO * AuxComp1 ^ 3 / 840
AUX_IX1 = AUXPESO * AuxComp1**3 / 840;

//AUX_IX2 = AUXPESO * AuxComp3 * AuxComp3 * AuxComp3 / 840
AUX_IX2 = AUXPESO * AuxComp3 * AuxComp3 * AuxComp3 / 840;

//If Not AuxComp1 < AuxComp3 Then
//AUX_IX3 = 1 / (105 * AuxComp2) * (AUXPESO * AUXCOMPT * (AuxComp2 / 2) ^ 3 / 12 - AUXPESO * (AuxComp1 + AuxComp2 / 2) ^ 4 / 24 + AUXPESO * AUXCOMPT ^ 3 * (AuxComp1 + AuxComp2 / 2) / 48 - AUXPESO * AUXCOMPT * (AuxComp1 + AuxComp2 / 2) / 4 * (AUXCOMPT / 2 - AuxComp1) * (AUXCOMPT / 2 - AuxComp1) + AUXPESO * AuxComp1 ^ 4 / 24 - AUXPESO * AuxComp1  * AUXCOMPT ^ 3 / 48 + AUXPESO * AUXCOMPT * AuxComp1 / 4 * (AUXCOMPT / 2 - AuxComp1) * (AUXCOMPT / 2 - AuxComp1))
//Else
//AUX_IX3 = 1 / (105 * AuxComp2) * (AUXPESO * AUXCOMPT * (AuxComp2 / 2) ^ 3 / 12 - AUXPESO * (AuxComp3 + AuxComp2 / 2) ^ 4 / 24 + AUXPESO * AUXCOMPT ^ 3 * (AuxComp3 + AuxComp2 / 2) / 48 - AUXPESO * AUXCOMPT * (AuxComp3 + AuxComp2 / 2) / 4 * (AUXCOMPT / 2 - AuxComp3) * (AUXCOMPT / 2 - AuxComp3) + AUXPESO * AuxComp3 * AuxComp3 * AuxComp3 * AuxComp3 / 24 - AUXPESO * AuxComp3 * AUXCOMPT ^ 3 / 48 + AUXPESO * AUXCOMPT * AuxComp3 / 4 * (AUXCOMPT /  2 - AuxComp3) * (AUXCOMPT / 2 - AuxComp3))
//End If
if (! AuxComp1 < AuxComp3){
  AUX_IX3 = 1 / (105 * AuxComp2) * (AUXPESO * AUXCOMPT * (AuxComp2 / 2)**3 / 12 - AUXPESO * (AuxComp1 + AuxComp2 / 2)**4 / 24 + AUXPESO * AUXCOMPT**3 * (AuxComp1 + AuxComp2 / 2) / 48 - AUXPESO * AUXCOMPT * (AuxComp1 + AuxComp2 / 2) / 4 * (AUXCOMPT / 2 - AuxComp1) * (AUXCOMPT / 2 - AuxComp1) + AUXPESO * AuxComp1**4 / 24 - AUXPESO * AuxComp1  * AUXCOMPT**3 / 48 + AUXPESO * AUXCOMPT * AuxComp1 / 4 * (AUXCOMPT / 2 - AuxComp1) * (AUXCOMPT / 2 - AuxComp1));
}else{
  AUX_IX3 = 1 / (105 * AuxComp2) * (AUXPESO * AUXCOMPT * (AuxComp2 / 2)**3 / 12 - AUXPESO * (AuxComp3 + AuxComp2 / 2)**4 / 24 + AUXPESO * AUXCOMPT**3 * (AuxComp3 + AuxComp2 / 2) / 48 - AUXPESO * AUXCOMPT * (AuxComp3 + AuxComp2 / 2) / 4 * (AUXCOMPT / 2 - AuxComp3) * (AUXCOMPT / 2 - AuxComp3) + AUXPESO * AuxComp3 * AuxComp3 * AuxComp3 * AuxComp3 / 24 - AUXPESO * AuxComp3 * AUXCOMPT**3 / 48 + AUXPESO * AUXCOMPT * AuxComp3 / 4 * (AUXCOMPT /  2 - AuxComp3) * (AUXCOMPT / 2 - AuxComp3));

}



//Aux_Ix = AUX_IX1
Aux_Ix = AUX_IX1;

//If AUX_IX2 > Aux_Ix Then Aux_Ix = AUX_IX2
if(AUX_IX2 > Aux_Ix){
  Aux_Ix = AUX_IX2;

}


//If AUX_IX3 > Aux_Ix Then Aux_Ix = AUX_IX3
if(AUX_IX3 > Aux_Ix){
  Aux_Ix = AUX_IX3;

}  
  


    


          
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