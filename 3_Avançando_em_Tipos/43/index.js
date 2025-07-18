"use strict";
// 13 - Interfaces
function showCooerdinates(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 30
};
showCooerdinates(coordObj); // X: 10, Y: 20, Z: 30
