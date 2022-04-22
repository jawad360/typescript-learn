// TYPEALIAS
type UserContactInfo = {
  name: string;
  age: number;
  email: string;
};

function printUserInfo(user: UserContactInfo) {
  console.log(user);
}

const user1: UserContactInfo = {
  name: "J",
  age: 27,
  email: "@",
};
printUserInfo(user1);

// This also works even if we dont give type to object
// all the function need is fields should be present
const user2 = {
  name: "J",
  age: 27,
  email: "@",
};
printUserInfo(user2);

// use interfaces with implment, although we can implement types as well
// INTERFACES
interface LocationInfo {
  city: string;
  //  | this is not allowed in interface
  pin: number | string;
}
interface AddressInfo extends LocationInfo {
  line1: string;
}
function printLocationInfo(location: LocationInfo) {
  console.log(location);
}
const location1: LocationInfo = {
  city: "Mumbai",
  pin: 123,
};
printLocationInfo(location1);

// RECURSION
type NesteNumber = number | NesteNumber[]
