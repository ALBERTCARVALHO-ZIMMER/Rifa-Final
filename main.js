// Objeto de números e nomes dos compradores
const container = document.getElementById('rifa-container');
const numeros = [];
const nomes = {
    1: "Roberta",
    2: "Everton",
    3: "Jennifer",
    4: "Everton",
    5: "Moábio",
    6: "Tia Márcia",
    7: "Jennifer",
    8: "Tia Márcia",
    9: "Tia Márcia",
    10: "Everton",
    11: "Everton",
    12: "Tia Marli",
    13: "Talita",
    14: "Jardel",
    15: "Josi",
    16: "Tia Márcia",
    17: "João Vitor de ana luisa",
    18: "Heloisa",
    19: "Pai",
    20: "Grace",
    21: "Pai",
    22: "Moábio",
    23: "Pai",
    24: "Tio Cleiton",
    25: "Inaraí",
    26: "Beatriz Pelegatti",
    27: "Pai",
    28: "Pai",
    29: "Pai",
    30: "Pai",
    31: "Pai",
    32: "Anne",
    33: "Tio Cleiton",
    34: "Não teve comprador.",
    35: "Não teve comprador.",
    36: "Nuclessia",
    37: "Não teve comprador.",
    38: "Não teve comprador.",
    39: "Não teve comprador.",
    40: "Não teve comprador.",
    41: "Não teve comprador.",
    42: "Não teve comprador.",
    43: "Tio Cleiton",
    44: "Não teve comprador.",
    45: "Nuclessia",
    46: "Josi",
    47: "Tia Márcia",
    48: "Jamesson",
    49: "Tia Márcia",
    50: "Não teve comprador.",
    51: "Não teve comprador.",
    52: "Tia Márcia",
    53: "Tia Márcia",
    54: "Não teve comprador.",
    55: "Não teve comprador.",
    56: "Tia Marli",
    57: "Grace",
    58: "Não teve comprador.",
    59: "Não teve comprador.",
    60: "Beatriz Pelegatti",
    61: "Não teve comprador.",
    62: "Tia Márcia",
    63: "Não teve comprador.",
    64: "Não teve comprador.",
    65: "Não teve comprador.",
    66: "Não teve comprador.",
    67: "Não teve comprador.",
    68: "Steicy",
    69: "Não teve comprador.",
    70: "Nuclessia",
    71: "Não teve comprador.",
    72: "Moábio",
    73: "Não teve comprador.",
    74: "Não teve comprador.",
    75: "Não teve comprador.",
    76: "Não teve comprador.",
    77: "Jennifer",
    78: "Elaine",
    79: "Não teve comprador.",
    80: "Tia Márcia",
    81: "Não teve comprador.",
    82: "Josi",
    83: "Não teve comprador.",
    84: "Não teve comprador.",
    85: "Não teve comprador.",
    86: "Não teve comprador.",
    87: "Não teve comprador.",
    88: "Não teve comprador.",
    89: "Elaine",
    90: "Roberta"
};


// Gerar os números de 1 a 90 e associar o nome
for (let i = 1; i <= 90; i++) {
    const numDiv = document.createElement('div');
    numDiv.classList.add('numero');
    numDiv.textContent = i;
    numDiv.id = `numero-${i}`;
    container.appendChild(numDiv);

    // Verifique se o nome já foi adicionado, caso contrário, associe um valor padrão.
    if (!nomes[i]) {
        nomes[i] = `Comprador ${i}`;
    }

    numeros.push(i);
}

// Função para sortear um número aleatório
function sortear() {
    // Desabilitar o botão de sorteio após o clique
    document.querySelector('.btn-sorteio').disabled = true;

    // Limpar o resultado anterior
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('erro');
    resultadoDiv.textContent = '';

    // Sortear um número aleatório
    const numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)];

    // Obter o nome do comprador associado ao número sorteado
    const nomeComprador = nomes[numeroSorteado];

    // Exibir o número sorteado e o nome do comprador
    resultadoDiv.innerHTML = `Número Sorteado: ${numeroSorteado}<br>Comprador: ${nomeComprador}`;

    // Destacar o número sorteado na tela
    setTimeout(() => {
        const numSorteadoDiv = document.getElementById(`numero-${numeroSorteado}`);
        numSorteadoDiv.style.backgroundColor = '#4caf50';
        numSorteadoDiv.style.color = 'white';
        numSorteadoDiv.style.border = '2px solid #388e3c';
        numSorteadoDiv.style.transform = 'scale(1.2)';
    }, 200);

    // Reabilitar o botão de sorteio após o sorteio
    setTimeout(() => {
        document.querySelector('.btn-sorteio').disabled = false;
    }, 3000);
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    // Resetar todos os números
    const numerosDivs = document.querySelectorAll('.numero');
    numerosDivs.forEach(num => {
        num.style.backgroundColor = '#90caf9';
        num.style.color = '#1e3a8a';
        num.style.border = '2px solid #1e3a8a';
        num.style.transform = 'scale(1)';
    });

    // Limpar o resultado e habilitar o botão novamente
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = '';
    document.querySelector('.btn-sorteio').disabled = false;
}
