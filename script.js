document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    // Check if dark mode is already saved in local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeIcon.src = "./Images/moon.png"; // Dark mode icon
    } else {
        themeIcon.src = "./Images/sun.png"; // Light mode icon
    }

    // Theme Toggle Functionality
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save theme preference to local storage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeIcon.src = "./Images/moon.png"; // Dark mode icon
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.src = "./Images/sun.png"; // Light mode icon
        }
    });

    // Function to open menu selection modal
    window.chooseType = function (coffeeType) {
        const modal = document.getElementById("selectionModal");
        const selectionTitle = document.getElementById("selectionTitle");
        const optionsDiv = document.getElementById("options");
        
        selectionTitle.textContent = `Choose Hot or Cold for ${coffeeType}`;
        optionsDiv.innerHTML = `
            <button onclick="chooseSize('${coffeeType}', 'Hot')">Hot</button>
            <button onclick="chooseSize('${coffeeType}', 'Cold')">Cold</button>
        `;
        
        modal.style.display = "flex";
    };

    // Function to choose coffee size
    window.chooseSize = function (coffeeType, temp) {
        const optionsDiv = document.getElementById("options");
        document.getElementById("selectionTitle").textContent = `Choose Size for ${temp} ${coffeeType}`;
        optionsDiv.innerHTML = `
            <button onclick="finalSelection('${coffeeType}', '${temp}', 'Small')">Small</button>
            <button onclick="finalSelection('${coffeeType}', '${temp}', 'Medium')">Medium</button>
            <button onclick="finalSelection('${coffeeType}', '${temp}', 'Large')">Large</button>
        `;
    };

    // Function to confirm final selection
    window.finalSelection = function (coffeeType, temp, size) {
        alert(`You selected a ${size} ${temp} ${coffeeType}`);
        closeModal();
    };

    // Function to close modal
    window.closeModal = function () {
        document.getElementById("selectionModal").style.display = "none";
    };
});