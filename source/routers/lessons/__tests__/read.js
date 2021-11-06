import request from 'supertest'
import faker from 'faker'

import {app} from '../../../server'

const server = request.agent(app)

describe('lessons read:', () => {

    test('should return 200 status for get all lessons', async done => {
        const response = await server.get('/lessons')

        expect(response.statusCode).toBe(200)
        done()
    })

    test('should return data be an array', async done => {
        const response = await server.get('/lessons')
        const {data} = response.body

        expect(Array.isArray(data)).toBeTruthy()
        done()
    })
})