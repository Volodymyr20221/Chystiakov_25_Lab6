function task1() {
    const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6));
    console.log('Задача 1');
    console.log('У автоматично згенерованому масиві з 10 елементів, діапазон значень від 0 до 5, знайти число, яке зустрічається найчастіше. Якщо таких чисел декілька, то вивести їх всі та вказати їх кількість.');
    console.log('Введені дані:', array);

    const counts = {};
    array.forEach(val => {
        counts[val] = (counts[val] || 0) + 1;
    });

    let maxCount = 0;
    let frequentNumbers = [];

    for (const key in counts) {
        if (counts[key] > maxCount) {
            maxCount = counts[key];
            frequentNumbers = [parseInt(key)];
        } else if (counts[key] === maxCount) {
            frequentNumbers.push(parseInt(key));
        }
    }

    console.log('Результат виконання скрипта: Найчастіші числа та їх кількість повторів:');
    frequentNumbers.forEach(number => {
        console.log(`Число ${number} зустрічається ${maxCount} рази.`);
    });

    if (confirm('Ви хочете перейти до розв’язку наступної задачі?')) {
        task2();
    } else {
        console.log('Завершено');
    }
}