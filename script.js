let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// Function to print developers using map
function PrintDeveloperbyMap() {
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to print developers using forEach
function PrintDeveloperbyForEach() {
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// Function to add a new employee
function addData() {
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

// Function to remove admins from the array
function removeAdmin() {
  let updatedArr = arr.filter(employee => employee.profession !== "admin");
  console.log(updatedArr);
}

// Function to concatenate a new array
function concatenateArray() {
  let newArr = [
    { id: 5, name: "mike", age: "21", profession: "designer" },
    { id: 6, name: "lisa", age: "22", profession: "manager" },
    { id: 7, name: "tom", age: "23", profession: "developer" },
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);
}
