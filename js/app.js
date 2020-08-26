// ===============================
//          Variables
// ===============================

const employees = document.querySelector('.employee-cards');
const employeeCard = document.createElement('DIV');



// ===============================
//     Create Employee Cards
// ===============================

for (let i = 0; i < activeEmployees.length; i++) {
    let addEmployee = employees.appendChild(employeeCard);
    addEmployee.classList.add('card');
}
