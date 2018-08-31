
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

//AUXCOMPT = txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value + txtAuxComp6.Value
AUXCOMPT = txtAuxComp1 + txtAuxComp2 + txtAuxComp3 + txtAuxComp4 + txtAuxComp5 + txtAuxComp6;

//AUXPESO = txtAuxCargQ.Value / AUXCOMPT
AUXPESO = txtAuxCargQ.Value / AUXCOMPT;

//'*------>  MOMENTO NO CENTRO
//AUX_MQC = AUXPESO * AUXCOMPT ^ 2 / 8
AUX_MQC = AUXPESO * AUXCOMPT**2 / 8;

//If txtAuxComp1.Value > (AUXCOMPT / 2) Then
//AUX_M1 = (txtAuxCargQ.Value * AUXCOMPT - txtAuxCargQ.Value * txtAuxComp1.Value) / 2
//Else
//AUX_M1 = txtAuxCargQ.Value * txtAuxComp1.Value / 2
//End If
if(txtAuxComp1.Value > (AUXCOMPT / 2)){
    AUX_M1 = (txtAuxCargQ.Value * AUXCOMPT - txtAuxCargQ.Value * txtAuxComp1.Value) / 2;
}else{
    AUX_M1 = txtAuxCargQ.Value * txtAuxComp1.Value / 2;
}

//If (txtAuxComp1.Value + txtAuxComp2.Value) > (AUXCOMPT / 2) Then
//AUX_M2 = (txtAuxCarg2.Value * AUXCOMPT - txtAuxCarg2.Value * (txtAuxComp1.Value + txtAuxComp2.Value)) / 2
//Else
//AUX_M2 = txtAuxCarg2.Value * (txtAuxComp1.Value + txtAuxComp2.Value) / 2
//End If
if((txtAuxComp1.Value + txtAuxComp2.Value) > (AUXCOMPT / 2)){
    AUX_M2 = (txtAuxCarg2.Value * AUXCOMPT - txtAuxCarg2.Value * (txtAuxComp1.Value + txtAuxComp2.Value)) / 2;
}else{
    AUX_M2 = txtAuxCarg2.Value * (txtAuxComp1.Value + txtAuxComp2.Value) / 2;
}


//If (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) > (AUXCOMPT / 2) Then
//AUX_M3 = (txtAuxCarg3.Value * AUXCOMPT - txtAuxCarg3.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value)) / 2
//Else
//AUX_M3 = txtAuxCarg3.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) / 2
//End If
if((txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) > (AUXCOMPT / 2)){
    AUX_M3 = (txtAuxCarg3.Value * AUXCOMPT - txtAuxCarg3.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value)) / 2;
}else{
    AUX_M3 = txtAuxCarg3.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) / 2;
}


//If (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) > (AUXCOMPT / 2) Then
//AUX_M4 = (txtAuxCarg4.Value * AUXCOMPT - txtAuxCarg4.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value)) / 2
//Else
//AUX_M4 = txtAuxCarg4.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) / 2
//End If
if((txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) > (AUXCOMPT / 2)){
    AUX_M4 = (txtAuxCarg4.Value * AUXCOMPT - txtAuxCarg4.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value)) / 2; 
}else{
    AUX_M4 = txtAuxCarg4.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) / 2;
}


//If (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) > (AUXCOMPT / 2) Then
//AUX_M5 = (txtAuxCarg5.Value * AUXCOMPT - txtAuxCarg5.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value)) / 2
//Else
//AUX_M5 = txtAuxCarg5.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) / 2
//End If
if((txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) > (AUXCOMPT / 2)){
    AUX_M5 = (txtAuxCarg5.Value * AUXCOMPT - txtAuxCarg5.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value)) / 2;
}else{
    AUX_M5 = txtAuxCarg5.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) / 2;
}

//AUX_MQC = AUX_MQC + AUX_M1 + AUX_M2 + AUX_M3 + AUX_M4 + AUX_M5
AUX_MQC = AUX_MQC + AUX_M1 + AUX_M2 + AUX_M3 + AUX_M4 + AUX_M5;

//'*------>  MOMENTOS LATERAIS
//AUX_R1 = (txtAuxCarg5.Value * txtAuxComp6.Value + txtAuxCarg4.Value * (txtAuxComp5.Value + txtAuxComp6.Value) + txtAuxCarg3.Value * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value) + txtAuxCarg2.Value * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value) + txtAuxCargQ.Value * (AUXCOMPT - txtAuxComp1.Value)) / AUXCOMPT
AUX_R1 = (txtAuxCarg5.Value * txtAuxComp6.Value + txtAuxCarg4.Value * (txtAuxComp5.Value + txtAuxComp6.Value) + txtAuxCarg3.Value * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value) + txtAuxCarg2.Value * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value) + txtAuxCargQ.Value * (AUXCOMPT - txtAuxComp1.Value)) / AUXCOMPT;

//AUX_M1 = AUX_R1 * txtAuxComp1.Value + AUXPESO * AUXCOMPT * txtAuxComp1.Value / 2 - AUXPESO * txtAuxComp1.Value ^ 2 / 2
AUX_M1 = AUX_R1 * txtAuxComp1.Value + AUXPESO * AUXCOMPT * txtAuxComp1.Value / 2 - AUXPESO * txtAuxComp1**2 / 2;

//AUX_M2 = AUX_R1 * txtAuxComp1.Value + (AUX_R1 - txtAuxCargQ.Value) * txtAuxComp2.Value + AUXPESO * AUXCOMPT * (txtAuxComp1.Value + txtAuxComp2.Value) / 2 - AUXPESO * (txtAuxComp1.Value + txtAuxComp2.Value) ^ 2 / 2
AUX_M2 = AUX_R1 * txtAuxComp1.Value + (AUX_R1 - txtAuxCargQ.Value) * txtAuxComp2.Value + AUXPESO * AUXCOMPT * (txtAuxComp1.Value + txtAuxComp2.Value) / 2 - AUXPESO * (txtAuxComp1.Value + txtAuxComp2.Value)**2 / 2;

//AUX_M3 = AUX_R1 * txtAuxComp1.Value + (AUX_R1 - txtAuxCargQ.Value) * txtAuxComp2.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value) * txtAuxComp3.Value + AUXPESO * AUXCOMPT * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) / 2 - AUXPESO * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) ^ 2 / 2
AUX_M3 = AUX_R1 * txtAuxComp1.Value + (AUX_R1 - txtAuxCargQ.Value) * txtAuxComp2.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value) * txtAuxComp3.Value + AUXPESO * AUXCOMPT * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) / 2 - AUXPESO * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value)**2 / 2;

//AUX_M4 = AUX_R1 * txtAuxComp1.Value + (AUX_R1 - txtAuxCargQ.Value) * txtAuxComp2.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value) * txtAuxComp3.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value - txtAuxCarg3.Value) * txtAuxComp4.Value + AUXPESO * AUXCOMPT * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) / 2 - AUXPESO * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) ^ 2 / 2
AUX_M4 = AUX_R1 * txtAuxComp1.Value + (AUX_R1 - txtAuxCargQ.Value) * txtAuxComp2.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value) * txtAuxComp3.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value - txtAuxCarg3.Value) * txtAuxComp4.Value + AUXPESO * AUXCOMPT * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) / 2 - AUXPESO * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value)**2 / 2;

//AUX_M5 = AUX_R1 * txtAuxComp1.Value + (AUX_R1 - txtAuxCargQ.Value) * txtAuxComp2.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value) * txtAuxComp3.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value - txtAuxCarg3.Value) * txtAuxComp4.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value - txtAuxCarg3.Value - txtAuxCarg4.Value) * txtAuxComp5.Value + AUXPESO * AUXCOMPT * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) / 2 - AUXPESO * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) ^ 2 / 2
AUX_M5 = AUX_R1 * txtAuxComp1.Value + (AUX_R1 - txtAuxCargQ.Value) * txtAuxComp2.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value) * txtAuxComp3.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value - txtAuxCarg3.Value) * txtAuxComp4.Value + (AUX_R1 - txtAuxCargQ.Value - txtAuxCarg2.Value - txtAuxCarg3.Value - txtAuxCarg4.Value) * txtAuxComp5.Value + AUXPESO * AUXCOMPT * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) / 2 - AUXPESO * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value)**2 / 2;

//AUX_MQL = AUX_M1
AUX_MQL = AUX_M1;

//If AUX_M2 > AUX_MQL Then AUX_MQL = AUX_M2
if(AUX_M2 > AUX_MQL){
    AUX_MQL = AUX_M2;   
}

//If AUX_M3 > AUX_MQL Then AUX_MQL = AUX_M3
if(AUX_M3 > AUX_MQL){
    AUX_MQL = AUX_M3; 
}

//If AUX_M4 > AUX_MQL Then AUX_MQL = AUX_M4
if(AUX_M4 > AUX_MQL){
    AUX_MQL = AUX_M4;
}

//If AUX_M5 > AUX_MQL Then AUX_MQL = AUX_M5
if(AUX_M5 > AUX_MQL){
    AUX_MQL = AUX_M5;  
}

//Aux_m = AUX_MQC
Aux_m = AUX_MQC;

//If AUX_MQL > Aux_m Then Aux_m = AUX_MQL
if(AUX_MQL > Aux_m){
    Aux_m = AUX_MQL;
}


//ED_VAL1 = Aux_m
ED_VAL1 = Aux_m;

//Aux_Wx = Aux_m / (txtAuxTenes * 0.6)
var AuxTenes = parseFloat(form03.AuxTenes.value);
var aux_01 = parseFloat(0.6);
form03.txtWx.value = form02.txtMomento.value/ (AuxTenes * a);

//ED_VAL1 = Aux_Wx
ED_VAL1 = Aux_Wx;

//'*-----> FLECHA
//AUX_QQ = AUXPESO * AUXCOMPT ^ 4 / 1612800
AUX_QQ = AUXPESO * AUXCOMPT**4 / 1612800;

//If Not txtAuxComp1.Value < (AUXCOMPT / 2) Then
//AUX_Q1 = (AUXCOMPT - txtAuxComp1.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (AUXCOMPT - txtAuxComp1.Value) ^ 2) * AUXCOMPT / 2)
//Else
//AUX_Q1 = txtAuxComp1.Value / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - txtAuxComp1.Value ^ 2) * AUXCOMPT / 2)
//End If
if(txtAuxComp1.Value < (AUXCOMPT / 2)){
    AUX_Q1 = (AUXCOMPT - txtAuxComp1.Value) / AUXCOMPT / 126000 * (AUXCOMPT**3 / 8 - (AUXCOMPT**2 - (AUXCOMPT - txtAuxComp1.Value)**2) * AUXCOMPT / 2);  
}else{
    AUX_Q1 = txtAuxComp1.Value / AUXCOMPT / 126000 * (AUXCOMPT**3 / 8 - (AUXCOMPT**2 - txtAuxComp1.Value**2) * AUXCOMPT / 2);
}

//AUX_Q1 = Abs(AUX_Q1)
AUX_Q1 = Abs(AUX_Q1);

//AUX_Q1 = txtAuxCargQ.Value * AUX_Q1
AUX_Q1 = txtAuxCargQ.Value * AUX_Q1;

//If Not (txtAuxComp1.Value + txtAuxComp2.Value) < (AUXCOMPT / 2) Then
//AUX_Q2 = (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value) * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value)) * AUXCOMPT / 2)
//Else
//AUX_Q2 = (txtAuxComp1.Value + txtAuxComp2.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (txtAuxComp1.Value + txtAuxComp2.Value) ^ 2) * AUXCOMPT / 2)
//End If
if((txtAuxComp1.Value + txtAuxComp2.Value) < (AUXCOMPT / 2)){
    AUX_Q2 = (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value) / AUXCOMPT / 126000 * (AUXCOMPT**3 / 8 - (AUXCOMPT ^ 2 - (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value) * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value)) * AUXCOMPT / 2);
}else{
    AUX_Q2 = (txtAuxComp1.Value + txtAuxComp2.Value) / AUXCOMPT / 126000 * (AUXCOMPT**3 / 8 - (AUXCOMPT**2 - (txtAuxComp1.Value + txtAuxComp2.Value)**2) * AUXCOMPT / 2);
}

//AUX_Q2 = Abs(AUX_Q2)
AUX_Q2 = Abs(AUX_Q2);

//AUX_Q2 = txtAuxCarg2.Value * AUX_Q2
AUX_Q2 = txtAuxCarg2.Value * AUX_Q2;

//If Not (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) < (AUXCOMPT / 2) Then
//AUX_Q3 = (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value) * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value)) * AUXCOMPT / 2)
//Else
//AUX_Q3 = (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) ^ 2) * AUXCOMPT / 2)
//End If
if((txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) < (AUXCOMPT / 2)){
    AUX_Q3 = (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value) / AUXCOMPT / 126000 * (AUXCOMPT**3 / 8 - (AUXCOMPT**2 - (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value) * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value)) * AUXCOMPT / 2);   
}else{
    AUX_Q3 = (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) / AUXCOMPT / 126000 * (AUXCOMPT**3 / 8 - (AUXCOMPT**2 - (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value)**2) * AUXCOMPT / 2)
}

//AUX_Q3 = Abs(AUX_Q3)
AUX_Q3 = Abs(AUX_Q3);

//AUX_Q3 = txtAuxCarg3.Value * AUX_Q3
AUX_Q3 = txtAuxCarg3.Value * AUX_Q3;

//If Not (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) < (AUXCOMPT / 2) Then
//AUX_Q4 = (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value  - txtAuxComp4.Value) * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value)) * AUXCOMPT / 2)
//Else
//AUX_Q4 = (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) ^ 2) * AUXCOMPT / 2)
//End If
if((txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) < (AUXCOMPT / 2)){
    AUX_Q4 = (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value  - txtAuxComp4.Value) * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value)) * AUXCOMPT / 2); 
}else{
    AUX_Q4 = (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value) ^ 2) * AUXCOMPT / 2);
}


//AUX_Q4 = Abs(AUX_Q4)
AUX_Q4 = Abs(AUX_Q4);

//AUX_Q4 = txtAuxCarg4.Value * AUX_Q4
AUX_Q4 = txtAuxCarg4.Value * AUX_Q4;

//If Not (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) < (AUXCOMPT / 2) Then
//AUX_Q5 = (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value - txtAuxComp5.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value - txtAuxComp5.Value) * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value  - txtAuxComp5.Value)) * AUXCOMPT / 2)
//Else
//AUX_Q5 = (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) ^ 2) * AUXCOMPT / 2)
//End If
if((txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) < (AUXCOMPT / 2)){
    AUX_Q5 = (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value - txtAuxComp5.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value - txtAuxComp5.Value) * (AUXCOMPT - txtAuxComp1.Value - txtAuxComp2.Value - txtAuxComp3.Value - txtAuxComp4.Value  - txtAuxComp5.Value)) * AUXCOMPT / 2);   
}else{
    AUX_Q5 = (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) / AUXCOMPT / 126000 * (AUXCOMPT ^ 3 / 8 - (AUXCOMPT ^ 2 - (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value + txtAuxComp4.Value + txtAuxComp5.Value) ^ 2) * AUXCOMPT / 2);   
}


//AUX_Q5 = Abs(AUX_Q5)
AUX_Q5 = Abs(AUX_Q5);

//AUX_Q5 = txtAuxCarg5.Value * AUX_Q5
AUX_Q5 = txtAuxCarg5.Value * AUX_Q5;

//Aux_Ix = (200 * (AUX_QQ + AUX_Q1 + AUX_Q2 + AUX_Q3 + AUX_Q4 + AUX_Q5)) / AUXCOMPT
Aux_Ix = (200 * (AUX_QQ + AUX_Q1 + AUX_Q2 + AUX_Q3 + AUX_Q4 + AUX_Q5)) / AUXCOMPT;

//'AUX_ix TO ED-VAL1
//'DISPLAY "Ix: " LINE 21 POSITION 43 ED-VAL1 " mm4"
//'*-----> FORCA CORTANTE
//AUX_R1 = (txtAuxCarg5.Value * (AUXCOMPT - txtAuxComp6.Value) + txtAuxCarg4.Value * (AUXCOMPT - txtAuxComp5.Value - txtAuxComp6.Value)  + txtAuxCarg3.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) + txtAuxCarg2.Value * (txtAuxComp1.Value + txtAuxComp2.Value) + txtAuxCargQ.Value  * txtAuxComp1.Value + AUXPESO * AUXCOMPT ^ 2 / 2) / AUXCOMPT
AUX_R1 = (txtAuxCarg5.Value * (AUXCOMPT - txtAuxComp6.Value) + txtAuxCarg4.Value * (AUXCOMPT - txtAuxComp5.Value - txtAuxComp6.Value)  + txtAuxCarg3.Value * (txtAuxComp1.Value + txtAuxComp2.Value + txtAuxComp3.Value) + txtAuxCarg2.Value * (txtAuxComp1.Value + txtAuxComp2.Value) + txtAuxCargQ.Value  * txtAuxComp1.Value + AUXPESO * AUXCOMPT ^ 2 / 2) / AUXCOMPT;

//AUX_R2 = txtAuxCargQ.Value + txtAuxCarg2.Value + txtAuxCarg3.Value + txtAuxCarg4.Value + txtAuxCarg5.Value + AUXPESO * AUXCOMPT - AUX_R1
AUX_R2 = txtAuxCargQ.Value + txtAuxCarg2.Value + txtAuxCarg3.Value + txtAuxCarg4.Value + txtAuxCarg5.Value + AUXPESO * AUXCOMPT - AUX_R1;

//Aux_Fc = AUX_R1
Aux_Fc = AUX_R1;

//If AUX_R2 > Aux_Fc Then Aux_Fc = AUX_R2
if(AUX_R2 > Aux_Fc){
    Aux_Fc = AUX_R2; 
}


//Aux_Fc = Aux_Fc / txtAuxTenes / 0.4
Aux_Fc = Aux_Fc / txtAuxTenes / b;
    


          
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