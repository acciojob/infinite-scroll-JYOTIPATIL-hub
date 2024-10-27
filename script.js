//your code here!
// Get the list container
const listContainer = document.getElementById('list');

// Function to create and add a new list item
function addListItem(content) {
    const listItem = document.createElement('li');
    listItem.textContent = content;
    listContainer.appendChild(listItem);
}

// Initialize the list with 10 items by default
function initializeList() {
    for (let i = 1; i <= 10; i++) {
        addListItem(`Item ${i}`);
    }
}

// Add 2 more items when the user scrolls to the bottom
function addMoreItems() {
    const currentItemCount = listContainer.children.length;
    addListItem(`Item ${currentItemCount + 1}`);
    addListItem(`Item ${currentItemCount + 2}`);
}

// Infinite scroll function
function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        addMoreItems();
    }
}

// Initial setup
initializeList();
window.addEventListener('scroll', handleScroll);

