window.addEventListener('load', function () {

    /* 
        This block will be executed only if user is on the following URL: 
        https://odyssey.wildcodeschool.com/
    */
   var urls = [
       "https://odyssey.wildcodeschool.com/", 
       "odyssey.wildcodeschool.com/", 
       "odyssey.wildcodeschool.com"
    ]

   if(urls.includes(this.window.document.URL)) {
        var element = document.createElement("button");
        var content = document.createTextNode("Hermes");
        element.appendChild(content);
        element.id = "hermes-1";
       
        var buttonsBar = document.getElementsByClassName("carousel-cell is-selected")[0]
        buttonsBar.appendChild(element)
   };
});