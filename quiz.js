const questions = [
    {
        q: "Qual destas atitudes é mais sustentável?",
        options: [
            "Separar o lixo corretamente em casa.",
            "Jogar lixo na rua.",
            "Queimar lixo no quintal."
        ],
        correct: 0,
        feedback: [
            "Ótimo! Separar o lixo ajuda na reciclagem.",
            "Atenção! Jogar lixo na rua polui o meio ambiente.",
            "Queimar lixo polui o ar e prejudica a saúde."
        ]
    },
    {
        q: "O que NÃO deve ser colocado na lixeira azul?",
        options: [
            "Jornal",
            "Embalagem plástica",
            "Caderno velho"
        ],
        correct: 1,
        feedback: [
            "Jornal é papel e vai na lixeira azul.",
            "Correto, plásticos não vão na lixeira azul!",
            "Caderno velho é papel e vai na lixeira azul."
        ]
    },
    {
        q: "Qual é o destino correto para restos de comida?",
        options: [
            "Lixeira marrom (orgânico)",
            "Lixeira vermelha (plástico)",
            "Lixeira verde (vidro)"
        ],
        correct: 0,
        feedback: [
            "Muito bem! Resíduos orgânicos vão para a lixeira marrom.",
            "Errado! Plástico não deve receber restos de comida.",
            "Errado! Vidro não é o local para resíduos orgânicos."
        ]
    },
    {
        q: "Por que é importante ensinar educação ambiental nas escolas?",
        options: [
            "Para formar cidadãos responsáveis.",
            "Não é importante.",
            "Para aumentar a quantidade de lixo."
        ],
        correct: 0,
        feedback: [
            "Correto! A educação ambiental forma cidadãos comprometidos.",
            "Pense novamente! Educação ambiental é fundamental.",
            "Errado! Queremos reduzir, não aumentar, o lixo."
        ]
    },
    {
        q: "Como você pode ajudar a reduzir a quantidade de resíduos sólidos?",
        options: [
            "Utilizando produtos reutilizáveis.",
            "Comprando tudo descartável.",
            "Jogando lixo em qualquer lugar."
        ],
        correct: 0,
        feedback: [
            "Muito bom! Produtos reutilizáveis reduzem o lixo.",
            "Descartáveis aumentam o lixo. Evite-os!",
            "Nunca jogue lixo em qualquer lugar!"
        ]
    }
];

function renderQuiz() {
    const form = document.getElementById('quiz-form');
    form.innerHTML = '';
    questions.forEach((q, i) => {
        const container = document.createElement('div');
        container.className = 'quiz-question';
        const h4 = document.createElement('h4');
        h4.textContent = ${i + 1}. ${q.q};
        container.appendChild(h4);
        q.options.forEach((opt, j) => {
            const label = document.createElement('label');
            const radio = document.createElement('input');
            radio.type = "radio";
            radio.name = q${i};
            radio.value = j;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + opt));
            container.appendChild(label);
        });
        form.appendChild(container);
    });
}

function evaluateQuiz() {
    let correct = 0;
    let feedbackMsg = "";
    questions.forEach((q, i) => {
        const checked = document.querySelector(input[name="q${i}"]:checked);
        if (!checked) {
            feedbackMsg += Questão ${i + 1}: Não respondida.<br>;
        } else {
            const userAns = Number(checked.value);
            if (userAns === q.correct) {
                correct++;
                feedbackMsg += Questão ${i + 1}: ${q.feedback[userAns]}<br>;
            } else {
                feedbackMsg += Questão ${i + 1}: ${q.feedback[userAns]}<br>;
            }
        }
    });
    feedbackMsg += <br>Total de acertos: <strong>${correct} / ${questions.length}</strong><br>;
    if (correct < questions.length) {
        feedbackMsg += "Reveja as explicações e tente melhorar!";
    } else {
        feedbackMsg += "Parabéns! Você tem ótimos hábitos ambientais!";
    }
    document.getElementById('quiz-result').innerHTML = feedbackMsg;
}

document.getElementById('submit-quiz').addEventListener('click', function (e) {
    e.preventDefault();
    evaluateQuiz();
});

window.onload = function () {
    renderQuiz();
};