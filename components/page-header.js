class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    document.querySelector("span.badge").textContent = newAverage;
  }
}
