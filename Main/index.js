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
     {name:"View All Employees" , value: "VIEW_ALL_EMPLOYEES"},
     {name:"Add Employees" , value: "ADD_EMPLOYEES"},
     {name:"Update Employee Role" , value: "UPDATE_EMPLOYEE_ROLE"},
     {name:"View All Roles" , value: "VIEW_ALL_ROLES"},
     {name:"Add Role" , value: "ADD_ROLE"},
     {name:"View All Departments" , value: "VIEW_ALL_DEPARTMENTS"},
     {name:"Add Department" , value: "ADD_DEPARTMENT"},
     {name:"Quit" , value: "QUIT"}
    ]
}])

.then((answers) => {
  console.log(answers);
  // Switch case to handle different options
  switch (answers.company) {
    case "VIEW_ALL_EMPLOYEES":
      viewAllEmployees();
      break;
    case "ADD_EMPLOYEES":
      addEmployee();
      break;
    case "UPDATE_EMPLOYEE_ROLE":
      updateEmployeeRole();
      break;
    case "VIEW_ALL_ROLES":
      viewAllRoles();
      break;
    case "ADD_ROLE":
      addRole();
      break;
    case "VIEW_ALL_DEPARTMENTS":
      viewAllDepartments();
      break;
    case "ADD_DEPARTMENT":
      addDepartment();
      break;
    case "QUIT":
      console.log("Goodbye!");
      db.end();
      break;
    default:
      console.log("Invalid option");
      promptUser();
  }
})
.catch((error) => {
  console.log(error);
});
}
promptUser();


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




  

  



