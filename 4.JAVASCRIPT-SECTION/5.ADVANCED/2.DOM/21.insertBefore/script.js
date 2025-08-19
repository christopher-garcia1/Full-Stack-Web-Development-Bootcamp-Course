// let's create a complex example that demonstrates the use of `insertBefore` to manage a list of students based on their grades. In this example, we'll keep the list sorted based on the grade of each student. As new students are added, they will be inserted in the correct position to maintain the sorted list.

// Function to add a new student
const newStudent = (name, grade) => {
  const divEl = document.createElement("div");
  divEl.className = "student";
  divEl.textContent = `${name}: ${grade}`;

  const studentContainer = document.getElementById("studentList");
  let beforeNode = null;
  for (const child of studentContainer.children) {
    const childGrade = parseInt(child.textContent.split(':')[1]) 
    if (grade > childGrade) {
      beforeNode = child;
      break;
    }
  }
  studentContainer.insertBefore(divEl, beforeNode)

};
//Create a new div element to hold the student info

//add css to it

//Create a text node containing the student name and grade

//Append the text node to the div element

//select the container

//Loop through existing students to find the correct position for the new student

//insert the new student in the correct position

newStudent("Chris", 99);
newStudent('Jason', 55);
newStudent('Angela', 75)

