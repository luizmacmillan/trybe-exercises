async function fetchDogImage() {
  const resolve = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await resolve.json();
  if (resolve) Promise.resolve(data);
  Promise.reject(data);
}

describe('Testing asynchronous mock', () => {
  fetchDogImage = jest.fn();
  
  it('Considering success', async () => {
    fetchDogImage.mockResolvedValue('request success');
    expect(fetchDogImage()).resolves.toBe('request success');
  });
  it('Considering failure', async () => {
    fetchDogImage.mockRejectedValue('request failure');
    expect(fetchDogImage()).rejects.toMatch('request failure');
  });
});
