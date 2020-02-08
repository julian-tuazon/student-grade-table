class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.deleteGrade = null;
    this.updateGrade = null;
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
  onUpdateClick(updateGrade) {
    this.updateGrade = updateGrade;
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
    const operations = document.createElement("td");
    const iconContainer = document.createElement("div");
    const updateButton = document.createElement("button");
    const updateIcon = document.createElement("i");
    updateIcon.classList.add("fas", "fa-edit");
    updateButton.appendChild(updateIcon);
    updateButton.classList.add("btn", "blue");
    iconContainer.appendChild(updateButton);
    const deleteElement = document.createElement("td");
    const deleteButton = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-trash");
    deleteButton.appendChild(deleteIcon);
    deleteButton.classList.add("btn", "red", "pr-0");
    iconContainer.appendChild(deleteButton);
    iconContainer.classList.add("d-inline-block", "ml-auto");
    operations.appendChild(iconContainer);
    operations.classList.add("d-flex", "justify-content-end");
    const tableRow = document.createElement("tr");
    tableRow.appendChild(student);
    tableRow.appendChild(course);
    tableRow.appendChild(grade);
    tableRow.appendChild(operations);
    tbody.appendChild(tableRow);
    deleteButton.addEventListener('click', function() {
      deleteGrade(data.id);
    });
    updateButton.addEventListener('click', function() {
      updateGrade(event);
    })
    return tableRow;
  }
  updateGrade(event) {
    const row = event.target.parentElement.parentElement.parentElement;
  }
}
