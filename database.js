const mysql = require('mysql2');
const util = require('util');

// Connection to the database
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Abobora!17',
    database: 'employees_db',
});

// Promisify the pool query method
const query = util.promisify(pool.query).bind(pool);

// Connect to the database
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    connection.release();
    console.log('Connected to the database!');
});

// Function to retrieve all departments from the database
async function getAllDepartments() {
    const sql = 'SELECT * FROM department';
    const departments = await query(sql);
    return departments;
}

// Function to retrieve all roles from the database
async function getAllRoles() {
    const sql = 'SELECT role.*, department.department_name AS department_name FROM role JOIN department ON role.department_id = department.id';
    const roles = await query(sql);
    return roles;
}

// Function to retrieve all employees from the database
async function getAllEmployees() {
    const sql = `SELECT employee.*, role.title AS role_title, department.department_name AS department_name, CONCAT(manager.first_name, " ", manager.last_name) AS manager_name
                 FROM employee
                 JOIN role ON employee.role_id = role.id
                 JOIN department ON role.department_id = department.id
                 LEFT JOIN employee AS manager ON employee.manager_id = manager.id`;
    const employees = await query(sql);
    return employees;
}
  

// Function to add a new department to the database
async function addDepartment(name) {
    const sql = 'INSERT INTO department (department_name) VALUES (?)';
    await query(sql, [name]);
}

// Function to add a new role to the database
async function addRole(title, salary, departmentId) {
    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    await query(sql, [title, salary, departmentId]);
}

// Function to add a new employee to the database
async function addEmployee(firstName, lastName, roleId, managerId) {
    const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    await query(sql, [firstName, lastName, roleId, managerId]);
}

// Function to update an employee's role in the database
async function updateEmployeeRole(employeeId, roleId) {
    const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
    await query(sql, [roleId, employeeId]);
}

// Function to update an employee's manager in the database
async function updateEmployeeManager(employeeId, managerId) {
    const sql = 'UPDATE employee SET manager_id = ? WHERE id = ?';
    await query(sql, [managerId, employeeId]);
}

// Function to view employees by department
async function viewEmployeesByDepartment(departmentId) {
    const sql = `SELECT employee.*, role.title AS role_title, department.department_name AS department_name
                FROM employee
                JOIN role ON employee.role_id = role.id
                JOIN department ON role.department_id = department.id
                WHERE department.id = ?`;
    const employees = await query(sql, [departmentId]);
    return employees;
 }
  
// Function to delete an employee from the database
async function deleteEmployee(employeeId) {
    const sql = 'DELETE FROM employee WHERE id = ?';
    await query(sql, [employeeId]);
}
  
// Function to get the department budget
async function getDepartmentBudget(departmentId) {
    const sql =
      'SELECT SUM(role.salary) AS department_budget FROM employee JOIN role ON employee.role_id = role.id WHERE role.department_id = ?';
    const result = await query(sql, [departmentId]);
    const departmentBudget = result[0].department_budget;
    return departmentBudget;
}
  
module.exports = {
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
};