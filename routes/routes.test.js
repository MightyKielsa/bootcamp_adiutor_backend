import app from '../app.js';
import supertest from 'supertest';
import assert from 'assert';
import express from 'express';
import jest from 'jest';
import request from 'supertest';

describe('GET paths that are used in the frontend', function () {
  it('checks all users', async () => {
    const response = await request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        const expected = {
          success: true,
          message: expect.any(String),
          data: expect.any(Array),
        };
        const actual = res.body;
        console.log(res.body);
        const payload = actual.data;
        for (let i = 0; i < payload.length; i++) {
          expect({
            userid: expect.any(Number),
            email: expect.any(String),
            slackusername: expect.any(String),
          }).toEqual(payload[i]);
        }
        expect(actual).toEqual(expected);
      });
  });
});
