function task3() {
    const n = parseInt(prompt('Введіть n:'));
    console.log('Задача 3');
    console.log('Обчисліть n-те число Фібоначчі.');
    console.log('Введені дані:', n);

    if (Number.isNaN(n) || n < 0) {
        console.error('Введіть коректне значення n');
        return;
    }

    function fibonacci(num) {
        if (num <= 1) {
            return num;
        }
        let a = 0;
        let b = 1;
        for (let i = 2; i <= num; i++) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }

    const result = fibonacci(n);
    console.log('Результат виконання скрипта:', result);
}