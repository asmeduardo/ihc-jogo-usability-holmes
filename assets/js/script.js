// Definindo as empresas e os problemas de usabilidade
const companies = [
    {
        name: "Cursos Online", issues: [
            {
                problem: "O sistema de matrícula não exibe feedback sobre o progresso do aluno durante o processo. O usuário não sabe se está avançando corretamente ou se ocorreu algum erro.",
                heuristics: shuffleArray([
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Estética e Design minimalista", correct: false },
                    { answer: "Liberdade e controle do usuário", correct: false },
                    { answer: "Ajuda e Documentação", correct: false }
                ])
            },
            {
                problem: "As informações sobre os cursos estão descritas de maneira muito técnica e com pouca explicação prática, dificultando o entendimento dos alunos.",
                heuristics: shuffleArray([
                    { answer: "Correspondência entre o sistema e o mundo real", correct: true },
                    { answer: "Reconhecer ao invés de lembrar", correct: false },
                    { answer: "Flexibilidade e Eficiência", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Ajuda e Documentação", correct: false }
                ])
            },
            {
                problem: "Durante o processo de matrícula, o aluno não pode corrigir facilmente um erro cometido em uma etapa anterior, sendo forçado a recomeçar tudo.",
                heuristics: shuffleArray([
                    { answer: "Liberdade e controle do usuário", correct: true },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Recuperação diante de erros", correct: false },
                    { answer: "Estética e Design minimalista", correct: false },
                    { answer: "Consistência e padrões", correct: false }
                ])
            }
        ]
    },
    {
        name: "E-commerce", issues: [
            {
                problem: "Ao adicionar produtos ao carrinho, o sistema não oferece nenhum tipo de feedback visual, o que pode causar incerteza no usuário sobre se a ação foi bem-sucedida.",
                heuristics: shuffleArray([
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Flexibilidade e Eficiência", correct: false },
                    { answer: "Estética e Design minimalista", correct: false },
                    { answer: "Recuperação diante de erros", correct: false },
                    { answer: "Ajuda e Documentação", correct: false }
                ])
            },
            {
                problem: "O processo de checkout possui etapas repetidas, como preencher o endereço de entrega várias vezes, o que aumenta a complexidade do fluxo.",
                heuristics: shuffleArray([
                    { answer: "Flexibilidade e Eficiência", correct: true },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Liberdade e controle do usuário", correct: false }
                ])
            },
            {
                problem: "O design do site não segue um padrão claro em toda a navegação, o que pode confundir os usuários ao tentar localizar diferentes seções do site.",
                heuristics: shuffleArray([
                    { answer: "Consistência e padrões", correct: true },
                    { answer: "Reconhecer ao invés de lembrar", correct: false },
                    { answer: "Estética e Design minimalista", correct: false },
                    { answer: "Ajuda e Documentação", correct: false },
                    { answer: "Liberdade e controle do usuário", correct: false }
                ])
            }
        ]
    },
    {
        name: "Banco Digital", issues: [
            {
                problem: "O aplicativo não explica de forma clara o que cada botão faz. Isso dificulta para novos usuários que não estão familiarizados com o sistema bancário digital.",
                heuristics: shuffleArray([
                    { answer: "Ajuda e Documentação", correct: true },
                    { answer: "Visibilidade do status do sistema", correct: false },
                    { answer: "Correspondência entre o sistema e o mundo real", correct: false },
                    { answer: "Recuperação diante de erros", correct: false },
                    { answer: "Consistência e padrões", correct: false }
                ])
            },
            {
                problem: "Quando o usuário comete um erro ao realizar uma transação, o sistema apenas exibe uma mensagem genérica, sem indicar claramente o que o usuário deve fazer para corrigir.",
                heuristics: shuffleArray([
                    { answer: "Recuperação diante de erros", correct: true },
                    { answer: "Liberdade e controle do usuário", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Estética e Design minimalista", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false }
                ])
            },
            {
                problem: "O layout do aplicativo é sobrecarregado com muitos elementos, como ícones desnecessários e informações pequenas demais para serem legíveis, afetando a experiência do usuário.",
                heuristics: shuffleArray([
                    { answer: "Estética e Design minimalista", correct: true },
                    { answer: "Reconhecer ao invés de lembrar", correct: false },
                    { answer: "Liberdade e controle do usuário", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false }
                ])
            }
        ]
    },
    {
        name: "Restaurante", issues: [
            {
                problem: "O sistema de pedidos online não apresenta um histórico das escolhas anteriores do cliente, forçando-o a escolher novamente os mesmos pratos.",
                heuristics: shuffleArray([
                    { answer: "Reconhecer ao invés de lembrar", correct: true },
                    { answer: "Flexibilidade e Eficiência", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Liberdade e controle do usuário", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false }
                ])
            },
            {
                problem: "O design do menu não é claro e não usa categorias óbvias, o que dificulta a busca por pratos específicos.",
                heuristics: shuffleArray([
                    { answer: "Correspondência entre o sistema e o mundo real", correct: true },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Flexibilidade e Eficiência", correct: false },
                    { answer: "Ajuda e Documentação", correct: false },
                    { answer: "Consistência e padrões", correct: false }
                ])
            },
            {
                problem: "Quando o cliente envia o pedido, não há nenhum tipo de confirmação visível de que o pedido foi corretamente registrado.",
                heuristics: shuffleArray([
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Liberdade e controle do usuário", correct: false },
                    { answer: "Estética e Design minimalista", correct: false },
                    { answer: "Recuperação diante de erros", correct: false },
                    { answer: "Prevenção de erros", correct: false }
                ])
            }
        ]
    },
    {
        name: "Clínica Médica", issues: [
            {
                problem: "O sistema de agendamento de consultas exige que o paciente preencha diversas informações repetitivas, como nome, endereço e telefone, aumentando a carga cognitiva e o tempo de uso.",
                heuristics: shuffleArray([
                    { answer: "Flexibilidade e Eficiência", correct: true },
                    { answer: "Reconhecer ao invés de lembrar", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Estética e Design minimalista", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false }
                ])
            },
            {
                problem: "Após o agendamento, não há confirmação visual ou por e-mail que o paciente teve sucesso ao agendar sua consulta.",
                heuristics: shuffleArray([
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Recuperação diante de erros", correct: false },
                    { answer: "Ajuda e Documentação", correct: false },
                    { answer: "Prevenção de erros", correct: false },
                    { answer: "Liberdade e controle do usuário", correct: false }
                ])
            },
            {
                problem: "O design do site é confuso e desordenado, com elementos e botões em lugares inesperados, dificultando a navegação dos usuários.",
                heuristics: shuffleArray([
                    { answer: "Consistência e padrões", correct: true },
                    { answer: "Estética e Design minimalista", correct: false },
                    { answer: "Ajuda e Documentação", correct: false },
                    { answer: "Recuperação diante de erros", correct: false },
                    { answer: "Correspondência entre o sistema e o mundo real", correct: false }
                ])
            }
        ]
    },
    {
        name: "Streaming de Vídeos",
        issues: [
            {
                problem: "O carregamento dos vídeos é lento, especialmente quando se tenta iniciar um vídeo em alta resolução ou em horários de pico.",
                heuristics: shuffleArray([
                    { answer: "Visibilidade do status do sistema", correct: true },
                    { answer: "Estabilidade e previsibilidade do sistema", correct: false },
                    { answer: "Consistência e padrões", correct: false },
                    { answer: "Flexibilidade e Eficiência", correct: false },
                    { answer: "Prevenção de erros", correct: false }
                ])
            },
            {
                problem: "A navegação no catálogo de filmes e séries é confusa, sem categorias claras e filtros úteis, dificultando encontrar conteúdos relevantes.",
                heuristics: shuffleArray([
                    { answer: "Consistência e padrões", correct: true },
                    { answer: "Correspondência entre o sistema e o mundo real", correct: false },
                    { answer: "Ajuda e Documentação", correct: false },
                    { answer: "Minimização da carga cognitiva", correct: false },
                    { answer: "Visibilidade do status do sistema", correct: false }
                ])
            },
            {
                problem: "O processo de assinatura ou alteração do plano de assinatura é complicado e exige muitas etapas, com informações confusas sobre os planos.",
                heuristics: shuffleArray([
                    { answer: "Prevenção de erros", correct: true },
                    { answer: "Minimização da carga cognitiva", correct: false },
                    { answer: "Flexibilidade e Eficiência", correct: false },
                    { answer: "Reconhecer ao invés de lembrar", correct: false },
                    { answer: "Ajuda e Documentação", correct: false }
                ])
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
let alertCompanyIndex = null;

// Embaralha as alternativas de respostas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

// Remove os acentos
function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Inicia o jogo
function startGame() {

    // Inicializa a contagem total de questões
    totalQuestions = companies.reduce((total, company) => total + company.issues.length, 0);

    document.getElementById("score-container").classList.remove("hidden");
    document.getElementById("questions-left-container").classList.remove("hidden");
    document.getElementById("remaining-questions").innerText = `${totalQuestions - answeredQuestions} / ${totalQuestions}`;

    document.getElementById("intro-container").classList.add("hidden");
    document.getElementById("start-game-container").classList.add("hidden");
    document.getElementById("start-game-button").classList.add("hidden");
    document.getElementById("companies-container").classList.remove("hidden");

    document.getElementById("game-introduction-text").classList.remove("hidden");

    const companiesContainer = document.getElementById("companies-container");
    companiesContainer.innerHTML = "";

    companies.forEach((company, index) => {
        const button = document.createElement("button");
        button.classList.add("company-button");

        // Cria um contêiner para o ícone
        const iconContainer = document.createElement("div");
        iconContainer.classList.add("icon-container");

        // Adiciona o ícone da empresa
        const icon = document.createElement("img");
        icon.src = `assets/images/icone_${removerAcentos(company.name.toLowerCase()).replace(/ /g, "_")}.png`;  // Caminho da imagem
        icon.alt = company.name;
        icon.classList.add("company-icon");

        iconContainer.appendChild(icon);

        // Adiciona o nome da empresa abaixo do ícone
        const name = document.createElement("div");
        name.classList.add("company-name");
        name.innerText = company.name;

        // Adiciona o contêiner de ícone e o nome ao botão
        button.appendChild(iconContainer);
        button.appendChild(name);

        // Se a empresa não tem o alerta, desabilita o botão
        if (index !== alertCompanyIndex) {
            button.disabled = true;
            button.style.opacity = "0.3";
        } else {
            button.classList.add("vibrate");
        }

        // Quando o botão é clicado, remove a vibração e chama a função para mostrar o problema
        button.onclick = () => {
            button.classList.remove("vibrate");
            startProblem(company);
        };

        companiesContainer.appendChild(button);
    });
}

// Atualiza a empresa com alerta após cada rodada
function updateAlert() {
    const companiesWithUnresolvedIssues = companies.filter(company =>
        company.issues.some(issue => !issue.answered)
    );

    if (companiesWithUnresolvedIssues.length === 0) {
        return;
    }

    alertCompanyIndex = companies.indexOf(
        companiesWithUnresolvedIssues[Math.floor(Math.random() * companiesWithUnresolvedIssues.length)]
    );
}

// Exibe o problema para o jogador
function startProblem(company) {
    document.getElementById("companies-container").classList.add("hidden");
    document.getElementById("usability-problem-modal").classList.remove("hidden");

    // Seleciona um problema aleatório não respondido
    currentCompany = company;
    const remainingIssues = company.issues.filter(issue => !issue.answered);
    if (remainingIssues.length === 0) {
        return showResult();
    }
    currentProblem = remainingIssues[Math.floor(Math.random() * remainingIssues.length)];
    currentProblem.answered = true;

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

    timeLeft = 60;
    document.getElementById("timer").innerText = timeLeft;
    timerInterval = setInterval(updateTimer, 1000);

    document.getElementById("remaining-questions").innerText = `${totalQuestions - answeredQuestions} / ${totalQuestions}`;
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    // Quando o tempo chega a zero
    if (timeLeft <= 0) {
        clearInterval(timerInterval);

        // Exibe a mensagem de tempo esgotado
        showTimeUpMessage();

        setTimeout(() => {
            document.getElementById("feedback-message").classList.add("hidden");
            showResult();
        }, 3500);
    }
}

function showTimeUpMessage() {
    const feedbackMessage = document.getElementById("feedback-message");

    feedbackMessage.innerText = "Tempo esgotado! Você perdeu a oportunidade de aprender e pontuar. :(";

    const feedbackContainer = document.getElementById("answer-feedback");
    feedbackContainer.classList.remove("hidden");
}

// Exibe a mensagem de resposta correta ou errada
function showAnswerFeedback(correct) {
    const feedbackContainer = document.getElementById("answer-feedback");
    feedbackContainer.classList.remove("hidden");

    const feedbackMessage = document.getElementById("feedback-message");

    if (correct) {
        feedbackMessage.innerText = "Resposta correta!";
    } else {
        feedbackMessage.innerText = "Resposta errada!";
    }

    // Ocultar o feedback após 2 segundos
    setTimeout(() => {
        feedbackContainer.classList.add("hidden");
        showResult();
    }, 2000);
}

// Função para verificar a resposta do jogador
function checkAnswer(heuristic) {
    clearInterval(timerInterval);
    const correct = heuristic.correct;

    // Desabilita todos os botões de resposta após a escolha
    const answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach(button => {
        button.disabled = true;
    });

    // Verifica se a resposta está correta e atualiza a pontuação
    if (correct) {
        correctAnswers++;
        score += 10;
    } else {
        wrongAnswers++;
    }

    answeredQuestions++;

    // Atualiza a contagem de perguntas restantes
    document.getElementById("remaining-questions").innerText = `${totalQuestions - answeredQuestions} / ${totalQuestions}`;

    // Atualiza a pontuação
    document.getElementById("score").innerText = score;  // Atualiza o valor da pontuação na tela

    // Destaca as alternativas e mostra o sinal de acerto
    answerButtons.forEach(button => {
        if (button.innerText === heuristic.answer) {
            if (correct) {
                button.style.backgroundColor = "green";
                button.innerHTML += " ✔️";
            } else {
                button.style.backgroundColor = "#B22222";
                button.style.color = "white";
                button.innerHTML += " ❌";
            }
        } else {
            // Destaca a resposta correta
            if (button.innerText === currentProblem.heuristics.find(h => h.correct).answer) {
                button.style.backgroundColor = "green";
                button.innerHTML += " ✔️";
            }
        }
    });

    // Exibe o feedback de resposta correta/errada
    showAnswerFeedback(correct);

    if (answeredQuestions >= totalQuestions) {
        setTimeout(() => {
            showResult();
        }, 2000); // Aguarda 2 segundos antes de exibir o resultado
    }
}

// Exibe o resultado do jogo
function showResult() {
    document.getElementById("usability-problem-modal").classList.add("hidden");
    const resultMessage = document.getElementById("score");

    resultMessage.innerText = score;

    setTimeout(() => {
        if (answeredQuestions < totalQuestions) {
            nextRound();
        } else {
            endGame();
        }
    }, 1000);
}

// Termina o jogo
function endGame() {
    document.getElementById("game-result").classList.remove("hidden");
    document.getElementById("score-container").classList.add("hidden");

    // Exibe as informações de respostas corretas, erradas e a pontuação
    document.getElementById("correct-answers").innerText = `Respostas corretas: ${correctAnswers}`;
    document.getElementById("wrong-answers").innerText = `Respostas erradas: ${wrongAnswers}`;
    document.getElementById("final-score").innerText = `Pontuação final: ${score}`;

    document.getElementById("restart-game-button").addEventListener("click", function () {
        resetGame();
        startGame();
    });
}

// Reinicia as variáveis e começa o jogo
function resetGame() {
    score = 0;
    answeredQuestions = 0;
    totalQuestions = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    companies.forEach(company => company.issues.forEach(issue => issue.answered = false));

    document.getElementById("game-result").classList.add("hidden");
}

// Próxima rodada
function nextRound() {
    updateAlert();

    const companiesContainer = document.getElementById("companies-container");
    companiesContainer.innerHTML = "";

    startGame();
}

// Inicia o jogo
document.getElementById("start-game-button").addEventListener("click", function () {
    updateAlert();
    startGame();
});