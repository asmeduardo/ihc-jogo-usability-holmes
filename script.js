// Definindo as empresas e os problemas de usabilidade
const companies = [
    {
        name: "Escola XYZ", issues: [
            {
                problem: "O sistema de matrícula não permite salvar o progresso.",
                heuristics: [
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Recuperação de erros", correct: false } // nova heurística
                ]
            },
            {
                problem: "Informações sobre cursos estão desorganizadas e difíceis de encontrar.",
                heuristics: [
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Consistência e padrões", correct: true },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            },
            {
                problem: "O processo de pagamento é confuso e com muitos passos desnecessários.",
                heuristics: [
                    { answer: "Minimização da carga cognitiva", correct: true },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Eficiência de uso", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Feedback do sistema", correct: false } // nova heurística
                ]
            }
        ]
    },
    {
        name: "Loja Online ABC", issues: [
            {
                problem: "Falta de feedback ao adicionar produtos ao carrinho.",
                heuristics: [
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Minimização da carga cognitiva", correct: false },
                    { answer: "Eficiência de uso", correct: false },
                    { answer: "Estética e design", correct: false } // nova heurística
                ]
            },
            {
                problem: "O processo de checkout possui etapas redundantes.",
                heuristics: [
                    { answer: "Consistência e padrões", correct: true },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            },
            {
                problem: "Não há maneira fácil de voltar à página inicial.",
                heuristics: [
                    { answer: "Controle e liberdade do usuário", correct: true },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Eficiência de uso", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Feedback do sistema", correct: false } // nova heurística
                ]
            }
        ]
    },
    {
        name: "Banco Digital Z", issues: [
            {
                problem: "A navegação é complexa e os botões não são intuitivos.",
                heuristics: [
                    { answer: "Consistência e padrões", correct: true },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Eficiência de uso", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            },
            {
                problem: "Falta de mensagens de erro explicativas em caso de falha na transação.",
                heuristics: [
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Minimização da carga cognitiva", correct: false },
                    { answer: "Eficiência de uso", correct: false },
                    { answer: "Feedback do sistema", correct: false } // nova heurística
                ]
            },
            {
                problem: "O site carrega lentamente.",
                heuristics: [
                    { answer: "Eficiência de uso", correct: true },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            }
        ]
    },
    {
        name: "Restaurante Gourmet", issues: [
            {
                problem: "Não há opção clara para fazer pedidos online.",
                heuristics: [
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            },
            {
                problem: "O menu está mal estruturado e não tem filtros adequados.",
                heuristics: [
                    { answer: "Minimização da carga cognitiva", correct: true },
                    { answer: "Eficiência de uso", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Feedback do sistema", correct: false } // nova heurística
                ]
            },
            {
                problem: "Não há feedback após o envio de um pedido.",
                heuristics: [
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            }
        ]
    },
    {
        name: "Clínica Médica", issues: [
            {
                problem: "O agendamento de consultas é difícil de entender e usar.",
                heuristics: [
                    { answer: "Consistência e padrões", correct: true },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            },
            {
                problem: "Não há confirmação clara após o agendamento.",
                heuristics: [
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Minimização da carga cognitiva", correct: false },
                    { answer: "Eficiência de uso", correct: false },
                    { answer: "Feedback do sistema", correct: false } // nova heurística
                ]
            },
            {
                problem: "O sistema de pagamento não oferece opções de pagamento diversificadas.",
                heuristics: [
                    { answer: "Eficiência de uso", correct: true },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            }
        ]
    },
    {
        name: "Universidade ABC", issues: [
            {
                problem: "O site é lento e os alunos têm dificuldades em acessar informações sobre cursos.",
                heuristics: [
                    { answer: "Eficiência de uso", correct: true },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            },
            {
                problem: "A navegação entre os módulos do site é confusa.",
                heuristics: [
                    { answer: "Consistência e padrões", correct: true },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Feedback do sistema", correct: false } // nova heurística
                ]
            },
            {
                problem: "Falta de informações claras sobre o processo de inscrição.",
                heuristics: [
                    { answer: "Prevenção de erros", correct: true },
                    { answer: "Minimização da carga cognitiva", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Controle e liberdade do usuário", correct: false },
                    { answer: "Acessibilidade", correct: false } // nova heurística
                ]
            }
        ]
    }
];

let currentProblem = null;
let currentCompany = null;
let timerInterval = null;
let timeLeft = 60;
let score = 0;
let answeredQuestions = 0;
let totalQuestions = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let alertCompanyIndex = null;  // Índice da empresa com o alerta

// Função para iniciar o jogo
function startGame() {

    // Inicializa a contagem total de questões
    totalQuestions = companies.reduce((total, company) => total + company.issues.length, 0);

    // Exibe a contagem de perguntas restantes logo acima das empresas
    document.getElementById("questions-left-container").classList.remove("hidden");
    document.getElementById("remaining-questions").innerText = `${totalQuestions - answeredQuestions} / ${totalQuestions}`;

    // Esconde o botão de iniciar e mostra as empresas
    document.getElementById("start-game-container").classList.add("hidden");
    document.getElementById("companies-container").classList.remove("hidden");

    const companiesContainer = document.getElementById("companies-container");
    companiesContainer.innerHTML = "";  // Limpar empresas existentes

    companies.forEach((company, index) => {
        const button = document.createElement("button");
        button.classList.add("company-button");
        button.innerText = company.name;

        // Se a empresa não tem o alerta, desabilite o botão
        if (index !== alertCompanyIndex) {
            button.disabled = true;  // Desabilita o botão
            button.style.opacity = "0.3";  // Deixa o botão visualmente desabilitado
        } else {
            // Adiciona alerta (erro) na empresa
            button.style.backgroundColor = "red";  // Alerta (erro) na empresa
        }

        button.onclick = () => startProblem(company);
        companiesContainer.appendChild(button);
    });
}

// Função para atualizar a empresa com alerta após cada rodada
function updateAlert() {
    // Filtra empresas que ainda têm problemas não resolvidos
    const companiesWithUnresolvedIssues = companies.filter(company =>
        company.issues.some(issue => !issue.answered)
    );

    // Se não houver mais empresas com problemas não resolvidos, o jogo acaba
    if (companiesWithUnresolvedIssues.length === 0) {
        return;
    }

    // Escolhe uma empresa aleatoriamente entre as que ainda têm problemas não resolvidos
    alertCompanyIndex = companies.indexOf(
        companiesWithUnresolvedIssues[Math.floor(Math.random() * companiesWithUnresolvedIssues.length)]
    );
}

function startProblem(company) {
    // Esconde a lista de empresas e exibe o problema
    document.getElementById("companies-container").classList.add("hidden");
    document.getElementById("usability-problem-container").classList.remove("hidden");

    // Seleciona um problema aleatório não respondido
    currentCompany = company;
    const remainingIssues = company.issues.filter(issue => !issue.answered);
    if (remainingIssues.length === 0) {
        return showResult(false); // Se não houver mais problemas, termina o jogo
    }
    currentProblem = remainingIssues[Math.floor(Math.random() * remainingIssues.length)];
    currentProblem.answered = true;  // Marca o problema como respondido

    // Exibe o problema
    document.getElementById("problem-title").innerText = `Problema em ${company.name}`;
    document.getElementById("problem-description").innerText = currentProblem.problem;

    // Exibe as alternativas de heurísticas
    const answersContainer = document.getElementById("answers-container");
    answersContainer.innerHTML = "";

    currentProblem.heuristics.forEach((heuristic) => {
        const button = document.createElement("button");
        button.classList.add("answer-button");
        button.innerText = heuristic.answer;
        button.onclick = () => checkAnswer(heuristic);
        answersContainer.appendChild(button);
    });

    // Inicia o contador de tempo
    timeLeft = 60;
    document.getElementById("timer").innerText = timeLeft;
    timerInterval = setInterval(updateTimer, 1000);

    // Atualiza o número de perguntas restantes
    document.getElementById("remaining-questions").innerText = `${totalQuestions - answeredQuestions} / ${totalQuestions}`;
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showResult(false);
    }
}

function checkAnswer(heuristic) {
    clearInterval(timerInterval);
    const correct = heuristic.correct;

    // Atualiza as variáveis de respostas corretas e erradas
    if (correct) {
        correctAnswers++;
        score += 10;
    } else {
        wrongAnswers++;
        score -= 5;
    }

    answeredQuestions++;  // Incrementa as questões respondidas

    // Atualiza a contagem de perguntas restantes
    document.getElementById("remaining-questions").innerText = `${totalQuestions - answeredQuestions} / ${totalQuestions}`;

    showResult(correct);
}

function showResult(correct) {
    document.getElementById("usability-problem-container").classList.add("hidden");
    const resultMessage = document.getElementById("result-message");
    if (correct) {
        resultMessage.innerText = `Você acertou! Pontuação: ${score}`;
    } else {
        resultMessage.innerText = `Você errou! Pontuação: ${score}`;
    }

    // A próxima rodada começa automaticamente após 2 segundos
    setTimeout(() => {
        if (answeredQuestions < totalQuestions) {
            nextRound();  // Continuar o jogo se houver perguntas restantes
        } else {
            endGame();  // Terminar o jogo quando todas as perguntas forem respondidas
        }
    }, 1000);
}

function endGame() {
    document.getElementById("result-message").classList.add("hidden");
    document.getElementById("game-result").classList.remove("hidden");

    // Exibe as informações de respostas corretas, erradas e a pontuação
    document.getElementById("correct-answers").innerText = `Respostas corretas: ${correctAnswers}`;
    document.getElementById("wrong-answers").innerText = `Respostas erradas: ${wrongAnswers}`;
    document.getElementById("final-score").innerText = `Pontuação final: ${score}`;

    // Adiciona evento para reiniciar o jogo
    document.getElementById("restart-game-button").addEventListener("click", function () {
        resetGame();
        startGame();
    });
}

function resetGame() {
    score = 0;
    answeredQuestions = 0;
    totalQuestions = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    companies.forEach(company => company.issues.forEach(issue => issue.answered = false));

    // Esconde o resultado
    document.getElementById("game-result").classList.add("hidden");
}

function nextRound() {
    // Atualiza a empresa com alerta para a próxima rodada
    updateAlert();

    // Limpar o conteúdo dos botões de empresas antes de criar novos
    const companiesContainer = document.getElementById("companies-container");
    companiesContainer.innerHTML = "";

    // Exibe novamente as empresas (sem duplicar)
    startGame();
}

// Adiciona um evento ao botão de iniciar jogo
document.getElementById("start-game-button").addEventListener("click", function () {
    // Reinicia as variáveis e começa o jogo
    updateAlert(); // Escolhe uma empresa para o alerta
    startGame();
});