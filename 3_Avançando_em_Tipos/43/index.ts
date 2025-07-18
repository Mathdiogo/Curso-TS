// 13 - Interfaces

interface Point{
    x: number;
    y: number;
    z: number;
}

function showCooerdinates(obj: Point) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}

const coordObj: Point = {
    x: 10,
    y: 20,
    z: 30
}

showCooerdinates(coordObj); // X: 10, Y: 20, Z: 30