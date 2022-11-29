window.addEventListener("load",start1,false);
function start1(){
var post1= document.getElementById("post1");
post1.addEventListener("click",objavi1,false);
}

function objavi1()
{
    var commentBoxValue1=document.getElementById("comment-box1").value;
    var li1= document.createElement("li");
    var text1 = document.createTextNode(commentBoxValue1);
    li1.appendChild(text1);
    document.getElementById("unordered1").appendChild(li1);
}

window.addEventListener("load",start2,false)
function start2(){
var post2= document.getElementById("post2");
post2.addEventListener("click",objavi2,false);
}

function objavi2()
{
    var commentBoxValue2= document.getElementById("comment-box2").value;
    var li2= document.createElement("li");
    var text2= document.createTextNode(commentBoxValue2);
    li2.appendChild(text2);
    document.getElementById("unordered2").appendChild(li2);
}

window.addEventListener("load",start3,false);
function start3(){
var post3= document.getElementById("post3");
post3.addEventListener("click",objavi3,false);
}

function objavi3()
{
    var commentBoxValue3= document.getElementById("comment-box3").value;
    var li3= document.createElement("li");
    var text3= document.createTextNode(commentBoxValue3);
    li3.appendChild(text3);
    document.getElementById("unordered3").appendChild(li3);
}

window.addEventListener("load",start4,false);
function start4(){
var post4= document.getElementById("post4");
post4.addEventListener("click",objavi4,false);
}

function objavi4()
{
    var commentBoxValue4=document.getElementById("comment-box4").value;
    var li4= document.createElement("li");
    var text4 = document.createTextNode(commentBoxValue4);
    li4.appendChild(text4);
    document.getElementById("unordered4").appendChild(li4);
}

window.addEventListener("load",start5,false)
function start5(){
var post5= document.getElementById("post5");
post5.addEventListener("click",objavi5,false);
}

function objavi5()
{
    var commentBoxValue5= document.getElementById("comment-box5").value;
    var li5= document.createElement("li");
    var text5= document.createTextNode(commentBoxValue5);
    li5.appendChild(text5);
    document.getElementById("unordered5").appendChild(li5);
}

window.addEventListener("load",start6,false);
function start6(){
var post6= document.getElementById("post6");
post6.addEventListener("click",objavi6,false);
}

function objavi6()
{
    var commentBoxValue6= document.getElementById("comment-box6").value;
    var li6= document.createElement("li");
    var text6= document.createTextNode(commentBoxValue6);
    li6.appendChild(text6);
    document.getElementById("unordered6").appendChild(li6);
}

function myFunction1(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  function myFunction2(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  function myFunction3(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  function myFunction4(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  function myFunction5(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  function myFunction6(x) {
    x.classList.toggle("fa-thumbs-down");
  }

