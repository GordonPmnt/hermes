window.addEventListener('load', function () {
    var odisseySideMenu = document.getElementsByClassName("challenge__side__menu")[0]
    var odisseySol = odisseySideMenu.childNodes[2]

    odisseySol.addEventListener("click", function() {
        alert(odisseySol.textContent);
    }, false);

})