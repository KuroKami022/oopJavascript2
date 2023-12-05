function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function requiredParam(param) {
    throw new Error(param + " es obligatorio");
  }
  
  function LearningPath({ // PROTOTIPO
      name = requiredParam("name"), // Campo es obligatorio
      courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
  }) {
      this.name = name;
      this.courses = courses;
  }
  
  function Student({ // PROTOTIPO
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
  
      this.name = name;
      this.email = email;
      this.age = age;
      this.approvedCourses = approvedCourses;
      this.socialMedia = {
          twitter,
          instagram,
          facebook,
      };
  
      // Preguntamos primero si el parámetro recibido "learningPaths" sí es un Array:
      if (isArray(learningPaths)) { // 👈👈
          // Momentaneamente hacemos esta asignación hasta realizar el resto de
          // validaciones:
          this.learningPaths = [];
  
          // Vamos a recorrer cada índice del Array "learningPaths"
          for (learningPathIndex in learningPaths) { // 👈👈
  
              // Preguntaremos si el elemento ubicado en el índice actual es una
              // instancia del prototipo LearningPath. Solo así sabremos si es una
              // verdadera ruta de aprendizaje:
              if (learningPaths[learningPathIndex] instanceof LearningPath) { // 👈👈
  
                  // Si es que SÍ es una instancia de dicho prototipo, entonces agregamos
                  // dicha ruta de aprendizaje al array "learningPaths" del estudiante:
                  this.learningPaths.push(learningPaths[learningPathIndex]);
  
              } // If end
          } // For end
      } // If end
}