const inquirer = require('inquirer');
const {
    getAllDepartments, 
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    viewEmployeesByDepartment,
    deleteEmployee,
    getDepartmentBudget,
    query,
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
                    'View employees by department',
                    'Delete an employee',
                    'Get department budget',
                    'Exit',
                ],
        },
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
                updateRole();
                break;
            case 'View employees by department':
                viewByDepartment();
                break;
            case 'Delete a department':
                removeDepartment();
                break;
            case 'Delete a role':
                removeRole();
                break;
            case 'Delete an employee':
                removeEmployee();
                break;
            case 'Get department budget':
                viewDepartmentBudget();
                break;
            case 'Exit':
                process.exit();
                break;
            default:
                console.log('Please try again');
                displayMainMenu();
                break;
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
                message: 'Enter the name of the department:',
            },
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
                await addRole(title, salary, departmentId);
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
    Promise.all([getAllRoles(), getAllEmployees()])
        .then(([roles, employees]) => {
            inquirer
                .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the first name of the employee:',
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the last name of the employee:',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Select the role of the employee:',
                    choices: roles.map((role) => ({
                        name: role.title,
                        value: role.id,
                })),
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: 'Select the manager of the employee:',
                    choices: employees.map((employee) => ({
                        name: `${employee.first_name} ${employee.last_name}`,
                        value: employee.id,
                     })),
                    default: 'No Manager',
                },
                ])
            .then(async (answers) => {
                try {
                    const { firstName, lastName, role, manager } = answers;
  
              // Insert the new employee into the database
              await addEmployee(firstName, lastName, role, manager);
              console.log('Employee added successfully!');
            } catch (error) {
              console.error('Error adding employee.', error);
            } finally {
              displayMainMenu();
            }
          });
      })
      .catch((error) => {
        console.error('Error retrieving roles or employees:', error);
        displayMainMenu();
      });
  }
  
// Function to update an employee's role
function updateRole() {
    Promise.all([getAllEmployees(), getAllRoles()])
        .then(([employees, roles]) => {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'employeeId',
                        message: 'Select the employee you would like to update:',
                        choices: employees.map((employee) => ({
                            name: `${employee.first_name} ${employee.last_name}`,
                            value: employee.id,
                        })),
                    },
                    {
                        type: 'list',
                        name: 'roleId',
                        message: 'Select the new role for the employee:',
                        choices: roles.map((role) => ({
                        name: role.title,
                        value: role.id,
                        })),
                    },
                ])
                .then((answers) => {
                    const { employeeId, roleId } = answers;
                    // Update the employee's role in the database
                    updateEmployeeRole(employeeId, roleId)
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

// Function to update an employee's manager
function updateManager() {
    Promise.all([getAllEmployees(), getAllEmployees()])
        .then(([employees, managers]) => {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'employeeId',
                        message: 'Select the employee you would like to update:',
                        choices: employees.map((employee) => ({
                            name: `${employee.first_name} ${employee.last_name}`,
                            value: employee.id,
                        })),
                    },
                    {
                        type: 'list',
                        name: 'managerId',
                        message: 'Select the new manager for the employee:',
                        choices: managers.map((manager) => ({
                            name: `${manager.first_name} ${manager.last_name}`,
                            value: manager.id,
                    })),
                },
            ])
                .then((answers) => {
                    const { employeeId, managerId } = answers;
                    // Update the employee's manager in the database
                    updateEmployeeManager(employeeId, managerId)
                .then(() => {
                    console.log('Employee manager updated successfully!');
                    displayMainMenu();
                })
                .catch((error) => {
                    console.error('Error updating employee manager:', error);
                    displayMainMenu();
                });
            });
        })
        .catch((error) => {
            console.error('Error retrieving employees or managers:', error);
            displayMainMenu();
        });
}
  
// Function to view employees by department
function viewByDepartment() {
    getAllDepartments()
        .then((departments) => {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'departmentId',
                        message: 'Select the department to view employees:',
                        choices: departments.map((department) => ({
                            name: department.department_name,
                            value: department.id,
                        })),
                    },
                ])
                .then((answers) => {
                    const { departmentId } = answers;
                    // Retrieve employees by department ID from the database
                    viewEmployeesByDepartment(departmentId)
                    .then((employees) => {
                        console.table(employees);
                        displayMainMenu();
                    })
                    .catch((error) => {
                        console.error('Error retrieving employees by department:', error);
                        displayMainMenu();
                    });
                });
            })
        .catch((error) => {
            console.error('Error retrieving departments:', error);
            displayMainMenu();
        });
 }
  
// Function to delete an employee
function removeEmployee() {
    getAllEmployees()
        .then((employees) => {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'employeeId',
                        message: 'Select the employee to delete:',
                        choices: employees.map((employee) => ({
                            name: `${employee.first_name} ${employee.last_name}`,
                            value: employee.id,
                        })),
                    },
                ])
                .then((answers) => {
                    const { employeeId } = answers;
                // Confirm the employee deletion
                inquirer
                .prompt([
                    {
                        type: 'confirm',
                        name: 'confirmDelete',
                        message: 'Are you sure you want to delete the selected employee? This action cannot be undone.',
                        default: false,
                    },
                ])
                .then((confirmAnswer) => {
                    if (confirmAnswer.confirmDelete) {
                    // Delete the employee from the database
                        deleteEmployee(employeeId)
                        .then(() => {
                            console.log('Employee deleted successfully!');
                            displayMainMenu();
                        })
                        .catch((error) => {
                            console.error('Error deleting employee:', error);
                            displayMainMenu();
                        });
                    } else {
                        console.log('Employee deletion canceled.');
                        displayMainMenu();
                    }
                });
            });
        })
        .catch((error) => {
            console.error('Error retrieving employees:', error);
            displayMainMenu();
        });
}

// Function to get the department budget
function viewDepartmentBudget() {
    getAllDepartments()
        .then((departments) => {
            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'departmentId',
                        message: 'Select the department to view the budget:',
                        choices: departments.map((department) => ({
                            name: department.department_name,
                            value: department.id,
                        })),
                    },
                ])
                .then((answers) => {
                    const { departmentId } = answers;
                    getDepartmentBudget(departmentId)
                .then((budget) => {
                    console.log(`Department budget: $${budget}`);
                    displayMainMenu();
                    })
                .catch((error) => {
                    console.error('Error getting department budget:', error);
                    displayMainMenu();
                });
            });
        })
        .catch((error) => {
            console.error('Error retrieving departments:', error);
            displayMainMenu();
        });
} 
displayMainMenu();