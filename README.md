# Good Doggo Grub Galaxy Employee Database

This is a command-line application that allows users to manage employees, roles, and departments for Good Doggo Grub Galaxy. The application uses the following dependencies:

* inquirer - for user prompts and input
* mysql2 - for connecting to and querying the MySQL database
* console.table - for displaying database data in a formatted table

## Installation
To use this application, clone this repository and install the dependencies using the following command:

    * npm install

The user will have to insure MYSQL is properly set up, access the schema.sql file directly through the terminal. At this point you will be using the following command:

    * mysql -u root -p

The user must access the data within each .sql file, from the same terminal use the following commands:

    * source schema.sql
    * source query.sql
    * source seeds.sql

Lastly begin the program with the following command:

    * npm i

## Usage

When the application is started, users are prompted to select from a list of options:

* View All Employees
* Add Employees
* Update Employee Role
* View All Roles
* Add Role
* View All Departments
* Add Department
* Quit
Each option triggers a different function that interacts with the MySQL database.

### View All Employees
Displays a table of all employees, including their first and last names, roles, departments, salaries, and managers.

### Add Employees
Prompts the user to enter the new employee's first and last names and role. The user can select the role from a list of all roles in the database.

### Update Employee Role
Prompts the user to select an employee from a list of all employees in the database, and then select a new role from a list of all roles in the database.

### View All Roles
Displays a table of all roles, including their title, salary, and department.

### Add Role
Prompts the user to enter the new role's title, salary, and department. The user can select the department from a list of all departments in the database.

### View All Departments
Displays a table of all departments, including their name.

### Add Department
Prompts the user to enter the new department's name.

### Quit
Ends the application.


## video representations of usage 

## License
This application is licensed under the MIT license.
