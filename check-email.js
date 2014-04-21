var emailData = require('./lib/emailData');
/*
 * check-email
 * https://github.com/easy-node/check-email
 *
 * Copyright (c) 2014 Huei Tan
 * Licensed under the MIT license.
 *
 * Usage
 *
 * var checkEmail = require('check-email');
 *
 * checkEmail(regex, function (err, data) {
 *
 *    // err
 *    // return err if given value isn't regex
 *
 *    // data
 *    // - pass
 *    //   data that pass
 *    // - fail
 *    //   data that fail
 *
 * });
 *
 */

'use strict';

module.exports = function (regex, cb) {

    if (Object.prototype.toString.call(regex).match(/\s([a-zA-Z]+)/)[1].toLowerCase() !== 'regexp') {
        cb('not a regular expression');
        return;
    }

    var passData = [],
        failData = [];

    for (var i = 0; i < emailData.length; i++) {
        if (regex.test(emailData[i].value)) {
            passData.push(emailData[i]);
        } else {
            failData.push(emailData[i]);
        }
    }

    cb(null, {
        pass: passData,
        fail: failData
    });
};

module.exports(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, function (err, data) {
    console.log(data);
});
