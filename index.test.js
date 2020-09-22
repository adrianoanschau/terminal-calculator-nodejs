const { sum, subtraction, multiplication, division} = require('./operations');

function rand() {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 12, 17, 24, 53];
    return values[Math.round(Math.random()*values.length)];
}

describe('TESTES DE SOMA', () => {
    for (let i = 0; i < 10; i++) {
        const value1 = rand();
        const value2 = rand();
        const result = eval(`${value1} + ${value2}`);
        test(`${value1} + ${value2} = ${result}`, () => {
            expect(sum(value1, value2)).toBe(result);
        });
    }
});

describe('TESTES DE SUBTRAÇÃO', () => {
    for (let i = 0; i < 10; i++) {
        const value1 = rand();
        const value2 = rand();
        const result = eval(`${value1} - ${value2}`);
        test(`${value1} - ${value2} = ${result}`, () => {
            expect(subtraction(value1, value2)).toBe(result);
        });
    }
});

describe('TESTES DE MULTIPLICAÇÃO', () => {
    for (let i = 0; i < 10; i++) {
        const value1 = rand();
        const value2 = rand();
        const result = eval(`${value1} * ${value2}`);
        test(`${value1} * ${value2} = ${result}`, () => {
            expect(multiplication(value1, value2)).toBe(result);
        });
    }
});

describe('TESTES DE DIVISÃO', () => {
    for (let i = 0; i < 10; i++) {
        const value1 = rand();
        const value2 = rand();
        const result = eval(`${value1} / ${value2}`);
        test(`${value1} / ${value2} = ${result}`, () => {
            expect(division(value1, value2)).toBe(result);
        });
    }
});