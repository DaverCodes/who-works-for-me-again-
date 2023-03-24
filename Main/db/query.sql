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
      choices: [{name:"View All employees" , value: "SELECT * FROM employee"}]
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
            choices: [{name:"View All Roles" , value: "SELECT * FROM role"}]
          }
        ])
