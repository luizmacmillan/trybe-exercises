const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const findAnimalByName = (name) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const animal = Animals.find((animal) => animal.name === name);
    if (animal) {
      return resolve(animal);
    }
    const errorMessage = 'Nenhum animal com esse nome!';
    return reject(errorMessage);
  }, 100);
});

const getAnimal = async (name) => {
  return await findAnimalByName(name).then(animal => animal);
};

const findAnimalByAge = (age) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const animalsList = Animals.filter(animal => animal.age === age);
    if (animalsList.length !== 0) {
      return resolve(animalsList);
    }
    const errorMessage = "Nenhum animal com esta idade!"
    return reject(errorMessage);
  });
});

const getAnimalByAge = async (age) => {
  return await findAnimalByAge(age).then(animal => animal);
}

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    it('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    it('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    it('Retorne a lista de animais', () => {
      expect.assertions(1);
      return getAnimalByAge(2).then(list => {
        expect(list).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    it('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(20).catch(error =>
        expect(error).toBe('Nenhum animal com esta idade!')
      );
    });
  });
});