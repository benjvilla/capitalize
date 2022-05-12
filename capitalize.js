function capitalize(string) {
    let firstLetter = string.slice(0,1).toUpperCase()
    let restOfWord = string.slice(1,8).toLowerCase()
    let fullWord = firstLetter + restOfWord
    console.log(fullWord)
}
console.log(capitalize('bENJAMIN'))