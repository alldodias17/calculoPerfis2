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
    var form03 = document.getElementById("form01");
    var etam_D = form01.etam_D;
    var re_etam_D = /^([0-9]{0,3})([0-9]{0,3})$/;
    if (re_etam_D.test(etam_D.value)) {
      etam_D.value = etam_D.value.replace(re_etam_D, "$1$2,00");
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
var i = parseFloat(1.5);


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

//A2 = A1 - 2 * ALTDB
var A1 = parseFloat(form04.dtam_A.value);
form09.dtam_a.value = (A1 - 2 * ALTDB).toFixed(2) || 0.00;
var A2 = parseFloat(form09.dtam_a.value);

//B2 = B1 - 2 * ALTDB
var B1 = parseFloat(form05.dtam_B.value);
form09.dtam_b.value = (B1 - 2 * ALTDB).toFixed(2) || 0.00;
var B2 = parseFloat(form09.dtam_b.value);

//C2 = C1 - ALTDB
var C1 = form03.etam_C.value
form10.dtam_c.value = form03.etam_C.value - ALTDB;
var C2 = parseFloat(form10.dtam_c.value);

//D2 = D1 - ALTDB
var D1 = form01.etam_D.value;
form11.dtam_d.value= D1 - ALTDB;
var D2 = parseFloat(form11.dtam_d.value);

//AB = A1 - ESPES
form05.dtam_a1.value = (A1 - ESPES).toFixed(2) || 0.00;
var AB = parseFloat(form05.dtam_a1.value);

//BB = B1 - ESPES
form06.dtam_bbarra.value = (B1 - ESPES).toFixed(2) || 0.00;
var BB = parseFloat(form06.dtam_bbarra.value);

//CB = C1 - ESPES / 2
form07.dtam_ccc.value = C1 - ESPES / 2;
var CB = parseFloat(form07.dtam_ccc.value);

//DB = D1 - ESPES / 2
form07.dtam_dd.value = DB = D1 - ESPES / 2;
var DB = parseFloat(form07.dtam_dd.value);

//FITA = C2 + 3 * U + B2 + A2 + D2
form10.largura_da.value = C2 + 3 * U + B2 + A2 + D2;
var FITA = parseFloat(form10.largura_da.value);

//AREA1 = FITA * ESPES
form19.area_total.value = (FITA * ESPES).toFixed(2) || 0.00;
var AREA01 = parseFloat(form19.area_total.value);

//AREAU = AREA1
id('area_util').value = id('area_total').value;

//X = (C2 * ESPES * (DB + BB) + U * ESPES * (DB + BB - RN + 0.637 * RN) + B2 * ESPES * (D2 + 2 * RN + B2 / 2) + U * ESPES * (DB + RN - 0.637 * RN) + A2 * ESPES * DB + U * ESPES * (DB - RN + 0.637 * RN) + D2 * ESPES * D2 / 2) / AREA1
form07.dtam_xx.value = (C2 * ESPES * (DB + BB) + U * ESPES * (DB + BB - RN + e * RN) + B2 * ESPES * (D2 + 2 * RN + B2 / 2) + U * ESPES * (DB + RN - e * RN) + A2 * ESPES * DB + U * ESPES * (DB - RN + e * RN) + D2 * ESPES * D2 / 2) / AREA01;
var X = parseFloat(form07.dtam_xx.value);

//CGX = X
form14.cgx.value = X;
var CGX = parseFloat(form14.cgx.value);


//If A1 = B1 And C1 = D1 Then
//Y = X
//Else
//Y = (C2 * ESPES * C2 / 2 + U * ESPES * (CB - RN + 0.637 * RN) + B2 * ESPES * CB + U * ESPES * (C2 + 2 * RN - 0.637 * RN) + A2 * ESPES * (C2 + 2 * RN + A2 / 2) + U * ESPES * (CB + AB - RN + 0.637 * RN) + D2 * ESPES * (CB + AB)) / AREA1
if(A1 == B1 && C1 == D1){
  form09.dtamy.value  = X; 
}else{
  form09.dtamy.value = (C2 * ESPES * C2 / 2 + U * ESPES * (CB - RN + e * RN) + B2 * ESPES * CB + U * ESPES * (C2 + 2 * RN - e * RN) + A2 * ESPES * (C2 + 2 * RN + A2 / 2) + U * ESPES * (CB + AB - RN + e * RN) + D2 * ESPES * (CB + AB)) / AREA01;
  var Y = parseFloat(form09.dtamy.value);
}

//CGY = Y
form15.cgy.value = Y;
var CGY = parseFloat(form15.cgy.value);

//IX = ESPES * C2 ^ 3 / 12 + 3 * 0.149 * RN * ESPES + B2 * ESPES ^ 3 / 12 + ESPES * A2 ^ 3 / 12 + D2 * ESPES ^ 3 / 12 + C2 * ESPES * (Y - C2 / 2) ^ 2 + U * ESPES * (Y - CB + RN - 0.637 * RN) ^ 2 + B2 * ESPES * (Y - CB) ^ 2 + U * ESPES * (Y - CB - RN + 0.637 * RN) ^ 2 + A2 * ESPES * (-Y +  CB + RN + A2 / 2) ^ 2 + U * ESPES * (-Y + CB - RN + AB + 0.637 * RN) ^ 2 + D2 * ESPES * (CB + AB - Y) ^ 2
form12.ixx.value =  ESPES * Math.pow(C2,3) / 12 + 3 * 0.149 * RN * ESPES + B2 * Math.pow(ESPES,3) / 12 + ESPES * Math.pow(A2,3) / 12 + D2 * Math.pow(ESPES,3) / 12 + C2 * ESPES * Math.pow(Y - C2 / 2,2) + U * ESPES * Math.pow(Y - CB + RN - e * RN,2) + B2 * ESPES * Math.pow(Y - CB,2) + U * ESPES * Math.pow(Y - CB - RN + e * RN,2) + A2 * ESPES * Math.pow(-Y +  CB + RN + A2 / 2,2) + U * ESPES * Math.pow(-Y + CB - RN + AB + e * RN,2) + D2 * ESPES * Math.pow(CB + AB - Y,2);
var IX = parseFloat(form12.ixx.value);


//End If
//If A1 = B1 And C1 = D1 Then
//IY = IX
//Else
//IY = ESPES * D2 ^ 3 / 12 + 3 * 0.149 * RN * ESPES + A2 * ESPES ^ 3 / 12 + ESPES * B2 ^ 3 / 12 + C2 * ESPES ^ 3 / 12 + D2 * ESPES * (X - D2 / 2) ^ 2 + U * ESPES * (X - DB + RN - 0.637 * RN) ^ 2 + A2 * ESPES * (X - DB) ^ 2 + U * ESPES * (X - DB - RN + 0.637 * RN) ^ 2 + B2 * ESPES * (-X + DB + RN + B2 / 2) ^ 2 + U * ESPES * (-X  - RN + DB + BB + 0.637 * RN) ^ 2 + C2 * ESPES * _(DB + BB - X) ^ 2
if(A1 == B1 && C1 == D1){
  form13.iyy.value = IX;
  var IY = parseFloat(form13.iyy.value);
}else{
  form13.iyy.value = ESPES * Math.pow(D2,3) / 12 + 3 * 0.149 * RN * ESPES + A2 * Math.pow(ESPES,3) / 12 + ESPES * Math.pow(B2,3) / 12 + C2 * Math.pow(ESPES,3) / 12 + D2 * ESPES * Math.pow(X - D2 / 2,2) + U * ESPES * Math.pow(X - DB + RN - 0.637 * RN,2) + A2 * ESPES * Math.pow(X - DB,2) + U * ESPES * Math.pow(X - DB - RN + 0.637 * RN,2) + B2 * ESPES * Math.pow(-X + DB + RN + B2 / 2,2) + U * ESPES * Math.pow(-X  - RN + DB + BB + 0.637 * RN,2) + C2 * ESPES * Math.pow(DB + BB - X,2);
  var IY = parseFloat(form13.iyy.value);
}

//ixy = C2 * ESPES * (DB + BB - X) * (Y - C2 / 2) + _U * ESPES * (DB + BB - RN + 0.637 * RN - X) * (Y - CB + RN - 0.637 * RN) + B2 * ESPES * (X - D2 - 2 * RN - B2 / 2) * (Y - CB) + U * ESPES * (-X + D2 + 2 * RN - 0.637 * RN) * (Y - CB - RN + 0.637 * RN) + A2 * ESPES * (DB - X) * (Y -CB - AB / 2) + U * ESPES * (DB - RN + 0.637 * RN - X) * (Y - CB - AB + RN - 0.637 * RN) + D2 * ESPES * (D2 / 2 - X) * (CB + AB - Y)
form17.lxy.value = C2 * ESPES * (DB + BB - X) * (Y - C2 / 2) + U * ESPES * (DB + BB - RN + e * RN - X) * (Y - CB + RN - e * RN) + B2 * ESPES * (X - D2 - 2 * RN - B2 / 2) * (Y - CB) + U * ESPES * (-X + D2 + 2 * RN - e * RN) * (Y - CB - RN + e * RN) + A2 * ESPES * (DB - X) * (Y -CB - AB / 2) + U * ESPES * (DB - RN + e * RN - X) * (Y - CB - AB + RN - e * RN) + D2 * ESPES * (D2 / 2 - X) * (CB + AB - Y);
var ixy = parseFloat(form17.lxy.value);


//End If
//If A1 = B1 And C1 = D1 Then
//IV = IX + ixy
//iz = IX - ixy
//Else
//IV = (IX + IY) / 2 + (((IX - IY) / 2) * ((IX - IY) / 2) + ixy * ixy) ^ 0.5
//iz = (IX + IY) / 2 - (((IX - IY) / 2) * ((IX - IY) / 2) + ixy * ixy) ^ 0.5
//W1 = CB * (X - DB - BB)
//W2 = W1 + BB * (Y - CB)
//W3 = W2 + AB * (X - DB)
//W4 = W3 + DB * (Y - CB - AB)
//RO1 = DB + BB - X
//RO3 = DB - X
//RO4 = -X
//JWX = (W1 * RO1 * ESPES * CB + (W1 * RO1 + W2 * RO3) * ESPES * BB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO3 + W4 * RO4) * ESPES * DB) / 3 + (W1 * RO1 * ESPES * CB + (W1 * RO3 + W2 * RO1) * ESPES * BB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO4 + W4 * RO3) * ESPES * DB) / 6
//y0 = -JWX / IY
//End If
if(A1 == B1 && C1 == D1){
  form15.lv.value = IX + ixy;
  var IV = parseFloat(form15.lv.value);
  iz = IX - ixy;
}else{
  form15.lv.value = (IX + IY) / 2 + Math.pow(((IX - IY) / 2) * ((IX - IY) / 2) + ixy * ixy,0.5);
  var IV = parseFloat(form15.lv.value);
  form14.lz.value = (IX + IY) / 2 - Math.pow(((IX - IY) / 2) * ((IX - IY) / 2) + ixy * ixy,0.5);
  var iz = parseFloat(form14.lz.value);
  
  W1 = CB * (X - DB - BB);
  parseFloat(W1);

  W2 = W1 + BB * (Y - CB);
  parseFloat(W2);

  W3 = W2 + AB * (X - DB);
  parseFloat(W3);

  W4 = W3 + DB * (Y - CB - AB);
  parseFloat(W4);

  RO1 = DB + BB - X;
  parseFloat(RO1);

  RO3 = DB - X;
  parseFloat(RO3);

  RO4 = -X;
  parseFloat(-X);

  JWX = (W1 * RO1 * ESPES * CB + (W1 * RO1 + W2 * RO3) * ESPES * BB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO3 + W4 * RO4) * ESPES * DB) / 3 + (W1 * RO1 * ESPES * CB + (W1 * RO3 + W2 * RO1) * ESPES * BB + (W2 * RO3 + W3 * RO3) * ESPES * AB + (W3 * RO4 + W4 * RO3) * ESPES * DB) / 6;
  parseFloat(JWX);

  y0 = -JWX / IY
  parseFloat(y0);
}

//If A1 = B1 And C1 = D1 Then
//x0 = -y0
//Else
//RO1 = Y - CB
//RO3 = Y - CB - AB
//JWY = (W1 * RO1 * ESPES * CB + (W1 * RO1 + W2 * RO1) * ESPES * BB + (W2 * RO1 + W3 * RO3) * ESPES * AB + (W3 * RO3 + W4 * RO3) * ESPES * DB) / 3 + (W1 * Y * ESPES * CB + (W1 * RO1 + W2 * RO1) * ESPES * BB + (W2 * RO3 + W3 * RO1) * ESPES * AB + (W3 * RO3 + W4 * RO3) * ESPES * DB) / 6
//x0 = JWY / IX
//DIST = (x0 * x0 + y0 * y0) ^ 0.5
//IP = IX + IY + AREA1 * DIST ^ 2
//AUX2 = (CB + AB) / 2
//End If
if(A1 == B1 && C1 == D1){
  x0 = (-y0);
  parseFloat(x0);
}else{
  RO1 = Y - CB;
  parseFloat(RO1);
  RO3 = Y - CB - AB;
  parseFloat(RO3);
  JWY = (W1 * RO1 * ESPES * CB + (W1 * RO1 + W2 * RO1) * ESPES * BB + (W2 * RO1 + W3 * RO3) * ESPES * AB + (W3 * RO3 + W4 * RO3) * ESPES * DB) / 3 + (W1 * Y * ESPES * CB + (W1 * RO1 + W2 * RO1) * ESPES * BB + (W2 * RO3 + W3 * RO1) * ESPES * AB + (W3 * RO3 + W4 * RO3) * ESPES * DB) / 6;
  parseFloat(JWY);
  x0 = JWY / IX;
  parseFloat(x0); 
  form05.dtam_distancia.value = (Math.pow(x0 * x0 + y0 * y0,0.5)).toFixed(2) || 0.00;
  var DIST = parseFloat(form05.dtam_distancia.value);
  form16.ip.value = IX + IY + AREA01 * Math.pow(DIST,2);
  var IP = parseFloat(form16.ip.value);
  AUX2 = (CB + AB) / 2; 
  parseFloat(AUX2);
}



//If AUX2 > Y Then
//WX = IX / (CB + AB - Y + ESPES / 2)
//Else
//WX = IX / Y
//End If
  if (AUX2 > Y){  (form18.wx.value = IX / (CB + AB - Y + ESPES / 2));
    var Wx = parseFloat(form18.wx.value);
  }
  else{
    form18.wx.value = IX / Y;
    var Wx = parseFloat(form18.wx.value);
}



//AUX2 = (DB + BB) / 2
AUX2 = (DB + BB) / 2;
parseFloat(AUX2);

//If AUX2 > X Then
//WY = IY / (DB + BB - X + ESPES / 2)
//Else
//WY = IY / X
//End If
  if(AUX2 > X) {(form13.wy.value = IY / (DB + BB - X + ESPES / 2))
    var WY = parseFloat(form13.wy.value);
  }
  else{
    form13.wy.value = IY / X;
    
}


//WT = FITA * ESPES ^ 2 / 3
form14.wt.value = FITA * Math.pow(ESPES,2) / 3;
var WT = parseFloat(form14.wt.value);

//J1 = WT * ESPES
form12.j.value = WT * ESPES;
var J1 = parseFloat(form12.j.value);

//IX1 = (IX / AREA1) ^ 0.5
form16.ixis.value = Math.pow(IX / AREA01,0.5);
var IX1 = parseFloat(form16.ixis.value);

//IY1 = (IY / AREA1) ^ 0.5
form17.iy.value = Math.pow(IY / AREA01,0.5);
var IY1 = parseFloat(form17.iy.value);

//iz1 = (iz / AREA1) ^ 0.5
form18.iz.value = Math.pow(iz / AREA01,0.5);
var iz1 = parseFloat(form18.iz.value);

//iv1 = (IV / AREA1) ^ 0.5
form19.iv.value = Math.pow(IV / AREA01,0.5);
var iv1 = parseFloat(form19.iv.value);

//RO1 = -(DB + BB - X - x0)
RO1 = -(DB + BB - X - x0);
parseFloat(RO1);

//RO2 = Y - y0 - CB
RO2 = Y - y0 - CB;
parseFloat(RO2);

//RO3 = X + x0 - DB
RO3 = X + x0 - DB;
parseFloat(RO3);

//If RO3 < 0 Then RO3 = -RO3
//RO4 = Y - y0 - CB - AB
//W1 = RO1 * CB
//W2 = W1 + RO2 * BB
if (RO3 < 0){ 
  (RO3 = (-RO3))
  parseFloat(RO3);
}
else{
  RO4 = Y - y0 - CB - AB
  parseFloat(RO4);
  W1 = RO1 * CB
  parseFloat(W1);
  W2 = W1 + RO2 * BB
  parseFloat(W2);
}


//If x0 < 0 Then x0 = -x0
  if(x0 < 0){
  (form05.dtam_X.value = (-x0));
  parseFloat(x0);
  }

//AUX0 = CGX - DB
AUX0 = CGX - DB;
parseFloat(AUX0);

//If AUX0 > x0 Then
//W3 = W2 + RO3 * AB
//Else
//W3 = W2 - RO3 * AB
//End If
if (AUX0 > x0){
  (W3 = W2 + RO3 * AB);
  parseFloat(W3);
}
else{
  W3 = W2 - RO3 * AB
  parseFloat(W3);
} 


//W4 = W3 + RO4 * DB
W4 = W3 + RO4 * DB;
parseFloat(W4);

//WN0 = (W1 * ESPES * CB + (W1 + W2) * ESPES * BB + (W2 + W3) * ESPES * AB + (W3 + W4) * ESPES *  DB) / (2 * AREA1)
WN0 = (W1 * ESPES * CB + (W1 + W2) * ESPES * BB + (W2 + W3) * ESPES * AB + (W3 + W4) * ESPES *  DB) / (2 * AREA01);
parseFloat(WN0);

//WN1 = WN0 - W1
WN1 = WN0 - W1;
parseFloat(WN1);

//WN2 = WN0 - W2
WN2 = WN0 - W2;
parseFloat(WN2);

//WN3 = WN0 - W3
WN3 = WN0 - W3;
parseFloat(WN3);

//WN4 = WN0 - W4
WN4 = WN0 - W4;
parseFloat(WN4);

//Cw = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * ESPES * CB + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * ESPES * BB + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * ESPES * AB + (WN3 * WN3 + WN3 * WN4 + WN4 * WN4) * ESPES * DB) / 3
form16.cw.value = ((WN0 * WN0 + WN0 * WN1 + WN1 * WN1) * ESPES * CB + (WN1 * WN1 + WN1 * WN2 + WN2 * WN2) * ESPES * BB + (WN2 * WN2 + WN2 * WN3 + WN3 * WN3) * ESPES * AB + (WN3 * WN3 + WN3 * WN4 + WN4 * WN4) * ESPES * DB) / 3;

//If A1 = B1 And C1 = D1 Then
//TETA = 45
//Else
//IXY1 = ixy
//AUX2 = 2 * IXY1 / (IX - IY)
//parametro = AUX2
//Indice = 1
//rot_trig 'Parametro, Indice
//'CALL "rot_trig" USING parametro resultado indice
//ATAN1 = Resultado
//TETA = 90 - ATAN1 / 2
//End If
if(A1 == B1 && C1 == D1){
  TETA = 45
}
 else{
  pi = 4 * Math.atan(1);
  IXY1 = ixy;
  AUX2 = 2 * IXY1 / (IX - IY);
  parametro_01 = AUX2;
  Resultado_01 = Math.atan(parametro_01);
  Resultado_01_1 = Resultado_01 / (pi / 180);
  ATAN1 = Resultado_01_1;
  form18.teta.value = 90 - ATAN1 / 2;
  var TETA = parseFloat(form18.teta.value);
}


//TETA_AUX = TETA
//TETA_AUX1 = TETA - TETA_AUX
//TETA_AUX1 = TETA_AUX1 * 60
//KGM = AREA1 * 0.001 * 7.85
//XB = X
//YB = Y
TETA_AUX = TETA;
TETA_AUX1 = TETA - TETA_AUX;
TETA_AUX1 = TETA_AUX1 * 60;
form04.d_Peso.value = (AREA01 * 0.001 * 7.85).toFixed(2) || 0.00;
var KGM = parseFloat(form04.d_Peso.value);
XB = X;
YB = Y;




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
      dtam_d.value = dtam_d.value.replace(re_dtam_d, "$1$2.00");
    }
    var re_dtam_e = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_e.test(dtam_e.value)) {
      dtam_e.value = dtam_e.value.replace(re_dtam_e, "$1$20.00");
    }
    var re_dtam_dd = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtam_dd.test(dtam_dd.value)) {
      dtam_dd.value = dtam_dd.value.replace(re_dtam_dd, "$1$2.00");
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
    var re_dtamy = /^([0-9]{0,4})([0-9]{0,4})$/;
    if (re_dtamy.test(dtamy.value)) {
      dtamy.value = dtamy.value.replace(re_dtamy, "$1$20.00");
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
      ixx.value = ixx.value.replace(ixx_bbb, "$1$20.00");
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