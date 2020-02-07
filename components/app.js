class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  getGrades() {
    $.ajax({
      url: "http://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
      headers: {
        "X-Access-Token": "i4hbNgAo",
      }
    });
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log("grades", grades);
    this.gradeTable.updateGrades(grades);
    let gradeAverage = 0;
    grades.forEach(student => gradeAverage += student.grade);
    gradeAverage /= grades.length;
    this.pageHeader.updateAverage(gradeAverage.toFixed(0));
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
  createGrade(name, course, grade) {
    console.log(name, course, grade);
    $.ajax({
      method: "POST",
      url: "http://sgt.lfzprototypes.com/api/grades",
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "i4hbNgAo",
      }
    });
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id) {
    console.log(id);
  }
  handleDeleteGradeError(error) {
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
}
