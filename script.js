const input = document.getElementById('input')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

const invalidDigits = /[2-9]+/g
const MAX_LENGHT = 8

btn.onclick = function action() {
    verifyInputValue(input) 
}

function verifyInputValue(value) {
    value = input.value

    //Verifica se valor do input contém digitos inválidos
    if (value.match(invalidDigits) != null) 
    {
        alert('Argumento inválido! Insira apenas zeros(0) e uns(1).')
    } else binaryToDecimal(value)
}

function binaryToDecimal(number) {
    // Realiza a conversão
    number = parseInt(number, 2)
    showResult(number)
}

function showResult(conversion) {
    // Exibi resultado na tela
    result.value = conversion
}

