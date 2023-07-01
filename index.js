let string = "";
let buttons = document.querySelectorAll('.class');
let oldString;

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string
            oldString=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
        document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'M+'){
            string = eval(parseInt(oldString) + parseInt(string));
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'M-'){
            string = eval(parseInt(oldString) - parseInt(string));
            document.querySelector('input').value = string;
        }
        else{
            string = string+ e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})