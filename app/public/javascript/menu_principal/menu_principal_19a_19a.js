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
    var form01 = document.getElementById("form01");
    var etam_D = form01.etam_D;
    var re_etam_D = /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_D.test(etam_D.value)) {
    etam_D.value = etam_D.value.replace(re_etam_D, "$1$20,00");
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
    var str = document.getElementById("etam_D").value;
    var res = str.replace(",", ".");
    document.getElementById("etam_D").value = res;


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
var l = parseFloat(0.5);
var m = parseFloat(0.285);
var n = parseFloat(0.356);
var o = parseFloat(1.363);


//RDB2 = RDB1 * ESPES
var ESPES = parseFloat(id('espessura_d').value);
var RDB1 = parseFloat(form03.raioe.value);
form07.raiod.value = (RDB1 * ESPES).toFixed(2) || 0.00;
var RDB2 = parseFloat(form07.raiod.value);

//RN = RDB2 + ESPES / 2
form08.raio_neutro.value = (RDB2 + ESPES / 2).toFixed(2) || 0.00;
var RN = parseFloat(form08.raio_neutro.value);

//ALTDB = RDB2 + ESPES
form09.alturadobra.value = (RDB2 + ESPES).toFixed(2) || 0.00;
var ALTDB = parseFloat(form09.alturadobra.value);

//U = RN * 1.57
var U1 = parseFloat(1.57);
form10.ud.value = ((form08.raio_neutro.value * 10 * 1.57) / 10).toFixed(2) || 0.00;
var U = parseFloat(form10.ud.value);

//A2 = A1 - (2 * RN + ESPES)
var A1 = parseFloat(form04.dtam_A.value);
form09.dtam_a.value = A1 - (2 * RN + ESPES);
var A2 = form09.dtam_a.value;

//B2 = B1 - 2 * ALTDB
var B1 = parseFloat(form05.dtam_B.value);
form09.dtam_b.value = B1 - 2 * ALTDB;
var B2 = parseFloat(form09.dtam_b.value);

//C2 = C1 - RN - ESPES / 2
var C1 = form03.etam_C.value
form10.dtam_c.value = C1 - RN - ESPES / 2;
var C2 = parseFloat(form10.dtam_c.value);

//AB = A1 - ESPES
form05.dtam_a1.value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseFloat(form05.dtam_a1.value);

//BB = B1 - ESPES
form06.dtam_bbarra.value = (B1 - ESPES).toFixed(2) || 0.00;
var BB = parseFloat(form06.dtam_bbarra.value);

//CB = C1 - ESPES / 2
form07.dtam_ccc.value = C1 - ESPES / 2;
var CB = parseFloat(form07.dtam_ccc.value);

//FITA = 2 * C2 + 2 * B2 + A2 + 4 * U
form10.largura_da.value = 2 * C2*1 + 2 * B2*1 + A2*1 + 4 * U*1;
var FITA = parseFloat(form10.largura_da.value);

//AREA1 = FITA * ESPES
form19.area_total.value = (FITA*1 * ESPES*1);
var AREA01 = parseFloat(form19.area_total.value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//KGM = AREA1 * 0.001 * 7.85
form04.d_Peso.value = (AREA01 * 0.001 * 7.85).toFixed(2) || 0.00;
var KGM = parseFloat(form04.d_Peso.value);

//IX = 2 * ESPES * (0.0417 * A2 ^ 3 + B2 * (A2 / 2 + RN) ^ 2 + U * (A2 / 2 + 0.637 * RN) ^ 2 + 2 * 0.149 * RN ^ 3 + 0.0833 * C2 ^ 3 + C2 / 4 * (A2 + C2 + 4 * RN) ^ 2 + U * (A2 / 2 + 1.363 * RN) ^ 2)
var ix1 = Math.pow(A2,3);
var ix2 = A2 / 2 + RN;
var ix3 = Math.pow(ix2,2);
var ix4 = A2 / 2 + e * RN*1;
var ix5 = Math.pow(ix4,2);
var ix6 = Math.pow(RN,3);
var ix7 = Math.pow(C2,3);
var ix8 = A2*1 + C2*1 + 4 * RN;
var ix9 = Math.pow(ix8,2);
var ix10 = A2 / 2 + o * RN;
var ix11 = Math.pow(ix10,2);
var ix12 = h * ix1;
var ix13 = B2 * ix3;
var ix14 = U * ix5; 
var ix15 = 2 * b * ix6;
var ix16 = p * ix7;
var ix17 = C2 / 4 * ix9;
var ix18 = U * ix11;
var ix19 = ix12 + ix13 + ix14 + ix15 + ix16 + ix17 + ix18;

form12.ixx.value = 2 * ESPES * ix19;
var IX = parseFloat(form12.ixx.value);

//EME = BB * ESPES / (12 * IX) * (6 * CB * AB ^ 2 + 3 * BB * AB ^ 2 - 8 * CB ^ 3)
form04.dtam_m.value = (BB * ESPES / (12 * IX) * (6 * CB * Math.pow(AB,2) + 3 * BB * Math.pow(AB,2) - 8 * Math.pow(CB,3))).toFixed(2);
var EME = parseFloat(form04.dtam_m.value);


//J1 = ESPES ^ 3 / 3 * FITA
form12.j.value = Math.pow(ESPES,3) / 3 * FITA;
var J1 = parseFloat(form12.j.value);

//WT = J1 / ESPES
form14.wt.value =  (J1 / ESPES).toFixed(2) || 0.00;
var WT = parseFloat(form14.wt.value);

//XB = 2 * ESPES / AREA1 * (B2 * (B2 / 2 + RN) + U * 0.363 * RN + U * (B2 + 1.637 * RN) + C2 * (B2 + 2 * RN))
form07.dtam_xx.value = (2 * ESPES / AREA01 * (B2 * (B2 / 2 + RN) + U * o * RN + U * (B2 + z * RN) + C2 * (B2 + 2 * RN))).toFixed(2);
var XB = parseFloat(form07.dtam_xx.value);

//IY = 2 * ESPES * (B2 * (B2 / 2 + RN) ^ 2 + 0.0833 * B2 ^ 3 + 0.356 * RN ^ 3 + C2 * (B2 + 2 * RN) ^ 2 + U * (B2 + 1.637 * RN) ^ 2 + 0.149 * RN ^ 3) - AREA1 * XB ^ 2
form13.iyy.value = 2 * ESPES * (B2 * Math.pow(B2 / 2 + RN,2) + p * Math.pow(B2,3) + n * Math.pow(RN,3) + C2 * Math.pow(B2 + 2 * RN,2) + U * Math.pow(B2 + z * RN,2) + c * Math.pow(RN,3)) - AREA01 * Math.pow(XB,2);
var IY = parseFloat(form13.iyy.value);

//x0 = -(XB + EME)
form05.dtam_X.value = -(XB*1 + EME*1);
var x0 = parseFloat(form05.dtam_X.value);

//IP = IX + IY
form16.ip.value = IX*1 + IY*1;
var IP = parseFloat(form16.ip.value);

//WX = 2 * IX / (AB + 2 * CB)
form18.wx.value = 2 * IX / (AB + 2 * CB);
var WX = parseFloat(form18.wx.value);

//WY = IY / (B1 - XB - ESPES / 2)
form13.wy.value =  IY / (B1 - XB - ESPES / 2);
var WY = parseFloat(form13.wy.value);

//DIST = -x0
form05.dtam_distancia.value = -x0;
var DIST = parseFloat(form05.dtam_distancia.value);

//IX1 = (IX / AREA1) ^ 0.5
form16.ixis.value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = parseFloat(form16.ixis.value);

//IY1 = (IY / AREA1) ^ 0.5
form17.iy.value = Math.pow(IY / AREA01,0.5).toFixed(2) || 0.00;
var IY1 = parseFloat(form17.iy.value);

//CGX = XB + ESPES / 2
form14.cgx.value = XB + ESPES / 2;
var CGX = parseFloat(form14.cgx.value);

//CGY = AB / 2 + CB
form15.cgy.value = AB / 2 + CB;
var CGY = parseFloat(form15.cgy.value);

//Cw = AB ^ 2 / 4 * (IY + XB ^ 2 * AREA1 * (1 - AB ^ 2 * AREA1 / (4 * IX))) + (2 * BB ^ 2 * CB ^ 3 / 3 - AB * BB ^ 2 * CB ^ 2 * ESPES + AB ^ 2 * BB * ESPES * CB ^ 3 * XB * AREA1 / (3 * IX) - 4 * BB ^ 2 * ESPES ^ 2 * CB ^ 6 / (9 * IX))
var cw1 = Math.pow(AB,2); 
var cw2 = Math.pow(XB,2);
var cw3 = Math.pow(BB,2);
var cw4 = Math.pow(CB,3);
var cw5 = Math.pow(CB,2);
var cw6 = Math.pow(ESPES,2);
var cw7 = Math.pow(CB,6);
var cw8 = 4*1 * IX*1;
var cw9 = cw1*1 * AREA01 / cw8;
var cw10 = 2*1 * cw3*1 * cw4 / 3;
var cw11 = AB*1 * cw3*1 * cw5*1 * ESPES*1;
var cw12 = 3*1 * IX*1;
var cw13 = 9*1 * IX*1;
var cw14 = 1*1 - cw9*1;
var cw15 = cw2*1 * AREA01*1 * cw14*1;
var cw16 = cw1*1 * BB*1 * ESPES*1 * cw4*1 * XB*1 * AREA01 / cw12;
var cw17 = IY*1 + cw15*1;
var cw18 = 4*1 * cw3*1 * cw6*1 * cw7*1 / cw13*1;
var cw19 = cw10*1 - cw11*1 + cw16*1 - cw18*1;
var cw20 = cw1 / 4 * cw17*1;

form16.cw.value = cw20*1 + cw19*1;
var Cw = parseFloat(form16.cw.value);

//BETAW = -(0.0833 * (ESPES * XB * AB ^ 3) + ESPES * XB ^ 3 * AB)
BETAW = -(p * (ESPES * XB * Math.pow(AB,3)) + ESPES * Math.pow(XB,3) * AB);

//BETAF = ESPES / 2 * ((BB - XB) ^ 4 - XB ^ 4) + ESPES * AB ^ 2 / 4 * ((BB - XB) ^ 2 - XB ^ 2)
BETAF = ESPES / 2 * (Math.pow(BB - XB,4) - Math.pow(XB,4)) + ESPES * Math.pow(AB,2) / 4 * (Math.pow(BB - XB,2) - Math.pow(XB,2));

//BETAL = 2 * CB * ESPES * (BB - XB) ^ 3 + 2 / 3 * ESPES * (BB - XB) * ((AB / 2 + CB) ^ 3 - (AB / 2) ^ 3)
BETAL = 2 * CB * ESPES * Math.pow(BB - XB,3) + 2 / 3 * ESPES * (BB - XB) * (Math.pow(AB / 2 + CB,3) - Math.pow(AB / 2,3));

//J2 = 1 / (2 * IY) * (BETAW + BETAF + BETAL) - x0
form13.iii.value = 1 / (2 * IY) * (BETAW + BETAF + BETAL) - x0;


    //AREAU = AREA1
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
    var re_dtam_ccc = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_ccc.test(dtam_ccc.value)) {
      dtam_ccc.value = dtam_ccc.value.replace(re_dtam_ccc, "$1$2.00");
    }
    
    


    



    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }



  }
