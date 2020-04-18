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

            const iconsUrl = chrome.runtime.getURL('icons.json');
            let icons = {}
            fetch(iconsUrl)
            .then(
                response => response.json()
            ) 
            .then(
                json => icons = json
            );

            element.addEventListener("click", () => {

                const nodeText = document.getElementsByClassName('header-infos')[0]
                    .childNodes[1]
                    .nextSibling
                    .innerText
                let category = '';
                for(let i=0; i<nodeText.length; i++) {
                    if(
                        nodeText.slice(i, i+6) !== ' - MàJ' && 
                        nodeText.slice(i, i+6) !== ' - Upd'
                    ) {
                        category += nodeText[i]
                    } else {
                        break
                    };
                }

                const icon = icons[category]
                const title = document.getElementById('header-title').textContent.slice(0, -1)
                const text = `${icon} ${title}: ${odysseyrSolUrl.textContent}`

                navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('Copied to clipboard:', text);
                    const hermesMessage = {
                        type: 'basic',
                        iconUrl: chrome.runtime.getURL('hermes.png'),
                        title: 'Quest copied in clipboard!',
                        message: 'Hermes copied your quest, you can now paste it in Slack'
                    };
                    chrome.runtime.sendMessage(
                        { id: 'hermes', notification: hermesMessage }, 
                        ( response ) => {
                            console.log(response.status);
                        }
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