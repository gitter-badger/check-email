'use strict';

var emailData = [
    {
        value: 'huei90@gmail.com',
        description: 'normal case (this should be pass)'
    },
    {
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
    },
    {
        value: '123@gmail.com',
        description: 'email with number name'
    },
    {
        value: 'asdfaksjdfkl2j3kfjasdfk2kklasdfjklasdflkj2lk234lkjasfdlk2j@gmail.com',
        description: 'very long email'
    },
    {
        value: '@gmail.com',
        description: 'given email doesn\'t have prefix'
    }
];

module.exports = emailData;