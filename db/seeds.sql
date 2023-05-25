-- Departments
INSERT INTO department (name) VALUES ('Product');
INSERT INTO department (name) VALUES ('Operations');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Maarketing');

-- Roles
INSERT INTO role (title, salary, department_id) VALUES ('Product Manager', 90000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Chief Product Officer', 1500000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Director of Operations', 1200000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Operations Manager', 1000000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Business Development Reprsentation', 80000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Enablement Manager', 90000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Product Marketing Director', 130000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('VP of Corporate Comms', 110000, 4);

-- Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Gabby', 'Tofig', 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Marion', 'Meudal', 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Peter', 'DeLuca', 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Suzette', 'Wright', 4, 1);