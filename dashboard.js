window.addEventListener('load', function () {

    /* 
        This block will be executed only if user is on the following URL: 
        https://odyssey.wildcodeschool.com/
    */
   let urls = [
       "https://odyssey.wildcodeschool.com/", 
       "odyssey.wildcodeschool.com/", 
       "odyssey.wildcodeschool.com"
    ];

   if(urls.includes(this.window.document.URL)) {
        let element = document.createElement("button");
        let content = document.createTextNode("Hermes");
        element.appendChild(content);
        element.id = "hermes-1";
       
        let carousel = document.getElementsByClassName("carousel-cell is-selected")[0];
        carousel.appendChild(element);

        let quests = this.document.getElementsByClassName("quests-list")[0].childNodes;
        for(let i=0; i<quests.length; i++){
            let quest = quests[i]
            if(quest.nodeType === 1 && quest.className !== "quest__link started border") {
                console.log(quest)
            }
        }

        element.addEventListener("click", function() {
            // do something
        });
    };
});