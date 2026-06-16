/**
 * VERB HYPERFOCUS ARENA
 * Pedagogical, visual and interactive engine designed for ADHD learners to master Past & Future verb conjugations.
 * Uses color-coding, phonetic grouping (sound families), kinesthetic word blocks, and visual timelines.
 */

const VERBS_ARENA_DATA = {
    // Irregular verb phonetic families for Activity 2
    families: [
        {
            id: "i-a-u",
            name: "Grupo I-A-U (Sons do Vogal)",
            pattern: "Inicia com I ➔ Passado com A ➔ Particípio com U",
            color: "var(--primary)",
            verbs: [
                { base: "sing", past: "sang", participle: "sung", meaning: "cantar" },
                { base: "drink", past: "drank", participle: "drunk", meaning: "beber" },
                { base: "swim", past: "swam", participle: "swum", meaning: "nadar" },
                { base: "ring", past: "rang", participle: "rung", meaning: "tocar (sino/telefone)" },
                { base: "sink", past: "sank", participle: "sunk", meaning: "afundar" }
            ]
        },
        {
            id: "d-t",
            name: "Grupo D ➔ T",
            pattern: "Troca o final 'D' por 'T' no passado e particípio",
            color: "var(--secondary)",
            verbs: [
                { base: "send", past: "sent", participle: "sent", meaning: "enviar" },
                { base: "spend", past: "spent", participle: "spent", meaning: "gastar/passar tempo" },
                { base: "build", past: "built", participle: "built", meaning: "construir" },
                { base: "bend", past: "bent", participle: "bent", meaning: "dobrar" },
                { base: "lend", past: "lent", participle: "lent", meaning: "emprestar" }
            ]
        },
        {
            id: "o-e-o",
            name: "Grupo O-E-O",
            pattern: "Base com OW ➔ Passado com EW ➔ Particípio com OWN",
            color: "var(--warning)",
            verbs: [
                { base: "grow", past: "grew", participle: "grown", meaning: "crescer" },
                { base: "know", past: "knew", participle: "known", meaning: "saber/conhecer" },
                { base: "throw", past: "threw", participle: "thrown", meaning: "lançar/atirar" },
                { base: "blow", past: "blew", participle: "blown", meaning: "soprar" },
                { base: "draw", past: "drew", participle: "drawn", meaning: "desenhar" }
            ]
        },
        {
            id: "e-o-o",
            name: "Grupo E-O-O",
            pattern: "Vogal muda para O no passado e no particípio (adiciona -en)",
            color: "var(--success)",
            verbs: [
                { base: "break", past: "broke", participle: "broken", meaning: "quebrar" },
                { base: "speak", past: "spoke", participle: "spoken", meaning: "falar" },
                { base: "choose", past: "chose", participle: "chosen", meaning: "escolher" },
                { base: "steal", past: "stole", participle: "stolen", meaning: "roubar" },
                { base: "freeze", past: "froze", participle: "frozen", meaning: "congelar" }
            ]
        },
        {
            id: "no-change",
            name: "Grupo Sem Alteração",
            pattern: "Verbos idênticos nas 3 formas",
            color: "var(--danger)",
            verbs: [
                { base: "cut", past: "cut", participle: "cut", meaning: "cortar" },
                { base: "put", past: "put", participle: "put", meaning: "colocar" },
                { base: "hit", past: "hit", participle: "hit", meaning: "bater/atingir" },
                { base: "hurt", past: "hurt", participle: "hurt", meaning: "machucar" },
                { base: "cost", past: "cost", participle: "cost", meaning: "custar" }
            ]
        }
    ],

    // Sentences Gym categorized by level & tense
    sentences: [
        // LEVEL 1: A1-A2 (Básico)
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

        // LEVEL 2: B1-B2 (Intermediário)
        {
            level: "B1-B2",
            tense: "past",
            aspect: "continuous",
            instruction: "Monte a frase no PASSADO CONTÍNUO: 'Eu estava trabalhando quando você ligou.'",
            words: ["I", "was", "working", "when", "you", "called", "were", "call", "did"],
            correctOrder: ["I", "was", "working", "when", "you", "called"],
            explanation: "O Passado Contínuo (<b>was working</b>) descreve uma ação em andamento que foi interrompida por outra pontual no passado simples (<b>called</b>).",
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
            explanation: "O Futuro Perfeito (<b>will have finished</b>) é usado para expressar uma ação que estará concluída <i>antes</i> de um limite temporal no futuro (<i>by Friday</i>).",
            pronunciation: "By Friday I will have finished the project."
        },

        // LEVEL 3: C1-C2 (Avançado/Nativo)
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
        }
    ]
};

// Global state of the Verb Arena
const verbArenaState = {
    activeActivity: "timeline", // "timeline", "families", "gym"
    // Timeline activity states
    timelineSelectedVerb: null,
    timelineSelectedTense: "past",
    timelineAssembledWords: [],
    // Families activity states
    familiesSelectedVerb: null,
    familiesCorrectCount: 0,
    familiesErrorStreak: 0,
    // Gym activity states
    gymLevel: "A1-A2",
    gymIndex: 0,
    gymAssembledWords: [],
    gymStreak: 0
};

// Available verbs for Activity 1 (Timeline Builder)
const TIMELINE_VERBS = [
    { base: "go", past: "went", future: "will go", meaning: "ir", type: "irregular", sentencePast: "She went to the bank yesterday.", sentenceFuture: "She will go to the bank tomorrow." },
    { base: "work", past: "worked", future: "will work", meaning: "trabalhar", type: "regular", sentencePast: "I worked from home last Monday.", sentenceFuture: "I will work from home tomorrow." },
    { base: "write", past: "wrote", future: "will write", meaning: "escrever", type: "irregular", sentencePast: "He wrote an email to his boss this morning.", sentenceFuture: "He will write a report tomorrow." },
    { base: "buy", past: "bought", future: "will buy", meaning: "comprar", type: "irregular", sentencePast: "They bought a new software package yesterday.", sentenceFuture: "They will buy new devices next month." },
    { base: "call", past: "called", future: "will call", meaning: "ligar", type: "regular", sentencePast: "We called a meeting two hours ago.", sentenceFuture: "We will call you in a few minutes." }
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
            arenaTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const target = tab.dataset.arenaTab;
            verbArenaState.activeActivity = target;
            
            // Switch views
            document.querySelectorAll('.arena-view-pane').forEach(pane => pane.classList.add('hidden'));
            document.getElementById(`arena-view-${target}`).classList.remove('hidden');
            
            // Render specific activity
            if (target === "timeline") {
                renderTimelineActivity();
            } else if (target === "families") {
                initFamiliesActivity();
            } else if (target === "gym") {
                initGymActivity();
            }
        });
    });

    // Default load Activity 1
    renderTimelineActivity();
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
    const btnPast = document.getElementById('timeline-tense-past');
    const btnFuture = document.getElementById('timeline-tense-future');
    
    if (btnPast && btnFuture) {
        btnPast.onclick = () => {
            btnPast.classList.add('active');
            btnFuture.classList.remove('active');
            verbArenaState.timelineSelectedTense = "past";
            updateTimelineWorkspace();
        };

        btnFuture.onclick = () => {
            btnFuture.classList.add('active');
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
        const pastDot = timelineGraphic.querySelector('.past-marker');
        const futureDot = timelineGraphic.querySelector('.future-marker');
        const pastLine = timelineGraphic.querySelector('.past-line');
        const futureLine = timelineGraphic.querySelector('.future-line');

        timelineGraphic.className = `timeline-line-graphic ${tense === 'past' ? 'highlight-past' : 'highlight-future'}`;
    }

    // 2. Render Grammar tip
    if (grammarTip) {
        let conjugated = tense === 'past' ? verb.past : verb.future;
        let explanation = "";
        if (tense === 'past') {
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
    const targetSentence = tense === 'past' ? verb.sentencePast : verb.sentenceFuture;
    const targetWords = targetSentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ");
    
    // Mix target words and add a couple of distractor words
    let distractors = [];
    if (tense === 'past') {
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

    const targetSentence = tense === 'past' ? verb.sentencePast : verb.sentenceFuture;
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
   ACTIVITY 2: SOUND FAMILIES (FAMÍLIAS SONORAS)
   ========================================== */
function initFamiliesActivity() {
    const cardPool = document.getElementById('families-card-pool');
    const groupContainers = document.getElementById('families-groups-grid');
    if (!cardPool || !groupContainers) return;

    verbArenaState.familiesCorrectCount = 0;
    verbArenaState.familiesSelectedVerb = null;
    
    // Render columns representing the families
    groupContainers.innerHTML = '';
    VERBS_ARENA_DATA.families.forEach(fam => {
        const col = document.createElement('div');
        col.className = "family-column glass";
        col.style.borderTop = `4px solid ${fam.color}`;
        col.dataset.familyId = fam.id;
        col.innerHTML = `
            <div class="family-col-header">
                <h3>${fam.name}</h3>
                <span class="family-pattern">${fam.pattern}</span>
            </div>
            <div class="family-slot-area" id="family-slot-${fam.id}">
                <!-- Placed cards will appear here -->
            </div>
        `;
        
        // Add click handler to place selected card
        col.addEventListener('click', () => {
            if (verbArenaState.familiesSelectedVerb) {
                placeVerbInFamily(verbArenaState.familiesSelectedVerb, fam.id);
            }
        });

        groupContainers.appendChild(col);
    });

    // Pick 2 verbs from each family to create a pool of 10 card challenges
    let challengeVerbs = [];
    VERBS_ARENA_DATA.families.forEach(fam => {
        // Shuffle verbs inside family
        const shuffledVerbs = [...fam.verbs].sort(() => 0.5 - Math.random());
        // Take 2
        challengeVerbs.push({ ...shuffledVerbs[0], familyId: fam.id });
        challengeVerbs.push({ ...shuffledVerbs[1], familyId: fam.id });
    });

    // Shuffle pool
    challengeVerbs.sort(() => 0.5 - Math.random());

    // Render Cards in Pool
    cardPool.innerHTML = '';
    challengeVerbs.forEach((v, idx) => {
        const card = document.createElement('div');
        card.className = "family-verb-card glass";
        card.textContent = `${v.base.toUpperCase()}`;
        card.dataset.idx = idx;
        card.dataset.familyId = v.familyId;
        card.title = `Conjugação: ${v.base} - ${v.past} - ${v.participle} (${v.meaning})`;
        
        card.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid placing immediately on parent click
            
            // Remove previous active selection
            document.querySelectorAll('.family-verb-card').forEach(c => c.classList.remove('selected'));
            
            card.classList.add('selected');
            verbArenaState.familiesSelectedVerb = {
                cardElement: card,
                verb: v
            };
        });

        cardPool.appendChild(card);
    });
}

function placeVerbInFamily(selectedObj, targetFamilyId) {
    const { cardElement, verb } = selectedObj;
    const targetSlot = document.getElementById(`family-slot-${targetFamilyId}`);
    
    if (!targetSlot) return;

    if (verb.familyId === targetFamilyId) {
        // CORRECT PLACE!
        cardElement.classList.remove('selected');
        cardElement.className = "family-placed-tag";
        cardElement.innerHTML = `
            <strong>${verb.base} ➔ ${verb.past} ➔ ${verb.participle}</strong>
            <span class="tts-btn-small" onclick="speakEnglish('${verb.base}, ${verb.past}, ${verb.participle}')">🔊</span>
        `;
        
        // Append to column slot
        targetSlot.appendChild(cardElement);
        verbArenaState.familiesSelectedVerb = null;
        verbArenaState.familiesCorrectCount++;

        if (typeof audioPlayer !== 'undefined' && audioPlayer) audioPlayer.playDopamineTone();
        speakEnglish(`${verb.base}, ${verb.past}, ${verb.participle}`);

        // Check if game complete (10 items)
        if (verbArenaState.familiesCorrectCount === 10) {
            setTimeout(() => {
                if (window.confetti) window.confetti.start(1500);
                alert("🎉 Incrível! Você organizou todas as famílias sonoras dos verbos irregulares! (+50 XP/DM)");
                if (typeof state !== 'undefined' && state) state.addXP(50);
                initFamiliesActivity(); // Reload
            }, 600);
        }
    } else {
        // ERROR PLACE
        cardElement.classList.add('error-shake');
        if (typeof audioPlayer !== 'undefined' && audioPlayer && audioPlayer.audioCtx) {
            // Short error sound
            const osc = audioPlayer.audioCtx.createOscillator();
            const gain = audioPlayer.audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioPlayer.audioCtx.destination);
            osc.frequency.setValueAtTime(150, audioPlayer.audioCtx.currentTime);
            gain.gain.setValueAtTime(0.08, audioPlayer.audioCtx.currentTime);
            osc.start();
            osc.stop(audioPlayer.audioCtx.currentTime + 0.15);
        }
        setTimeout(() => {
            cardElement.classList.remove('error-shake');
        }, 500);
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
