const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const text = document.getElementById('item');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event 
itemList.addEventListener('click', removeItem)

// Add Item
function addItem(e) {

    e.preventDefault();

    const newItemMarkup = `<li class="list-group-item d-flex justify-content-between">
                            ${text.value}
                            <button class="btn btn-danger btn-sm delete">X</button>
                        </li>`

    itemList.insertAdjacentHTML('beforeend', newItemMarkup)

    text.value = '';

}

// Remove item
function removeItem(e) {

    // e.preventDefault();

    console.log('hellooo');

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }


}
