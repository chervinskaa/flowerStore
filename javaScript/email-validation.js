document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", function () {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярний вираз для перевірки email
        let errorMessage = document.getElementById("error-message");

        // Видалити старе повідомлення, якщо воно є
        if (errorMessage) {
            errorMessage.remove();
        }

        // Якщо email некоректний, показати повідомлення і очистити поле
        if (!emailPattern.test(email)) {
            emailInput.value = "";
            emailInput.style.border = "2px solid red";

            // Створити нове повідомлення
            errorMessage = document.createElement("p");
            errorMessage.id = "error-message";
            errorMessage.innerHTML = "❌ Адреса електронної пошти недійсна.<br>Використовуйте формат example@email.com";

            errorMessage.style.color = "red";
            errorMessage.style.marginTop = "10px"; 
            errorMessage.style.fontSize = "14px";
            errorMessage.style.whiteSpace = "normal"; 

            // Додати повідомлення під .input-container
            emailInput.closest(".input-container").insertAdjacentElement("afterend", errorMessage);
        } else {
            emailInput.style.borderBottom = "1px solid #ccc";
        }
    });
});
