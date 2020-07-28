console.log("it works");
const container = document.querySelector('.container');
const addList = document.querySelector('#add-button');
const inputValue = document.querySelector('#list');
const resetInput = document.querySelector('.list');
const checkBoxCross = document.querySelector('.delete-checkbox');

const addNewList = () => {
    newListHtml = `
    <div class="example">
    <label for="checkbox"></label>
    <input type="checkbox" id="checkbox" class="delete-checkbox">
    <h2 class="todo-list">${inputValue.value}</h2>
    <button type="button" class="delete-list">Delete</button>
    `;
    inputValue.value = "";
    container.insertAdjacentHTML('afterbegin', newListHtml);
}

addList.addEventListener('click', addNewList);

// Deleting the order
const handleDeleteList = (e) => {
    if (e.target.classList.contains('delete-list')) {
           const deleteList = e.target;
          deleteList.closest('.example').remove();
      }
  };
   
// Checking the checkbox to cross the list

const handleCrossList = e => { 
  const todo = e.target.closest('.example');
  const todoText = todo.querySelector('.todo-list');
  todoText.classList.toggle('cross');
}
  document.addEventListener('click', handleDeleteList);
  document.addEventListener('change', handleCrossList);
