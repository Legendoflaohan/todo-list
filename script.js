// listen to click on the create button
// when clicked, copy the text in the text area
// add the text in the output area, which is an ul list
// eraise the textarea

function addToDo() {
    //text is the input text
    const text = document.getElementById('input').value;
    //singleList is the created li
    const singleList = document.createElement('li');
    //give the input text to the li
    singleList.innerText = text;
    //append the li to the output ul
    document.getElementById('output').appendChild(singleList);
}

function enter(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addToDo();
    }
}

document.getElementById('create').addEventListener('click', addToDo);
document.getElementById('input').addEventListener('keydown', enter);