function timeout(n: number): Promise<any> {
  return new Promise((res) => setTimeout(res, n));
}

export async function addNumber(a: number, b: number): Promise<number> {
  await timeout(500);
  return a + b;
}

(async () => {
  console.log(await addNumber(2, 3));
})();

// TYPE OBJECTS
function printCar(car: {
  name: string;
  year: number;
  //   It can be skipped
  voltage?: number;
  //   It need string for undefined explicitly
  color: string | undefined;
}) {
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
const contacts: {
  [k: string]: {
    name: string;
    phone: number;
  };
} = {};
// We can add any contact in contacts
contacts.home = { name: "Jd", phone: 1 };
contacts.work = { name: "Jd2", phone: 2 };
contacts.other = { name: "Jd2" };

// TYPE ARRAYS
let names: string[] = ["1F", "2"];
names = ["FF", 2];

// TYPE TUPLES
let namePairs : [string, number] = ["A", 1];
namePairs = ["A", "B"];
namePairs = ["A", 1, 2];
namePairs = ["A", 1];
// This works, as TS cannot check if function is changing the lenght at compile time
namePairs.push(2)
