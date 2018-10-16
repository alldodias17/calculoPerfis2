
window.onload = function () {
  document.getElementById("etam_A").focus();
};
$(document).ready(function () {
  $("#etam_A").focus(function () {
    $(this).css("background-color", "#F0F8FF");
  });
  $("#etam_B").blur(function () {
    $(this).css("background-color", "#F0F8FF");
  });
  $("#etam_C").blur(function () {
    $(this).css("background-color", "#F0F8FF");
  });
  $("#espessura_e").blur(function () {
    $(this).css("background-color", "#F0F8FF");
  });
  $("#raioe").blur(function () {
    $(this).css("background-color", "#F0F8FF");
  });
});
  function validar () {
    var form01 = document.getElementById("form01");
    var etam_A = form01.etam_A;
    var re_etam_A = /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_A.test(etam_A.value)) {
      etam_A.value = etam_A.value.replace(re_etam_A, "$1$2,00");
    }
    var form02 = document.getElementById("form02");
    var etam_B = form02.etam_B;
    var re_etam_B = /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_B.test(etam_B.value)) {
      etam_B.value = etam_B.value.replace(re_etam_B, "$1$2,00");
    }
    var form03 = document.getElementById("form03");
    var raioe = form03.raioe;
    var re_raioe = /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_raioe.test(raioe.value)) {
      raioe.value = raioe.value.replace(re_raioe, "$1$2,00");
    }
    var form01 = document.getElementById("form01");
    var espessura_e = form01.espessura_e;
    var re_espessura_e = /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_espessura_e.test(espessura_e.value)) {
      espessura_e.value = espessura_e.value.replace(re_espessura_e, "$1$2,00");
    }

    


  var str = document.getElementById("etam_A").value;
  var res = str.replace(",", ".");
  document.getElementById("etam_A").value = res;
  var str = document.getElementById("etam_B").value;
  var res = str.replace(",", ".");
  document.getElementById("etam_B").value = res;
  var str = document.getElementById("etam_C").value;
  var res = str.replace(",", ".");
  document.getElementById("etam_C").value = res;
  var str = document.getElementById("raioe").value;
  var res = str.replace(",", ".");
  document.getElementById("raioe").value = res;
  var str = document.getElementById("espessura_e").value;
  var res = str.replace(",", ".");
  document.getElementById("espessura_e").value = res;
  var str = document.getElementById("eangulo").value;
  var res = str.replace(",", ".");
  document.getElementById("eangulo").value = res;
  var str = document.getElementById("eangulo").value;
  var res = str.replace(",", ".");
  document.getElementById("eangulo").value = res;
  var str = document.getElementById("dtam_a").value;
  var res = str.replace(",", ".");
  document.getElementById("dtam_a").value = res;
  var str = document.getElementById("ud").value;
  var res = str.replace(",", ".");
  document.getElementById("ud").value = res;

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
id('dtam_A').value = id('etam_A').value || 0.00;
id('dtam_B').value = id('etam_B').value || 0.00;
id('dtam_D').value = id('etam_D').value || 0.00;
id('espessura_d').value = id('espessura_e').value || 0.00;


var a = parseFloat(0.363);
var b = parseFloat(0.149);
var d = parseFloat(0.358);
var p = parseFloat(0.0833)
var z = parseFloat(1.637);
var c = parseFloat(0.149);
var e = parseFloat(0.637);
var f = parseFloat(0.001);
var g = parseFloat(7.85);
var h = parseFloat(0.0417);




//RDB2 = RDB1 * ESPES


var ESPES = parseFloat(id('espessura_d').value);
var RDB1 = parseFloat(id('raioe').value);
id('raiod').value = (RDB1 * ESPES || 0.00 ).toFixed(2);
var RDB2 = parseFloat(id('raiod').value);


//RN = RDB2 + ESPES / 2
id('raio_neutro').value = (id('raiod').value*1 + id('espessura_d').value / 2 || 0.00).toFixed(2);
var RN = parseFloat(id('raio_neutro').value);

//ALTDB = RDB2 + ESPES
id('alturadobra').value = (id('raiod').value*1 + id('espessura_d').value*1 || 0.00).toFixed(2);
var ALTB = parseFloat(id('alturadobra').value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
id('ud').value = ((id('raio_neutro').value * 10 * 1.57) / 10 || 0.00).toFixed(2);
var U = parseFloat(id('ud').value);

//A2 = A1 - (2 * RN + ESPES)
var A1 = parseFloat(id('dtam_A').value);
id('dtam_a').value = (id('dtam_A').value*1 - (2 * id('raio_neutro').value + id('espessura_d').value*1) || 0.00).toFixed(2);
var A2 = parseFloat(id('dtam_a').value);

//B2 = B1 - (RN + ESPES / 2)
var B1 = parseFloat(id('dtam_B').value);
id('dtam_b').value = (B1 - (RN + ESPES / 2) || 0.00).toFixed(2);
var B2 = parseFloat(id('dtam_b').value); 

//AB = A1 - ESPES
id('dtam_a1').value = (id('dtam_A').value - id('espessura_d').value || 0.00).toFixed(2);
var AB = parseFloat(id('dtam_a1').value); 

//BB = B1 - ESPES / 2
id('dtam_bbarra').value = (B1 - ESPES / 2 || 0.00).toFixed(2);
var BB = parseFloat(id('dtam_bbarra').value);

//CGY = A1 / 2
id('cgy').value = (A1 / 2 || 0.00).toFixed(2);
var CGY = parseFloat(id('cgy').value);

//IX = 2 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + RN) ^ 2 + U * (A2 / 2 + 0.637 * RN) ^ 2 + 0.149 * RN ^ 3)


id('ixx').value = 2 * ESPES * (0.0417 * A2**3 + B2 * (A2 / 2 + RN)**2 + U * (A2 / 2 + 0.637 * RN)**2 + 0.149 * RN**3);

var IX = parseFloat(id('ixx').value);


//WX = IX / CGY
id('wx').value = ((IX / CGY) || 0.00).toFixed(2);
var WX = parseFloat(id('wx').value);


//FITA = 2 * B2 + A2 + 2 * U
id('largura_da').value = (2 * B2 + A2 + 2 * U).toFixed(2);
var FITA = parseFloat(id('largura_da').value);

//AREA1 = FITA * ESPES
id('area_total').value = (FITA * ESPES || 0.00).toFixed(2);
var AREA01 = id('area_total').value;

//AREAU = AREA1
id('area_util').value = id('area_total').value || 0.00;

//KGM = AREA1 * 0.001 * 7.85
id('d_Peso').value = (AREA01 * 0.001 * 7.85).toFixed(2);
var KGM = parseFloat(id('d_Peso').value);

//XB = 2 * ESPES / AREA1 * (B2 * (B2 / 2 + RN) + U * 0.363 * RN)
id('dtam_xx').value = (2 * ESPES / AREA01 * (B2 * (B2 / 2 + RN) + U * a * RN) || 0.00).toFixed(2);
var XB = id('dtam_xx').value;

//IY = 2 * ESPES * (B2 * (B2 / 2 + RN) ^ 2 + 0.0833 * B2 ^ 3 + 0.356 * RN ^ 3) - AREA1 * XB ^ 2
id('iyy').value = (2 * ESPES * (B2 * Math.pow(B2 / 2 + RN,2) + 0.0833 * Math.pow(B2,3) + 0.356 * Math.pow(RN,3)) - AREA01 * Math.pow(XB,2));
var IY = parseFloat(id('iyy').value);
 

//CGX = XB + ESPES / 2
id('cgx').value = (XB*1 + ESPES*1 / 2).toFixed(2);
var CGX = parseFloat(id('cgx').value);

//WY = IY / (BB - XB)
id('wy').value = ((IY / (BB - XB) || 0.00)).toFixed(2);
var WY = parseFloat(id('wy').value);

//WT = FITA * (ESPES ^ 2) / 3
id('wt').value =  ((FITA * Math.pow(ESPES,2) / 3) || 0.00).toFixed(2);
var WT = parseFloat(id('wt').value);

//IX1 = (IX / AREA1) ^ 0.5
var ix01 = IX / AREA01;
var ix02 = Math.pow(ix01,0.5);
id('ixis').value = (ix02).toFixed(2);
var IX1 = parseFloat(id('ixis').value).toFixed(2);

//IY1 = (IY / AREA1) ^ 0.5
id('iy').value = Math.pow(IY*1 / AREA01*1,0.5).toFixed(2);
var IY1 = parseFloat(id('iy').value);

//EME = BB * ESPES / (12 * IX) * (3 * BB * AB ^ 2)
id('dtam_m').value = (BB * ESPES / (12 * IX) * (3 * BB * Math.pow(AB,2) || 0.00)).toFixed(2);
var EME = parseFloat(id('dtam_m').value);

///x0 = -(XB + EME)
id('dtam_X').value =(-(XB*1 + EME*1 || 0.00)).toFixed(2);
var x0 = parseFloat(id('dtam_X').value);

//DIST = -x0
id('dtam_distancia').value = (-x0).toFixed(2);
var DIST = parseFloat(id('dtam_distancia').value);

//IP = CDbl(Mid(IX, 1, Len(Str(IX)) - 4)) + CDbl(Mid(IY, 1, Len(Str(IY)) - 7)) + AREA1 * (CDbl(Mid(EME, 1, Len(Str(EME)) - 10)) + CDbl(Mid(XB, 1, Len(Str(XB)) - 10))) ^ 2


//J1 = ESPES ^ 3 / 3 * FITA
id('j').value = (Math.pow(ESPES,3) / 3 * FITA || 0.00).toFixed(2);
var J1 = parseFloat(id('j').value);

//Cw = (ESPES * AB ^ 2 * BB ^ 3) / 12 * ((3 * BB + 2 * AB) / (6 * BB + AB))
id('cw').value = (ESPES * Math.pow(AB,2) * Math.pow(BB,3)) / 12 * ((3 * BB + 2 * AB) / (6 * BB + AB) || 0.00);
var Cw = parseFloat(id('cw').value);

//BETAW = -(0.0833 * ESPES * XB * AB ^ 3 + ESPES * XB ^ 3 * AB)
BETAW = (-(0.0833 * ESPES * XB * Math.pow(AB,3) + ESPES * Math.pow(XB,3) * AB)).toFixed(2);

//BETAF = ESPES / 2 * ((BB - XB) ^ 4 - XB ^ 4) + (ESPES * AB ^ 2) / 4 * ((BB - XB) ^ 2 - XB ^ 2)
BETAF = (ESPES / 2 * ((BB - XB) ^ 4 - Math.pow(XB,4)) + (ESPES * Math.pow(AB,2)) / 4 * (Math.pow(BB - XB,2) - Math.pow(XB,2))||0.00).toFixed(2);

//J2 = 1 / (2 * IY) * (BETAW + BETAF) + XB + EME





  
  window.onload = function () {
    id('copiar').onclick = function () {
      soma();
    }
  }

}


  


