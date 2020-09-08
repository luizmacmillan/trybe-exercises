const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('Dada a URL https://api.github.com/users/tryber/repos', () => {
  it('os repositórios sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram na lista.', () => {
    const url = 'https://api.github.com/users/tryber/repos';
    
    return getRepos(url).then((result) => {
      expect(result).not.toContain('sd-01-week4-5-project-todo-list');
      expect(result).not.toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});
