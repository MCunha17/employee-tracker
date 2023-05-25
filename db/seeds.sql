-- Insert seed data for departments
INSERT INTO department (department_name) VALUES ('Product');
INSERT INTO department (department_name) VALUES ('Operations');
INSERT INTO department (department_name) VALUES ('Sales');
INSERT INTO department (department_name) VALUES ('Marketing');

-- Insert seed data for roles
INSERT INTO role (title, salary, department_id) VALUES ('Product Manager', 90000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Chief Product Officer', 150000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Director of Operations', 120000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Operations Manager', 100000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Business Dev Rep', 80000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Enablement Manager', 90000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('Product Marketing Director', 130000, 4);
INSERT INTO role (title, salary, department_id) VALUES ('VP of Corporate Comms', 110000, 4);

-- Insert seed data for employees
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Gabby', 'Tofig', 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Marion', 'Meudal', 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Peter', 'DeLuca', 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ('Suzette', 'Wright', 4);

-- Update manager_id after inserting all employees
UPDATE employee SET manager_id = 4 WHERE first_name = 'Gabby';
UPDATE employee SET manager_id = 3 WHERE first_name = 'Marion';
UPDATE employee SET manager_id = 2 WHERE first_name = 'Peter';
UPDATE employee SET manager_id = 1 WHERE first_name = 'Suzette';