window.addEventListener('DOMContentLoaded', () => {
    let firstNumber = '';
    let secondNumber = '';
    let signOperation = '';
    let finish = false;
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const action = ['-', '+', 'x', '/'];
    const out = document.querySelector('.calc-screen p');

    document.querySelector('.ac').addEventListener('click', () => {
        out.textContent = 0;
        firstNumber = '';
        secondNumber = '';
        signOperation = '';
        finish = false;

    });
    document.querySelector('.buttons').addEventListener('click', (event) => {
        if (!event.target.classList.contains('btn')) return;
        if (event.target.classList.contains('ac')) return;
        out.textContent = '';
        const key = event.target.textContent;
        if (digit.includes(key)) {
            if (secondNumber === '' && signOperation === '') {
                firstNumber += key;
                out.textContent = firstNumber;
            } else if (firstNumber !== '' && secondNumber !== '' && finish) {
                secondNumber = key;
                finish = false;
                out.textContent = secondNumber;
            } else {
                secondNumber += key;
                out.textContent = secondNumber;
            }
            console.log(firstNumber, secondNumber, signOperation);
            return;
        }
        if (action.includes(key)) {
            signOperation = key;
            console.log(firstNumber, secondNumber, signOperation);
            out.textContent = signOperation;
            return;
        }
        if (key === '=') {
            if (secondNumber === '') secondNumber = firstNumber;
            switch (signOperation) {
                case "+":
                    firstNumber = (+firstNumber) + (+secondNumber);
                    break;
                case "-":
                    firstNumber = (+firstNumber) - (+secondNumber);
                    break;
                case "x":
                    firstNumber = (+firstNumber) * (+secondNumber);
                    break;
                case "/":
                    if (secondNumber === '0') {
                        out.textContent = 'Error';
                        firstNumber = '';
                        secondNumber = '';
                        signOperation = '';
                        return;
                    }
                    firstNumber = (+firstNumber) / (+secondNumber);
                    break;
            }
            finish = true;
            console.log(firstNumber, secondNumber, signOperation);
            out.textContent = firstNumber;
        }

    });

})