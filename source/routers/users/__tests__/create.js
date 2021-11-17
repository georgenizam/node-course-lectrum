import request from 'supertest'
import faker from 'faker'

import {app} from '../../../server'

const getUser = () => ({
    name:     `${faker.name.firstName()} ${faker.name.lastName()}`,
    email:    faker.internet.email(),
    // phone:    faker.phone.phoneNumber(),
    // password: faker.internet.password(),
    // sex:      'm',
});

const server = request.agent(app)

describe('users create:', () => {

    test('should return 201 status for create users', async done => {
        const response = await server.post('/users').send(getUser())

        expect(response.statusCode).toBe(201)
        done()
    })

    test('should return data be an object', async done => {
        const response = await server.post('/users').send(getUser())
        const {data} = response.body

        expect(Array.isArray(data)).toBeFalsy()
        expect(typeof data).toBe('object')
        done()
    })
})