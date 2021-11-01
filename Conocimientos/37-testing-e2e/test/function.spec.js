const forEach = require('./funcion');

test('Probando función de callback', () => {
  const items = [2, 3, 4];
  const mockCallback = jest.fn((x) => x + 1);

  forEach(items, mockCallback);

  // console.log(mockCallback.mock);

  expect(mockCallback.mock.calls.length).toBe(3);
  expect(mockCallback.mock.calls[0][0]).toBe(items[0]);
  expect(mockCallback.mock.calls[1][0]).toBe(items[1]);

  expect(mockCallback.mock.results[0].value).toBe(items[0] + 1);
  expect(mockCallback.mock.results[1].value).toBe(items[1] + 1);
});

test('Probando operación asíncrona', async () => {
  const listUsers = ['Carla', 'Claudia', 'Carmen'];
  const find = jest.fn();
  find.mockResolvedValue(listUsers);

  const results = await find();

  expect(results.length).toBe(listUsers.length);
  expect(results).toBe(listUsers);
});

describe('Ejecución de una suite', () => {
  test('Probando retorno valor', async () => {
    const maxValue = jest.fn();
    maxValue.mockReturnValue(50);

    const results = maxValue();

    expect(results).toBe(50);
  });

  it('Probando controlador', async () => {
    const listUsers = ['Carla', 'Claudia', 'Carmen'];
    const getRepository = jest.fn().mockReturnValue({
      find: jest.fn().mockResolvedValue(listUsers),
    });

    const userRepository = getRepository('User');
    const users = await userRepository.find();

    expect(users).toBe(listUsers);
  });
});
