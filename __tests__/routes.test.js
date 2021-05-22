const request = require('supertest');
const express = require('express');

const app = express();
const req = request('http://localhost:8000')
const address = "mvgMDkBZYfomRMaGKoSHXsSZVgiZszmXzf"

describe("/requestValidation", function() {

    it("should return a valid message", function(done) {
        return req.post('/requestValidation')
            .send({
                "address": "mvgMDkBZYfomRMaGKoSHXsSZVgiZszmXzf"
            })
            .expect(200)
            .then(response => {
                expect(response.body).toMatch(/mvgMDkBZYfomRMaGKoSHXsSZVgiZszmXzf:[0-9]+:starRegistry/)
                done()
            })
            .catch(err => done(err))
    })

})