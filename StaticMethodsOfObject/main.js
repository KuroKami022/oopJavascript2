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

const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAAA";
  }
};

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);

const numeritos = [0,1,2,3,4,5,5,6,7,8,9,435678,7,2,3];
let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
  numerito = numeritos[index];
  console.log({ index, numerito });
}

function recursiva(numbersArray) {
  if (numbersArray.length != 0) {
    const firstNum = numbersArray[0];
    console.log(firstNum);

    numbersArray.shift();
    recursiva(numbersArray);
  }
}
