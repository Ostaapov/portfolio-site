document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("active");

        // Меняем иконку в мобильной версии
        if (window.innerWidth <= 768) {
            if (menu.classList.contains("active")) {
                menuToggle.innerHTML = "&#10006;"; // ✖ Закрытие
            } else {
                menuToggle.innerHTML = "&#9776;"; // ☰ Бургер
            }
        }
    });

    // Проверяем размер экрана при изменении ширины окна
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            menu.classList.remove("active"); // Закрываем меню на больших экранах
            menuToggle.innerHTML = "&#9776;"; // Всегда бургер при переходе на ПК
        }
    });
});