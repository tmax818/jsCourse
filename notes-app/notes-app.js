console.log("hi from another script")

const p = document.querySelector('p')
console.log(document)
console.log(document.querySelector('p'))

//p.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function(p){
    p.remove()
})