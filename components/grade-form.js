class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
    this.createGrade = null;
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const course = formData.get('course');
    const grade = formData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
