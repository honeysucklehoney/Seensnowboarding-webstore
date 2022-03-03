console.log("hi");

var abouttab = document.getElementById('tab2');
var projecttab = document.getElementById('tab3');
var eventstab = document.getElementById('tab4');
var merchtab = document.getElementById('tab5');
var donatetab = document.getElementById('tab6');
var home = document.getElementById('tab1');


function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function popup2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

function popup3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}

function popup4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}

function popup5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
}

function popup6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show");
}

function popup7() {
  var popup = document.getElementById("myPopup7");
  popup.classList.toggle("show");
}

function popup8() {
  var popup = document.getElementById("myPopup8");
  popup.classList.toggle("show");
}

function openAbout()

{
  var abouttab = document.getElementById('tab2');
  var projecttab = document.getElementById('tab3');
  var eventstab = document.getElementById('tab4');
  var merchtab = document.getElementById('tab5');
  var donatetab = document.getElementById('tab6');
  var home = document.getElementById('tab1');
  home.style.display="none";


  abouttab.style.display ="block";
  projecttab.style.display ="none";
  eventstab.style.display ="none";
  merchtab.style.display ="none";
  donatetab.style.display ="none";
}


function openProjects()

{
  var abouttab = document.getElementById('tab2');
  var projecttab = document.getElementById('tab3');
  var eventstab = document.getElementById('tab4');
  var merchtab = document.getElementById('tab5');
  var donatetab = document.getElementById('tab6');
  var home = document.getElementById('tab1');

  home.style.display="none";
  abouttab.style.display ="none";
  projecttab.style.display ="flex";
  eventstab.style.display ="none";
  merchtab.style.display ="none";
  donatetab.style.display ="none";
}

function openEvents()

{
  var abouttab = document.getElementById('tab2');
  var projecttab = document.getElementById('tab3');
  var eventstab = document.getElementById('tab4');
  var merchtab = document.getElementById('tab5');
  var donatetab = document.getElementById('tab6');
  var home = document.getElementById('tab1');

  home.style.display="none";
  abouttab.style.display ="none";
  projecttab.style.display ="none";
  eventstab.style.display ="flex";
  merchtab.style.display ="none";
  donatetab.style.display ="none";
}

function openMerch()

{
  var abouttab = document.getElementById('tab2');
  var projecttab = document.getElementById('tab3');
  var eventstab = document.getElementById('tab4');
  var merchtab = document.getElementById('tab5');
  var donatetab = document.getElementById('tab6');
  var home = document.getElementById('tab1');

  home.style.display="none";
  abouttab.style.display ="none";
  projecttab.style.display ="none";
  eventstab.style.display ="none";
  merchtab.style.display ="block";
  donatetab.style.display ="none";
}

function openDonate()

{
  var abouttab = document.getElementById('tab2');
  var projecttab = document.getElementById('tab3');
  var eventstab = document.getElementById('tab4');
  var merchtab = document.getElementById('tab5');
  var donatetab = document.getElementById('tab6');
  var home = document.getElementById('tab1');

  home.style.display="none";
  abouttab.style.display ="none";
  projecttab.style.display ="none";
  eventstab.style.display ="none";
  merchtab.style.display ="none";
  donatetab.style.display ="flex";
}
