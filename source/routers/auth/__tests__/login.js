import request from 'supertest'
import faker from 'faker'

import {app} from '../../../server'

const server = request.agent(app)

describe('login:', () => {

    test('should login user and header set-cookie should be defined', async done => {
        const email = faker.internet.email()//Buffer.from(faker.internet.email()).toString('base64')
        const password = faker.internet.password() //Buffer.from('Qwerty123*').toString('base64')

        const response = await server.post('/login').send({email, password})

        const header = response.headers['set-cookie']

        expect(header).toBeDefined()
        done()
    })

    test('should login user and return 204 status', async done => {
        const email = faker.internet.email()//Buffer.from(faker.internet.email()).toString('base64')
        const password = faker.internet.password() //Buffer.from('Qwerty123*').toString('base64')

        const response = await server.post('/login').send({email, password})

        expect(response.statusCode).toBe(204)
        done()
    })
})