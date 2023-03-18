const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Wh@tTh3C@t',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

function promptUser() {
  inquirer 
  .prompt([{
    type: "list",
    name: "company",
    message: "what would you like to do? (use arrow keys)",
    choices: [
     {name:" View All Employees" , value: "VIEW_ALL_EMPLOYEES"}
    ]
}])

  .then((answers) => {
    console.log(answers);
    if (answers.company) {
      
    }
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

promptUser() 

//FIRST INQUIERER SCREEN
// Prompt Header 
// what would you like to do? (use arrow keys)
//   an inquierer header to a scrollable list that shows 7 options at a time


// option 1
// View All Employees
//   shows you the employee table 

// option 2
// Add Employees
//   adds an employee to the table

// option 3
// Update Employee Role 
//   changes the role_id of an existing employee

// option 4
// View All Roles 
//   brings you to the role table

// option 5
// Add Role 
//   add a role to the role table 

// option 6
// View All Departements 
//   brings you to the department table SELECT * FROM department;

// option 7
// Add Department 
//   add a department to the department table

// option 8
// Quit
//   exit inquirer

//SECOND INQUIRER SCREEN

// option 1 
//   SHOW TABLE employee


// option 2
//   What is the employees first name?
//     insert text response into first_name

//   What is the employees last name?
//     insert text response into first_name

//   What is their role?
//     show a list of all the role possibilities
//       have the user clicked role add the role id to the employee key 

//   compile user response into a new employee with an auto generated id

// option 3
//   Which employee are you changing the role of?
//     show a scrollable list of all employees 

//   What role would you like to give to this employee? 
//     show a scrollable list of available roles

//   update chosen employee's role_id

// option 4
//   SHOW TABLE role

// option 5
//   What role would you like to add?
//     user text response creates title 

//   Choose the departemnt this role exists in.
//     show a list of departements

//   Is this a Manager position? Y or N 
//     update manager_id accordingly
  
// compile user response




  

  



