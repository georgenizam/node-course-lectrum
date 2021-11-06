import request from 'supertest'
import faker from 'faker'

import {app} from '../../../../server'

const server = request.agent(app)

describe('classes hash remove', () => {
    beforeAll(async done => {
        const email = Buffer.from(faker.internet.email()).toString('base64')
        const password = Buffer.from(faker.internet.password()).toString('base64')

        const response = await server.post('/login').send({email, password})
        const cookie = response.headers['set-cookie'][0]

        server.jar.setCookie(cookie)
        done()
    })

    test('should return 204 status for remove class by hash', async done => {
        const response = await server.delete('/classes/1').send({})

        expect(response.statusCode).toBe(204)
        done()
    })

    test('should return data undefined', async done => {
        const response = await server.delete('/classes/1')
        const {data} = response.body

        expect(data).toBeUndefined()
        done()
    })
})