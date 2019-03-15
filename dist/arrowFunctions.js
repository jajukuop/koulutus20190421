"use strict";

// X. --------------------------------------------------------------------------------------------
var dragonEvents = [{
  type: "attack",
  value: 12,
  target: "player-dorkman"
}, {
  type: "sign",
  value: 3
}, {
  type: "eat",
  target: "Kingslayer"
}, {
  type: "attack",
  value: 32,
  target: "player-fluffikins"
}, {
  type: "attack",
  value: 7,
  target: "player-dorkman"
}]; // let totalDamageOnDorkman = dragonEvents
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

var totalDamageOnDorkmanWithArrowFunctions = dragonEvents.filter(function (event) {
  return event.type === "attack";
}).filter(function (event) {
  return event.target === "player-dorkman";
}).map(function (event) {
  return event.value;
}).reduce(function (prev, value) {
  return (prev || 0) + value;
});
console.log("totalDamageOnDorkmanWithArrowFunctions\n", totalDamageOnDorkmanWithArrowFunctions);