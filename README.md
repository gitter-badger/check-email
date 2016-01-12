# check-email

[![Join the chat at https://gitter.im/easy-node/check-email](https://badges.gitter.im/easy-node/check-email.svg)](https://gitter.im/easy-node/check-email?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://secure.travis-ci.org/easy-node/check-email.png?branch=master)](http://travis-ci.org/easy-node/check-email)
[![NPM version](https://badge.fury.io/js/check-email.svg)](http://badge.fury.io/js/check-email)

Testing and Checking email regex

## Getting Started
Install the module with

```bash
$ npm install --save check-email
```

## Usage

```javascript
var checkEmail = require('check-email');

var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

checkEmail(regex, function (err, data) {

    console.log(data);
    // do anything, especially for testing

    /*
    {
        pass:[{
                value: 'huei90@gmail.com',
                description: 'normal case (this should be pass)'
            },
            {
                value: '123@gmail.com',
                description: 'email with number name'
            },
            {
                value: 'asdfaksjdfkl2j3kfjasdfk2kklasdfjklasdflkj2lk234lkjasfdlk2j@gmail.com',
                description: 'very long email'
            }],
        fail:[{
                value: 12312312312,
                description: 'number (should fail)'
            },
            {
                value: 'Hello World',
                description: 'String (should fail)'
            },
            {
                value: 'h u e i @gmail.com',
                description: 'email with blank (should fail)'
            }
        ]
    };
    */
});
```

## CLI

```bash
$ npm install -g check-email
$ checkemail -h
```

## License
Copyright (c) 2014 Huei Tan. Licensed under the MIT license.
