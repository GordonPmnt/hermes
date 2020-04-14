window.addEventListener('load', function () {

    /* 
        This block will be executed only if user is on the following URL: 
        https://odyssey.wildcodeschool.com/quests/:questId/challenge   
    */
   
    if(document.getElementsByClassName("challenge__side__menu")[0]) {
        var odisseySideMenu = document.getElementsByClassName("challenge__side__menu")[0]
        var odisseySol = odisseySideMenu.childNodes[2]
        var odisseyrSolUrl = odisseySol.childNodes[1]

        var element = document.createElement("button");
        var content = document.createTextNode("Copy");
        element.appendChild(content);

        odisseySol.appendChild(element);
        
        element.addEventListener("click", function() {
            var text = odisseyrSolUrl.textContent;

            navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Copied to clipboard:', text);
            })
            .catch(err => {
                alert(`
                    Could not copy, please check whether your 
                    system denies clipboard permissions`
                )
            });
        }, false);
    };

})