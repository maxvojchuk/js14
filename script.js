const users = [
  {
    name: "Max",
    eyeColor: "blue",
    gender: "male",
    isActive: true,
    email: "maxhohotyn@gmail.com",
    age: 15,
  },
  {
    name: "Vlad",
    eyeColor: "green",
    gender: "male",
    isActive: false,
    email: "vledtop@gmail.com",
    age: 20,
  },
  {
    name: "Ann",
    eyeColor: "blue",
    gender: "female",
    isActive: true,
    email: "annverta@gmail.com",
    age: 10,
  },
  {
    name: "Anton",
    eyeColor: "red",
    gender: "male",
    isActive: false,
    email: "anton@gmail.com",
    age: 21,
  },
  {
    id: 4,
    name: "Alice ",
    eyeColor: "drown",
    gender: "female",
    isActive: false,
    email: "alicebrown@gmail.com",
    age: 9,
  },
];
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
