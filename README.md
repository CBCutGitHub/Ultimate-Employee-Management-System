# Ultimate Employee Management System

## Command-Line Application

This application is a command-line app that assists Developers to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. The application is built to demonstrate how to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## Ultimate EMS Comman-Line Application Video

To view video of the comman-line employee management application copy and paste this this link i you favorite browswer: https://drive.google.com/file/d/1h-s-1COJh1yzNgDso4ZwD0VXr-Gtjxez/view. This video was recored utilizing Screencastify [https://www.screencastify.com/]

## Getting Started

You’ll need to use the MySQL2 package, to connect to your MySQL database and perform queries, the Inquirer package to interact with the user via the command line, and the console.table package to print MySQL rows to the console.

**Important**: You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. Recommend researching resources on how to better secure this password such as utilizing npm packages now.

The queries are asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more on making your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

## Database Schema

The database used for this application contains the following three tables:

* `department`
    * `id`: `INT PRIMARY KEY`
    * `name`: `VARCHAR(30)` to hold department name

* `role`
    * `id`: `INT PRIMARY KEY`
    * `title`: `VARCHAR(30)` to hold role title
    * `salary`: `DECIMAL` to hold role salary
    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`
    * `id`: `INT PRIMARY KEY`
    * `first_name`: `VARCHAR(30)` to hold employee first name
    * `last_name`: `VARCHAR(30)` to hold employee last name
    * `role_id`: `INT` to hold reference to employee role
    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

This application uses a separate file that contains functions for performing specific SQL queries; a constructor function or class to organizing these and a pre-populate database to make the development of individual features much easier.

## Possible Additional Functionalities

Recommend considering additional functionalities that would greatly enhance this application by providing the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

## Building the Application

The following packages and their associated links utilized to build this application are listed below:

    * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

    * Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

    * Uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

## References and Credits
Github https://www.github.com
w3schools https://www.w3schools.com
Screencastify [https://www.screencastify.com/]



## Application Features

---command-line application that accepts user input to start the application <br>;
   ** options presented: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and; <br>;
      update an employee role; <br>
   ** view all Departments presented in a formatted table showing department names and department ids; <br>
   ** view all roles presented with the job title, role id, the department that role belongs to, and the salary for that role; <br>
   ** view all employees presented in a formatted table showing employee data, including employee ids, first names, last names, job titles; <br>
      departments, salaries, and managers
      that the employees report to  <br>;
   ** add a department app prompts to enter the name of the department and that department is added to the database  <br>;
   ** add a role app prompts to enter the name, salary, and department for the role and that role is added to the database  <br>;
   ** add an employee app prompts to enter the employee’s first name, last name, role, and manager, and that employee is added to the database  <br>;
   ** update an employee role app prompts to select an employee to update and their new role and this information is updated in the database  <br>;
```
## Ultimate EMS Comman-Line Application Video

To view video of the comman-line employee management application copy and paste this this link i you favorite browswer: https://drive.google.com/file/d/1h-s-1COJh1yzNgDso4ZwD0VXr-Gtjxez/view. This video was recored utilizing Screencastify [https://www.screencastify.com/]

## Getting Started

You’ll need to use the MySQL2 package, to connect to your MySQL database and perform queries, the Inquirer package to interact with the user via the command line, and the console.table package to print MySQL rows to the console.

**Important**: You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. Recommend researching resources on how to better secure this password such as utilizing npm packages now.

The queries are asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more on making your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

## Database Schema

The database used for this application contains the following three tables:

* `department`
    * `id`: `INT PRIMARY KEY`
    * `name`: `VARCHAR(30)` to hold department name

* `role`
    * `id`: `INT PRIMARY KEY`
    * `title`: `VARCHAR(30)` to hold role title
    * `salary`: `DECIMAL` to hold role salary
    * `department_id`: `INT` to hold reference to department role belongs to

* `employee`
    * `id`: `INT PRIMARY KEY`
    * `first_name`: `VARCHAR(30)` to hold employee first name
    * `last_name`: `VARCHAR(30)` to hold employee last name
    * `role_id`: `INT` to hold reference to employee role
    * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

This application uses a separate file that contains functions for performing specific SQL queries; a constructor function or class to organizing these and a pre-populate database to make the development of individual features much easier.

## Possible Additional Functionalities

Recommend considering additional functionalities that would greatly enhance this application by providing the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

## Building the Application

The following packages and their associated links utilized to build this application are listed below:

    * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

    * Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

    * Uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

## References and Credits
Github https://www.github.com
w3schools https://www.w3schools.com
Screencastify [https://www.screencastify.com/]


- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
