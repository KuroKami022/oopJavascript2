const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));



Object.defineProperty(juan, "pruebaNASA", {
  value: "UFO",
  writable: false,
  enumerable: false,
  configurable: false
})

Object.defineProperty(juan, "editor", {
  value: "VSC",
  writable: false,
  enumerable: true,
  configurable: true
})


Object.defineProperty(juan, "navigator", {
  value: "chrome",
  writable: true,
  enumerable: false,
  configurable: true
})


Object.defineProperty(juan, "terminal", {
  value: "Linux",
  writable: true,
  enumerable: true,
  configurable: false
})


Object.seal(juan);
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));