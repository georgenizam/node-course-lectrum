import {classes} from '../odm'

export class Classes {
    constructor(data) {
        this.data = data
    }

    async create() {
        const data = await classes.create(this.data)

        return data
    }
}