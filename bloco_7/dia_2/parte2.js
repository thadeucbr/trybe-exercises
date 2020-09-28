const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const shift = (object, key, valor) => object[key] = valor;

const objKeys = (object) => console.log(Object.keys(object));

const objSize = (object) => console.log(size = Object.keys(object).length);

const objValues = (object) => console.log(Object.values(object));

const allLessons = Object.assign({},{lesson1}, {lesson2}, {lesson3});

const studantNumbers = (object) => {
    const objectArray = Object.keys(object);
    let studants = 0;
    for(index in objectArray){
        studants += object[objectArray[index]].numeroEstudantes;
    }
    return console.log(studants);
}

const valueByPosition = (object, position) => Object.values(object)[position];