exports.config = {
    tests: './tests/**/*_test.js',
    output: './output',
    helpers: {
        WebDriver: {
            url: 'http://grafana:3000',
            browser: 'chrome',
            restart: false,
            maximize: true,
            keepCookies: true,
            host: 'chrome',
            port: 4444
        }
    },
    bootstrap: null,
    name: 'codeceptjs'
}
