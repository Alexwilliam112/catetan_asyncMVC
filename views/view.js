'use strict'

class View {

    static showInstructor(data) {
        console.log(data);
    }

    static showError(error) {
        console.log(`ERROR: ${error}`);
    }
}

module.exports = View