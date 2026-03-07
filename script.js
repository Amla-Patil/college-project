let departments = [];
let programs = [];
let faculty = [];
let years = [];

function addDepartment(){

let dept = {
id: document.getElementById("dept_id").value,
name: document.getElementById("dept_name").value,
allied: document.getElementById("is_allied").value
};

departments.push(dept);

console.log(departments);
alert("Department Added");
}

function addProgram(){

let program = {
id: document.getElementById("program_id").value,
name: document.getElementById("program_name").value,
intake: document.getElementById("sanctioned_intake").value,
duration: document.getElementById("program_duration").value,
dept: document.getElementById("dept_program").value
};

programs.push(program);

console.log(programs);
alert("Program Added");
}

function addFaculty(){

let f = {
id: document.getElementById("faculty_id").value,
name: document.getElementById("faculty_name").value,
pan: document.getElementById("pan_no").value,
degree: document.getElementById("degree").value,
spec: document.getElementById("specialization").value,
date: document.getElementById("joining_date").value
};

faculty.push(f);

console.log(faculty);
alert("Faculty Added");
}

function addYear(){

let y = {
id: document.getElementById("year_id").value,
code: document.getElementById("year_code").value,
session: document.getElementById("academic_session").value
};

years.push(y);

console.log(years);
alert("Academic Year Added");
}
