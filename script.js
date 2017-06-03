document.body.style.backgroundColor = "red"

document.getElementById("about").style.backgroundColor = "blue";

document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML = "Johnny";
document.getElementById("favorites").innerHTML = "Coding!";
document.getElementById("hometown").innerHTML = "New Jersey";

var items = document.getElementsByTagName('li');
   for (var i = 0; i < items.length; i++) {
      items[i].className = 'listitem';
      items[i].style.color = "red";
      items[i].style.backgroundColor = "white";
}

var pic = document.createElement("img");

pic.src = "http://wallpapercave.com/wp/yWsIKGd.jpg";

document.body.appendChild(pic);