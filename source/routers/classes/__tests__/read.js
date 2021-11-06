import request from "supertest"

import {app} from '../../../server'

const server = request.agent(app)

describe('Read classes:', () => {
    test('should return 200 status for getting all classes', async done => {
        const response = await server.get('/classes')

        expect(response.statusCode).toBe(200)
        done()
    })

    test('should return data array', async done => {
        const response = await server.get('/classes')
        const {data} = response.body

        expect(Array.isArray(data)).toBeTruthy()
        done()
    })
})