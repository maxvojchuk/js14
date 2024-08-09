import users from "./users.js";

//1
let userNames = users.map((user) => user.name);
console.log(userNames);
//2
const findEyeColorOfUser = users.filter((user) => user.eyeColor === "blue");

console.log(findEyeColorOfUser);
//3
const maleUserNames = users.filter((user) => user.gender === "male");
const femaleUserNames = users.filter((user) => user.gender === "female");

console.log(maleUserNames);
console.log(femaleUserNames);
//4
const inactiveUsers = users.filter((user) => !user.isActive);

console.log(inactiveUsers);
//5
const userEmail = "anton@gmail.com";
const findUserEmail = users.find((user) => user.email === userEmail);

console.log(findUserEmail);

//6

const filterAgeUsers = users.filter((user) => user.age >= 10 && user.age <= 20);

console.log(filterAgeUsers);
