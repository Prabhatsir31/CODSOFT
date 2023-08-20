window.onload = () => {
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const list = document.querySelector('#todo-list');
const btn = document.querySelector('#add');

btn.addEventListener("click", addItem);

function addItem() {
    //check if input is not empty
    if(input.value.length!==0){
    // Create a new list item
    let li = document.createElement('li');
    let span = document.createElement('span');
    let button = document.createElement('button');
    let del = document.createElement('button');
    let edit = document.createElement('button');
    let handle = document.createElement('span');
    
    handle.classList.add('handle')
    handle.innerText = '↕️';
    span.innerText = input.value;
   // span.contentEditable = 'true'
    button.innerText = '✔';
    del.innerText = '❌';
    del.classList.add('red');
    edit.innerText = 'edit';
    edit.classList.add('blue');
    // Add a click event listener to the check button
    button.addEventListener('click', () => {
    span.classList.toggle('completed');
    });
    // Add a click event listener to the del button
    del.addEventListener('click', (e) => {
e.target.parentElement.remove();}); 
    
    edit.addEventListener('click', (e) => {
 //make editable
 e.target.parentElement.children[2]
  .toggleAttribute('contentEditable');
 //highlight object
 e.target.parentElement.children[2]
  .classList.toggle('focus'); 
 //select object
 e.target.parentElement.children[2]
  .focus();
 //place cursor at end of text
 window.getSelection().collapse(
  e.target.parentElement.children[2],
   1);
 //toggle botton text
 e.target.textContent = 
  e.target.textContent=='edit' ? ' ok ' :  'edit';
    })

    // Add the elements to the list item
    li.appendChild(handle);
    li.appendChild(del);
    li.appendChild(span);
    li.appendChild(edit);
    li.appendChild(button);
    
    // Add the list item to the list
    list.appendChild(li);

    // Clear the input field
    input.value = '';
}}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addItem()
    })
    Sortable.create(list, {
    handle:".handle",
    })
};