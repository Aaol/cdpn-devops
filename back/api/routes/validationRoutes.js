'use strict';
module.exports = function(app) {
    var validation = require('../controllers/validationController');

    app.route('/validate/email')
    .post(validation.mail);

    app.route('/validate/password')
    .post(validation.password);
};