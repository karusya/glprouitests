require('ts-node').register();

module.exports.config = {
    specs: ['./specs/*spec.ts'],
    directConnect: true,
    baseUrl: 'http://localhost/litecart/en/',
    SELENIUM_PROMISE_MANAGER: false,

    framework: 'mocha',
    mochaOpts: {
        timeout: 60000,
        //reporter: 'nyan'
    }
}