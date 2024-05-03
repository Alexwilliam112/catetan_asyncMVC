'use strict'

class Instructor {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

class Factory {

    static createInstructor(id, name) {
        return new Instructor(id, name)
    }
}

module.exports = Factory