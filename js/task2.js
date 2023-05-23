function task2() {
    const text = prompt('Будь ласка, введіть текст для підрахунку кількості слів:');
    console.log('Задача 2');
    console.log('Підрахувати кількість слів у тексті, введеному користувачем. Вивести результат в консоль.');
    console.log('Введені дані:', text);

    const wordCount = countWords(text);
    console.log('Результат виконання скрипта: кількість слів -', wordCount);

    if (confirm('Ви хочете перейти до розв’язку наступної задачі?')) {
        task3();
    } else {
        console.log('Завершено');
    }
}

function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
}