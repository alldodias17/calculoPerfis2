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
    var str = document.getElementById("etam_E").value;
    var res = str.replace(",", ".");
    document.getElementById("etam_E").value = res;
  
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
  
//RDB2 = RDB1 * ESPES
var ESPES = parseFloat(form06.espessura_d.value);
var RDB1 = parseFloat(form03.raioe.value);
form07.raiod.value = (RDB1 * ESPES).toFixed(2) || 0.00;
var RDB2 = parseFloat(form07.raiod.value);

//RN = RDB2 + ESPES / 2
form08.raio_neutro.value = (RDB2 + ESPES / 2).toFixed(2) || 0.00;
var RN = parseFloat(form08.raio_neutro.value);

//BB = B1 - ESPES / 2
form06.dtam_bbarra.value = (B1 - ESPES / 2).toFixed(2) || 0.00;
var BB = parseFloat(form06.dtam_bbarra.value);

//B2 = BB - RN
var B1 = parseFloat(form05.dtam_B.value);
form09.dtam_b.value = (BB - RN).toFixed(2) || 0.00;
var B2 = parseFloat(form09.dtam_b.value);


//AB = A1 - ESPES
form05.dtam_a1.value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseFloat(form05.dtam_a1.value);

//X = ((B2 - ESPES / 2 - RN) ^ 2 + (AB - 2 * RN) ^ 2) ^ 0.5
X = ((B2 - ESPES / 2 - RN)**2 + (AB - 2 * RN)**2)**0.5;

//Y = (X ^ 2 / 4 - RN ^ 2) ^ 0.5
Y = (X**2 / 4 - RN**2) ^ 0.5;

//AUX0 = (B2 - ESPES / 2 - RN) / (AB - 2 * RN)
//parametro = AUX0
//Indice = 1
//'CALL "rot_trig" USING parametro resultado indice
//ALFA1 = Resultado
pi = 4 * Math.atn(1);
AUX0 = (B2 - ESPES / 2 - RN) / (AB - 2 * RN);
parametro = AUX0;
Resultado = Atn(parametro);
Resultado = Resultado / (pi / 180);

//AUX0 = RN / Y
//parametro = AUX0
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//ALFA2 = Resultado
// alfa = 90 - (ALFA1 + ALFA2)
//parametro = alfa
//Indice = 3
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//dblSENO = Resultado
//A2 = 2 * Y * dblSENO
//AUX1 = 180 - alfa
//parametro = AUX1
//Indice = 3
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//SENO1 = Resultado
//CA1 = SENO1 * 180 * RN / (AUX1 * 3.1416)
//parametro = alfa
//Indice = 2
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//dblCos = Resultado
//parametro = AUX1
//Indice = 2
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//COS1 = Resultado
//CA2 = ((1 - COS1) / AUX1) * (180 / 3.1416) * RN
//U2 = 3.1416 * RN * AUX1 / 180
//FITA = 2 * B2 + 2 * Y + 2 * U2
//KGM = FITA * ESPES * 0.007848
//ALTDB = RN + ESPES / 2
//AREA1 = FITA * ESPES
//AREAU = AREA1 - 9 * ESPES
//XB = (B2 * ESPES * (RN + B2 / 2) - 9 * ESPES * (RN + B2 / 2) + U2 * ESPES * (RN - CA2) + A2 * (1 / dblSENO) * ESPES * (B1 / 2 - ESPES / 2) + U2 * ESPES * (B1 - ESPES / 2 - RN + CA2) + B2 * ESPES * (B2 / 2 - ESPES / 2)) / AREAU
//YB = (B2 * ESPES * AB - 9 * ESPES * AB + U2 * ESPES * (AB - RN + CA1) + ESPES * A2 * (1 / dblSENO) * AB / 2 + U2 * ESPES * (RN - CA1)) / AREAU
//YB = AB - YB
//I1 = (((AUX1 * 3.1416 + SENO1 * COS1 * 180) / 360) - (SENO1 ^ 2 * 180 / (AUX1 * 3.1416))) * RN ^ 3
//IX = 2 * ESPES ^ 3 * B2 / 12 + B2 * ESPES * YB ^ 2  + B2 * ESPES * (AB - YB) ^ 2 + 2 * I1 * ESPES  + U2 * ESPES * (YB - RN + CA1) ^ 2 + U2 * ESPES  * (AB - YB - RN + CA1) ^ 2 + ESPES * 2 * Y * A2  ^ 2 / 12 + 2 * Y * ESPES * (YB - AB / 2) ^ 2  - 9 * ESPES ^ 3 / 12 - 9 * ESPES * YB ^ 2
//I2 = ((AUX1 * 3.1416 - SENO1 * COS1 * 180) / 360 - ((1 - COS1) ^ 2 * 180 / (AUX1 * 3.1416))) * RN ^ 3
//IY = 2 * ESPES.Value * B2 ^ 3 / 12 + ESPES.Value * B2 * (RN + B2 / 2 - XB) * (RN + B2 / 2 - XB) + ESPES.Value * B2 * (B2 / 2 - XB) * (B2 / 2 - XB) + 2 * I2 * ESPES.Value + U2 * ESPES.Value * (XB - RN + CA2) ^ 2 + U2 * ESPES.Value  * (BB - RN + CA2 - XB) * (BB - RN + CA2 - XB) + ESPES.Value * 8 * Y ^ 3 * dblCos ^ 2 / 12 + 2 * Y * ESPES * (XB - (B1 / 2 - ESPES / 2)) * (XB - (B1 / 2 - ESPES / 2)) - ESPES * 729 / 12 - 9 * ESPES * (RN + B2 / 2 - XB) * (RN + B2 / 2 - XB)
//WX = IX / (YB + ESPES / 2)
//WY = 2 * IY / B1
//X1 = YB - AB / 2
//X2 = B1 / 2 - ESPES / 2 - XB
//X3 = (X1 ^ 2 + X2 ^ 2) ^ 0.5
//ixy = B2 * ESPES.Value * YB * (RN + B2 / 2 - XB) - U2 * ESPES.Value * (XB - RN + CA2) * (YB - RN + CA1) - Y * ESPES.Value * (Y / 2 * dblSENO + X1) * (Y / 2 * dblCos) - (Y - X3) * ESPES.Value * ((Y - X3) / 2 * dblSENO) * ((Y - X3) / 2 * dblCos) - U2 * ESPES * (BB - RN  + CA2 - XB) * (AB - RN + CA1 - YB) + B2 * ESPES * (AB - YB) * (XB - B2 / 2)
//IV = (IX + IY) / 2 + (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
//iz = (IX + IY) / 2 - (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
//AUX2 = -2 * ixy / (IX - IY)
//parametro = AUX2
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//ATAN1 = Resultado
//TETA = ATAN1 / 2
//parametro = TETA
//Indice = 2
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//COS2 = Resultado
//WT = (FITA - 9) * ESPES ^ 2 / 3
//IX1 = (IX / AREAU) ^ 0.5
//IY1 = (IY / AREAU) ^ 0.5
//iz1 = (iz / AREAU) ^ 0.5
//iv1 = (IV / AREAU) ^ 0.5
//J1 = WT * ESPES
//CGX = XB + ESPES / 2
//CGY = YB + ESPES / 2
//RO1 = X2 * dblSENO
//W1 = BB * YB
//W2 = W1 - RO1 * AB / dblSENO
//W3 = W2 - BB * (AB - YB)
//x0 = BB - XB
//X4 = -XB
//X5 = x0 - ESPES / 2
//X6 = X4 - ESPES / 2
//JWX = 0.3333333 * ESPES * ((W1 * X4 * BB) + (W1 * X4 + W2 * X5) * AB / dblSENO + (W2 * X5 + W3 * X6) * BB) + 0.1666666 * ESPES * (W1 * x0 * BB + (W1 * X5 + W2 * X4) * AB / dblSENO + (W2 * X6 + W3 * X5) * BB)
//y0 = -(JWX / IY)
//JWY = 0.3333333 * ESPES * ((W1 * YB * BB) + (W1 * YB + W2 * (YB - AB)) * AB / dblSENO + (W2 * (YB - AB)  + W3 * (YB - AB)) * BB) + 0.1666666 * ESPES * (W1 * YB * BB + (W1 * (YB - AB) + W2 * YB) * AB  / dblSENO + (W2 * (YB - AB) + W3 * (YB - AB)) * BB)
//x0 = (JWY / IX)
//DIST = (x0 ^ 2 + y0 ^ 2) ^ 0.5
//IP = IX + IY + AREAU * DIST ^ 2
//ALFA_AUX = alfa
//ALFA_AUX1 = alfa - ALFA_AUX
//ALFA_AUX1 = ALFA_AUX1 * 60
//TETA_AUX = TETA
//TETA_AUX1 = TETA - TETA_AUX
//TETA_AUX1 = TETA_AUX1 * 60
//WN0 = X3 * y0 / X2
//WN1 = WN0 * dblSENO - (x0 - B1 / 2 + ESPES / 2 + XB)
//WN2 = X1 * WN1 / X3
//WN3 = WN0 - WN2
//W1 = BB * (YB - y0)
//W2 = W1 + WN3 * AB / dblSENO
//W3 = W2 - BB * (AB - YB + y0)
//WN0 = 0.5 * 1 / AREAU * (W1 * BB * ESPES + (W1 + W2) * ESPES * AB / dblSENO + (W2 + W3) * ESPES * BB)
//WN1 = WN0 - W1
//WN2 = WN0 - W2
//WN3 = WN0 - W3
//Cw = 0.333333 * ESPES * ((WN0 ^ 2 + WN0 * WN1 + WN1 * WN1) * BB + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * AB / dblSENO + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * BB)
  







  
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
    var re_largura_da = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_largura_da.test(largura_da.value)) {
      largura_da.value = largura_da.value.replace(re_largura_da, "$1$20.00");
    }
    var re_lxy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_lxy.test(ip.value)) {
      lxy.value = lxy.value.replace(re_lxy, "$1$20.00");
     }
    var re_dtam_d = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_d.test(dtam_d.value)) {
      dtam_d.value = dtam_d.value.replace(re_dtam_d, "$1$2.00");
    }
    var re_dtam_e = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_e.test(dtam_e.value)) {
      dtam_e.value = dtam_e.value.replace(re_dtam_e, "$1$2.00");
    }
    var re_dtam_dd = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_dd.test(dtam_dd.value)) {
      dtam_dd.value = dtam_dd.value.replace(re_dtam_dd, "$1$2.00");
    }
    var re_dtam_ee = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_ee.test(dtam_ee.value)) {
      dtam_ee.value = dtam_ee.value.replace(re_dtam_ee, "$1$2.00");
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
      dtam_xx.value = dtam_xx.value.replace(re_dtam_xx, "$1$2.00");
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
    var re_dtam_d = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_d.test(dtam_d.value)) {
      dtam_d.value = dtam_d.value.replace(re_dtam_d, "$1$20.00");
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