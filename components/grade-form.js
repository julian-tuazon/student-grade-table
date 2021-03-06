class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
    this.createGrade = null;
    this.updateGrade = null;
  }
  onSubmit(createGrade, updateGrade) {
    this.createGrade = createGrade;
    this.updateGrade = updateGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const course = formData.get('course');
    const grade = formData.get('grade');
    const submitButton = document.querySelector(".btn-success");
    if (submitButton.textContent === "Add") {
      this.createGrade(name, course, grade);
    } else {
      this.updateGrade(submitButton.getAttribute("student"), name, course, grade);
      formHeader.textContent = "Add Grade";
      submitButton.textContent = "Add";
      submitButton.setAttribute("student", "null");
    }
    event.target.reset();
  }
}
