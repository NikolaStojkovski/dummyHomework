const { Users } = require("./helper");
const fs = require("fs");
const path = require("path");
const fileName = path.join(__dirname, "users.json");

let userList = [];

userList.push(new Users("Nikola", "testpassword", 18, true, "06.03.2023"));
userList.push(new Users("Darko", "testpassword1", 20, true, "06.03.2023"));
userList.push(new Users("Jovan", "testpassword2", 19, true, "06.03.2023"));
userList.push(new Users("Ivan", "testpassword3", 70, true, "01.02.2023"));
userList.push(new Users("Aleksandar", "testpassword4", 42, true, "06.03.2023"));
userList.push(new Users("Filip", "testpassword5", 66, true, "10.12.2000"));
userList.push(new Users("Elena", "testpassword6", 19, true, "25.06.2020"));
userList.push(new Users("Mario", "testpassword7", 19, true, "22.10.2012"));
userList.push(new Users("David", "testpassword8", 16, true, "06.03.2023"));
userList.push(new Users("Dragan", "testpassword9", 19, true, "06.03.2023"));

fs.writeFileSync(fileName, JSON.stringify(userList));

//! Creating a new user
const CreateNewUser = (username, password, age, isActive, date) => {
  userList.push(new Users(username, password, age, isActive, date));
  let oldData = JSON.parse(fs.readFileSync(fileName));
  fs.writeFileSync(fileName, JSON.stringify([...oldData, ...userList]));
};

CreateNewUser("Goran", "somePass", 35, true, "06.03.2023");

//! Making old users inactive
const OlderUsersInactive = () => {
  let oldData = JSON.parse(fs.readFileSync(fileName));
  oldData.forEach((user) => {
    if (user.date !== "06.03.2023") user.isActive = false;
  });
  fs.writeFileSync(fileName, JSON.stringify(oldData));
};
OlderUsersInactive();

//! Deleting user by username
const DeletingUsers = (userName) => {
  let oldData = JSON.parse(fs.readFileSync(fileName));
  let newData = oldData.filter((user) => user.username !== userName);
  fs.writeFileSync(fileName, JSON.stringify(newData));
};
DeletingUsers("Goran");

//! Deleting users that are Inactive
const DeletingInactiveUsers = () => {
  let oldData = JSON.parse(fs.readFileSync(fileName));
  let newData = oldData.filter((user) => user.isActive !== false);
  fs.writeFileSync(fileName, JSON.stringify(newData));
};
DeletingInactiveUsers();
