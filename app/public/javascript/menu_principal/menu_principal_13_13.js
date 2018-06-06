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
var e = parseFloat(0.637);
var f = parseFloat(0.001);
var g = parseFloat(7.85);
var h = parseFloat(0.0417);
var i = parseFloat(1.5);
var j = parseFloat(0.3);
var l = parseFloat(0.5);


//RDB2 = RDB1 * ESPES
var ESPES = parseFloat(form06.espessura_d.value);
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

//A2 = A1 - ALTDB
var A1 = parseFloat(form04.dtam_A.value);
form09.dtam_a.value = (A1 - ALTDB).toFixed(2) || 0.00;
var A2 = parseFloat(form09.dtam_a.value);

//B2 = B1 - ALTDB
var B1 = parseFloat(form05.dtam_B.value);
form09.dtam_b.value = (B1 - ALTDB).toFixed(2) || 0.00;
var B2 = parseFloat(form09.dtam_b.value);

//AB = A1 - ESPES / 2
form05.dtam_a1.value = (form04.dtam_A.value - form06.espessura_d.value / 2).toFixed(2) || 0.00;
var AB = parseFloat(form05.dtam_a1.value);

//BB = B1 - ESPES / 2
form06.dtam_bbarra.value = (B1 - ESPES / 2).toFixed(2) || 0.00;
var BB = parseFloat(form06.dtam_bbarra.value);

//FITA = B2 + U + A2
form10.largura_da.value = B2 + U + A2;
var FITA = parseFloat(form10.largura_da.value);

//AREA1 = FITA * ESPES
form19.area_total.value = FITA * ESPES;
var AREA01 = form19.area_total.value;

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//X = (B2 * ESPES * (B2 / 2 + RN) + U * ESPES * (RN - 0.637 * RN)) / AREA1
X = (B2 * ESPES * (B2 / 2 + RN) + U * ESPES * (RN - e * RN)) / AREA01;

//Y = (U * ESPES * (RN - 0.637 * RN) + A2 * ESPES * (RN + A2 / 2)) / AREA1
Y = (U * ESPES * (RN - e * RN) + A2 * ESPES * (RN + A2 / 2)) / AREA01;

//x0 = X - 0.3 * RN
form05.dtam_X.value = X - j * RN;
var x0 = form05.dtam_X.value;

//y0 = Y - 0.3 * RN
form06.dtam_Y.value = Y - j * RN;
var y0 = form06.dtam_Y.value;

//CGX = X + ESPES / 2
form14.cgx.value = X + ESPES / 2 || 0.00;
var CGX = form14.cgx.value;

//CGY = Y + ESPES / 2
form15.cgy.value = (Y + ESPES / 2).toFixed(2) || 0.00;
var CGY = parseFloat(form15.cgy.value);

//DIST = (x0 ^ 2 + y0 ^ 2) ^ 0.5
form05.dtam_distancia.value = Math.pow(Math.pow(x0,2) + Math.pow(y0,2),0.5);
var DIST = parseFloat(form05.dtam_distancia.value);

//IX = ESPES * A2 ^ 3 / 12 + 0.149 * RN * ESPES + B2 * ESPES ^ 3 / 12 + A2 * ESPES * (A2 / 2 + RN - Y) * (A2 / 2 + RN - Y) + U * ESPES * (Y - RN + 0.637 * RN) ^ 2 + B2 * ESPES * Y ^ 2
form12.ixx.value = ESPES * Math.pow(A2,3) / 12 + b * RN * ESPES + B2 * Math.pow(ESPES,3) / 12 + A2 * ESPES * (A2 / 2 + RN - Y) * (A2 / 2 + RN - Y) + U * ESPES * Math.pow(Y - RN + e * RN,2) + B2 * ESPES * Math.pow(Y,2);
var IX = form12.ixx.value;

//IY = A2 * ESPES ^ 3 / 12 + 0.149 * RN * ESPES + ESPES * B2 ^ 3 / 12 + A2 * ESPES * X ^ 2 + U * ESPES * (X - RN + 0.637 * RN) ^ 2 + B2 * ESPES * (B2 / 2 + RN - X) * (B2 / 2 + RN - X)
form13.iyy.value = A2 * Math.pow(ESPES,3) / 12 + 0.149 * RN * ESPES + ESPES * Math.pow(B2,3) / 12 + A2 * ESPES * Math.pow(X,2) + U * ESPES * Math.pow(X - RN + 0.637 * RN,2) + B2 * ESPES * (B2 / 2 + RN - X) * (B2 / 2 + RN - X);
var IY = form13.iyy.value;

//IP = IX + IY + AREA1 * DIST ^ 2
form16.ip.value = IX*1 + IY*1 + AREA01 * Math.pow(DIST,2);
var IP = form16.ip.value;

//ixy = A2 * ESPES * (-X) * (Y - RN - A2 / 2) - U * ESPES * (X - RN + 0.637 * RN) * (Y - RN + 0.637  * RN) + B2 * ESPES * Y * (RN + B2 / 2 - X)
form17.lxy.value = A2 * ESPES * (-X) * (Y - RN - A2 / 2) - U * ESPES * (X - RN + e * RN) * (Y - RN + e  * RN) + B2 * ESPES * Y * (RN + B2 / 2 - X);
var ixy = form17.lxy.value;

//WX = IX / (AB - Y)
form18.wx.value = (IX / (AB - Y)).toFixed(2);
var WX = form18.wx.value;

//WY = IY / (BB - X)
form13.wy.value = IY / (BB - X);
var WY = form13.wy.value;

//WT = (BB + AB) * ESPES ^ 2 / 3
form14.wt.value =  (BB + AB) * Math.pow(ESPES,2) / 3;
var WT = form14.wt.value;

//If IX = IY Then
//TETA = 45
//IV = IX + ixy
//iz = IX - ixy
//Else
//IXY1 = ixy
//AUX0 = 2 * IXY1 / (IX - IY)
//parametro = AUX0
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//ATAN1 = Resultado
//TETA = ATAN1 / 2
//IV = (IX + IY) / 2 + (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
//iz = (IX + IY) / 2 - (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
//End If

TETA = 45;
IXY1 = ixy;
AUX0 = 2 * IXY1 / (IX - IY);

//IV = (IX + IY) / 2 + (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
var iv1 = IX - IY;
var iv2 = iv1 / 2;
var iv3 = Math.pow(iv2,2);
var iv4 = ixy * ixy;
var iv5 = iv3 + iv4;
var iv6 = Math.pow(iv5,0.5);
var iv7 = IX*1 + IY*1;
var iv8 = iv7*1 / 2;
form15.lv.value = iv8 + iv6;
var IV = form15.lv.value;

//iz = (IX + IY) / 2 - (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
var iz1 = IX*1 - IY*1; 
var iz2 = iz1 / 2;
var iz3 = Math.pow(iz2,2);
var iz4 = ixy * ixy;
var iz5 = iz3 + iz4;
var iz6 = Math.pow(iz5,0.5);
var iz7 = IX*1 + IY*1;
var iz8 = iz7 / 2;
form14.lz.value = iz8 - iz6;
var iz = form14.lz.value;

//IX1 = (IX / AREA1) ^ 0.5
form16.ixis.value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = form16.ixis.value;

//IY1 = (IY / AREA1) ^ 0.5
form17.iy.value = Math.pow(IY / AREA01,0.5).toFixed(2) || 0.00;
var IY1 = form17.iy.value;

//iv1 = (IV / AREA1) ^ 0.5
form19.iv.value = Math.pow(IV / AREA01,0.5);
var iv1 = form19.iv.value;

//iz1 = (iz / AREA1) ^ 0.5
form18.iz.value = Math.pow(iz / AREA01,0.5);
var iz1 = form18.iz.value;

//J1 = WT * ESPES
form12.j.value = WT * ESPES;
var J1 = form12.j.value;

//'VERIFICAR
//'TETA = TETA - AUX
//'TETA -AUX1 = TETA - TETA - AUX
//'TETA -AUX1 = TETA - AUX1 * 60


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
      dtam_m.value = dtam_m.value.replace(re_dtam_m, "$1$2.00");
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