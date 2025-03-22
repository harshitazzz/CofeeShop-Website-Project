document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll function
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }

    // Menu item click handling
    function chooseType(coffeeType) {
        const modal = document.getElementById("selectionModal");
        const selectionTitle = document.getElementById("selectionTitle");
        const optionsDiv = document.getElementById("options");
        
        selectionTitle.textContent = `Choose Hot or Cold for ${coffeeType}`;
        optionsDiv.innerHTML = `
            <button onclick="chooseSize('${coffeeType}', 'Hot')">Hot</button>
            <button onclick="chooseSize('${coffeeType}', 'Cold')">Cold</button>
        `;
        
        modal.style.display = "flex";
    }

    // Coffee size selection
    function chooseSize(coffeeType, temp) {
        const optionsDiv = document.getElementById("options");
        document.getElementById("selectionTitle").textContent = `Choose Size for ${temp} ${coffeeType}`;
        optionsDiv.innerHTML = `
            <button onclick="finalSelection('${coffeeType}', '${temp}', 'Small')">Small</button>
            <button onclick="finalSelection('${coffeeType}', '${temp}', 'Medium')">Medium</button>
            <button onclick="finalSelection('${coffeeType}', '${temp}', 'Large')">Large</button>
        `;
    }

    // Final selection confirmation
    function finalSelection(coffeeType, temp, size) {
        alert(`You selected a ${size} ${temp} ${coffeeType}`);
        closeModal();
    }

    // Close modal function
    function closeModal() {
        document.getElementById("selectionModal").style.display = "none";
    }

    // Theme Toggle Functionality
    document.getElementById("themeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
    
    // Making functions global so they work on inline onclick
    window.scrollToSection = scrollToSection;
    window.chooseType = chooseType;
    window.chooseSize = chooseSize;
    window.finalSelection = finalSelection;
    window.closeModal = closeModal;
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    // Function to set theme
    function setTheme(mode) {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            themeIcon.src = "./Images/moon.png"; // Dark mode icon 🌙
            themeIcon.alt = "Dark Mode";
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            themeIcon.src = "./Images/sun.png"; // Light mode icon 🌞
            themeIcon.alt = "Light Mode";
            localStorage.setItem("theme", "light");
        }
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        const currentTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
        setTheme(currentTheme);
    });
});