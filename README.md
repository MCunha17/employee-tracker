# Note Taker Application

![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)

The displayed license badge is sourced from <a href="https://shields.io/category/license">Shields IO</a>.

## Description
This command-line application allows business owners to view and manage departments, roles, and employees in their company. It provides a convenient way to organize and plan business operations.

You can access the deployed [here](https://mc-note-taker.herokuapp.com/) and the GitHub repository [here](https://github.com/MCunha17/note-taker-app).

![Screenshot of application](/public/assets/images/note-taker-app-screenshot.png)

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
View all employees: Displays a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and managers that the employees report to.
Add a department: Prompts the user to enter a new department name, and then that department is added to the database.
Add a role: Prompts the user to enter the name of the role, salary, and department for the role, and then that role is added to the database.
Add an employee: Prompts the user to enter the employee's first name, last name, role, and manager, and then that employee is added to the database.
Update an employee role: Prompts the user to select an employee to update and their new role, and then this information is updated in the database.
View employees by manager: Prompts the user to select a manager and then displays all employees who have that manager.
View employees by department: Prompts the user to select a department and then displays all employees within that department.
Delete an employee: Prompts the user to select an employee to delete, confirms that the user wants to delete that employee, and then removes that employee from the database.
Get department budgets: Prompts the user to select a department and then displays the budget for that department, which is the sum of all the employee salaries within that department.

## Usage
Clone the repository to your local machine.
Navigate to the project directory.
Run npm install to install the required dependencies.
Set up your database connection by modifying the configuration file.
Run node index.js to start the application.
Follow the on-screen prompts to view and manage departments, roles, and employees.

## Technologies Used
Node.js
MySQL (or any compatible SQL database)
npm (Node Package Manager)
Inquirer.js (for user prompts and input)
Console.table (for formatting and displaying data in tables)

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your proposed contributions.

## License
This project is licensed under: MIT License.

## Tests
Currently, there are no tests implemented for this project. If you would like to contribute, please follow the [contributing guidelines](#contributing).

## Resources
The following resources were referenced to create this application:
* Express JS: [Route Parameters](https://expressjs.com/en/guide/routing.html#route-parameters)
* Express JS: [Static Files](https://expressjs.com/en/starter/static-files.html)
* Express JS: [Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
* Express JS: [Expres Body Parsing](https://expressjs.com/en/api.html#req.body)
* Node.js: [Data Persistence Using JSON](https://nodejs.org/api/fs.html#fs_file_system)
* Express JS: [Writng Middleware for Use in Express Apps](https://expressjs.com/en/guide/writing-middleware.html)
* Geeks for Geeks: [Express.js app.delete() Function](https://www.geeksforgeeks.org/express-js-app-delete-function/)

## Questions
If you have any questions, please visit my GitHub profile [MCunha17](https://github.com/MCunha17) or contact me at cunha.maria.theresa@gmail.com.