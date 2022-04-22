var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
export function addNumber(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        yield timeout(500);
        return a + b;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield addNumber(2, 3));
}))();
// TYPE OBJECTS
function printCar(car) {
    // If is type guarding, if skipped will give an error
    if (car.color) {
        console.log(car.color.charAt(1));
    }
}
printCar({ name: "Toyota", year: 2021 });
printCar({ name: "Toyota", year: 2021, voltage: 12 });
printCar({ name: "Toyota", year: 2021, color: "RED" });
// Random cannot be accessed inside the function
printCar({ name: "Toyota", year: 2021, random: "RED" });
// But this works, as carTest can be used by other
const carTest = { name: "Toyota", year: 2021, color: "RED", random: "RED" };
printCar(carTest);
// TYPE DICTIONARIES
const contacts = {};
// We can add any contact in contacts
contacts.home = { name: "Jd", phone: 1 };
contacts.work = { name: "Jd2", phone: 2 };
contacts.other = { name: "Jd2" };
// TYPE ARRAYS
let names = ["1F", "2"];
names = ["FF", 2];
// TYPE TUPLES
let namePairs = ["A", 1];
namePairs = ["A", "B"];
namePairs = ["A", 1, 2];
namePairs = ["A", 1];
// This works, as TS cannot check if function is changing the lenght at compile time
namePairs.push(2);
