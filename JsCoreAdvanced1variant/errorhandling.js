function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Ошибка: число не является целым');
    }
    console.log('Число целое');
}

try {
    checkInteger(4.5);
} catch (error) {
    console.error(error.message);
}

try {
    checkInteger(3);
} catch (error) {
    console.error(error.message);
}





