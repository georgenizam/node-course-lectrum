import {Users} from "../../controllers"

export const getUsers = (req, res) => {
    try {
        res.status(200).json({data: []})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

export const postUsers = async (req, res) => {
    try {
        const model = new Users(req.body)
        const data = await model.create()

        res.status(201).json({data})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}