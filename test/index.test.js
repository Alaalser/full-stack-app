const request = require('supertest');
const { connection, dbBuild } = require('../server/database/data');
const app = require('../server/app');
const { addUserQuery } = require('../server/database/queries');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

describe('Testing add users query', () => {
  test('Should return data length 1', () =>
    addUserQuery('سيف', 'sa.sa.com', '123456789', '123456789')
      .then((result) => expect(result.rows).toHaveLength(1))
      .catch());
});

describe('Test the route POST /signup', () => {
  test('should return status code 400 and validation error message when given not valid email POST  /signup', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/signup')
      .send({
        userName: 'alaa',
        email: 'aa',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });

  test('should return status code 400 and validation error message when given not matched passwords POST  /signup', async () => {
    const res = await request(app)
      .post('/api/v1/signup')
      .send({
        userName: 'alaa',
        email: 'al@al.com',
        password: '123456789',
        confirmPassword: '1234567',
      })
      .expect(400);
    const { error } = res.body;
    expect(error).toBe('Validation Error');
  });

  test('should return status code 401 and validation error message when given an exist email POST  /signup', async () => {
    expect.assertions(1);
    const res = await request(app)
      .post('/api/v1/signup')
      .send({
        userName: 'alaa',
        email: 'alaa@alaa.com',
        password: '123456789',
        confirmPassword: '123456789',
      })
      .expect(409);
    const { message } = res.body;
    expect(message).toBe('You are already registered');
  });
});
