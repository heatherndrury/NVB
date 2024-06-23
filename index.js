function Project(location, year, description) {
    this.location = location;
    this.year = year;
    this.description = description;
}

let project1 = new Project('Project 1', '2023', 'Built from scratch, this project only took one week to complete.')

console.log(project1)

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "I made a paragraph!"
    document.body.appendChild(para);
}