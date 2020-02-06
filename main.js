const header = document.querySelector("header");
const pageHeader = new PageHeader(header);
const table = document.getElementsByClassName("table")[0];
const gradeTable = new GradeTable(table);
const app = new App(gradeTable, pageHeader);
app.start();
