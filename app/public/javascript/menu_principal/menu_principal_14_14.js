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
    var etam_C = form03.etam_C;
    var re_etam_C = /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_C.test(etam_C.value)) {
    etam_C.value = etam_C.value.replace(re_etam_C, "$1$2,00");

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
id('dtam_C').value = id('etam_C').value || 0.00;
id('dtam_D').value = id('etam_D').value || 0.00;
id('dtam_E').value = id('etam_E').value || 0.00;
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
var i = parseFloat(1.5);

//RDB2 = RDB1 * ESPES
var ESPES = parseInt(form06.espessura_d.value);
var RDB1 = parseInt(form03.raioe.value);
form07.raiod.value = (RDB1 * ESPES).toFixed(2) || 0.00;
var RDB2 = parseInt(form07.raiod.value);

//RN = RDB2 + ESPES / 2
form08.raio_neutro.value = (RDB2 + ESPES / 2).toFixed(2) || 0.00;
var RN = parseInt(form08.raio_neutro.value);

//ALTDB = RDB2 + ESPES
form09.alturadobra.value = (RDB2 + ESPES).toFixed(2) || 0.00;
var ALTDB = parseInt(form09.alturadobra.value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
form10.ud.value = ((form08.raio_neutro.value * 10 * 1.57) / 10).toFixed(2) || 0.00;
var U = parseFloat(form10.ud.value);

//A2 = A1 - 2 * ALTDB
var A1 = parseInt(form04.dtam_A.value);
form09.dtam_a.value = (A1 - 2 * ALTDB).toFixed(2) || 0.00;
var A2 = parseInt(form09.dtam_a.value);

//B2 = B1 - ALTDB
var B1 = parseInt(form05.dtam_B.value);
form09.dtam_b.value = (B1 - ALTDB).toFixed(2) || 0.00;
var B2 = parseInt(form09.dtam_b.value);

//AB = A1 - ESPES
form05.dtam_a1.value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseInt(form05.dtam_a1.value);

//BB = B1 - ESPES / 2
form06.dtam_bbarra.value = (B1 - ESPES / 2).toFixed(2) || 0.00;
var BB = parseInt(form06.dtam_bbarra.value);

//FITA = 2 * B2 + 2 * A2 + 3 * U
form10.largura_da.value = (2 * B2 + 2 * A2 + 3 * U).toFixed(2) || 0.00;
var FITA = parseFloat(form10.largura_da.value);

//AREA1 = FITA * ESPES
form19.area_total.value = (FITA * ESPES).toFixed(2) || 0.00;
var AREA01 = parseFloat(form19.area_total.value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;


//XB = (B2 * ESPES * AB + U * ESPES * (AB - RN + 0.637 * RN) + A2 * ESPES * (RN + A2 / 2) + 2 * U * ESPES * (RN - 0.637 * RN) + B2 * ESPES * (RN + B2 / 2)) / AREA1
form07.dtam_xx.value = ((B2 * ESPES * AB + U * ESPES * (AB - RN + e * RN) + A2 * ESPES * (RN + A2 / 2) + 2 * U * ESPES * (RN - e * RN) + B2 * ESPES * (RN + B2 / 2)) / AREA01).toFixed(2) || 0.00;
var XB = parseFloat(form07.dtam_xx.value);

//YB = XB
form09.dtam_y.value = XB;
var YB = parseInt(form09.dtam_y.value);

//CGX = XB + ESPES / 2
form14.cgx.value = (XB + ESPES / 2).toFixed(2) || 0.00;
var CGX = parseFloat(form14.cgx.value);

//CGY = CGX
form15.cgy.value = CGX;
var CGY = parseInt(form15.cgy.value);

//IX = B2 ^ 3 * ESPES / 12 + 3 * 0.149 * RN * ESPES + A2 * ESPES ^ 3 / 12 + ESPES * A2 ^ 3 / 12 + B2 * ESPES ^ 3 / 12 + B2 * ESPES * (YB - B2 / 2 - RN) ^ 2 + 2 * U * ESPES * (YB - RN + 0.637  * RN) ^ 2 + A2 * ESPES * YB ^ 2 + A2 * ESPES * (RN + A2 / 2 - YB) ^ 2 + U * ESPES * (AB - RN + 0.637 * RN - YB) ^ 2 + B2 * ESPES * (AB - YB) ^ 2
form12.ixx.value = (Math.pow(B2,3) * ESPES / 12 + 3 * b * RN * ESPES + A2 * Math.pow(ESPES,3) / 12 + ESPES * Math.pow(A2,3) / 12 + B2 * Math.pow(ESPES,3) / 12 + B2 * ESPES * Math.pow(YB - B2 / 2 - RN,2) + 2 * U * ESPES * Math.pow(YB - RN + e  * RN,2) + A2 * ESPES * Math.pow(YB,2) + A2 * ESPES * Math.pow(RN + A2 / 2 - YB,2) + U * ESPES * Math.pow(AB - RN + e * RN - YB,2) + B2 * ESPES * Math.pow(AB - YB,2)).toFixed(2) || 0.00;;
var IX = parseFloat(form12.ixx.value);

//IY = IX
form13.iyy.value = IX;
var IY = parseFloat(form13.iyy.value);

//WX = IX / (AB - XB + ESPES / 2)
form18.wx.value = (IX / (AB - XB + ESPES / 2)).toFixed(2);
var WX = form18.wx.value;

//WY = WX
form13.wy.value = WX;
var WY = form13.wy.value;

//J1 = AREA1 * ESPES ^ 2 / 3
form12.j.value = (AREA01 * Math.pow(ESPES,2) / 3).toFixed(2) || 0.00;
var J1 = form12.j.value;

//WT = J1 / ESPES
form14.wt.value =  (J1 / ESPES).toFixed(2) || 0.00;
var WT = form14.wt.value;

//ixy = B2 * ESPES * (AB - XB) * (-RN - B2 / 2 + YB) + U * ESPES * (YB - RN + 0.637 * RN) * (AB - XB - RN + 0.637 * RN) + A2 * ESPES * (RN + A2 / 2 - XB) * YB - U * ESPES * (XB - RN + 0.637 * RN) * (YB - RN + 0.637 * RN) + A2 * ESPES * (RN + A2 / 2 - YB) * XB + U * ESPES * (AB - YB - RN +  0.637 * RN) * (XB - RN + 0.637 * RN) - B2 * ESPES * (RN + B2 / 2 - XB) * (AB - YB)
form17.lxy.value = (B2 * ESPES * (AB - XB) * (-RN - B2 / 2 + YB) + U * ESPES * (YB - RN + e * RN) * (AB - XB - RN + 0.637 * RN) + A2 * ESPES * (RN + A2 / 2 - XB) * YB - U * ESPES * (XB - RN + e * RN) * (YB - RN + e * RN) + A2 * ESPES * (RN + A2 / 2 - YB) * XB + U * ESPES * (AB - YB - RN +  e * RN) * (XB - RN + e * RN) - B2 * ESPES * (RN + B2 / 2 - XB) * (AB - YB)).toFixed(2) || 0.00;
var ixy = parseFloat(form17.lxy.value);

//IV = IX + ixy
form15.lv.value = (IX*1 + ixy*1).toFixed(2) || 0.00;
var IV = parseFloat(form15.lv.value);

//iz = IX - ixy
form14.lz.value = IX - ixy;
var iz = form14.lz.value;

//IX1 = (IX / AREA1) ^ 0.5
form16.ixis.value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = form16.ixis.value;

//IY1 = IX1
form17.iy.value = IX1;
var IY1 = form17.iy.value;

//iv1 = (IV / AREA1) ^ 0.5
form19.iv.value = (Math.pow(IV / AREA01,0.5)).toFixed(2) || 0.00;;
var iv1 = form19.iv.value;

//iz1 = (iz / AREA1) ^ 0.5
form18.iz.value = (Math.pow(iz / AREA01,0.5)).toFixed(2) || 0.00;
var iz1 = form18.iz.value;

//W1 = (AB - XB) * BB
W1 = (AB - XB) * BB;

//W2 = W1 + YB * AB
W2 = W1 + YB * AB;

//W3 = W2 + AB * XB
W3 = W2 + AB * XB;

//W4 = W3 + BB * (AB - YB)
W4 = W3 + BB * (AB - YB);

//RO1 = AB - XB
RO1 = AB - XB;

//RO3 = -XB
RO3 = -XB;

//RO4 = RN + B2 - XB
RO4 = RN + B2 - XB;

//JWX = (W1 * RO1 * ESPES * BB + (W1 * RO1 + W2 * RO3)  * ESPES * AB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO3 + W4 * RO4) * ESPES * BB) / 3 + (W1 * RO1 * ESPES * BB + (W1 * RO3 + W2 * RO1)  * ESPES * AB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO4 + W4 * RO3) * ESPES * BB) / 6
JWX = ((W1 * RO1 * ESPES * BB + (W1 * RO1 + W2 * RO3)  * ESPES * AB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO3 + W4 * RO4) * ESPES * BB) / 3 + (W1 * RO1 * ESPES * BB + (W1 * RO3 + W2 * RO1)  * ESPES * AB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO4 + W4 * RO3) * ESPES * BB) / 6).toFixed(2) || 0.00;;

//y0 = -JWX / IY
form06.dtam_Y.value = (-JWX / IY).toFixed(2) || 0.00;;
var y0 = form06.dtam_Y.value;

//x0 = y0
form05.dtam_X.value = y0;
var x0 = form05.dtam_X.value;

//DIST = (x0 * x0 + y0 * y0) ^ 0.5
form05.dtam_distancia.value = (Math.pow(x0 * x0 + y0 * y0,0.5)).toFixed(2) || 0.00;;
var DIST = parseFloat(form05.dtam_distancia.value);

//IP = IX + IY + AREA1 * DIST ^ 2
form16.ip.value = (IX + IY + AREA01 * Math.pow(DIST,2)).toFixed(2) || 0.00;;
var IP = form16.ip.value;

//Cw = ESPES ^ 2 * AB ^ 4 * BB ^ 3 / (18 * IV) * (4 * AB + 3 * BB)
var cw1 = Math.pow(ESPES,2);
var cw2 = Math.pow(AB,4);
var cw3 = Math.pow(BB,3);
var cw4 = 18*1 * IV*1;
var cw5 = 4 * AB;
var cw6 = 3 * BB;
var cw7 = cw5 + cw6;
var cw8 = cw1 * cw2 * cw3;
var cw9 = cw8 / cw4;

form16.cw.value = (cw9 * cw7).toFixed(2) || 0.00;;
var Cw = form16.cw.value;

TETA = 45;
form18.zer0.value = 45;
var TETA = form18.zer0.value;

TETA_AUX = 45;

//KGM = AREA1 * 0.001 * 7.85
form04.d_Peso.value = (AREA01 * 0.001 * 7.85).toFixed(2) || 0.00;
var KGM = form04.d_Peso.value;






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
      cgx.value = cgx.value.replace(re_cgx, "$1$2.00");
    }
    var re_cgy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_cgy.test(cgy.value)) {
      cgy.value = cgy.value.replace(re_cgy, "$1$20.00");
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
      dtam_D.value = dtam_D.value.replace(re_dtam_D, "$1$2.00");
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
    var re_lz = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_lz.test(lz.value)) {
      lz.value = lz.value.replace(re_lz, "$1$20.00");
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
      zer0.value = zer0.value.replace(re_zer0, "$1$2.00");
    }
    var re_dtam_C = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_C.test(dtam_C.value)) {
      dtam_C.value = dtam_C.value.replace(re_dtam_C, "$1$20.00");
    }
    var re_iii = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_iii.test(iii.value)) {
      iii.value = iii.value.replace(re_iii, "$1$20.00");
    }
    var re_cw = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_cw.test(cw.value)) {
      cw.value = cw.value.replace(re_cw, "$1$20.00");
    }







    



    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }



  }
