function changeBackgroundColor() {
    var element = document.getElementById("targetElement");
    var randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + 
                      Math.floor(Math.random() * 256) + ',' + 
                      Math.floor(Math.random() * 256) + ')';
    element.style.backgroundColor = randomColor;
}