window.addEventListener('load', function () {

    /* 
        This block will be executed only if user is on the following URL: 
        https://odyssey.wildcodeschool.com/quests/:questId/challenge   
    */
    if(document.getElementsByClassName("challenge__side__menu")[0]) {
        var odisseySideMenu = document.getElementsByClassName("challenge__side__menu")[0]
        var odisseySol = odisseySideMenu.childNodes[2]
        var odisseyrSolUrl = odisseySol.childNodes[1]

        odisseySol.addEventListener("click", function() {
            var text = odisseySol.textContent;
            document.execCommand('copy', text);
        }, false);
    };

})