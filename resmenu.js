document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");
});

// Function to filter menu items based on search input
function filterMenu() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll(".menu-item");

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}