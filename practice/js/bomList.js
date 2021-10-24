const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    let myChapter = input.value;
    input.value = '';
    if (myChapter != "") {

    const scripture = document.createElement('li');
    const text = document.createElement('span');
    const listBtn = document.createElement('button');

    scripture.appendChild(text);
    text.textContent = myChapter;
    scripture.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(scripture);

    listBtn.onclick = function(e) {
        list.removeChild(scripture);
    }
    input.focus();}
    else {
        window.alert("Please enter a scripture reference.")
    }
}) 