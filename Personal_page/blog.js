window.addEventListener("load",start,false);

function start()
{
    var submit=document.getElementById("submit");
    submit.addEventListener("click",blog,false);
}

function blog()
{

    var textBox=document.getElementById("post").value;
    var paragraph=document.createElement("p");
    var text=document.createTextNode(textBox);
    paragraph.appendChild(text);
    document.getElementById("objava").appendChild(paragraph);

    var dateI=document.getElementById("data").value;
    var sec=document.createElement("div");
    var dateO=document.createTextNode(dateI);
    sec.appendChild(dateO);
    paragraph.appendChild(sec);
}