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
    id('dtam_A').value = id('etam_A').value;
    id('dtam_B').value = id('etam_B').value;
    id('dtam_C').value = id('etam_C').value;
    id('dtam_D').value = id('etam_D').value;
    id('dtam_E').value = id('etam_E').value;
    id('espessura_d').value = id('espessura_e').value;
var a = parseFloat(0.0417);
var b = parseFloat(0.637);
var c = parseFloat(0.149);
var i = parseFloat(0.001);
var j = parseFloat(7.85);
var l = parseFloat(0.363);
var p = parseFloat(0.0833);
var r = parseFloat(0.356);
var s = parseFloat(0.001);
var t = parseFloat(7.85);
//RDB2 = RDB1 * ESPES
var ESPES = parseFloat(id('espessura_d').value);
var RDB1 = parseFloat(id('raioe').value);
id('raiod').value = RDB1 * ESPES
var RDB2 = parseFloat(id('raiod').value); 

//RN = RDB2 + ESPES / 2
id('raio_neutro').value = id('raiod').value*1 + (id('espessura_d').value / 2);
var RN = parseFloat(id('raio_neutro').value);

//ALTDB = RDB2 + ESPES
id('alturadobra').value = (id('raiod').value*1 + id('espessura_d').value*1);
var ALTDB = parseFloat(id('alturadobra').value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
form10.ud.value = (id('raio_neutro').value * 10 * 1.57) / 10;
var U = parseFloat(id('ud').value);

//A2 = A1 - (2 * RN + ESPES)
var A1 = parseFloat(id('dtam_A').value);
id('dtam_a').value = id('dtam_A').value*1 - (2 * id('raio_neutro').value + id('espessura_d').value*1);
var A2 = parseFloat(id('dtam_a').value);

//B2 = B1 - (RN + ESPES / 2)
var B1 = parseFloat(id('dtam_B').value);
id('dtam_b').value = id('dtam_B').value*1 - (id('raio_neutro').value*1 + id('espessura_d').value / 2);
var B2 = parseFloat(form09.dtam_b.value); 

//AB = A1 - ESPES
id('dtam_a1').value = id('dtam_A').value - id('espessura_d').value;
var AB = parseFloat(id('dtam_a1').value); 


//BB = B1 - (ESPES / 2)
id('dtam_bbarra').value = id('dtam_B').value*1 - (id('espessura_d').value / 2);
var BB = parseFloat(id('dtam_bbarra').value);

//a3 = A1 - (2 * ESPES + 1)
a3 = id('dtam_A').value*1 - (2 * id('espessura_d').value + 1);

//b3 = B1 - (ESPES + 5)
b3 = id('dtam_B').value - (id('espessura_d').value*1 + 5*1);

//a4 = A2 - 2 * ESPES - 1
a4 = id('dtam_a').value*1 - 2 * id('espessura_d').value - 1;

//B4 = B2 - ESPES - 5
B4 = id('dtam_b').value - id('espessura_d').value - 5;


//AB1 = a3 - ESPES
AB1 = a3 - id('espessura_d').value;


//BB1 = b3 - (ESPES / 2)
BB1 = b3 - (id('espessura_d').value / 2);


//CGY = A1 / 2
id('cgy').value = A1 / 2;

var CGY = parseFloat(id('cgy').value);
//IX = 2 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + RN) ^ 2 + U * (A2 / 2 + 0.637 * RN) ^ 2 + 0.149 * RN ^ 3)
var IX = id('ixx').value;
var ixx1 = Math.pow(id('dtam_a').value,3);
var ixx2 = id('dtam_a').value / 2 + id('raio_neutro').value*1;
var ixx3 = Math.pow(ixx2,2);
var ixx4 = id('dtam_a').value / 2 + b * id('raio_neutro').value;
var ixx5 = Math.pow(ixx4,2);
var ixx6 = Math.pow(id('raio_neutro').value,3);
var ixx7 = a * ixx1;
var ixx8 = id('dtam_b').value * ixx3;
var ixx9 = id('ud').value * ixx5;
var ixx10 = c * ixx6;
var ixx11 = ixx7 + ixx8;
var ixx12 = ixx9 + c * ixx6;
var ixx13 = ixx11 + ixx12;
IX1 = (2 * id('espessura_d').value*1 * ixx13*1).toFixed(2);
//IX2 = 2 * ESPES * (0.0417 * a4 ^ 3 + B4 * (a4 / 2 + RN) ^ 2 + U * (a4 / 2 + 0.637 * RN) ^ 2 + 0.149 * RN ^ 3)
var ix1 = Math.pow(a4,3);
var ix2 = a4 / 2 + id('raio_neutro').value*1;
var ix3 = Math.pow(ix2,2);
var ix4 = a4 / 2 + b * id('raio_neutro').value;
var ix5 = Math.pow(ix4,2);
var ix6 = Math.pow(id('raio_neutro').value,3);
var ix7 = a * ix1;
var ix8 = B4 * ix3;
var ix9 = id('ud').value * ix5;
var ix10 = c * ix6;
var ix11 = ix7 + ix8;
var ix12 = ix11 + ix9 + ix10;
IX2 = (2 * id('espessura_d').value * ix12).toFixed(2);
//EME = BB * ESPES / (12 * IX) * (3 * BB * AB ^ 2)
EME =  id('dtam_bbarra').value * id('espessura_d').value / (12 * IX1) * (3 * id('dtam_bbarra').value * Math.pow(id('dtam_a1').value,2));

//EME1 = BB1 * ESPES / (12 * IX2) * (3 * BB1 * AB1 ^ 2)
EME1 = BB1 * id('espessura_d').value / (12 * IX2) * (3 * BB1 * Math.pow(AB1,2));
//DIST = EME - EME1
id('dtam_distancia').value = (EME - EME1).toFixed(2);
var DIST = parseFloat(id('dtam_distancia').value);

//FITA = 2 * B2 + A2 + 2 * U
var fita01 = 2 * id('dtam_b').value;
var fita02 = 2 * id('ud').value;
id('largura_da').value = fita01*1 + id('dtam_a').value*1 + fita02*1;
var FITA = parseFloat(id('largura_da').value);

//FITA2 = 2 * B4 + a4 + 2 * U
var fita02_1 = 2 * B4;
var fita02_2 = 2 * form10.ud.value;
FITA2 = fita02_1 + a4 + fita02_2;
//AREA1 = FITA * ESPES
AREA01 = form10.largura_da.value * form06.espessura_d.value;
var AREA1 = form19.area_total.value;
//AREA2 = FITA2 * ESPES
var AREAU = form20.area_util.value;
AREA02 = FITA2 * form06.espessura_d.value;
//XB = 2 * ESPES / AREA1 * (B2 * (B2 / 2 + RN) + U * 0.363 * RN)
XB = 2 * parseFloat(form06.espessura_d.value) / parseFloat(AREA01) * (parseFloat(form09.dtam_b.value) * (parseFloat(form09.dtam_b.value) / 2 + parseFloat(form08.raio_neutro.value)) + parseFloat(form10.ud.value) * parseFloat(l) * parseFloat(form08.raio_neutro.value));
//XB1 = 2 * ESPES / AREA2 * (B4 * (B4 / 2 + RN) + U * 0.363 * RN)
XB1 = 2 * parseFloat(form06.espessura_d.value) / AREA02 * (B4 * (B4 / 2 + parseFloat(form08.raio_neutro.value)) + parseFloat(form10.ud.value) * parseFloat(l) * parseFloat(form08.raio_neutro.value));
//CGX1 = XB + ESPES / 2
CGX1 = (XB*1 + form06.espessura_d.value / 2).toFixed(2);
//CGX2 = XB1 + ESPES / 2
CGX2 = (XB1*1 + form06.espessura_d.value / 2).toFixed(2);
//CGX = (CGX1 * AREA1 + AREA2 * (B1 - CGX2)) / (AREA1 + AREA2)
var cgx1 = form05.dtam_B.value - CGX2;
var cgx2 = AREA01 + AREA02;
var cgx3 = CGX1 * AREA01;
var cgx4 = AREA02 * cgx1;
var cgx5 = cgx3 + cgx4;
form14.cgx.value = (cgx5 / cgx2).toFixed(2);
var CGX = form14.cgx.value;
//IY = 2 * ESPES * B2 ^ 3 / 12 + A2 * ESPES ^ 3 / 12 + 2 * 0.149 * RN * ESPES + 2 * ESPES * B2 * (ALTDB + B2 / 2 - CGX) ^ 2 + 2 * U * ESPES * (CGX - (ESPES / 2 + RN - 0.637 * RN)) ^ 2 + A2 * ESPES * (CGX - ESPES / 2) ^ 2
IY1 = 2 * ESPES * Math.pow(B2,3) / 12 + A2 * Math.pow(ESPES,3) / 12 + 2 * c * RN * ESPES + 2 * ESPES * B2 * Math.pow(ALTDB + B2 / 2 - CGX,2) + 2 * U * ESPES * Math.pow(CGX - (ESPES / 2 + RN - b * RN),2) + A2 * ESPES * Math.pow(CGX - ESPES / 2,2);
//IY2 = 2 * ESPES * B4 ^ 3 / 12 + a4 * ESPES ^ 3 / 12 + 2 * 0.149 * RN * ESPES + 2 * ESPES * B4 * (ALTDB + B4 / 2 - (B1 - CGX)) * (ALTDB + B4 / 2  - (B1 - CGX)) + 2 * U * ESPES * ((B1 - CGX) - (ESPES / 2 + RN - 0.637 * RN)) * ((B1 - CGX) - (ESPES / 2 + RN - 0.637 * RN)) + a4 * ESPES * ((B1 - CGX) - ESPES / 2) ^ 2
IY2 = 2 * ESPES * Math.pow(B4,3) / 12 + a4 * Math.pow(ESPES,3) / 12 + 2 * c * RN * ESPES + 2 * ESPES * B4 * (ALTDB + B4 / 2 - (B1 - CGX)) * (ALTDB + B4 / 2  - (B1 - CGX)) + 2 * U * ESPES * ((B1 - CGX) - (ESPES / 2 + RN - b * RN)) * ((B1 - CGX) - (ESPES / 2 + RN - b * RN)) + a4 * ESPES * Math.pow((B1 - CGX) - ESPES / 2,2);
//XG1 = CGX - CGX1
XG1 = form14.cgx.value - CGX1;
//XG2 = (B1 - CGX) - CGX2
XG2 = (form05.dtam_B.value - form14.cgx.value) - CGX2;
//Cw01 = (ESPES * AB ^ 2 * BB ^ 3) / 12 * ((3 * BB + 2 * AB) / (6 * BB + AB))
Cw01 = (parseFloat(ESPES) * Math.pow(form05.dtam_a1.value,2) * Math.pow(form06.dtam_bbarra.value,3)) / 12 * ((3 * parseFloat(form06.dtam_bbarra.value) + 2 * parseFloat(form05.dtam_a1.value)) / (6 * parseFloat(form06.dtam_bbarra.value) + parseFloat(form05.dtam_a1.value)));
//Cw02 = (ESPES * AB1 ^ 2 * BB1 ^ 3) / 12 * ((3 * BB1 + 2 * AB1) / (6 * BB1 + AB1))
Cw02 = Cw02 = (parseFloat(ESPES) * Math.pow(AB1,2) * Math.pow(BB1,3)) / 12 * ((3 * BB1 + 2 * AB1) / (6 * BB1 + AB1));
//Cw = Cw - CW1
form16.cw.value = (Cw01 - Cw02).toFixed(2);
//IX = IX + IX2
form12.ixx.value = IX1*1 + IX2*1;
var IX = parseFloat(form12.ixx.value);
//WX = IX / CGY
form18.wx.value = form12.ixx.value / form15.cgy.value;
//IY = IY + IY2
form13.iyy.value = (IY1*1 + IY2*1).toFixed(2);
var IY = parseFloat(form13.iyy.value);
//WY = IY / CGX
form13.wy.value = (form13.iyy.value / form14.cgx.value).toFixed(2);
//WT = 2 * (A1 - ESPES) * (B1 - ESPES) * ESPES
form14.wt.value =  2 * (parseFloat(A1) - parseFloat(ESPES)) * (parseFloat(B1) - parseFloat(ESPES)) * parseFloat(ESPES);
//AREA1 = AREA1 + AREA2
form19.area_total.value = AREA01 + AREA02;
//AREAU = AREA1
id('area_util').value = id('area_total').value;
//EME = 0
EME = 0.00;
//XB = 0
XB = 0.00;
//IP = IX + IY + DIST ^ 2 * AREA1
form16.ip.value =  IX + IY + Math.pow(DIST,2) * AREA01;
var IP = form16.ip.value;
//KGM = AREA1 * 0.001 * 7.85
form04.d_Peso.value = (form19.area_total.value * s * t).toFixed(2);
var KGM = form04.d_Peso.value;
//IX1 = (IX / AREA1) ^ 0.5
form16.ixis.value = Math.pow(IX / form19.area_total.value,0.5).toFixed(2);
//IY1 = (IY / AREA1) ^ 0.5
form17.iy.value = Math.pow(IY / form19.area_total.value,0.5).toFixed(2);
//J1 = (2 * (A1 - ESPES) ^ 2 * (B1 - ESPES) ^ 2) / ((B1 - ESPES) / ESPES + (A1 - ESPES) / ESPES)
var j1 = Math.pow(A1 - ESPES,2);
var j2 = Math.pow(B1 - ESPES,2);
var j3 = 2 * j1 * j2;
var j4 = B1 - ESPES;
var j5 = (A1 - ESPES);
var j6 = j4 / ESPES;
var j7 = j5 / ESPES;
var j8 = j6 + j7;
form12.j.value = (j3 / j8).toFixed(2);
  
    
    id('area_util').value = id('area_total').value;
    var re_raiod = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_raiod.test(raiod.value)) {
      raiod.value = raiod.value.replace(re_raiod, "$1$2.00");
    }
    var re_raio_neutro = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_raio_neutro.test(raio_neutro.value)) {
      raio_neutro.value = raio_neutro.value.replace(re_raio_neutro, "$1$2.00");
    }
    var re_alturadobra = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_alturadobra.test(alturadobra.value)) {
      alturadobra.value = alturadobra.value.replace(re_alturadobra, "$1$2.00");
    }
    var re_ud = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_ud.test(ud.value)) {
      ud.value = ud.value.replace(re_ud, "$1$2.00");
    }
    var re_dtam_a = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_a.test(dtam_a.value)) {
      dtam_a.value = dtam_a.value.replace(re_dtam_a, "$1$2.00");
    }
    var re_dtam_b = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_b.test(dtam_b.value)) {
      dtam_b.value = dtam_b.value.replace(re_dtam_b, "$1$2.00");
    }
    var re_dtam_c = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_c.test(dtam_c.value)) {
      dtam_c.value = dtam_c.value.replace(re_dtam_c, "$1$2.00");
    }
    var re_dtam_a1 = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_a1.test(dtam_a1.value)) {
      dtam_a1.value = dtam_a1.value.replace(re_dtam_a1, "$1$2.00");
    }
    var re_dtam_bbarra = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_bbarra.test(dtam_bbarra.value)) {
      dtam_bbarra.value = dtam_bbarra.value.replace(re_dtam_bbarra, "$1$2.00");
    }
    var re_cgx = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_cgx.test(cgx.value)) {
      cgx.value = cgx.value.replace(re_cgx, "$1$20.00");
    }
    var re_cgy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_cgy.test(cgy.value)) {
      cgy.value = cgy.value.replace(re_cgy, "$1$2.00");
    }
    var re_raioe = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_raioe.test(raioe.value)) {
      raioe.value = raioe.value.replace(re_raioe, "$1$20.00");
    }
    var re_area_total = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_area_total.test(area_total.value)) {
      area_total.value = area_total.value.replace(re_area_total, "$1$20.00");
    }
    var re_area_util = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_area_util.test(area_util.value)) {
      area_util.value = area_util.value.replace(re_area_util, "$1$20.00");
    }
    var re_ip = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_ip.test(ip.value)) {
      ip.value = ip.value.replace(re_ip, "$1$20.00");
    }
    var re_dtam_D = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_D.test(dtam_D.value)) {
      dtam_D.value = dtam_D.value.replace(re_dtam_D, "$1$20.00");
    }
    var re_largura_da = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_largura_da.test(largura_da.value)) {
      largura_da.value = largura_da.value.replace(re_largura_da, "$1$20.00");
    }
    var re_lxy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_lxy.test(ip.value)) {
      lxy.value = lxy.value.replace(re_lxy, "$1$20.00");
    }
    var re_dtam_E = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_E.test(dtam_E.value)) {
      dtam_E.value = dtam_E.value.replace(re_dtam_E, "$1$20.00");
    }
    var re_dtam_d = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_d.test(dtam_d.value)) {
      dtam_d.value = dtam_d.value.replace(re_dtam_d, "$1$20.00");
    }
    var re_dtam_e = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_e.test(dtam_e.value)) {
      dtam_e.value = dtam_e.value.replace(re_dtam_e, "$1$20.00");
    }
    var re_dtam_dd = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_dd.test(dtam_dd.value)) {
      dtam_dd.value = dtam_dd.value.replace(re_dtam_dd, "$1$20.00");
    }
    var re_dtam_ee = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_ee.test(dtam_ee.value)) {
      dtam_ee.value = dtam_ee.value.replace(re_dtam_ee, "$1$20.00");
    }
    var re_u2 = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_u2.test(u2.value)) {
      u2.value = u2.value.replace(re_u2, "$1$20.00");
    }
    var re_dtam_u3 = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_u3.test(dtam_u3.value)) {
      dtam_u3.value = dtam_u3.value.replace(re_dtam_u3, "$1$20.00");
    }
    var re_dtam_m = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_m.test(dtam_m.value)) {
      dtam_m.value = dtam_m.value.replace(re_dtam_m, "$1$20.00");
    }
    var re_dtam_X = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_X.test(dtam_X.value)) {
      dtam_X.value = dtam_X.value.replace(re_dtam_X, "$1$20.00");
    }
    var re_dtam_Y = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_Y.test(dtam_Y.value)) {
      dtam_Y.value = dtam_Y.value.replace(re_dtam_Y, "$1$20.00");
    }
    var re_dtam_xx = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_xx.test(dtam_xx.value)) {
      dtam_xx.value = dtam_xx.value.replace(re_dtam_xx, "$1$20.00");
    }
    var re_dtam_z = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_z.test(dtam_z.value)) {
      dtam_z.value = dtam_z.value.replace(re_dtam_z, "$1$20.00");
    }
    var re_dtam_distancia = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_distancia.test(dtam_distancia.value)) {
      dtam_distancia.value = dtam_distancia.value.replace(re_dtam_distancia, "$1$20.00");
    }
    var re_dtam_y = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_y.test(dtam_y.value)) {
      dtam_y.value = dtam_y.value.replace(re_dtam_y, "$1$20.00");
    }
    var re_wz = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_wz.test(wz.value)) {
      wz.value = wz.value.replace(re_wz, "$1$20.00");
    }
    var re_wy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_wy.test(wy.value)) {
      wy.value = wy.value.replace(re_wy, "$1$20.00");
    }
    var re_bbb = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_bbb.test(bbb.value)) {
      bbb.value = bbb.value.replace(re_bbb, "$1$20.00");
    }
    var re_ixx = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_ixx.test(ixx.value)) {
      ixx.value = ixx.value.replace(re_ixx, "$1$20.00");
    }
    var re_lz1 = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_lz1.test(lz1.value)) {
      lz1.value = lz1.value.replace(re_lz1, "$1$20.00");
    }
    var re_lv = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_lv.test(lv.value)) {
      lv.value = lv.value.replace(re_lv, "$1$20.00");
    }
    var re_lxy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_lxy.test(lxy.value)) {
      lxy.value = lxy.value.replace(re_lxy, "$1$20.00");
    }
    var re_wv = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_wv.test(wv.value)) {
      wv.value = wv.value.replace(re_wv, "$1$20.00");
    }
    var re_iz = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_iz.test(iz.value)) {
      iz.value = iz.value.replace(re_iz, "$1$20.00");
    }
    var re_iv = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_iv.test(iv.value)) {
      iv.value = iv.value.replace(re_iv, "$1$20.00");
    }
    var re_zer0 = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_zer0.test(zer0.value)) {
      zer0.value = zer0.value.replace(re_zer0, "$1$20.00");
    }
    var re_dtam_C = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_C.test(dtam_C.value)) {
      dtam_C.value = dtam_C.value.replace(re_dtam_C, "$1$20.00");
    }
    var re_iii = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_iii.test(iii.value)) {
      iii.value = iii.value.replace(re_iii, "$1$20.00");
    }
    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }
  }