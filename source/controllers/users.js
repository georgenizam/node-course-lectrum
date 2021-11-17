import {Users as UsersModel} from "../models"

export class Users {
    constructor(data) {
        this.models = {
            users: new UsersModel(data)
        }
    }

    async create() {
        const data = await this.models.users.create()
        return data
    }
}