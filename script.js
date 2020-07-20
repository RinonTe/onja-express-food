console.log('good luck!');
// Grabing all the useful buttons and the inner/outer modal

const showOrderButton = document.querySelector('.add-order');
const submitOrder = document.querySelector('.submitOrder');
const deleteButton = document.querySelector('.served');
const outerModal = document.querySelector('.outer-modal');
const modalContent = document.querySelector('.modal-content');

//Open the modal
const openFormOrder = (e) => {
    modalContent.innerHTML = `
    <form>
        <p>Your name :</p>
        <input class="input-form" type="text" id="name" name="name" placeholder="Enter your name here"
            required />
        <p>Please select your dish :</p>
        <select name="dish" class="select-form" id="select-form" required>
            <option value="romazava">Romazava</option>
            <option value="koba">Koba</option>
            <option value="ravitoto">Ravitoto</option>
            <option value="mokary">Mokary</option>
            <option value="achard">Achard</option>
            <option value="masikita">Masikita</option>
            <option value="sambos">Sambos</option>
            <option value="mofo-baolina">Mofo baolina</option>
            <option value="ranonapango">Ranonapango</option>
        </select>
        <p>Please select the size of your plate :</p>
        <input type="radio" id="small" name="size" value="small"/>
        <label for="small">Small</label><br />
        <input type="radio" id="medium" name="size" value="medium" />
        <label for="medium">Medium</label><br />
        <input type="radio" id="large" name="size" value="large" />
        <label for="large">Large</label><br />
        <p>How many pieces do you want to order?</p>
        <input class="input-form" type="number" id="quantity" name="amount" placeholder="Enter a number here"
            required />
        <button class="submitOrder" type="submit">Add this order</button>
    </form>`;
     // Show the modal
    outerModal.style.display ="block";
};

const handleClick = e => {
    const isOutside = !e.target.closest('.modal-content');
    if (isOutside) {
        outerModal.style.display = 'none';
    }
};

const handleEscape = e => {
    if (e.key === 'Escape') {
        outerModal.style.display = 'none';
    }
};

// using the button to oppen the modal

showOrderButton.addEventListener('click', openFormOrder);
window.addEventListener('keydown', handleEscape);
outerModal.addEventListener('click', handleClick);

 
// Creating the new html for the order
window.addEventListener('submit', (event) => {
    // Accessing the input elements in form and getting its value
     const name = document.getElementById('name');
    const selectedDish = document.getElementById('select-form');
    const pieceNumbers = document.getElementById('quantity');
    //const selectedDish = card.dataset.dish;
    event.preventDefault();
    if (event.target.matches('form')) {
        const newOrderHtml = `
        <div class="order" data-dish="${selectedDish.value}" data-size="large" data-amount="${pieceNumbers.value}">
                    <span class="title">
                        ${name.value}
                    </span>
                    <button class="details">Details</button>
                    <button class="served">Delete order</button>
        </div>
      `
        // Grabbing the container of the order lists
        const orderLists = document.querySelector('.order-list');
        orderLists.insertAdjacentHTML('beforeend', newOrderHtml);
        //Resetting the form
        const resetForm = document.querySelector('form');
        resetForm.reset();
         // removing the modal
        outerModal.style.display = "none";
     }  

     
    
});
 
const handleOrderButtonClick = (event) => {
    if (event.target.matches('button.details')) {
        const button = event.currentTarget;
        const form = button.closest('.order');
        const newName =  form.name.value;
        const dishName = form.dataset.dish;
        const size = form.dataset.size;
        const amount = form.dataset.amount;
        
    
        modalContent.innerHTML = `
        <h2>${newName.value}</h2>
        <p><b> Order:</b></p>
        <p><b> ${dishName} ${size} ${amount}</b></p>
        `;
    
     
        // Show the modal
         
        outerModal.style.display ="block";   
    };  
}

  window.addEventListener('click', handleOrderButtonClick);

// Deleting the order
const handleDeleteOrder = (e) => {
  if (e.target.classList.contains('served')) {
         const deleteOrder = e.target;
        deleteOrder.closest('.order').remove();
    }
};
 
document.addEventListener('click', handleDeleteOrder);
 