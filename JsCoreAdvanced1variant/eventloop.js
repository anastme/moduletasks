function delayedCallback(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}

delayedCallback(() => {
    console.log('Callback function будет вызвана после 2 секунд');
});