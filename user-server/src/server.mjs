import express from 'express'
import cors from 'cors'

import { generate } from './id-generator.mjs'
import { loadUser, saveUser } from './db.mjs'

const server = express()

server.use(express.json())
server.use(cors())

server.get('/id', (request, response) => {
    response.send({
        id: generate()
    })
})

server.get('/user/:userId', (request, response) => {
        const userId = request.params.userId
        const user = userId && loadUser(userId)

        if (user) {
            response.send({ user })
        } else {
            response
            .status(404)
            .send({
                error: `Could not find user with id ${userId}`
            })
        }
        
    })

server.post('/user', (request, response) => {
        if (!request.body) {
            response
                .status(400)
                .send({
                    error: 'Invalid arguments to request'
                })
            return
        }
        const { username, name } = request.body
        const user = {
            username,
            name
        }
        const result = saveUser(user)
        if (result) {
            response
                .status(201)
                .send({ user: result })
        } else {
            response
                .status(500)
                .send({
                    error: "Failed to create user"
                })
        }
    })

export default server