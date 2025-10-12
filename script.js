const filter = document.getElementById('filter');
const form = document.getElementById('addForm');
const textAddItem = document.getElementById('item');
const itemList = document.getElementById('items');
// const items = document.querySelectorAll('li'); // mi da una NodeList e non aggiorna live quindi inserirla dentro la funzione per richiamarla ogni volta
// const items = document.getElementsByTagName('li'); // mi da un'HTML collection però aggiorna live nuove righe

// Form submit event
form.addEventListener('submit', addItem);
// Delete event 
itemList.addEventListener('click', removeItem)
// Filter event
filter.addEventListener('keyup', filterItem)


// Add Item
function addItem(e) {

    e.preventDefault();

    const newItemMarkup = `<li class="list-group-item d-flex justify-content-between">
                            ${textAddItem.value}
                            <button class="btn btn-danger btn-sm delete">X</button>
                        </li>`

    itemList.insertAdjacentHTML('beforeend', newItemMarkup)

    textAddItem.value = '';

}

// Remove item
function removeItem(e) {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

}

// Filter item
function filterItem(e) {

    // Convert text in lowercase
    const textFilter = e.target.value.toLowerCase();

    // Get li
    const items = document.querySelectorAll('li');

    // Loop the li
    items.forEach(item => {

        // Get li text's 
        const itemText = item.firstChild.textContent.toLowerCase().trim(); // trim remove space empty

        // Control if in the filter words there is the same words of li text
        if ((itemText).includes(textFilter)) {

            // If yes put display block or flex for li
            item.classList.add('d-flex')
            item.classList.remove('d-none')
            console.log(item.className);

        } else {

            // If no put display none for li
            item.classList.remove('d-flex')
            item.classList.add('d-none')
            console.log(item.className);
        }
    });







}
