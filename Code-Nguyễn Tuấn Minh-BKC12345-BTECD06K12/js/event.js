
function GetValue(){
    console.log(this.title);
}

function GetValue2(){
    console.log(this.value);
}
var button = document.querySelector('#btn-title');
button.addEventListener('click',GetValue);

var studentName = document.querySelector('#txt-name')
studentName.addEventListener('input',GetValue2);

var className = document.querySelector('#txt-classname')
className.addEventListener('change',GetValue2);