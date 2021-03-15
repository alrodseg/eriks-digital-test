import {query} from './query';

const testData = { name: 'Pickle Rick', meaningOfLife: 42}

describe('Query fn', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should be able to fetch data', () => {
    fetchMock.mockResponseOnce(JSON.stringify(testData));

    const response = query('');

    response.then((data) => {
      expect(data).toEqual(testData);
    })
    expect(fetch).toHaveBeenCalledTimes(1);
  })

  it('should throw an error when unable to fetch', async () => {
    const errorMessage = 'fake error message';
    const expectedErrorMessage = 'Error: ' + errorMessage;
    fetchMock.mockRejectOnce(new Error(errorMessage));

    expect.assertions(2);
    try {
      await query('');
    }
    catch(e) {
      expect(e.toString()).toEqual(expectedErrorMessage)
    }
    expect(fetch).toHaveBeenCalledTimes(1);
  })
});
