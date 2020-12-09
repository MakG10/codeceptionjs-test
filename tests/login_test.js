Feature('codeceptjs');

Scenario('Try to login', (I) => {
    I.amOnPage('/')
    I.see('Grafana')
});
