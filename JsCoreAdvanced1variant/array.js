function increaseByTenPercent(array) {
    return array.map(number => number * 1.1);
}

function main() {
    let numbers = [10, 20, 30];
    let result = increaseByTenPercent(numbers);
    console.log('Исходный массив:', numbers);
    console.log('Новый массив, изменённый на 10%:', result);
}

main();