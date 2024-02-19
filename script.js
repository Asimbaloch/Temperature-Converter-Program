let tempvalue= document.getElementById('tempvalue');
let tocelcius= document.getElementById('tocelcius');
let tofahrenheit= document.getElementById('tofahrenheit');
let submit=document.getElementById('submit')
let result= document.getElementById('result')

let temp;
submit.onclick = function convert(){
    if (tocelcius.checked) {
        temp = Number(tempvalue.value);
        temp= (temp-32) /1.8;
        result.innerText= temp.toFixed(1) + 'C';

    }

    else if (tofahrenheit.checked) {
        temp = Number(tempvalue.value);
        temp= 1.8 * temp + 32;
        result.innerText= temp.toFixed(1) + 'C';

    }

    else {
        result.innerText='Please select the value. Thanks'
    }
    }



