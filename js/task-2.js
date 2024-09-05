// BAD WAY
// function makeArray(firstArray, secondArray, maxLength) {
//     let joinedArray = firstArray.join(" ") + " " + secondArray.join(" ")
//     if (joinedArray.split(" ").length <= maxLength) {
//         return joinedArray.split(" ")
//     } else {
//         return joinedArray.split(" ").slice(0, maxLength)
//     }
// }

// GOOD WAY
function makeArray (firstArray, secondArray, maxLength) {
    const joinedArray = [...firstArray, ...secondArray]
    return joinedArray.slice(0, maxLength)
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
