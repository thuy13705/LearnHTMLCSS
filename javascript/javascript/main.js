const hamburgerMenu = document.getElementById('hamburgerbar');

if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('open');

        const menuList = document.getElementById('menuList');
        if (menuList) {
            menuList.classList.toggle('open');
        }
    });
}

