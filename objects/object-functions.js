let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 375
}

let otherBook = {
    title: "A People's History",
    author: "Howard Zinn",
    pageCount: 723
}

let getSummary = function(book){
    console.log(`${book.title} by ${book.author}`)
}


let getObjSummary = function(book){
    return {
        summary:`${book.title} by ${book.author}`,
        pageCountSumm:`${book.title} by ${book.author} has a page count of ${book.pageCount}`
    }
}


getSummary(myBook)
getSummary(otherBook)

let bookSum = getObjSummary(myBook)

console.log(bookSum.summary)

// cHallenge

//create function that takes in fahrenheit and returns an object with all three conversions


const tempConvert = function(temp) {
    return {
        fahrenheit: temp,
        celsius: (temp - 32) * 5/9,
        kelvin: (temp + 459.67) * 5/9
    }
}

console.log('fahrenheit: ', tempConvert(0).fahrenheit)
console.log('celsius: ', tempConvert(0).celsius)
console.log('kelvin: ', tempConvert(0).kelvin)
