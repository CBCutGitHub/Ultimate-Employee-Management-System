USE employee_DB;

INSERT INTO departments (name)
VALUES 
("Program Director"),
("Requirements"),
("Development"),
("Integration"),
("Deployment");
--Add "Testing"

INSERT INTO roles (title, salary, department_id)
VALUES

("Director", 90000, 1),
("Requirement SME", 45000, 2),
("Coding Architect", 60000, 3),
("Systems Manager", 55000, 4),
("Database Admin", 50000, 5);

--Add "Testing Admin", 35000, 6 

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("Alvin", "Hawkins", 1, 1),
("Teri", "Diggs", 2, null),
("Michelle", "Dover", 3, 3),
("Steve", "Logan", 4, null),
("Darrell", "Jones", 5, 5);

-- Add "Bill", "Sandford", 1, 1 as director 95000
--
-- USE employee_DB;
--
-- INSERT INTO departments (name)
-- VALUES 
-- ("Assembly"),
-- ("Benching"),
-- ("Machining"),
-- ("EDM"),
-- ("Engineering");
--
-- INSERT INTO roles (title, salary, department_id)
-- VALUES 
-- ("Manager", 80000, 1),
-- ("Assistant Manager", 70000, 2),
-- ("Team Leader", 60000, 3),
-- ("Engineer", 50000, 4),
-- ("Designer", 40000, 5);
--
-- INSERT INTO employees (first_name, last_name, role_id, manager_id)
-- VALUES 
-- ("Robert", "Sunde", 1, 1),
-- ("Joe", "Smith", 2, null),
-- ("Bill", "Alsosmith", 3, 3),
-- ("Dave", "Williams", 4, null),
-- ("Andy", "Black", 5, 5);