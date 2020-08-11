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
  object.key = value;
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
