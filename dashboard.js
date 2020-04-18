window.addEventListener('load', () => {

    /* 
        This block will be executed only if user is on the following URL: 
        https://odyssey.wildcodeschool.com/
    */
    const urls = [
       "https://odyssey.wildcodeschool.com/", 
       "odyssey.wildcodeschool.com/", 
       "odyssey.wildcodeschool.com"
    ];

    if(urls.includes(this.window.document.URL)) {

        if(this.document.getElementsByClassName("quests-list")) {

            let element = document.createElement("button");
            const content = document.createTextNode("Hermes");
            element.appendChild(content);
            element.id = "hermes-1";
           
            let carousel = document.getElementsByClassName("carousel-cell is-selected")[0];
            carousel.appendChild(element);
    
            const userId = document.getElementsByClassName("buttons")[0].firstChild.pathname.slice(7);
    
            let quests = this.document.getElementsByClassName("quests-list")[0].childNodes;
            let solutions = [];
            
            for(let i=0; i<quests.length; i++) {
                let quest = quests[i]
                if(quest.nodeType === 1 && quest.className !== "quest__link started border") {
                    fetch(
                        `https://odyssey.wildcodeschool.com${quest.pathname}`
                    ).then(
                        response => response.url
                    ).then(
                        url => solutions.push(`${url}/solutions/${userId}`)
                    );
                };
            };
    
            element.addEventListener("click", () => {
                const text = solutions.join('\n')
                
                navigator.clipboard.writeText(text)
                .then(() => {
                    console.log('Copied to clipboard:', text);
                    let button = document.getElementById("hermes-1");
                    button.style = "color: grey"
                    button.textContent = "...copied"
                    
                    setTimeout(() => { 
                        button.textContent = "Hermes"
                        button.style = ""
                        }, 2000
                    );
                })
                .catch(err => {
                    console.log(err);
                    alert(`
                        Could not copy, please check whether your 
                        system denies clipboard permissions`
                    );
                });
            }, false);
        }
    };
});