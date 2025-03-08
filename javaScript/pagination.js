document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 8;
    let currentPage = 1;
    let allItems = Array.from(document.querySelectorAll(".items")); // Масив всіх елементів
    const paginationContainer = document.querySelector(".groupbtn");
    const sortSelect = document.querySelector(".custom-select-wrapper"); // Випадаючий список сортування

    function getTotalPages() {
        return Math.ceil(allItems.length / itemsPerPage);
    }

    function showPage(page) {
        const totalPages = getTotalPages();
        currentPage = Math.min(page, totalPages); // Не виходити за межі сторінок

        allItems.forEach((item, index) => {
            item.style.display = (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) ? "flex" : "none";
        });

        updateButtons();
    }

    function updateButtons() {
        paginationContainer.innerHTML = ""; // Очищуємо старі кнопки
        const totalPages = getTotalPages();

        if (totalPages <= 1) return;

        // Кнопка "Previous"
        const prevButton = document.createElement("button");
        prevButton.textContent = "←";
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener("click", function () {
            if (currentPage > 1) showPage(currentPage - 1);
        });
        paginationContainer.appendChild(prevButton);

        // Числові кнопки
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.classList.toggle("active", i === currentPage);
            pageButton.addEventListener("click", function () {
                showPage(i);
            });
            paginationContainer.appendChild(pageButton);
        }

        // Кнопка "Next"
        const nextButton = document.createElement("button");
        nextButton.textContent = "→";
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener("click", function () {
            if (currentPage < totalPages) showPage(currentPage + 1);
        });
        paginationContainer.appendChild(nextButton);
    }


    // Функція сортування
    function sortItems(criteria) {
        let container = document.querySelector(".shop-items .row"); 

        if (criteria === 'name-asc') {
            allItems.sort((a, b) => a.querySelector('h2 a').textContent.localeCompare(b.querySelector('h2 a').textContent));
        } else if (criteria === 'name-desc') {
            allItems.sort((a, b) => b.querySelector('h2 a').textContent.localeCompare(a.querySelector('h2 a').textContent));
        } else if (criteria === 'price-asc') {
            allItems.sort((a, b) => parseFloat(a.querySelector('p').textContent.replace('$', '')) - parseFloat(b.querySelector('p').textContent.replace('$', '')));
        } else if (criteria === 'price-desc') {
            allItems.sort((a, b) => parseFloat(b.querySelector('p').textContent.replace('$', '')) - parseFloat(a.querySelector('p').textContent.replace('$', '')));
        }

        // Очищуємо контейнер і додаємо відсортовані елементи
        container.innerHTML = "";
        allItems.forEach(item => container.appendChild(item));

        showPage(1); // Після сортування відкриваємо першу сторінку
    }


    // Обробка вибору сортування
    if (sortSelect) {
        sortSelect.addEventListener('click', function () {
            sortSelect.classList.toggle('open');
        });

        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function () {
                document.querySelector('.selected-option').textContent = option.textContent;
                sortItems(option.dataset.value);
            });
        });
    }

    // Ініціалізація
    showPage(currentPage);
});
