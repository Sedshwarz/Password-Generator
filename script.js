var opts = document.querySelector("#list").querySelectorAll("li");
var row = document.querySelector(".row");
var generate = document.getElementById("generate");
var len = document.getElementById("length");
var ary = [];
var result = document.getElementById("result");
var copied = document.getElementById("copied");




for (var i = 0; i < opts.length; i++) {
  opts[i].onclick = function(){
    this.classList.toggle("checked");

    if (opts[0].classList.contains("checked")) {
      row.children[0].disabled = false;
      row.children[2].disabled = false;
      row.children[4].disabled = false;
    }else {
      row.children[0].disabled = true;
      row.children[2].disabled = true;
      row.children[4].disabled = true;
    }
  }
}



generate.onclick = function(){
  if ((opts[0].classList.contains("checked") == false) && (opts[1].classList.contains("checked") == false) && (opts[2].classList.contains("checked") == false)) {
    alert("Please choose any option!");
  }else if ((len.value.trim() == "") || (Number.isInteger(Number(len.value.trim())) == false)) {
    len.focus();
  }else {

    ary = [];
    if (opts[0].classList.contains("checked")) {
      if (row.children[0].checked) {
        ary.push(uppercase);
      }else if (row.children[2].checked) {
        ary.push(lowercase);
      }else {
        ary.push(lowercase);
        ary.push(uppercase);
      }
    }

    if (opts[1].classList.contains("checked")){
      ary.push(numbers);
    }

    if (opts[2].classList.contains("checked")){
      ary.push(specials);
    }

    var password = ""; var array = ary; var leng = Number(len.value.trim());

    array = array.sort(() => Math.random() - 0.5);
    array = array.sort(() => Math.random() - 0.5);
    array = array.sort(() => Math.random() - 0.5);

    for (var x = 0; x < leng; x++) {
      var randomL = Math.floor(Math.random() * array.length);
      var random = Math.floor(Math.random() * array[randomL].length);
      password += array[randomL][random];
    }

    result.innerText = password;
  }
}




var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","y","z","w","x","q"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z","W","X","Q"];
var specials = ["!","?","$","#",".",",","/","[","]","<",">","|"];



document.getElementById("copy").onclick = function(){
  var area = document.createElement("textarea");
  document.body.appendChild(area);
  area.value = result.innerText;
  area.focus();
  area.select();
  document.execCommand('copy');
  area.remove();

  copied.style.opacity = "1";
  setTimeout(function(){copied.style.opacity = "0";},500)
}
