const info = (name, roll, age) => {
  console.log(`Name is ${name}`);
  console.log(`Roll Number is ${roll}`);
  console.log(`Age is ${age}`);
};
const percent = (marks) => {
  let percentage = 0;
  for (let mark of marks) {
    percentage += mark;
  }
  percentage = percentage / marks.length;
  console.log(`You obtained ${percentage}%`);
};
module.exports = { info, percent };
