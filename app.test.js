const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return home page response', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Hello from Automated CI/CD Pipeline');
    });
});

describe('GET /health', () => {
    it('should return health status UP', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('UP');
    });
});
