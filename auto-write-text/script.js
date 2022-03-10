const text = "Hello! I'm Bhavesh, How you doin";

let index = 0;
function writeText(){
    document.body.innerHTML = text.slice(0,index);

    index++;

    if(index>text.length) {
        index = 0;
    }
}

setInterval(writeText, 150);