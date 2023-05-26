# Employee Tracker Application

![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)

The displayed license badge is sourced from <a href="https://shields.io/category/license">Shields IO</a>.

## Description
The Employee Tracker is a command-line application designed to streamline the management of departments, roles, and employees within a company. It offers a convenient and efficient way for business owners to organize and plan their business operations. With this application, users can view and track all departments, roles, and employees in their company, gaining a comprehensive understanding of the organizational structure and workforce.

You can view a video of the application's functionality [here](https://drive.google.com/file/d/1sINT3tKlzLKeQ9XV1bZpjn8mwkw0_9Py/view?usp=sharing) and the GitHub repository [here](https://github.com/MCunha17/employee-tracker).

![Screenshot of application](/assets/images/employee-tracker-image.png)

## Table of Contents
* [Features](#features)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Resources](#resources)
* [Questions](#questions)

## Features
* View all departments: Displays a formatted table showing department names and IDs.
* View all roles: Displays a formatted table showing titles, role IDs, department that the role belongs to, and the salary for each role.
* View all employees: Displays a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and managers that the employees report to.
* Add a department: Prompts the user to enter a new department name, and then that department is added to the database.
* Add a role: Prompts the user to enter the name of the role, salary, and department for the role, and then that role is added to the database.
* Add an employee: Prompts the user to enter the employee's first name, last name, role, and manager, and then that employee is added to the database.
* Update an employee role: Prompts the user to select an employee to update and their new role, and then this information is updated in the database.
* View employees by department: Prompts the user to select a department and then displays all employees within that department.
* Delete an employee: Prompts the user to select an employee to delete, confirms that the user wants to delete that employee, and then removes that employee from the database.
* Get department budgets: Prompts the user to select a department and then displays the budget for that department, which is the sum of all the employee salaries within that department.

## Usage
* Clone the repository to your local machine.
* Navigate to the project directory.
* Run npm install to install the required dependencies.
* Run node app.js to start the application.
* Follow the on-screen prompts to view and manage departments, roles, and employees.

## Technologies Used
* Node.js verson 16.18
* Inquirer 8.2.4 (for user prompts and input)
* MySQL2
* npm (Node Package Manager)

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your proposed contributions.

## License
This project is licensed under: MIT License.

## Tests
Currently, there are no tests implemented for this project. If you would like to contribute, please follow the [contributing guidelines](#contributing).

## Resources
The following resources were referenced to create this application:
* MySQL: [Loading Data into a Table](https://dev.mysql.com/doc/refman/8.0/en/loading-tables.html)
* MySQL: [Primary Key and Unique Index Constraints](https://dev.mysql.com/doc/refman/8.0/en/constraint-primary-key.html)
* MySQL: [Foreign Key Constraints](https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html)
* MySQL: [Data Types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)
* MySQL: [Loading Data into a Table](https://dev.mysql.com/doc/refman/8.0/en/loading-tables.html)
* MySQL: [Creating a Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* Oracle: [Schema Objects](https://docs.oracle.com/cd/B19306_01/server.102/b14220/schema.htm)
* W3 Schools: [JavaScript Promises](https://www.w3schools.com/js/js_promise.asp)
* W3 Schools: [SQL Aliases](https://www.w3schools.com/sql/sql_alias.asp)
* W3 Resource: [Node.js with MySql](https://www.w3resource.com/node.js/nodejs-mysql.php)


## Questions
If you have any questions, please visit my GitHub profile [MCunha17](https://github.com/MCunha17) or contact me at cunha.maria.theresa@gmail.com.