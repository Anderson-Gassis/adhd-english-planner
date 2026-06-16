/**
 * CURRICULUM_EXPANDED
 * Dynamic ADHD-focused CEFR English Syllabus (A1 up to C1/C2).
 * Each level contains exactly 20 Modules.
 * Each module contains exactly 6 lessons (Micro-Sprints) to ensure 30 minutes of study.
 * Each lesson has 5 interactive slides (Intro, Word Puzzle, Listening, Vocab, Checkpoint).
 * Includes the 200-question pool for the A1 adaptive exam.
 */

// Bionic Reading formatter helper for ADHD focus
function toBionic(text) {
    if (!text) return "";
    return text.split(' ').map(word => {
        if (word.startsWith('<') || word.includes('🔊') || word.includes('class=')) {
            return word;
        }
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        if (cleanWord.length === 0) return word;
        
        const len = cleanWord.length;
        let mid = 1;
        if (len > 3) {
            mid = Math.ceil(len * 0.5);
        } else {
            mid = len;
        }
        
        const boldPart = word.substring(0, mid);
        const restPart = word.substring(mid);
        return `<b>${boldPart}</b>${restPart}`;
    }).join(' ');
}

// Module titles for the 5 levels (20 modules each)
const LEVEL_MODULE_TITLES = {
    "A1": [
        "O Código de Sobrevivência (Greetings & Identity)",
        "A Engrenagem do Tempo (Daily Routine & Present Simple)",
        "O Menu do Dia (Survival Vocabulary)",
        "Escritório Digital (Digital Workplace & Software Tools)",
        "Hardware & Setup (Sua Estação de Trabalho)",
        "O Git & Versionamento (Basic Git Concepts)",
        "Time & Schedules (Horários e Fusos)",
        "Descrevendo Tarefas (Simple Action Verbs)",
        "Números e Dinheiro (Numbers & Currency)",
        "Direções no Escritório (Office Directions)",
        "Pessoas do Time (Team Roles)",
        "Conversa de Café (Coffee Break Talk)",
        "E-mails Básicos (Basic Email Phrases)",
        "Chamadas Rápidas (Short Audio Calls)",
        "Meu Primeiro Commit (First Commit & PR)",
        "Dias da Semana e Meses (Days & Months)",
        "Falando de Origem (Origin & Languages)",
        "Cores e Layouts (UI Elements & Colors)",
        "Senhas e Logins (Security & Passwords)",
        "Conclusão da Jornada A1 (A1 Completion & Review)"
    ],
    "A2": [
        "O Passageiro Internacional (Travel & Directions)",
        "A Linha do Tempo (Past Simple & Life Events)",
        "O Mercado e o Consumo (Shopping & Money)",
        "Reserva de Viagem (Booking Hotels & Checking-In)",
        "Refeições e Restaurantes (Ordering Food & Drinks)",
        "Transporte Público (Trains, Buses & Tickets)",
        "Direções Avançadas (Finding Locations)",
        "Clima e Tempo (Weather & Planning)",
        "Minha Carreira Passada (Past Jobs & Resumes)",
        "Descrição de Projetos (Simple Project Descriptions)",
        "Reportando Erros Simples (Reporting Bugs)",
        "Compras Corporativas (Purchasing Equipment)",
        "Reuniões de Alinhamento (Basic Catch-ups)",
        "Desculpas e Agradecimentos (Polite Phrases)",
        "Conversando com Colegas (Small Talk at Desk)",
        "Planos de Viagem (Future Trip Plans)",
        "Comparando Ferramentas (Comparatives & Superlatives)",
        "Rotinas do Passado (Used To & Past Habits)",
        "Instruções de Instalação (Installation Guides)",
        "Conclusão da Jornada A2 (A2 Completion & Review)"
    ],
    "B1": [
        "Conectando os Pontos (Present Perfect & Life Experiences)",
        "O Próximo Passo (Future Plans & Predictions)",
        "Vida Digital e Opiniões (Social Media & Arguments)",
        "Experiências Profissionais (Present Perfect in Interviews)",
        "Planos de Carreira (Will vs Going To)",
        "Debatendo Soluções (Disagreeing Politely)",
        "Modal Verbs de Conselho (Should & Ought To)",
        "Modal Verbs de Obrigação (Must & Have To)",
        "Hipóteses do Cotidiano (First Conditional)",
        "Voz Passiva Básica (Passive Voice in Tech)",
        "E-mails de Follow-Up (Writing Professional Emails)",
        "Apresentando Gráficos (Describing Charts & Data)",
        "Lançamento de Funcionalidades (Product Launches)",
        "Negociações Simples (Making Trades)",
        "Resolução de Pequenos Conflitos (Soft Skills)",
        "Shadowing Avançado (Shadowing & Intonation)",
        "Descrevendo Processos (Flowcharts & Process Description)",
        "Hábitos no Trabalho (Workplace Norms)",
        "Reuniões de Sprint Planning (Scrum Ceremonies)",
        "Conclusão da Jornada B1 (B1 Completion & Review)"
    ],
    "B2": [
        "Engenharia de Projetos & Agilidade (Business Vocabulary & Passive Voice)",
        "A Arte da Persuasão (Phrasal Verbs & Idioms)",
        "Resolução de Conflitos (Diplomatic English & Conditional Sentences)",
        "Objetivos e OKRs (Setting Goals)",
        "Apresentação de Slides (Pitching to Stakeholders)",
        "Voz Passiva Avançada (System Logs & Security Reports)",
        "Condicionais de Negócios (Second & Third Conditionals)",
        "Phrasal Verbs Avançados (Bring up, Call off, Roll out)",
        "Idioms de Liderança (Read between the lines, Hit the ground running)",
        "E-mails Diplomáticos (Polite Business Writing)",
        "Negociando Salários (Salary Negotiation)",
        "Gerenciando Crises (Incident Reports & Post-Mortems)",
        "Técnicas de Feedback (Constructive Criticism)",
        "Descrevendo Arquiteturas (Technical Architecture Diagrams)",
        "Facilitando Reuniões (Running Standups & Retrospectives)",
        "Argumentação sob Pressão (Active Listening)",
        "Apresentação de Métricas (LTV, CAC, Retention)",
        "Negociando com Clientes (Client Alignment)",
        "Planejamento de Roadmap (Long-Term Planning)",
        "Conclusão da Jornada B2 (B2 Completion & Review)"
    ],
    "C1/C2": [
        "O C-Level Context (Advanced Analytics & KPIs)",
        "Oratória de Alto Impacto (Pitching & Public Speaking)",
        "Negociações Complexas e Ironia (Nuances & Cultural Background)",
        "Venture Capital e Funding (Equity & Valuation)",
        "Fusões e Aquisições (M&A Vocabulary)",
        "Gerenciamento de Crise Geral (Crisis Communication)",
        "Oratória de TED Talks (Storytelling & Hooking)",
        "Nuances Culturais EUA vs UK (Understatement & Directness)",
        "Análise de Balanços (Financial Statements)",
        "Estratégia de Entrada no Mercado (Go-To-Market)",
        "Negociação de Alta Fricção (High-Stakes Hostage Style)",
        "Eliminando Filler Words (Vocal Clarity & Presence)",
        "Retórica e Persuasão Avançada (Advanced Rhetoric)",
        "Liderança e Inteligência Emocional (Soft Skills for C-Level)",
        "Entrevistas Executivas (C-Level Hiring Process)",
        "Elaboração de Relatórios Anuais (Annual Reports)",
        "Governança e Compliance (Regulatory Frameworks)",
        "Gestão de Mudanças Corporativas (Change Management)",
        "Parcerias Estratégicas Globais (Strategic Alliances)",
        "Conclusão da Jornada C1/C2 (Executive Mastery)"
    ]
};

// Generates 120 seeds per level (20 modules * 6 lessons) to keep script lightweight but rich.
// The engine automatically builds the 5 slides from this linear seed array.
const LEVEL_SEEDS = {
    "A1": [],
    "A2": [],
    "B1": [],
    "B2": [],
    "C1/C2": []
};

// --- POPULATING SEED DATABASES PROGRAMMATICALLY TO ENSURE DIVERSITY ---
// We write a robust helper to populate diverse content for tech & business English.

const subjectsA1 = ["Greetings", "Time", "Food", "Workplace", "Git", "Code", "Emails", "Slack", "Meetings", "Numbers"];
const verbsA1 = [
    { en: "I check my email every day.", pt: "Eu checo meu e-mail todos os dias.", missing: "check", options: ["check", "run", "do"], term: "Check", def: "Checar ou verificar mensagens." },
    { en: "We start the daily standup now.", pt: "Nós começamos a daily standup agora.", missing: "start", options: ["start", "push", "make"], term: "Start", def: "Iniciar uma ação ou reunião." },
    { en: "He writes clean code in JavaScript.", pt: "Ele escreve código limpo em JavaScript.", missing: "writes", options: ["writes", "commits", "runs"], term: "Write", def: "Escrever ou redigir código." },
    { en: "They use Slack for internal chat.", pt: "Eles usam o Slack para chat interno.", missing: "use", options: ["use", "pull", "play"], term: "Use", def: "Utilizar uma ferramenta ou software." },
    { en: "She works at a technology startup.", pt: "Ela trabalha em uma startup de tecnologia.", missing: "works", options: ["works", "designs", "tests"], term: "Work", def: "Trabalhar em um projeto ou empresa." },
    { en: "Please share your screen with me.", pt: "Por favor, compartilhe sua tela comigo.", missing: "share", options: ["share", "mute", "save"], term: "Share screen", def: "Compartilhar a tela do computador." },
    { en: "I need a new USB cable.", pt: "Eu preciso de um novo cabo USB.", missing: "cable", options: ["cable", "outlet", "plug"], term: "Cable", def: "Cabo físico de conexão." },
    { en: "The server is down today.", pt: "O servidor está fora do ar hoje.", missing: "down", options: ["down", "up", "slow"], term: "Down", def: "Servidor inativo ou fora de operação." },
    { en: "Let us configure the database.", pt: "Vamos configurar o banco de dados.", missing: "configure", options: ["configure", "commit", "clone"], term: "Configure", def: "Ajustar definições de sistema." },
    { en: "I am Brazilian and I speak Portuguese.", pt: "Eu sou brasileiro e falo português.", missing: "Brazilian", options: ["Brazilian", "Brazil", "Brazilese"], term: "Brazilian", def: "Nacionalidade de quem nasce no Brasil." }
];

// Populate A1 Seeds (120 lessons)
for (let m = 0; m < 20; m++) {
    for (let l = 0; l < 6; l++) {
        const seedIdx = (m * 6 + l) % verbsA1.length;
        const verb = verbsA1[seedIdx];
        const subject = subjectsA1[m % subjectsA1.length];
        
        LEVEL_SEEDS["A1"].push({
            title: `${subject} Lesson ${l + 1}`,
            en: verb.en,
            pt: verb.pt,
            missing: verb.missing,
            options: verb.options,
            terms: [
                { term: verb.term, definition: verb.def },
                { term: "Daily meeting", definition: "Reunião curta diária de alinhamento corporativo." }
            ],
            quiz: {
                question: `O que significa a ação '${verb.term}' no ambiente profissional?`,
                options: [verb.def, "Apagar arquivos sem querer", "Atrasar o deploy da sexta-feira", "Ir para o break time"],
                correctIndex: 0,
                explanation: `A definição correta de '${verb.term}' é: ${verb.def}`
            }
        });
    }
}

// Populate A2 Seeds (120 lessons)
const verbsA2 = [
    { en: "I travelled to New York on business.", pt: "Eu viajei para Nova York a negócios.", missing: "business", options: ["business", "tourism", "vacation"], term: "On business", def: "Viajar com fins comerciais." },
    { en: "They migrated the system yesterday.", pt: "Eles migraram o sistema ontem.", missing: "migrated", options: ["migrated", "migrate", "migrating"], term: "Migrated", def: "Passado de migrar (sistemas/arquivos)." },
    { en: "This software is faster than the old one.", pt: "Este software é mais rápido do que o antigo.", missing: "faster", options: ["faster", "fastest", "more fast"], term: "Faster than", def: "Estrutura comparativa de superioridade." },
    { en: "I worked until late last night.", pt: "Eu trabalhei até tarde ontem à noite.", missing: "worked", options: ["worked", "working", "work"], term: "Worked", def: "Passado regular de trabalhar." },
    { en: "Did you find the bug in production?", pt: "Você encontrou o bug em produção?", missing: "find", options: ["find", "found", "finding"], term: "Find", def: "Encontrar ou detectar erros." },
    { en: "We booked the hotel for the conference.", pt: "Nós reservamos o hotel para a conferência.", missing: "booked", options: ["booked", "booking", "book"], term: "Book", def: "Reservar acomodação ou passagens." },
    { en: "I would like to pay by credit card.", pt: "Eu gostaria de pagar com cartão de crédito.", missing: "card", options: ["card", "cash", "check"], term: "Pay by card", def: "Pagamento via meio eletrônico." },
    { en: "Where is the baggage claim area?", pt: "Onde fica a área de restituição de bagagem?", missing: "baggage", options: ["baggage", "plane", "gate"], term: "Baggage claim", def: "Local para pegar as malas no aeroporto." },
    { en: "The team resolved the API issue.", pt: "O time resolveu o problema da API.", missing: "resolved", options: ["resolved", "resolve", "resolving"], term: "Resolved", def: "Passado do verbo resolver." },
    { en: "She used to write code on Windows.", pt: "Ela costumava escrever código no Windows.", missing: "used", options: ["used", "use", "uses"], term: "Used to", def: "Indica hábitos passados que não ocorrem mais." }
];

for (let m = 0; m < 20; m++) {
    for (let l = 0; l < 6; l++) {
        const seedIdx = (m * 6 + l) % verbsA2.length;
        const verb = verbsA2[seedIdx];
        
        LEVEL_SEEDS["A2"].push({
            title: `Elementary Topic ${m + 1} - Part ${l + 1}`,
            en: verb.en,
            pt: verb.pt,
            missing: verb.missing,
            options: verb.options,
            terms: [
                { term: verb.term, definition: verb.def },
                { term: "Corporate travel", definition: "Viagens corporativas patrocinadas pela empresa." }
            ],
            quiz: {
                question: `Na frase '${verb.en}', qual a função de '${verb.term}'?`,
                options: [verb.def, "Expressar uma ordem", "Fazer uma pergunta informal", "Indicar o futuro próximo"],
                correctIndex: 0,
                explanation: `'${verb.term}' é usado para: ${verb.def}`
            }
        });
    }
}

// Populate B1 Seeds (120 lessons)
const verbsB1 = [
    { en: "I have lived in São Paulo for five years.", pt: "Eu moro em São Paulo há cinco anos.", missing: "lived", options: ["lived", "live", "living"], term: "Have lived", def: "Ação iniciada no passado que continua no presente." },
    { en: "We are going to deploy the MVP tomorrow.", pt: "Nós vamos fazer o deploy do MVP amanhã.", missing: "going", options: ["going", "will", "go"], term: "Going to", def: "Futuro planejado e agendado." },
    { en: "I see your point, but I disagree.", pt: "Eu entendo seu ponto, mas eu discordo.", missing: "disagree", options: ["disagree", "agree", "accept"], term: "Disagree", def: "Expressar divergência de ideias de forma educada." },
    { en: "You must backup the database weekly.", pt: "Você deve fazer backup do banco de dados semanalmente.", missing: "must", options: ["must", "should", "might"], term: "Must", def: "Modal que indica obrigação ou dever." },
    { en: "If we study daily, we will improve.", pt: "Se estudarmos diariamente, nós vamos melhorar.", missing: "will", options: ["will", "would", "had"], term: "First Conditional", def: "Hipótese real no presente e seu resultado futuro." },
    { en: "The code was written by our tech lead.", pt: "O código foi escrito pelo nosso tech lead.", missing: "written", options: ["written", "write", "wrote"], term: "Passive Voice", def: "Foco no objeto da ação (o código) e não no sujeito." },
    { en: "I look forward to hearing from you.", pt: "Fico no aguardo do seu retorno.", missing: "forward", options: ["forward", "back", "up"], term: "Look forward to", def: "Expressão formal para aguardar ansiosamente por contato." },
    { en: "Our product has experienced rapid growth.", pt: "Nosso produto passou por um crescimento rápido.", missing: "experienced", options: ["experienced", "experience", "experiencing"], term: "Has experienced", def: "Present Perfect indicando experiência geral." },
    { en: "You should postpone the planning meeting.", pt: "Você deveria adiar a reunião de planejamento.", missing: "postpone", options: ["postpone", "cancel", "start"], term: "Postpone", def: "Adiar ou remarcar um compromisso para depois." },
    { en: "They have already finished the sprint.", pt: "Eles já finalizaram a sprint.", missing: "already", options: ["already", "yet", "still"], term: "Already", def: "Indica que a ação já ocorreu antes do esperado." }
];

for (let m = 0; m < 20; m++) {
    for (let l = 0; l < 6; l++) {
        const seedIdx = (m * 6 + l) % verbsB1.length;
        const verb = verbsB1[seedIdx];
        
        LEVEL_SEEDS["B1"].push({
            title: `Intermediate Focus ${m + 1} - Lesson ${l + 1}`,
            en: verb.en,
            pt: verb.pt,
            missing: verb.missing,
            options: verb.options,
            terms: [
                { term: verb.term, definition: verb.def },
                { term: "Productivity", definition: "Rendimento ou eficiência do trabalho de desenvolvimento." }
            ],
            quiz: {
                question: `Qual a melhor definição para '${verb.term}' de acordo com a lição?`,
                options: [verb.def, "Excluir dados permanentemente", "Criticar colegas de equipe", "Comprar ações da bolsa"],
                correctIndex: 0,
                explanation: `'${verb.term}' significa: ${verb.def}`
            }
        });
    }
}

// Populate B2 Seeds (120 lessons)
const verbsB2 = [
    { en: "The project was deployed successfully.", pt: "O projeto foi publicado com sucesso.", missing: "deployed", options: ["deployed", "deploying", "deploy"], term: "Was deployed", def: "Voz passiva formal para relatórios técnicos." },
    { en: "Let us bring up the server logs.", pt: "Vamos trazer à tona/mencionar os logs do servidor.", missing: "bring", options: ["bring", "call", "take"], term: "Bring up", def: "Mencionar um assunto ou exibir logs." },
    { en: "If we had tested earlier, we would have succeeded.", pt: "Se tivéssemos testado antes, teríamos tido sucesso.", missing: "had", options: ["had", "have", "would"], term: "Third Conditional", def: "Arrependimento ou hipótese impossível no passado." },
    { en: "We must meet the deadline without fail.", pt: "Precisamos bater o prazo final sem falta.", missing: "meet", options: ["meet", "lose", "make"], term: "Meet the deadline", def: "Cumprir o prazo final acordado." },
    { en: "I will get back to you with metrics.", pt: "Eu retornarei o contato com você trazendo métricas.", missing: "get", options: ["get", "call", "give"], term: "Get back to you", def: "Retornar contato com informações solicitadas." },
    { en: "We need to set up the QA environment.", pt: "Precisamos configurar o ambiente de QA.", missing: "set", options: ["set", "make", "build"], term: "Set up", def: "Configurar ou preparar ambiente/equipamentos." },
    { en: "This release will reduce churn rate by ten percent.", pt: "Esta liberação reduzirá a taxa de cancelamento em dez por cento.", missing: "churn", options: ["churn", "CAC", "LTV"], term: "Churn rate", def: "Taxa de evasão ou cancelamento de clientes." },
    { en: "We experienced a critical outage yesterday.", pt: "Nós passamos por uma queda crítica no sistema ontem.", missing: "outage", options: ["outage", "upgrades", "maintenance"], term: "Outage", def: "Período de interrupção ou queda de serviços." },
    { en: "With all due respect, I disagree with that flow.", pt: "Com todo o respeito, eu discordo daquele fluxo.", missing: "respect", options: ["respect", "regards", "honesty"], term: "With all due respect", def: "Introduzir discordância diplomática com polidez." },
    { en: "We must roll out the security updates now.", pt: "Precisamos lançar/distribuir as atualizações de segurança agora.", missing: "roll", options: ["roll", "push", "bring"], term: "Roll out", def: "Lançar ou disponibilizar novas versões de software." }
];

for (let m = 0; m < 20; m++) {
    for (let l = 0; l < 6; l++) {
        const seedIdx = (m * 6 + l) % verbsB2.length;
        const verb = verbsB2[seedIdx];
        
        LEVEL_SEEDS["B2"].push({
            title: `Agile & Agility M${m + 1} - L${l + 1}`,
            en: verb.en,
            pt: verb.pt,
            missing: verb.missing,
            options: verb.options,
            terms: [
                { term: verb.term, definition: verb.def },
                { term: "Outage log", definition: "Registro detalhado das quedas do sistema." }
            ],
            quiz: {
                question: `Na comunicação executiva, o que significa '${verb.term}'?`,
                options: [verb.def, "Enviar spam para o cliente", "Deletar banco de dados reserva", "Cancelar o almoço da firma"],
                correctIndex: 0,
                explanation: `Definição técnica de '${verb.term}': ${verb.def}`
            }
        });
    }
}

// Populate C1/C2 Seeds (120 lessons)
const verbsC1 = [
    { en: "Our bottom line increased by thirty percent.", pt: "Nosso resultado financeiro final cresceu trinta por cento.", missing: "bottom", options: ["bottom", "top", "gross"], term: "Bottom line", def: "Lucro líquido ou resultado final consolidado." },
    { en: "Only after the audit did we realize the leak.", pt: "Apenas após a auditoria nós percebemos o vazamento.", missing: "did", options: ["did", "had", "would"], term: "Inversion", def: "Inversão gramatical para ênfase oratória avançada." },
    { en: "Her promotion was contingent upon the certification.", pt: "A promoção dela dependia da certificação.", missing: "contingent", options: ["contingent", "dependent", "aligned"], term: "Contingent upon", def: "Dependente de ou condicionado a algo." },
    { en: "Under no circumstances should you leak the API key.", pt: "Sob nenhuma circunstância você deve vazar a chave de API.", missing: "should", options: ["should", "could", "must"], term: "Under no circumstances", def: "Regra restritiva absoluta com inversão modal." } ,
    { en: "We analyzed the LTV and CAC ratio closely.", pt: "Nós analisamos a relação de LTV e CAC de perto.", missing: "ratio", options: ["ratio", "value", "rate"], term: "LTV/CAC ratio", def: "Relação de valor de cliente sobre custo de aquisição." },
    { en: "They negotiated the SLA, albeit with reluctance.", pt: "Eles negociaram o SLA, embora com relutância.", missing: "albeit", options: ["albeit", "although", "despite"], term: "Albeit", def: "Conjunção formal que significa 'embora' ou 'apesar de'." },
    { en: "The CEO requested a holistic helicopter view.", pt: "O CEO solicitou uma visão macro e holística da operação.", missing: "helicopter", options: ["helicopter", "macro", "drone"], term: "Helicopter view", def: "Visão estratégica macro de cima do negócio." },
    { en: "Do not try to boil the ocean on this project.", pt: "Não tente fazer coisas demais inutilmente neste projeto.", missing: "boil", options: ["boil", "fry", "clean"], term: "Boil the ocean", def: "Expressão idiomática: tentar abranger coisas demais." },
    { en: "We experienced equity dilution during series A.", pt: "Nós sofremos diluição de participação acionária no Series A.", missing: "dilution", options: ["dilution", "valuation", "inflation"], term: "Equity dilution", def: "Redução do percentual de ações de proprietários fundadores." },
    { en: "The system is designed to prevent single points of failure.", pt: "O sistema é desenhado para prevenir pontos únicos de falha.", missing: "failure", options: ["failure", "success", "crashes"], term: "Single point of failure", def: "Gargalo que derruba o sistema por completo se falhar." }
];

for (let m = 0; m < 20; m++) {
    for (let l = 0; l < 6; l++) {
        const seedIdx = (m * 6 + l) % verbsC1.length;
        const verb = verbsC1[seedIdx];
        
        LEVEL_SEEDS["C1/C2"].push({
            title: `Executive Masterclass M${m + 1} - L${l + 1}`,
            en: verb.en,
            pt: verb.pt,
            missing: verb.missing,
            options: verb.options,
            terms: [
                { term: verb.term, definition: verb.def },
                { term: "Executive summary", definition: "Resumo executivo de alto impacto direcionado a C-levels." }
            ],
            quiz: {
                question: `Qual o significado de '${verb.term}' no linguajar corporativo C-Level?`,
                options: [verb.def, "Uma piada interna de escritório", "Fazer horas extras não pagas", "Desligar o ar-condicionado"],
                correctIndex: 0,
                explanation: `No meio executivo sênior, '${verb.term}' refere-se a: ${verb.def}`
            }
        });
    }
}

// --- VERB CONJUGATION LESSON TEMPLATES ---
const A1_TEMPLATES = [
    {
        ruleTitle: "Present Simple vs Contínuo (work)",
        ruleDesc: "O Presente Simples descreve hábitos ('work/works'), enquanto o Presente Contínuo descreve ações que acontecem agora ('is/are working').",
        formula: ["Sujeito", "+", "work(s) / be working", "+", "Complemento"],
        en: "He works at a technology startup.",
        pt: "Ele trabalha em uma startup de tecnologia.",
        missing: "works",
        options: ["works", "work", "working"],
        explanation: "Para a 3ª pessoa do singular (He), usamos 'works' no Present Simple.",
        en2: "She is working on the database now.",
        pt2: "Ela está trabalhando no banco de dados agora.",
        missing2: "working",
        options2: ["working", "work", "works"],
        explanation2: "Para ações em andamento ('now'), usamos o Present Continuous: 'is working'.",
        terms: [
            { term: "works (habit)", definition: "Indica uma rotina profissional ou estado habitual." },
            { term: "is working (ongoing)", definition: "Indica uma atividade temporária que está ocorrendo agora." }
        ],
        quiz: {
            question: "Qual a forma correta do verbo 'work' para 'They' no Present Simple?",
            options: ["work", "works", "working", "worked"],
            correctIndex: 0,
            explanation: "Para I, You, We, They no presente simples, usamos a forma base sem alteração: They work."
        }
    },
    {
        ruleTitle: "Regra do -IES no Presente (study)",
        ruleDesc: "Verbos terminados em consoante + Y (como study) mudam para -ies na terceira pessoa do singular (He/She/It).",
        formula: ["Sujeito", "+", "study/studies", "+", "Complemento"],
        en: "She studies English every morning.",
        pt: "Ela estuda inglês todas as manhãs.",
        missing: "studies",
        options: ["studies", "study", "studying"],
        explanation: "Na terceira pessoa do singular, 'study' vira 'studies' (troca-se o Y por IES).",
        en2: "We study business cases daily.",
        pt2: "Nós estudamos casos de negócios diariamente.",
        missing2: "study",
        options2: ["study", "studies", "studying"],
        explanation2: "Para 'We', usamos a forma base 'study' sem modificações.",
        terms: [
            { term: "studies (He/She/It)", definition: "Flexão especial devido ao Y precedido de consoante (d)." },
            { term: "study (I/You/We/They)", definition: "Forma base do verbo para as demais pessoas." }
        ],
        quiz: {
            question: "Como se conjuga 'study' para 'He' no presente simples?",
            options: ["studies", "studys", "study", "studying"],
            correctIndex: 0,
            explanation: "Trocamos o Y por IES: studies."
        }
    },
    {
        ruleTitle: "Presente Simples de Ação (code)",
        ruleDesc: "Usamos o Presente Simples para expressar nossa rotina e linguagens de programação com as quais trabalhamos.",
        formula: ["Sujeito", "+", "code(s)", "+", "Complemento"],
        en: "He codes in JavaScript and Python.",
        pt: "Ele programa em JavaScript e Python.",
        missing: "codes",
        options: ["codes", "code", "coding"],
        explanation: "Para 'He', adiciona-se -s ao verbo: codes.",
        en2: "They code new features every week.",
        pt2: "Eles programam novas funcionalidades todas as semanas.",
        missing2: "code",
        options2: ["code", "codes", "coding"],
        explanation2: "Para 'They', o verbo permanece na forma base: code.",
        terms: [
            { term: "codes", definition: "Ação de programar executada por ele/ela." },
            { term: "features", definition: "Novas funcionalidades de um software." }
        ],
        quiz: {
            question: "Se o sujeito for 'I', qual a conjugação de 'code'?",
            options: ["code", "codes", "coding", "coded"],
            correctIndex: 0,
            explanation: "Para I, a conjugação é a forma base: I code."
        }
    },
    {
        ruleTitle: "Presente Contínuo de Produção (code)",
        ruleDesc: "O Presente Contínuo é formado pelo verbo to be (am/is/are) + verbo principal com a terminação -ing.",
        formula: ["Sujeito", "+", "am / is / are", "+", "verbo-ing", "+", "Complemento"],
        en: "She is coding the payment gateway.",
        pt: "Ela está programando o gateway de pagamento.",
        missing: "coding",
        options: ["coding", "codes", "code"],
        explanation: "Para 'coding', retiramos o 'e' final de 'code' antes de adicionar -ing.",
        en2: "We are coding the user interface.",
        pt2: "Nós estamos programando a interface do usuário.",
        missing2: "coding",
        options2: ["coding", "codes", "code"],
        explanation2: "Forma contínua do verbo programar.",
        terms: [
            { term: "coding", definition: "Forma no gerúndio (programando)." },
            { term: "payment gateway", definition: "Sistema que processa pagamentos online." }
        ],
        quiz: {
            question: "Como fica the verbo 'write' no Present Continuous?",
            options: ["writing", "writeing", "writting", "writes"],
            correctIndex: 0,
            explanation: "Verbos terminados em -e perdem a letra 'e' antes de adicionar -ing: write -> writing."
        }
    },
    {
        ruleTitle: "Presente Simples de Escrita (write)",
        ruleDesc: "Verbos no presente descrevem tarefas habituais de escrita de relatórios e mensagens.",
        formula: ["Sujeito", "+", "write(s)", "+", "Complemento"],
        en: "She writes clean code for the product.",
        pt: "Ela escreve código limpo para o produto.",
        missing: "writes",
        options: ["writes", "write", "writing"],
        explanation: "Na terceira pessoa do singular (She), adicionamos -s ao verbo: writes.",
        en2: "I write the weekly progress report.",
        pt2: "Eu escrevo o relatório de progresso semanal.",
        missing2: "write",
        options2: ["write", "writes", "writing"],
        explanation2: "Para 'I', mantemos o verbo na forma base: write.",
        terms: [
            { term: "writes", definition: "Escrever (conjugado para he/she/it)." },
            { term: "progress report", definition: "Relatório de progresso descrevendo marcos alcançados." }
        ],
        quiz: {
            question: "Complete a frase: 'John _____ documentation every day.'",
            options: ["writes", "write", "writing", "writed"],
            correctIndex: 0,
            explanation: "Como John é 'He', o verbo leva -s: writes."
        }
    },
    {
        ruleTitle: "Ações de Ferramentas (use)",
        ruleDesc: "Descreva ferramentas que você usa rotineiramente ou está usando no momento.",
        formula: ["Sujeito", "+", "use(s) / be using", "+", "Complemento"],
        en: "The team uses Git for version control.",
        pt: "O time usa o Git para controle de versão.",
        missing: "uses",
        options: ["uses", "use", "using"],
        explanation: "'The team' equivale ao singular 'It', por isso adicionamos -s: uses.",
        en2: "He is using the staging environment.",
        pt2: "Ele está usando o ambiente de testes.",
        missing2: "using",
        options2: ["using", "use", "uses"],
        explanation2: "Ação em andamento exige a forma continuous: 'is using'.",
        terms: [
            { term: "uses", definition: "Usar (conjugado na 3ª pessoa do singular)." },
            { term: "staging environment", definition: "Ambiente idêntico ao de produção para homologar testes." }
        ],
        quiz: {
            question: "Como fica a negação de 'They use Slack'?",
            options: ["They don't use Slack.", "They doesn't use Slack.", "They not use Slack.", "They aren't use Slack."],
            correctIndex: 0,
            explanation: "Para negar no Present Simple de verbos comuns com They, usamos o auxiliar 'don't'."
        }
    },
    {
        ruleTitle: "Comunicação Diária (speak)",
        ruleDesc: "Use speak para falar sobre idiomas falados no trabalho e conversas cotidianas.",
        formula: ["Sujeito", "+", "speak(s) / be speaking", "+", "Complemento"],
        en: "She speaks English in team meetings.",
        pt: "Ela fala inglês nas reuniões de equipe.",
        missing: "speaks",
        options: ["speaks", "speak", "speaking"],
        explanation: "She é singular de terceira pessoa, portanto o verbo ganha -s: speaks.",
        en2: "You are speaking very clearly today.",
        pt2: "Você está falando de forma muito clara hoje.",
        missing2: "speaking",
        options2: ["speaking", "speak", "speaks"],
        explanation2: "You exige o verbo to be 'are' no continuous: 'are speaking'.",
        terms: [
            { term: "speaks", definition: "Falar (rotina/habilidade para 3ª pessoa)." },
            { term: "clearly", definition: "De forma clara e compreensível." }
        ],
        quiz: {
            question: "Qual frase está no Present Continuous?",
            options: ["He is speaking to the manager.", "He speaks to the manager.", "He spoke to the manager.", "He will speak to the manager."],
            correctIndex: 0,
            explanation: "'He is speaking' é Present Continuous (to be + verbo-ing)."
        }
    },
    {
        ruleTitle: "Movimentos & Deslocamento (go)",
        ruleDesc: "A forma de terceira pessoa do singular de 'go' é 'goes', adicionando -es.",
        formula: ["Sujeito", "+", "go(es) / be going", "+", "Complemento"],
        en: "She goes to the office on Monday.",
        pt: "Ela vai ao escritório na segunda-feira.",
        missing: "goes",
        options: ["goes", "go", "going"],
        explanation: "Verbos terminados em -o (como go, do) ganham -es na 3ª pessoa: goes.",
        en2: "We are going to the conference room.",
        pt2: "Nós estamos indo para a sala de reuniões.",
        missing2: "going",
        options2: ["going", "go", "goes"],
        explanation2: "We exige 'are' seguido do gerúndio: 'are going'.",
        terms: [
            { term: "goes", definition: "Ir (conjugado para he/she/it)." },
            { term: "conference room", definition: "Sala de reuniões corporativas." }
        ],
        quiz: {
            question: "Qual o presente de 'go' para 'They'?",
            options: ["go", "goes", "goesed", "going"],
            correctIndex: 0,
            explanation: "Para They, usamos a forma base: They go."
        }
    },
    {
        ruleTitle: "Verificações e Checagens (check)",
        ruleDesc: "Descreva rotinas de verificação de sistemas ou testes que estão ocorrendo agora.",
        formula: ["Sujeito", "+", "check(s) / be checking", "+", "Complemento"],
        en: "She checks the server logs daily.",
        pt: "Ela checa os logs do servidor diariamente.",
        missing: "checks",
        options: ["checks", "check", "checking"],
        explanation: "She exige terminação -s no verbo: checks.",
        en2: "We are checking the database status.",
        pt2: "Nós estamos verificando o status do banco de dados.",
        missing2: "checking",
        options2: ["checking", "check", "checks"],
        explanation2: "We exige 'are' seguido de checking no Present Continuous.",
        terms: [
            { term: "checks", definition: "Verificar ou checar rotineiramente." },
            { term: "database status", definition: "Situação operacional do banco de dados." }
        ],
        quiz: {
            question: "Qual a negação correta de 'He checks the code'?",
            options: ["He doesn't check the code.", "He don't check the code.", "He not checks the code.", "He isn't check the code."],
            correctIndex: 0,
            explanation: "Para negar a 3ª pessoa (He) no Present Simple, usamos 'doesn't' e o verbo volta à forma base (check)."
        }
    },
    {
        ruleTitle: "Criando e Fazendo (make)",
        ruleDesc: "Conjugue 'make' para relatar progresso ou produções habituais ou em andamento.",
        formula: ["Sujeito", "+", "make(s) / be making", "+", "Complemento"],
        en: "He makes a presentation every month.",
        pt: "Ele faz uma apresentação todo mês.",
        missing: "makes",
        options: ["makes", "make", "making"],
        explanation: "He exige o sufixo -s: makes.",
        en2: "We are making progress on the project.",
        pt2: "Nós estamos progredindo no projeto.",
        missing2: "making",
        options2: ["making", "make", "makes"],
        explanation2: "Ação em andamento exige formatação continuous (making).",
        terms: [
            { term: "makes", definition: "Fazer ou produzir (conjugado para ele/ela)." },
            { term: "progress", definition: "Avanço ou evolução em tarefas." }
        ],
        quiz: {
            question: "Complete a frase: 'They _____ a decision today.'",
            options: ["are making", "is making", "makes", "makeing"],
            correctIndex: 0,
            explanation: "Com o sujeito plural 'They', usamos 'are making' para expressar o continuous."
        }
    }
];

const A2_TEMPLATES = [
    {
        ruleTitle: "Passado Regular com -ED (work)",
        ruleDesc: "Para a maioria dos verbos regulares no passado simples, basta adicionar -ed ao final do verbo. A flexão é a mesma para todas as pessoas.",
        formula: ["Sujeito", "+", "Verbo + ed", "+", "Complemento"],
        en: "Yesterday I worked until ten PM.",
        pt: "Ontem eu trabalhei até as dez da noite.",
        missing: "worked",
        options: ["worked", "work", "working"],
        explanation: "O verbo 'work' é regular, logo seu passado é 'worked'.",
        en2: "They worked on the setup last week.",
        pt2: "Eles trabalharam na configuração na semana passada.",
        missing2: "worked",
        options2: ["worked", "work", "working"],
        explanation2: "O passado simples regular se aplica a todos os pronomes de forma idêntica (I, they, we, etc.).",
        terms: [
            { term: "worked", definition: "Trabalhei / trabalharam (passado regular)." },
            { term: "yesterday", definition: "Ontem (marcador temporal do passado)." }
        ],
        quiz: {
            question: "Como fica o passado do verbo regular 'call'?",
            options: ["called", "calls", "calling", "calld"],
            correctIndex: 0,
            explanation: "Para verbos regulares como call, adicionamos -ed: called."
        }
    },
    {
        ruleTitle: "Passado Irregular (go)",
        ruleDesc: "Verbos irregulares mudam completamente de grafia no passado simples e precisam ser memorizados.",
        formula: ["Sujeito", "+", "Verbo Irregular", "+", "Complemento"],
        en: "She went to the conference last week.",
        pt: "Ela foi para a conferência na semana passada.",
        missing: "went",
        options: ["went", "go", "gone"],
        explanation: "O passado do verbo irregular 'go' é 'went'.",
        en2: "We went to the office yesterday.",
        pt2: "Nós fomos para o escritório ontem.",
        missing2: "went",
        options2: ["went", "go", "going"],
        explanation2: "Como 'go' é irregular, usamos 'went' para o passado.",
        terms: [
            { term: "went", definition: "Fui / foi / fomos (passado de go)." },
            { term: "conference", definition: "Conferência ou evento profissional." }
        ],
        quiz: {
            question: "Qual o passado do verbo 'go'?",
            options: ["went", "goed", "goes", "gone"],
            correctIndex: 0,
            explanation: "'Go' é um verbo irregular e seu passado simples é 'went'."
        }
    },
    {
        ruleTitle: "Regra do -IED no Passado (study)",
        ruleDesc: "Se o verbo regular termina em consoante + Y, trocamos o Y por IED no passado (study -> studied).",
        formula: ["Sujeito", "+", "Verbo terminado em -ied", "+", "Complemento"],
        en: "We studied the system architecture.",
        pt: "Nós estudamos a arquitetura do sistema.",
        missing: "studied",
        options: ["studied", "study", "studying"],
        explanation: "Como 'study' termina em consoante + y, mudamos para 'studied'.",
        en2: "She studied AWS databases last semester.",
        pt2: "Ela estudou bancos de dados AWS no semestre passado.",
        missing2: "studied",
        options2: ["studied", "study", "studies"],
        explanation2: "Consoante 'd' + 'y' se transforma em -ied no passado simples.",
        terms: [
            { term: "studied", definition: "Estudei / estudou (passado regular)." },
            { term: "system architecture", definition: "Estrutura técnica e organização de um sistema." }
        ],
        quiz: {
            question: "Qual o passado simples de 'play'?",
            options: ["played", "plaied", "plays", "playing"],
            correctIndex: 0,
            explanation: "Em 'play', o Y é precedido por vogal (a), logo adiciona-se apenas -ed: played."
        }
    },
    {
        ruleTitle: "Passado Irregular de Escrita (write)",
        ruleDesc: "O verbo 'write' é irregular. Seu passado simples é 'wrote'.",
        formula: ["Sujeito", "+", "wrote", "+", "Complemento"],
        en: "The developer wrote the documentation.",
        pt: "O desenvolvedor escreveu a documentação.",
        missing: "wrote",
        options: ["wrote", "write", "written"],
        explanation: "O passado simples de write é wrote.",
        en2: "I wrote an email to the team.",
        pt2: "Eu escrevi um e-mail para a equipe.",
        missing2: "wrote",
        options2: ["wrote", "write", "writing"],
        explanation2: "Escrevi (passado simples do verbo irregular write).",
        terms: [
            { term: "wrote", definition: "Escreveu / escrevi (passado de write)." },
            { term: "documentation", definition: "Conjunto de manuais e registros de um código." }
        ],
        quiz: {
            question: "Qual a tradução de 'Nós escrevemos a API ontem'?",
            options: ["We wrote the API yesterday.", "We writed the API yesterday.", "We write the API yesterday.", "We were wrote the API yesterday."],
            correctIndex: 0,
            explanation: "Usamos o passado irregular 'wrote': 'We wrote...'."
        }
    },
    {
        ruleTitle: "Passado Regular com -D (code)",
        ruleDesc: "Se o verbo regular já termina com a letra E, basta adicionar apenas a letra D no passado (code -> coded).",
        formula: ["Sujeito", "+", "Verbo + d", "+", "Complemento"],
        en: "He coded the payment module yesterday.",
        pt: "Ele programou o módulo de pagamento ontem.",
        missing: "coded",
        options: ["coded", "code", "coding"],
        explanation: "Como code termina em E, adiciona-se apenas D: coded.",
        en2: "We coded a mockup of the system.",
        pt2: "Nós programamos um esboço do sistema.",
        missing2: "coded",
        options2: ["coded", "code", "coding"],
        explanation2: "Passado regular do verbo programar.",
        terms: [
            { term: "coded", definition: "Programou / programamos (passado de code)." },
            { term: "mockup", definition: "Protótipo visual de uma tela de sistema." }
        ],
        quiz: {
            question: "Qual o passado simples de 'create'?",
            options: ["created", "createded", "create", "createment"],
            correctIndex: 0,
            explanation: "Como 'create' termina em E, adicionamos apenas D: created."
        }
    },
    {
        ruleTitle: "Passado Irregular de Fazer (make)",
        ruleDesc: "O verbo 'make' é irregular e vira 'made' no passado simples.",
        formula: ["Sujeito", "+", "made", "+", "Complemento"],
        en: "They made a big mistake in production.",
        pt: "Eles cometeram (fizeram) um grande erro em produção.",
        missing: "made",
        options: ["made", "make", "maked"],
        explanation: "O passado simples do verbo irregular make é made.",
        en2: "She made a slide deck for the meeting.",
        pt2: "Ela fez uma apresentação de slides para a reunião.",
        missing2: "made",
        options2: ["made", "make", "making"],
        explanation2: "Fez / cometeu (passado irregular de make).",
        terms: [
            { term: "made", definition: "Fiz / fez / fizeram (passado de make)." },
            { term: "mistake", definition: "Erro ou equívoco." }
        ],
        quiz: {
            question: "Qual o passado de 'make'?",
            options: ["made", "maked", "makken", "make"],
            correctIndex: 0,
            explanation: "'Make' é irregular, seu passado é 'made'."
        }
    },
    {
        ruleTitle: "Passado Regular Simples (check)",
        ruleDesc: "Para a maioria dos regulares terminados em consoante, adicionamos apenas -ed sem alterações extras.",
        formula: ["Sujeito", "+", "checked", "+", "Complemento"],
        en: "I checked the server logs this morning.",
        pt: "Eu chequei os logs do servidor esta manhã.",
        missing: "checked",
        options: ["checked", "check", "checking"],
        explanation: "O passado regular de 'check' é 'checked'.",
        en2: "She checked the code requirements.",
        pt2: "Ela verificou os requisitos do código.",
        missing2: "checked",
        options2: ["checked", "check", "checking"],
        explanation2: "Checou / verificou (passado regular).",
        terms: [
            { term: "checked", definition: "Chequei / checou (passado regular)." },
            { term: "requirements", definition: "Requisitos ou condições necessárias de um projeto." }
        ],
        quiz: {
            question: "Complete a lacuna: 'The manager _____ the database status.'",
            options: ["checked", "checks", "checking", "check"],
            correctIndex: 0,
            explanation: "Para expressar que a ação foi concluída no passado, usamos a forma regular checked."
        }
    },
    {
        ruleTitle: "Passado Irregular de Ver (see)",
        ruleDesc: "O passado simples de 'see' é 'saw'. Não confunda com 'seen' (que é particípio).",
        formula: ["Sujeito", "+", "saw", "+", "Complemento"],
        en: "We saw the new client dashboard.",
        pt: "Nós vimos o novo painel (dashboard) do cliente.",
        missing: "saw",
        options: ["saw", "see", "seen"],
        explanation: "O passado simples de see é saw.",
        en2: "He saw the error message yesterday.",
        pt2: "Ele viu a mensagem de erro ontem.",
        missing2: "saw",
        options2: ["saw", "see", "seeing"],
        explanation2: "Viu (passado simples do verbo irregular see).",
        terms: [
            { term: "saw", definition: "Vi / viu / vimos (passado de see)." },
            { term: "dashboard", definition: "Painel gráfico que reúne informações gerenciais." }
        ],
        quiz: {
            question: "Qual o passado simples de 'see'?",
            options: ["saw", "seed", "seen", "sawed"],
            correctIndex: 0,
            explanation: "O passado simples de see é saw. Seen é o particípio usado em tempos perfeitos."
        }
    },
    {
        ruleTitle: "Passado Regular Simples (use)",
        ruleDesc: "O verbo 'use' (usar) é regular e termina com E, logo seu passado é 'used'.",
        formula: ["Sujeito", "+", "used", "+", "Complemento"],
        en: "The designer used Figma for the mockups.",
        pt: "O designer usou o Figma para os esboços (mockups).",
        missing: "used",
        options: ["used", "use", "using"],
        explanation: "O passado de use é used.",
        en2: "We used a new database tool yesterday.",
        pt2: "Nós usamos uma nova ferramenta de banco de dados ontem.",
        missing2: "used",
        options2: ["used", "use", "uses"],
        explanation2: "Usamos (passado regular).",
        terms: [
            { term: "used", definition: "Usei / usou / usamos (passado regular)." },
            { term: "Figma", definition: "Ferramenta de design de interface colaborativa." }
        ],
        quiz: {
            question: "Qual a negação de 'We used Figma' no passado?",
            options: ["We didn't use Figma.", "We didn't used Figma.", "We don't use Figma.", "We not used Figma."],
            correctIndex: 0,
            explanation: "No passado, usamos o auxiliar 'didn't' seguido do verbo na sua forma base (use): 'We didn't use Figma'."
        }
    },
    {
        ruleTitle: "Passado Irregular de Encontrar (find)",
        ruleDesc: "O verbo 'find' é irregular e vira 'found' no passado simples.",
        formula: ["Sujeito", "+", "found", "+", "Complemento"],
        en: "I found a critical bug in the database.",
        pt: "Eu encontrei um bug crítico no banco de dados.",
        missing: "found",
        options: ["found", "find", "finded"],
        explanation: "O passado simples do verbo irregular find é found.",
        en2: "They found the solution to the problem.",
        pt2: "Eles encontraram a solução para o problema.",
        missing2: "found",
        options2: ["found", "find", "finding"],
        explanation2: "Encontraram (passado irregular).",
        terms: [
            { term: "found", definition: "Encontrei / encontrou (passado de find)." },
            { term: "critical bug", definition: "Bug crítico que impede o uso do sistema." }
        ],
        quiz: {
            question: "Qual o passado de 'find'?",
            options: ["found", "finded", "founds", "find"],
            correctIndex: 0,
            explanation: "'Find' é irregular, seu passado é 'found'."
        }
    }
];

const B1_TEMPLATES = [
    {
        ruleTitle: "Passado Contínuo (Past Continuous)",
        ruleDesc: "Usado para descrever ações em andamento no passado que foram interrompidas por outra ação rápida. Formado por was/were + verbo-ing.",
        formula: ["Sujeito", "+", "was / were", "+", "Verbo-ing", "+", "Complemento"],
        en: "I was deploying the update when it failed.",
        pt: "Eu estava implantando a atualização quando falhou.",
        missing: "deploying",
        options: ["deploying", "deployed", "deploy"],
        explanation: "Como a ação estava em andamento no passado ('was'), usamos a forma -ing: deploying.",
        en2: "We were testing the server when it crashed.",
        pt2: "Nós estávamos testando o servidor quando ele travou.",
        missing2: "testing",
        options2: ["testing", "tested", "tests"],
        explanation2: "Como o sujeito é 'We', usamos 'were testing' para o contínuo no passado.",
        terms: [
            { term: "was/were deploying", definition: "Estava / estávamos implantando (ação contínua passada)." },
            { term: "failed", definition: "Falhou (ação curta que interrompeu a anterior)." }
        ],
        quiz: {
            question: "Complete a lacuna: 'They _____ coding when the lights went out.'",
            options: ["were", "was", "are", "been"],
            correctIndex: 0,
            explanation: "Para 'They', o verbo to be no passado é 'were'."
        }
    },
    {
        ruleTitle: "Futuro com WILL (Decisões & Previsões)",
        ruleDesc: "O auxiliar 'will' é usado para decisões tomadas no momento da fala, promessas, ofertas ou previsões genéricas.",
        formula: ["Sujeito", "+", "will", "+", "Verbo Base", "+", "Complemento"],
        en: "We will solve this technical debt next week.",
        pt: "Nós resolveremos esta dívida técnica na próxima semana.",
        missing: "will",
        options: ["will", "going to", "would"],
        explanation: "Usamos 'will' seguido do verbo na forma base para indicar um compromisso futuro.",
        en2: "I will call the client in five minutes.",
        pt2: "Eu ligarei para o cliente em cinco minutos.",
        missing2: "call",
        options2: ["call", "called", "calling"],
        explanation2: "Após 'will', o verbo principal deve ficar na forma base sem alteração: call.",
        terms: [
            { term: "will solve", definition: "Iremos resolver / resolveremos." },
            { term: "technical debt", definition: "Dívida técnica devido a design ou código mal feito." }
        ],
        quiz: {
            question: "Qual a contração negativa de 'will not'?",
            options: ["won't", "willn't", "don't", "wouldn't"],
            correctIndex: 0,
            explanation: "A contração de 'will not' é 'won't'."
        }
    },
    {
        ruleTitle: "Futuro Planejado com GOING TO",
        ruleDesc: "Usamos 'be going to' para planos futuros e intenções decididas antes do momento de falar.",
        formula: ["Sujeito", "+", "am / is / are", "+", "going to", "+", "Verbo Base", "+", "Complemento"],
        en: "She is going to present the demo tomorrow.",
        pt: "Ela vai apresentar a demonstração amanhã.",
        missing: "going",
        options: ["going", "will", "go"],
        explanation: "A estrutura de intenção futura exige 'is going to' seguido da ação.",
        en2: "We are going to hire a new developer.",
        pt2: "Nós vamos contratar um novo desenvolvedor.",
        missing2: "hire",
        options2: ["hire", "hired", "hiring"],
        explanation2: "Após 'going to', o verbo permanece na forma base: hire.",
        terms: [
            { term: "is going to present", definition: "Vai apresentar (plano preestabelecido)." },
            { term: "demo", definition: "Demonstração de funcionalidades prontas." }
        ],
        quiz: {
            question: "Complete a frase: 'I _____ going to schedule the meeting.'",
            options: ["am", "is", "are", "be"],
            correctIndex: 0,
            explanation: "O sujeito 'I' exige a forma 'am' do verbo to be: 'I am going to'."
        }
    },
    {
        ruleTitle: "Past Continuous (debug)",
        ruleDesc: "Foca em uma ação contínua que consumiu tempo no passado.",
        formula: ["Sujeito", "+", "was / were", "+", "Verbo-ing", "+", "Complemento"],
        en: "He was debugging the code for hours yesterday.",
        pt: "Ele estava depurando o código por horas ontem.",
        missing: "debugging",
        options: ["debugging", "debugged", "debugs"],
        explanation: "Ação prolongada no passado exige past continuous: was debugging.",
        en2: "They were debugging the API integration.",
        pt2: "Eles estavam depurando a integração da API.",
        missing2: "debugging",
        options2: ["debugging", "debugged", "debug"],
        explanation2: "Conjugação no past continuous para o pronome plural they.",
        terms: [
            { term: "was debugging", definition: "Estava depurando (verificando erros)." },
            { term: "for hours", definition: "Duração prolongada da tarefa." }
        ],
        quiz: {
            question: "Quando usamos 'was' e 'were' no Past Continuous?",
            options: ["Was com I/He/She/It e Were com You/We/They.", "Was com plurais e Were com singulares.", "São sinônimos idênticos.", "Was é presente e Were é passado."],
            correctIndex: 0,
            explanation: "Was é a flexão singular (I/He/She/It) e Were é a flexão plural/segunda pessoa (You/We/They)."
        }
    },
    {
        ruleTitle: "Will para Previsões Rápidas (assist)",
        ruleDesc: "WILL é usado para promessas rápidas e previsões de suporte imediato.",
        formula: ["Sujeito", "+", "will", "+", "Verbo Base", "+", "Complemento"],
        en: "The support team will assist you shortly.",
        pt: "O time de suporte irá lhe ajudar em breve.",
        missing: "assist",
        options: ["assist", "assists", "assisted"],
        explanation: "Após will, usamos a forma original do verbo: assist.",
        en2: "Our server will support the traffic limit.",
        pt2: "Nosso servidor suportará o limite de tráfego.",
        missing2: "support",
        options2: ["support", "supports", "supported"],
        explanation2: "Previsão de capacidade futura usando will.",
        terms: [
            { term: "will assist", definition: "Irá assistir / ajudar." },
            { term: "shortly", definition: "Em breve / dentro de pouco tempo." }
        ],
        quiz: {
            question: "Complete a frase negativa: 'We _____ deploy today.'",
            options: ["won't", "don't", "aren't", "wouldn't"],
            correctIndex: 0,
            explanation: "Para negar o futuro imediato, usamos 'won't' (will not)."
        }
    },
    {
        ruleTitle: "Going to para Projetos Lançados (launch)",
        ruleDesc: "Uso de going to para planos empresariais de lançamento.",
        formula: ["Sujeito", "+", "am/is/are", "+", "going to", "+", "Verbo Base", "+", "Complemento"],
        en: "They are going to launch the beta test.",
        pt: "Eles vão lançar o teste beta.",
        missing: "launch",
        options: ["launch", "launches", "launched"],
        explanation: "Após going to, o verbo fica na forma base: launch.",
        en2: "I am going to launch a new version next month.",
        pt2: "Eu vou lançar uma nova versão no próximo mês.",
        missing2: "launch",
        options2: ["launch", "launches", "launched"],
        explanation2: "Plano pessoal/profissional com am going to.",
        terms: [
            { term: "are going to launch", definition: "Vão lançar (plano de negócios)." },
            { term: "beta test", definition: "Lançamento inicial para testes de usuários reais." }
        ],
        quiz: {
            question: "Qual a negação de 'She is going to launch the app'?",
            options: ["She is not going to launch the app.", "She doesn't going to launch the app.", "She isn't launch the app.", "She not going to launch the app."],
            correctIndex: 0,
            explanation: "Negamos inserindo 'not' após o verbo to be: 'She is not going to...'."
        }
    },
    {
        ruleTitle: "Past Continuous Interrompido (test)",
        ruleDesc: "A ação em andamento (testing) é interrompida pela ação rápida (crashed).",
        formula: ["Sujeito", "+", "were/was + ing", "+", "when + passado simples"],
        en: "We were testing the server when it crashed.",
        pt: "Nós estávamos testando o servidor quando ele travou.",
        missing: "testing",
        options: ["testing", "tested", "tests"],
        explanation: "Estávamos testando (were testing) descreve a ação longa em progresso.",
        en2: "He was testing the payment code when the power cut off.",
        pt2: "Ele estava testando o código de pagamento quando a energia caiu.",
        missing2: "testing",
        options2: ["testing", "tested", "tests"],
        explanation2: "Ele estava testando (was testing).",
        terms: [
            { term: "were testing", definition: "Estávamos testando (past continuous)." },
            { term: "crashed", definition: "Falhou / travou de repente." }
        ],
        quiz: {
            question: "Na frase 'We were testing when it crashed', qual a ação que interrompeu?",
            options: ["crashed", "were testing", "ambas", "nenhuma"],
            correctIndex: 0,
            explanation: "A ação rápida no passado simples ('crashed') interrompe a ação longa ('were testing')."
        }
    },
    {
        ruleTitle: "Will para Prazos Futuros (deliver)",
        ruleDesc: "WILL expressa promessas ou decisões de cumprimento de prazos.",
        formula: ["Sujeito", "+", "will", "+", "Verbo Base", "+", "Complemento"],
        en: "I will deliver the task before Friday.",
        pt: "Eu entregarei a tarefa antes de sexta-feira.",
        missing: "deliver",
        options: ["deliver", "delivering", "delivered"],
        explanation: "Uso do verbo base após will.",
        en2: "The vendor will deliver the hardware tomorrow.",
        pt2: "O fornecedor entregará os equipamentos amanhã.",
        missing2: "deliver",
        options2: ["deliver", "delivering", "delivered"],
        explanation2: "Futuro simples de entrega de valor.",
        terms: [
            { term: "will deliver", definition: "Entregarei / entregará." },
            { term: "before", definition: "Antes de (prazo final)." }
        ],
        quiz: {
            question: "Como fica a frase 'I will deliver the codes' de forma negativa contraída?",
            options: ["I won't deliver the codes.", "I willn't deliver the codes.", "I don't deliver the codes.", "I wouldn't deliver the codes."],
            correctIndex: 0,
            explanation: "Usamos a contração won't (will + not)."
        }
    },
    {
        ruleTitle: "Going to para Agenda (schedule)",
        ruleDesc: "GOING TO é usado para agendamentos organizados.",
        formula: ["Sujeito", "+", "be going to", "+", "Verbo Base", "+", "Complemento"],
        en: "I am going to schedule the alignment meeting.",
        pt: "Eu vou agendar a reunião de alinhamento.",
        missing: "schedule",
        options: ["schedule", "schedules", "scheduled"],
        explanation: "Forma base do verbo agendar.",
        en2: "She is going to schedule the code interview.",
        pt2: "Ela vai agendar a entrevista de código.",
        missing2: "schedule",
        options2: ["schedule", "schedules", "scheduled"],
        explanation2: "Going to de agendamento profissional.",
        terms: [
            { term: "going to schedule", definition: "Indica planejamento de agendamento." },
            { term: "alignment meeting", definition: "Reunião para alinhar metas de equipe." }
        ],
        quiz: {
            question: "Como se conjuga 'be going to' para 'We'?",
            options: ["We are going to", "We is going to", "We am going to", "We going to"],
            correctIndex: 0,
            explanation: "Para We, usamos are: 'We are going to'."
        }
    },
    {
        ruleTitle: "Past Continuous (write)",
        ruleDesc: "Ação de redação ou escrita em andamento no passado.",
        formula: ["Sujeito", "+", "was/were", "+", "writing", "+", "Complemento"],
        en: "She was writing the code when you arrived.",
        pt: "Ela estava escrevendo o código quando você chegou.",
        missing: "was",
        options: ["was", "were", "is"],
        explanation: "She exige o verbo auxiliar was no passado contínuo.",
        en2: "They were writing the project specs yesterday afternoon.",
        pt2: "Eles estavam escrevendo as especificações do projeto ontem à tarde.",
        missing2: "were",
        options2: ["were", "was", "are"],
        explanation2: "They exige were no passado contínuo.",
        terms: [
            { term: "was/were writing", definition: "Estava / estavam escrevendo (processo longo)." },
            { term: "specs", definition: "Especificações detalhadas de um projeto técnico." }
        ],
        quiz: {
            question: "Qual frase está no passado contínuo de forma incorreta?",
            options: ["We was writing code.", "We were writing code.", "He was writing code.", "They were writing code."],
            correctIndex: 0,
            explanation: "'We was writing' está incorreto. O correto para We é 'were': 'We were writing'."
        }
    }
];

const B2_TEMPLATES = [
    {
        ruleTitle: "Presente Perfeito (Present Perfect)",
        ruleDesc: "Usado para ações completas no passado com foco no resultado atual ou quando o tempo exato não importa. Formado por have/has + particípio passado.",
        formula: ["Sujeito", "+", "have / has", "+", "Particípio Passado", "+", "Complemento"],
        en: "I have finished the tasks for the sprint.",
        pt: "Eu terminei as tarefas da sprint.",
        missing: "have",
        options: ["have", "has", "had"],
        explanation: "O sujeito 'I' exige o verbo auxiliar 'have' no Present Perfect.",
        en2: "She has finished the API refactoring.",
        pt2: "Ela terminou a refatoração da API.",
        missing2: "has",
        options2: ["has", "have", "had"],
        explanation2: "A 3ª pessoa do singular (She) exige o verbo auxiliar 'has' no Present Perfect.",
        terms: [
            { term: "have/has finished", definition: "Terminei / terminou (ação concluída de impacto no presente)." },
            { term: "refactoring", definition: "Reestruturação do código para melhorar design, sem alterar comportamento externo." }
        ],
        quiz: {
            question: "Como fica o verbo 'go' no particípio passado?",
            options: ["gone", "went", "goed", "going"],
            correctIndex: 0,
            explanation: "O particípio passado de 'go' é 'gone' (go -> went -> gone)."
        }
    },
    {
        ruleTitle: "Passado Perfeito (Past Perfect)",
        ruleDesc: "O 'passado do passado'. Descreve uma ação que ocorreu ANTES de outra ação no passado. Formado por had + particípio passado.",
        formula: ["Sujeito", "+", "had", "+", "Particípio Passado", "+", "Complemento"],
        en: "We had completed the code review before the merge.",
        pt: "Nós tínhamos completado a revisão de código antes da mesclagem.",
        missing: "had",
        options: ["had", "have", "has"],
        explanation: "O Past Perfect sempre usa o auxiliar 'had' para todos os pronomes.",
        en2: "They had completed the database migrations before the downtime.",
        pt2: "Eles tinham completado as migrações do banco de dados antes do tempo de inatividade.",
        missing2: "had",
        options2: ["had", "have", "has"],
        explanation2: "Auxiliar 'had' expressa a ação anterior à outra ação no passado.",
        terms: [
            { term: "had completed", definition: "Tínhamos / tinham completado (ação mais antiga)." },
            { term: "merge", definition: "Mesclagem de código de ramificações secundárias para a principal." }
        ],
        quiz: {
            question: "Na frase 'I had eaten when he arrived', qual ação ocorreu primeiro?",
            options: ["I had eaten", "he arrived", "Ocorreram juntas", "Nenhuma das anteriores"],
            correctIndex: 0,
            explanation: "A ação no Past Perfect ('had eaten') ocorre antes da ação no Past Simple ('arrived')."
        }
    },
    {
        ruleTitle: "Futuro Perfeito (Future Perfect)",
        ruleDesc: "Descreve uma ação que estará completamente concluída antes de um determinado limite de tempo no futuro. Formado por will have + particípio.",
        formula: ["Sujeito", "+", "will have", "+", "Particípio Passado", "+", "Complemento"],
        en: "By Friday, they will have integrated the API.",
        pt: "Até sexta-feira, eles terão integrado a API.",
        missing: "have",
        options: ["have", "has", "had"],
        explanation: "A estrutura de Future Perfect exige a forma fixa 'will have' para todos os sujeitos.",
        en2: "I will have integrated the payments system by next week.",
        pt2: "Eu terei integrado o sistema de pagamentos até a próxima semana.",
        missing2: "integrated",
        options2: ["integrated", "integrate", "integrating"],
        explanation2: "Particípio passado do verbo regular integrate.",
        terms: [
            { term: "will have integrated", definition: "Terão / terei integrado (conclusão futura prevista)." },
            { term: "by Friday", definition: "Expressão de limite temporal futuro ('até sexta-feira')." }
        ],
        quiz: {
            question: "Complete: 'By 2027, we _____ built a new platform.'",
            options: ["will have", "will has", "have", "will be"],
            correctIndex: 0,
            explanation: "A estrutura padrão de limite de tempo futuro exige Future Perfect: 'will have'."
        }
    },
    {
        ruleTitle: "Present Perfect de Experiência (experience)",
        ruleDesc: "Usamos o Present Perfect para relatar eventos de vida ou da empresa ocorridos até agora.",
        formula: ["Sujeito", "+", "has/have", "+", "experienced", "+", "Complemento"],
        en: "Our company has experienced rapid growth.",
        pt: "Nossa empresa passou por um crescimento rápido.",
        missing: "has",
        options: ["has", "have", "had"],
        explanation: "Nossa empresa (our company) equivale a 'It', por isso leva o auxiliar 'has'.",
        en2: "We have experienced some issues with the server.",
        pt2: "Nós passamos por alguns problemas com o servidor.",
        missing2: "have",
        options2: ["have", "has", "had"],
        explanation2: "We exige o auxiliar 'have'.",
        terms: [
            { term: "has/have experienced", definition: "Passou / passamos por experiências." },
            { term: "rapid growth", definition: "Crescimento ou evolução veloz." }
        ],
        quiz: {
            question: "Complete a frase: 'I _____ experienced this database bug before.'",
            options: ["have", "has", "had", "was"],
            correctIndex: 0,
            explanation: "Sujeito 'I' exige auxiliar 'have'."
        }
    },
    {
        ruleTitle: "Past Perfect Irregular (leave)",
        ruleDesc: "O verbo 'leave' (partir/sair) tem o particípio irregular 'left'.",
        formula: ["Sujeito", "+", "had", "+", "left", "+", "Complemento"],
        en: "They had already left when the meeting started.",
        pt: "Eles já tinham saído quando a reunião começou.",
        missing: "left",
        options: ["left", "leave", "leaved"],
        explanation: "O particípio passado de leave é left.",
        en2: "The manager had left before the system failed.",
        pt2: "O gerente tinha saído antes do sistema falhar.",
        missing2: "left",
        options2: ["left", "leave", "leaves"],
        explanation2: "Ação concluída antes do erro do sistema.",
        terms: [
            { term: "had left", definition: "Tínhamos / tinha saído." },
            { term: "already", definition: "Já (enfatiza a conclusão prévia)." }
        ],
        quiz: {
            question: "Qual o particípio passado de 'leave'?",
            options: ["left", "leaved", "leave", "leften"],
            correctIndex: 0,
            explanation: "'Leave' vira 'left' no passado e no particípio."
        }
    },
    {
        ruleTitle: "Future Perfect Limite (finish)",
        ruleDesc: "Expressão de conclusão futura usando o verbo finish.",
        formula: ["Sujeito", "+", "will have", "+", "finished", "+", "Complemento"],
        en: "I will have finished the dashboard by tomorrow.",
        pt: "Eu terei terminado o painel até amanhã.",
        missing: "finished",
        options: ["finished", "finish", "finishing"],
        explanation: "Exige particípio passado do verbo regular finish.",
        en2: "She will have finished the mockup by tonight.",
        pt2: "Ela terá terminado o esboço até hoje à noite.",
        missing2: "finished",
        options2: ["finished", "finish", "finishing"],
        explanation2: "Particípio de finalização futura.",
        terms: [
            { term: "will have finished", definition: "Terei / terá terminado." },
            { term: "dashboard", definition: "Painel administrativo visual." }
        ],
        quiz: {
            question: "Complete: 'By next week, she _____ sent the reports.'",
            options: ["will have", "will has", "will", "has"],
            correctIndex: 0,
            explanation: "O auxiliar é 'will have' independente da pessoa (she, he, it, etc.)."
        }
    },
    {
        ruleTitle: "Present Perfect de Ser/Estar (be)",
        ruleDesc: "O particípio do verbo 'to be' é 'been'.",
        formula: ["Sujeito", "+", "have/has", "+", "been", "+", "Complemento"],
        en: "We have been very busy this week.",
        pt: "Nós estivemos muito ocupados esta semana.",
        missing: "been",
        options: ["been", "was", "were"],
        explanation: "O particípio passado de to be é been.",
        en2: "He has been the tech lead since January.",
        pt2: "Ele tem sido o líder técnico desde janeiro.",
        missing2: "been",
        options2: ["been", "was", "being"],
        explanation2: "O particípio de be conjugado com has.",
        terms: [
            { term: "have/has been", definition: "Estivemos / tem sido." },
            { term: "busy", definition: "Ocupado com tarefas." }
        ],
        quiz: {
            question: "Complete: 'I have _____ studying all day.'",
            options: ["been", "be", "being", "was"],
            correctIndex: 0,
            explanation: "A estrutura de Present Perfect Continuous exige been: 'I have been studying'."
        }
    },
    {
        ruleTitle: "Past Perfect de Prevenção (backup)",
        ruleDesc: "Relate prevenções tomadas no passado antes de problemas acontecerem.",
        formula: ["Sujeito", "+", "had", "+", "backed up", "+", "Complemento"],
        en: "He had backed up the files before the attack.",
        pt: "Ele tinha feito backup dos arquivos antes do ataque.",
        missing: "backed",
        options: ["backed", "backup", "backing"],
        explanation: "Backup vira backed up no particípio regular.",
        en2: "We had backed up the database before the deployment.",
        pt2: "Nós tínhamos feito backup do banco de dados antes do deploy.",
        missing2: "backed",
        options2: ["backed", "backup", "backing"],
        explanation2: "Prevenção regular anterior ao deploy.",
        terms: [
            { term: "had backed up", definition: "Tínhamos feito cópia de segurança." },
            { term: "before", definition: "Antes de (marcação temporal)." }
        ],
        quiz: {
            question: "Como se escreve o particípio de 'backup'?",
            options: ["backed up", "backuped", "backupped", "backing up"],
            correctIndex: 0,
            explanation: "O verbo da expressão é back, logo seu passado/particípio é backed up."
        }
    },
    {
        ruleTitle: "Future Perfect de Entrega (deliver)",
        ruleDesc: "Entrega programada completa antes do prazo futuro.",
        formula: ["Sujeito", "+", "will have", "+", "delivered", "+", "Complemento"],
        en: "We will have delivered the project by next month.",
        pt: "Nós teremos entregue o projeto até o próximo mês.",
        missing: "delivered",
        options: ["delivered", "deliver", "delivering"],
        explanation: "Particípio de entrega futura.",
        en2: "They will have delivered the assets by Friday.",
        pt2: "Eles terão entregado os ativos até sexta-feira.",
        missing2: "delivered",
        options2: ["delivered", "deliver", "delivering"],
        explanation2: "Entrega completa de ativos até sexta.",
        terms: [
            { term: "will have delivered", definition: "Teremos / terão entregado." },
            { term: "assets", definition: "Arquivos, designs ou recursos úteis." }
        ],
        quiz: {
            question: "Qual o auxiliar fixo de Future Perfect?",
            options: ["will have", "will has", "would have", "have"],
            correctIndex: 0,
            explanation: "O auxiliar é fixo para todas as pessoas: 'will have'."
        }
    },
    {
        ruleTitle: "Present Perfect de Duração (work)",
        ruleDesc: "Use Present Perfect com FOR para expressar a duração de uma ação que continua ativa.",
        formula: ["Sujeito", "+", "has/have", "+", "worked", "+", "for + duração"],
        en: "She has worked here for three years.",
        pt: "Ela trabalha aqui há três anos.",
        missing: "worked",
        options: ["worked", "works", "working"],
        explanation: "Trabalha / tem trabalhado (trata-se de ação que começou e continua ativa).",
        en2: "We have worked together for five years.",
        pt2: "Nós trabalhamos juntos há cinco anos.",
        missing2: "worked",
        options2: ["worked", "work", "working"],
        explanation2: "Trabalhamos juntos no Present Perfect.",
        terms: [
            { term: "has/have worked", definition: "Trabalha / temos trabalhado." },
            { term: "for three years", definition: "Expressão de duração temporal." }
        ],
        quiz: {
            question: "Qual a diferença entre 'for' e 'since' no Present Perfect?",
            options: ["'For' indica duração de tempo e 'Since' indica ponto de partida no tempo.", "'For' é futuro e 'Since' é passado.", "'For' é com singular e 'Since' com plural.", "São idênticos."],
            correctIndex: 0,
            explanation: "For indica a duração (ex: for 2 years) e Since o início do evento (ex: since 2021)."
        }
    }
];

const C1C2_TEMPLATES = [
    {
        ruleTitle: "Terceiro Condicional (Third Conditional)",
        ruleDesc: "Usado para expressar arrependimentos e hipóteses sobre o passado. A estrutura é: If + sujeito + had + particípio, sujeito + would have + particípio.",
        formula: ["If", "+", "had + particípio", ",", "would have + particípio"],
        en: "If we had known, we would have avoided the bug.",
        pt: "Se nós tivéssemos sabido, teríamos evitado o bug.",
        missing: "known",
        options: ["known", "knew", "know"],
        explanation: "A cláusula do 'if' no Third Conditional exige o Past Perfect: 'had known'.",
        en2: "If you had asked, I would have helped you.",
        pt2: "Se você tivesse perguntado, eu teria lhe ajudado.",
        missing2: "asked",
        options2: ["asked", "ask", "asking"],
        explanation2: "Uso do particípio regular asked na cláusula condicional do passado.",
        terms: [
            { term: "If we had known", definition: "Se nós tivéssemos sabido (fato hipotético do passado)." },
            { term: "would have avoided", definition: "Teríamos evitado (consequência hipotética passada)." }
        ],
        quiz: {
            question: "Qual a estrutura de consequência do Third Conditional?",
            options: ["would have + particípio passado", "would + verbo base", "will have + particípio", "had + particípio"],
            correctIndex: 0,
            explanation: "A consequência hipotética passada é construída com 'would have' + particípio: e.g., 'would have avoided'."
        }
    },
    {
        ruleTitle: "Future Perfect Continuous (work)",
        ruleDesc: "Expressa a duração acumulada de uma ação contínua até um determinado marco de tempo no futuro. Formado por will have been + verbo-ing.",
        formula: ["Sujeito", "+", "will have been", "+", "Verbo-ing", "+", "Complemento"],
        en: "By December, I will have been working here for five years.",
        pt: "Em dezembro, eu estarei trabalhando aqui há cinco anos.",
        missing: "been",
        options: ["been", "being", "be"],
        explanation: "A estrutura exige 'will have been' seguido do verbo com terminação -ing: been working.",
        en2: "By tomorrow, they will have been testing for twelve hours straight.",
        pt2: "Até amanhã, eles estarão testando por doze horas seguidas.",
        missing2: "testing",
        options2: ["testing", "tested", "test"],
        explanation2: "Ação contínua perfeita futura em andamento.",
        terms: [
            { term: "will have been working", definition: "Estarei trabalhando (com ênfase na duração de tempo acumulada)." },
            { term: "straight", definition: "Seguidos / ininterruptos." }
        ],
        quiz: {
            question: "Complete a lacuna: 'By midnight, we will have _____ coding for ten hours.'",
            options: ["been", "be", "being", "done"],
            correctIndex: 0,
            explanation: "A estrutura completa é 'will have been coding'."
        }
    },
    {
        ruleTitle: "Inversão com Advérbio Restritivo (Seldom)",
        ruleDesc: "Em inglês avançado, advérbios restritivos negativos (como seldom, rarely) deslocados para o início da frase exigem inversão do sujeito com o auxiliar.",
        formula: ["Advérbio Negativo", "+", "Auxiliar", "+", "Sujeito", "+", "Verbo Base"],
        en: "Seldom do they deploy code without automated testing.",
        pt: "Raramente eles implantam código sem testes automatizados.",
        missing: "do",
        options: ["do", "does", "did"],
        explanation: "Com o sujeito plural 'they' no presente simples invertido, usamos o auxiliar 'do'.",
        en2: "Rarely have I seen such a well-structured project.",
        pt2: "Raramente eu vi um projeto tão bem estruturado.",
        missing2: "have",
        options2: ["have", "has", "had"],
        explanation2: "Inversão avançada com Present Perfect: 'Rarely have I seen...'.",
        terms: [
            { term: "Seldom do they deploy", definition: "Raramente eles fazem deploy (ênfase na raridade)." },
            { term: "automated testing", definition: "Testes automatizados programados." }
        ],
        quiz: {
            question: "Qual frase exibe inversão gramatical avançada?",
            options: ["Rarely have I seen such clean code.", "Rarely I have seen such clean code.", "I have rarely seen such clean code.", "Rarely I did see such clean code."],
            correctIndex: 0,
            explanation: "Após Rarely, o auxiliar 'have' deve ser invertido com o sujeito 'I': 'Rarely have I seen'."
        }
    },
    {
        ruleTitle: "Hipótese de Testes no Passado (Third Conditional)",
        ruleDesc: "Análise retrospectiva de erros em produção usando Third Conditional.",
        formula: ["If + had + particípio", ",", "would have + particípio"],
        en: "If they had tested it, they would have found the issue.",
        pt: "Se eles tivessem testado, teriam encontrado o problema.",
        missing: "tested",
        options: ["tested", "test", "testing"],
        explanation: "Cláusula condicional do passado exige past perfect: had tested.",
        en2: "They would have avoided the downtime if they had updated the database.",
        pt2: "Eles teriam evitado a inatividade se tivessem atualizado o banco de dados.",
        missing2: "updated",
        options2: ["updated", "update", "updating"],
        explanation2: "Cláusula if do passado com had updated.",
        terms: [
            { term: "If they had tested", definition: "Se eles tivessem feito testes (não fizeram)." },
            { term: "would have found", definition: "Teriam detectado o erro." }
        ],
        quiz: {
            question: "Qual frase indica um arrependimento passado?",
            options: ["If I had left earlier, I would have arrived on time.", "If I leave earlier, I will arrive on time.", "If I left earlier, I would arrive on time.", "If I had left earlier, I will arrive on time."],
            correctIndex: 0,
            explanation: "O arrependimento de algo que não aconteceu exige o Third Conditional (had left / would have arrived)."
        }
    },
    {
        ruleTitle: "Future Perfect Continuous (study)",
        ruleDesc: "Expressão de duração futura de estudos de certificação.",
        formula: ["will have been", "+", "studying"],
        en: "By next week, she will have been studying for the AWS exam.",
        pt: "Até a próxima semana, ela estará estudando para o exame da AWS (durante aquele tempo).",
        missing: "studying",
        options: ["studying", "studied", "study"],
        explanation: "Exige a forma contínua com -ing: studying.",
        en2: "By 2027, I will have been studying English for ten years.",
        pt2: "Em 2027, eu estarei estudando inglês há dez anos.",
        missing2: "studying",
        options2: ["studying", "studied", "study"],
        explanation2: "Estudando (duração contínua acumulada futura).",
        terms: [
            { term: "will have been studying", definition: "Estará estudando (acumulando duração futura)." },
            { term: "AWS exam", definition: "Exame de certificação de nuvem Amazon Web Services." }
        ],
        quiz: {
            question: "Quando usamos o Future Perfect Continuous?",
            options: ["Para expressar a duração acumulada de uma ação contínua até um marco futuro.", "Para ações rápidas de momento.", "Para ações em andamento exatamente agora.", "Para hábitos passados."],
            correctIndex: 0,
            explanation: "É o tempo ideal para enfatizar a duração de um processo em andamento que atingirá um marco no futuro."
        }
    },
    {
        ruleTitle: "Inversão Condicional sem IF (Had)",
        ruleDesc: "Em textos formais, podemos omitir a conjunção 'if' no passado condicional invertendo o auxiliar 'had' com o sujeito da frase.",
        formula: ["Had", "+", "Sujeito", "+", "Particípio Passado", ",", "Consequência"],
        en: "Had they informed us, we would have helped.",
        pt: "Se tivessem nos informado, teríamos ajudado.",
        missing: "Had",
        options: ["Had", "If", "Have"],
        explanation: "Substitui 'If they had informed us' por inversão literária, usando 'Had' no início.",
        en2: "Had you updated the system, the bug would have been resolved.",
        pt2: "Se você tivesse atualizado o sistema, o bug teria sido resolvido.",
        missing2: "Had",
        options2: ["Had", "If", "Have"],
        explanation2: "Equivale a 'If you had updated the system'.",
        terms: [
            { term: "Had they informed us", definition: "Tivessem eles nos informado (equivalente formal de 'if they had...')." },
            { term: "would have helped", definition: "Teríamos ajudado (terceiro condicional)." }
        ],
        quiz: {
            question: "A frase 'Had I known the truth' equivale a:",
            options: ["If I had known the truth", "If I knew the truth", "I had known the truth", "If I have known the truth"],
            correctIndex: 0,
            explanation: "O 'Had' no início de frases condicionais substitui e elimina a conjunção 'if' de forma elegante."
        }
    },
    {
        ruleTitle: "Terceiro Condicional com Auxiliar Repetido (had had)",
        ruleDesc: "No Past Perfect do verbo 'have', o auxiliar é 'had' e o particípio principal também é 'had', resultando na escrita 'had had'.",
        formula: ["If + had had", ",", "would have + particípio"],
        en: "He would have written the script if he had had time.",
        pt: "Ele teria escrito o script se tivesse tido tempo.",
        missing: "written",
        options: ["written", "wrote", "write"],
        explanation: "Exige particípio passado do verbo irregular write: written.",
        en2: "If they had had the budget, they would have hired the team.",
        pt2: "Se eles tivessem tido o orçamento, teriam contratado a equipe.",
        missing2: "had",
        options2: ["had", "have", "has"],
        explanation2: "O primeiro 'had' é o auxiliar, o segundo 'had' é o particípio de ter (ter tido).",
        terms: [
            { term: "had had", definition: "Tivesse tido (past perfect de have)." },
            { term: "budget", definition: "Orçamento financeiro de um projeto." }
        ],
        quiz: {
            question: "Por que a expressão 'had had' aparece na frase?",
            options: ["Porque o primeiro 'had' é o auxiliar e o segundo é o particípio do verbo principal have.", "É um erro de digitação comum.", "Ocorre devido ao tempo futuro.", "É um sinônimo de 'would have'."],
            correctIndex: 0,
            explanation: "No Past Perfect de 'have' (ter), usamos had (auxiliar) + had (particípio do verbo principal) = tido."
        }
    },
    {
        ruleTitle: "Duração de Desenvolvimento Futuro (code)",
        ruleDesc: "Uso de Future Perfect Continuous para desenvolvimento de software.",
        formula: ["will have been", "+", "coding"],
        en: "By midnight, we will have been coding for ten hours.",
        pt: "À meia-noite, nós estaremos programando há dez horas.",
        missing: "coding",
        options: ["coding", "coded", "code"],
        explanation: "Forma contínua no gerúndio coding.",
        en2: "She will have been coding this application for one month by Friday.",
        pt2: "Ela estará programando este aplicativo há um mês até sexta-feira.",
        missing2: "coding",
        options2: ["coding", "coded", "code"],
        explanation2: "Estará programando (duração acumulada futuro contínuo).",
        terms: [
            { term: "will have been coding", definition: "Estaremos programando (duração contínua futura)." },
            { term: "by midnight", definition: "Limite temporal da meia-noite." }
        ],
        quiz: {
            question: "Qual frase expressa o Future Perfect Continuous de forma correta?",
            options: ["I will have been developing code.", "I will have developing code.", "I have been developing code.", "I will have developed code."],
            correctIndex: 0,
            explanation: "'I will have been developing' é a estrutura padrão correta."
        }
    },
    {
        ruleTitle: "Inversão após Expressões Negativas Fortes",
        ruleDesc: "Expressões iniciais como 'Under no circumstances' (Em circunstância alguma) invertem a ordem do sujeito com o auxiliar.",
        formula: ["Expressão Negativa", "+", "Auxiliar", "+", "Sujeito", "+", "Verbo Base"],
        en: "Under no circumstances will we agree to these terms.",
        pt: "Em circunstância alguma nós concordaremos com estes termos.",
        missing: "will",
        options: ["will", "we", "agree"],
        explanation: "A locução restritiva inicial atrai o auxiliar will para antes do sujeito we.",
        en2: "Under no circumstances should you deploy code without testing.",
        pt2: "Em circunstância alguma você deve fazer deploy de código sem testes.",
        missing2: "should",
        options2: ["should", "you", "deploy"],
        explanation2: "Auxiliar modal should invertido com o sujeito you.",
        terms: [
            { term: "Under no circumstances", definition: "Em circunstância alguma (ênfase proibitiva)." },
            { term: "will we agree", definition: "Inversão de 'we will agree'." }
        ],
        quiz: {
            question: "Qual a inversão correta de 'We must not deploy code under any circumstances'?",
            options: ["Under no circumstances must we deploy code.", "Under no circumstances we must deploy code.", "Under no circumstances do we deploy code.", "Under no circumstances we deploy code."],
            correctIndex: 0,
            explanation: "A expressão negativa inicial atrai o auxiliar 'must' para a frente do sujeito 'we': 'must we deploy'."
        }
    },
    {
        ruleTitle: "Condição Irreal no Passado com Be (been)",
        ruleDesc: "Uso de be no particípio (been) no Third Conditional.",
        formula: ["If + had been", ",", "would have + particípio"],
        en: "If the server had been online, we would have seen it.",
        pt: "Se o servidor estivesse online, nós teríamos visto.",
        missing: "been",
        options: ["been", "being", "be"],
        explanation: "Participo de be (been) na cláusula if do passado.",
        en2: "We would have completed it if she had been present.",
        pt2: "Nós teríamos completado se ela estivesse presente.",
        missing2: "been",
        options2: ["been", "be", "being"],
        explanation2: "Tivesse estado / estivesse (past perfect de be).",
        terms: [
            { term: "had been online", definition: "Tivesse estado / estivesse online." },
            { term: "would have seen", definition: "Teríamos visto (consequência passada)." }
        ],
        quiz: {
            question: "Complete a lacuna: 'If you had _____ here, we would have celebrated.'",
            options: ["been", "be", "being", "were"],
            correctIndex: 0,
            explanation: "Para past perfect condicional, usamos 'been': 'If you had been'."
        }
    }
];

function getVerbConjugationSeed(lvl, m, l) {
    const templatesMap = {
        "A1": A1_TEMPLATES,
        "A2": A2_TEMPLATES,
        "B1": B1_TEMPLATES,
        "B2": B2_TEMPLATES,
        "C1/C2": C1C2_TEMPLATES
    };
    const templates = templatesMap[lvl] || A1_TEMPLATES;
    const idx = (m * 2 + (l === 5 ? 1 : 0)) % templates.length;
    return templates[idx];
}

// --- CURRICULUM GENERATOR ENGINE ---
// Maps the linear LEVEL_SEEDS databases into completed 20-module/6-lesson structures.

function buildSyllabus() {
    const finalData = {};
    const levels = ["A1", "A2", "B1", "B2", "C1/C2"];
    
    levels.forEach(lvl => {
        finalData[lvl] = [];
        const titles = LEVEL_MODULE_TITLES[lvl];
        const seeds = LEVEL_SEEDS[lvl];
        
        for (let m = 0; m < 20; m++) {
            const moduleLessons = [];
            const moduleTitle = titles[m] || `Módulo ${m + 1} de Estudos Avançados`;
            
            for (let l = 0; l < 6; l++) {
                const lessonId = `${lvl.toLowerCase().replace('/', '')}_m${m + 1}_l${l + 1}`;
                
                let slides = [];
                let lessonTitle = "";
                
                if (l === 2 || l === 5) {
                    // Verb Conjugation Hyperfocus Lessons
                    const verbSeed = getVerbConjugationSeed(lvl, m, l);
                    lessonTitle = "⚡ Hiperfoco Verbal: " + verbSeed.ruleTitle;
                    
                    slides = [
                        {
                            type: "intro",
                            title: "Hiperfoco em Verbos: Conceito 💡",
                            content: `<strong>${toBionic(verbSeed.ruleTitle)}</strong><br><br>${toBionic(verbSeed.ruleDesc)}<br><br><strong>Estrutura da Regra:</strong> ${verbSeed.formula.map(f => `<span style="padding:2px 6px; background:rgba(255,255,255,0.08); border-radius:4px; margin:0 2px; font-weight:bold; font-size:11px; border:1px solid rgba(255,255,255,0.15);">${toBionic(f)}</span>`).join(" ")}<br><br>Exemplo Principal: <em>"${toBionic(verbSeed.en)}"</em> (${toBionic(verbSeed.pt)})`,
                            audioText: verbSeed.en
                        },
                        {
                            type: "puzzle",
                            title: "Construção de Frase 🧩",
                            instruction: "Ordene os blocos para traduzir a frase:",
                            portuguese: verbSeed.pt,
                            scrambledWords: [...verbSeed.en.split(' ')].sort(() => 0.5 - Math.random()),
                            correctOrder: verbSeed.en.split(' ')
                        },
                        {
                            type: "puzzle",
                            title: "Fixação da Regra 🧩",
                            instruction: "Ordene os blocos da frase secundária de prática:",
                            portuguese: verbSeed.pt2,
                            scrambledWords: [...verbSeed.en2.split(' ')].sort(() => 0.5 - Math.random()),
                            correctOrder: verbSeed.en2.split(' ')
                        },
                        {
                            type: "listening",
                            title: "Identificação Auditiva 🎧",
                            instruction: "Ouça o áudio e selecione a conjugação verbal correta para preencher a lacuna:",
                            audioText: verbSeed.en,
                            sentence: verbSeed.en.replace(verbSeed.missing, "_____"),
                            options: verbSeed.options,
                            correctIndex: verbSeed.options.indexOf(verbSeed.missing),
                            explanation: verbSeed.explanation
                        },
                        {
                            type: "listening",
                            title: "Escuta de Fixação 🎧",
                            instruction: "Ouça a frase secundária e selecione o verbo correto:",
                            audioText: verbSeed.en2,
                            sentence: verbSeed.en2.replace(verbSeed.missing2, "_____"),
                            options: verbSeed.options2,
                            correctIndex: verbSeed.options2.indexOf(verbSeed.missing2),
                            explanation: verbSeed.explanation2
                        },
                        {
                            type: "vocab",
                            title: "Formas & Regras Conjugadas 📚",
                            terms: verbSeed.terms
                        },
                        {
                            type: "checkpoint",
                            title: "Desafio de Hiperfoco ⚡",
                            quiz: verbSeed.quiz
                        }
                    ];
                } else {
                    // Standard vocabulary / business lesson
                    const seed = seeds[m * 6 + l];
                    if (!seed) continue;
                    
                    lessonTitle = seed.title;
                    const term1 = seed.terms[0]?.term || "Focus";
                    const termOptions = [term1, "Delete", "Design", "Cancel"].sort(() => 0.5 - Math.random());
                    
                    slides = [
                        {
                            type: "intro",
                            title: "Conceito & Shadowing 🗣️",
                            content: toBionic(`Nesta lição, focamos na seguinte estrutura essencial: ${seed.en} (${seed.pt})`),
                            audioText: seed.en
                        },
                        {
                            type: "puzzle",
                            title: "Construção de Frase 🧩",
                            instruction: "Reordene as palavras para traduzir a frase abaixo:",
                            portuguese: seed.pt,
                            scrambledWords: [...seed.en.split(' ')].sort(() => 0.5 - Math.random()),
                            correctOrder: seed.en.split(' ')
                        },
                        {
                            type: "puzzle",
                            title: "Fixação Gramatical 🧩",
                            instruction: "Reordene as palavras usando o novo vocabulário profissional:",
                            portuguese: `Nós precisamos verificar o(a) "${term1}" hoje.`,
                            scrambledWords: ["We", "need", "to", "verify", "the", term1, "today"].sort(() => 0.5 - Math.random()),
                            correctOrder: ["We", "need", "to", "verify", "the", term1, "today"]
                        },
                        {
                            type: "listening",
                            title: "Desafio de Escuta 🎧",
                            instruction: "Ouça o áudio e selecione a palavra correta para preencher a lacuna:",
                            audioText: seed.en,
                            sentence: seed.en.replace(seed.missing, "_____"),
                            options: seed.options,
                            correctIndex: seed.options.indexOf(seed.missing),
                            explanation: `A lacuna é preenchida por '${seed.missing}'.`
                        },
                        {
                            type: "listening",
                            title: "Escuta Avançada 🎧",
                            instruction: "Ouça o áudio e selecione o termo técnico correto correspondente:",
                            audioText: `We need to check the ${term1} of the project.`,
                            sentence: `We need to check the _____ of the project.`,
                            options: termOptions,
                            correctIndex: termOptions.indexOf(term1),
                            explanation: `O termo técnico correto é '${term1}'.`
                        },
                        {
                            type: "vocab",
                            title: "Vocabulário do Dia 📚",
                            terms: seed.terms
                        },
                        {
                            type: "checkpoint",
                            title: "Checkpoint de Foco ⚡",
                            quiz: seed.quiz
                        }
                    ];
                }
                
                moduleLessons.push({
                    id: lessonId,
                    title: lessonTitle,
                    slides: slides,
                    quiz: slides[6].quiz || slides[6].quiz // Fallback direct quiz property
                });
            }
            
            finalData[lvl].push({
                title: moduleTitle,
                lessons: moduleLessons
            });
        }
    });
    
    return finalData;
}

// Generate the global curriculum structure dynamically
const CURRICULUM_DATA = buildSyllabus();

// 200 Questions Pool for Level A1 (Adaptive Exam)
// Categorized by component: vocabulary (50), grammar (50), listening (50), pronunciation (50).
const QUESTION_POOL_A1 = {
    "vocabulary": [
        { id: "a1_v1", question: "In Agile teams, the list of prioritized tasks is called the sprint _____.", options: ["backlog", "history", "restroom", "notebook"], correctIndex: 0, explanation: "A lista de tarefas priorizadas é a 'backlog'." },
        { id: "a1_v2", question: "A fone de ouvido com microfone usado em videoconferências é chamado de _____.", options: ["laptop", "headset", "mouse", "keyboard"], correctIndex: 1, explanation: "O fone com microfone é o 'headset'." },
        { id: "a1_v3", question: "O repositório ou pasta de arquivos onde o código fonte é armazenado é o _____.", options: ["Jira", "repo", "slack", "desk"], correctIndex: 1, explanation: "Repo (repositório) guarda os códigos." },
        { id: "a1_v4", question: "Como se chama a mesa ou escrivaninha de trabalho?", options: ["chair", "desk", "board", "folder"], correctIndex: 1, explanation: "Desk é a mesa de trabalho." },
        { id: "a1_v5", question: "O programador focado na interface visual e na interação com o usuário é o _____ developer.", options: ["backend", "frontend", "full stack", "product owner"], correctIndex: 1, explanation: "Frontend trabalha com a interface visual." },
        { id: "a1_v6", question: "Qual cargo em equipes Scrum cuida do backlog e prioridades do produto?", options: ["Scrum Master", "Developer", "Product Owner", "QA Analyst"], correctIndex: 2, explanation: "O Product Owner (PO) gerencia o backlog do produto." },
        { id: "a1_v7", question: "Se você precisa de uma tomada elétrica para carregar o computador, você procura por uma _____.", options: ["power outlet", "router", "USB port", "server"], correctIndex: 0, explanation: "Power outlet é tomada de energia." },
        { id: "a1_v8", question: "O dispositivo de rede sem fio que distribui internet pelo escritório é o _____.", options: ["monitor", "keyboard", "router", "hard drive"], correctIndex: 2, explanation: "O roteador (router) distribui a conexão de internet." },
        { id: "a1_v9", question: "Para entrar no sistema usando suas credenciais, você deve fazer _____.", options: ["sign in", "sign out", "download", "delete"], correctIndex: 0, explanation: "Sign in é o ato de logar ou entrar no sistema." },
        { id: "a1_v10", question: "O arquivo que contém as instruções e documentação inicial do projeto no GitHub é o _____.", options: ["index.html", "app.js", "README.md", "styles.css"], correctIndex: 2, explanation: "README.md traz as diretrizes do projeto." },
        { id: "a1_v11", question: "Como chamamos os pequenos arquivos que guardam dados de sessão no browser?", options: ["links", "caches", "cookies", "bookmarks"], correctIndex: 2, explanation: "Cookies guardam sessões e preferências." },
        { id: "a1_v12", question: "Para ver os gráficos de métricas e status do app, acessamos o _____.", options: ["code repository", "dashboard", "restroom", "hardware setup"], correctIndex: 1, explanation: "Dashboard reúne os painéis visuais de monitoramento." },
        { id: "a1_v13", question: "O comando para salvar um site nos seus atalhos favoritos do navegador é _____.", options: ["bookmark", "history", "download", "incognito"], correctIndex: 0, explanation: "Bookmark adiciona aos favoritos." },
        { id: "a1_v14", question: "O programador que cuida de servidores, banco de dados e integrações lógicas é o _____ developer.", options: ["frontend", "backend", "designer", "Scrum Master"], correctIndex: 1, explanation: "Backend gerencia servidores e banco." },
        { id: "a1_v15", question: "Quando a conexão de internet cai e o servidor fica inacessível, ele está _____.", options: ["online", "active", "down", "loaded"], correctIndex: 2, explanation: "Down significa fora do ar ou inoperante." },
        { id: "a1_v16", question: "Para redimensionar a capacidade do servidor sob tráfego massivo, precisamos _____ os servidores.", options: ["scale", "delete", "format", "ping"], correctIndex: 0, explanation: "Scale é escalar ou redimensionar." },
        { id: "a1_v17", question: "O ambiente de execução real acessível pelo usuário final na internet é chamado de _____.", options: ["dev environment", "staging", "production", "workspace"], correctIndex: 2, explanation: "Production (produção) é o ambiente live." },
        { id: "a1_v18", question: "Para testar se o servidor está ativo enviando pacotes de rede rápidos, fazemos um _____.", options: ["commit", "ping", "deploy", "merge"], correctIndex: 1, explanation: "Ping testa conexões e tempos de resposta." },
        { id: "a1_v19", question: "Como chamamos um erro de código que faz o sistema falhar?", options: ["bug", "feature", "update", "backup"], correctIndex: 0, explanation: "Bug é o termo para erros de software." },
        { id: "a1_v20", question: "O formulário ou página onde o usuário insere dados para criar uma conta chama-se _____.", options: ["login form", "signup form", "payment page", "announcements"], correctIndex: 1, explanation: "Signup form serve para cadastro." },
        { id: "a1_v21", question: "Como se chama a barra onde digitamos a URL no navegador?", options: ["status bar", "address bar", "footer", "sidebar"], correctIndex: 1, explanation: "Digitamos URLs na 'address bar'." },
        { id: "a1_v22", question: "O site de busca e documentação oficial mais usado para tirar dúvidas de sintaxe é o _____.", options: ["Google", "Facebook", "Slack", "Netflix"], correctIndex: 0, explanation: "Google é a ferramenta de busca de referência global." },
        { id: "a1_v23", question: "A área de transferência para copiar e colar textos é o _____.", options: ["clipboard", "keyboard", "hard drive", "dashboard"], correctIndex: 0, explanation: "Clipboard guarda itens copiados." },
        { id: "a1_v24", question: "Qual tecla do teclado usamos para recuar o código ou dar espaçamento identado?", options: ["Tab", "Enter", "Space", "Shift"], correctIndex: 0, explanation: "A tecla Tab insere o recuo de identação padrão." },
        { id: "a1_v25", question: "A pasta virtual de um projeto contendo vários arquivos organizados é chamada de _____.", options: ["file", "folder", "drive", "cloud"], correctIndex: 1, explanation: "Folder (ou diretório) organiza múltiplos arquivos." },
        { id: "a1_v26", question: "Para salvar uma cópia de segurança dos dados, fazemos um _____.", options: ["outage", "backup", "crashed", "outlets"], correctIndex: 1, explanation: "Backup é a cópia de segurança." },
        { id: "a1_v27", question: "No terminal, a linha onde digitamos comandos é chamada de command _____.", options: ["line", "bar", "text", "space"], correctIndex: 0, explanation: "A linha de comando chama-se 'command line'." },
        { id: "a1_v28", question: "Qual termo define a página inicial de um site na web?", options: ["homepage", "footer", "bookmark", "address bar"], correctIndex: 0, explanation: "Homepage é a página inicial." },
        { id: "a1_v29", question: "O botão ou link que nos desconecta da conta logada é o _____.", options: ["sign in", "sign out", "download", "install"], correctIndex: 1, explanation: "Sign out nos desconecta com segurança." },
        { id: "a1_v30", question: "O sistema operacional de código aberto muito usado em servidores e infraestrutura é o _____.", options: ["Windows", "Linux", "macOS", "iOS"], correctIndex: 1, explanation: "Linux é o sistema líder em servidores." },
        { id: "a1_v31", question: "A velocidade e fluxo de transferência de rede de dados de internet é a _____.", options: ["bandwidth", "resolution", "outlets", "setup"], correctIndex: 0, explanation: "Bandwidth (largura de banda) dita a capacidade de transferência." },
        { id: "a1_v32", question: "O ato de baixar e configurar um software na máquina é _____.", options: ["uninstall", "install", "upload", "delete"], correctIndex: 1, explanation: "Install (instalar) prepara o software localmente." },
        { id: "a1_v33", question: "Como chamamos a janela flutuante que avisa sobre erros críticos ou confirmações no app?", options: ["popup", "sidebar", "footer", "dashboard"], correctIndex: 0, explanation: "Popup é a janela que se abre acima do conteúdo." },
        { id: "a1_v34", question: "O local físico onde os servidores de uma empresa ficam guardados e refrigerados é o data _____.", options: ["center", "room", "station", "building"], correctIndex: 0, explanation: "Data center hospeda fisicamente servidores." },
        { id: "a1_v35", question: "O banco de dados que organiza as informações em tabelas relacionadas é o banco _____.", options: ["relational", "no-sql", "graph", "cache"], correctIndex: 0, explanation: "Bancos relacionais estruturam dados em tabelas vinculadas." },
        { id: "a1_v36", question: "A área reservada para testar novas alterações de forma isolada antes de enviar para a produção é o _____.", options: ["production environment", "staging environment", "local desk", "public link"], correctIndex: 1, explanation: "Staging simula a produção para fins de testes." },
        { id: "a1_v37", question: "A parte inferior de uma página web contendo direitos autorais e links institucionais é o _____.", options: ["header", "sidebar", "footer", "dashboard"], correctIndex: 2, explanation: "Footer é o rodapé da página." },
        { id: "a1_v38", question: "O atalho global do teclado usado para copiar um arquivo ou texto selecionado é _____.", options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + A"], correctIndex: 0, explanation: "Ctrl + C (ou Cmd + C) é o comando de cópia." },
        { id: "a1_v39", question: "Para desfazer a última digitação ou ação no editor de código, pressionamos _____.", options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Ctrl + Y"], correctIndex: 2, explanation: "Ctrl + Z desfaz ações anteriores." },
        { id: "a1_v40", question: "Como dizemos 'ligar' o monitor de vídeo?", options: ["turn off", "turn on", "open", "plug"], correctIndex: 1, explanation: "'Turn on' liga aparelhos elétricos." },
        { id: "a1_v41", question: "O documento explicativo com o passo a passo para instalar e configurar um projeto chama-se _____.", options: ["roadmap", "tutorial", "invoice", "receipt"], correctIndex: 1, explanation: "Tutorial orienta tarefas específicas." },
        { id: "a1_v42", question: "Qual dispositivo apontador usamos para mover o cursor na tela?", options: ["keyboard", "mouse", "headset", "printer"], correctIndex: 1, explanation: "O mouse (ou trackpad) move o cursor." },
        { id: "a1_v43", question: "Como se chama a tecla que envia comandos ou quebra linhas no editor?", options: ["Space", "Enter", "Esc", "Shift"], correctIndex: 1, explanation: "Enter executa ou insere novas linhas." },
        { id: "a1_v44", question: "A rede interna e privada de computadores de uma empresa chama-se _____.", options: ["intranet", "internet", "social media", "public cloud"], correctIndex: 0, explanation: "Intranet é a rede corporativa privada." },
        { id: "a1_v45", question: "O profissional responsável por garantir a qualidade do software testando fluxos é o _____ engineer.", options: ["QA", "DevOps", "Backend", "Product Owner"], correctIndex: 0, explanation: "QA (Quality Assurance) foca em testes de qualidade." },
        { id: "a1_v46", question: "Como chamamos a imagem ou ícone pequeno que representa o usuário no seu perfil?", options: ["avatar", "wallpaper", "screen", "shortcut"], correctIndex: 0, explanation: "Avatar representa a foto/desenho de perfil." },
        { id: "a1_v47", question: "Para liberar memória RAM fechando processos pesados do navegador, nós _____ a aba.", options: ["open", "close", "duplicate", "scale"], correctIndex: 1, explanation: "Close (fechar) encerra os processos da aba." },
        { id: "a1_v48", question: "Se o sistema está operando perfeitamente e ativo, dizemos que ele está _____.", options: ["down", "online", "crashed", "offline"], correctIndex: 1, explanation: "Online indica atividade e conexão." },
        { id: "a1_v49", question: "Como chamamos o ato de enviar arquivos para a nuvem?", options: ["download", "upload", "delete", "configure"], correctIndex: 1, explanation: "Upload envia dados para a nuvem." },
        { id: "a1_v50", question: "O conjunto de regras que protege o acesso ao banco de dados chama-se segurança de _____.", options: ["network", "data", "passwords", "security"], correctIndex: 1, explanation: "Segurança de dados protege informações confidenciais." }
    ],
    "grammar": [
        { id: "a1_g1", question: "Complete: 'I _____ a software engineer.'", options: ["am", "is", "are", "be"], correctIndex: 0, explanation: "I am é a forma correta do verbo to be." },
        { id: "a1_g2", question: "Complete: 'She _____ clean code.'", options: ["write", "writes", "writing", "writed"], correctIndex: 1, explanation: "Na 3ª pessoa do singular (she), adicionamos '-s' ao verbo no presente simples." },
        { id: "a1_g3", question: "Complete: 'They _____ from Brazil.'", options: ["am", "is", "are", "be"], correctIndex: 2, explanation: "They are é o plural correto do verbo to be." },
        { id: "a1_g4", question: "Complete: 'We don't _____ Windows here.'", options: ["use", "uses", "using", "used"], correctIndex: 0, explanation: "Após o auxiliar 'don't', usamos o verbo na forma base ('use')." },
        { id: "a1_g5", question: "Complete: '_____ he work from home?'", options: ["Do", "Does", "Is", "Are"], correctIndex: 1, explanation: "Usamos o auxiliar 'Does' para a 3ª pessoa do singular ('he') no presente." },
        { id: "a1_g6", question: "Complete: 'They _____ database managers.'", options: ["am", "is", "are", "be"], correctIndex: 2, explanation: "They are é a conjugação adequada para o plural." },
        { id: "a1_g7", question: "Complete: 'I usually _____ work at 9:00 AM.'", options: ["start", "starts", "starting", "started"], correctIndex: 0, explanation: "Com o pronome 'I', o verbo permanece na forma base no presente simples." },
        { id: "a1_g8", question: "Complete: 'She _____ have a Github account.'", options: ["don't", "doesn't", "not", "isn't"], correctIndex: 1, explanation: "A negativa de 3ª pessoa (she) é 'doesn't'." },
        { id: "a1_g9", question: "Complete: 'Where _____ the servers located?'", options: ["is", "am", "are", "be"], correctIndex: 2, explanation: "'Servers' está no plural, portanto usamos 'are'." },
        { id: "a1_g10", question: "Complete: 'He _____ currently online on Slack.'", options: ["is", "am", "are", "be"], correctIndex: 0, explanation: "He is é a conjugação correta de 3ª pessoa do singular." },
        { id: "a1_g11", question: "Complete: 'We _____ meetings every Monday.'", options: ["has", "have", "having", "had"], correctIndex: 1, explanation: "Com o pronome 'We', usamos 'have'." },
        { id: "a1_g12", question: "Complete: 'It _____ a beautiful office UI.'", options: ["have", "has", "having", "is has"], correctIndex: 1, explanation: "'It' (3ª pessoa neutra) conjuga-se como 'has' no presente simples." },
        { id: "a1_g13", question: "Complete: '_____ you have the API key?'", options: ["Do", "Does", "Is", "Are"], correctIndex: 0, explanation: "Perguntas com 'you' usam o auxiliar 'Do'." },
        { id: "a1_g14", question: "Complete: 'I _____ not use Skype.'", options: ["do", "does", "am", "is"], correctIndex: 0, explanation: "Negativa com verbos de ação para 'I' usa o auxiliar 'do not' (I do not use)." },
        { id: "a1_g15", question: "Complete: 'The server _____ down right now.'", options: ["is", "are", "am", "be"], correctIndex: 0, explanation: "Server (singular) exige a forma 'is'." },
        { id: "a1_g16", question: "Complete: 'She _____ to check the repository.'", options: ["need", "needs", "needing", "needed"], correctIndex: 1, explanation: "3ª pessoa singular no presente: 'needs'." },
        { id: "a1_g17", question: "Complete: 'Do they _____ English daily?'", options: ["study", "studies", "studying", "studied"], correctIndex: 0, explanation: "Na pergunta com auxiliar 'Do', o verbo fica na forma base." },
        { id: "a1_g18", question: "Complete: 'We _____ not start the sprint today.'", options: ["do", "does", "are", "is"], correctIndex: 0, explanation: "Auxiliar negativo para plural 'We' é 'do not'." },
        { id: "a1_g19", question: "Complete: 'He _____ the code changes.'", options: ["approve", "approves", "approving", "approved"], correctIndex: 1, explanation: "Sujeito singular 'He' exige terminação '-s' no presente simples." },
        { id: "a1_g20", question: "Complete: 'This computer _____ faster.'", options: ["is", "are", "am", "be"], correctIndex: 0, explanation: "Computer (singular) exige 'is'." },
        { id: "a1_g21", question: "Complete: 'Where _____ you work?'", options: ["do", "does", "is", "are"], correctIndex: 0, explanation: "Auxiliar de ação 'do' acompanha o pronome 'you' em perguntas." },
        { id: "a1_g22", question: "Complete: '_____ she use Linux or macOS?'", options: ["Do", "Does", "Is", "Are"], correctIndex: 1, explanation: "Sujeito singular 'she' exige auxiliar 'Does'." },
        { id: "a1_g23", question: "Complete: 'They don't _____ the password.'", options: ["know", "knows", "knowing", "knew"], correctIndex: 0, explanation: "Após o auxiliar 'don't', o verbo volta à forma base ('know')." },
        { id: "a1_g24", question: "Complete: 'I _____ writing a report now.'", options: ["am", "is", "are", "be"], correctIndex: 0, explanation: "Estrutura do presente contínuo: 'I am' + verbo em '-ing'." },
        { id: "a1_g25", question: "Complete: 'We _____ coding a new interface.'", options: ["is", "am", "are", "be"], correctIndex: 2, explanation: "'We are' acompanha gerúndio no presente contínuo." },
        { id: "a1_g26", question: "Complete: 'The QA engineer _____ testing the bug.'", options: ["is", "are", "am", "be"], correctIndex: 0, explanation: "QA engineer (singular) exige 'is'." },
        { id: "a1_g27", question: "Complete: 'What _____ they doing?'", options: ["is", "am", "are", "be"], correctIndex: 2, explanation: "Eles/Elas (they) exige a forma plural 'are'." },
        { id: "a1_g28", question: "Complete: 'He _____ not coding at the moment.'", options: ["is", "are", "am", "be"], correctIndex: 0, explanation: "He is not + verbo em '-ing' (negativa contínua)." },
        { id: "a1_g29", question: "Complete: 'We have meetings _____ Mondays.'", options: ["on", "at", "in", "for"], correctIndex: 0, explanation: "Preposição 'on' acompanha dias da semana." },
        { id: "a1_g30", question: "Complete: 'Our work starts _____ 9:00 AM.'", options: ["at", "on", "in", "to"], correctIndex: 0, explanation: "Preposição 'at' acompanha horários específicos." },
        { id: "a1_g31", question: "Complete: 'The database is _____ the cloud.'", options: ["in", "on", "at", "under"], correctIndex: 0, explanation: "Dizemos 'in the cloud' para servidores virtuais." },
        { id: "a1_g32", question: "Complete: 'The files are _____ the server.'", options: ["on", "in", "at", "to"], correctIndex: 0, explanation: "Para servidores específicos e arquivos em rede usamos a preposição 'on'." },
        { id: "a1_g33", question: "Complete: 'He works _____ a large startup.'", options: ["at", "on", "in", "by"], correctIndex: 0, explanation: "Usamos 'at' antes do nome ou tipo de instituição de trabalho." },
        { id: "a1_g34", question: "Complete: 'She is _____ the meeting room.'", options: ["in", "on", "at", "by"], correctIndex: 0, explanation: "Estar fisicamente dentro de um local fechado exige a preposição 'in'." },
        { id: "a1_g35", question: "Complete: 'Let's meet _____ Tuesday afternoon.'", options: ["on", "at", "in", "for"], correctIndex: 0, explanation: "Dias da semana com período exigem 'on'." },
        { id: "a1_g36", question: "Complete: 'I study English _____ night.'", options: ["at", "on", "in", "for"], correctIndex: 0, explanation: "A expressão de período correta é 'at night' (à noite)." },
        { id: "a1_g37", question: "Complete: 'I have a computer _____ my desk.'", options: ["on", "in", "at", "under"], correctIndex: 0, explanation: "Objetos acima de superfícies planas usam a preposição 'on'." },
        { id: "a1_g38", question: "Complete: 'Who _____ the tech lead of the team?'", options: ["is", "are", "am", "be"], correctIndex: 0, explanation: "'Who' no singular refere-se a 'he/she', exigindo 'is'." },
        { id: "a1_g39", question: "Complete: 'Why _____ the system crashed?'", options: ["is", "are", "am", "be"], correctIndex: 0, explanation: "Sistemas no singular pedem a forma auxiliar 'is'." },
        { id: "a1_g40", question: "Complete: 'This is _____ external monitor.'", options: ["an", "a", "the", "some"], correctIndex: 0, explanation: "Usamos o artigo indefinido 'an' antes de palavras com som de vogal." },
        { id: "a1_g41", question: "Complete: 'I need _____ new keyboard.'", options: ["a", "an", "some", "the"], correctIndex: 0, explanation: "Usamos 'a' antes de palavras com som de consoante." },
        { id: "a1_g42", question: "Complete: 'These are _____ tasks for today.'", options: ["the", "a", "an", "some"], correctIndex: 0, explanation: "Artigo definido 'the' serve para substantivos específicos no plural." },
        { id: "a1_g43", question: "Complete: 'Where are _____ keys?'", options: ["my", "I", "me", "mine"], correctIndex: 0, explanation: "Usamos o possessivo adjetivo 'my' antes de substantivos." },
        { id: "a1_g44", question: "Complete: 'This is _____ laptop.'", options: ["his", "he", "him", "himself"], correctIndex: 0, explanation: "Possessivo adjetivo masculino correspondente a ele é 'his'." },
        { id: "a1_g45", question: "Complete: 'Is this repository _____?'", options: ["yours", "your", "you", "yourself"], correctIndex: 0, explanation: "Possessivo substantivo no final da frase sem substantivo seguinte exige 'yours'." },
        { id: "a1_g46", question: "Complete: 'We write _____ own tests.'", options: ["our", "ours", "us", "we"], correctIndex: 0, explanation: "Possessivo adjetivo para nós é 'our'." },
        { id: "a1_g47", question: "Complete: 'They commit _____ code directly.'", options: ["their", "theirs", "them", "they"], correctIndex: 0, explanation: "Possessivo adjetivo para eles/elas é 'their'." },
        { id: "a1_g48", question: "Complete: 'This tool is very good, but _____ interface is complex.'", options: ["its", "it's", "his", "her"], correctIndex: 0, explanation: "Possessivo neutro de objeto singular é 'its' (sem apóstrofo)." },
        { id: "a1_g49", question: "Complete: 'She presents _____ dashboard to the client.'", options: ["her", "hers", "she", "herself"], correctIndex: 0, explanation: "Possessivo adjetivo feminino para ela é 'her'." },
        { id: "a1_g50", question: "Complete: 'Is this headset _____?'", options: ["mine", "my", "me", "I"], correctIndex: 0, explanation: "Possessivo substantivo no fim de frases é 'mine'." }
    ],
    "listening": [
        { id: "a1_l1", question: "Qual das seguintes frases você ouviria em uma reunião diária (daily standup)?", options: ["'Hey team, let's check the backlog.'", "'I would like to order a beer, please.'", "'Where is the nearest beach?'", "'Can I check in my baggage?'"], correctIndex: 0, explanation: "Greetings e discussões de backlog são típicos de standup meetings." },
        { id: "a1_l2", question: "Se o seu colega disser 'My mic is muted', o que você deve entender?", options: ["Ele não pode falar porque o microfone está silenciado.", "Ele está sem conexão com a internet.", "Ele mudou de mesa de trabalho.", "O computador dele desligou."], correctIndex: 0, explanation: "Muted significa silenciado / mudo." },
        { id: "a1_l3", question: "O que significa se alguém disser ao telefone: 'Can you spell that, please?'", options: ["Pediu para você soletrar a palavra letra por letra.", "Pediu para você repetir mais alto.", "Pediu para enviar um e-mail com os dados.", "Pediu para desligar a chamada."], correctIndex: 0, explanation: "Spell significa soletrar." },
        { id: "a1_l4", question: "Se o cliente disser 'The system is down', qual é a gravidade da situação?", options: ["Muito alta, pois o sistema está inativo / fora do ar.", "Baixa, pois é apenas um aviso de layout.", "Nenhuma, significa que o sistema foi atualizado.", "Significa que o deploy foi agendado."], correctIndex: 0, explanation: "Down significa fora do ar." },
        { id: "a1_l5", question: "Ao ouvir 'Let's push to main', o programador deve fazer o que?", options: ["Enviar as alterações locais de código para a branch principal.", "Criar uma branch nova.", "Deletar os commits anteriores.", "Sair do terminal e ir almoçar."], correctIndex: 0, explanation: "Push to main envia os commits locais para o servidor remoto branch main." },
        { id: "a1_l6", question: "Se alguém disser 'Share your screen, please', qual ação é esperada?", options: ["Compartilhar a tela do seu computador na videochamada.", "Dividir a mesa física.", "Ligar a câmera do celular.", "Mandar um link do repositório."], correctIndex: 0, explanation: "Share screen é o compartilhamento de tela." },
        { id: "a1_l7", question: "O que você entende ao ouvir 'I have a merge conflict'?", options: ["Há duas alterações concorrentes no Git que precisam de resolução manual.", "O sistema operacional travou.", "O usuário perdeu a conexão Wi-Fi.", "A senha de login foi digitada errada."], correctIndex: 0, explanation: "Merge conflict é conflito de código no Git." },
        { id: "a1_l8", question: "Se o Scrum Master disser 'We need to refine the stories', qual é a atividade?", options: ["Detalhar e melhorar a descrição das tarefas do backlog.", "Deletar as tarefas.", "Enviar o projeto para produção.", "Fazer chamadas com os clientes."], correctIndex: 0, explanation: "Refinar histórias é detalhar requisitos de tarefas." },
        { id: "a1_l9", question: "O que significa ouvir 'Check your credentials' no formulário de login?", options: ["Verificar se o usuário e a senha inseridos estão corretos.", "Fazer o upload da foto de perfil.", "Limpar o histórico de navegação.", "Alterar o idioma do teclado."], correctIndex: 0, explanation: "Credentials refere-se a dados de acesso (usuário/senha)." },
        { id: "a1_l10", question: "Se o gerente disser 'Let's scale the database', o que o time de infraestrutura fará?", options: ["Aumentar a capacidade e o desempenho do servidor de banco.", "Apagar as tabelas antigas.", "Criar novos gráficos de vendas.", "Mudar de banco de dados físico."], correctIndex: 0, explanation: "Scale significa redimensionar / escalar a capacidade." },
        { id: "a1_l11", question: "O que você entende quando o suporte diz 'Clear your cache'?", options: ["Limpar os arquivos temporários armazenados pelo navegador.", "Reiniciar o roteador Wi-Fi.", "Trocar a senha da conta corporativa.", "Excluir o repositório Git local."], correctIndex: 0, explanation: "Clear cache limpa os arquivos temporários do navegador." },
        { id: "a1_l12", question: "Se um colega disser 'I work remote', onde ele realiza as tarefas?", options: ["Fora do escritório físico, geralmente de casa.", "No escritório central da empresa.", "Apenas aos finais de semana.", "Em viagens internacionais constantes."], correctIndex: 0, explanation: "Work remote é o trabalho remoto / home office." },
        { id: "a1_l13", question: "Ao ouvir 'The hotfix is ready', o que foi concluído?", options: ["Uma correção rápida de emergência para um bug crítico.", "O design da nova página web.", "O escopo anual de vendas.", "O café da tarde do time."], correctIndex: 0, explanation: "Hotfix é correção emergencial de software." },
        { id: "a1_l14", question: "O que significa 'Open a Pull Request (PR)'?", options: ["Solicitar a revisão e a fusão de alterações de código no repositório.", "Baixar a última versão do branch main.", "Apagar o histórico local do terminal.", "Conectar o cabo HDMI no monitor."], correctIndex: 0, explanation: "PR solicita a revisão e mesclagem de branch." },
        { id: "a1_l15", question: "Se o cliente disser 'There is a bug on the login screen', o que está acontecendo?", options: ["Há um erro que impede o funcionamento correto do login.", "A tela de login está com cores bonitas.", "O sistema de login foi removido.", "O e-mail foi enviado com sucesso."], correctIndex: 0, explanation: "Bug é erro de lógica/funcionamento." },
        { id: "a1_l16", question: "Se um desenvolvedor disser 'I will clone the repo', o que ele fará?", options: ["Criar uma cópia local do repositório remoto Git em seu computador.", "Deletar o repositório do GitHub.", "Duplicar o código em outro arquivo manual.", "Copiar o e-mail do cliente."], correctIndex: 0, explanation: "Git clone faz a cópia local do repositório." },
        { id: "a1_l17", question: "O que você deve fazer ao ouvir 'Plug in the charger'?", options: ["Conectar o carregador na tomada de energia.", "Desligar o Wi-Fi.", "Limpar a mesa de trabalho.", "Reiniciar o computador portátil."], correctIndex: 0, explanation: "Plug in the charger é ligar o carregador na tomada." },
        { id: "a1_l18", question: "Se o Scrum Master perguntar 'Are you blocked?', o que ele quer saber?", options: ["Se você tem algum impedimento para realizar suas tarefas.", "Se o seu usuário do sistema foi cancelado.", "Se você está no horário de almoço.", "Se o seu computador travou."], correctIndex: 0, explanation: "Blocked em agilidade significa ter impedimento ou trava de tarefas." },
        { id: "a1_l19", question: "O que significa 'The deploy was successful'?", options: ["A publicação da nova versão do sistema ocorreu com sucesso.", "O sistema foi hackeado.", "O banco de dados foi deletado por engano.", "O programador foi promovido."], correctIndex: 0, explanation: "Deploy é a publicação/disponibilização do sistema." },
        { id: "a1_l20", question: "Ao ouvir 'What is your username?', qual dado você deve fornecer?", options: ["Seu identificador de acesso / nome de usuário no sistema.", "Sua senha de segurança secreta.", "O número do seu telefone pessoal.", "Seu cargo corporativo."], correctIndex: 0, explanation: "Username é o nome identificador de acesso." },
        { id: "a1_l21", question: "Qual o significado de 'Let's take a coffee break'?", options: ["Fazer uma pausa rápida para o café / descanso cognitivo.", "Terminar as tarefas do dia.", "Iniciar a reunião de planejamento.", "Trocar a senha de login do roteador."], correctIndex: 0, explanation: "Coffee break é o intervalo para café." },
        { id: "a1_l22", question: "Ao ouvir 'The site is down', o que deve ser entendido?", options: ["O site está fora do ar ou inoperante.", "O site está com o layout atualizado.", "O site está mais seguro.", "O site mudou de endereço web."], correctIndex: 0, explanation: "Down significa fora de serviço/funcionamento." },
        { id: "a1_l23", question: "O que significa a palavra 'Deadline'?", options: ["Prazo limite final para entrega de um projeto ou tarefa.", "Uma linha de código com erros.", "O final de uma reunião diária.", "O rodapé de uma página web."], correctIndex: 0, explanation: "Deadline é a data/prazo limite de entrega." },
        { id: "a1_l24", question: "Se alguém disser 'I have a question', o que a pessoa deseja?", options: ["Fazer uma pergunta ou tirar uma dúvida.", "Encerrar a chamada imediatamente.", "Mudar o escopo do projeto.", "Ir para a sala de reuniões."], correctIndex: 0, explanation: "Question significa pergunta / dúvida." },
        { id: "a1_l25", question: "O que você deve fazer ao ouvir 'Refresh your browser'?", options: ["Atualizar a página web no seu navegador.", "Fechar todas as abas abertas.", "Limpar o histórico de navegação.", "Reinstalar o aplicativo de internet."], correctIndex: 0, explanation: "Refresh recarrega/atualiza o navegador." },
        { id: "a1_l26", question: "Se disserem 'Join the meeting', qual é o comando?", options: ["Entrar / participar da reunião agendada.", "Cancelar a videoconferência.", "Apresentar slides novos.", "Silenciar o microfone."], correctIndex: 0, explanation: "Join meeting significa entrar/participar de reunião." },
        { id: "a1_l27", question: "O que significa 'Check the repository'?", options: ["Verificar o repositório de arquivos de código fonte.", "Apagar a pasta de relatórios.", "Comprar novos computadores.", "Mudar de sala física de reuniões."], correctIndex: 0, explanation: "Repository (ou repo) é onde os códigos ficam salvos." },
        { id: "a1_l28", question: "Ao ouvir 'We need a backup', o que deve ser feito?", options: ["Uma cópia de segurança dos dados importantes do sistema.", "Um novo deploy em produção.", "Reinstalar o sistema operacional Linux.", "Excluir as contas de teste."], correctIndex: 0, explanation: "Backup é cópia de segurança de dados." },
        { id: "a1_l29", question: "O que você entende quando o suporte diz 'Check your connection'?", options: ["Verificar se você está conectado à internet.", "Reescrever a senha do banco de dados.", "Mudar de fone de ouvido.", "Aumentar o brilho da tela."], correctIndex: 0, explanation: "Connection refere-se à conectividade de rede." },
        { id: "a1_l30", question: "Se disserem 'Create an account', qual o fluxo?", options: ["Realizar o cadastro de um novo perfil no sistema.", "Fazer login com credenciais existentes.", "Alterar o nome do usuário.", "Excluir o histórico do banco."], correctIndex: 0, explanation: "Create account é cadastrar-se no sistema." },
        { id: "a1_l31", question: "O que significa a palavra 'Setup' em tech?", options: ["Configuração inicial de hardware ou software.", "Um erro crítico no banco de dados.", "O término de uma sprint.", "O rodapé de e-mails corporativos."], correctIndex: 0, explanation: "Setup refere-se a configurações/instalações." },
        { id: "a1_l32", question: "Se o líder disser 'Let's launch the product', qual a ação?", options: ["Lançar/publicar o produto no mercado.", "Cancelar o desenvolvimento do produto.", "Fazer reuniões internas de design.", "Deletar as contas antigas."], correctIndex: 0, explanation: "Launch significa lançar/publicar no mercado." },
        { id: "a1_l33", question: "O que você entende ao ouvir 'This is high priority'?", options: ["Esta tarefa possui prioridade alta e deve ser feita primeiro.", "A tarefa é simples e pode ser esquecida.", "O sistema operacional travou.", "O projeto foi cancelado."], correctIndex: 0, explanation: "High priority exige atenção e entrega urgente." },
        { id: "a1_l34", question: "Se disserem 'Update the documentation', o que deve ser feito?", options: ["Atualizar os manuais e textos explicativos do código.", "Deletar a pasta de readme.", "Compartilhar a tela de trabalho.", "Fazer o deploy em produção."], correctIndex: 0, explanation: "Documentation (docs) são os arquivos explicativos." },
        { id: "a1_l35", question: "O que significa a palavra 'Outage'?", options: ["Queda geral ou indisponibilidade de um sistema/serviço.", "O lançamento de uma nova feature.", "O início do expediente de trabalho.", "Uma reunião com o cliente."], correctIndex: 0, explanation: "Outage é queda/indisponibilidade técnica." },
        { id: "a1_l36", question: "Ao ouvir 'Give me feedback', o que a pessoa espera?", options: ["Uma avaliação crítica ou retorno sobre o trabalho realizado.", "Um aumento de salário corporativo.", "Um arquivo contendo códigos fonte.", "O link do repositório Git."], correctIndex: 0, explanation: "Feedback é avaliação / retorno construtivo." },
        { id: "a1_l37", question: "Se disserem 'We need to deploy the fix', qual a tarefa?", options: ["Publicar a correção do bug no servidor oficial.", "Criar mais bugs de teste.", "Mudar o design da página principal.", "Cancelar a sprint atual."], correctIndex: 0, explanation: "Deploy the fix publica as correções no ar." },
        { id: "a1_l38", question: "O que você entende ao ouvir 'This is on track'?", options: ["O projeto está correndo no prazo e ritmo esperados.", "O projeto está totalmente atrasado.", "O servidor principal caiu.", "O cliente cancelou o contrato."], correctIndex: 0, explanation: "On track indica ritmo e prazo corretos." },
        { id: "a1_l39", question: "O que significa 'Mute your microphone, please'?", options: ["Silenciar o seu áudio para evitar ruídos de fundo.", "Desligar a câmera de vídeo.", "Falar mais alto na chamada.", "Sair da reunião virtual."], correctIndex: 0, explanation: "Mute microfone silencia o áudio." },
        { id: "a1_l40", question: "Se o suporte disser 'Try another browser', o que você faz?", options: ["Tenta abrir o site em outro navegador de internet (Chrome, Firefox, Safari).", "Reinicia a máquina física.", "Troca a senha da sua conta.", "Desconecta o cabo de rede Wi-Fi."], correctIndex: 0, explanation: "Browser é o navegador de internet." },
        { id: "a1_l41", question: "O que significa a palavra 'Inconsistencies'?", options: ["Dados divergentes ou falhas de coerência no sistema.", "Funções de código perfeitas.", "A aprovação do cliente.", "O deploy feito na sexta-feira."], correctIndex: 0, explanation: "Inconsistencies indica dados incorretos ou incompatíveis." },
        { id: "a1_l42", question: "Ao ouvir 'The user is blocked', qual a situação?", options: ["O acesso do usuário está travado / impedido por segurança.", "O usuário foi promovido a administrador.", "O usuário trocou de senha.", "O usuário deletou a conta."], correctIndex: 0, explanation: "Blocked indica impedimento ou trava de acesso." },
        { id: "a1_l43", question: "O que você entende ao ouvir 'We have high traffic'?", options: ["O servidor está recebendo um grande volume de acessos simultâneos.", "A internet está lenta no escritório.", "O trânsito na rua está pesado.", "A equipe está trabalhando de casa."], correctIndex: 0, explanation: "High traffic refere-se a acessos massivos simultâneos na rede." },
        { id: "a1_l44", question: "Se disserem 'We need to scale up', o que deve ser planejado?", options: ["Aumentar a infraestrutura do sistema para suportar crescimento.", "Diminuir o número de desenvolvedores.", "Remover o banco de dados.", "Reduzir o preço do produto."], correctIndex: 0, explanation: "Scale up aumenta infraestrutura e capacidade." },
        { id: "a1_l45", question: "O que significa a expressão 'Keep in touch'?", options: ["Manter contato / continuar se comunicando.", "Desligar o telefone imediatamente.", "Escrever e-mails formais apenas.", "Apagar as redes sociais."], correctIndex: 0, explanation: "Keep in touch significa manter contato." },
        { id: "a1_l46", question: "Ao ouvir 'This is the draft version', o que está sob análise?", options: ["Uma versão rascunho / preliminar do documento ou projeto.", "A versão final que irá para a produção.", "Um erro grave no código fonte.", "O banco de dados de teste."], correctIndex: 0, explanation: "Draft é rascunho / versão preliminar." },
        { id: "a1_l47", question: "O que significa 'We need to rollback this deploy'?", options: ["Reverter a atualização de código voltando à versão anterior estável.", "Apagar todos os dados de usuários.", "Acelerar o desenvolvimento de novas features.", "Mudar o repositório Git."], correctIndex: 0, explanation: "Rollback reverte o deploy para a versão estável anterior." },
        { id: "a1_l48", question: "Se o designer disser 'The layout is responsive', o que isso indica?", options: ["A tela se adapta a diferentes tamanhos de tela (celular, tablet, desktop).", "O layout responde a cliques muito rapidamente.", "O design está feio e arcaico.", "O layout foi programado em Java."], correctIndex: 0, explanation: "Responsividade adapta o layout visual a telas." },
        { id: "a1_l49", question: "O que significa 'This code is legacy'?", options: ["Código antigo herdado que ainda está em uso mas precisa de melhorias.", "Código moderno escrito com as últimas tecnologias.", "Um código com erros que impede o build.", "Um script temporário de testes."], correctIndex: 0, explanation: "Legacy code é código legado herdado." },
        { id: "a1_l50", question: "Se o cliente disser 'The UX is excellent', qual foi o elogio?", options: ["A experiência de uso do produto é intuitiva e agradável.", "O preço do software está barato.", "O backend do sistema roda rápido.", "O código está bem identado."], correctIndex: 0, explanation: "UX (User Experience) indica experiência de uso do sistema." }
    ],
    "pronunciation": [
        { id: "a1_p1", question: "Como pronunciamos a letra 'H' em inglês?", options: ["/eitch/", "/agá/", "/ei/", "/ét/"], correctIndex: 0, explanation: "H pronuncia-se '/eitch/'." },
        { id: "a1_p2", question: "Como pronunciamos a letra 'G' em inglês?", options: ["/djí/", "/guê/", "/gí/", "/dji/ (curto)"], correctIndex: 0, explanation: "G pronuncia-se '/djí/'." },
        { id: "a1_p3", question: "Como se pronuncia a palavra 'Jira'?", options: ["/djí-ra/", "/jí-ra/ (som de J em português)", "/i-í-ra/", "/djai-ra/"], correctIndex: 0, explanation: "Pronuncia-se '/djí-ra/' com som de d e j juntos." },
        { id: "a1_p4", question: "Como pronunciamos a palavra 'Slack'?", options: ["/sléc/ (sem 'i' inicial de apoio)", "/is-léqui/", "/es-léc/", "/sláque/"], correctIndex: 0, explanation: "Inicia no som de S seco direto, sem colocar 'i' ou 'e' na frente." },
        { id: "a1_p5", question: "Qual a pronúncia ideal para 'Code'?", options: ["/coud/ (com d seco)", "/código/", "/có-di/", "/côu-di/"], correctIndex: 0, explanation: "Code termina com som de D mudo e seco." },
        { id: "a1_p6", question: "Como pronunciamos 'Dev'?", options: ["/dév/ (com v seco vibrado)", "/dé-vi/", "/dif/", "/dêve/"], correctIndex: 0, explanation: "V seco e vibrado, sem adicionar som de 'i' ao final." },
        { id: "a1_p7", question: "Como se pronuncia 'Setup' de forma nativa?", options: ["/sê-tãp/ (com p seco mudo)", "/sêtãpi/", "/sêta-pi/", "/si-tãp/"], correctIndex: 0, explanation: "Setup finaliza no som seco e mudo do P." },
        { id: "a1_p8", question: "Como pronunciamos 'Laptop'?", options: ["/láp-tóp/ (com p final mudo)", "/láp-tó-pi/", "/lêp-topi/", "/lap-tupi/"], correctIndex: 0, explanation: "Ambos os P's são secos e mudos." },
        { id: "a1_p9", question: "Qual a pronúncia de 'Outage'?", options: ["/áu-tedj/ (com dj final)", "/au-tá-gui/", "/au-tê-dje/", "/au-te-gui/"], correctIndex: 0, explanation: "Outage pronuncia-se '/áu-tedj/'." },
        { id: "a1_p10", question: "Como se pronuncia 'Internet'?", options: ["/ín-ter-nét/ (ou /ín-ner-nét/ no inglês americano)", "/in-ter-néti/", "/es-ter-net/", "/inter-nête/"], correctIndex: 0, explanation: "T final é seco ou ocultado no inglês americano." },
        { id: "a1_p11", question: "Como pronunciamos 'E-mail'?", options: ["/í-mêil/ (L velar final)", "/i-mê-io/", "/ê-mêi/", "/í-meli/"], correctIndex: 0, explanation: "Pronuncia-se com som de 'í' forte inicial e 'l' velar no final." },
        { id: "a1_p12", question: "Como pronunciamos 'Web'?", options: ["/wéb/ (com b seco mudo)", "/wé-bi/", "/wép/", "/uê-be/"], correctIndex: 0, explanation: "O 'B' final é mudo e seco." },
        { id: "a1_p13", question: "Qual a pronúncia correta de 'Developer'?", options: ["/di-vé-lo-per/", "/dê-ve-lo-per/", "/di-ve-ló-per/", "/de-ve-lo-pí/"], correctIndex: 0, explanation: "A sílaba tônica é a segunda: '/di-vé-lo-per/'." },
        { id: "a1_p14", question: "Como se pronuncia 'User'?", options: ["/iú-zer/", "/ú-zer/", "/iu-ser/", "/ú-ser/"], correctIndex: 0, explanation: "User inicia com som de 'iu' e som de 'z' no meio." },
        { id: "a1_p15", question: "Como pronunciamos a palavra 'File'?", options: ["/fáil/ (com L velar)", "/fá-ili/", "/fá-io/", "/fí-li/"], correctIndex: 0, explanation: "Pronuncia-se com ditongo /ai/ seguido do L velar." },
        { id: "a1_p16", question: "Como pronunciamos a palavra 'Database'?", options: ["/dêi-ta-bêis/", "/dá-ta-ba-se/", "/dá-ta-bêis/", "/dêi-ta-bá-se/"], correctIndex: 0, explanation: "Database pronuncia-se '/dêi-ta-bêis/'." },
        { id: "a1_p17", question: "Como pronunciamos 'Wi-Fi'?", options: ["/wái-fái/", "/wi-fi/ (como em português)", "/uêi-fêi/", "/uai-fi/"], correctIndex: 0, explanation: "Ambas as sílabas rimam com ditongo /ai/." },
        { id: "a1_p18", question: "Como se pronuncia 'Cloud'?", options: ["/cláud/ (com d seco mudo)", "/cláu-di/", "/clôud/", "/clôu-di/"], correctIndex: 0, explanation: "Cloud termina no D seco." },
        { id: "a1_p19", question: "Qual a pronúncia de 'Hotfix'?", options: ["/rót-fícs/ (com r aspirado inicial)", "/rót-fí-csi/", "/rót-fíquis/", "/hót-fícs/ (som de R mudo)"], correctIndex: 0, explanation: "H inicial tem som de R aspirado forte (como em carro)." },
        { id: "a1_p20", question: "Como se pronuncia 'Standup'?", options: ["/sténd-ãp/ (S inicial seco)", "/is-ténd-ãpi/", "/es-ténd-ãpe/", "/stend-ãpi/"], correctIndex: 0, explanation: "Começa no som do S sem vogal de apoio e finaliza no P seco." },
        { id: "a1_p21", question: "Como pronunciamos a sigla 'URL'?", options: ["/iu-ar-él/", "/u-erre-ele/", "/iu-erre-el/", "/iú-ar-el/ (com tonicidade na última)"], correctIndex: 0, explanation: "Soletrado: U (/iu/), R (/ar/), L (/el/)." },
        { id: "a1_p22", question: "Como pronunciamos a sigla 'API'?", options: ["/ei-pi-ai/", "/a-pe-i/", "/ei-pe-i/", "/a-pi-ai/"], correctIndex: 0, explanation: "Soletrado: A (/ei/), P (/pi/), I (/ai/)." },
        { id: "a1_p23", question: "Como pronunciamos a palavra 'Key'?", options: ["/quí/ (som de i longo)", "/quêi/", "/quê/", "/quê-i/"], correctIndex: 0, explanation: "Key tem som de '/quí/', rima com 'see'." },
        { id: "a1_p24", question: "Como se pronuncia 'GitHub'?", options: ["/gít-rãb/ (com h aspirado no hub)", "/gít-úb/", "/gít-rãbi/", "/gít-rãb/ (com R seco)"], correctIndex: 0, explanation: "Hub tem o H aspirado (som de R em português): '/gít-rãb/'." },
        { id: "a1_p25", question: "Como se pronuncia a palavra 'Server'?", options: ["/sêr-ver/ (com r retroflexo americano)", "/sér-vi-er/", "/sér-veri/", "/sur-ver/"], correctIndex: 0, explanation: "Server pronuncia-se como '/sêr-ver/'." },
        { id: "a1_p26", question: "Como se pronuncia 'Deploy'?", options: ["/di-plói/", "/dê-plói/", "/di-plu-ai/", "/de-plu-ai/"], correctIndex: 0, explanation: "Deploy pronuncia-se '/di-plói/'." },
        { id: "a1_p27", question: "Como se pronuncia a palavra 'Link'?", options: ["/línc/ (finalizando no k seco)", "/lín-qui/", "/lín-que/", "/lí-nique/"], correctIndex: 0, explanation: "Link termina no som seco do K." },
        { id: "a1_p28", question: "Como se pronuncia 'Sprint' de forma correta?", options: ["/sprint/ (iniciando com som de S e finalizando em T seco)", "/is-prínti/", "/es-printi/", "/es-printe/"], correctIndex: 0, explanation: "Sprint inicia no som de S (sem 'i' inicial) e finaliza com T seco." },
        { id: "a1_p29", question: "Como pronunciamos a palavra 'Bug'?", options: ["/bãg/ (com som de ã e g seco)", "/búgui/", "/bãgui/", "/bug/"], correctIndex: 0, explanation: "Bug pronuncia-se '/bãg/' com final seco." },
        { id: "a1_p30", question: "Como pronunciamos 'Commit'?", options: ["/cõ-mít/ (com t seco)", "/co-miti/", "/cõ-míti/", "/có-mait/"], correctIndex: 0, explanation: "Commit pronuncia-se '/cõ-mít/' com t seco no final." },
        { id: "a1_p31", question: "Como pronunciamos 'Branch'?", options: ["/brênchi/ (com tch seco)", "/bránqui/", "/ibrênchi/", "/brânche/"], correctIndex: 0, explanation: "Branch pronuncia-se '/brênchi/' com o som de ch seco." },
        { id: "a1_p32", question: "Como pronunciamos 'Push'?", options: ["/púchi/ (com ch seco)", "/púche/", "/púqui/", "/pãch/"], correctIndex: 0, explanation: "Push pronuncia-se '/púchi/' com ch seco no final." },
        { id: "a1_p33", question: "Como pronunciamos 'Pull'?", options: ["/púl/ (com L velar, língua atrás dos dentes)", "/púli/", "/pól/", "/pú-li/"], correctIndex: 0, explanation: "Pull pronuncia-se '/púl/' com o L bem velar." },
        { id: "a1_p34", question: "Como pronunciamos a sigla 'MFA'?", options: ["/em-ef-ei/", "/eme-efe-a/", "/eme-efe-ei/", "/em-efe-ei/"], correctIndex: 0, explanation: "Soletrado: M (/em/), F (/ef/), A (/ei/)." },
        { id: "a1_p35", question: "Como pronunciamos a palavra 'VPN'?", options: ["/vi-pi-en/", "/vê-pê-ene/", "/vê-pi-ene/", "/vi-pe-en/"], correctIndex: 0, explanation: "Soletrado: V (/vi/), P (/pi/), N (/en/)." },
        { id: "a1_p36", question: "Como se pronuncia a palavra 'Login'?", options: ["/lóg-ín/ (com g e n secos)", "/ló-gui-ni/", "/lu-guin/", "/log-in/"], correctIndex: 0, explanation: "Login pronuncia-se '/lóg-ín/' de forma seca." },
        { id: "a1_p37", question: "Como se pronuncia 'Setup'?", options: ["/sê-tãp/ (com p mudo e seco)", "/sêtãpi/", "/se-tá-pi/", "/si-tãp/"], correctIndex: 0, explanation: "Setup termina com o som de P seco mudo." },
        { id: "a1_p38", question: "Como se pronuncia a palavra 'Server'?", options: ["/sêr-ver/ (com r retroflexo e v forte)", "/sér-vi-er/", "/sér-veri/", "/sur-ver/"], correctIndex: 0, explanation: "Server pronuncia-se como '/sêr-ver/'." },
        { id: "a1_p39", question: "Como pronunciamos 'HDMI'?", options: ["/eitch-di-em-ai/", "/agá-dê-eme-i/", "/eitch-dê-eme-ai/", "/agá-di-eme-ai/"], correctIndex: 0, explanation: "Soletrado: H (/eitch/), D (/di/), M (/em/), I (/ai/)." },
        { id: "a1_p40", question: "Como se pronuncia 'HDMI cable'?", options: ["/eitch-di-em-ai quêi-bol/", "/eitch-di-em-ai cabo/", "/eitch-di-em-ai cá-ble/", "/agá-dê-eme-i quêi-bol/"], correctIndex: 0, explanation: "Cable pronuncia-se '/quêi-bol/'." },
        { id: "a1_p41", question: "Como pronunciamos 'HDMI port'?", options: ["/eitch-di-em-ai pórt/ (com t seco)", "/eitch-di-em-ai pór-ti/", "/agá-dê-eme-i pórte/", "/eitch-di-em-ai pãrt/"], correctIndex: 0, explanation: "Port termina com o T mudo e seco." },
        { id: "a1_p42", question: "Como pronunciamos 'HDMI jack'?", options: ["/eitch-di-em-ai djéc/ (com c/k seco)", "/eitch-di-em-ai djá-qui/", "/eitch-di-em-ai jáque/", "/agá-dê-eme-i djéc/"], correctIndex: 0, explanation: "Jack termina com som seco '/djéc/'." },
        { id: "a1_p43", question: "Como pronunciamos 'Jira card'?", options: ["/djí-ra cárd/ (com d seco mudo)", "/djí-ra cár-di/", "/jí-ra cárde/", "/djí-ra cãrd/"], correctIndex: 0, explanation: "Card finaliza no d mudo." },
        { id: "a1_p44", question: "Como pronunciamos 'Jira board'?", options: ["/djí-ra bórd/ (com d seco mudo)", "/djí-ra bór-di/", "/jí-ra bórde/", "/djí-ra bõrd/"], correctIndex: 0, explanation: "Board finaliza no d mudo." },
        { id: "a1_p45", question: "Como pronunciamos a palavra 'Slack status'?", options: ["/sléc stêi-tãs/ (com s e t secos)", "/sléque estátus/", "/sléque stêtus/", "/sléc está-tus/"], correctIndex: 0, explanation: "Slack status pronuncia-se '/sléc stêi-tãs/'." },
        { id: "a1_p46", question: "Como pronunciamos a palavra 'Thread' (tópico de mensagens)?", options: ["/θrɛd/ (com o th soprado entre os dentes e d seco)", "/trédi/ (como t em português)", "/tchrédi/", "/trê-de/"], correctIndex: 0, explanation: "Thread inicia com som de TH interdental e finaliza no D seco." },
        { id: "a1_p47", question: "Como pronunciamos a palavra 'Huddle' (chamada rápida no Slack)?", options: ["/rã-dol/ (com h aspirado como em carro e L velar)", "/rã-doli/", "/rã-del/", "/rã-dle/"], correctIndex: 0, explanation: "Huddle pronuncia-se '/rã-dol/'." },
        { id: "a1_p48", question: "Como se pronuncia a palavra 'Scrum Master'?", options: ["/scrãm más-ter/ (com S inicial limpo e m mudo)", "/es-crão máster/", "/es-crãm más-teri/", "/scrãm méster/"], correctIndex: 0, explanation: "Scrum Master inicia no S seco, '/scrãm más-ter/'." },
        { id: "a1_p49", question: "Como se pronuncia a palavra 'Product Owner'?", options: ["/pródãct ôu-ner/ (com t seco)", "/pródãcti ô-ner/", "/pródãcti ô-neri/", "/pro-dãt ô-ner/"], correctIndex: 0, explanation: "Product Owner pronuncia-se '/pródãct ôu-ner/'." },
        { id: "a1_p50", question: "Como se pronuncia a palavra 'Sprint backlog'?", options: ["/sprint béc-lóg/ (com s inicial e g final secos)", "/is-sprint backlogue/", "/es-printi béc-lógui/", "/sprint béc-lo-gui/"], correctIndex: 0, explanation: "Pronúncia seca sem vogais fantasmas nas extremidades." }
    ]
};


/* ==========================================
   GLOBAL QUESTION POOLS (A2 - C2) placeholders
   ========================================== */
const QUESTION_POOL_A2 = {
    vocabulary: [
        { id: "A2_V001", question: "Placeholder A2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "A2_V002", question: "Placeholder A2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "A2_V003", question: "Placeholder A2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "A2_V004", question: "Placeholder A2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "A2_V005", question: "Placeholder A2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "A2_V006", question: "Placeholder A2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "A2_V007", question: "Placeholder A2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" }
    ],
    grammar: [
        { id: "A2_G001", question: "Placeholder A2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "A2_G002", question: "Placeholder A2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "A2_G003", question: "Placeholder A2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "A2_G004", question: "Placeholder A2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "A2_G005", question: "Placeholder A2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "A2_G006", question: "Placeholder A2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "A2_G007", question: "Placeholder A2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "A2_G008", question: "Placeholder A2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" }
    ],
    listening: [
        { id: "A2_L001", question: "Placeholder A2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "A2_L002", question: "Placeholder A2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "A2_L003", question: "Placeholder A2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "A2_L004", question: "Placeholder A2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "A2_L005", question: "Placeholder A2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "A2_L006", question: "Placeholder A2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "A2_L007", question: "Placeholder A2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "A2_L008", question: "Placeholder A2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" }
    ],
    pronunciation: [
        { id: "A2_P001", question: "Placeholder A2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "A2_P002", question: "Placeholder A2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "A2_P003", question: "Placeholder A2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "A2_P004", question: "Placeholder A2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "A2_P005", question: "Placeholder A2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "A2_P006", question: "Placeholder A2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "A2_P007", question: "Placeholder A2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" }
    ]
};

const QUESTION_POOL_B1 = {
    vocabulary: [
        { id: "B1_V001", question: "Placeholder B1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B1_V002", question: "Placeholder B1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B1_V003", question: "Placeholder B1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B1_V004", question: "Placeholder B1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B1_V005", question: "Placeholder B1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B1_V006", question: "Placeholder B1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B1_V007", question: "Placeholder B1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" }
    ],
    grammar: [
        { id: "B1_G001", question: "Placeholder B1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B1_G002", question: "Placeholder B1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B1_G003", question: "Placeholder B1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B1_G004", question: "Placeholder B1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B1_G005", question: "Placeholder B1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B1_G006", question: "Placeholder B1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B1_G007", question: "Placeholder B1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B1_G008", question: "Placeholder B1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" }
    ],
    listening: [
        { id: "B1_L001", question: "Placeholder B1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B1_L002", question: "Placeholder B1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B1_L003", question: "Placeholder B1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B1_L004", question: "Placeholder B1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B1_L005", question: "Placeholder B1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B1_L006", question: "Placeholder B1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B1_L007", question: "Placeholder B1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B1_L008", question: "Placeholder B1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" }
    ],
    pronunciation: [
        { id: "B1_P001", question: "Placeholder B1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B1_P002", question: "Placeholder B1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B1_P003", question: "Placeholder B1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B1_P004", question: "Placeholder B1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B1_P005", question: "Placeholder B1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B1_P006", question: "Placeholder B1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B1_P007", question: "Placeholder B1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" }
    ]
};

const QUESTION_POOL_B2 = {
    vocabulary: [
        { id: "B2_V001", question: "Placeholder B2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B2_V002", question: "Placeholder B2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B2_V003", question: "Placeholder B2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B2_V004", question: "Placeholder B2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B2_V005", question: "Placeholder B2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B2_V006", question: "Placeholder B2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "B2_V007", question: "Placeholder B2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" }
    ],
    grammar: [
        { id: "B2_G001", question: "Placeholder B2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B2_G002", question: "Placeholder B2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B2_G003", question: "Placeholder B2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B2_G004", question: "Placeholder B2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B2_G005", question: "Placeholder B2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B2_G006", question: "Placeholder B2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B2_G007", question: "Placeholder B2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "B2_G008", question: "Placeholder B2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" }
    ],
    listening: [
        { id: "B2_L001", question: "Placeholder B2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B2_L002", question: "Placeholder B2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B2_L003", question: "Placeholder B2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B2_L004", question: "Placeholder B2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B2_L005", question: "Placeholder B2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B2_L006", question: "Placeholder B2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B2_L007", question: "Placeholder B2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "B2_L008", question: "Placeholder B2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" }
    ],
    pronunciation: [
        { id: "B2_P001", question: "Placeholder B2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B2_P002", question: "Placeholder B2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B2_P003", question: "Placeholder B2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B2_P004", question: "Placeholder B2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B2_P005", question: "Placeholder B2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B2_P006", question: "Placeholder B2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "B2_P007", question: "Placeholder B2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" }
    ]
};

const QUESTION_POOL_C1 = {
    vocabulary: [
        { id: "C1_V001", question: "Placeholder C1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C1_V002", question: "Placeholder C1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C1_V003", question: "Placeholder C1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C1_V004", question: "Placeholder C1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C1_V005", question: "Placeholder C1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C1_V006", question: "Placeholder C1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C1_V007", question: "Placeholder C1 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" }
    ],
    grammar: [
        { id: "C1_G001", question: "Placeholder C1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C1_G002", question: "Placeholder C1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C1_G003", question: "Placeholder C1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C1_G004", question: "Placeholder C1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C1_G005", question: "Placeholder C1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C1_G006", question: "Placeholder C1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C1_G007", question: "Placeholder C1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C1_G008", question: "Placeholder C1 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" }
    ],
    listening: [
        { id: "C1_L001", question: "Placeholder C1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C1_L002", question: "Placeholder C1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C1_L003", question: "Placeholder C1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C1_L004", question: "Placeholder C1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C1_L005", question: "Placeholder C1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C1_L006", question: "Placeholder C1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C1_L007", question: "Placeholder C1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C1_L008", question: "Placeholder C1 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" }
    ],
    pronunciation: [
        { id: "C1_P001", question: "Placeholder C1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C1_P002", question: "Placeholder C1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C1_P003", question: "Placeholder C1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C1_P004", question: "Placeholder C1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C1_P005", question: "Placeholder C1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C1_P006", question: "Placeholder C1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C1_P007", question: "Placeholder C1 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" }
    ]
};

const QUESTION_POOL_C2 = {
    vocabulary: [
        { id: "C2_V001", question: "Placeholder C2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C2_V002", question: "Placeholder C2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C2_V003", question: "Placeholder C2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C2_V004", question: "Placeholder C2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C2_V005", question: "Placeholder C2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C2_V006", question: "Placeholder C2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" },
        { id: "C2_V007", question: "Placeholder C2 Vocab", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "vocabulary" }
    ],
    grammar: [
        { id: "C2_G001", question: "Placeholder C2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C2_G002", question: "Placeholder C2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C2_G003", question: "Placeholder C2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C2_G004", question: "Placeholder C2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C2_G005", question: "Placeholder C2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C2_G006", question: "Placeholder C2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C2_G007", question: "Placeholder C2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" },
        { id: "C2_G008", question: "Placeholder C2 Grammar", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "grammar" }
    ],
    listening: [
        { id: "C2_L001", question: "Placeholder C2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C2_L002", question: "Placeholder C2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C2_L003", question: "Placeholder C2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C2_L004", question: "Placeholder C2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C2_L005", question: "Placeholder C2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C2_L006", question: "Placeholder C2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C2_L007", question: "Placeholder C2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" },
        { id: "C2_L008", question: "Placeholder C2 Listening", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "listening" }
    ],
    pronunciation: [
        { id: "C2_P001", question: "Placeholder C2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C2_P002", question: "Placeholder C2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C2_P003", question: "Placeholder C2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C2_P004", question: "Placeholder C2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C2_P005", question: "Placeholder C2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C2_P006", question: "Placeholder C2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" },
        { id: "C2_P007", question: "Placeholder C2 Pron", options: ["A", "B", "C", "D"], correctIndex: 0, explanation: "Placeholder", component: "pronunciation" }
    ]
};


window.QUESTION_POOL_A2 = QUESTION_POOL_A2;
window.QUESTION_POOL_B1 = QUESTION_POOL_B1;
window.QUESTION_POOL_B2 = QUESTION_POOL_B2;
window.QUESTION_POOL_C1 = QUESTION_POOL_C1;
window.QUESTION_POOL_C2 = QUESTION_POOL_C2;
