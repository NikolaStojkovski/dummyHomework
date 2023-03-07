const students = [];
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getOlder() {
    this.age++;
  }
}
students.push(new Student("Ivan", 25));
students.push(new Student("Jovana", 19));
students.push(new Student("Blagoja", 23));
students.push(new Student("Anastasija", 23));
students.push(new Student("Pero", 56));
students.push(new Student("Zoran", 25));
students.push(new Student("Goran", 25));

const olderThanTwentyFive = students.filter((s) => s.age > 25);
console.log(olderThanTwentyFive);

const namesOfAllStudents = students.map((student) => student.name);
console.log(namesOfAllStudents);

const namesOfAllStudentsYoungerThanTwentyFive = students
  .filter((s) => s.age < 25)
  .map((s) => s.name);
console.log(namesOfAllStudentsYoungerThanTwentyFive);

students.sort((a, b) => a.age - b.age);
console.log(students);
