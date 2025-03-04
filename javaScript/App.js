
// при наведенні на submenu
$(document).ready(function () {
    $('li.nav-item.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
    });
});

// натискання на іконку пошук
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-search");
    const searchBar = document.querySelector(".search-bar");

    // Відкриття панелі пошуку
    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation(); // Запобігає закриттю одразу після відкриття

        if (!searchBar.classList.contains("active")) {
            searchBar.style.display = "flex"; // Показуємо перед анімацією
            setTimeout(() => {
                searchBar.classList.add("active");
            }, 10);
        }
    });

    // Запобігаємо закриттю при кліку всередині панелі
    searchBar.addEventListener("click", function (event) {
        event.stopPropagation(); // Якщо клік всередині панелі, не закриваємо її
    });

    // Закриття при кліку будь-де поза панеллю
    document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target) && searchBar.classList.contains("active")) {
            searchBar.classList.remove("active");
            searchBar.style.display = "none";
        }
    });

});


