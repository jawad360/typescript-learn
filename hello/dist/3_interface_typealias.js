function printUserInfo(user) {
    console.log(user);
}
const user1 = {
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
function printLocationInfo(location) {
    console.log(location);
}
const location1 = {
    city: "Mumbai",
    pin: 123,
};
printLocationInfo(location1);
