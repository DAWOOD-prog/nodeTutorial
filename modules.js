const { info, percent } = require("./utils");
const { students } = require("./names");

students.map((student) => {
  info(student.name, student.age, student.roll);
  percent(student.marks);
});
