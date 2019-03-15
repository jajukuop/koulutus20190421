// Arrow funcion examples
// 1. ---------------------------------------------------------------------------------------------

// (param1, param2, paramN) => expression

// ES5
var multiplyES5 = function(x, y) {
    return x * y;
};
  
// ES6
const multiplyES6 = (x, y) => { return x * y };

// ES6
const multiplyES6shorter = (x, y) => x * y;

console.log(multiplyES5(5, 5))
console.log(multiplyES6(6, 6,))
console.log(multiplyES6shorter(7, 7))




// Map
// 2. --------------------------------------------------------------------------------------------

// const exampleArray = [1,2,3,4];

// const exampleArrayTimesTwo = exampleArray.map(value => value * 2)

// console.log(exampleArray);
// console.log(exampleArrayTimesTwo);

// const songs = [
//     { id: 1, name : "Curl of the Burl", artist: "Mastodon" },
//     { id: 2, name : "Oblivion", artist: "Mastodon" },
//     { id: 3, name : "Flying whales", artist: "Gojira" },
//     { id: 4, name : "L'Enfant Sauvage", artist: "Gojira" } 
// ]

// const allSongNames = songs.map(song => song.name);
// console.log(allSongNames);









// Filter
// 3. --------------------------------------------------------------------------------------------

// const songs = [
//     { id: 1, name : "Curl of the Burl", artist: "Mastodon" },
//     { id: 2, name : "Oblivion", artist: "Mastodon" },
//     { id: 3, name : "Flying whales", artist: "Gojira" },
//     { id: 4, name : "L'Enfant Sauvage", artist: "Gojira" } 
// ]

// var onlyMastodonSongs = songs.filter(song => song.artist === "Mastodon")
// console.log(onlyMastodonSongs);








// Reduce
// 4.

// const exampleArray = [1,2,3,4];
// const sum = exampleArray.reduce((total, current) => total + current, 0);
// const avg = sum / exampleArray.length;
// console.log(avg);











// 5. --------------------------------------------------------------------------------------------

// const dragonEvents = [
//     { type: "attack", value: 12, target: "player-dorkman"},
//     { type: "sign", value: 3},
//     { type: "eat", target: "Kingslayer"},
//     { type: "attack", value: 32, target: "player-fluffikins"},
//     { type: "attack", value: 7, target: "player-dorkman"},
// ]

// let totalDamageOnDorkman = dragonEvents
//     .filter(function(event){
//         return event.type === "attack"
//     })
//     .filter(function(event){
//         return event.target === "player-dorkman"
//     })
//     .map(function(event){
//         return event.value;
//     })
//     .reduce(function(prev, value){
//         return (prev || 0) + value;
//     })

// console.log("totalDamageOnDorkman\n", totalDamageOnDorkman);


// let totalDamageOnDorkmanWithArrowFunctions = dragonEvents
//     .filter(event => event.type === "attack")
//     .filter(event => event.target === "player-dorkman")
//     .map(event => event.value)
//     .reduce((prev, value) => (prev || 0) + value)

// console.log("totalDamageOnDorkmanWithArrowFunctions\n", totalDamageOnDorkmanWithArrowFunctions);

