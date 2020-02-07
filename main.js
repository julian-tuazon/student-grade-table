const formElement = document.querySelector("form");
const gradeForm = new GradeForm(formElement);
const header = document.querySelector("header");
const pageHeader = new PageHeader(header);
const table = document.getElementsByClassName("table")[0];
const pTag = document.querySelector("p");
const gradeTable = new GradeTable(table, pTag);
const app = new App(gradeTable, pageHeader, gradeForm);
app.start();
