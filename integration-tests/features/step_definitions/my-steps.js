const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Given('I set the current time as a header', function (callback) {                               var now = new Date();
        this.apickli.addRequestHeader("X-Current-Time", now.getHours() + ":" + now.getMinutes());
        callback();
    });
});
