const inquirer = require('inquirer');
const mysql = require('mysql2');
const util = require('util');
const {
  getAllDepartments,
  getAllRoles,
  getAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  query
} = require('./database.js');

// Function to display the main menu
function displayMainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                ]
            }
        ])
        .then((answers) => {
            switch (answers.action) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addNewDepartment();
                    break;
                case 'Add a role':
                    addNewRole();
                    break;
                case 'Add an employee':
                    addNewEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployee();
                    process.exit(0);
            }
        });
}

// Function to view all departments
function viewAllDepartments() {
    getAllDepartments()
        .then((departments) => {
            console.table(departments);
            displayMainMenu();
        })
        .catch((error) => {
            console.error('Error retrieving departments:', error);
            displayMainMenu();
        });
}

// Function to view all roles
function viewAllRoles() {
    getAllRoles()
        .then((roles) => {
            console.table(roles);
            displayMainMenu();
        })
        .catch((error) => {
            console.error('Error retrieving roles:', error);
            displayMainMenu();
        });
}

// Function to view all employees
function viewAllEmployees() {
    getAllEmployees()
        .then((employees) => {
            console.table(employees);
            displayMainMenu();
        })
        .catch((error) => {
            console.error('Error retrieving employees:', error);
            displayMainMenu();
        });
}

// Function to add a new department
function addNewDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:'
            }
        ])
        .then((answers) => {
            addDepartment(answers.name)
                .then(() => {
                    console.log('Department added successfully!');
                    displayMainMenu();
            })
            .catch((error) => {
                console.error('Error adding department.', error);
                displayMainMenu();
            });
        });
}

// Function to add a new role
function addNewRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the name of the role:',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary for the role:',
            },
            {
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:',
            },
        ])
        .then(async (answers) => {
            try {
                const { title, salary, departmentName } = answers;

                // Fetch the department ID based on the department name
                const departmentSql = 'SELECT id FROM department WHERE department_name = ?';
                const departmentResult = await query(departmentSql, [departmentName]);
                const departmentId = departmentResult[0].id;

                // Insert the role with the correct department ID
                const insertRoleSql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
                await query(insertRoleSql, [title, salary, departmentId]);

                console.log('Role added successfully!');
            } catch (error) {
                console.error('Error adding role.', error);
            } finally {
                displayMainMenu();
            }
        });
}
  
// Function to add a new employee
function addNewEmployee() {
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the employee.'
            },
            {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the employee.'
            },
            {
            type: 'input',
            name: 'roleName',
            message: 'Enter the role of the employee.'
            },
            {
            type: 'input',
            name: 'managerName',
            message: 'Enter the name of the manager of the employee.'
            }
        ])
        .then((answers) => {
            addEmployee(answers.firstName, answers.lastName, answers.roleId, answers.managerId)
                .then(() => {
                    console.log('Employee added successfully!');
                    displayMainMenu();
                })
                .catch((error) => {
                    console.error('Error adding employee.', error);
                    displayMainMenu();
                });
        });
}
  
// Function to update an employee's role
function updateEmployee() {
    Promise.all([getAllEmployees(), getAllRoles()])
        .then(([employees, roles]) => {
        inquirer
            .prompt([
            {
                type: 'list',
                name: 'employeeId',
                message: 'Select the employee you would like to update.',
                choices: employees.map((employee) => ({
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id
            }))
            },
            {
                type: 'list',
                name: 'roleId',
                message: 'Select the new role for the employee:',
                choices: roles.map((role) => ({
                name: role.title,
                value: role.id
            }))
        }
    ])
    .then((answers) => {
        updateEmployeeRole(answers.employeeId, answers.roleId)
            .then(() => {
                console.log('Employee role updated successfully!');
                displayMainMenu();
            })
            .catch((error) => {
                console.error('Error updating employee role:', error);
                displayMainMenu();
            });
        });
    })
        .catch((error) => {
            console.error('Error retrieving employees or roles:', error);
            displayMainMenu();
        });
}  
  
  // Start the application
  displayMainMenu();