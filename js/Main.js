const router = new Router();

router.openMenu();

document.getElementById('btn-menu-head').addEventListener('click', function() {
    router.openMenu();
});