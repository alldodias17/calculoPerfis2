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




id('dtam_A').value = id('etam_A').value;
id('dtam_B').value = id('etam_B').value;
id('dtam_C').value = id('etam_C').value;
id('dtam_D').value = id('etam_D').value;
id('dtam_E').value = id('etam_E').value;
id('espessura_d').value = id('espessura_e').value;




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
var i = parseFloat(3.1416);
var j = parseFloat(180);
var l = parseFloat(360);
      
//RDB2 = RDB1 * ESPES
var ESPES = form06.espessura_d.value;
var RDB1 = form03.raioe.value;
form07.raiod.value = (RDB1 * ESPES).toFixed(2) || 0.00;
var RDB2 = parseFloat(form07.raiod.value);

//RN = RDB2 + ESPES / 2
form08.raio_neutro.value = (RDB2*1 + ESPES / 2).toFixed(2) || 0.00;
var RN = parseFloat(form08.raio_neutro.value);

//BB = B1 - ESPES / 2
form06.dtam_bbarra.value = (form05.dtam_B.value*1 - (form06.espessura_d.value / 2)).toFixed(2) || 0.00;
var BB = parseFloat(form06.dtam_bbarra.value);

//B2 = BB - RN
var B1 = form05.dtam_B.value;
form09.dtam_b.value = (BB - RN).toFixed(2) || 0.00;
var B2 = parseFloat(form09.dtam_b.value);

//AB = A1 - ESPES
form05.dtam_a1.value = (form04.dtam_A.value - form06.espessura_d.value).toFixed(2) || 0.00;
var AB = form05.dtam_a1.value; 

//X = ((B2 - ESPES / 2 - RN) ^ 2 + (AB - 2 * RN) ^ 2) ^ 0.5
var X;
X = Math.pow(Math.pow(B2 - ESPES / 2 - RN,2) + Math.pow(AB - 2 * RN,2),0.5);

//Y = (X ^ 2 / 4 - RN ^ 2) ^ 0.5
var Y;
Y = Math.pow(Math.pow(X,2) / 4 - Math.pow(RN,2),0.5);


//AUX0 = (B2 - ESPES / 2 - RN) / (AB - 2 * RN)
var AUXO;
AUX0 = (B2 - ESPES / 2 - RN) / (AB - 2 * RN);

//parametro = AUX0
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//ALFA1 = Resultado
var pi = 4 * Math.atan(1);
parametro = AUX0;
Resultado = parametro;
Resultado_01 = Resultado / (pi / j);
ALFA1 = Resultado_01;

//AUX0 = RN / Y
//parametro = AUX0
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//ALFA2 = Resultado
AUX0 = RN / Y;
parametro = AUX0;
Resultado_02_2 = parametro;
Resultado_02 = Resultado_02_2 / (pi / j);
ALFA2 = Resultado_02;

//alfa = 90 - (ALFA1 + ALFA2)
//parametro = alfa
//Indice = 3
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//dblSENO = Resultado
alfa = 90 - (ALFA1*1 + ALFA2*1);
parametro_03 = alfa;
parametro_03_3 = parametro_03 * (pi / j);
Resultado_03 = Math.sin(parametro_03_3);
dblSENO = Resultado_03;

//A2 = 2 * Y * dblSENO
var A1 = parseFloat(form04.dtam_A.value);
form09.dtam_a.value = 2 * Y * dblSENO;
var A2 = parseFloat(form09.dtam_a.value);

//AUX1 = 180 - alfa
AUX1 = 180 - alfa;

//u2 = 3.1416 * RN * AUX1 / 180
form10.u2.value = 3.1416 * RN * AUX1 / j;
var u2 = parseFloat(form10.u2.value);

//FITA = 2 * B2 + 2 * Y + 2 * u2
form10.largura_da.value = (2 * B2 + 2 * Y + 2 * u2).toFixed(2) || 0.00;
var FITA = parseFloat(form10.largura_da.value);

//KGM = FITA * ESPES * 0.007848
form04.d_Peso.value = (FITA * ESPES * 0.007848).toFixed(2) || 0.00;
var KGM = parseFloat(form04.d_Peso.value);

//ALTDB = RN + ESPES / 2
form09.alturadobra.value = (RN*1 + ESPES / 2).toFixed(2) || 0.00;
var ALTDB = parseFloat(form09.alturadobra.value);

//CGX = B1 / 2
form14.cgx.value = B1 / 2;
var CGX = parseFloat(form14.cgx.value);

//CGY = A1 / 2
form15.cgy.value = (A1 / 2 || 0.00).toFixed(2);
var CGY = parseFloat(form15.cgy.value);

//AREA1 = FITA * ESPES
form19.area_total.value = ( FITA * ESPES || 0.00).toFixed(2);
var AREA01 = parseFloat(form19.area_total.value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//parametro = AUX1
//Indice = 3
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//SENO1 = Resultado
parametro_04 = AUX1;
parametro_04_4 = parametro_04 * (pi / j);
Resultado_04 = Math.sin(parametro_04_4);
SENO1 = Resultado_04;


//CA1 = SENO1 * 180 * RN / (AUX1 * 3.1416)
//parametro = alfa
//Indice = 2
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//dblCos = Resultado
CA1 = SENO1 * 180 * RN / (AUX1 * i);
parametro_05 = alfa;
parametro_05_5 = parametro_05 * (pi / j);
Resultado_05 = Math.cos(parametro_05_5);
dblCos = Resultado_05;

//parametro = AUX1
//Indice = 2
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//COS1 = Resultado
parametro_06 = AUX1;
parametro_06_6 = parametro_06 * (pi / j);
Resultado_06 = Math.cos(parametro_06_6);
COS1 = Resultado_06;

//CA2 = ((1 - COS1) / AUX1) * (180 / 3.1416) * RN
var CA2;
CA2 = ((1 - COS1) / AUX1) * (j / 3.1416) * RN;

//I1 = (((AUX1 * 3.1416 + SENO1 * COS1 * 180) / 360) - (SENO1 ^ 2 * 180 / (AUX1 * 3.1416))) * RN ^ 3
var I1;
I1 = (((AUX1 * i + SENO1 * COS1 * j) / l) - (Math.pow(SENO1,2) * 180 / (AUX1 * 3.1416))) * Math.pow(RN,3);

//IX = 2 * (B2 * ESPES ^ 3 / 12) + ESPES * A2 ^ 2 * 2 * Y / 12 + 2 * I1 * ESPES + 2 * B2 * ESPES * (AB / 2) ^ 2 + u2 * ESPES * (A1 / 2 - ESPES / 2 - RN + CA1) ^ 2 * 2
form12.ixx.value = 2 * (B2 * Math.pow(ESPES,3) / 12) + ESPES * Math.pow(A2,2) * 2 * parseFloat(Y) / 12 + 2 * parseFloat(I1) * ESPES + 2 * B2 * ESPES * Math.pow(AB / 2,2) + u2 * ESPES * Math.pow(A1 / 2 - ESPES / 2 - RN + CA1,2) * 2;
var IX = parseFloat(form12.ixx.value);

//I2 = ((AUX1 * 3.1416 - SENO1 * COS1 * 180) / 360 - ((1 - COS1) ^ 2 * 180 / (AUX1 * 3.1416))) * RN ^ 3
var I2;
I2 = ((AUX1 * 3.1416 - SENO1 * COS1 * j) / 360 - (Math.pow(1 - COS1,2) * 180 / (AUX1 * 3.1416))) * Math.pow(RN,3);

//IY = 2 * (ESPES * B2 ^ 3 / 12) + ESPES * Y ^ 3 * dblCos ^ 2 / 1.5 + 2 * I2 * ESPES + u2 * ESPES * (B1 / 2 - RN + CA2) ^ 2 * 2 + 2 * ESPES * B2 * (B1 / 2 - B2 / 2) ^ 2
form13.iyy.value = 2 * (ESPES * Math.pow(B2,3) / 12) + ESPES * Math.pow(Y,3) * Math.pow(dblCos,2) / 1.5 + 2 * I2 * ESPES + u2 * ESPES * Math.pow(B1 / 2 - RN + CA2,2) * 2 + 2 * ESPES * B2 * Math.pow(B1 / 2 - B2 / 2,2);
var IY = parseFloat(form13.iyy.value);

//IP = IX + IY
form16.ip.value = (IX + IY).toFixed(2) || 0.00;;
var IP = parseFloat(form16.ip.value);

//ixy = (2 * B2 * ESPES * (AB / 2) * (B1 / 2 - B2 / 2)) - (2 * Y * ESPES * dblSENO * Y / 2 * dblCos * Y / 2) - (2 * u2 * ESPES * (AB / 2 - CA1) * (B1 / 2 - ESPES / 2 - CA2))
form17.lxy.value = (2 * B2 * ESPES * (AB / 2) * (B1 / 2 - B2 / 2)) - (2 * Y * ESPES * dblSENO * Y / 2 * dblCos * Y / 2) - (2 * u2 * ESPES * (AB / 2 - CA1) * (B1 / 2 - ESPES / 2 - CA2));
var ixy = parseFloat(form17.lxy.value);

//AUX2 = -2 * ixy / (IX - IY)
//parametro = AUX2
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//ATAN1 = Resultado
AUX2 = -2 * ixy / (IX - IY);
parametro_07 = AUX2;
Resultado_07 = Math.atan(parametro_07);
Resultado_07_7 = Resultado_07 / (pi / j);
ATAN1 = Resultado_07_7;

//TETA = ATAN1 / 2
TETA = ATAN1 / 2;

//WX = 2 * IX / A1
form18.wx.value = 2 * IX / A1;
var WX = form18.wx.value;

//WY = 2 * IY / B1
form13.wy.value = 2 * IY / B1;
var WY = form13.wy.value;

//IV = (IX + IY) / 2 + (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
form15.lv.value = (IX + IY) / 2 + Math.pow(Math.pow((IX - IY) / 2,2) + ixy * ixy,0.5);
var IV = parseFloat(form15.lv.value);

//iz = (IX + IY) / 2 - (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
iz = (IX*1 + IY*1) / 2 - Math.pow(Math.pow((IX - IY) / 2,2) + ixy * ixy,0.5);

//parametro = TETA
//Indice = 2
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//COS2 = Resultado
parametro_08 = TETA;
parametro_08_8 = parametro_08 * (pi / j);
Resultado = Math.cos(parametro_08_8);

//WT = (FITA * ESPES ^ 2) / 3
form14.wt.value =  (FITA * Math.pow(ESPES,2)) / 3;
var WT = form14.wt.value;

//IX1 = (IX / AREA1) ^ 0.5
form16.ixis.value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = form16.ixis.value;

//IY1 = (IY / AREA1) ^ 0.5
form17.iy.value = Math.pow(IY / AREA01,0.5);
var IY1 = form17.iy.value;

//iz1 = (iz / AREA1) ^ 0.5
iz1 = Math.pow(iz / AREA01,0.5);

//iv1 = (IV / AREA1) ^ 0.5
iv1 = Math.pow(IV / AREA01,0.5);

//J1 = WT * ESPES
form12.j.value = WT * ESPES;
var J1 = form12.j.value;

//RO1 = AB / 2
RO1 = AB / 2;

//RO3 = -AB / 2
RO3 = -AB / 2;

//W1 = RO1 * BB
W1 = RO1 * BB;

//W3 = W1 + RO3 * BB
W3 = W1 + RO3 * BB;

//WN0 = (W1 * ESPES * BB + (W1 + W1) * ESPES * AB / dblSENO + (W1 + W3) * ESPES * BB) / (2 * AREA1)
WN0 = (W1 * ESPES * BB + (W1 + W1) * ESPES * AB / dblSENO + (W1 + W3) * ESPES * BB) / (2 * AREA01);

//WN1 = WN0 - W1
WN1 = WN0 - W1;

//WN3 = WN0 - W3
WN3 = WN0 - W3;

//Cw = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * ESPES * BB + (WN1 * WN1 + WN1 * WN1 + WN1 * WN1) * ESPES * AB / dblSENO + (WN1 * WN1 + WN1 * WN3 + WN3 * WN3) * ESPES * BB) / 3
form16.cw.value = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * ESPES * BB + (WN1 * WN1 + WN1 * WN1 + WN1 * WN1) * ESPES * AB / dblSENO + (WN1 * WN1 + WN1 * WN3 + WN3 * WN3) * ESPES * BB) / 3;

//ALFA_AUX = alfa
//ALFA_AUX1 = alfa - ALFA_AUX
//ALFA_AUX1 = ALFA_AUX1 * 60
//TETA_AUX = TETA
//TETA_AUX1 = TETA - TETA_AUX
//TETA_AUX1 = TETA_AUX1 * 60
ALFA_AUX = alfa;
ALFA_AUX1 = alfa - ALFA_AUX;
ALFA_AUX1 = ALFA_AUX1 * 60;
TETA_AUX = TETA = TETA;
TETA_AUX1 = TETA - TETA_AUX;
TETA_AUX1 = TETA_AUX1 * 60;
form18.teta.value = TETA;
form17.alpha.value = alfa;
form02.eangulo.value = alfa;



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
      cgx.value = cgx.value.replace(re_cgx, "$1$2.00");
    }
    var re_cgy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_cgy.test(cgy.value)) {
      cgy.value = cgy.value.replace(re_cgy, "$1$2.00");
    }
    var re_raioe = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_raioe.test(raioe.value)) {
      raioe.value = raioe.value.replace(re_raioe, "$1$2.00");
    }
    var re_area_total = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_area_total.test(area_total.value)) {
      area_total.value = area_total.value.replace(re_area_total, "$1$2.00");
    }
    var re_area_util = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_area_util.test(area_util.value)) {
      area_util.value = area_util.value.replace(re_area_util, "$1$2.00");
    }
    var re_ip = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_ip.test(ip.value)) {
      ip.value = ip.value.replace(re_ip, "$1$2.00");
    }
    var re_dtam_D = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_D.test(dtam_D.value)) {
      dtam_D.value = dtam_D.value.replace(re_dtam_D, "$1$2.00");
    }
    var re_largura_da = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_largura_da.test(largura_da.value)) {
      largura_da.value = largura_da.value.replace(re_largura_da, "$1$2.00");
    }
    var re_lxy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_lxy.test(ip.value)) {
      lxy.value = lxy.value.replace(re_lxy, "$1$2.00");
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
    var re_iii = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_iii.test(iii.value)) {
      iii.value = iii.value.replace(re_iii, "$1$20.00");
    }
    var re_bbb = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_bbb.test(bbb.value)) {
      bbb.value = bbb.value.replace(re_bbb, "$1$20.00");
    }
    var re_ixx = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_ixx.test(ixx.value)) {
      ixx.value = ixx.value.replace(re_ixx, "$1$20.00");
    }





    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }



  }