
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
  function validar() {
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
var ESPES = parseFloat(form06.espessura_d.value);
var RDB1 = parseFloat(form03.raioe.value);
form07.raiod.value = (RDB1 * ESPES || 0.00 ).toFixed(2);
var RDB2 = parseFloat(form07.raiod.value); 

//RN = RDB2 + ESPES / 2
form08.raio_neutro.value = (form07.raiod.value*1 + (form06.espessura_d.value / 2) || 0.00).toFixed(2);
var RN = parseFloat(form08.raio_neutro.value);

//ALTDB = RDB2 + ESPES
form09.alturadobra.value = (form07.raiod.value*1 + form06.espessura_d.value*1 || 0.00).toFixed(2);
var ALTB = parseFloat(form09.alturadobra.value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
form10.ud.value = ((form08.raio_neutro.value * 10 * 1.57) / 10 || 0.00).toFixed(2);
var U = parseFloat(form10.ud.value);

//A2 = A1 - (2 * RN + ESPES)
var A1 = parseFloat(form04.dtam_A.value);
form09.dtam_a.value = (form04.dtam_A.value*1 - (2 * form08.raio_neutro.value + form06.espessura_d.value*1) || 0.00).toFixed(2);
var A2 = parseFloat(form09.dtam_a.value);

//B2 = B1 - (RN + ESPES / 2)
var B1 = parseFloat(form05.dtam_B.value);
form09.dtam_b.value = (B1 - (RN + ESPES / 2) || 0.00).toFixed(2);
var B2 = parseFloat(form09.dtam_b.value); 

//AB = A1 - ESPES
form05.dtam_a1.value = (form04.dtam_A.value - form06.espessura_d.value || 0.00).toFixed(2);
var AB = parseFloat(form05.dtam_a1.value); 

//BB = B1 - ESPES / 2
form06.dtam_bbarra.value = (B1 - ESPES / 2 || 0.00).toFixed(2);
var BB = parseFloat(form06.dtam_bbarra.value);

//CGY = A1 / 2
form15.cgy.value = (A1 / 2 || 0.00).toFixed(2);
var CGY = parseFloat(form15.cgy.value);

//IX = 2 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + RN) ^ 2 + U * (A2 / 2 + 0.637 * RN) ^ 2 + 0.149 * RN ^ 3)
var ix01 = Math.pow(A2,3);
var ix02 = A2 / 2 + RN;
var ix03 = Math.pow(ix02,2);
var ix04 = A2 / 2 + e * RN;
var ix05 = Math.pow(ix04,2);
var ix06 = Math.pow(RN,3);

form12.ixx.value = (2 * ESPES * (h * ix01 + B2 * ix03 + U * ix05 + b * ix06 )).toFixed(2);

var IX = parseFloat(form12.ixx.value);


//WX = IX / CGY
form18.wx.value = ((IX / CGY) || 0.00).toFixed(2);
var WX = parseFloat(form18.wx.value);


//FITA = 2 * B2 + A2 + 2 * U
form10.largura_da.value = (2 * B2 + A2 + 2 * U).toFixed(2);
var FITA = parseFloat(form10.largura_da.value);

//AREA1 = FITA * ESPES
form19.area_total.value = (FITA * ESPES || 0.00).toFixed(2);
var AREA01 = form19.area_total.value;

//AREAU = AREA1
id('area_util').value = id('area_total').value || 0.00;

//KGM = AREA1 * 0.001 * 7.85
form04.d_Peso.value = (AREA01 * 0.001 * 7.85).toFixed(2);
var KGM = parseFloat(form04.d_Peso.value);

//XB = 2 * ESPES / AREA1 * (B2 * (B2 / 2 + RN) + U * 0.363 * RN)
form07.dtam_xx.value = (2 * ESPES / AREA01 * (B2 * (B2 / 2 + RN) + U * a * RN) || 0.00).toFixed(2);
var XB = form07.dtam_xx.value;

//IY = 2 * ESPES * (B2 * (B2 / 2 + RN) ^ 2 + 0.0833 * B2 ^ 3 + 0.356 * RN ^ 3) - AREA1 * XB ^ 2
form13.iyy.value = (2 * ESPES * (B2 * Math.pow(B2 / 2 + RN,2) + 0.0833 * Math.pow(B2,3) + 0.356 * Math.pow(RN,3)) - AREA01 * Math.pow(XB,2));
var IY = parseFloat(form13.iyy.value);
 

//CGX = XB + ESPES / 2
form14.cgx.value = (XB*1 + ESPES*1 / 2).toFixed(2);
var CGX = parseFloat(form14.cgx.value);

//WY = IY / (BB - XB)
form13.wy.value = ((IY / (BB - XB) || 0.00)).toFixed(2);
var WY = parseFloat(form13.wy.value);

//WT = FITA * (ESPES ^ 2) / 3
form14.wt.value =  ((FITA * Math.pow(ESPES,2) / 3) || 0.00).toFixed(2);
var WT = parseFloat(form14.wt.value);

//IX1 = (IX / AREA1) ^ 0.5
var ix01 = IX / AREA01;
var ix02 = Math.pow(ix01,0.5);
form16.ixis.value = (ix02).toFixed(2);
var IX1 = parseFloat(form16.ixis.value).toFixed(2);

//IY1 = (IY / AREA1) ^ 0.5
form17.iy.value = Math.pow(IY*1 / AREA01*1,0.5).toFixed(2);
var IY1 = parseFloat(form17.iy.value);

//EME = BB * ESPES / (12 * IX) * (3 * BB * AB ^ 2)
form04.dtam_m.value = (BB * ESPES / (12 * IX) * (3 * BB * Math.pow(AB,2) || 0.00)).toFixed(2);
var EME = parseFloat(form04.dtam_m.value);

///x0 = -(XB + EME)
form05.dtam_X.value =(-(XB*1 + EME*1 || 0.00)).toFixed(2);
var x0 = parseFloat(form05.dtam_X.value);

//DIST = -x0
form05.dtam_distancia.value = (-x0).toFixed(2);
var DIST = parseFloat(form05.dtam_distancia.value);

//IP = CDbl(Mid(IX, 1, Len(Str(IX)) - 4)) + CDbl(Mid(IY, 1, Len(Str(IY)) - 7)) + AREA1 * (CDbl(Mid(EME, 1, Len(Str(EME)) - 10)) + CDbl(Mid(XB, 1, Len(Str(XB)) - 10))) ^ 2


//J1 = ESPES ^ 3 / 3 * FITA
form12.j.value = (Math.pow(ESPES,3) / 3 * FITA || 0.00).toFixed(2);
var J1 = parseFloat(form12.j.value);

//Cw = (ESPES * AB ^ 2 * BB ^ 3) / 12 * ((3 * BB + 2 * AB) / (6 * BB + AB))
form16.cw.value = (ESPES * Math.pow(AB,2) * Math.pow(BB,3)) / 12 * ((3 * BB + 2 * AB) / (6 * BB + AB) || 0.00);
var Cw = parseFloat(form16.cw.value);

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