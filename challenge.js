window.addEventListener('load', () => {

    /* 
        This block will be executed only if user is on the following URL: 
        https://odyssey.wildcodeschool.com/quests/:questId/challenge   
    */
    if(this.window.document.URL.includes('challenge')) {

        if(document.getElementsByClassName("challenge__side__menu")[0]) {
            const odysseySideMenu = document.getElementsByClassName("challenge__side__menu")[0]
            let odysseySol = odysseySideMenu.childNodes[2]
            const odysseyrSolUrl = odysseySol.childNodes[1]
    
            let element = document.createElement("button");
            const content = document.createTextNode("Hermes");

            let picture = document.createElement("img");
            picture.src = chrome.runtime.getURL('hermes.png');
            picture.alt = 'Hermes logo';

            element.appendChild(picture);
            element.appendChild(content);
            element.id = "hermes-1";
    
            odysseySol.appendChild(element);
            
            element.addEventListener("click", () => {
                const text = odysseyrSolUrl.textContent;
    
                navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('Copied to clipboard:', text);
                    
                    setTimeout(() => { 
                        // do something
                        }, 2000
                    );
                })
                .catch(err => {
                    console.log(err);
                    alert(`
                        Hermes could not copy, please check whether your 
                        system denies clipboard permissions`
                    );
                });
            }, false);
        };
    }

})