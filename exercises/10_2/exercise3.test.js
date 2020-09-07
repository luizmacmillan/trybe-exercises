const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('Verifica o funcionamento da função getUserName.', () => {
  describe('Quando existe o usuário.', () => {
    it('Deve retornar um usuário.', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toBe('Mark');
    });
  });
  describe('Verifica a falha no funcionamento da função getUserName.', () => {
    it('Deve retornar um erro.', async () => {
      expect.assertions(1);
      try {
        await getUserName(2);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 2 not found.' });
      }
    });
  });
});
