const text = document.getElementById('java-typing');
const prog = 'JAVA BACKEND DEVELOPER';
let idx = 1;

setInterval(write, 205);

function write(){
    text.innerText = prog.slice(0,idx);
    idx ++;
    if (idx > prog.length) {
        
        idx=1;
    }

}