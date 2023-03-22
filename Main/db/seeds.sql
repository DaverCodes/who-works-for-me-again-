INSERT INTO department (id, name) VALUES
  (1, 'Dogs with Jobs'),
  (2, 'Pet Food'),
  (3, 'Odor Judge');

INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'Dog who will eat anything', 75000, 1),
  (2, 'Picky dogs', 95000, 1),
  (3, 'Dog Manager', 120000, 1),
  (4, 'Pet Food Engineer', 45000, 2),
  (5, 'Senior Pet Food Engineer', 75000, 2),
  (6, 'Odor Judge', 60000, 3),
  (7, 'Odor Judge Manager and Representative', 95000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'Alley', 'Gator', 1, null),
  (2, 'Barb', 'Dwyer', 2, 1),
  (3, 'Bea', 'Minor', 3, 1),
  (4, 'Dee', 'Sember', 4, null),
  (5, 'Drew', 'Chapman', 5, 4),
  (6, 'Justin', 'Thyme', 6, null),
  (7, 'Noah', 'Fence', 7, 6),
  (8, 'Holly', 'McRell', 7, 6),
  (9, 'Paige', 'Turner', 7, 6),
  (10, 'Ben', 'Odrell', 7, 6);



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
    choices: [/* list of available roles */]
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