-- Department data
INSERT INTO department (department_name) VALUES ('Product');
INSERT INTO department (department_name) VALUES ('Operations');
INSERT INTO department (department_name) VALUES ('Sales');
INSERT INTO department (department_name) VALUES ('Marketing');
INSERT INTO department (department_name) VALUES ('Project Management');

-- Role data
INSERT INTO role (title, salary, department_id) VALUES ('Head of Product', 150000, (SELECT id FROM department WHERE department_name = 'Product'));
INSERT INTO role (title, salary, department_id) VALUES ('Product Manager', 100000, (SELECT id FROM department WHERE department_name = 'Product'));
INSERT INTO role (title, salary, department_id) VALUES ('UX Designer', 80000, (SELECT id FROM department WHERE department_name = 'Product'));
INSERT INTO role (title, salary, department_id) VALUES ('Product Analyst', 70000, (SELECT id FROM department WHERE department_name = 'Product'));
INSERT INTO role (title, salary, department_id) VALUES ('Head of Operations', 120000, (SELECT id FROM department WHERE department_name = 'Operations'));
INSERT INTO role (title, salary, department_id) VALUES ('Operations Manager', 110000, (SELECT id FROM department WHERE department_name = 'Operations'));
INSERT INTO role (title, salary, department_id) VALUES ('Supply Chain Manager', 60000, (SELECT id FROM department WHERE department_name = 'Operations'));
INSERT INTO role (title, salary, department_id) VALUES ('QA Specialist', 50000, (SELECT id FROM department WHERE department_name = 'Operations'));
INSERT INTO role (title, salary, department_id) VALUES ('Head of Marketing', 130000, (SELECT id FROM department WHERE department_name = 'Marketing'));
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Manager', 110000, (SELECT id FROM department WHERE department_name = 'Marketing'));
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Specialist', 70000, (SELECT id FROM department WHERE department_name = 'Marketing'));
INSERT INTO role (title, salary, department_id) VALUES ('Content Writer', 55000, (SELECT id FROM department WHERE department_name = 'Marketing'));
INSERT INTO role (title, salary, department_id) VALUES ('Head of PM', 130000, (SELECT id FROM department WHERE department_name = 'Project Management'));
INSERT INTO role (title, salary, department_id) VALUES ('Project Manager', 100000, (SELECT id FROM department WHERE department_name = 'Project Management'));
INSERT INTO role (title, salary, department_id) VALUES ('Scrum Master', 90000, (SELECT id FROM department WHERE department_name = 'Project Management'));
INSERT INTO role (title, salary, department_id) VALUES ('Project Coordinator', 650000, (SELECT id FROM department WHERE department_name = 'Project Management'));

-- Employee Data
INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Thomas', 'Jefferson', (SELECT id FROM role WHERE title = 'Head of Product'));

INSERT INTO employee (first_name, last_name, role_id, manager_id)
SELECT 'Ava', 'Williams', (SELECT id FROM role WHERE title = 'Product Manager'), e1.id
FROM employee e1
WHERE e1.first_name = 'Thomas' AND e1.last_name = 'Jefferson';

INSERT INTO employee (first_name, last_name, role_id, manager_id)
SELECT 'Michael', 'Robinson', (SELECT id FROM role WHERE title = 'UX Designer'), e2.id
FROM employee e2
WHERE e2.first_name = 'Thomas' AND e2.last_name = 'Jefferson';

INSERT INTO employee (first_name, last_name, role_id, manager_id)
SELECT 'Emily', 'Johnson', (SELECT id FROM role WHERE title = 'Product Analyst'), e3.id
FROM employee e3
WHERE e3.first_name = 'Thomas' AND e3.last_name = 'Jefferson';


INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Emma', 'Smith', (SELECT id FROM role WHERE title = 'Head of Operations'));

INSERT INTO employee (first_name, last_name, role_id, manager_id)
SELECT 'Liam', 'Johnson', (SELECT id FROM role WHERE title = 'Operations Manager'), e4.id
FROM employee e4
WHERE e4.first_name = 'Emma' AND e4.last_name = 'Smith';

INSERT INTO employee (first_name, last_name, role_id, manager_id)
SELECT 'Olivia', 'Brown', (SELECT id FROM role WHERE title = 'Supply Chain Manager'), e5.id
FROM employee e5
WHERE e5.first_name = 'Emma' AND e5.last_name = 'Smith';

INSERT INTO employee (first_name, last_name, role_id, manager_id)
SELECT 'Noah', 'Jones', (SELECT id FROM role WHERE title = 'QA Specialist'), e6.id
FROM employee e6
WHERE e6.first_name = 'Emma' AND e6.last_name = 'Smith';

