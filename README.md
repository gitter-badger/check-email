# check-email
[![Build Status](https://secure.travis-ci.org/easy-node/check-email.png?branch=master)](http://travis-ci.org/easy-node/check-email)

Check email is valid by a given format regex

## Getting Started
Install the module with: `npm install check-email`

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

## License
Copyright (c) 2014 Huei Tan. Licensed under the MIT license.
