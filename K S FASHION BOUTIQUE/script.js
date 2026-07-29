document.addEventListener("DOMContentLoaded", () => {
    // Select all product cards from your HTML grid
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
        const orderButton = card.querySelector(".buy-btn");
        if (!orderButton) return;

        orderButton.addEventListener("click", () => {
            // Get the text from the <h3> inside this specific card
            const productName = card.querySelector("h3").innerText;
            
            // Your shop phone number from the footer
            const phoneNumber = "919560539474"; 
            
            // Build a clean, personalized text message
            const message = `Hello Khatu Shyam Fashion Boutique! I would like to order this design:\n\n✨ *Design Name:* ${productName}\n\nPlease let me know the availability and booking process.`;
            
            // Safe URL encoding for spaces and emojis
            const encodedMessage = encodeURIComponent(message);
            
            // Open the WhatsApp link in a fresh tab
            window.open(`https://wa.me{phoneNumber}?text=${encodedMessage}`, "_blank");
        });
    });
});
