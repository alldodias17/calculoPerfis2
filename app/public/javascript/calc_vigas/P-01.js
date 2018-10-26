
window.onload = function () {
    document.getElementById("AuxComp1").focus();
  };
  
  $(document).ready(function () {
    $("#AuxComp1").focus(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#AuxCargP").focus(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    $("#AuxTenes").blur(function () {
      $(this).css("background-color", "#F0F8FF");
    });
    
  });
    function validar() {
      var form01 = document.getElementById("form01");
      var AuxComp1 = form01.AuxComp1;
      var re_AuxComp1 = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxComp1.test(AuxComp1.value)) {
        AuxComp1.value = AuxComp1.value.replace(re_AuxComp1, "$1$2,00");
      
      }
      var form01 = document.getElementById("form01");
      var AuxCargP = form01.AuxCargP;
      var re_AuxCargP = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxCargP.test(AuxCargP.value)) {
        AuxCargP.value = AuxCargP.value.replace(re_AuxCargP, "$1$2,00");
      
      }
      var form03 = document.getElementById("form03");
      var AuxTenes = form03.AuxTenes;
      var re_AuxTenes = /^([0-9]{0,3})([0-9]{0,3})$/;
      if (re_AuxTenes.test(AuxTenes.value)) {
        AuxTenes.value = AuxTenes.value.replace(re_AuxTenes, "$1$2,00");
      
      }
  
    
  
  
    var str = document.getElementById("AuxComp1").value;
    var res = str.replace(",", ".");
    document.getElementById("AuxComp1").value = res;
    var str = document.getElementById("AuxCargP").value;
    var res = str.replace(",", ".");
    document.getElementById("AuxCargP").value = res;
    var str = document.getElementById("AuxTenes").value;
    var res = str.replace(",", ".");
    document.getElementById("AuxTenes").value = res;
    
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
  
    var a = parseFloat(0.6);
    var b = parseFloat(0.4);
    
    //Aux_m = CDbl(AuxCargP.Value) * CDbl(AuxComp1.Value)
    var AuxCargP = parseFloat(id('AuxCargP').value);
    var AuxComp1 = parseFloat(id('AuxComp1').value);
    id('txtMomento').value = (AuxCargP * AuxComp1).toFixed(2);
    var txtMomento = parseFloat(id('txtMomento').value);
    
    //Aux_Wx = Aux_m / (AuxTenes.Value * 0.6)
    var txtMomento = parseFloat(form02.txtMomento.value);
    var AuxTenes = parseFloat(form03.AuxTenes.value);
    form03.txtWx.value = (txtMomento / (AuxTenes * 0.6)).toFixed(2);
    var txtWx = parseFloat(form03.txtWx.value);
    
    
    //Aux_Ix = (AuxCargP.Value * AuxComp1.Value ^ 2) / 315
    form03.txtIx.value = (AuxCargP * AuxComp1**2) / 315;
    var txtIx = parseFloat(form03.txtIx.value);
    
    //Aux_Fc = AuxCargP.Value / AuxTenes.Value / 0.4
     form04.xtAreaFC.value =   (AuxCargP / AuxTenes / b).toFixed(2);
     var xtAreaFC = parseFloat(form04.xtAreaFC.value);    
        
          
          window.onload = function () {
            id('copiar').onclick = function () {
              soma();
            }
          }
        
    
    window.onload = function () {
      id('copiar').onclick = function () {
        soma();
      }
    }
  }