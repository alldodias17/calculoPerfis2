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
    var re_etam_D= /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_D.test(etam_D.value)) {
      etam_D.value = etam_D.value.replace(re_etam_D, "$1$2,00");
       }
    var form02 = document.getElementById("form02");
    var etam_E = form02.etam_E;
    var re_etam_E= /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_E.test(etam_E.value)) {
      etam_E.value = etam_E.value.replace(re_etam_E, "$1$2,00");
   
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
var pi = parseFloat(3.14);


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

//B2 = B1 - ESPES / 2 - RN
var B1 = parseFloat(form05.dtam_B.value);
form09.dtam_b.value = (B1 - 2 * ALTDB).toFixed(2) || 0.00;
var B2 = parseFloat(form09.dtam_b.value);

//C2 = C1 - 2 * ALTDB
var C1 = form03.etam_C.value
form10.dtam_c.value = form03.etam_C.value - 2 * ALTDB;
var C2 = parseFloat(form10.dtam_c.value);

//E1 = C1
var E1 = form08.dtam_E.value;
form08.dtam_E.value = C1;

//D2 = D1 - ALTDB
var D1 = form01.etam_D.value;
form11.dtam_d.value= D1 - ALTDB;
var D2 = parseFloat(form11.dtam_d.value);

//E2 = E1 - ALTDB
form04.dtam_e.value = E1 - ALTDB;
var E2 = parseFloat(form04.dtam_e.value);

//AB = A1 - ESPES
var A1 = parseFloat(form04.dtam_A.value);
form05.dtam_a1.value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseFloat(form05.dtam_a1.value);

//BB = B1 - ESPES
form06.dtam_bbarra.value = (B1 - ESPES).toFixed(2) || 0.00;
var BB = parseFloat(form06.dtam_bbarra.value);

//CB = C1 - ESPES
form07.dtam_ccc.value = C1 - ESPES ;
var CB = parseFloat(form07.dtam_ccc.value);

//DB = D1 - ESPES / 2
form07.dtam_dd.value = DB = D1 - ESPES / 2;
var DB = parseFloat(form07.dtam_dd.value);

//eb = E1 - ESPES / 2
form08.dtam_ee.value = E1 - ESPES / 2;
var eb = parseFloat(form08.dtam_ee.value);

//X = ((B2 - ESPES / 2 - RN) ^ 2 + (AB - 2 * RN) ^ 2) ^ 0.5
X = Math.pow((B2 - ESPES / 2 - RN) ^ 2 + Math.pow(AB - 2 * RN,2),0.5);

//Y = (X ^ 2 / 4 - RN ^ 2) ^ 0.5
Y = Math.pow(Math.pow(X,2) / 4 - Math.pow(RN,2),0.5);

//AUX0 = (B2 - ESPES / 2 - RN) / (AB - 2 * RN)
//parametro = AUX0
//Indice = 1
//'CALL "rot_trig" USING parametro resultado indice
//rot_trig
//ALFA1 = Resultado
AUX0 = (B2 - ESPES / 2 - RN) / (AB - 2 * RN);
parametro = AUX0;
pi = 4 * Math.atan(1);
Resultado_01 = Math.atan(parametro);
Resultado_01_1 = Resultado_01 / (pi / 180);
ALFA1 = Resultado_01_1;

//AUX0 = RN / Y
//parametro = AUX0
//Indice = 1
//'CALL "rot_trig" USING parametro resultado indice
//rot_trig
//ALFA2 = Resultado
//alfa = 90 - (ALFA1 + ALFA2)
AUX0 = RN / Y;
parametro_01 = AUX0;
Resultado_02 = Math.atan(parametro_01);
Resultado_02_2 = Resultado_02 / (pi / 180);
ALFA2 = Resultado_02_2;
alfa = 90 - (ALFA1 + ALFA2);


//parametro = alfa
//Indice = 3
//'CALL "rot_trig" USING parametro resultado indice
//rot_trig
//dblSENO = Resultado
parametro_02 = alfa;
parametro_02_2 = parametro_02 * (pi / 180);
Resultado_03 = Math.sin(parametro_02_2);
dblSENO = Resultado_03;

//A2 = 2 * Y * dblSENO

form09.dtam_a.value = 2 * Y * dblSENO;
var A2 = parseFloat(form09.dtam_a.value);

//B2 = BB - 2 * RN
var B1 = parseFloat(form05.dtam_B.value);
form09.dtam_b.value = (B1 - 2 * ALTDB).toFixed(2) || 0.00;
var B2 = parseFloat(form09.dtam_b.value);

//AUX1 = 180 - alfa
AUX1 = 180 - alfa;

//U2 = 3.1416 * RN * AUX1 / 180
U2 = 3.1416 * RN * AUX1 / 180;

//FITA = D2 + C2 + 2 * B2 + 2 * Y + E2 + 2 * U2 + 3 * U
form10.largura_da.value = D2 + C2 + 2 * B2 + 2 * Y + E2 + 2 * U2 + 3 * U;
var FITA = parseFloat(form10.largura_da.value);

//AREA1 = FITA * ESPES
form19.area_total.value = (FITA * ESPES).toFixed(2) || 0.00;
var AREA01 = parseFloat(form19.area_total.value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//KGM = AREA1 * 0.00785
form04.d_Peso.value = (AREA01  * 0.00785).toFixed(2) || 0.00;
var KGM = parseFloat(form04.d_Peso.value);

//parametro = AUX1
//Indice = 3
//'CALL "rot_trig" USING parametro resultado indice
//rot_trig
//SENO1 = Resultado
//CA1 = SENO1 * 180 * RN / (AUX1 * 3.1416)
parametro_03 = AUX1;
parametro_03_3 = parametro_03 * (pi / 180);
Resultado_03 = Math.sin(parametro_03_3);
SENO1 = Resultado_03;
CA1 = SENO1 * 180 * RN / (AUX1 * 3.1416);

//parametro = alfa
//Indice = 2
//'CALL "rot_trig" USING parametro resultado indice
//rot_trig
//dblCos = Resultado
parametro_04 = alfa;
parametro_04_4 = parametro_04 * (pi / 180)
Resultado_04 = Math.cos(parametro_04_4);
dblCos = Resultado_04;

//parametro = AUX1
//Indice = 2
//'CALL "rot_trig" USING parametro resultado indice
//rot_trig
//COS1 = Resultado
parametro_05 = AUX1;
parametro_05_5 = parametro_05 * (pi / 180);
Resultado_05 = Math.cos(parametro_05_5);
COS1 = Resultado_05;

//CA2 = ((1 - COS1) / AUX1) * (180 / 3.1416) * RN
CA2 = ((1 - COS1) / AUX1) * (180 / 3.1416) * RN;

//I1 = (((AUX1 * 3.1416 + SENO1 * COS1 * 180) / 360) - (SENO1 ^ 2 * 180 / (AUX1 * 3.1416))) * RN ^ 3
I1 = (((AUX1 * 3.1416 + SENO1 * COS1 * 180) / 360) - (Math.pow(SENO1,2) * 180 / (AUX1 * 3.1416))) * Math.pow(RN,3);

//I2 = ((AUX1 * 3.1416 - SENO1 * COS1 * 180) / 360 - ((1 - COS1) ^ 2 * 180 / (AUX1 * 3.1416))) * RN ^ 3
I2 = ((AUX1 * 3.1416 - SENO1 * COS1 * 180) / 360 - (Math.pow(1 - COS1,2) * 180 / (AUX1 * 3.1416))) * Math.pow(RN,3);

//XB = (ESPES * (D2 * (BB + RN + D2 / 2) + U * (BB + RN - 0.637 * RN) + C2 * BB + U * (BB - RN + 0.637 * RN) + 2 * B2 * BB / 2 + U2 * (RN - CA1) + 2 * Y * BB / 2 + U2 * (BB - RN + CA1) + U * (RN - 0.637 * RN))) / AREA1
form07.dtam_xx.value = (ESPES * (D2 * (BB + RN + D2 / 2) + U * (BB + RN - 0.637 * RN) + C2 * BB + U * (BB - RN + 0.637 * RN) + 2 * B2 * BB / 2 + U2 * (RN - CA1) + 2 * Y * BB / 2 + U2 * (BB - RN + CA1) + U * (RN - 0.637 * RN))) / AREA01;
var XB = parseFloat(form07.dtam_xx.value);

//YB = (ESPES * (D2 * CB + U * (CB - RN + 0.637 * RN) + C2 * CB / 2 + U * (RN - 0.637 * RN) + U2 * (RN - CA2) + 2 * Y * AB / 2 + U2 * (AB - RN + CA2) + B2 * AB + U * (AB - RN + 0.637 * RN) + E2 * (AB - RN - E2 / 2))) / AREA1
form09.dtam_y.value = (ESPES * (D2 * CB + U * (CB - RN + 0.637 * RN) + C2 * CB / 2 + U * (RN - 0.637 * RN) + U2 * (RN - CA2) + 2 * Y * AB / 2 + U2 * (AB - RN + CA2) + B2 * AB + U * (AB - RN + 0.637 * RN) + E2 * (AB - RN - E2 / 2))) / AREA01; 
var YB = parseFloat(form09.dtam_y.value);

//IX = D2 * ESPES ^ 3 / 12 + 3 * 0.149 * RN * ESPES + 2 * I1 * ESPES + ESPES * C2 ^ 3 / 12 + B2 * ESPES ^ 3 / 6 + ESPES * Y * A2 ^ 2 / 6 + ESPES * E2 ^ 3 / 12 + D2 * ESPES * (YB - CB) ^ 2 + U * ESPES * (YB - CB + RN - 0.637 * RN) ^ 2 + C2 * ESPES * (YB - CB / 2) ^ 2 + U * ESPES * (YB - RN + 0.637 * RN) ^ 2 + B2 * ESPES * YB ^ 2 + U2 * ESPES * (YB - RN + CA1) ^ 2 + 2 * Y * ESPES * (AB / 2 - YB) ^ 2 + U2 * ESPES * (AB - RN + CA1 - YB) ^ 2 + B2 * ESPES * (AB - YB) ^ 2 + U * ESPES * (AB - RN + 0.637 * RN - YB) ^ 2 + E2 * ESPES * (AB - RN - E2 / 2 - YB) ^ 2
form12.ixx.value = D2 * Math.pow(ESPES,3) / 12 + 3 * 0.149 * RN * ESPES + 2 * I1 * ESPES + ESPES * Math.pow(C2,3) / 12 + B2 * Math.pow(ESPES,3) / 6 + ESPES * Y * Math.pow(A2,2) / 6 + ESPES * Math.pow(E2,3) / 12 + D2 * ESPES * Math.pow(YB - CB,2) + U * ESPES * Math.pow(YB - CB + RN - 0.637 * RN,2) + C2 * ESPES * Math.pow(YB - CB / 2,2) + U * ESPES * Math.pow(YB - RN + 0.637 * RN,2) + B2 * ESPES * Math.pow(YB,2) + U2 * ESPES * Math.pow(YB - RN + CA1,2) + 2 * Y * ESPES * Math.pow(AB / 2 - YB,2) + U2 * ESPES * Math.pow(AB - RN + CA1 - YB,2) + B2 * ESPES * Math.pow(AB - YB,2) + U * ESPES * Math.pow(AB - RN + 0.637 * RN - YB,2) + E2 * ESPES * Math.pow(AB - RN - E2 / 2 - YB,2);
var IX = parseFloat(form12.ixx.value);

//IY = ESPES * D2 ^ 3 / 12 + 3 * 0.149 * RN * ESPES + 2 * I2 * ESPES + C2 * ESPES ^ 3 / 12 + ESPES * B2 ^ 3 / 6 + ESPES * Y ^ 3 * dblCos ^ 2 / 1.5 + E2 * ESPES ^ 3 / 12 + D2 * ESPES * (BB + RN + D2 / 2 - XB) ^ 2 + U * ESPES * (BB + RN - 0.637 * RN - XB) ^ 2 + C2 * ESPES * (BB - XB) ^ 2 + U * ESPES * (BB - RN + 0.637 * RN - XB) ^ 2 + 2 * B2 * ESPES * (BB / 2 - XB) * (BB / 2 - XB) + U2 * ESPES * (XB - RN + CA2) ^ 2 + 2 * Y * ESPES * (BB / 2 - XB) * (BB / 2 - XB) + U2 * ESPES * (BB - RN + CA2 - XB) ^ 2 + U * ESPES * (XB - RN + 0.637 * RN) ^ 2 + E2 * ESPES * XB ^ 2
form13.iyy.value = ESPES * Math.pow(D2,3) / 12 + 3 * 0.149 * RN * ESPES + 2 * I2 * ESPES + C2 * Math.pow(ESPES,3) / 12 + ESPES * Math.pow(B2,3)/ 6 + ESPES * Math.pow(Y,3) * Math.pow(dblCos,2) / 1.5 + E2 * Math.pow(ESPES,3) / 12 + D2 * ESPES * Math.pow(BB + RN + D2 / 2 - XB,2) + U * ESPES * Math.pow(BB + RN - 0.637 * RN - XB,2) + C2 * ESPES * Math.pow(BB - XB,2) + U * ESPES * Math.pow(BB - RN + 0.637 * RN - XB,2) + 2 * B2 * ESPES * (BB / 2 - XB) * (BB / 2 - XB) + U2 * ESPES * Math.pow(XB - RN + CA2,2) + 2 * Y * ESPES * (BB / 2 - XB) * (BB / 2 - XB) + U2 * ESPES * Math.pow(BB - RN + CA2 - XB,2) + U * ESPES * Math.pow(XB - RN + 0.637 * RN,2) + E2 * ESPES * Math.pow(XB,2);
var IY = parseFloat(form13.iyy.value);

//ixy = D2 * ESPES * (YB - CB) * (BB + RN + D2 / 2 - XB) + U * ESPES * (BB + RN - 0.637 * RN - XB) * (YB - CB + RN - 0.637 * RN) + C2 * ESPES * (BB - XB) * (YB - CB / 2) + U * ESPES * (BB - RN + 0.637 * RN - XB) * (YB - RN + 0.637 * RN) + B2 * ESPES * YB * (BB / 2 - XB) + U2 * ESPES * (YB - RN + CA1) * (RN - CA2 - XB) + 2 * Y * ESPES * (AB / 2 - YB) * (BB / 2 - XB) + U2 *  ESPES * (YB - AB + RN - CA1) * (BB - RN + CA2 - XB) + B2 * ESPES * (AB - YB) * (XB - BB / 2) + U * ESPES * (AB - RN + 0.637 * RN - YB) * (XB - RN + 0.637 * RN) + E2 * ESPES * (AB - RN - E2 / 2 - YB) * XB
form17.lxy.value = D2 * ESPES * (YB - CB) * (BB + RN + D2 / 2 - XB) + U * ESPES * (BB + RN - 0.637 * RN - XB) * (YB - CB + RN - 0.637 * RN) + C2 * ESPES * (BB - XB) * (YB - CB / 2) + U * ESPES * (BB - RN + 0.637 * RN - XB) * (YB - RN + 0.637 * RN) + B2 * ESPES * YB * (BB / 2 - XB) + U2 * ESPES * (YB - RN + CA1) * (RN - CA2 - XB) + 2 * Y * ESPES * (AB / 2 - YB) * (BB / 2 - XB) + U2 *  ESPES * (YB - AB + RN - CA1) * (BB - RN + CA2 - XB) + B2 * ESPES * (AB - YB) * (XB - BB / 2) + U * ESPES * (AB - RN + 0.637 * RN - YB) * (XB - RN + 0.637 * RN) + E2 * ESPES * (AB - RN - E2 / 2 - YB) * XB;
var ixy = parseFloat(form17.lxy.value);

//AUX2 = 2 * ixy / (IX - IY)
//parametro = AUX2
//Indice = 1
//'CALL "rot_trig" USING parametro resultado indice
//rot_trig
//ATAN1 = Resultado
AUX2 = 2 * ixy / (IX - IY);
parametro_06 = AUX2;
Resultado_06 = Math.atan(parametro_06);
Resultado_06_6 = Resultado_06 / (pi / 180);
ATAN1 = Resultado_06_6;

//TETA = ATAN1 / 2
TETA = ATAN1 / 2;

//IV = (IX + IY) / 2 + (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
form15.lv.value = (IX + IY) / 2 + Math.pow(Math.pow((IX - IY) / 2,2) + ixy * ixy,0.5);
var IV = parseFloat(form15.lv.value);

//iz = (IX + IY) / 2 - (((IX - IY) / 2) ^ 2 + ixy * ixy) ^ 0.5
form14.lz.value = (IX + IY) / 2 - Math.pow(Math.pow((IX - IY) / 2,2) + ixy * ixy,0.5);
var iz = parseFloat(form14.lz.value);

//IX1 = (IX / AREA1) ^ 0.5
form16.ixis.value = Math.pow(IX / AREA01,0.5).toFixed(2) || 0.00;
var IX1 = parseFloat(form16.ixis.value);

//IY1 = (IY / AREA1) ^ 0.5
form19.iv.value = (Math.pow(IV / AREA01,0.5)).toFixed(2) || 0.00;;
var iv1 = parseFloat(form19.iv.value);

//iz1 = (iz / AREA1) ^ 0.5
form18.iz.value = (Math.pow(iz / AREA01,0.5)).toFixed(2) || 0.00;
var iz1 = parseFloat(form18.iz.value);

//iv1 = (IV / AREA1) ^ 0.5
form19.iv.value = (Math.pow(IV / AREA01,0.5)).toFixed(2) || 0.00;;
var iv1 = parseFloat(form19.iv.value);

//J1 = FITA * ESPES ^ 3 / 3
form12.j.value = FITA * Math.pow(ESPES,3) / 3;
var J1 = parseFloat(form12.j.value);

//WT = J1 / ESPES
form14.wt.value =  J1 / ESPES; 
var WT = parseFloat(form14.wt.value);

//CGX = XB + ESPES / 2
form15.cgy.value = XB + ESPES / 2;
var CGY = parseFloat(form15.cgy.value);

//CGY = YB + ESPES / 2
form14.cgx.value = A1 / 2;
var CGX = parseFloat(form14.cgx.value);

//WX = IX / (A1 - CGY)
form18.wx.value = IX / (A1 - CGY);
var WX = parseFloat(form18.wx.value);

//AUX0 = BB + DB - XB
AUX0 = BB + DB - XB;

//If AUX0 > XB Then
//WY = IY / AUX0
//Else
//WY = IY / CGX
//End If
if(AUX0 > XB){
  WY = IY / AUX0;
}else{
  WY = IY / CGX;
}


//AUX2 = alfa / 2
//parametro = AUX2
//Indice = 3
//'CALL "rot_trig" USING parametro resultado indice
//rot_trig
//SENO2 = Resultado
AUX2 = alfa / 2;
parametro_07 = AUX2;
parametro_07_7 = parametro_07 * (pi / 180);
Resultado_07 = Math.sin(parametro_07_7);
SENO2 = Resultado_07;

//parametro = AUX2
//Indice = 2
//'CALL "rot_trig" USING parametro resultado indice
//rot_trig
//COS2 = Resultado
parametro_08 = AUX2;
parametro_08_8 = parametro_08 * (pi / 180);
Resultado_08 = Math.cos(parametro_08_8);
COS2 = Resultado_08;

//RO1 = YB / dblSENO
RO1 = YB / dblSENO;

//RO2 = (RO1 ^ 2 - YB ^ 2) ^ 0.5 - (RN / SENO2 * COS2 - RN)
RO2 = Math.pow(Math.pow(RO1,2) - Math.pow(YB,2),0.5) - (RN / SENO2 * COS2 - RN);

//RO3 = XB - RO2
RO3 = XB - RO2;

//W4 = dblSENO * RO3
W4 = dblSENO * RO3;

//W1 = (YB - CB) * DB
W1 = (YB - CB) * DB;
//W2 = W1 + (BB - XB) * CB
W2 = W1 + (BB - XB) * CB;

//W3 = W2 + YB * BB
W3 = W2 + YB * BB;

//W4 = W3 + W4 * 2 * Y
W4 = W3 + W4 * 2 * Y;

//W5 = W4 - (AB - YB) * BB
W5 = W4 - (AB - YB) * BB;

//W6 = W5 - XB * eb
W6 = W5 - XB * eb;

//RO1 = YB - CB
RO1 = YB - CB;

//RO4 = -(AB - YB)
RO4 = -(AB - YB);

//RO6 = -(AB - eb - YB)
RO6 = -(AB - eb - YB);

//JWY = ESPES / 3 * (W1 * RO1 * DB + (W1 * RO1 + W2 * YB) * CB + (W2 * YB + W3 * YB) * BB + (W3 * YB + W4 * RO4) * 2 * Y + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO4 + W6 * RO6) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * YB + W2 * RO1) * CB + (W2 * YB + W3 * YB) * BB + (W3 * RO4 + W4 * YB) * 2 * Y + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO6 + W6 * RO4) * eb)
JWY = ESPES / 3 * (W1 * RO1 * DB + (W1 * RO1 + W2 * YB) * CB + (W2 * YB + W3 * YB) * BB + (W3 * YB + W4 * RO4) * 2 * Y + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO4 + W6 * RO6) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * YB + W2 * RO1) * CB + (W2 * YB + W3 * YB) * BB + (W3 * RO4 + W4 * YB) * 2 * Y + (W4 * RO4 + W5 * RO4) * BB + (W5 * RO6 + W6 * RO4) * eb);

//x0 = -JWY / IX
form05.dtam_X.value = -JWY / IX;
var x0 = form05.dtam_X.value;

//RO1 = BB + DB - XB
RO1 = BB + DB - XB;

//RO2 = BB - XB
RO2 = BB - XB;

//RO3 = -XB
RO3 = -XB;

//JWX = ESPES / 3 * (W1 * RO2 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO2 + W3 * RO3) * BB + (W3 * RO3 + W4 * RO2) * 2 * Y + (W4 * RO2 + W5 * RO3) * BB + (W5 * RO3 + W6 * RO3) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO3 + W3 * RO2) * BB + (W3 * RO2 + W4 * RO3) * 2 * Y + (W4 * RO3 + W5 * RO2) * BB + (W5 * RO3 + W6 * RO3) * eb)
JWX = ESPES / 3 * (W1 * RO2 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO2 + W3 * RO3) * BB + (W3 * RO3 + W4 * RO2) * 2 * Y + (W4 * RO2 + W5 * RO3) * BB + (W5 * RO3 + W6 * RO3) * eb) + ESPES / 6 * (W1 * RO1 * DB + (W1 * RO2 + W2 * RO2) * CB + (W2 * RO3 + W3 * RO2) * BB + (W3 * RO2 + W4 * RO3) * 2 * Y + (W4 * RO3 + W5 * RO2) * BB + (W5 * RO3 + W6 * RO3) * eb);

//y0 = -JWX / IY
y0 = -JWX / IY;

//DIST = (x0 * x0 + y0 * y0) ^ 0.5
form05.dtam_distancia.value = x0;
var DIST = parseFloat(form05.dtam_distancia.value);

//IP = IX + IY + AREA1 * DIST ^ 2
form16.ip.value = IX + IY + AREA01 * DIST * DIST;
var IP = parseFloat(form16.ip.value);

//RO1 = (YB - y0) / dblSENO
RO1 = (YB - y0) / dblSENO;

//RO2 = (RO1 ^ 2 - (YB - y0) ^ 2) ^ 0.5 - (RN / SENO2 * COS2 - RN)
RO2 = (RO1 ^ 2 - (YB - y0) ^ 2) ^ 0.5 - (RN / SENO2 * COS2 - RN);

//RO3 = XB - x0
RO3 = XB - x0;

//If RO3 < 0 Then RO3 = -RO3
if(RO3 < 0){
  RO3 = -RO3;
}

//RO3 = RO2 - RO3
RO3 = RO2 - RO3

//If RO3 < 0 Then RO3 = -RO3
if(RO3 < 0){
  RO3 = -RO3;
}

//W4 = RO3 * (YB - y0) / RO1
W4 = RO3 * (YB - y0) / RO1;

//W1 = (YB - CB - y0) * DB
W1 = (YB - CB - y0) * DB;

//If W1 < 0 Then W1 = -W1
if(W1 < 0){
  W1 = -W1;
}

//AUX0 = YB - CB
AUX0 = YB - CB;

//If AUX0 < y0 Then W1 = -W1
if(AUX0 < y0){
  W1 = -W1;
}

//W2 = W1 + (BB - XB + x0) * CB
var W2_1 = BB*1 - XB*1 + x0*1;
var W2_2 = W2_1 * CB;
W2 = W1*1 + W2_2*1;

//W3 = W2 + (YB - y0) * BB
var W3_1 = YB - y0;
var W3_2 = W3_1 * BB;
W3 = W2*1 + W3_2*1;

//W4 = W3 + W4 * 2 * Y
var W4_1 = W4*1 * 2*1 * Y*1;
W4 = W3*1 + W4_1*1;

//W5 = W4 - (AB - YB + y0) * BB
var W5_1 = AB*1 - YB*1 + y0*1;
var W5_2 = W5_1 * BB;
W5 = W4*1 - W5_2*1;

//W6 = W5 - (BB - XB + x0) * eb
var W6_1 = BB*1 - XB*1 + x0*1;
var W6_2 = W6_1 * eb;
W6 = W5*1 - W6_2*1;

//WN0 = ESPES / (2 * AREA1) * (W1 * DB + (W1 + W2) * CB + (W2 + W3) * BB + (W3 + W4) * 2 * Y + (W4 + W5) * BB + (W5 + W6) * eb)
WN0 = ESPES / (2 * AREA01) * (W1 * DB + (W1 + W2) * CB + (W2 + W3) * BB + (W3 + W4) * 2 * Y + (W4 + W5) * BB + (W5 + W6) * eb);

//WN1 = WN0 - W1
WN1 = WN0 - W1;

//WN2 = WN0 - W2
WN2 = WN0 - W2;

//WN3 = WN0 - W3
WN3 = WN0 - W3;

//WN4 = WN0 - W4
WN4 = WN0 - W4;

//WN5 = WN0 - W5
WN5 = WN0 - W5;

//WN6 = WN0 - W6
WN6 = WN0 - W6;

//Cw = ESPES / 3 * ((WN0 * WN0 + WN1 * WN1 + WN0 * WN1) * DB + (WN1 * WN1 + WN2 * WN2 + WN1 * WN2) * CB  + (WN2 * WN2 + WN3 * WN3 + WN2 * WN3) * BB + (WN3 * WN3 + WN4 * WN4 + WN3 * WN4) * 2 * Y + (WN4 * WN4 + WN5 * WN5 + WN4 * WN5) * BB + (WN5 * WN5 + WN6 * WN6 + WN5 * WN6) * eb)
form16.cw.value = ESPES / 3 * ((WN0 * WN0 + WN1 * WN1 + WN0 * WN1) * DB + (WN1 * WN1 + WN2 * WN2 + WN1 * WN2) * CB  + (WN2 * WN2 + WN3 * WN3 + WN2 * WN3) * BB + (WN3 * WN3 + WN4 * WN4 + WN3 * WN4) * 2 * Y + (WN4 * WN4 + WN5 * WN5 + WN4 * WN5) * BB + (WN5 * WN5 + WN6 * WN6 + WN5 * WN6) * eb);
var Cw = parseFloat(form16.cw.value);

//ALFA_AUX = alfa
//ALFA_AUX1 = alfa - ALFA_AUX
//ALFA_AUX1 = ALFA_AUX1 * 60
//TETA_AUX = TETA
//TETA_AUX1 = TETA - TETA_AUX
//TETA_AUX1 = TETA_AUX1 * 60






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