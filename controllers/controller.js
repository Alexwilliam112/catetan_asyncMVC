'use strict'

const Model = require("../models/model")
const View = require("../views/view")

class Controller {

    static async read() {
        try {
            let data = await Model.readInstructors()
            View.showInstructor(data)
        } catch (error) {
            View.showError(error)
        }
    }
}

module.exports = Controller