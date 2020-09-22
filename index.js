const inquirer = require('./input');
const { sum, subtraction, multiplication, division} = require('./operations');

const operations = {
    '+': ['SOMA', sum],
    '-': ['SUBTRAÇÃO', subtraction],
    '*': ['MULTIPLICAÇÂO', multiplication],
    '/': ['DIVISÃO', division]
};

(async () => {
    try {
        console.clear();

        let operation;
        let value = '';

        while (value !== 'exit') {
            console.log('-----------------');
            console.log('Digite valores numéricos ou operações [', Object.keys(operations).join(' '), ']');
            console.log('Deixe em branco para limpar o valor atual.');
            console.log('Digite EXIT a qualquer momento para encerrar a aplicação.');
            console.log('-----------------');

            value = parseFloat(value, 10);
            if (!isNaN(value)) {
                console.log('Valor atual: ', value);
            }
            if (operation) {
                console.log('Operação selecionada:', operations[operation][0]);
            }

            const {'=':input} = await inquirer('=');
            switch (input) {
                case '+': case '-': case '*': case '/':
                    operation = input;
                    break;
                default:
                    if (!isNaN(value) && operation) {
                        value = operations[operation][1](value, input);
                    } else {
                        value = input;
                    }
                    break;
            }
            console.clear();
        }
        process.exit();

    } catch(err) {
        console.log(err);
    }
})();