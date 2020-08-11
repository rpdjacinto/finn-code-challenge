import { generate } from './id-generator.mjs'
import { randomInt } from './random.mjs'

let db = {
    users: {}
}

export const loadUser = (userId) => {
    return db.users[userId]
}

export const saveUser = (user) => {
    const id = generate()
    if (randomInt(2)) {
        db.users[id] = { ...user, id }
        return db.users[id]
    } else {
        return null
    }
}