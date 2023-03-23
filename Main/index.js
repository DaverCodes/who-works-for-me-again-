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
  console.log(`Congrats! You made it to the employee_db database.`)
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
    choices: [{name:"View All Roles" , value: "VIEW_ALL_ROLES"}]
  },
  {
    type: "input",
    name: "salary",
    message: "What is their salary?"
  }
])
  .then((answers) => {
    const query = `INSERT INTO employee (first_name, last_name, role_id, salary) VALUES ("${answers.first_name}", "${answers.last_name}", ${answers.role_id}, ${answers.salary})`;
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
  const query = "SELECT * FROM employee";
  db.query(query, (err, results) => {
    if (err) throw err;
    const employees = results.map(employee => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }));
  inquirer.prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee's role would you like to update?",
      choices: employees
    }
  ])
    .then((answers) => {
      const roleQuery = "SELECT * FROM role";
      db.query(roleQuery, (err, results) => {
        if (err) throw err;
        const roles = results.map(role => ({
          name: role.title,
          value: role.id
        }));
        inquirer.prompt([
          {
            type: "list",
            name: "roleId",
            message: "Which role would you like to assign to this employee?",
            choices: roles
          }
        ])
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
      });
    })
    .catch((error) => {
      console.log(error);
    });
  });
}

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
        choices: () => {
          return new Promise((resolve, reject) => {
            const query = "SELECT * FROM department";
            db.query(query, (err, res) => {
              if (err) {
                reject(err);
              } else {
                const choices = res.map((department) => ({
                  name: department.name,
                  value: department.id,
                }));
                resolve(choices);
              }
            });
          });
        },
      },
    ])
    .then((answers) => {
      const query = `INSERT INTO role (title, salary, department_id) VALUES ("${answers.title}", ${answers.salary}, ${answers.department})`;
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
