import request from 'supertest'
import faker from 'faker'

import {app} from '../../../../../../server'

const server = request.agent(app)

describe('keynote hash read:', () => {

    beforeAll(async done => {
        const email = Buffer.from(faker.internet.email()).toString('base64')
        const password = Buffer.from(faker.internet.password()).toString('base64')

        const response = await server.post('/login').send({email, password})
        const cookie = response.headers['set-cookie'][0]

        server.jar.setCookie(cookie)
        done()
    })

    test('should return 200 status for read keynote by hash', async done => {
        const response = await server.get('/lessons/1/keynotes/1')

        expect(response.statusCode).toBe(200)
        done()
    })

    test('should return data be an object', async done => {
        const response = await server.get('/lessons/1/keynotes/1')
        const {data} = response.body

        expect(Array.isArray(data)).toBeFalsy()
        expect(typeof data).toBe('object')
        done()
    })
})