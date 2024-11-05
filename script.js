//your code here!
document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("infinite-list");

    // Function to add a specified number of items to the list
    function addItems(count) {
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `List Item ${list.children.length + 1}`;
            list.appendChild(listItem);
        }
    }

    // Initially add 10 items
    addItems(10);

    // Event listener to detect when the user scrolls to the bottom of the list
    list.addEventListener("scroll", () => {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            // Add 2 more items when reaching the end of the list
            addItems(2);
        }
    });
});
