var day = 0;
let count;

let toggle = document.querySelector('.toggle');
let btn = document.querySelector('button');
let mode = true;
let blocker = true;

btn.addEventListener('click',function(){
    if(mode===true){
        toggle.style.transform = "translate(80px,0px)";
        toggle.textContent = "I";
        mode = false;
    } else {
        toggle.style.transform = "translate(0px,0px)";
        toggle.textContent = "O";
        mode = true;
    };
})

function block(pageName) {
    
    const div = document.createElement('div');
    // document.body.innerHTML = "<div></div>"

    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.background = "white";
    div.style.zIndex = "9999";
    div.style.opacity = "1";
    div.style.color = "black";
    div.style.fontSize = "100px";
    div.style.textAlign = "center";
    div.style.justifySelf = "center";
    div.style.alignSelf = "center";
    div.style.padding = "150px 0px 0px 0px";
    day = localStorage.getItem("cantidad");
    count = parseInt(day)+1;
    // count = 0;
    localStorage.setItem("cantidad",count);
    div.textContent = `Stop ${pageName} (${count}). WORK!`;
    const cuerpo = document.body;
    cuerpo.appendChild(div);

}

switch (window.location.hostname) {
    case "www.youtube.com":
        block("Youtube");
        break;
    case "www.x.com":
        block("Tiwtter");
        break;
    case "www.linkedin.com":
        block("Linkedin");
        break;
    case "twitter.com":
        block("Twitter");
        break;
    case "www.instagram.com":
        block("Instagram");
        break;
    case "www.xvideos.com":
        block("Porn");
        break;
}

