'use strict';
console.log(document);
const panelText = document.querySelector('.panel').innerText;
console.log(panelText);
document.querySelector('.panel').innerText = 'New text';
document.querySelector('.input').value = 'Text';
document.querySelector('.input').placeholder = 'Textb';

document.querySelector('.button').addEventListener('click', function () {
    const input = document.querySelector('input').value;

    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    console.log(input);
});

function submitForm() {
    const input = document.querySelector('input').value;

    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    //document.querySelector('.notification').style.display = 'block';
    //document.querySelector('.notification').classList.add('notification_active');
    document.querySelector('.notification').classList.remove('notification_hidden');
    //console.log(document.querySelector('.notification').getAttribute('class'));
    //document.querySelector('.notification').setAttribute('key', '1');


    ////это упражнение последнее
    const textString = JSON.stringify({
        text: input
    });
    localStorage.setItem('text', textString);
}
//function changedClick() {
//    submitForm();
//}

function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm();
    };
};
document.querySelector('.input').addEventListener('keydown', (e) => {
    //console.log(e);
    if (e.code == 'Enter') {
        submitForm();
        console.log('Enter');
    }
});
console.log(document.querySelector('.one').innerText);
console.log(document.querySelector('.one ~ div').innerText);
console.log(document.querySelectorAll('.one')[0].innerText);
console.log(document.querySelectorAll('.one')[1].innerText);
console.log(document.getElementById('two').innerText);
console.log(document.querySelector('[user-id="4"]').innerText);

const textTest = "huyisos"
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
//newElement.innerText = 'huepka';
newElement.innerHTML = `
<div>${textTest}</div>
`
document.querySelector('.test').appendChild(newElement);

//Local storage 
localStorage.setItem('token', 'asdadas');
localStorage.setItem('token2', 1);
localStorage.setItem('token1', true);
const token1 = localStorage.getItem('token1')
console.log(typeof token1)
localStorage.removeItem('token1');
localStorage.clear();
//JSON

const obj = JSON.parse('{ "a": 1 }');
console.log(obj);
const str = JSON.stringify(obj);
console.log(str); 