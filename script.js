let icon = document.getElementById("icon");

icon.onclick = () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "/resources/img/sun.png";
    } else {
        icon.src = "/resources/img/moon.png";
    }
}