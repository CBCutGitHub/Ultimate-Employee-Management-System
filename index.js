var mysql = require("mysql2");
var inquirer = require("inquirer");
const cTable = require("console.table");        

var connection = mysql.createConnection({
  port: 3306,
  user: "root",
  password: "##Weak#1",
  database: "employee_DB"
})

connection.connect(function (err) {
  if (err) throw err
  console.log("connected")
  startApp()

});

function startApp() {
  inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a new department",
        "Add a new role",
        "Add a new employee",
        "Update employee roles",
        "Exit"
      ]
    }])
    .then(function (answer) {
      switch (answer.action) {
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a new department":
          addDepartment();
          break;
        case "Add a new role":
          addRole();
          break;
        case "Add a new employee":
          addEmployee();
          break;
        //comment out 57-65
        //  case "Remove an employee":
        //    removeEmployee();
        //    break;
        //  case "Remove a role":
        //    removeRole();
        //    break;
        //  case "Remove a department":
        //      removeDepartment();
        //      break;
        case "Update employee roles":
          selectEmp();
          break;
        case "exit":
          connection.end();
          break;
      }
    });
};

//WHEN I choose to add a department
//THEN I am prompted to enter the name of the department and that department is added to the database

//called in addContent function if selected dept  
function addDepartment() {
  connection.query("SELECT * FROM departments", function (err, res) {
    if (err) throw err;
    //asking for the department name      
    inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "What is the title of the new department?"
      }
    ]).then(function (response) {
      //sets your inquirer response for the "title" question into the "name" column of your departments //table
      connection.query("INSERT INTO departments SET ?", {
        name: response.title
      },

        //follow up function for error handling and to restart questions
        function (err, res) {
          if (err) throw err;
          console.log(" Department Added!\n");
          startApp();
        }
      );

    })
  })}
    //called in addContent function if selected role
        function addRole() {
         connection.query("SELECT * FROM departments", function (err, res) {
          if (err) throw err;
        //asking for the three properties on the roles table      
        inquirer.prompt([
          {
            name: "title",
            type: "input",
            message: "What is the title of the new role?"
          },
          {
            name: "salary",
            type: "number",
            message: "What is the salary of this position?",
          },
          {
            name: "deptId",
            type: "rawlist",
            message: "Select a department for this role",
            choices: res.map(item => item.name)
          }
        ]).then(function (answers) {
          const selectedDept = res.find(dept => dept.name === answers.deptId);
          connection.query("INSERT INTO roles SET ?",
            {
              title: answers.title,
              salary: answers.salary,
              department_id: selectedDept.id
            },
            function (err, res) {
              if (err) throw err;
              console.log("New role added!\n");
              startApp();
            }
          );
        });
      })
    };

    //WHEN I choose to add an employee
    //THEN I am prompted to enter the employee’s first name, last name, role, and manager, 
    //and that employee is added to the database

    //called in addContent function if selected employee
    function addEmployee() {
      connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        //asking for the four properties on the roles table  first_name, last_name, role_id, manager_id    
        inquirer.prompt([
          {
            name: "firstName",
            type: "input",
            message: "What is the first name?"
          },
          {
            name: "lastName",
            type: "input",
            message: "What is the last name?",
          },
          {
            name: "roleId",
            type: "rawlist",
            message: "Select a role id for this employee",
            //res.map presents all the role titles from the title column of the roles table        
            choices: res.map(item => item.title)
          },
          // {
          //   name: "managerId",
          //   type: "rawlist",
          //   message: "Select a manager for this employee",
          //   choices: res.map(item => item.manager_id)
          // }

        ]).then(function (response) {

          //convert response.roleId to role title and store in variable      
          const selectedRole = res.find(role => role.title === response.roleId);

          //insert responses set into employees table      
          connection.query("INSERT INTO employees SET ?",
            {
              first_name: response.firstName,
              last_name: response.lastName,
              role_id: selectedRole.id,
         //   manager_id: response.managerId
            },
            //handle any errors and restart questions
            function (err, res) {
              if (err) throw err;
              console.log("New employee added!\n");
              startApp();
            }
          );
        });
      })
    };


    function viewDepartments() {
      connection.query(`SELECT * FROM departments`, function (err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
      })
    };
    function viewRoles() {
      connection.query('SELECT * FROM roles', function (err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
      })
    }
    function viewEmployees() {
      connection.query('SELECT * FROM employees', function (err, res) {
        if (err) throw err;
        console.table(res);
        startApp();
      })
    }
    //UNCOMMENT ALL BELOW 226-258
    function selectEmp() {
      connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
          {
            type: "rawlist",
            name: "selectEmp",
            message: "Select the employee who is changing roles",
            choices: res.map(emp => emp.first_name)
          }
        ]).then(function (answer) {
          const selectedEmp = res.find(emp => emp.first_name === answer.selectEmp);
          connection.query("SELECT * FROM roles", function (err, res) {
            inquirer.prompt([
              {
                type: "rawlist",
                name: "newRole",
                message: "Select the new role for this employee",
                choices: res.map(item => item.title)
              }
            ]).then(function (answer) {
              const selectedRole = res.find(role => role.title === answer.newRole);

              connection.query("UPDATE employees SET role_id = ? WHERE id = ?", [selectedRole.id, selectedEmp.id],
                function (error) {
                  if (error) throw err;
                  startApp();
                }
              );
            });

          })
        })
      })
    }