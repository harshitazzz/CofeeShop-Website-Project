document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;
    const cartItems = [];
    
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeIcon.src = "./Images/moon.png";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        themeIcon.src = isDark ? "./Images/moon.png" : "./Images/sun.png";
    });
});

function chooseType(coffee, price) {
    document.getElementById("selectionTitle").innerHTML = `Choose Hot or Cold for ${coffee}`;
    document.getElementById("options").innerHTML = `
        <button onclick="chooseSize('${coffee}', 'Hot', ${price + 2})">Hot</button>
        <button onclick="chooseSize('${coffee}', 'Cold', ${price + 1})">Cold</button>
    `;
    document.getElementById("selectionModal").style.display = "flex";
}

function chooseSize(coffee, temp, price) {
    document.getElementById("selectionTitle").innerHTML = `Choose Size for ${temp} ${coffee}`;
    document.getElementById("options").innerHTML = `
        <button onclick="addToCart('${coffee}', '${temp}', 'Small', ${price + 1})">Small</button>
        <button onclick="addToCart('${coffee}', '${temp}', 'Medium', ${price + 2})">Medium</button>
        <button onclick="addToCart('${coffee}', '${temp}', 'Large', ${price + 3})">Large</button>
    `;
}

function addToCart(coffee, temp, size, price) {
    cartItems.push({ coffee, temp, size, price });
    updateCart();
    closeModal();
}

function updateCart() {
    document.getElementById("cartCount").innerText = cartItems.length;
}