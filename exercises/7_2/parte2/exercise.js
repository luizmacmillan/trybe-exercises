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

function addTurn(object, key, value) {
  object[key] = value;
}

addTurn(lesson2, 'turno', 'manhã');

function objectKeysList(object) {
  return Object.keys(object);
}

function objectLength(object) {
  return Object.keys(object).length;
}

function objectValuesList(object) {
  return Object.values(object);
}

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
};

function studentSum(object) {
  let totalStudents = 0;
  const listOfLessons = Object.keys(allLessons);
  
  for (let x = 0; x < listOfLessons.length; x += 1) {
    const stageLesson = listOfLessons[x];
    totalStudents += allLessons[`${stageLesson}`].numeroEstudantes;
  }
  return totalStudents;
}

function getValueByNumber(object, positionKey) {
  const listOfKeys = Object.keys(object);
  return object[`${listOfKeys[positionKey]}`];
}

function verifyPair(object, key, value) {
  const listOfKeys = Object.keys(object);
  const listOfValues = Object.values(object);

  let result = false;

  for (let i = 0; i < listOfKeys.length; i += 1) {
    if (listOfKeys[i] === key && listOfValues[i] === value) {
      result = true;
    }
  }

  return result;
}
