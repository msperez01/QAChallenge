const { remote } = require('webdriverio');

(async() => {
    const browser = await remote({
        loglevel: 'error',
        path: '/',
        capabilties: {browserName: 'firefox'} //my default browser is firefox
    });

    await browser.url('https://google.com'); //simulating google.com

    console.log('Title: ' + await browser.getTitle());

    await browser.deleteSession();
})().catch((e) => console.error(e));
