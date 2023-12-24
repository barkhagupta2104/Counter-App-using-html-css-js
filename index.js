const value = document.querySelector('#value');

let cnt =value.textContent;

let count = parseInt(cnt);

let increment = ()=> 
{
    count = count+1;
    value.textContent = count;
}


let decrement = ()=> 
{
    count = count-1;
    value.textContent = count;
}