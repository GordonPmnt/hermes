fetch('https://odyssey.wildcodeschool.com/users/17650?tab=quests')
    .then(
        response => response.text())
    .then(
        result => console.log(result)
)
