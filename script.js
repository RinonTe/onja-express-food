console.log('good luck!');
// Grabing all the useful buttons and the inner/outer modal
const orderLists = document.querySelector('.order-list')
const showOrderButton = document.querySelector('.add-order');
const submitOrder = document.querySelector('.submitOrder');
const deleteButton = document.querySelector('.served');
const outerModal = document.querySelector('.outer-modal');
const modalContent = document.querySelector('.modal-content');
 
// Reseting the form 
const resetForm = document.querySelector('form');
// Accessing the input elements in form and getting its value
const name = document.getElementById('name');
const selectedDish = document.getElementById('select-form');
 
 
//Open the modal
const openFormOrder = (e) => {
    // Show the modal
    outerModal.style.display="block";

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
const createOrder = () => {
    return `
    <div class="order" data-dish="romazava" data-size="large" data-amount="2">
				<span class="title">
					${name.value} 
                </span>
				<button class="details">Details</button>
				<button class="served">Delete order</button>
	</div>
  `
}

submitOrder.addEventListener('click', ($event) => {
    const newOrder = createOrder();
    orderLists.insertAdjacentHTML('beforeend', newOrder);
    $event.preventDefault();
    resetForm.reset();
});
 
// Deleting the order
const handleDeleteOrder = (e) => {
  if (e.target.classList.contains('served')) {
         const deleteOrder = e.target;
        deleteOrder.closest('.order').remove();
    }
};
 
document.addEventListener('click', handleDeleteOrder);
 
//Open detail 
 window.addEventListener('click', (e) => {
    const pieceNumbers = document.getElementById('quantity');
    if (e.target.classList.contains('details')) {
        modalContent.innerHTML=`<h2> ${name.value}</h2>
        <p><b>Order:</b></p>
        <p><b> ${pieceNumbers.value} ${selectedDish.value}</b></p>`;
    // Show the modal
    outerModal.style.display="block";
   }

});
 