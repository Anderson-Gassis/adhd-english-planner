/**
 * VERB HYPERFOCUS ARENA
 * Pedagogical, visual and interactive engine designed for ADHD learners to master Past & Future verb conjugations.
 * Uses color-coding, phonetic grouping (sound families), kinesthetic word blocks, and visual timelines.
 */

const VERBS_ARENA_DATA = {
    // Sentences Gym categorized by level & tense
    sentences: [
        // LEVEL 1: A1-A2 (Básico - 10 items)
        {
            level: "A1-A2",
            tense: "past",
            aspect: "simple",
            instruction: "Monte a frase no PASSADO SIMPLES: 'Nós fomos para o escritório ontem.'",
            words: ["We", "went", "to", "the", "office", "yesterday", "go", "tomorrow", "will"],
            correctOrder: ["We", "went", "to", "the", "office", "yesterday"],
            explanation: "<b>went</b> é o passado irregular de <b>go</b>. <i>yesterday</i> (ontem) é a âncora temporal do passado.",
            pronunciation: "We went to the office yesterday."
        },
        {
            level: "A1-A2",
            tense: "past",
            aspect: "simple",
            instruction: "Monte a frase no PASSADO SIMPLES (Verbo Regular): 'Ela trabalhou no relatório ontem à noite.'",
            words: ["She", "worked", "on", "the", "report", "last", "night", "works", "working"],
            correctOrder: ["She", "worked", "on", "the", "report", "last", "night"],
            explanation: "Para verbos regulares como <b>work</b>, adicionamos <b>-ed</b> no final no passado simples (<b>worked</b>). <i>last night</i> é o marcador temporal.",
            pronunciation: "She worked on the report last night."
        },
        {
            level: "A1-A2",
            tense: "future",
            aspect: "simple",
            instruction: "Monte a frase no FUTURO SIMPLES com 'going to': 'Eu vou estudar inglês amanhã.'",
            words: ["I", "am", "going", "to", "study", "English", "tomorrow", "will", "studied"],
            correctOrder: ["I", "am", "going", "to", "study", "English", "tomorrow"],
            explanation: "Usamos <b>am going to + verbo</b> para planos futuros bem definidos. <i>tomorrow</i> (amanhã) é a âncora do futuro.",
            pronunciation: "I am going to study English tomorrow."
        },
        {
            level: "A1-A2",
            tense: "future",
            aspect: "simple",
            instruction: "Monte a frase no FUTURO SIMPLES (Previsão): 'Eles ligarão para você mais tarde.'",
            words: ["They", "will", "call", "you", "later", "called", "calling", "going"],
            correctOrder: ["They", "will", "call", "you", "later"],
            explanation: "Usamos <b>will + verbo</b> no infinitivo (sem 'to') para decisões imediatas ou previsões no futuro.",
            pronunciation: "They will call you later."
        },
        {
            level: "A1-A2",
            tense: "present",
            aspect: "simple",
            instruction: "Monte a frase no PRESENTE SIMPLES: 'Ele trabalha em uma startup de tecnologia.'",
            words: ["He", "works", "at", "a", "technology", "startup", "work", "working", "worked"],
            correctOrder: ["He", "works", "at", "a", "technology", "startup"],
            explanation: "Para a 3ª pessoa do singular (He), o verbo <b>work</b> ganha o sufixo <b>-s</b> (<b>works</b>).",
            pronunciation: "He works at a technology startup."
        },
        {
            level: "A1-A2",
            tense: "present",
            aspect: "simple",
            instruction: "Monte a frase no PRESENTE SIMPLES: 'Ela vai ao banco nas segundas-feiras.'",
            words: ["She", "goes", "to", "the", "bank", "on", "Mondays", "go", "going", "went"],
            correctOrder: ["She", "goes", "to", "the", "bank", "on", "Mondays"],
            explanation: "Verbos terminados em -o (como go) ganham <b>-es</b> na 3ª pessoa do singular (<b>goes</b>).",
            pronunciation: "She goes to the bank on Mondays."
        },
        {
            level: "A1-A2",
            tense: "present",
            aspect: "continuous",
            instruction: "Monte a frase no PRESENTE CONTÍNUO: 'Eu estou usando o ambiente de homologação agora.'",
            words: ["I", "am", "using", "the", "staging", "environment", "now", "use", "uses", "used"],
            correctOrder: ["I", "am", "using", "the", "staging", "environment", "now"],
            explanation: "O Presente Contínuo descreve ações que ocorrem exatamente agora, estruturado por <b>be (am) + verbo-ing (using)</b>.",
            pronunciation: "I am using the staging environment now."
        },
        {
            level: "A1-A2",
            tense: "present",
            aspect: "continuous",
            instruction: "Monte a frase no PRESENTE CONTÍNUO: 'Eles estão programando uma nova funcionalidade.'",
            words: ["They", "are", "coding", "a", "new", "feature", "code", "codes", "coded"],
            correctOrder: ["They", "are", "coding", "a", "new", "feature"],
            explanation: "Como o sujeito é 'They', usamos a flexão <b>are</b> do verbo be seguido do verbo com ing (<b>coding</b>).",
            pronunciation: "They are coding a new feature."
        },
        {
            level: "A1-A2",
            tense: "present",
            aspect: "simple",
            instruction: "Monte a frase no PRESENTE com o verbo to be: 'Nós estamos prontos para a reunião diária.'",
            words: ["We", "are", "ready", "for", "the", "daily", "meeting", "is", "am", "was"],
            correctOrder: ["We", "are", "ready", "for", "the", "daily", "meeting"],
            explanation: "O sujeito plural <b>We</b> exige a flexão <b>are</b> no presente simples.",
            pronunciation: "We are ready for the daily meeting."
        },
        {
            level: "A1-A2",
            tense: "past",
            aspect: "simple",
            instruction: "Monte a frase NEGATIVA no passado: 'Ele não enviou o e-mail.'",
            words: ["He", "did", "not", "send", "the", "email", "sent", "does", "no"],
            correctOrder: ["He", "did", "not", "send", "the", "email"],
            explanation: "Na forma negativa do passado, usamos o auxiliar <b>did not / didn't</b> e o verbo volta para a forma base (<b>send</b>).",
            pronunciation: "He did not send the email."
        },
        
        // LEVEL 2: B1-B2 (Intermediário - 10 items)
        {
            level: "B1-B2",
            tense: "past",
            aspect: "continuous",
            instruction: "Monte a frase no PASSADO CONTÍNUO: 'Eu estava trabalhando quando você ligou.'",
            words: ["I", "was", "working", "when", "you", "called", "were", "call", "did"],
            correctOrder: ["I", "was", "working", "when", "you", "called"],
            explanation: "O Passado Contínuo (<b>was working</b>) descreve uma ação em andamento que foi interrompida por outra no passado simples (<b>called</b>).",
            pronunciation: "I was working when you called."
        },
        {
            level: "B1-B2",
            tense: "past",
            aspect: "perfect",
            instruction: "Monte a frase no PASSADO PERFEITO: 'Eles já tinham saído quando eu cheguei.'",
            words: ["They", "had", "already", "left", "when", "I", "arrived", "have", "go", "did"],
            correctOrder: ["They", "had", "already", "left", "when", "I", "arrived"],
            explanation: "O Passado Perfeito (<b>had left</b>) descreve um evento que ocorreu <i>antes</i> de outro evento no passado (<b>arrived</b>).",
            pronunciation: "They had already left when I arrived."
        },
        {
            level: "B1-B2",
            tense: "future",
            aspect: "continuous",
            instruction: "Monte a frase no FUTURO CONTÍNUO: 'A esta hora amanhã, nós estaremos voando para Londres.'",
            words: ["This", "time", "tomorrow", "we", "will", "be", "flying", "to", "London", "are", "fly"],
            correctOrder: ["This", "time", "tomorrow", "we", "will", "be", "flying", "to", "London"],
            explanation: "O Futuro Contínuo (<b>will be flying</b>) expressa uma ação que estará em andamento em um momento específico do futuro.",
            pronunciation: "This time tomorrow we will be flying to London."
        },
        {
            level: "B1-B2",
            tense: "future",
            aspect: "perfect",
            instruction: "Monte a frase no FUTURO PERFEITO: 'Até sexta-feira, eu terei terminado o projeto.'",
            words: ["By", "Friday", "I", "will", "have", "finished", "the", "project", "had", "finish", "to"],
            correctOrder: ["By", "Friday", "I", "will", "have", "finished", "the", "project"],
            explanation: "O Futuro Perfeito (<b>will have finished</b>) expressa uma ação que estará concluída <i>antes</i> de um limite temporal no futuro (<i>by Friday</i>).",
            pronunciation: "By Friday I will have finished the project."
        },
        {
            level: "B1-B2",
            tense: "present",
            aspect: "perfect",
            instruction: "Monte a frase no PRESENTE PERFEITO: 'Nossa empresa passou por um crescimento rápido.'",
            words: ["Our", "company", "has", "experienced", "rapid", "growth", "have", "experienceded", "grow"],
            correctOrder: ["Our", "company", "has", "experienced", "rapid", "growth"],
            explanation: "O Presente Perfeito (<b>has experienced</b>) é usado para relatar experiências ou eventos que afetam o presente.",
            pronunciation: "Our company has experienced rapid growth."
        },
        {
            level: "B1-B2",
            tense: "past",
            aspect: "continuous",
            instruction: "Monte a frase no passado contínuo interrompido: 'Nós estávamos testando o servidor quando ele travou.'",
            words: ["We", "were", "testing", "the", "server", "when", "it", "crashed", "was", "test", "crashes"],
            correctOrder: ["We", "were", "testing", "the", "server", "when", "it", "crashed"],
            explanation: "Ação prolongada (<b>were testing</b>) interrompida por uma ação simples (<b>crashed</b>) no passado.",
            pronunciation: "We were testing the server when it crashed."
        },
        {
            level: "B1-B2",
            tense: "future",
            aspect: "perfect",
            instruction: "Monte a frase no futuro perfeito: 'Nós teremos entregado o projeto até o próximo mês.'",
            words: ["We", "will", "have", "delivered", "the", "project", "by", "next", "month", "delivereded", "has", "deliver"],
            correctOrder: ["We", "will", "have", "delivered", "the", "project", "by", "next", "month"],
            explanation: "A estrutura de futuro perfeito (<b>will have delivered</b>) indica um resultado concluído antes do marco temporal (<b>by next month</b>).",
            pronunciation: "We will have delivered the project by next month."
        },
        {
            level: "B1-B2",
            tense: "present",
            aspect: "perfect",
            instruction: "Monte a frase de duração: 'Ela trabalha aqui há três anos.'",
            words: ["She", "has", "worked", "here", "for", "three", "years", "have", "works", "working"],
            correctOrder: ["She", "has", "worked", "here", "for", "three", "years"],
            explanation: "Como a ação iniciou no passado e permanece ativa, usamos o Present Perfect (<b>has worked</b>) acompanhado de <b>for</b> (duração).",
            pronunciation: "She has worked here for three years."
        },
        {
            level: "B1-B2",
            tense: "past",
            aspect: "perfect",
            instruction: "Monte a frase de prevenção no passado: 'Ele tinha feito backup dos arquivos antes do ataque.'",
            words: ["He", "had", "backed", "up", "the", "files", "before", "the", "attack", "has", "back", "backed-up"],
            correctOrder: ["He", "had", "backed", "up", "the", "files", "before", "the", "attack"],
            explanation: "Ação concluída (<b>had backed up</b>) antes de outro evento passado (<b>attack</b>).",
            pronunciation: "He had backed up the files before the attack."
        },
        {
            level: "B1-B2",
            tense: "future",
            aspect: "simple",
            instruction: "Monte a frase com promessa futura: 'O time de suporte irá lhe ajudar em breve.'",
            words: ["The", "support", "team", "will", "assist", "you", "shortly", "going", "to", "assisted"],
            correctOrder: ["The", "support", "team", "will", "assist", "you", "shortly"],
            explanation: "Usamos <b>will assist</b> para expressar previsões ou promessas de suporte futuro.",
            pronunciation: "The support team will assist you shortly."
        },

        // LEVEL 3: C1-C2 (Avançado/Nativo - 10 items)
        {
            level: "C1-C2",
            tense: "past",
            aspect: "conditional",
            instruction: "Monte a frase com a CONDICIONAL DO PASSADO (Third Conditional): 'Se eu soubesse, eu teria chegado mais cedo.'",
            words: ["If", "I", "had", "known", "I", "would", "have", "arrived", "earlier", "know", "will", "hadn't"],
            correctOrder: ["If", "I", "had", "known", "I", "would", "have", "arrived", "earlier"],
            explanation: "A <b>Third Conditional</b> expressa cenários hipotéticos no passado. A estrutura é <b>If + Past Perfect (had known) + would have + past participle (arrived)</b>.",
            pronunciation: "If I had known I would have arrived earlier."
        },
        {
            level: "C1-C2",
            tense: "future",
            aspect: "perfect-continuous",
            instruction: "Monte a frase no FUTURO PERFEITO CONTÍNUO: 'Em dezembro, eu estarei trabalhando aqui há cinco anos.'",
            words: ["By", "December", "I", "will", "have", "been", "working", "here", "for", "five", "years", "had", "be"],
            correctOrder: ["By", "December", "I", "will", "have", "been", "working", "here", "for", "five", "years"],
            explanation: "O Futuro Perfeito Contínuo (<b>will have been working</b>) enfatiza a <i>duração</i> de uma ação até um determinado ponto no futuro.",
            pronunciation: "By December I will have been working here for five years."
        },
        {
            level: "C1-C2",
            tense: "present",
            aspect: "inversion",
            instruction: "Monte a frase com inversão literária/formal: 'Raramente eles implantam código sem testes automatizados.'",
            words: ["Seldom", "do", "they", "deploy", "code", "without", "automated", "testing", "does", "deployed"],
            correctOrder: ["Seldom", "do", "they", "deploy", "code", "without", "automated", "testing"],
            explanation: "Após advérbios restritivos negativos (como <b>Seldom</b>), invertemos o auxiliar (<b>do</b>) com o sujeito (<b>they</b>) para ênfase formal.",
            pronunciation: "Seldom do they deploy code without automated testing."
        },
        {
            level: "C1-C2",
            tense: "past",
            aspect: "inversion",
            instruction: "Monte a frase de condição invertida (sem 'if'): 'Se tivessem nos informado, teríamos ajudado.'",
            words: ["Had", "they", "informed", "us", "we", "would", "have", "helped", "If", "hadn't"],
            correctOrder: ["Had", "they", "informed", "us", "we", "would", "have", "helped"],
            explanation: "A inversão de condicionais no passado omite o 'if' e traz o auxiliar <b>Had</b> para a frente do sujeito (<b>Had they informed us</b>).",
            pronunciation: "Had they informed us we would have helped."
        },
        {
            level: "C1-C2",
            tense: "past",
            aspect: "conditional",
            instruction: "Monte a frase com double-had: 'Ele teria escrito o script se tivesse tido tempo.'",
            words: ["He", "would", "have", "written", "the", "script", "if", "he", "had", "had", "time", "has", "wrote"],
            correctOrder: ["He", "would", "have", "written", "the", "script", "if", "he", "had", "had", "time"],
            explanation: "O Past Perfect do verbo 'have' exige a estrutura auxiliar <b>had</b> + particípio <b>had</b> (tido), resultando na escrita 'had had'.",
            pronunciation: "He would have written the script if he had had time."
        },
        {
            level: "C1-C2",
            tense: "future",
            aspect: "perfect-continuous",
            instruction: "Monte a frase no futuro contínuo perfeito: 'À meia-noite, nós estaremos programando há dez horas.'",
            words: ["By", "midnight", "we", "will", "have", "been", "coding", "for", "ten", "hours", "codinged", "had", "be"],
            correctOrder: ["By", "midnight", "we", "will", "have", "been", "coding", "for", "ten", "hours"],
            explanation: "O Future Perfect Continuous enfatiza a duração acumulada (<b>will have been coding</b>) no marco futuro (<b>by midnight</b>).",
            pronunciation: "By midnight we will have been coding for ten hours."
        },
        {
            level: "C1-C2",
            tense: "future",
            aspect: "inversion",
            instruction: "Monte a frase de forte restrição negativa: 'Em circunstância alguma nós concordaremos com estes termos.'",
            words: ["Under", "no", "circumstances", "will", "we", "agree", "to", "these", "terms", "we", "will", "agreeing"],
            correctOrder: ["Under", "no", "circumstances", "will", "we", "agree", "to", "these", "terms"],
            explanation: "A frase adverbial negativa <b>Under no circumstances</b> atrai a inversão do auxiliar de futuro (<b>will</b>) antes do sujeito (<b>we</b>).",
            pronunciation: "Under no circumstances will we agree to these terms."
        },
        {
            level: "C1-C2",
            tense: "past",
            aspect: "conditional",
            instruction: "Monte a frase com condicional de be no particípio: 'Se o servidor estivesse online, nós teríamos visto.'",
            words: ["If", "the", "server", "had", "been", "online", "we", "would", "have", "seen", "it", "was", "saw"],
            correctOrder: ["If", "the", "server", "had", "been", "online", "we", "would", "have", "seen", "it"],
            explanation: "Uso de <b>had been</b> (particípio de be) combinado com <b>would have seen</b> (particípio de see) no Third Conditional.",
            pronunciation: "If the server had been online we would have seen it."
        },
        {
            level: "C1-C2",
            tense: "present",
            aspect: "inversion",
            instruction: "Monte a frase com inversão no Present Perfect: 'Raramente eu vi um projeto tão bem estruturado.'",
            words: ["Rarely", "have", "I", "seen", "such", "a", "well-structured", "project", "I", "has", "saw"],
            correctOrder: ["Rarely", "have", "I", "seen", "such", "a", "well-structured", "project"],
            explanation: "A inversão após o advérbio <b>Rarely</b> desloca o auxiliar <b>have</b> para antes do sujeito <b>I</b>.",
            pronunciation: "Rarely have I seen such a well-structured project."
        },
        {
            level: "C1-C2",
            tense: "future",
            aspect: "inversion",
            instruction: "Monte a inversão proibitiva de segurança: 'Em circunstância alguma você deve fazer deploy de código sem testes.'",
            words: ["Under", "no", "circumstances", "should", "you", "deploy", "code", "without", "testing", "deployed", "must", "not"],
            correctOrder: ["Under", "no", "circumstances", "should", "you", "deploy", "code", "without", "testing"],
            explanation: "Inversão com o auxiliar modal <b>should</b> posicionado antes do sujeito <b>you</b> após <b>Under no circumstances</b>.",
            pronunciation: "Under no circumstances should you deploy code without testing."
        }
    ]
};

// Rules database for visual guide and contextual help
const RULES_DATA = {
    present: [
        {
            title: "Presente Simples (Present Simple)",
            desc: "Usado para expressar hábitos, rotinas, fatos gerais ou verdades universais. Com he/she/it, adicionamos <b>-s</b>, <b>-es</b> ou <b>-ies</b> no final.",
            formula: ["Sujeito", "+", "Verbo (+s/es/ies para He/She/It)", "+", "Complemento"],
            example: "He works every day.",
            mnemonic: "He/She/It no presente ganha 'S' (like -> likes, go -> goes, study -> studies). Para negativos e perguntas, use DO/DOES.",
            tense: "present",
            aspect: "simple"
        }
    ],
    past: [
        {
            title: "Passado Simples Regular (-ed)",
            desc: "Usado para ações que começaram e terminaram no passado. Para a maioria dos verbos regulares, basta colocar <b>-ed</b> no final do verbo.",
            formula: ["Sujeito", "+", "Verbo + ed", "+", "Complemento"],
            example: "I worked yesterday.",
            mnemonic: "Se o verbo termina em E, acrescente apenas D (like ➔ liked). Se termina em consoante + Y, troque por IED (study ➔ studied).",
            tense: "past",
            aspect: "simple"
        },
        {
            title: "Passado Simples Irregular (Forma Própria)",
            desc: "Verbos irregulares não seguem a regra do '-ed'. Eles mudam de escrita completamente ou continuam iguais. Devem ser aprendidos por associação e repetição.",
            formula: ["Sujeito", "+", "Verbo Irregular", "+", "Complemento"],
            example: "We went to the office.",
            mnemonic: "Não coloque ED neles! Go vira went, buy vira bought, write vira wrote, go vira went.",
            tense: "past",
            aspect: "simple-irregular"
        }
    ],
    future: [
        {
            title: "Futuro com WILL (Previsões & Decisões)",
            desc: "Usado para decisões rápidas de momento, promessas, ofertas imediatas ou previsões genéricas.",
            formula: ["Sujeito", "+", "will", "+", "Verbo Base", "+", "Complemento"],
            example: "I will call you later.",
            mnemonic: "O verbo principal sempre fica na forma normal, sem 'to' e sem alteração (will go, will call).",
            tense: "future",
            aspect: "simple"
        },
        {
            title: "Futuro com GOING TO (Planos & Intenções)",
            desc: "Usado para planos estruturados no futuro, decisões já planejadas antes de falar, ou previsões com base em evidências atuais.",
            formula: ["Sujeito", "+", "am / is / are", "+", "going to", "+", "Verbo Base", "+", "Complemento"],
            example: "I am going to study English tomorrow.",
            mnemonic: "Não esqueça de flexionar o verbo to be (am/is/are) correspondente ao sujeito antes do going to!",
            tense: "future",
            aspect: "going-to"
        }
    ],
    advanced: [
        {
            title: "Passado Contínuo (Past Continuous)",
            desc: "Ações que estavam acontecendo em um momento específico do passado, frequentemente interrompidas por outra ação rápida.",
            formula: ["Sujeito", "+", "was / were", "+", "Verbo + ing", "+", "Complemento"],
            example: "I was working when you called.",
            mnemonic: "Use WAS para I/He/She/It e WERE para You/We/They.",
            tense: "past",
            aspect: "continuous"
        },
        {
            title: "Passado Perfeito (Past Perfect)",
            desc: "Ação no passado que ocorreu ANTES de outra ação também no passado.",
            formula: ["Sujeito", "+", "had", "+", "Particípio Passado", "+", "Complemento"],
            example: "They had already left when I arrived.",
            mnemonic: "O passado perfeito é o passado do passado! A estrutura sempre leva HAD.",
            tense: "past",
            aspect: "perfect"
        },
        {
            title: "Futuro Contínuo (Future Continuous)",
            desc: "Ação em andamento que estará ocorrendo em um momento específico no futuro.",
            formula: ["Sujeito", "+", "will be", "+", "Verbo + ing", "+", "Complemento"],
            example: "This time tomorrow we will be flying to London.",
            mnemonic: "Use a estrutura fixa WILL BE e adicione ING ao verbo principal.",
            tense: "future",
            aspect: "continuous"
        },
        {
            title: "Futuro Perfeito (Future Perfect)",
            desc: "Ação que estará completamente concluída antes de um limite de tempo no futuro.",
            formula: ["Sujeito", "+", "will have", "+", "Particípio Passado", "+", "Complemento"],
            example: "By Friday I will have finished the project.",
            mnemonic: "Costuma vir acompanhado de expressões com 'By' (By next year, By tomorrow).",
            tense: "future",
            aspect: "perfect"
        },
        {
            title: "Condicional do Passado (Third Conditional)",
            desc: "Situações hipotéticas ou arrependimentos no passado que não podem mais ser alterados.",
            formula: ["If", "+", "Sujeito", "+", "had + Particípio", ",", "Sujeito", "+", "would have + Particípio"],
            example: "If I had known I would have arrived earlier.",
            mnemonic: "Se trata de um passado imaginário: 'Se eu tivesse feito isso, aquilo teria acontecido'.",
            tense: "past",
            aspect: "conditional"
        },
        {
            title: "Futuro Perfeito Contínuo",
            desc: "Expressa a duração acumulada de uma ação até um determinado ponto no futuro.",
            formula: ["Sujeito", "+", "will have been", "+", "Verbo + ing", "+", "Complemento"],
            example: "By December I will have been working here for five years.",
            mnemonic: "Combina a ideia de conclusão no futuro (will have) com a continuidade (been working).",
            tense: "future",
            aspect: "perfect-continuous"
        }
    ]
};

// Global state of the Verb Arena
const verbArenaState = {
    activeActivity: "rules", // default starting tab
    rulesTab: "present",
    rulesPracticeUnlocked: false,
    // Timeline activity states
    timelineSelectedVerb: null,
    timelineSelectedTense: "present",
    timelineAssembledWords: [],
    // Gym activity states
    gymLevel: "A1-A2",
    gymIndex: 0,
    gymAssembledWords: [],
    gymStreak: 0
};

// Available verbs for Activity 1 (Timeline Builder)
const TIMELINE_VERBS = [
    { base: "go", present: "goes", past: "went", future: "will go", meaning: "ir", type: "irregular", sentencePresent: "She goes to the bank on Mondays.", sentencePast: "She went to the bank yesterday.", sentenceFuture: "She will go to the bank tomorrow." },
    { base: "work", present: "works", past: "worked", future: "will work", meaning: "trabalhar", type: "regular", sentencePresent: "I work from home every Friday.", sentencePast: "I worked from home last Monday.", sentenceFuture: "I will work from home tomorrow." },
    { base: "write", present: "writes", past: "wrote", future: "will write", meaning: "escrever", type: "irregular", sentencePresent: "He writes the weekly progress report.", sentencePast: "He wrote an email to his boss this morning.", sentenceFuture: "He will write a report tomorrow." },
    { base: "buy", present: "buys", past: "bought", future: "will buy", meaning: "comprar", type: "irregular", sentencePresent: "They buy new software packages regularly.", sentencePast: "They bought a new software package yesterday.", sentenceFuture: "They will buy new devices next month." },
    { base: "call", present: "calls", past: "called", future: "will call", meaning: "ligar", type: "regular", sentencePresent: "We call a meeting every Monday morning.", sentencePast: "We called a meeting two hours ago.", sentenceFuture: "We will call you in a few minutes." },
    { base: "study", present: "studies", past: "studied", future: "will study", meaning: "estudar", type: "regular", sentencePresent: "She studies English vocabulary daily.", sentencePast: "She studied the layout yesterday afternoon.", sentenceFuture: "She will study the certification course tomorrow." },
    { base: "code", present: "codes", past: "coded", future: "will code", meaning: "programar", type: "regular", sentencePresent: "He codes backend APIs in Python.", sentencePast: "He coded the payment module last week.", sentenceFuture: "He will code the user interface next sprint." },
    { base: "use", present: "uses", past: "used", future: "will use", meaning: "usar", type: "regular", sentencePresent: "The team uses Git for version control.", sentencePast: "The designer used Figma for the mockups.", sentenceFuture: "We will use the staging database tomorrow." },
    { base: "speak", present: "speaks", past: "spoke", future: "will speak", meaning: "falar", type: "irregular", sentencePresent: "She speaks English in team meetings.", sentencePast: "We spoke with the manager this morning.", sentenceFuture: "They will speak with the client tomorrow." },
    { base: "make", present: "makes", past: "made", future: "will make", meaning: "fazer", type: "irregular", sentencePresent: "He makes presentations for the stakeholders.", sentencePast: "They made a critical mistake in production.", sentenceFuture: "We will make progress on the project." },
    { base: "find", present: "finds", past: "found", future: "will find", meaning: "encontrar", type: "irregular", sentencePresent: "She finds bugs very quickly.", sentencePast: "I found a database error last night.", sentenceFuture: "They will find the root cause soon." },
    { base: "send", present: "sends", past: "sent", future: "will send", meaning: "enviar", type: "irregular", sentencePresent: "He sends the report to the client daily.", sentencePast: "We sent the email two hours ago.", sentenceFuture: "I will send the files tomorrow." },
    { base: "build", present: "builds", past: "built", future: "will build", meaning: "construir", type: "irregular", sentencePresent: "Our team builds scalable tech products.", sentencePast: "They built a new mobile app last year.", sentenceFuture: "We will build a payment gateway next." },
    { base: "check", present: "checks", past: "checked", future: "will check", meaning: "verificar", type: "regular", sentencePresent: "She checks the server logs every morning.", sentencePast: "I checked the backup files yesterday.", sentenceFuture: "They will check the system status later." },
    { base: "test", present: "tests", past: "tested", future: "will test", meaning: "testar", type: "regular", sentencePresent: "The QA team tests the application thoroughly.", sentencePast: "We tested the payment flow yesterday afternoon.", sentenceFuture: "He will test the new update tomorrow." }
];

/**
 * Initialize the Verb Arena Module
 */
function initVerbArena() {
    console.log("[Verbs Arena] Initializing...");
    
    // Set up tab events
    const arenaTabs = document.querySelectorAll('.btn-arena-tab');
    arenaTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.arenaTab;
            
            // ADHD Scaffolding: Lock practice if they haven't unlocked yet
            if (target !== "rules" && !verbArenaState.rulesPracticeUnlocked) {
                alert("🔒 Por favor, revise as regras básicas no 'Guia de Regras' e clique em 'Iniciar Prática' para liberar os exercícios!");
                return;
            }

            arenaTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            verbArenaState.activeActivity = target;
            
            // Switch views
            document.querySelectorAll('.arena-view-pane').forEach(pane => pane.classList.add('hidden'));
            document.getElementById(`arena-view-${target}`).classList.remove('hidden');
            
            // Render specific activity
            if (target === "rules") {
                renderRulesActivity();
            } else if (target === "timeline") {
                renderTimelineActivity();
            } else if (target === "gym") {
                initGymActivity();
            }
        });
    });

    // Default load Rules Activity
    renderRulesActivity();
}

/* ==========================================
   ACTIVITY 0: RULES GUIDE (GUIA DE REGRAS INTERATIVO)
   ========================================== */
function renderRulesActivity() {
    const rulesTabs = document.querySelectorAll('.rules-lvl-btn');
    rulesTabs.forEach(tab => {
        tab.onclick = () => {
            rulesTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            verbArenaState.rulesTab = tab.dataset.rulesTab;
            renderRulesBody();
        };
    });

    renderRulesBody();
}

function renderRulesBody() {
    const container = document.getElementById('rules-content-body');
    if (!container) return;

    const rules = RULES_DATA[verbArenaState.rulesTab];
    container.innerHTML = '';

    rules.forEach(r => {
        const card = document.createElement('div');
        card.className = "rule-card glass";
        
        // Build formula tags
        const formulaHtml = r.formula.map(f => {
            let cl = "formula-block";
            if (f === "+" || f === "," || f === "/") cl += " operator";
            else if (f.toLowerCase() === "complemento") cl += " complement";
            return `<span class="${cl}">${f}</span>`;
        }).join("");

        card.innerHTML = `
            <div class="rule-card-header">
                <span style="font-size:16px;">💡</span>
                <h3>${r.title}</h3>
            </div>
            <p style="font-size:13px; line-height:1.4; color:#dfdfdf;">${r.desc}</p>
            <div class="formula-container">
                <span style="font-size:10px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-right:8px;">Estrutura:</span>
                ${formulaHtml}
            </div>
            <div class="rule-example" style="margin-top:4px; font-size:13px; display:flex; align-items:center; gap:8px;">
                <strong>Exemplo Prático:</strong>
                <em style="color:var(--secondary); font-weight:600;">"${r.example}"</em>
                <button class="btn btn-sm btn-icon-only btn-tts" style="background:none; border:none; color:var(--secondary); cursor:pointer; padding:2px; font-size:14px;" onclick="speakEnglish('${r.example}')" title="Ouvir pronúncia">🔊</button>
            </div>
            <div class="rule-mnemonic" style="margin-top:6px; font-size:12px; padding:8px 12px; background:rgba(255,255,255,0.02); border-radius:4px; border-left:3px solid var(--warning); color:var(--warning); line-height: 1.3;">
                <strong>Mnemônico TDAH:</strong> ${r.mnemonic}
            </div>
        `;
        container.appendChild(card);
    });
}

function unlockVerbPractice() {
    verbArenaState.rulesPracticeUnlocked = true;
    
    // Play dopamine feedback
    if (window.confetti) window.confetti.start(1000);
    if (typeof audioPlayer !== 'undefined' && audioPlayer) audioPlayer.playDopamineTone();
    
    // Switch to timeline practice automatically
    const timelineTab = document.querySelector('.btn-arena-tab[data-arena-tab="timeline"]');
    if (timelineTab) timelineTab.click();
}

/* ==========================================
   HELP OVERLAY LOGIC (SUPORTE TDAH EM TEMPO REAL)
   ========================================== */
function showActiveRuleHelp(activityType) {
    let targetTense = '';
    let targetAspect = '';

    if (activityType === 'timeline') {
        targetTense = verbArenaState.timelineSelectedTense; // 'past' or 'future'
        // For timeline builder, let's check if selected verb is irregular
        const verb = verbArenaState.timelineSelectedVerb;
        if (targetTense === 'past') {
            targetAspect = (verb && verb.type === 'irregular') ? 'simple-irregular' : 'simple';
        } else {
            targetAspect = 'simple';
        }
    } else if (activityType === 'gym') {
        const list = VERBS_ARENA_DATA.sentences.filter(s => s.level === verbArenaState.gymLevel);
        const ex = list[verbArenaState.gymIndex];
        if (ex) {
            targetTense = ex.tense; // 'past' or 'future'
            targetAspect = ex.aspect; // 'simple', 'continuous', 'perfect', 'conditional', etc.
        }
    }

    // Find rule in RULES_DATA
    let matchingRule = null;
    
    // Flatten all rules to search
    const allRules = [...RULES_DATA.present, ...RULES_DATA.past, ...RULES_DATA.future, ...RULES_DATA.advanced];
    
    matchingRule = allRules.find(r => r.tense === targetTense && r.aspect === targetAspect);
    
    // Fallback if not found exact aspect (e.g. simple-irregular fallback to simple)
    if (!matchingRule) {
        matchingRule = allRules.find(r => r.tense === targetTense);
    }

    const helpBody = document.getElementById('rule-help-body');
    const modal = document.getElementById('rule-help-modal');
    if (!helpBody || !modal) return;

    if (matchingRule) {
        const formulaHtml = matchingRule.formula.map(f => {
            let cl = "formula-block";
            if (f === "+" || f === "," || f === "/") cl += " operator";
            else if (f.toLowerCase() === "complemento") cl += " complement";
            return `<span class="${cl}">${f}</span>`;
        }).join("");

        helpBody.innerHTML = `
            <h3 style="font-family: var(--font-heading); font-size: 18px; color: var(--secondary); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">📖 Regra: ${matchingRule.title}</h3>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.4; margin-bottom: 14px;">${matchingRule.desc}</p>
            <div class="formula-container" style="margin-bottom: 14px;">
                <span style="font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-right: 8px;">Estrutura:</span>
                ${formulaHtml}
            </div>
            <div style="font-size: 13px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <strong>Exemplo:</strong>
                <em style="color: var(--secondary); font-weight: 600;">"${matchingRule.example}"</em>
                <button class="btn btn-sm btn-icon-only btn-tts" style="background:none; border:none; color:var(--secondary); cursor:pointer; padding:2px; font-size:14px;" onclick="speakEnglish('${matchingRule.example}')">🔊</button>
            </div>
            <div style="font-size: 12px; padding: 10px; background: rgba(255,159,67,0.08); border-left: 3px solid var(--warning); border-radius: 4px; color: var(--warning); line-height: 1.3;">
                <strong>Macete de Ajuda:</strong> ${matchingRule.mnemonic}
            </div>
            <button class="btn btn-primary w-full" style="margin-top: 18px; height: 38px;" onclick="closeRuleHelp()">Voltar para o Exercício</button>
        `;
    } else {
        helpBody.innerHTML = `
            <h3>Dica Rápida</h3>
            <p>Conjugue o verbo de acordo com a instrução de tempo (passado/futuro) indicada na questão. Atente para verbos irregulares que mudam completamente de grafia.</p>
            <button class="btn btn-primary w-full" style="margin-top: 15px;" onclick="closeRuleHelp()">Voltar</button>
        `;
    }

    modal.classList.remove('hidden');
}

function closeRuleHelp() {
    const modal = document.getElementById('rule-help-modal');
    if (modal) modal.classList.add('hidden');
}

/* ==========================================
   ACTIVITY 1: TIMELINE BUILDER (CONSTRUTOR TEMPORAL)
   ========================================== */
function renderTimelineActivity() {
    const verbSelectContainer = document.getElementById('timeline-verb-select');
    if (!verbSelectContainer) return;

    // Render Verb buttons
    verbSelectContainer.innerHTML = '';
    TIMELINE_VERBS.forEach(v => {
        const btn = document.createElement('button');
        btn.className = `btn btn-outline btn-sm verb-select-btn ${verbArenaState.timelineSelectedVerb && verbArenaState.timelineSelectedVerb.base === v.base ? 'active' : ''}`;
        btn.innerHTML = `<strong>${v.base.toUpperCase()}</strong> <span style="font-size:10px; opacity:0.7;">(${v.meaning})</span>`;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.verb-select-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            verbArenaState.timelineSelectedVerb = v;
            updateTimelineWorkspace();
        });
    });

    // Set default verb if none selected
    if (!verbArenaState.timelineSelectedVerb) {
        verbArenaState.timelineSelectedVerb = TIMELINE_VERBS[0];
        const firstBtn = verbSelectContainer.querySelector('.verb-select-btn');
        if (firstBtn) firstBtn.classList.add('active');
    }

    // Set up Tense selectors
    const btnPresent = document.getElementById('timeline-tense-present');
    const btnPast = document.getElementById('timeline-tense-past');
    const btnFuture = document.getElementById('timeline-tense-future');
    
    if (btnPresent && btnPast && btnFuture) {
        btnPresent.classList.toggle('active', verbArenaState.timelineSelectedTense === 'present');
        btnPast.classList.toggle('active', verbArenaState.timelineSelectedTense === 'past');
        btnFuture.classList.toggle('active', verbArenaState.timelineSelectedTense === 'future');

        btnPresent.onclick = () => {
            btnPresent.classList.add('active');
            btnPast.classList.remove('active');
            btnFuture.classList.remove('active');
            verbArenaState.timelineSelectedTense = "present";
            updateTimelineWorkspace();
        };

        btnPast.onclick = () => {
            btnPast.classList.add('active');
            btnPresent.classList.remove('active');
            btnFuture.classList.remove('active');
            verbArenaState.timelineSelectedTense = "past";
            updateTimelineWorkspace();
        };

        btnFuture.onclick = () => {
            btnFuture.classList.add('active');
            btnPresent.classList.remove('active');
            btnPast.classList.remove('active');
            verbArenaState.timelineSelectedTense = "future";
            updateTimelineWorkspace();
        };
    }

    updateTimelineWorkspace();
}

function updateTimelineWorkspace() {
    const verb = verbArenaState.timelineSelectedVerb;
    const tense = verbArenaState.timelineSelectedTense;
    if (!verb) return;

    const timelineGraphic = document.getElementById('timeline-graphic-indicator');
    const grammarTip = document.getElementById('timeline-grammar-tip');
    const buildArea = document.getElementById('timeline-build-area');
    const dropZone = document.getElementById('timeline-drop-zone');
    const feedback = document.getElementById('timeline-feedback');
    const checkBtn = document.getElementById('btn-timeline-check');

    // Reset building state
    verbArenaState.timelineAssembledWords = [];
    dropZone.innerHTML = `<span class="placeholder-text">Clique nos blocos abaixo na ordem correta...</span>`;
    feedback.className = "verb-feedback hidden";
    feedback.innerHTML = "";
    if (checkBtn) checkBtn.disabled = true;

    // 1. Update Timeline Graphic Indicator (Color highlight)
    if (timelineGraphic) {
        timelineGraphic.className = `timeline-line-graphic highlight-${tense}`;
    }

    // 2. Render Grammar tip
    if (grammarTip) {
        let explanation = "";
        if (tense === 'present') {
            explanation = `Para o presente simples de <b>${verb.base}</b>, usamos a forma base <strong>${verb.base}</strong> para I/You/We/They, ou <strong>${verb.present}</strong> para He/She/It (adicionando -s, -es ou -ies).`;
        } else if (tense === 'past') {
            if (verb.type === 'irregular') {
                explanation = `O verbo <b>${verb.base}</b> é <strong>irregular</strong> no passado. Sua forma muda para <strong style="color:var(--color-past);">${verb.past}</strong> (não use "-ed"!).`;
            } else {
                explanation = `O verbo <b>${verb.base}</b> é <strong>regular</strong>. Adicionamos a terminação <strong style="color:var(--color-past);">-ed</strong> no final: <strong style="color:var(--color-past);">${verb.past}</strong>.`;
            }
        } else {
            explanation = `Para o futuro simples de <b>${verb.base}</b>, simplesmente usamos o auxiliar <strong style="color:var(--color-future);">will</strong> seguido da forma básica: <strong style="color:var(--color-future);">${verb.future}</strong>.`;
        }
        grammarTip.innerHTML = `💡 ${explanation}`;
    }

    // 3. Prepare sentence options
    let targetSentence = "";
    if (tense === 'present') targetSentence = verb.sentencePresent;
    else if (tense === 'past') targetSentence = verb.sentencePast;
    else if (tense === 'future') targetSentence = verb.sentenceFuture;

    const targetWords = targetSentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
    
    // Mix target words and add a couple of distractor words
    let distractors = [];
    if (tense === 'present') {
        distractors = ["will", "did", "yesterday", "tomorrow"];
    } else if (tense === 'past') {
        distractors = ["will", verb.base + "s", "tomorrow"];
    } else {
        distractors = ["did", verb.past, "yesterday"];
    }
    
    let mixedWords = [...targetWords, ...distractors]
        .map(w => ({ text: w, sortKey: Math.random() }))
        .sort((a,b) => a.sortKey - b.sortKey)
        .map(obj => obj.text);

    // Filter duplicates of base verb/words just to avoid identical button keys
    mixedWords = Array.from(new Set(mixedWords));

    // 4. Render block pool
    buildArea.innerHTML = '';
    mixedWords.forEach((word, idx) => {
        const wordBlock = document.createElement('button');
        wordBlock.className = "word-block";
        // Color code important conjugated items
        if (word === verb.past || word === "worked" || word === "called" || word === "went" || word === "bought" || word === "wrote") {
            wordBlock.style.borderColor = "var(--color-past)";
            wordBlock.style.color = "var(--color-past)";
        } else if (word === "will" || word === "tomorrow" || word === "next") {
            wordBlock.style.borderColor = "var(--color-future)";
            wordBlock.style.color = "var(--color-future)";
        }
        wordBlock.textContent = word;
        wordBlock.dataset.wordId = `${word}-${idx}`;
        
        wordBlock.addEventListener('click', () => {
            if (wordBlock.classList.contains('used')) {
                // Remove word from assembled
                wordBlock.classList.remove('used');
                verbArenaState.timelineAssembledWords = verbArenaState.timelineAssembledWords.filter(item => item.id !== wordBlock.dataset.wordId);
            } else {
                // Add to assembled
                wordBlock.classList.add('used');
                verbArenaState.timelineAssembledWords.push({ id: wordBlock.dataset.wordId, text: word });
            }
            updateTimelineDropZone(targetWords, checkBtn);
        });

        buildArea.appendChild(wordBlock);
    });
}

function updateTimelineDropZone(targetWords, checkBtn) {
    const dropZone = document.getElementById('timeline-drop-zone');
    if (!dropZone) return;

    if (verbArenaState.timelineAssembledWords.length === 0) {
        dropZone.innerHTML = `<span class="placeholder-text">Clique nos blocos abaixo na ordem correta...</span>`;
        if (checkBtn) checkBtn.disabled = true;
        return;
    }

    dropZone.innerHTML = '';
    verbArenaState.timelineAssembledWords.forEach(item => {
        const span = document.createElement('span');
        span.className = "assembled-word-tag glass";
        span.textContent = item.text;
        span.addEventListener('click', () => {
            // Un-use from pool
            const block = document.querySelector(`.word-block[data-word-id="${item.id}"]`);
            if (block) block.classList.remove('used');
            verbArenaState.timelineAssembledWords = verbArenaState.timelineAssembledWords.filter(x => x.id !== item.id);
            updateTimelineDropZone(targetWords, checkBtn);
        });
        dropZone.appendChild(span);
    });

    if (checkBtn) checkBtn.disabled = false;
}

function checkTimelineAnswer() {
    const verb = verbArenaState.timelineSelectedVerb;
    const tense = verbArenaState.timelineSelectedTense;
    if (!verb) return;

    let targetSentence = "";
    if (tense === 'present') targetSentence = verb.sentencePresent;
    else if (tense === 'past') targetSentence = verb.sentencePast;
    else if (tense === 'future') targetSentence = verb.sentenceFuture;
    // Strip punctuation for matching
    const cleanTarget = targetSentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    
    const assembledString = verbArenaState.timelineAssembledWords.map(x => x.text).join(" ").toLowerCase();
    const feedback = document.getElementById('timeline-feedback');
    
    feedback.classList.remove('hidden');
    
    if (assembledString === cleanTarget) {
        feedback.className = "verb-feedback success";
        feedback.innerHTML = `🎉 <strong>Excelente!</strong> Frase montada com perfeição.<br><span style="font-size:12px;">Repita em voz alta para ativar a memória muscular!</span>`;
        
        // Grant XP and Coins
        if (typeof state !== 'undefined' && state) {
            state.addXP(10);
        }
        
        // Play success elements
        if (window.confetti) window.confetti.start(1000);
        if (typeof audioPlayer !== 'undefined' && audioPlayer) audioPlayer.playDopamineTone();
        
        // TTS Playback of the phrase
        speakEnglish(targetSentence);
        
        // Disable check button
        const checkBtn = document.getElementById('btn-timeline-check');
        if (checkBtn) checkBtn.disabled = true;
    } else {
        feedback.className = "verb-feedback error";
        feedback.innerHTML = `❌ <strong>Ops!</strong> A ordem correta seria: <br><em>"${targetSentence}"</em>.<br>Clique nos blocos errados para removê-los e tente novamente!`;
        if (typeof audioPlayer !== 'undefined' && audioPlayer && audioPlayer.audioCtx) {
            // Short warning beep
            const osc = audioPlayer.audioCtx.createOscillator();
            const gain = audioPlayer.audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioPlayer.audioCtx.destination);
            osc.frequency.setValueAtTime(180, audioPlayer.audioCtx.currentTime);
            gain.gain.setValueAtTime(0.1, audioPlayer.audioCtx.currentTime);
            osc.start();
            osc.stop(audioPlayer.audioCtx.currentTime + 0.05);
        }
    }
}





/* ==========================================
   ACTIVITY 3: SENTENCE GYM (ACADEMIA DE SENTENÇAS)
   ========================================== */
function initGymActivity() {
    // Set level buttons
    const lvlBtns = document.querySelectorAll('.gym-lvl-btn');
    lvlBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            lvlBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            verbArenaState.gymLevel = btn.dataset.gymLvl;
            verbArenaState.gymIndex = 0;
            verbArenaState.gymStreak = 0;
            document.getElementById('gym-streak-counter').textContent = "0";
            loadGymExercise();
        });
    });

    loadGymExercise();
}

function loadGymExercise() {
    const list = VERBS_ARENA_DATA.sentences.filter(s => s.level === verbArenaState.gymLevel);
    
    // Check if list has items
    if (list.length === 0) return;

    // Wrap around index
    if (verbArenaState.gymIndex >= list.length) {
        verbArenaState.gymIndex = 0;
    }

    const ex = list[verbArenaState.gymIndex];
    verbArenaState.gymAssembledWords = [];

    // Render title and progress info
    document.getElementById('gym-exercise-title').innerHTML = `Desafio ${verbArenaState.gymIndex + 1} de ${list.length} <span class="badge-premium" style="font-size:9px; vertical-align:middle; background:rgba(0,188,255,0.15); color:var(--secondary);">${ex.level}</span>`;
    document.getElementById('gym-instruction').innerHTML = ex.instruction;
    
    const dropZone = document.getElementById('gym-drop-zone');
    const pool = document.getElementById('gym-blocks-pool');
    const feedback = document.getElementById('gym-feedback');
    const checkBtn = document.getElementById('btn-gym-check');
    const nextBtn = document.getElementById('btn-gym-next');
    const graphic = document.getElementById('gym-timeline-aspect-graphic');

    dropZone.innerHTML = `<span class="placeholder-text">Selecione os blocos abaixo para formar a estrutura correta...</span>`;
    feedback.className = "verb-feedback hidden";
    feedback.innerHTML = "";
    if (checkBtn) checkBtn.disabled = true;
    if (nextBtn) nextBtn.classList.add('hidden');

    // 1. Draw SVG Aspect Timeline graphic dynamically (ADHD Visual Anchoring)
    if (graphic) {
        let svgContent = '';
        if (ex.tense === 'past') {
            if (ex.aspect === 'simple') {
                // Point in past
                svgContent = `
                    <svg viewBox="0 0 400 60" width="100%" height="60">
                        <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="4" />
                        <circle cx="200" cy="30" r="6" fill="#20c997" title="Present" />
                        <text x="200" y="50" fill="var(--text-muted)" font-size="10" text-anchor="middle">AGORA</text>
                        <circle cx="80" cy="30" r="8" fill="var(--color-past)" class="pulse-glow-blue" />
                        <text x="80" y="50" fill="var(--color-past)" font-size="10" font-weight="700" text-anchor="middle">PASSADO</text>
                        <path d="M 80,10 L 80,20" stroke="var(--color-past)" stroke-width="2" />
                    </svg>
                `;
            } else if (ex.aspect === 'continuous') {
                // Wave / ongoing line in past interrupted
                svgContent = `
                    <svg viewBox="0 0 400 60" width="100%" height="60">
                        <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="4" />
                        <circle cx="280" cy="30" r="6" fill="#20c997" />
                        <text x="280" y="50" fill="var(--text-muted)" font-size="10" text-anchor="middle">AGORA</text>
                        <!-- Continuous process -->
                        <path d="M 40,30 Q 60,10 80,30 T 120,30 T 160,30" fill="none" stroke="var(--color-past)" stroke-width="4" stroke-linecap="round" />
                        <!-- Interruption -->
                        <circle cx="160" cy="30" r="7" fill="#ff4a5a" />
                        <text x="100" y="50" fill="var(--color-past)" font-size="9" text-anchor="middle">Ação contínua no Passado</text>
                        <text x="190" y="20" fill="#ff4a5a" font-size="8">Interrupção (Simples)</text>
                    </svg>
                `;
            } else if (ex.aspect === 'perfect') {
                // Action before another in past
                svgContent = `
                    <svg viewBox="0 0 400 60" width="100%" height="60">
                        <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="4" />
                        <circle cx="300" cy="30" r="6" fill="#20c997" />
                        <text x="300" y="50" fill="var(--text-muted)" font-size="10" text-anchor="middle">AGORA</text>
                        
                        <circle cx="180" cy="30" r="6" fill="var(--color-past)" />
                        <text x="180" y="50" fill="var(--text-muted)" font-size="8" text-anchor="middle">Passado (Cheguei)</text>
                        
                        <circle cx="70" cy="30" r="8" fill="var(--color-past)" class="pulse-glow-blue" style="filter: drop-shadow(0 0 6px var(--color-past));" />
                        <text x="70" y="50" fill="var(--color-past)" font-size="9" font-weight="700" text-anchor="middle">Passado Perfeito (Saíram)</text>
                        
                        <path d="M 78,30 L 172,30" stroke="var(--color-past)" stroke-width="2" marker-end="url(#arrow)" />
                    </svg>
                `;
            } else {
                // Conditional unreal past
                svgContent = `
                    <svg viewBox="0 0 400 60" width="100%" height="60">
                        <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.15)" stroke-width="3" />
                        <circle cx="300" cy="30" r="6" fill="#20c997" />
                        <text x="300" y="50" fill="var(--text-muted)" font-size="9" text-anchor="middle">AGORA</text>
                        
                        <!-- Dotted branch for alternative reality -->
                        <path d="M 80,30 Q 140,0 200,30" fill="none" stroke="var(--color-past)" stroke-width="2" stroke-dasharray="3" />
                        <circle cx="80" cy="30" r="6" fill="var(--color-past)" />
                        <text x="80" y="50" fill="var(--color-past)" font-size="9" text-anchor="middle">Realidade (Não soube)</text>
                        <text x="140" y="12" fill="var(--color-past)" font-size="8" font-style="italic">Se eu soubesse...</text>
                    </svg>
                `;
            }
        } else {
            // FUTURE
            if (ex.aspect === 'simple') {
                svgContent = `
                    <svg viewBox="0 0 400 60" width="100%" height="60">
                        <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="4" />
                        <circle cx="120" cy="30" r="6" fill="#20c997" />
                        <text x="120" y="50" fill="var(--text-muted)" font-size="10" text-anchor="middle">AGORA</text>
                        <circle cx="280" cy="30" r="8" fill="var(--color-future)" class="pulse-glow-orange" />
                        <text x="280" y="50" fill="var(--color-future)" font-size="10" font-weight="700" text-anchor="middle">FUTURO</text>
                        <path d="M 280,10 L 280,20" stroke="var(--color-future)" stroke-width="2" />
                    </svg>
                `;
            } else if (ex.aspect === 'continuous') {
                svgContent = `
                    <svg viewBox="0 0 400 60" width="100%" height="60">
                        <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="4" />
                        <circle cx="100" cy="30" r="6" fill="#20c997" />
                        <text x="100" y="50" fill="var(--text-muted)" font-size="10" text-anchor="middle">AGORA</text>
                        <!-- Continuous process -->
                        <path d="M 180,30 Q 200,10 220,30 T 260,30 T 300,30" fill="none" stroke="var(--color-future)" stroke-width="4" stroke-linecap="round" />
                        <text x="240" y="50" fill="var(--color-future)" font-size="9" text-anchor="middle">Estará acontecendo</text>
                        <circle cx="240" cy="30" r="3" fill="#fff" />
                    </svg>
                `;
            } else if (ex.aspect === 'perfect') {
                svgContent = `
                    <svg viewBox="0 0 400 60" width="100%" height="60">
                        <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="4" />
                        <circle cx="80" cy="30" r="6" fill="#20c997" />
                        <text x="80" y="50" fill="var(--text-muted)" font-size="10" text-anchor="middle">AGORA</text>
                        
                        <circle cx="200" cy="30" r="8" fill="var(--color-future)" style="filter: drop-shadow(0 0 6px var(--color-future));" />
                        <text x="200" y="50" fill="var(--color-future)" font-size="9" font-weight="700" text-anchor="middle">Terei concluído</text>
                        
                        <line x1="290" y1="10" x2="290" y2="40" stroke="#ff4a5a" stroke-width="2" />
                        <text x="290" y="50" fill="#ff4a5a" font-size="8" text-anchor="middle">Prazo Final</text>
                    </svg>
                `;
            } else {
                // perfect continuous
                svgContent = `
                    <svg viewBox="0 0 400 60" width="100%" height="60">
                        <line x1="20" y1="30" x2="380" y2="30" stroke="rgba(255,255,255,0.15)" stroke-width="3" stroke-dasharray="4" />
                        <circle cx="80" cy="30" r="6" fill="#20c997" />
                        <text x="80" y="50" fill="var(--text-muted)" font-size="9" text-anchor="middle">AGORA</text>
                        
                        <path d="M 80,30 L 250,30" stroke="var(--color-future)" stroke-width="4" stroke-dasharray="2 2" />
                        <circle cx="250" cy="30" r="8" fill="var(--color-future)" />
                        <text x="250" y="50" fill="var(--color-future)" font-size="8" font-weight="700" text-anchor="middle">Ponto Futuro</text>
                        <text x="160" y="20" fill="var(--color-future)" font-size="7">Duração acumulada de 5 anos</text>
                    </svg>
                `;
            }
        }
        graphic.innerHTML = svgContent;
    }

    // 2. Mix words for the pool (scramble + distractors)
    const shuffledPool = [...ex.words].sort(() => 0.5 - Math.random());
    pool.innerHTML = '';
    shuffledPool.forEach((word, idx) => {
        const btn = document.createElement('button');
        btn.className = "word-block";
        btn.textContent = word;
        btn.dataset.gymId = `${word}-${idx}`;
        
        btn.addEventListener('click', () => {
            if (btn.classList.contains('used')) {
                btn.classList.remove('used');
                verbArenaState.gymAssembledWords = verbArenaState.gymAssembledWords.filter(w => w.id !== btn.dataset.gymId);
            } else {
                btn.classList.add('used');
                verbArenaState.gymAssembledWords.push({ id: btn.dataset.gymId, text: word });
            }
            updateGymDropZone(ex, checkBtn);
        });

        pool.appendChild(btn);
    });
}

function updateGymDropZone(ex, checkBtn) {
    const dropZone = document.getElementById('gym-drop-zone');
    if (!dropZone) return;

    if (verbArenaState.gymAssembledWords.length === 0) {
        dropZone.innerHTML = `<span class="placeholder-text">Selecione os blocos abaixo para formar a estrutura correta...</span>`;
        if (checkBtn) checkBtn.disabled = true;
        return;
    }

    dropZone.innerHTML = '';
    verbArenaState.gymAssembledWords.forEach(item => {
        const span = document.createElement('span');
        span.className = "assembled-word-tag glass";
        span.textContent = item.text;
        span.addEventListener('click', () => {
            const block = document.querySelector(`.word-block[data-gym-id="${item.id}"]`);
            if (block) block.classList.remove('used');
            verbArenaState.gymAssembledWords = verbArenaState.gymAssembledWords.filter(x => x.id !== item.id);
            updateGymDropZone(ex, checkBtn);
        });
        dropZone.appendChild(span);
    });

    if (checkBtn) checkBtn.disabled = false;
}

function checkGymAnswer() {
    const list = VERBS_ARENA_DATA.sentences.filter(s => s.level === verbArenaState.gymLevel);
    if (list.length === 0) return;

    const ex = list[verbArenaState.gymIndex];
    const assembledString = verbArenaState.gymAssembledWords.map(x => x.text).join(" ").toLowerCase();
    const correctString = ex.correctOrder.join(" ").toLowerCase();
    
    const feedback = document.getElementById('gym-feedback');
    const checkBtn = document.getElementById('btn-gym-check');
    const nextBtn = document.getElementById('btn-gym-next');

    feedback.classList.remove('hidden');

    if (assembledString === correctString) {
        feedback.className = "verb-feedback success";
        feedback.innerHTML = `🎉 <strong>Sensacional!</strong> Conjugação perfeita.<br>💡 <em>Dica do Tutor:</em> ${ex.explanation}`;
        
        verbArenaState.gymStreak++;
        document.getElementById('gym-streak-counter').textContent = verbArenaState.gymStreak;

        // Reward logic
        let rewardXp = 15;
        if (typeof state !== 'undefined' && state) {
            state.addXP(rewardXp);
        }
        
        // Dopamine booster for a streak of 5
        if (verbArenaState.gymStreak % 5 === 0) {
            if (window.confetti) window.confetti.start(1800);
            feedback.innerHTML += `<br><span style="color:var(--warning); font-weight:bold;">🔥 COMBO DE 5 ACERTOS! (+30 XP/DM Bônus Dopaminérgico)</span>`;
            if (typeof state !== 'undefined' && state) state.addXP(30);
        } else {
            if (window.confetti) window.confetti.start(800);
        }

        if (typeof audioPlayer !== 'undefined' && audioPlayer) audioPlayer.playDopamineTone();
        speakEnglish(ex.pronunciation);

        if (checkBtn) checkBtn.disabled = true;
        if (nextBtn) nextBtn.classList.remove('hidden');
    } else {
        feedback.className = "verb-feedback error";
        feedback.innerHTML = `❌ <strong>Ordem incorreta!</strong> A estrutura gramatical recomendada é:<br><em style="font-weight:600; color:#fff;">"${ex.correctOrder.join(" ")}"</em>.<br>Tente novamente clicando nas tags para remover ou avance para a próxima.`;
        
        // Reset streak
        verbArenaState.gymStreak = 0;
        document.getElementById('gym-streak-counter').textContent = "0";

        if (typeof audioPlayer !== 'undefined' && audioPlayer && audioPlayer.audioCtx) {
            // Warning beep
            const osc = audioPlayer.audioCtx.createOscillator();
            const gain = audioPlayer.audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioPlayer.audioCtx.destination);
            osc.frequency.setValueAtTime(170, audioPlayer.audioCtx.currentTime);
            gain.gain.setValueAtTime(0.08, audioPlayer.audioCtx.currentTime);
            osc.start();
            osc.stop(audioPlayer.audioCtx.currentTime + 0.15);
        }
        
        if (nextBtn) nextBtn.classList.remove('hidden');
    }
}

function nextGymExercise() {
    const list = VERBS_ARENA_DATA.sentences.filter(s => s.level === verbArenaState.gymLevel);
    if (list.length === 0) return;

    verbArenaState.gymIndex++;
    if (verbArenaState.gymIndex >= list.length) {
        verbArenaState.gymIndex = 0;
    }
    loadGymExercise();
}
