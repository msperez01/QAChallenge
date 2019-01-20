//assistance source:
//https://www.nickvallaris.com/bdd/bdd-testing-using-cucumber-js

var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({And, But, Given, Then, When}) {
    Given(/^on the "([^"]*)" page$/, function (arg1, callback) {
        callback.pending();
    });
    When(/^submitted "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, callback) {
        callback.pending();
    });
    Then(/^show alert "([^"]*)"$/, function (arg1, callback) {
        callback.pending();
    });
    Then(/^stay on "([^"]*)" page$/, function (arg1, callback) {
        callback.pending();
    });
    Then(/^go to "([^"]*)" page$/, function (arg1, callback) {
        callback.pending();
    });
});
