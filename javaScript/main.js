
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
    document.getElementById("toggle-search").addEventListener("click", function (event) {
        event.preventDefault();
        let searchBar = document.querySelector(".search-bar");
        // Переключення класу active
        if (searchBar.classList.contains("active")) {
            searchBar.classList.remove("active");
            setTimeout(() => {
                searchBar.style.display = "none"; // Ховаємо після анімації
            }, 300);
        } else {
            searchBar.style.display = "flex"; // Показуємо перед анімацією
            setTimeout(() => {
                searchBar.classList.add("active");
            }, 10);
        }
    });
});
