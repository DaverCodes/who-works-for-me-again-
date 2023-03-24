const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Wh@tTh3C@t',
    database: 'employee_db'
  },
  console.log(`The Good Doggo Grub Galaxy database.`)
);

function promptUser() {
  inquirer 
  .prompt([{
    type: "list",
    name: "company",
    message: "what would you like to do?",
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

function viewAllEmployees() {
  const query = "SELECT * FROM employee";
  db.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

function addEmployee() {
inquirer.prompt([
  {
    type: "input",
    name: "first_name",
    message: "What is the employee's first name?"
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employee's last name?"
  },
  {
    type: "list",
    name: "role_id",
    message: "What is their role?",
    choices: [
      {name: "Dog who will eat anything", value: "dog_eater"},
      {name: "Picky dogs", value: "picky_dogs"},
      {name: "Dog Manager", value: "dog_manager"},
      {name: "Pet Food Engineer", value: "food_engineer"},
      {name: "Senior Pet Food Engineer", value: "senior_engineer"},
      {name: "Odor Judge", value: "odor_judge"},
      {name: "Odor Judge Manager", value: "odor_judge_manager"},
      {name: "Representative", value: "representative"}
]},
  {
    type: "input",
    name: "salary",
    message: "What is their salary?"
  }
])
  .then((answers) => {
    const query = `INSERT INTO employee (first_name, last_name, role_id, salary) VALUES ("${answers.first_name}", "${answers.last_name}", "${answers.role_id})", "${answers.salary}"`;
    db.query(query, (err, res) => {
      if (err) throw err;
      console.log("Employee added successfully!");
      promptUser();
    });
  })
  .catch((error) => {
    console.log(error);
  });
};

function updateEmployeeRole(){
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?"
    },
    {
      type: "list",
      name: "employee_id",
      message: "which employee?",
      choices: [
        {name: "Alley Gator", value: "1"},
        {name: "Barb Dwyer", value: "2"},
        {name: "Bea Minor", value: "3"},
        {name: "Dee Sember", value: "4"},
        {name: "Drew Champman", value: "5"},
        {name: "Justin Thyme", value: "6"},
        {name: "Noah Fence", value: "7"},
        {name: "Holly McRell", value: "8"},
        {name: "Paige Turner", value: "9"},
        {name: "Ben Odrell", value: "10"},]
    },
    {type: "list",
    name: "role_id",
    message: "what is their new role?",
    choices: [
      {name: "Dog who will eat anything", value: "dog_eater"},
      {name: "Picky dogs", value: "picky_dogs"},
      {name: "Dog Manager", value: "dog_manager"},
      {name: "Pet Food Engineer", value: "food_engineer"},
      {name: "Senior Pet Food Engineer", value: "senior_engineer"},
      {name: "Odor Judge", value: "odor_judge"},
      {name: "Odor Judge Manager", value: "odor_judge_manager"},
      {name: "Representative", value: "representative"}
  ]}])
      // .then((answers) => {
      // const roleQuery = "SELECT * FROM role";
      // db.query(roleQuery, (err, results) => {
      //   if (err) throw err;
      //   const roles = results.map(role => ({
      //     name: role.title,
      //     value: role.id
      //   }));
        // inquirer.prompt([
        //   {
        //     type: "list",
        //     name: "roleId",
        //     message: "Which role would you like to assign to this employee?",
        //     choices: [{name:"View All Roles" , value: "SELECT * FROM role"}]
        //   }
        // ])
        .then((answers) => {
          const updateQuery = `UPDATE employee SET role_id = ${answers.roleId} WHERE id = ${answers.employeeId}`;
          db.query(updateQuery, (err, res) => {
            if (err) throw err;
            console.log("Employee role updated successfully!");
            promptUser();
          });
        })
        .catch((error) => {
          console.log(error);
        });
      };
     
    

function viewAllRoles() {
  const query = "SELECT * FROM role";
  db.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the new role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?",
      },
      {
        type: "list",
        name: "department",
        message: "Which department does this role belong to?",
        choices:[
          {name: "Dogs with Jobs", value: "Dogs with Jobs"},
          {name: "Pet Food", value: "Pet Food"},
          {name: "Odor Judge", value: "Odor Judge"}
    ]},
    ])
    .then((answers) => {
      const query = `INSERT INTO role (title, department_id) VALUES ("${answers.title}", ${answers.department})`;
      db.query(query, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Added ${answers.title} to the database.`);
        }
        promptUser();
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

function viewAllDepartments() {
  const query = "SELECT * FROM department";
  db.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
}

function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the department you want to add?"
    }
  ])
  .then((answers) => {
    const query = `INSERT INTO department (name) VALUES ("${answers.name}")`;
    db.query(query, (err, res) => {
      if (err) throw err;
      console.log("Department added successfully!");
      promptUser();
    });
  })
  .catch((error) => {
    console.log(error);
  });
};
