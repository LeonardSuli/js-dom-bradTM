const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const text = document.getElementById('item');

// Form submit event
form.addEventListener('submit', addItem);

// Add Item
function addItem(e) {
    e.preventDefault();
    // console.log(text.value);

    const itemMarkup = `<li class="list-group-item d-flex justify-content-between">${text.value}<button
                        class="btn btn-danger btn-sm delete">X</button>
                </li>`

    itemList.insertAdjacentHTML('beforeend', itemMarkup)

    text.value = '';

}
