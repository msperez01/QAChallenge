//WEBDRIVER.IO TUTUTORIAL
//https://webdriver.io/docs/gettingstarted.html
//AWAIT:after the webdriver.io check, activate??
//await executes the asynchronous program and fufills the "promise" then goes back into the thread
//if promised is rejected, await throws a reject value. in this case, e

//remote allows scripts to interact with the browser and the net returned information
//3544
// 1-18-19 error 10013 on geckodriver. port -4444 is apparently in use...also apparently a firewall issue
const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'error',
        path: '/',
        capabilities: {
            browserName: 'firefox'
        }
    });

    await browser.url('https://google.com');

    const title = await browser.getTitle();
    console.log('Title was: ' + title);

    await browser.deleteSession();
})().catch((e) => console.error(e));
