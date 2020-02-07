class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.deleteGrade = null;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    if (grades.length !== 0) {
      document.querySelector("p").classList.remove("d-none");
    } else {
      document.querySelector("p").classList.add("d-none");
    }
    const tbody = this.tableElement.querySelector("tbody");
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    for (let i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    const tbody = this.tableElement.querySelector("tbody");
    const student = document.createElement("td");
    student.textContent = data.name;
    const course = document.createElement("td");
    course.textContent = data.course;
    const grade = document.createElement("td");
    grade.textContent = data.grade;
    const deleteElement = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteElement.appendChild(deleteButton);
    const tableRow = document.createElement("tr");
    tableRow.appendChild(student);
    tableRow.appendChild(course);
    tableRow.appendChild(grade);
    tableRow.appendChild(deleteElement);
    tbody.appendChild(tableRow);
    deleteButton.addEventListener('click', deleteGrade(data.id));
    return tableRow;
  }
}
