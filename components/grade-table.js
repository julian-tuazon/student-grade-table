class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.deleteGrade = null;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    if (grades.length !== 0) {
      document.querySelector("p").classList.add("d-none");
    } else {
      document.querySelector("p").classList.remove("d-none");
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
    course.classList.add("text-center");
    const grade = document.createElement("td");
    grade.textContent = data.grade;
    grade.classList.add("text-center");
    const deleteElement = document.createElement("td");
    const deleteButton = document.createElement("button");
    // deleteButton.textContent = "DELETE";
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-trash");
    deleteButton.appendChild(deleteIcon);
    deleteButton.classList.add("btn", "btn-danger", "d-block", "ml-auto");
    deleteElement.appendChild(deleteButton);
    const tableRow = document.createElement("tr");
    tableRow.appendChild(student);
    tableRow.appendChild(course);
    tableRow.appendChild(grade);
    tableRow.appendChild(deleteElement);
    tbody.appendChild(tableRow);
    deleteButton.addEventListener('click', function() {
      deleteGrade(data.id);
    });
    return tableRow;
  }
}
