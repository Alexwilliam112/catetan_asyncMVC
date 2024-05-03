'use strict'

const Factory = require("./class")
const { readFile, writeFile } = require('fs').promises

class Model {

    static async readInstructors() {
        try {
            let data = await readFile("./data/data.json")

            if(!data) {
                throw 'data not found'
            }

            let parsedData = JSON.parse(data)
            let newData = parsedData.map((el) => {
                return Factory.createInstructor(el.id, el.name)
            })

            if(typeof(newData) !== 'object') {
                throw 'failed processing data'
            }

            return newData

        } catch (error) {
            throw error
        }
    }
}

module.exports = Model