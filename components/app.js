class App {
  constructor() {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  getGrades() {
    $.ajax({
      url: "/api/grades",
      success: this.handleGetGradesSuccess;
      error: this.handleGetGradesError;
    });
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades);
  }
  start() {
    this.getGrades();
  }
}
