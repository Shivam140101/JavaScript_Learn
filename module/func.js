export default function printHobbies(hobbies) {
    for (const value of hobbies) {
        console.log(value);
    }
}

function testing() {
    console.log("testing");
}

let hobbies = ['tenis', 'cycling'];

export {
    testing,
    hobbies
}