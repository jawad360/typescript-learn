// TOP Types
// ANY type, and contain any types supported in js
let anytype: any = 1;
anytype = "hello";
anytype = true;

// uses of any
type printType = (...args: any[]) => void
const printMess: printType = (...args) => {
    console.log(...args)
}

// UNKNOWN type can only be used after typeguarding
let unknowntype: unknown = 1;
if(typeof unknowntype === "number"){
    console.log(unknowntype)
}

// NEVER type is used when the statement where its used should never be executed in ideal scenario
class Car {
    drive() {
        console.log("driving")
    }
}
class Truck {
    tow(){
        console.log("towing")
    }
}
type vehicle = Car | Truck;
const myVehicle = new Car();

if(myVehicle instanceof Car){
    myVehicle.drive()
} else if(myVehicle instanceof Truck){
    myVehicle.tow();
} else {
    // if it hits this it should break the complie flow
    const vec: never = myVehicle;
}