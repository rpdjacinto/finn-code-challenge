jest.mock('./db.mjs')

import request from'supertest'
import server from './server.mjs'
import { loadUser, saveUser } from './db.mjs'

const UUID_REGEX = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/
const USER_ID = 'abcd1234-abcd-abcd-abcd-abcd12345678dcba'
const USER_NAME = 'Test User'
const USER_USERNAME = 'test-user'

describe('GET /id', () => {
  it('should return a uuid', async () => {
    const res = await request(server)
      .get('/id')
      .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.id).toMatch(UUID_REGEX)
  })
})

describe('GET /user', () => {
  it('should return a 404 if the user is not found', async () => {
    loadUser.mockReturnValue(null)
    const res = await request(server)
      .get(`/user/${USER_ID}`)
      .send()
    expect(loadUser).toHaveBeenCalled()
    expect(loadUser).toHaveBeenCalledTimes(1)
    expect(loadUser).toHaveBeenCalledWith(USER_ID)
    expect(res.statusCode).toEqual(404)
    expect(res.body).toHaveProperty('error')
  })
  it('should return a user', async () => {
    loadUser.mockReturnValue({
      id: USER_ID,
      name: USER_NAME,
      username: USER_USERNAME
    })
    const res = await request(server)
      .get(`/user/${USER_ID}`)
      .send()
    expect(loadUser).toHaveBeenCalled()
    expect(loadUser).toHaveBeenCalledTimes(1)
    expect(loadUser).toHaveBeenCalledWith(USER_ID)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('user')
    expect(res.body.user.id).toEqual(USER_ID)
    expect(res.body.user.name).toEqual(USER_NAME)
    expect(res.body.user.username).toEqual(USER_USERNAME)
  })
})

describe('POST /user', () => {
  it('should create a new user', async () => {
    saveUser.mockReturnValue({
      id: USER_ID,
      name: USER_NAME,
      username: USER_USERNAME
    })
    const input = {
      name: USER_NAME,
      username: USER_USERNAME
    }
    const res = await request(server)
      .post('/user')
      .send(input)
    expect(saveUser).toHaveBeenCalled()
    expect(saveUser).toHaveBeenCalledTimes(1)
    expect(saveUser).toHaveBeenCalledWith(input)
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('user')
  })
  it('should return a 500 when it fails to create a new user', async () => {
    saveUser.mockReturnValue(null)
    const input = {
      name: USER_NAME,
      username: USER_USERNAME
    }
    const res = await request(server)
      .post('/user')
      .send(input)
    expect(saveUser).toHaveBeenCalled()
    expect(saveUser).toHaveBeenCalledTimes(1)
    expect(saveUser).toHaveBeenCalledWith(input)
    expect(res.statusCode).toEqual(500)
    expect(res.body).toHaveProperty('error')
  })
})