class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    const tbody = this.tableElement.querySelector("tbody");
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    for (let i = 0; i < grades.length; i++) {
      const student = document.createElement("td");
      student.textContent = grades[i].name;
      const course = document.createElement("td");
      course.textContent = grades[i].course;
      const grade = document.createElement("td");
      grade.textContent = grades[i].grade;
      const tableRow = document.createElement("tr");
      tableRow.appendChild(student);
      tableRow.appendChild(course);
      tableRow.appendChild(grade);
      tbody.appendChild(tableRow);
    }
  }
}
