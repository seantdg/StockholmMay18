'use strict';

const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before}) {
    Before(function() {
        this.apickli = new apickli.Apickli('https', 'apidude-eval-test.apigee.net/restaurant/v1');
        this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    });
});
