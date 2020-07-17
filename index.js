// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"]
const gift_type = "birthday"
function writeCards(name_array, gift_type) {
    let message_array = []
    for (let i = 0; i < name_array.length; i++) {
       message_array.push(`Thank you, ${name_array[i]}, for the wonderful ${gift_type} gift!`)
    }
    return message_array
}

function countdown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i)
    }
}