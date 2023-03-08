let output = "";
let buttons = document.querySelectorAll('button');
let screen = document.querySelector('#screen');
let arryButton = Array.from(buttons);
for(let button of arryButton){
    button.addEventListener('click',(e)=>{
        if(e.target.innerText == '='){
            screen.value = eval(output);
        }
        else if(e.target.innerText == 'AC'){
            output = "";
            screen.value = output;
        }
        else{
            output = output + e.target.innerText;
            screen.value = output;
        }
        
    })
}