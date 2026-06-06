/* ==========================================
   WEEKS DATABASE (PLANO DE ESTUDOS DE 8 SEMANAS)
   ========================================== */
const WEEKS_DATA = [
    {
        week: 1,
        title: "Imersão de Choque & Rotina",
        mainGoal: "Estabelecer a rotina sem faltas por 7 dias consecutivos e eliminar o medo do erro na conversação.",
        secGoal: "Alcançar a Liga de Bronze no Duolingo e dominar os primeiros 200 cards no Anki.",
        hours: "31.5 horas",
        indicator: "Tempo médio de silêncio travado durante conversação < 8 segundos."
    },
    {
        week: 2,
        title: "Narrativas no Passado & Conectores",
        mainGoal: "Conseguir relatar histórias e acontecimentos passados de forma cronológica.",
        secGoal: "Mapear os 50 verbos irregulares mais comuns em inglês.",
        hours: "31.5 horas",
        indicator: "Uso correto da terminação '-ed' e 15 verbos irregulares na fala."
    },
    {
        week: 3,
        title: "Planos de Futuro & Condicionais",
        mainGoal: "Falar sobre planos futuros, aspirações profissionais e hipóteses simples.",
        secGoal: "Adicionar 150 novos termos de inglês profissional/corporativo no Anki.",
        hours: "31.5 horas",
        indicator: "Uso correto de 'going to' (planos) e 'will' (previsões) na fala."
    },
    {
        week: 4,
        title: "O Planalto do TDAH - Phrasal Verbs",
        mainGoal: "Superar a fase de perda da novidade mantendo a constância com gamificação agressiva.",
        secGoal: "Incorporar 30 Phrasal Verbs fundamentais na comunicação do dia a dia.",
        hours: "31.5 horas",
        indicator: "Reconhecimento de 90%+ dos phrasal verbs estudados em áudios."
    },
    {
        week: 5,
        title: "Desconexão de Legendas & Pronúncia",
        mainGoal: "Assistir a conteúdos dinâmicos em inglês sem suporte visual de texto (sem legenda) e entender a ideia geral.",
        secGoal: "Praticar reduções sonoras comuns da fala nativa rápida (connected speech).",
        hours: "31.5 horas",
        indicator: "Nível de acerto de 80%+ no preenchimento de lacunas de áudios nativos rápidos."
    },
    {
        week: 6,
        title: "Argumentação & Gramática Prática",
        mainGoal: "Defender pontos de vista complexos, argumentar a favor e contra tópicos polêmicos com fluidez.",
        secGoal: "Dominar o uso de verbos modais de dedução e voz passiva na comunicação corporativa.",
        hours: "31.5 horas",
        indicator: "Encadear 3 argumentos lógicos distintos utilizando conectores avançados."
    },
    {
        week: 7,
        title: "Simulação de Alta Pressão",
        mainGoal: "Comunicar-se de maneira profissional sob estresse ou cansaço (entrevistas e reuniões).",
        secGoal: "Polimento de entonação e ritmo de fala.",
        hours: "31.5 horas",
        indicator: "Completar simulação de entrevista sem recorrer ao português de forma alguma."
    },
    {
        week: 8,
        title: "Consolidação & Autonomia",
        mainGoal: "Consolidar os aprendizados, realizar testes de nível e desenhar a rotina de manutenção pós-projeto.",
        secGoal: "Zerar pendências do Anki e atingir nível avançado de conversas casuais.",
        hours: "31.5 horas",
        indicator: "Classificação final de no mínimo 1.5 níveis acima do nível inicial."
    }
];

/* Offline fallback challenges database */
const OFFLINE_CHALLENGES = {
    1: "Descreva você mesmo em inglês em pelo menos 3 frases. Fale sobre seu nome, sua profissão e seus hobbies básicos (Present Simple).",
    2: "Conte em inglês o que você fez no último fim de semana. Tente usar pelo menos 3 verbos no passado simples (ex: went, saw, cooked, studied).",
    3: "Escreva sobre 3 planos importantes que você tem para os próximos meses usando 'going to' para planos fechados e 'will' para previsões.",
    4: "Crie uma história rápida onde você teve um problema e precisou resolver. Use os phrasal verbs 'figure out' (compreender/resolver) e 'give up' (desistir).",
    5: "Reescreva a seguinte frase formal no formato falado informal com reduções nativas: 'I want to go to the park, but I am going to study English.' (Dica: wanna, gonna).",
    6: "Escreva sua opinião em inglês sobre: 'Should all companies offer remote work?' Use pelo menos 1 condicional (If I were... / If they do...).",
    7: "Responda à clássica pergunta de entrevista de emprego em inglês: 'What is your greatest strength and how does it help you at work?'",
    8: "Parabéns por chegar ao fim! Escreva uma carta de encerramento em inglês de 4 frases refletindo sobre o que foi mais difícil e o que você aprendeu nestes 56 dias."
};

/* Offline default vocabulary options for quizzes if list is empty */
const DEFAULT_VOCAB_FALLBACK = [
    { word: "schedule", translation: "agenda, cronograma", s1: "I need to check my schedule.", s2: "My schedule is full.", s3: "Let's reschedule the meeting." },
    { word: "actually", translation: "na verdade", s1: "He actually did it.", s2: "Actually, I disagree.", s3: "Actually, it's very easy." },
    { word: "avoid", translation: "evitar", s1: "Avoid eating sugar.", s2: "Try to avoid distraction.", s3: "I want to avoid conflict." },
    { word: "succeed", translation: "ter sucesso, suceder", s1: "I want to succeed in life.", s2: "They succeeded in their plans.", s3: "Consistency helps you succeed." }
];

// Preload voices for SpeechSynthesis
let synthVoices = [];
if ('speechSynthesis' in window) {
    synthVoices = window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            synthVoices = window.speechSynthesis.getVoices();
        };
    }
}

function speakEnglish(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Stop active speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        const voices = synthVoices.length > 0 ? synthVoices : window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Google')) || 
                        voices.find(v => v.lang.startsWith('en')) || 
                        voices[0];
        if (enVoice) utterance.voice = enVoice;
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Speech Synthesis não suportado neste navegador.");
    }
}

/* ==========================================
   STATE MANAGEMENT (XP, LEVELS & BADGES)
   ========================================== */
class StateManager {
    constructor() {
        this.currentDay = 1;
        this.daysData = {};
        this.vocabBank = [];
        this.writingNotes = {};
        this.fiscalConfig = { name: "", phone: "" };
        this.geminiKey = "";
        
        // Gamification States
        this.level = 1;
        this.xp = 0;
        this.unlockedBadges = [];
        this.timersCompleted = 0;
        this.wordsWrittenAccumulated = 0;
        
        // ADHD Spec States
        this.coins = 0;
        this.streakShields = 0;
        this.shieldedDays = [];
        
        // Flashcard States
        this.knownWords = [];
        this.learnedWordsCount = 0;
        
        this.loadState();
    }

    loadState() {
        try {
            this.currentDay = parseInt(localStorage.getItem('adhd_current_day')) || 1;
            this.daysData = JSON.parse(localStorage.getItem('adhd_days_data')) || {};
            this.vocabBank = JSON.parse(localStorage.getItem('adhd_vocab_bank')) || [];
            this.writingNotes = JSON.parse(localStorage.getItem('adhd_writing_notes')) || {};
            this.fiscalConfig = JSON.parse(localStorage.getItem('adhd_fiscal_config')) || { name: "", phone: "" };
            this.geminiKey = localStorage.getItem('adhd_gemini_key') || "";
            
            // Load Gamification
            this.level = parseInt(localStorage.getItem('adhd_level')) || 1;
            this.xp = parseInt(localStorage.getItem('adhd_xp')) || 0;
            this.unlockedBadges = JSON.parse(localStorage.getItem('adhd_unlocked_badges')) || [];
            this.timersCompleted = parseInt(localStorage.getItem('adhd_timers_completed')) || 0;
            this.wordsWrittenAccumulated = parseInt(localStorage.getItem('adhd_words_written')) || 0;
            
            // Load ADHD
            this.coins = parseInt(localStorage.getItem('adhd_coins')) || 0;
            this.streakShields = parseInt(localStorage.getItem('adhd_streak_shields')) || 0;
            this.shieldedDays = JSON.parse(localStorage.getItem('adhd_shielded_days')) || [];
            
            // Load Flashcards
            this.knownWords = JSON.parse(localStorage.getItem('adhd_known_words')) || [];
            if (!Array.isArray(this.knownWords)) {
                this.knownWords = [];
            }
            this.learnedWordsCount = parseInt(localStorage.getItem('adhd_learned_words_count')) || 0;
        } catch (e) {
            console.error("Falha ao ler localStorage", e);
        }
    }

    saveState() {
        localStorage.setItem('adhd_current_day', this.currentDay);
        localStorage.setItem('adhd_days_data', JSON.stringify(this.daysData));
        localStorage.setItem('adhd_vocab_bank', JSON.stringify(this.vocabBank));
        localStorage.setItem('adhd_writing_notes', JSON.stringify(this.writingNotes));
        localStorage.setItem('adhd_fiscal_config', JSON.stringify(this.fiscalConfig));
        localStorage.setItem('adhd_gemini_key', this.geminiKey);
        
        // Save Gamification
        localStorage.setItem('adhd_level', this.level);
        localStorage.setItem('adhd_xp', this.xp);
        localStorage.setItem('adhd_unlocked_badges', JSON.stringify(this.unlockedBadges));
        localStorage.setItem('adhd_timers_completed', this.timersCompleted);
        localStorage.setItem('adhd_words_written', this.wordsWrittenAccumulated);
        
        // Save ADHD
        localStorage.setItem('adhd_coins', this.coins);
        localStorage.setItem('adhd_streak_shields', this.streakShields);
        localStorage.setItem('adhd_shielded_days', JSON.stringify(this.shieldedDays));
        
        // Save Flashcards
        localStorage.setItem('adhd_known_words', JSON.stringify(this.knownWords));
        localStorage.setItem('adhd_learned_words_count', this.learnedWordsCount);
    }

    addXP(amount) {
        this.xp += amount;
        this.coins += amount; // 1 XP = 1 Dopamine Coin! Simple & highly rewarding.
        const xpNeeded = this.level * 200;
        
        if (this.xp >= xpNeeded) {
            this.xp -= xpNeeded;
            this.level++;
            this.saveState();
            triggerLevelUpModal(this.level);
        } else {
            this.saveState();
        }
        updateLevelHUD();
    }

    unlockBadge(badgeId) {
        if (!this.unlockedBadges.includes(badgeId)) {
            this.unlockedBadges.push(badgeId);
            this.addXP(100); // 100XP reward per achievement!
            this.saveState();
            renderBadges();
            
            // Visual alert
            audioPlayer.playDopamineTone();
            window.confetti.start();
            alert(`🏆 CONQUISTA DESBLOQUEADA: ${getBadgeTitle(badgeId)}! (+100 XP/DM)`);
        }
    }
}

const state = new StateManager();

function getBadgeTitle(id) {
    const titles = {
        'badge-first-step': 'Primeiro Passo',
        'badge-perfect-day': 'Incorrigível',
        'badge-golden-streak': 'Semana de Ouro',
        'badge-vocab-miner': 'Minerador Master',
        'badge-timer-master': 'Foco Absoluto',
        'badge-writer-silver': 'Escritor Prata'
    };
    return titles[id] || 'Nova Conquista';
}

/* ==========================================
   AUDIO SYNTHESIZER (TDAH FOCUS HELPER & CONSOLE)
   ========================================== */
function logAudio(msg) {
    console.log(`[Audio TDAH] ${msg}`);
    const box = document.getElementById('audio-debug-log');
    if (box) {
        const time = new Date().toLocaleTimeString();
        box.innerHTML += `<div>[${time}] ${msg}</div>`;
        box.scrollTop = box.scrollHeight;
    }
}

class FocusAudioPlayer {
    constructor() {
        this.audioCtx = null;
        this.brownNoiseNode = null;
        this.binauralNodeL = null;
        this.binauralNodeR = null;
        this.activeSound = 'none';
        
        // Bell tones
        this.dopamineVolume = 0.15;
    }

    initCtx() {
        if (!this.audioCtx) {
            try {
                this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                logAudio(`Contexto criado. Estado inicial: ${this.audioCtx.state}`);
                
                // Track state changes
                this.audioCtx.onstatechange = () => {
                    logAudio(`Mudança de estado detectada: ${this.audioCtx.state}`);
                    const select = document.getElementById('timer-activity-select');
                    // update UI if needed
                };
            } catch (e) {
                logAudio(`Erro ao instanciar AudioContext: ${e.message}`);
            }
        }
    }

    async playDopamineTone() {
        this.initCtx();
        if (!this.audioCtx) return;

        const runTone = () => {
            try {
                const now = this.audioCtx.currentTime;
                const osc = this.audioCtx.createOscillator();
                const gainNode = this.audioCtx.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(880, now);
                osc.frequency.exponentialRampToValueAtTime(1320, now + 0.1);
                
                gainNode.gain.setValueAtTime(this.dopamineVolume, now);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
                
                osc.connect(gainNode);
                gainNode.connect(this.audioCtx.destination);
                
                osc.start(now);
                osc.stop(now + 0.6);
                logAudio("Tom de dopamina executado com sucesso.");
            } catch (err) {
                logAudio(`Erro ao tocar tom de dopamina: ${err.message}`);
            }
        };

        if (this.audioCtx.state === 'suspended') {
            logAudio("Resumindo contexto para tocar tom...");
            this.audioCtx.resume().then(runTone).catch(e => {
                logAudio(`Falha ao resumir contexto para tom: ${e.message}`);
            });
        } else {
            runTone();
        }
    }

    async playLevelUpTone() {
        this.initCtx();
        if (!this.audioCtx) return;

        const runTone = () => {
            try {
                const now = this.audioCtx.currentTime;
                const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
                
                notes.forEach((freq, idx) => {
                    const osc = this.audioCtx.createOscillator();
                    const gain = this.audioCtx.createGain();
                    
                    osc.frequency.value = freq;
                    gain.gain.setValueAtTime(0.08, now + (idx * 0.12));
                    gain.gain.exponentialRampToValueAtTime(0.001, now + (idx * 0.12) + 0.5);
                    
                    osc.connect(gain);
                    gain.connect(this.audioCtx.destination);
                    
                    osc.start(now + (idx * 0.12));
                    osc.stop(now + (idx * 0.12) + 0.5);
                });
                logAudio("Tom de Level Up executado com sucesso.");
            } catch (err) {
                logAudio(`Erro ao tocar tom de Level Up: ${err.message}`);
            }
        };

        if (this.audioCtx.state === 'suspended') {
            logAudio("Resumindo contexto para tocar Level Up...");
            this.audioCtx.resume().then(runTone).catch(e => {
                logAudio(`Falha ao resumir contexto para Level Up: ${e.message}`);
            });
        } else {
            runTone();
        }
    }

    createBrownNoise() {
        logAudio("Gerando Buffer de Ruído Marrom de 2s...");
        const bufferSize = 2 * this.audioCtx.sampleRate;
        const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        let maxVal = 0.0;
        
        // 1. Generate brown noise (integration)
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            // Leaky integrator filter
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            
            // Track absolute maximum value for normalization
            const absVal = Math.abs(output[i]);
            if (absVal > maxVal) {
                maxVal = absVal;
            }
        }
        
        // 2. Normalize and scale to exactly 0.8 maximum amplitude to avoid clipping
        if (maxVal > 0) {
            for (let i = 0; i < bufferSize; i++) {
                output[i] = (output[i] / maxVal) * 0.8;
            }
            logAudio(`Buffer de Ruído Marrom normalizado. MaxVal original: ${maxVal.toFixed(4)}`);
        }
        
        const noiseNode = this.audioCtx.createBufferSource();
        noiseNode.buffer = noiseBuffer;
        noiseNode.loop = true;
        
        const gainNode = this.audioCtx.createGain();
        gainNode.gain.value = 0.4; // Controlled volume using gain node
        
        noiseNode.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        
        return noiseNode;
    }

    createBinauralBeats() {
        logAudio("Iniciando osciladores binaurais (100Hz Esquerda / 110Hz Direita)...");
        const oscL = this.audioCtx.createOscillator();
        const oscR = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();
        
        oscL.type = 'sine';
        oscL.frequency.value = 100;
        oscR.type = 'sine';
        oscR.frequency.value = 110;
        
        gainNode.gain.value = 0.25; // Balanced volume for binaural beats
        
        // Create StereoPanner nodes for L/R separation if supported
        if (this.audioCtx.createStereoPanner) {
            const pannerL = this.audioCtx.createStereoPanner();
            const pannerR = this.audioCtx.createStereoPanner();
            pannerL.pan.value = -1;
            pannerR.pan.value = 1;
            
            oscL.connect(pannerL);
            pannerL.connect(gainNode);
            
            oscR.connect(pannerR);
            pannerR.connect(gainNode);
            logAudio("StereoPanner conectado com sucesso.");
        } else {
            // ChannelMerger fallback for older browsers
            const merger = this.audioCtx.createChannelMerger(2);
            oscL.connect(merger, 0, 0);
            oscR.connect(merger, 0, 1);
            merger.connect(gainNode);
            logAudio("ChannelMerger fallback utilizado.");
        }
        
        gainNode.connect(this.audioCtx.destination);
        
        return { oscL, oscR };
    }

    async setSound(type) {
        this.initCtx();
        if (!this.audioCtx) {
            logAudio("Falha crítica ao obter contexto de áudio.");
            return;
        }
        
        if (this.audioCtx.state === 'suspended') {
            logAudio("AudioContext suspenso. Tentando resumir...");
            try {
                await this.audioCtx.resume();
                logAudio("AudioContext resumido com sucesso.");
            } catch (e) {
                logAudio(`Erro ao resumir AudioContext: ${e.message}`);
            }
        }
        
        this.stopCurrent();
        logAudio(`Mudando áudio para: ${type}`);

        if (type === 'brown') {
            try {
                this.brownNoiseNode = this.createBrownNoise();
                this.brownNoiseNode.start(0);
                this.activeSound = 'brown';
                logAudio("Brown Noise iniciado.");
            } catch (e) {
                logAudio(`Erro ao iniciar Brown Noise: ${e.message}`);
                alert("Erro ao iniciar áudio: " + e.message);
            }
        } else if (type === 'binaural') {
            try {
                const beats = this.createBinauralBeats();
                this.binauralNodeL = beats.oscL;
                this.binauralNodeR = beats.oscR;
                this.binauralNodeL.start(0);
                this.binauralNodeR.start(0);
                this.activeSound = 'binaural';
                logAudio("Binaural Beats iniciado.");
            } catch (e) {
                logAudio(`Erro ao iniciar Binaural Beats: ${e.message}`);
                alert("Erro ao iniciar áudio: " + e.message);
            }
        } else {
            this.activeSound = 'none';
            logAudio("Som mutado.");
        }
    }

    stopCurrent() {
        logAudio("Limpando nós de áudio existentes...");
        if (this.brownNoiseNode) {
            try { this.brownNoiseNode.stop(); } catch (e) {}
            this.brownNoiseNode = null;
        }
        if (this.binauralNodeL) {
            try { this.binauralNodeL.stop(); } catch (e) {}
            this.binauralNodeL = null;
        }
        if (this.binauralNodeR) {
            try { this.binauralNodeR.stop(); } catch (e) {}
            this.binauralNodeR = null;
        }
    }
}

const audioPlayer = new FocusAudioPlayer();

/* ==========================================
   TIMER CONTROLLER (ARENA DE FOCO)
   ========================================== */
class TimerController {
    constructor() {
        this.timeLeft = 900;
        this.timerId = null;
        this.running = false;
        
        // Break properties
        this.breakTimerId = null;
        this.breakTimeLeft = 0;
        
        this.display = document.getElementById('timer-time');
        this.btnStart = document.getElementById('btn-timer-start');
        this.btnPause = document.getElementById('btn-timer-pause');
        this.btnReset = document.getElementById('btn-timer-reset');
        this.select = document.getElementById('timer-activity-select');
        this.ring = document.querySelector('.progress-ring__circle');
        
        if (this.ring) {
            this.radius = this.ring.r.baseVal.value;
            this.circumference = this.radius * 2 * Math.PI;
            this.ring.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
            this.ring.style.strokeDashoffset = this.circumference;
        }
        
        this.initEvents();
    }

    initEvents() {
        this.btnStart.addEventListener('click', () => this.start());
        this.btnPause.addEventListener('click', () => this.pause());
        this.btnReset.addEventListener('click', () => this.reset());
        this.select.addEventListener('change', () => this.onSelectChange());
        
        // Break overlay resume button
        document.getElementById('btn-resume-timer').addEventListener('click', () => {
            this.stopBreakTimer();
            document.getElementById('dopamine-break-overlay').classList.add('hidden');
            document.getElementById('timer-main-controls').classList.remove('hidden');
            this.start();
        });
        
        // Break cancel button
        document.getElementById('btn-cancel-break').addEventListener('click', () => {
            this.stopBreakTimer();
        });
        
        // Break activity choices
        document.querySelectorAll('.btn-break-act').forEach(btn => {
            btn.addEventListener('click', () => {
                const time = parseInt(btn.dataset.time);
                const desc = btn.dataset.desc;
                this.startBreak(time, desc);
            });
        });
    }

    onSelectChange() {
        this.pause();
        this.timeLeft = parseInt(this.select.value);
        this.initialTime = this.timeLeft;
        this.updateDisplay();
    }

    setProgress(percent) {
        if (!this.ring) return;
        const offset = this.circumference - (percent / 100 * this.circumference);
        this.ring.style.strokeDashoffset = offset;
    }

    updateDisplay() {
        const mins = Math.floor(this.timeLeft / 60);
        const secs = this.timeLeft % 60;
        this.display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (this.initialTime) {
            const pct = ((this.initialTime - this.timeLeft) / this.initialTime) * 100;
            this.setProgress(pct);
        }
    }

    start() {
        if (this.running) return;
        audioPlayer.initCtx();
        
        this.running = true;
        this.btnStart.disabled = true;
        this.btnPause.disabled = false;
        this.initialTime = this.initialTime || this.timeLeft;
        
        this.timerId = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();
            
            if (this.timeLeft <= 0) {
                this.complete();
            }
        }, 1000);
    }

    pause() {
        if (!this.running) return;
        this.running = false;
        this.btnStart.disabled = false;
        this.btnPause.disabled = true;
        clearInterval(this.timerId);
        
        // Show Dopamine Break Overlay
        document.getElementById('timer-main-controls').classList.add('hidden');
        const overlay = document.getElementById('dopamine-break-overlay');
        overlay.classList.remove('hidden');
        
        // Make sure options are visible and break timer is hidden initially
        document.querySelector('.break-options').classList.remove('hidden');
        document.getElementById('break-timer-box').classList.add('hidden');
    }

    reset() {
        this.pause();
        // Hide overlay and restore controls
        document.getElementById('dopamine-break-overlay').classList.add('hidden');
        document.getElementById('timer-main-controls').classList.remove('hidden');
        
        this.timeLeft = parseInt(this.select.value);
        this.initialTime = this.timeLeft;
        this.setProgress(0);
        this.updateDisplay();
    }

    complete() {
        this.pause();
        
        // Hide overlay and restore controls
        document.getElementById('dopamine-break-overlay').classList.add('hidden');
        document.getElementById('timer-main-controls').classList.remove('hidden');
        
        window.confetti.start();
        audioPlayer.playDopamineTone();
        
        // Add Gamification XP for timer completion
        state.addXP(100);
        state.timersCompleted++;
        state.saveState();
        checkBadges();
        
        alert(`Parabéns! Bloco de "${this.select.options[this.select.selectedIndex].text}" concluído! +100 XP adicionados!`);
        this.reset();
    }
    
    // BREAK TIMERS SECTION
    startBreak(seconds, description) {
        // Lock options
        document.querySelector('.break-options').classList.add('hidden');
        const box = document.getElementById('break-timer-box');
        box.classList.remove('hidden');
        
        document.getElementById('break-timer-desc').textContent = description;
        this.breakTimeLeft = seconds;
        this.updateBreakDisplay();
        
        clearInterval(this.breakTimerId);
        this.breakTimerId = setInterval(() => {
            this.breakTimeLeft--;
            this.updateBreakDisplay();
            
            if (this.breakTimeLeft <= 0) {
                this.completeBreak();
            }
        }, 1000);
    }
    
    updateBreakDisplay() {
        const mins = Math.floor(this.breakTimeLeft / 60);
        const secs = this.breakTimeLeft % 60;
        document.getElementById('break-timer-time').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    stopBreakTimer() {
        clearInterval(this.breakTimerId);
        document.getElementById('break-timer-box').classList.add('hidden');
        document.querySelector('.break-options').classList.remove('hidden');
    }
    
    completeBreak() {
        clearInterval(this.breakTimerId);
        
        // Reward!
        state.coins += 15;
        state.saveState();
        updateLevelHUD();
        
        window.confetti.start();
        audioPlayer.playDopamineTone();
        
        alert("✨ Excelente! Você fez uma pausa dopaminérgica saudável sem distrações! +15 Moedas de Dopamina adicionadas.");
        
        // Restore controls
        this.stopBreakTimer();
        document.getElementById('dopamine-break-overlay').classList.add('hidden');
        document.getElementById('timer-main-controls').classList.remove('hidden');
        this.start(); // Auto resume studies
    }
}

let timerController;

/* ==========================================
   APP INITIALIZATION
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    timerController = new TimerController();
    
    initGrid();
    loadDay(state.currentDay);
    initSoundButtons();
    initChecklistEvents();
    initVocabForm();
    initWritingWorkspace();
    initFiscalConfig();
    initTabs();
    initSettingsModal();
    initTutorAI();
    initSpeedWordBattle();
    initFlashcards();
    
    // ADHD Spec Initializers
    initBionicReader();
    initDopamineShop();
    initAudioDebugger();
    initStreakShieldButton();
    
    // Updates HUD
    updateLevelHUD();
    renderBadges();
    calculateOverallProgress();
    checkBadges();

    // Global click listener to unlock Web Audio context on the first user interaction
    document.body.addEventListener('click', () => {
        audioPlayer.initCtx();
        if (audioPlayer.audioCtx && audioPlayer.audioCtx.state === 'suspended') {
            audioPlayer.audioCtx.resume().then(() => {
                logAudio("AudioContext ativado via clique global.");
            }).catch(err => {
                logAudio(`Erro ao ativar AudioContext via clique global: ${err.message}`);
            });
        }
    }, { once: true });
});

/* Sidebar Navigation Tabs */
function initTabs() {
    const tabs = document.querySelectorAll('.btn-tab');
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            
            const targetTab = btn.dataset.tab;
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            document.getElementById(`tab-content-${targetTab}`).classList.add('active');
        });
    });
}

/* 1. Grid of 56 Days rendering */
function initGrid() {
    const grid = document.getElementById('days-grid');
    grid.innerHTML = '';
    
    for (let day = 1; day <= 56; day++) {
        const box = document.createElement('div');
        box.classList.add('day-box');
        box.textContent = day;
        box.dataset.day = day;
        
        const savedScore = state.daysData[day]?.score;
        if (savedScore !== undefined) {
            if (savedScore >= 8) {
                box.classList.add('done');
            } else if (savedScore >= 5) {
                box.classList.add('partial');
            } else {
                box.classList.add('failed');
            }
        }
        
        if (day === state.currentDay) {
            box.classList.add('active');
        }
        
        box.addEventListener('click', () => {
            document.querySelectorAll('.day-box').forEach(b => b.classList.remove('active'));
            box.classList.add('active');
            loadDay(day);
        });
        
        grid.appendChild(box);
    }
}

/* 2. Audio button configurations */
function initSoundButtons() {
    const buttons = document.querySelectorAll('.btn-sound');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const type = btn.dataset.sound;
            audioPlayer.setSound(type);
        });
    });
}

/* 3. Loading Day Data */
function loadDay(day) {
    state.currentDay = day;
    state.saveState();
    
    const weekNum = Math.ceil(day / 7);
    const weekConfig = WEEKS_DATA[weekNum - 1];
    
    document.getElementById('current-week-label').textContent = `Semana ${weekNum}: ${weekConfig.title}`;
    document.getElementById('current-day-title').textContent = `Dia ${day}`;
    
    document.getElementById('week-main-goal').textContent = weekConfig.mainGoal;
    document.getElementById('week-sec-goal').textContent = weekConfig.secGoal;
    document.getElementById('week-hours').textContent = weekConfig.hours;
    document.getElementById('week-indicator').textContent = weekConfig.indicator;
    
    const savedDayData = state.daysData[day] || { score: 0, checkedTasks: [] };
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(cb => {
        cb.checked = savedDayData.checkedTasks.includes(cb.dataset.id);
    });
    
    const writingData = state.writingNotes[day] || { text: "", type: "journal" };
    const textarea = document.getElementById('writing-textarea');
    const typeSelect = document.getElementById('writing-type');
    
    textarea.value = writingData.text;
    typeSelect.value = writingData.type;
    updateWordCount(writingData.text);
    
    calculateDES();
    renderVocabList();
    
    // Auto generate/reset active tutor challenge
    resetTutorChallengeView();
    
    // Toggle Use Shield Button
    const shieldBtn = document.getElementById('btn-use-shield');
    if (shieldBtn) {
        const dayScore = state.daysData[day]?.score || 0;
        const isShielded = state.shieldedDays && state.shieldedDays.includes(day);
        
        if (isShielded) {
            shieldBtn.innerHTML = `🛡️ Dia Protegido por Escudo`;
            shieldBtn.disabled = true;
            shieldBtn.classList.remove('hidden');
        } else if (dayScore < 8 && state.streakShields > 0) {
            shieldBtn.innerHTML = `🛡️ Usar Escudo de Ofensa (Possui <span id="shield-count-label">${state.streakShields}</span>)`;
            shieldBtn.disabled = false;
            shieldBtn.classList.remove('hidden');
        } else {
            shieldBtn.classList.add('hidden');
        }
    }
}

/* 4. Checklist action behavior & DES calculations */
function initChecklistEvents() {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.checked) {
                audioPlayer.playDopamineTone();
                state.addXP(10); // +10 XP for checking off items!
            }
            calculateDES();
            autoSaveCurrentDayChecklist();
        });
    });
    
    document.getElementById('btn-save-day').addEventListener('click', saveDayPermanently);
}

function calculateDES() {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    let totalPoints = 0;
    
    checkboxes.forEach(cb => {
        if (cb.checked) {
            totalPoints += parseFloat(cb.dataset.points);
        }
    });
    
    document.getElementById('des-score').textContent = totalPoints;
    generateWhatsAppReport(totalPoints);
    return totalPoints;
}

function autoSaveCurrentDayChecklist() {
    const checked = [];
    document.querySelectorAll('.task-checkbox').forEach(cb => {
        if (cb.checked) checked.push(cb.dataset.id);
    });
    
    if (!state.daysData[state.currentDay]) {
        state.daysData[state.currentDay] = { score: 0, checkedTasks: [] };
    }
    state.daysData[state.currentDay].checkedTasks = checked;
    state.saveState();
}

function saveDayPermanently() {
    const currentScore = calculateDES();
    const checked = [];
    document.querySelectorAll('.task-checkbox').forEach(cb => {
        if (cb.checked) checked.push(cb.dataset.id);
    });
    
    state.daysData[state.currentDay] = {
        score: currentScore,
        checkedTasks: checked
    };
    
    // Add XP rewards
    if (currentScore === 10) {
        state.addXP(300); // 300XP for perfect execution
    } else if (currentScore >= 8) {
        state.addXP(150); // 150XP for meta batida
    }
    
    state.saveState();
    initGrid();
    calculateOverallProgress();
    checkBadges();
    
    if (currentScore === 10) {
        window.confetti.start();
        audioPlayer.playDopamineTone();
        alert("👑 INCORRIGÍVEL! Score máximo (10/10) gravado! Você ganhou +300 XP!");
    } else if (currentScore >= 8) {
        window.confetti.start();
        alert(`Excelente! Dia concluído com score ${currentScore}/10. Você ganhou +150 XP!`);
    } else {
        alert(`Atenção: Dia gravado com score ${currentScore}/10. Você está abaixo da meta recomendada! O dia seguinte entrará em CÓDIGO VERMELHO de compensação.`);
    }
}

function calculateOverallProgress() {
    let completedCount = 0;
    const totalDays = 56;
    
    for (let day = 1; day <= totalDays; day++) {
        if (state.daysData[day] && state.daysData[day].score >= 8) {
            completedCount++;
        }
    }
    
    const pct = Math.round((completedCount / totalDays) * 100);
    document.getElementById('overall-progress-bar').style.width = `${pct}%`;
    document.getElementById('progress-percentage').textContent = `${pct}%`;
}

/* 5. Vocabulary Miner Engine */
function initVocabForm() {
    const form = document.getElementById('vocab-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newWord = {
            word: document.getElementById('vocab-word').value.trim(),
            translation: document.getElementById('vocab-translation').value.trim(),
            s1: document.getElementById('vocab-s1').value.trim(),
            s2: document.getElementById('vocab-s2').value.trim(),
            s3: document.getElementById('vocab-s3').value.trim(),
            dayAdded: state.currentDay
        };
        
        state.vocabBank.push(newWord);
        
        // Award XP for mining words!
        state.addXP(10);
        state.saveState();
        
        form.reset();
        audioPlayer.playDopamineTone();
        renderVocabList();
        checkBadges();
        
        const listHeader = document.querySelector('.vocab-list-header h3');
        listHeader.style.color = 'var(--secondary)';
        setTimeout(() => listHeader.style.color = '#fff', 500);
    });
    
    document.getElementById('btn-export-anki').addEventListener('click', exportAnkiCSV);
}

function renderVocabList() {
    const list = document.getElementById('vocab-list');
    list.innerHTML = '';
    
    document.getElementById('vocab-count').textContent = state.vocabBank.length;
    
    const reversedVocab = [...state.vocabBank].reverse();
    reversedVocab.forEach((item, index) => {
        const originalIndex = state.vocabBank.length - 1 - index;
        
        const div = document.createElement('div');
        div.classList.add('vocab-item');
        
        div.innerHTML = `
            <button class="vocab-delete" data-index="${originalIndex}">✕</button>
            <div class="vocab-item-main" style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span class="vocab-item-word" style="cursor: pointer;" title="Clique para ouvir pronúncia">${item.word}</span>
                    <button class="btn-vocab-speak-word" title="Ouvir palavra" style="background: none; border: none; color: var(--secondary); cursor: pointer; font-size: 13px; padding: 2px; display: inline-flex; align-items: center; filter: drop-shadow(0 0 2px var(--secondary-glow));">🔊</button>
                </div>
                <span class="vocab-item-trans">${item.translation}</span>
            </div>
            <div class="vocab-item-sentences">
                ${item.s1 ? `
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-top: 2px;">
                    <span class="vocab-item-sentence s1-text" style="cursor: pointer; flex: 1;" title="Clique para ouvir frase">1. ${item.s1}</span>
                    <button class="btn-vocab-speak-s1" title="Ouvir frase" style="background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 11px; padding: 2px; display: inline-flex; align-items: center;">🔊</button>
                </div>` : ''}
                ${item.s2 ? `
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-top: 2px;">
                    <span class="vocab-item-sentence s2-text" style="cursor: pointer; flex: 1;" title="Clique para ouvir frase">2. ${item.s2}</span>
                    <button class="btn-vocab-speak-s2" title="Ouvir frase" style="background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 11px; padding: 2px; display: inline-flex; align-items: center;">🔊</button>
                </div>` : ''}
                ${item.s3 ? `
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-top: 2px;">
                    <span class="vocab-item-sentence s3-text" style="cursor: pointer; flex: 1;" title="Clique para ouvir frase">3. ${item.s3}</span>
                    <button class="btn-vocab-speak-s3" title="Ouvir frase" style="background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 11px; padding: 2px; display: inline-flex; align-items: center;">🔊</button>
                </div>` : ''}
            </div>
        `;
        
        const wordEl = div.querySelector('.vocab-item-word');
        const btnWord = div.querySelector('.btn-vocab-speak-word');
        if (wordEl) wordEl.addEventListener('click', () => speakEnglish(item.word));
        if (btnWord) btnWord.addEventListener('click', () => speakEnglish(item.word));
        
        if (item.s1) {
            const s1El = div.querySelector('.s1-text');
            const btnS1 = div.querySelector('.btn-vocab-speak-s1');
            if (s1El) s1El.addEventListener('click', () => speakEnglish(item.s1));
            if (btnS1) btnS1.addEventListener('click', () => speakEnglish(item.s1));
        }
        if (item.s2) {
            const s2El = div.querySelector('.s2-text');
            const btnS2 = div.querySelector('.btn-vocab-speak-s2');
            if (s2El) s2El.addEventListener('click', () => speakEnglish(item.s2));
            if (btnS2) btnS2.addEventListener('click', () => speakEnglish(item.s2));
        }
        if (item.s3) {
            const s3El = div.querySelector('.s3-text');
            const btnS3 = div.querySelector('.btn-vocab-speak-s3');
            if (s3El) s3El.addEventListener('click', () => speakEnglish(item.s3));
            if (btnS3) btnS3.addEventListener('click', () => speakEnglish(item.s3));
        }
        
        div.querySelector('.vocab-delete').addEventListener('click', (e) => {
            const idx = parseInt(e.target.dataset.index);
            state.vocabBank.splice(idx, 1);
            state.saveState();
            renderVocabList();
            checkBadges();
        });
        
        list.appendChild(div);
    });
}

function exportAnkiCSV() {
    if (state.vocabBank.length === 0) {
        alert("O seu banco de vocabulário está vazio. Adicione palavras antes de exportar!");
        return;
    }
    
    let csvContent = "";
    state.vocabBank.forEach(item => {
        const front = `${item.word}`;
        const back = `${item.translation}<br><br><b>Exemplos de Ativação:</b><br>1. ${item.s1}<br>2. ${item.s2}<br>3. ${item.s3}`;
        csvContent += `${front}\t${back}\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/tab-separated-values;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Vocabulario_Anki_Dia_${state.currentDay}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/* 6. Writing Workspace & Prompt Generator */
function initWritingWorkspace() {
    const textarea = document.getElementById('writing-textarea');
    const select = document.getElementById('writing-type');
    
    textarea.addEventListener('input', () => {
        const count = updateWordCount(textarea.value);
        saveWriting(count);
    });
    
    select.addEventListener('change', () => {
        const count = updateWordCount(textarea.value);
        saveWriting(count);
    });
    
    document.getElementById('btn-copy-prompt').addEventListener('click', copyAIPrompt);
}

function updateWordCount(text) {
    const cleanText = text.trim();
    const count = cleanText === "" ? 0 : cleanText.split(/\s+/).length;
    document.getElementById('word-count').textContent = `${count} palavras`;
    return count;
}

function saveWriting(currentCount) {
    const text = document.getElementById('writing-textarea').value;
    const type = document.getElementById('writing-type').value;
    
    // Calculate difference to track cumulative word counts for Badge
    const prevText = state.writingNotes[state.currentDay]?.text || "";
    const prevCount = prevText.trim() === "" ? 0 : prevText.trim().split(/\s+/).length;
    const diff = currentCount - prevCount;
    
    if (diff > 0) {
        state.wordsWrittenAccumulated += diff;
    }
    
    state.writingNotes[state.currentDay] = { text, type };
    state.saveState();
    checkBadges();
}

function copyAIPrompt() {
    const text = document.getElementById('writing-textarea').value.trim();
    if (text === "") {
        alert("Por favor, escreva algo no editor antes de copiar o prompt!");
        return;
    }
    
    const promptTemplate = `Aja como um linguista especialista em ensino de inglês para estrangeiros e coach de escrita. Analise o meu texto em inglês fornecido abaixo.
1. Corrija todos os erros gramaticais, ortográficos e de pontuação.
2. Reescreva o texto em uma versão mais natural e nativa (Natural Phrasing), mantendo a minha informação original.
3. Crie uma tabela comparativa com 3 colunas: [Erro Original] | [Versão Corrigida] | [Explicação Gramatical Curta em Português].
4. Liste de 3 a 5 novas palavras ou expressões idiomáticas que eu poderia ter usado para enriquecer este texto.
5. Classifique meu texto bruto na escala do CEFR (A1, A2, B1, B2, C1, C2).

Aqui está o meu texto:
"${text}"`;
    
    // Award 40 XP for executing a diary entry
    state.addXP(40);
    
    navigator.clipboard.writeText(promptTemplate)
        .then(() => {
            audioPlayer.playDopamineTone();
            alert("Prompt de Correção IA copiado com sucesso! (+40 XP ganhos)");
        })
        .catch(err => {
            console.error("Falha ao copiar prompt", err);
        });
}

/* 7. Accountability System (WhatsApp Report) */
function initFiscalConfig() {
    const nameInput = document.getElementById('fiscal-name');
    const phoneInput = document.getElementById('fiscal-phone');
    
    nameInput.value = state.fiscalConfig.name;
    phoneInput.value = state.fiscalConfig.phone;
    
    nameInput.addEventListener('input', () => {
        state.fiscalConfig.name = nameInput.value.trim();
        state.saveState();
        calculateDES();
    });
    
    phoneInput.addEventListener('input', () => {
        state.fiscalConfig.phone = phoneInput.value.trim();
        state.saveState();
        calculateDES();
    });
    
    document.getElementById('btn-send-whatsapp').addEventListener('click', sendWhatsAppReport);
}

function generateWhatsAppReport(currentScore) {
    const day = state.currentDay;
    const weekNum = Math.ceil(day / 7);
    const fiscalName = state.fiscalConfig.name || "Fiscal";
    
    const taskDetails = [];
    document.querySelectorAll('.task-checkbox').forEach(cb => {
        const taskLabel = cb.closest('label').querySelector('.task-name').textContent;
        const icon = cb.checked ? "\u{2705}" : "\u{274C}";
        taskDetails.push(`${icon} ${taskLabel}`);
    });
    
    let warning = "";
    if (currentScore < 8) {
        warning = `\n\u{26A0}\u{FE0F} *ALERTA CÓDIGO VERMELHO*: Meu score ficou abaixo de 8 pontos. Estou sujeito à multa acordada e compensarei amanhã sem lazer!`;
    } else {
        warning = `\n\u{1F3C6} *META DIÁRIA BATIDA*: Execução consistente mantida!`;
    }
    
    const reportTemplate = `Fala, ${fiscalName}! Segue meu Relatório de Accountability de Inglês:

\u{1F4C5} *Dia ${day} (Semana ${weekNum})*
\u{26A1} *Score Diário (DES):* ${currentScore}/10

*Resumo das Atividades:*
${taskDetails.join('\n')}
${warning}

_Gerado automaticamente pelo meu TDAH English Dashboard._`;

    const reportBox = document.getElementById('report-text');
    if (reportBox) reportBox.textContent = reportTemplate;
    return reportTemplate;
}

function sendWhatsAppReport() {
    const score = calculateDES();
    const reportText = generateWhatsAppReport(score);
    const phone = state.fiscalConfig.phone.replace(/\D/g, "");
    
    if (phone === "") {
        alert("Por favor, preencha o número de telefone do seu Fiscal no campo de Cobrança primeiro!");
        return;
    }
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(reportText)}`;
    window.open(url, '_blank');
}

/* ==========================================
   AI API SETTINGS & KEY MANAGEMENT
   ========================================== */
function initSettingsModal() {
    const modal = document.getElementById('modal-settings');
    const btnOpen = document.getElementById('btn-settings');
    const btnClose = document.getElementById('btn-close-settings');
    const form = document.getElementById('settings-form');
    const keyInput = document.getElementById('gemini-key-input');
    const apiWarning = document.getElementById('api-warning');
    
    btnOpen.addEventListener('click', () => {
        keyInput.value = state.geminiKey;
        modal.classList.add('active');
    });
    
    btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        state.geminiKey = keyInput.value.trim();
        state.saveState();
        
        modal.classList.remove('active');
        audioPlayer.playDopamineTone();
        alert("Configurações salvas com sucesso!");
        
        toggleAPIWarning();
    });

    document.getElementById('btn-export-calendar').addEventListener('click', () => {
        exportCalendarICS();
        audioPlayer.playDopamineTone();
        alert("Arquivo .ICS da Agenda exportado com sucesso! Siga as instruções para importar no seu Google Agenda.");
    });

    document.querySelectorAll('.btn-calendar-link').forEach(btn => {
        btn.addEventListener('click', () => {
            const eventIndex = parseInt(btn.dataset.event);
            addGoogleEventOnline(eventIndex);
            audioPlayer.playDopamineTone();
        });
    });

    toggleAPIWarning();
}

function toggleAPIWarning() {
    const apiWarning = document.getElementById('api-warning');
    if (state.geminiKey) {
        apiWarning.classList.add('hidden');
    } else {
        apiWarning.classList.remove('hidden');
    }
}

function exportCalendarICS() {
    const events = [
        {
            summary: "🚀 KICKSTART: Duolingo & Foco Matinal",
            description: "Abra o app do Duolingo e faca 3 licoes rapidas. Quebre a inercia agora. O dia comecou!",
            start: "070000",
            end: "071500",
            rrule: "FREQ=DAILY;COUNT=56"
        },
        {
            summary: "🎧 IMERSAO ATIVA: Mapeamento Auditivo (YouTube/Podcast)",
            description: "Ligue o cancelamento de ruido do fone. Assista a um video ou ouca um podcast em ingles. Faca anotacoes de 5 a 10 termos novos.",
            start: "071500",
            end: "081500",
            rrule: "FREQ=DAILY;COUNT=56"
        },
        {
            summary: "✍️ INPUT PARA OUTPUT: Leitura e Escrita IA",
            description: "Leia em voz alta por 15 minutos. Escreva seu diario no Google Docs. Envie para correcao no ChatGPT/Claude e reescreva corrigido no caderno.",
            start: "081500",
            end: "091500",
            rrule: "FREQ=DAILY;COUNT=56"
        },
        {
            summary: "🧠 ANKI: Repeticao Espacada Rapida",
            description: "Abra o aplicativo Anki. Revise todos os cards do dia e adicione os termos novos minerados.",
            start: "091500",
            end: "093000",
            rrule: "FREQ=DAILY;COUNT=56"
        },
        {
            summary: "🗣️ YAY Talks: Batalha de Conversacao",
            description: "Hora da arena. Abra o YAY Talks. Escolha o tema do dia. Fale sem medo de errar. Registre as correcoes do tutor.",
            start: "193000",
            end: "203000",
            rrule: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR,SA;COUNT=48"
        },
        {
            summary: "🎬 IMERSAO CINEMA: Shadowing e Lazer Ativo",
            description: "Assista a um episodio de sitcom. Aplique a tecnica dos 15 minutos sem legenda. Repita as frases em voz alta. Relaxe.",
            start: "203000",
            end: "213000",
            rrule: "FREQ=DAILY;COUNT=56"
        }
    ];

    let icsContent = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//ADHD English Planner//NONSGML v1.0//EN\r\nCALSCALE:GREGORIAN\r\n";
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0].replace(/-/g, ""); // YYYYMMDD
    
    events.forEach((ev, idx) => {
        icsContent += "BEGIN:VEVENT\r\n";
        icsContent += `UID:uid_${idx}_${Date.now()}@adhdplanner.local\r\n`;
        icsContent += `DTSTAMP:${dateStr}T000000Z\r\n`;
        icsContent += `DTSTART:${dateStr}T${ev.start}\r\n`;
        icsContent += `DTEND:${dateStr}T${ev.end}\r\n`;
        icsContent += `RRULE:${ev.rrule}\r\n`;
        icsContent += `SUMMARY:${ev.summary}\r\n`;
        icsContent += `DESCRIPTION:${ev.description}\r\n`;
        icsContent += "END:VEVENT\r\n";
    });
    
    icsContent += "END:VCALENDAR";
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Agenda_Ingles_TDAH.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function addGoogleEventOnline(eventIndex) {
    const events = [
        {
            summary: "🚀 KICKSTART: Duolingo & Foco Matinal",
            description: "Abra o app do Duolingo e faça 3 lições rápidas. Quebre a inércia agora. O dia começou!",
            start: "070000",
            end: "071500",
            recur: "FREQ=DAILY;COUNT=56"
        },
        {
            summary: "🎧 IMERSÃO ATIVA: Mapeamento Auditivo (YouTube/Podcast)",
            description: "Ligue o cancelamento de ruído do fone. Assista a um vídeo ou ouça um podcast em inglês. Faça anotações de 5 a 10 termos novos.",
            start: "071500",
            end: "081500",
            recur: "FREQ=DAILY;COUNT=56"
        },
        {
            summary: "✍️ INPUT PARA OUTPUT: Leitura e Escrita IA",
            description: "Leia em voz alta por 15 minutos. Escreva seu diário no Google Docs. Envie para correção no ChatGPT/Claude e reescreva corrigido no caderno.",
            start: "081500",
            end: "091500",
            recur: "FREQ=DAILY;COUNT=56"
        },
        {
            summary: "🧠 ANKI: Repetição Espaçada Rápida",
            description: "Abra o aplicativo Anki. Revise todos os cards do dia e adicione os termos novos minerados.",
            start: "091500",
            end: "093000",
            recur: "FREQ=DAILY;COUNT=56"
        },
        {
            summary: "🗣️ YAY Talks: Batalha de Conversação",
            description: "Hora da arena. Abra o YAY Talks. Escolha o tema do dia. Fale sem medo de errar. Registre as correcoes do tutor.",
            start: "193000",
            end: "203000",
            recur: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR,SA;COUNT=48"
        },
        {
            summary: "🎬 IMERSÃO CINEMA: Shadowing e Lazer Ativo",
            description: "Assista a um episódio de sitcom. Aplique a técnica dos 15 minutos sem legenda. Repita as frases em voz alta. Relaxe.",
            start: "203000",
            end: "213000",
            recur: "FREQ=DAILY;COUNT=56"
        }
    ];

    const ev = events[eventIndex];
    
    // Start tomorrow (local timezone YYYYMMDD)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    const dateStr = `${year}${month}${day}`;
    
    const startStr = `${dateStr}T${ev.start}`;
    const endStr = `${dateStr}T${ev.end}`;
    
    // Build Google Calendar TEMPLATE URL
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(ev.summary)}&dates=${startStr}/${endStr}&details=${encodeURIComponent(ev.description)}&recur=${encodeURIComponent(ev.recur)}&sf=true&output=xml`;
    
    window.open(url, '_blank');
}

/* ==========================================
   GAMIFICATION HUD UPDATER & LEVEL UP
   ========================================== */
function updateLevelHUD() {
    const levelLabel = document.getElementById('user-level');
    const rankLabel = document.getElementById('user-rank');
    const progressFill = document.getElementById('level-progress-bar');
    const xpDisplay = document.getElementById('user-xp-display');
    
    // ADHD Currency HUD
    const coinsDisplay = document.getElementById('user-coins-display');
    const shieldsDisplay = document.getElementById('user-shields-display');
    const shopCoinsDisplay = document.getElementById('shop-coins-display');
    
    const level = state.level;
    const xp = state.xp;
    const xpNeeded = level * 200;
    
    // Ranks based on levels
    let rank = "English Novice 🟢";
    if (level >= 18) rank = "ADHD Conqueror 🔥";
    else if (level >= 13) rank = "Fluency Seeker 🟣";
    else if (level >= 8) rank = "Fearless Speaker 🔵";
    else if (level >= 4) rank = "Grammar Padawan 🟡";
    
    levelLabel.textContent = level;
    rankLabel.textContent = rank;
    xpDisplay.textContent = `${xp} / ${xpNeeded} XP`;
    
    if (coinsDisplay) coinsDisplay.textContent = `🪙 ${state.coins} DM`;
    if (shopCoinsDisplay) shopCoinsDisplay.textContent = state.coins;
    if (shieldsDisplay) shieldsDisplay.textContent = `🛡️ ${state.streakShields} Escudos`;
    
    // Update Flashcards HUD counts
    const knownCountLabel = document.getElementById('flashcard-known-count');
    const newCountLabel = document.getElementById('flashcard-new-count');
    if (knownCountLabel) knownCountLabel.textContent = state.knownWords ? state.knownWords.length : 0;
    if (newCountLabel) newCountLabel.textContent = state.learnedWordsCount || 0;
    
    const pct = Math.min((xp / xpNeeded) * 100, 100);
    progressFill.style.width = `${pct}%`;
}

function renderBadges() {
    const badges = ['badge-first-step', 'badge-perfect-day', 'badge-golden-streak', 'badge-vocab-miner', 'badge-timer-master', 'badge-writer-silver'];
    badges.forEach(bId => {
        const element = document.getElementById(bId);
        if (state.unlockedBadges.includes(bId)) {
            element.classList.remove('locked');
            element.classList.add('unlocked');
        } else {
            element.classList.remove('unlocked');
            element.classList.add('locked');
        }
    });
}

function checkBadges() {
    // 1. First Step: Save any day with score >= 8
    const savedDays = Object.keys(state.daysData).filter(day => state.daysData[day].score >= 8);
    if (savedDays.length >= 1) {
        state.unlockBadge('badge-first-step');
    }
    
    // 2. Perfect Day: Save a day with score == 10
    const perfectDays = Object.keys(state.daysData).filter(day => state.daysData[day].score === 10);
    if (perfectDays.length >= 1) {
        state.unlockBadge('badge-perfect-day');
    }
    
    // 3. Golden Streak: 7 consecutive days with score >= 8 (or shielded)
    let maxStreak = 0;
    let currentStreak = 0;
    for (let day = 1; day <= 56; day++) {
        const isShielded = state.shieldedDays && state.shieldedDays.includes(day);
        if ((state.daysData[day] && state.daysData[day].score >= 8) || isShielded) {
            currentStreak++;
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    }
    if (maxStreak >= 7) {
        state.unlockBadge('badge-golden-streak');
    }
    
    // 4. Vocab Miner Master: 30+ vocabulary words in bank
    if (state.vocabBank.length >= 30) {
        state.unlockBadge('badge-vocab-miner');
    }
    
    // 5. Timer Master: Complete 10 Arena blocks
    if (state.timersCompleted >= 10) {
        state.unlockBadge('badge-timer-master');
    }
    
    // 6. Writer Silver: 500+ words accumulated in diary
    if (state.wordsWrittenAccumulated >= 500) {
        state.unlockBadge('badge-writer-silver');
    }
}

function triggerLevelUpModal(newLevel) {
    const modal = document.getElementById('modal-level-up');
    const title = document.getElementById('level-up-title');
    const rankName = document.getElementById('level-up-rank-name');
    const btnClose = document.getElementById('btn-level-up-close');
    
    let rank = "English Novice";
    if (newLevel >= 18) rank = "ADHD Conqueror";
    else if (newLevel >= 13) rank = "Fluency Seeker";
    else if (newLevel >= 8) rank = "Fearless Speaker";
    else if (newLevel >= 4) rank = "Grammar Padawan";
    
    title.textContent = `Nível ${newLevel}`;
    rankName.textContent = rank;
    
    modal.classList.add('active');
    audioPlayer.playLevelUpTone();
    window.confetti.start();
    
    btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
    }, { once: true });
}

/* ==========================================
   GEMINI API CONNECTOR INTEGRATION
   ========================================== */
async function callGemini(prompt, systemInstruction = "") {
    if (!state.geminiKey) {
        throw new Error("Chave API do Gemini não configurada!");
    }
    
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${state.geminiKey}`;
    
    const requestBody = {
        contents: [{
            parts: [{ text: prompt }]
        }],
        generationConfig: {
            responseMimeType: "application/json"
        }
    };
    
    if (systemInstruction) {
        requestBody.systemInstruction = {
            parts: [{ text: systemInstruction }]
        };
    }
    
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Erro na API Gemini: ${response.status} - ${errText}`);
    }
    
    const resData = await response.json();
    if (!resData.candidates || resData.candidates.length === 0 || !resData.candidates[0].content || !resData.candidates[0].content.parts || resData.candidates[0].content.parts.length === 0) {
        throw new Error("Resposta vazia ou inválida da API Gemini.");
    }
    const textOutput = resData.candidates[0].content.parts[0].text;
    
    let cleanText = textOutput.trim();
    if (cleanText.startsWith("```")) {
        cleanText = cleanText.replace(/^```[a-zA-Z]*\s*/, "");
        cleanText = cleanText.replace(/\s*```$/, "");
    }
    cleanText = cleanText.trim();
    
    return JSON.parse(cleanText);
}

/* ==========================================
   INTEGRATED IA TUTOR ENGINE
   ========================================== */
let activeChallengeText = "";
let activeQuizWord = "";
let activeQuizTranslation = "";
let activeQuizAnswerIndex = -1;
let quizRequestId = 0;

function initTutorAI() {
    // Tutor subtabs navigation
    const subtabs = document.querySelectorAll('.btn-tutor-sub');
    subtabs.forEach(btn => {
        btn.addEventListener('click', () => {
            subtabs.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            
            const targetSub = btn.dataset.subtab;
            document.querySelectorAll('.tutor-pane').forEach(p => p.classList.remove('active'));
            document.getElementById(`subtab-content-${targetSub}`).classList.add('active');
            
            // Auto load content for specific pane
            if (targetSub === 'quiz') {
                loadQuizQuestion();
            }
        });
    });
    
    document.getElementById('btn-generate-challenge').addEventListener('click', generateChallenge);
    document.getElementById('btn-submit-challenge').addEventListener('click', evaluateChallenge);
    
    // Quiz speech button listener
    const btnQuizSpeak = document.getElementById('btn-quiz-speak');
    const quizQuestionEl = document.getElementById('quiz-question');
    if (btnQuizSpeak) {
        btnQuizSpeak.addEventListener('click', () => {
            const phrase = btnQuizSpeak.dataset.phrase;
            if (phrase) speakEnglish(phrase);
        });
    }
    if (quizQuestionEl && btnQuizSpeak) {
        quizQuestionEl.style.cursor = 'pointer';
        quizQuestionEl.title = 'Clique para ouvir a frase';
        quizQuestionEl.addEventListener('click', () => {
            const phrase = btnQuizSpeak.dataset.phrase;
            if (phrase) speakEnglish(phrase);
        });
    }
    
    // Quiz save-word event click listener
    const btnSaveWord = document.getElementById('btn-quiz-save-word');
    if (btnSaveWord) {
        btnSaveWord.addEventListener('click', () => {
            if (!activeQuizWord) return;
            const exists = state.vocabBank.some(v => v.word.toLowerCase() === activeQuizWord.toLowerCase());
            if (!exists) {
                state.vocabBank.push({
                    word: activeQuizWord,
                    translation: activeQuizTranslation || "Significado do quiz",
                    s1: `Word learned from IA Quiz.`,
                    s2: "",
                    s3: ""
                });
                state.saveState();
                btnSaveWord.textContent = `\u{2705} "${activeQuizWord}" Salva!`;
                btnSaveWord.disabled = true;
                
                audioPlayer.playDopamineTone();
                renderVocabList();
            }
        });
    }
}

function resetTutorChallengeView() {
    activeChallengeText = "";
    document.getElementById('challenge-prompt').textContent = "Clique no botão acima para gerar seu desafio baseado no foco da semana!";
    document.getElementById('challenge-user-input').value = "";
    document.getElementById('challenge-user-input').disabled = true;
    document.getElementById('btn-submit-challenge').disabled = true;
    document.getElementById('challenge-feedback-box').classList.add('hidden');
}

async function generateChallenge() {
    const promptBox = document.getElementById('challenge-prompt');
    const inputArea = document.getElementById('challenge-user-input');
    const btnSubmit = document.getElementById('btn-submit-challenge');
    
    promptBox.textContent = "Buscando conexão cerebral com a IA...";
    
    const weekNum = Math.ceil(state.currentDay / 7);
    const weekConfig = WEEKS_DATA[weekNum - 1];
    
    if (!state.geminiKey) {
        // Offline Fallback Challenge
        setTimeout(() => {
            activeChallengeText = OFFLINE_CHALLENGES[weekNum] || OFFLINE_CHALLENGES[1];
            promptBox.textContent = `[Modo Offline] ${activeChallengeText}`;
            inputArea.disabled = false;
            btnSubmit.disabled = false;
        }, 800);
        return;
    }
    
    try {
        const sysInstruction = "Você é um professor de inglês com Ph.D. em TDAH. O usuário está na Semana X de um plano intensivo. Gere um desafio de escrita interativo curto em português sobre o conteúdo daquela semana, exigindo uma resposta em inglês de 1 a 3 frases. Retorne estritamente um JSON com a chave: 'challenge' (string contendo a descrição do desafio em português).";
        const prompt = `Gere o desafio para a Semana ${weekNum} (Meta: ${weekConfig.title} / Conteúdo: ${weekConfig.mainGoal}).`;
        
        const res = await callGemini(prompt, sysInstruction);
        activeChallengeText = res.challenge;
        promptBox.textContent = activeChallengeText;
        inputArea.disabled = false;
        btnSubmit.disabled = false;
    } catch (e) {
        console.error("Gemini failed, fallback to local", e);
        activeChallengeText = OFFLINE_CHALLENGES[weekNum] || OFFLINE_CHALLENGES[1];
        promptBox.textContent = `[Modo Fallback] ${activeChallengeText}`;
        inputArea.disabled = false;
        btnSubmit.disabled = false;
    }
}

async function evaluateChallenge() {
    const responseText = document.getElementById('challenge-user-input').value.trim();
    if (!responseText) {
        alert("Por favor, digite a sua resposta antes de enviar!");
        return;
    }
    
    const btnSubmit = document.getElementById('btn-submit-challenge');
    const feedbackBox = document.getElementById('challenge-feedback-box');
    
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Avaliando...";
    
    if (!state.geminiKey) {
        // Offline feedback simulation
        setTimeout(() => {
            const wordCount = responseText.split(/\s+/).length;
            const offlineScore = Math.min(60 + (wordCount * 5), 100);
            
            document.getElementById('feedback-score').textContent = `${offlineScore} / 100`;
            document.getElementById('feedback-cefr').textContent = "B1 (Simulado)";
            document.getElementById('feedback-corrections').textContent = `[Offline] Bom esforço! Seu texto tem ${wordCount} palavras. Cadastre sua API Key do Gemini nas Configurações (ícone de engrenagem) para receber avaliações gramaticais precisas e personalizadas!`;
            document.getElementById('feedback-natural').textContent = responseText;
            
            feedbackBox.classList.remove('hidden');
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = "🧑‍🏫 Enviar para Avaliação (+30 XP)";
            
            state.addXP(30);
            audioPlayer.playDopamineTone();
        }, 1000);
        return;
    }
    
    try {
        const sysInstruction = `Você é um professor nativo de inglês. O aluno responderá a um desafio linguístico. Avalie a resposta dele de forma construtiva e retorne um objeto JSON estrito com as seguintes chaves:
- 'score' (número inteiro de 0 a 100 correspondendo à precisão)
- 'cefr' (string correspondente ao nível, ex: A2, B1, B2)
- 'corrections' (string curta em português listando erros ou aconselhando melhorias)
- 'natural' (string contendo a versão ideal da resposta reescrita de forma natural por um nativo)`;
        
        const prompt = `Desafio: "${activeChallengeText}"\nResposta do aluno: "${responseText}"`;
        const res = await callGemini(prompt, sysInstruction);
        
        document.getElementById('feedback-score').textContent = `${res.score} / 100`;
        document.getElementById('feedback-cefr').textContent = res.cefr;
        document.getElementById('feedback-corrections').textContent = res.corrections;
        document.getElementById('feedback-natural').textContent = res.natural;
        
        feedbackBox.classList.remove('hidden');
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = "🧑‍🏫 Enviar para Avaliação (+30 XP)";
        
        // Award XP!
        state.addXP(30);
        audioPlayer.playDopamineTone();
    } catch (e) {
        console.error("Gemini eval failed", e);
        alert("Ocorreu um erro ao conectar com o Gemini API. Verifique sua chave nas configurações!");
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = "🧑‍🏫 Enviar para Avaliação (+30 XP)";
    }
}

function loadQuizQuestion() {
    const qBox = document.getElementById('quiz-question');
    const optsContainer = document.getElementById('quiz-options');
    const feedbackBox = document.getElementById('quiz-feedback');
    const btnNext = document.getElementById('btn-next-quiz');
    const btnSaveWord = document.getElementById('btn-quiz-save-word');
    const btnQuizSpeak = document.getElementById('btn-quiz-speak');
    
    feedbackBox.classList.add('hidden');
    if (btnSaveWord) btnSaveWord.classList.add('hidden');
    if (btnQuizSpeak) btnQuizSpeak.classList.add('hidden');
    optsContainer.innerHTML = '';
    
    activeQuizWord = "";
    activeQuizTranslation = "";
    
    // Increment request ID to prevent race condition overlaps
    quizRequestId++;
    const currentRequestId = quizRequestId;
    
    if (btnNext) btnNext.disabled = true;
    
    const vocabList = state.vocabBank.length > 0 ? state.vocabBank : DEFAULT_VOCAB_FALLBACK;
    
    if (!state.geminiKey) {
        // Offline Local Quiz Generator (runs synchronously, no race)
        if (btnNext) btnNext.disabled = false;
        
        const targetItem = vocabList[Math.floor(Math.random() * vocabList.length)];
        activeQuizWord = targetItem.word;
        activeQuizTranslation = targetItem.translation;
        
        const incorrectOptions = [];
        const possibleDistractors = vocabList.filter(item => item.word !== targetItem.word);
        
        while (incorrectOptions.length < 3 && possibleDistractors.length > 0) {
            const idx = Math.floor(Math.random() * possibleDistractors.length);
            const distractor = possibleDistractors.splice(idx, 1)[0].word;
            if (!incorrectOptions.includes(distractor)) {
                incorrectOptions.push(distractor);
            }
        }
        
        const fillers = ['schedule', 'actually', 'avoid', 'succeed', 'challenge', 'focus'];
        while (incorrectOptions.length < 3) {
            const randomFiller = fillers[Math.floor(Math.random() * fillers.length)];
            if (randomFiller !== targetItem.word && !incorrectOptions.includes(randomFiller)) {
                incorrectOptions.push(randomFiller);
            }
        }
        
        const allOptions = [targetItem.word, ...incorrectOptions];
        allOptions.sort(() => Math.random() - 0.5);
        activeQuizAnswerIndex = allOptions.indexOf(targetItem.word);
        
        qBox.textContent = `Qual é o termo em inglês correto para a tradução: "${targetItem.translation}"?`;
        
        optsContainer.innerHTML = '';
        allOptions.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.classList.add('quiz-option');
            btn.textContent = `${idx + 1}. ${opt}`;
            btn.addEventListener('click', () => handleQuizAnswer(idx, targetItem.translation, btn));
            optsContainer.appendChild(btn);
        });
        return;
    }
    
    // Online Gemini Quiz Generator
    qBox.textContent = "Tutor IA formulando uma questão desafiadora baseada em temas variados...";
    
    const day = state.currentDay;
    const weekNum = Math.ceil(day / 7);
    const level = state.level;
    
    // 50/50 mined vs global english bank selection
    const useMinedWord = Math.random() < 0.5 && state.vocabBank.length > 0;
    
    const themes = ["trabalho/escritório", "tecnologia/software", "viagens/turismo", "saúde/medicina", "atividades diárias/rotinas", "esportes/fitness", "arte/entretenimento", "natureza/ciência", "finanças/economia", "relações sociais/comunicação", "compras/serviços", "educação/aprendizado"];
    const targetTheme = themes[Math.floor(Math.random() * themes.length)];
    
    let sysInstruction = "";
    let prompt = "";
    
    if (useMinedWord) {
        const sampleWords = [];
        const pool = [...vocabList];
        for (let i = 0; i < Math.min(5, pool.length); i++) {
            const randIdx = Math.floor(Math.random() * pool.length);
            sampleWords.push(pool.splice(randIdx, 1)[0]);
        }
        const formattedList = sampleWords.map(item => `${item.word} (${item.translation})`).join(", ");
        
        sysInstruction = `Você é um professor de inglês meticuloso. Com base na lista de vocabulário do aluno fornecida, você deve criar uma pergunta de múltipla escolha testando o uso ativo de uma das palavras da lista em uma frase sobre o tema '${targetTheme}'.
Você deve responder ESTREITAMENTE no formato JSON com as chaves:
- 'question': a frase em inglês com um espaço em branco representado por _____
- 'options': um array de exatamente 4 strings em inglês com as opções de preenchimento. A opção correta deve ser a palavra correspondente da lista fornecida do aluno. As outras 3 opções devem ser distratores que NÃO façam sentido gramatical ou semântico na frase.
- 'correctIndex': um número inteiro de 0 a 3 que represente o índice correto no array 'options'.
- 'word': a palavra-alvo correta em inglês exatamente como está na lista do aluno.
- 'translation': a tradução/significado curto em português da palavra correta.
- 'explanation': uma explicação curta e clara em português descrevendo o significado da palavra correta e por que as outras opções estão incorretas no contexto.
Realize uma dupla-checagem rigorosa dos dados antes de retornar.`;
        prompt = `Lista de vocábulos do aluno: [${formattedList}]. Crie a questão sob o tema '${targetTheme}'.`;
    } else {
        sysInstruction = `Você é um professor de inglês meticuloso. Selecione uma palavra ou expressão nova, interessante e útil da língua inglesa adequada para o nível do aluno (Semana ${weekNum} de estudos, Nível ${level}).
Crie uma pergunta de múltipla escolha testando o uso ativo dessa palavra selecionada em uma frase com o tema '${targetTheme}'.
Você deve responder ESTREITAMENTE no formato JSON com as chaves:
- 'question': a frase em inglês com um espaço em branco representado por _____
- 'options': um array de exatamente 4 strings em inglês com as opções de preenchimento. A opção correta deve ser a palavra nova selecionada. As outras 3 opções devem ser distratores adequados que NÃO façam sentido gramatical ou semântico na frase.
- 'correctIndex': um número inteiro de 0 a 3 que represente o índice correto no array 'options'.
- 'word': a palavra/expressão nova selecionada em inglês.
- 'translation': a tradução/significado curto em português da palavra correta.
- 'explanation': uma explicação curta e clara em português descrevendo o significado da palavra correta e por que os distratores estão incorretos no contexto.
Realize uma dupla-checagem rigorosa dos dados antes de retornar.`;
        prompt = `Selecione uma palavra útil de nível correspondente a Semana ${weekNum}, Nível ${level} e crie a questão sob o tema '${targetTheme}'.`;
    }
    
    callGemini(prompt, sysInstruction)
        .then(res => {
            // Discard response if a newer query has been fired
            if (currentRequestId !== quizRequestId) return;
            
            if (btnNext) btnNext.disabled = false;
            
            qBox.textContent = res.question;
            activeQuizAnswerIndex = res.correctIndex;
            activeQuizWord = res.word || res.options[res.correctIndex];
            activeQuizTranslation = res.translation || "";
            
            if (btnQuizSpeak) {
                btnQuizSpeak.classList.remove('hidden');
                btnQuizSpeak.dataset.phrase = res.question.replace(/_____|_____/g, "... ");
            }
            
            optsContainer.innerHTML = ''; // Clear container before rendering
            
            res.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.classList.add('quiz-option');
                btn.textContent = `${idx + 1}. ${opt}`;
                btn.addEventListener('click', () => handleQuizAnswer(idx, res.explanation, btn));
                optsContainer.appendChild(btn);
            });
        })
        .catch(err => {
            if (currentRequestId !== quizRequestId) return;
            if (btnNext) btnNext.disabled = false;
            
            console.error("Gemini quiz generation failed, offline fallback loaded", err);
            state.geminiKey = ""; // force temporal offline fallback to solve blockages
            loadQuizQuestion();
            state.geminiKey = localStorage.getItem('adhd_gemini_key') || ""; // restore key state
        });
}

function handleQuizAnswer(selectedIndex, explanation, clickedBtn) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.disabled = true); // Lock options
    
    const questionSpan = document.getElementById('quiz-question');
    const btnQuizSpeak = document.getElementById('btn-quiz-speak');
    
    if (questionSpan && activeQuizWord && questionSpan.textContent.includes('_____')) {
        questionSpan.innerHTML = questionSpan.innerHTML.replace(/_____/g, `<strong style="color: var(--secondary); text-decoration: underline; font-weight: bold; text-shadow: 0 0 8px var(--secondary-glow);">${activeQuizWord}</strong>`);
        if (btnQuizSpeak) {
            btnQuizSpeak.dataset.phrase = questionSpan.textContent;
        }
    }
    
    const feedbackBox = document.getElementById('quiz-feedback');
    const feedbackText = document.getElementById('quiz-feedback-text');
    const feedbackIcon = document.getElementById('quiz-feedback-icon');
    const btnSaveWord = document.getElementById('btn-quiz-save-word');
    
    if (selectedIndex === activeQuizAnswerIndex) {
        clickedBtn.classList.add('correct');
        feedbackIcon.textContent = "🎉";
        feedbackText.textContent = `Correto! Excelente uso de contexto. +20 XP obtidos! \nNota do Tutor: ${explanation}`;
        feedbackBox.classList.remove('wrong');
        feedbackBox.classList.remove('hidden');
        
        state.addXP(20);
        audioPlayer.playDopamineTone();
        window.confetti.start();
    } else {
        clickedBtn.classList.add('incorrect');
        options[activeQuizAnswerIndex].classList.add('correct');
        feedbackIcon.textContent = "❌";
        feedbackText.textContent = `Resposta incorreta! A opção certa era a número ${activeQuizAnswerIndex + 1}.\nExplicação: ${explanation}`;
        feedbackBox.classList.add('wrong');
        feedbackBox.classList.remove('hidden');
    }
    
    // Check if we can offer saving this word to their active Vocabulary Miner
    if (btnSaveWord && activeQuizWord) {
        const alreadyExists = state.vocabBank.some(v => v.word.toLowerCase() === activeQuizWord.toLowerCase());
        if (!alreadyExists) {
            btnSaveWord.classList.remove('hidden');
            btnSaveWord.disabled = false;
            btnSaveWord.textContent = `➕ Salvar "${activeQuizWord}" no meu Minerador`;
        } else {
            btnSaveWord.classList.add('hidden');
        }
    } else if (btnSaveWord) {
        btnSaveWord.classList.add('hidden');
    }
}

// Next quiz button binder
document.getElementById('btn-next-quiz').addEventListener('click', loadQuizQuestion);

/* ==========================================
   MINI-GAME: SPEED WORD BATTLE (60 SECONDS)
   ========================================== */
let speedTimerId = null;
let speedTimeLeft = 60;
let speedActiveLetter = "S";
let speedActiveTopic = "General";
let speedWordsTyped = [];
let speedIsRunning = false;

const SPEED_TOPICS = ["Comida (Food)", "Trabalho (Jobs/Office)", "Natureza (Nature/Weather)", "Verbos (Actions)", "Casa (Home/Objects)", "Adjetivos (Descriptions)"];
const SPEED_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "P", "R", "S", "T", "W"];

function initSpeedWordBattle() {
    const btnStart = document.getElementById('btn-start-speed');
    const btnRetry = document.getElementById('btn-retry-speed');
    const input = document.getElementById('speed-word-input');
    
    if (btnStart) btnStart.addEventListener('click', startSpeedGame);
    if (btnRetry) btnRetry.addEventListener('click', startSpeedGame);
    
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                submitSpeedWord();
            }
        });
    }
}

function startSpeedGame() {
    speedIsRunning = true;
    speedTimeLeft = 60;
    speedWordsTyped = [];
    
    // Sort configurations
    speedActiveLetter = SPEED_LETTERS[Math.floor(Math.random() * SPEED_LETTERS.length)];
    speedActiveTopic = SPEED_TOPICS[Math.floor(Math.random() * SPEED_TOPICS.length)];
    
    document.getElementById('speed-prompt-topic').textContent = speedActiveTopic;
    document.getElementById('speed-prompt-letter').textContent = speedActiveLetter;
    document.getElementById('speed-count-accepted').textContent = "0";
    document.getElementById('speed-xp-earned').textContent = "+0 XP";
    document.getElementById('speed-words-list').innerHTML = '';
    
    const loadingBox = document.getElementById('speed-loading-box');
    if (loadingBox) loadingBox.classList.add('hidden');
    
    document.getElementById('speed-intro-box').classList.add('hidden');
    document.getElementById('speed-result-box').classList.add('hidden');
    document.getElementById('speed-game-area').classList.remove('hidden');
    
    document.getElementById('speed-timer-display').textContent = "60s";
    
    const input = document.getElementById('speed-word-input');
    if (input) {
        input.value = "";
        input.focus();
    }
    
    // Start countdown
    clearInterval(speedTimerId);
    speedTimerId = setInterval(() => {
        speedTimeLeft--;
        document.getElementById('speed-timer-display').textContent = `${speedTimeLeft}s`;
        
        if (speedTimeLeft <= 0) {
            endSpeedGame();
        }
    }, 1000);
}

function submitSpeedWord() {
    const input = document.getElementById('speed-word-input');
    const word = input.value.trim().toLowerCase();
    if (input) input.value = "";
    
    if (word === "") return;
    
    // Already typed
    if (speedWordsTyped.includes(word)) {
        return;
    }
    
    speedWordsTyped.push(word);
    
    // Add pending pill to list
    const pill = document.createElement('span');
    pill.classList.add('speed-word-pill', 'pending');
    pill.textContent = word;
    document.getElementById('speed-words-list').appendChild(pill);
    
    // Scroll to bottom
    const container = document.getElementById('speed-words-list');
    if (container) container.scrollTop = container.scrollHeight;
    
    // Increment displayed count
    const count = speedWordsTyped.length;
    document.getElementById('speed-count-accepted').textContent = count;
    
    audioPlayer.playDopamineTone();
}

async function endSpeedGame() {
    clearInterval(speedTimerId);
    speedIsRunning = false;
    
    document.getElementById('speed-game-area').classList.add('hidden');
    
    const loadingBox = document.getElementById('speed-loading-box');
    const resultBox = document.getElementById('speed-result-box');
    const detailsContainer = document.getElementById('speed-details-list');
    
    if (loadingBox) loadingBox.classList.remove('hidden');
    
    let results = [];
    let correctCount = 0;
    
    if (speedWordsTyped.length === 0) {
        if (loadingBox) loadingBox.classList.add('hidden');
        document.getElementById('speed-final-count').textContent = "0";
        document.getElementById('speed-final-total').textContent = "0";
        document.getElementById('speed-final-xp').textContent = "+0 XP";
        if (detailsContainer) detailsContainer.innerHTML = '<div style="color: var(--text-muted); text-align: center; width: 100%;">Nenhuma palavra digitada.</div>';
        resultBox.classList.remove('hidden');
        return;
    }
    
    if (state.geminiKey) {
        // Call Gemini to validate all typed words at once!
        const prompt = `O aluno jogou o Speed Word Battle. Ele precisava digitar palavras que começassem com a letra '${speedActiveLetter}' e pertencessem ao tema '${speedActiveTopic}'.
Ele digitou as seguintes palavras: [${speedWordsTyped.join(", ")}].
Valide cada palavra. Para ser considerada correta, a palavra deve:
1. Ser uma palavra em inglês válida.
2. Começar com a letra '${speedActiveLetter}' (case-insensitive).
3. Pertencer estritamente ao tema '${speedActiveTopic}'.
Retorne um JSON com a chave 'results' contendo um array de objetos, onde cada objeto tem:
- 'word': a palavra digitada
- 'valid': true ou false
- 'reason': se for inválida (valid=false), uma explicação curta de no máximo 5 palavras em português do porquê está incorreta (ex: 'Não pertence ao tema Casa', 'Não começa com H', 'Não é palavra em inglês'). Se for válida, deixe vazio.`;

        const sysInstruction = "Você é um validador estrito de inglês do ADHD Planner. Responda estritamente em JSON.";
        
        try {
            const apiRes = await callGemini(prompt, sysInstruction);
            if (apiRes && Array.isArray(apiRes.results)) {
                results = apiRes.results;
            } else {
                throw new Error("Resposta inválida do validador de Speed");
            }
        } catch (e) {
            console.error("Erro na validação do Gemini para Speed Battle, usando fallback local", e);
            results = runLocalSpeedValidation();
        }
    } else {
        results = runLocalSpeedValidation();
    }
    
    // Hide loading
    if (loadingBox) loadingBox.classList.add('hidden');
    
    // Calculate final counts and XP
    if (detailsContainer) detailsContainer.innerHTML = '';
    results.forEach(res => {
        const wordDiv = document.createElement('div');
        wordDiv.style.display = 'flex';
        wordDiv.style.justifyContent = 'space-between';
        wordDiv.style.alignItems = 'center';
        wordDiv.style.padding = '4px 8px';
        wordDiv.style.borderRadius = '4px';
        wordDiv.style.fontSize = '11px';
        wordDiv.style.width = '100%';
        
        if (res.valid) {
            correctCount++;
            wordDiv.style.background = 'rgba(0, 245, 212, 0.08)';
            wordDiv.style.border = '1px solid rgba(0, 245, 212, 0.2)';
            wordDiv.style.cursor = 'pointer';
            wordDiv.title = 'Clique para ouvir pronúncia';
            wordDiv.innerHTML = `
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="color: var(--secondary); font-weight: bold;">✔️ ${res.word}</span>
                    <button class="btn-tts" title="Ouvir palavra" style="background: none; border: none; color: var(--secondary); cursor: pointer; font-size: 11px; padding: 0; display: inline-flex; align-items: center;">🔊</button>
                </div>
                <span style="color: var(--secondary); font-size: 10px;">Correta (+5 XP)</span>
            `;
            wordDiv.addEventListener('click', () => speakEnglish(res.word));
        } else {
            wordDiv.style.background = 'rgba(255, 0, 85, 0.08)';
            wordDiv.style.border = '1px solid rgba(255, 0, 85, 0.2)';
            wordDiv.style.cursor = 'pointer';
            wordDiv.title = 'Clique para ouvir pronúncia';
            wordDiv.innerHTML = `
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="color: #ff3b30; font-weight: 500;">❌ ${res.word}</span>
                    <button class="btn-tts" title="Ouvir palavra" style="background: none; border: none; color: #ff3b30; cursor: pointer; font-size: 11px; padding: 0; display: inline-flex; align-items: center;">🔊</button>
                </div>
                <span style="color: #ff3b30; font-size: 10px; font-style: italic;">${res.reason || "Inválida"}</span>
            `;
            wordDiv.addEventListener('click', () => speakEnglish(res.word));
        }
        if (detailsContainer) detailsContainer.appendChild(wordDiv);
    });
    
    const xpEarned = correctCount * 5;
    
    document.getElementById('speed-final-count').textContent = correctCount;
    document.getElementById('speed-final-total').textContent = results.length;
    document.getElementById('speed-final-xp').textContent = `+${xpEarned} XP`;
    
    resultBox.classList.remove('hidden');
    
    // Award XP
    state.addXP(xpEarned);
    
    // Confetti
    if (correctCount > 0) {
        window.confetti.start();
        setTimeout(() => window.confetti.stop(), 2000);
        audioPlayer.playLevelUpTone();
    }
}

function runLocalSpeedValidation() {
    return speedWordsTyped.map(word => {
        const startsWithCorrectLetter = word.startsWith(speedActiveLetter.toLowerCase());
        return {
            word: word,
            valid: startsWithCorrectLetter,
            reason: startsWithCorrectLetter ? "" : `Não começa com '${speedActiveLetter}'`
        };
    });
}

/* ==========================================
   ADHD FOCUS FEATURES: BIONIC READING, SHOP, DEBUGS
   ========================================== */

// 1. Bionic Reading Logic
let bionicFontSize = 16;

function toBionicWord(word) {
    if (word.length === 0) return word;
    let boldLength = 1;
    if (word.length === 2) boldLength = 1;
    else if (word.length === 3) boldLength = 2;
    else if (word.length === 4) boldLength = 2;
    else boldLength = Math.ceil(word.length * 0.45);
    
    const boldPart = word.substring(0, boldLength);
    const regularPart = word.substring(boldLength);
    return `<b>${boldPart}</b>${regularPart}`;
}

function convertTextToBionic(text) {
    // Replaces English words, preserving tags, linebreaks, spaces, and punctuation
    return text.replace(/[A-Za-z']+/g, (word) => {
        return toBionicWord(word);
    });
}

function initBionicReader() {
    const input = document.getElementById('bionic-input');
    const convertBtn = document.getElementById('btn-convert-bionic');
    const output = document.getElementById('bionic-output');
    const editorArea = document.getElementById('bionic-editor-area');
    const readerArea = document.getElementById('bionic-reader-area');
    const editBtn = document.getElementById('btn-bionic-edit');
    const fontInc = document.getElementById('btn-font-inc');
    const fontDec = document.getElementById('btn-font-dec');
    const genBtn = document.getElementById('btn-generate-bionic');
    const speakBtn = document.getElementById('btn-bionic-speak');
    
    if (speakBtn) {
        speakBtn.addEventListener('click', () => {
            const rawText = input.value.trim();
            if (rawText) speakEnglish(rawText);
        });
    }
    
    convertBtn.addEventListener('click', () => {
        const val = input.value.trim();
        if (!val) {
            alert("Por favor, cole um texto em inglês antes de converter!");
            return;
        }
        
        output.innerHTML = convertTextToBionic(val);
        editorArea.classList.add('hidden');
        readerArea.classList.remove('hidden');
        audioPlayer.playDopamineTone();
    });
    
    editBtn.addEventListener('click', () => {
        readerArea.classList.add('hidden');
        editorArea.classList.remove('hidden');
    });
    
    fontInc.addEventListener('click', () => {
        if (bionicFontSize < 32) {
            bionicFontSize += 2;
            output.style.fontSize = `${bionicFontSize}px`;
        }
    });
    
    fontDec.addEventListener('click', () => {
        if (bionicFontSize > 12) {
            bionicFontSize -= 2;
            output.style.fontSize = `${bionicFontSize}px`;
        }
    });
    
    genBtn.addEventListener('click', async () => {
        genBtn.disabled = true;
        genBtn.textContent = "Gerando Artigo IA...";
        
        const weekNum = Math.ceil(state.currentDay / 7);
        
        if (!state.geminiKey) {
            // Local fallback text
            setTimeout(() => {
                const fallbackText = "ADHD brains crave stimulation. In English acquisition, using multiple sensory pathways—such as listening to Focus Sounds (Brown Noise) while reading text—keeps the prefrontal cortex engaged. Bionic reading acts as a visual anchor, preventing your focus from drifting. Regular intervals of learning, combined with rapid gamified rewards, maximize dopamine. Actually, consistency is much more critical than long hours. Try to avoid social media distractions during study breaks.";
                input.value = fallbackText;
                output.innerHTML = convertTextToBionic(fallbackText);
                editorArea.classList.add('hidden');
                readerArea.classList.remove('hidden');
                
                genBtn.disabled = false;
                genBtn.textContent = "⚡ Gerar Texto IA (Gemini)";
                audioPlayer.playDopamineTone();
            }, 800);
            return;
        }
        
        try {
            const sysInstruction = "Você é um tutor de inglês especializado em neurociência e TDAH. Escreva um mini-artigo informativo de curiosidade científica ou sobre produtividade em inglês, com exatamente 120-150 palavras, adequado para nível intermediário. Retorne estritamente um JSON com a chave: 'text' (o artigo em inglês bruto).";
            const prompt = `Gere um artigo motivador e curioso sobre a aprendizagem de línguas para o cérebro com TDAH na Semana ${weekNum}.`;
            
            const res = await callGemini(prompt, sysInstruction);
            input.value = res.text;
            output.innerHTML = convertTextToBionic(res.text);
            editorArea.classList.add('hidden');
            readerArea.classList.remove('hidden');
            
            audioPlayer.playDopamineTone();
        } catch (e) {
            console.error("Gemini failed", e);
            alert("Erro ao conectar com Gemini API. Verifique a chave nas Configurações.");
        } finally {
            genBtn.disabled = false;
            genBtn.textContent = "⚡ Gerar Texto IA (Gemini)";
        }
    });
}

// 2. Dopamine Shop (XP Shop)
function initDopamineShop() {
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.dataset.item;
            
            if (item === 'shield') {
                if (state.coins >= 500) {
                    state.coins -= 500;
                    state.streakShields++;
                    state.saveState();
                    
                    audioPlayer.playDopamineTone();
                    window.confetti.start();
                    updateLevelHUD();
                    
                    // Reload current day to update Shield Button status
                    loadDay(state.currentDay);
                    
                    alert("🛡️ Escudo de Ofensa comprado com sucesso! Sequência protegida.");
                } else {
                    alert("Você não possui Moedas de Dopamina (DM) suficientes! Complete tarefas no checklist ou conclua timers na Arena para acumular moedas.");
                }
            } else if (item === 'celebration') {
                if (state.coins >= 150) {
                    state.coins -= 150;
                    state.saveState();
                    
                    // Dispatches intense celebration
                    audioPlayer.playLevelUpTone();
                    window.confetti.start();
                    setTimeout(() => window.confetti.start(), 400);
                    setTimeout(() => window.confetti.start(), 800);
                    updateLevelHUD();
                    
                    alert("✨ Super explosão de dopamina mental liberada! Continue com tudo!");
                } else {
                    alert("Moedas insuficientes!");
                }
            } else if (item === 'focus') {
                if (state.coins >= 100) {
                    state.coins -= 100;
                    state.saveState();
                    
                    state.addXP(100); // addXP already saves state and updates level HUD
                    
                    audioPlayer.playDopamineTone();
                    window.confetti.start();
                    
                    alert("⚡ Pílula de Foco ativada! +100 XP adicionados ao seu Nível.");
                } else {
                    alert("Moedas insuficientes!");
                }
            }
        });
    });
}

// 3. Audio Diagnostics Console Event Bindings
function initAudioDebugger() {
    const testBtn = document.getElementById('btn-test-tone');
    const clearBtn = document.getElementById('btn-clear-logs');
    
    if (testBtn) {
        testBtn.addEventListener('click', () => {
            logAudio("Iniciando teste de tom manual de 1s...");
            audioPlayer.initCtx();
            if (!audioPlayer.audioCtx) {
                logAudio("Driver de áudio do navegador não inicializado.");
                return;
            }
            
            try {
                const runTest = () => {
                    const now = audioPlayer.audioCtx.currentTime;
                    const osc = audioPlayer.audioCtx.createOscillator();
                    const gain = audioPlayer.audioCtx.createGain();
                    
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(440, now); // Standard tuning frequency (A4)
                    
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
                    
                    osc.connect(gain);
                    gain.connect(audioPlayer.audioCtx.destination);
                    
                    osc.start(now);
                    osc.stop(now + 1.0);
                    logAudio("Tom de teste de 440Hz enviado com sucesso ao driver.");
                };
                
                if (audioPlayer.audioCtx.state === 'suspended') {
                    logAudio("Driver suspenso, ativando...");
                    audioPlayer.audioCtx.resume().then(runTest).catch(e => logAudio(`Falha ao resumir: ${e.message}`));
                } else {
                    runTest();
                }
            } catch (e) {
                logAudio(`ERRO NO DIAGNÓSTICO: ${e.message}`);
            }
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            const box = document.getElementById('audio-debug-log');
            if (box) {
                box.innerHTML = '<div>[LOG] Console limpo. Aguardando interações...</div>';
            }
        });
    }
}

// 4. Streak Shield Button Binder (Checklist card)
function initStreakShieldButton() {
    const btn = document.getElementById('btn-use-shield');
    if (btn) {
        btn.addEventListener('click', () => {
            const day = state.currentDay;
            if (state.streakShields > 0 && !state.shieldedDays.includes(day)) {
                state.streakShields--;
                state.shieldedDays.push(day);
                
                // Set day score to 8 to preserve streak
                if (!state.daysData[day]) {
                    state.daysData[day] = { score: 8, checkedTasks: [] };
                } else {
                    state.daysData[day].score = 8;
                }
                
                state.saveState();
                
                // Celebration
                audioPlayer.playDopamineTone();
                window.confetti.start();
                
                alert(`🛡️ Sequência Salva! Escudo de Ofensa aplicado no Dia ${day}.`);
                
                // Reload UI
                loadDay(day);
                initGrid();
                calculateOverallProgress();
                checkBadges();
                updateLevelHUD();
            }
        });
    }
}

/* ==========================================
   AI FLASHCARDS SYSTEM (ANKI-LIKE ENGINE)
   ========================================== */
let currentFlashcards = [];
let currentFlashcardIndex = 0;
let flashcardSessionXP = 0;

function initFlashcards() {
    const btnStart = document.getElementById('btn-start-flashcards');
    const selectDuration = document.getElementById('flashcard-duration-select');
    const setupArea = document.getElementById('flashcard-setup-area');
    const gameArea = document.getElementById('flashcard-game-area');
    
    const cardEl = document.getElementById('flashcard-card');
    const cardPos = document.getElementById('card-pos');
    const cardWord = document.getElementById('card-word');
    const cardTranslation = document.getElementById('card-translation');
    const cardExample = document.getElementById('card-example');
    
    const progressText = document.getElementById('flashcard-progress-text');
    const xpReward = document.getElementById('flashcard-xp-reward');
    const progressFill = document.getElementById('flashcard-progress-fill');
    
    const buttonsArea = document.getElementById('flashcard-buttons');
    const btnKnown = document.getElementById('btn-card-known');
    const btnNew = document.getElementById('btn-card-new');
    
    if (!btnStart) return;
    
    // Card flipping interaction
    cardEl.addEventListener('click', () => {
        cardEl.classList.toggle('flipped');
        if (cardEl.classList.contains('flipped')) {
            buttonsArea.classList.remove('hidden');
        } else {
            buttonsArea.classList.add('hidden');
        }
    });

    // Speak word button
    const btnSpeakWord = document.getElementById('btn-flashcard-speak-word');
    if (btnSpeakWord) {
        btnSpeakWord.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card from flipping!
            const word = currentFlashcards[currentFlashcardIndex]?.word;
            if (word) speakEnglish(word);
        });
    }
    
    // Also make the word text itself clickable to hear the audio
    if (cardWord) {
        cardWord.style.cursor = 'pointer';
        cardWord.title = 'Clique para ouvir pronúncia';
        cardWord.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card from flipping!
            const word = currentFlashcards[currentFlashcardIndex]?.word;
            if (word) speakEnglish(word);
        });
    }
    
    // Speak example button
    const btnSpeakExample = document.getElementById('btn-flashcard-speak-example');
    if (btnSpeakExample) {
        btnSpeakExample.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card from flipping!
            const example = currentFlashcards[currentFlashcardIndex]?.example;
            if (example) speakEnglish(example);
        });
    }

    // Also make the example sentence itself clickable to hear the audio
    if (cardExample) {
        cardExample.style.cursor = 'pointer';
        cardExample.title = 'Clique para ouvir a frase';
        cardExample.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card from flipping!
            const example = currentFlashcards[currentFlashcardIndex]?.example;
            if (example) speakEnglish(example);
        });
    }
    
    btnStart.addEventListener('click', async () => {
        const count = parseInt(selectDuration.value) || 10;
        btnStart.disabled = true;
        btnStart.textContent = "Carregando Flashcards via IA...";
        
        try {
            if (state.geminiKey) {
                // Fetch in parallel batches of 15 max to avoid token/timeout errors
                if (count <= 10) {
                    currentFlashcards = await generateFlashcardsOnlineBatch(count, 1);
                } else if (count <= 30) {
                    const [b1, b2] = await Promise.all([
                        generateFlashcardsOnlineBatch(15, 1),
                        generateFlashcardsOnlineBatch(count - 15, 2)
                    ]);
                    currentFlashcards = [...b1, ...b2];
                } else {
                    const [b1, b2, b3, b4] = await Promise.all([
                        generateFlashcardsOnlineBatch(15, 1),
                        generateFlashcardsOnlineBatch(15, 2),
                        generateFlashcardsOnlineBatch(15, 3),
                        generateFlashcardsOnlineBatch(count - 45, 4)
                    ]);
                    currentFlashcards = [...b1, ...b2, ...b3, ...b4];
                }
            } else {
                currentFlashcards = generateFlashcardsOffline(count);
            }
            
            // Limit output size just in case
            currentFlashcards = currentFlashcards.slice(0, count);
            
            // Start the session
            currentFlashcardIndex = 0;
            flashcardSessionXP = 0;
            setupArea.classList.add('hidden');
            gameArea.classList.remove('hidden');
            
            showFlashcard(currentFlashcardIndex);
        } catch (err) {
            console.error("Falha ao gerar flashcards", err);
            alert("Erro ao falar com o Gemini. Iniciando com banco offline local!");
            currentFlashcards = generateFlashcardsOffline(count);
            
            currentFlashcardIndex = 0;
            flashcardSessionXP = 0;
            setupArea.classList.add('hidden');
            gameArea.classList.remove('hidden');
            
            showFlashcard(currentFlashcardIndex);
        } finally {
            btnStart.disabled = false;
            btnStart.textContent = "🚀 Iniciar Sessão de Cards";
        }
    });
    
    if (btnKnown) {
        btnKnown.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent flipping card back
            const card = currentFlashcards[currentFlashcardIndex];
            const lowerWord = card.word.toLowerCase().trim();
            if (!state.knownWords.includes(lowerWord)) {
                state.knownWords.push(lowerWord);
            }
            
            // Immediate visual XP boost
            state.xp += 2;
            state.coins += 2;
            flashcardSessionXP += 2;
            state.saveState();
            updateLevelHUD();
            
            nextFlashcard();
        });
    }
    
    if (btnNew) {
        btnNew.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent flipping card back
            const card = currentFlashcards[currentFlashcardIndex];
            
            // Auto-integrate: save this word to the active Vocabulary Miner database
            const exists = state.vocabBank.some(v => v.word.toLowerCase() === card.word.toLowerCase());
            if (!exists) {
                state.vocabBank.push({
                    word: card.word,
                    translation: card.translation,
                    s1: card.example,
                    s2: "",
                    s3: ""
                });
                renderVocabList();
            }
            
            state.learnedWordsCount++;
            
            // Immediate visual XP boost
            state.xp += 3;
            state.coins += 3;
            flashcardSessionXP += 3;
            state.saveState();
            updateLevelHUD();
            
            nextFlashcard();
        });
    }
}

async function generateFlashcardsOnlineBatch(count, batchNum = 1) {
    const weekNum = Math.ceil(state.currentDay / 7);
    const level = state.level;
    const knownWordsList = state.knownWords.slice(-50).join(", ") || "nenhuma";
    
    // Choose dynamic theme based on batch number
    const themes = [
        "work and professional productivity", 
        "travel and business leisure", 
        "communication and emotions", 
        "technology, science and data",
        "phrasal verbs and idioms",
        "home, kitchen and tools",
        "nature, environment and animals",
        "shopping, market and money"
    ];
    const chosenTheme = themes[(batchNum - 1) % themes.length];
    
    const sysInstruction = `Você é um tutor de inglês especializado em TDAH. Seu objetivo é ajudar o usuário a expandir o vocabulário gerando uma lista de flashcards com palavras interessantes, úteis e variadas.
Você deve responder ESTREITAMENTE no formato JSON com as chaves:
- 'cards': um array de exatamente ${count} objetos. Cada objeto deve representar um flashcard e conter as chaves:
  - 'word': a palavra ou expressão em inglês (ex: 'Breakthrough', 'Resilient', 'Focus')
  - 'pos': classe gramatical em inglês (ex: 'noun', 'verb', 'adjective', 'adverb', 'phrase')
  - 'translation': tradução ou significado curto em português (ex: 'Avanço / Descoberta')
  - 'example': uma frase curta e prática em inglês usando a palavra
IMPORTANTE:
- Nível atual do aluno: Nível ${level}, Semana ${weekNum} de estudos. Escolha palavras com dificuldade e complexidade adequadas para este nível (básico a intermediário para níveis baixos, avançado para níveis altos).
- Foco de temas para este lote (lote ${batchNum}): priorize palavras relacionadas a '${chosenTheme}'.
- Evite estritamente as seguintes palavras que o aluno já conhece: [${knownWordsList}].
- Garanta que a estrutura JSON gerada seja válida e siga exatamente a especificação.`;

    const prompt = `Gere exatamente ${count} flashcards de vocabulário variados em formato JSON. Lote ${batchNum}.`;
    
    const res = await callGemini(prompt, sysInstruction);
    
    let cards = null;
    if (Array.isArray(res)) {
        cards = res;
    } else if (res && Array.isArray(res.cards)) {
        cards = res.cards;
    }
    
    if (!cards || cards.length === 0) {
        throw new Error("Resposta inválida da API Gemini para flashcards");
    }
    return cards;
}

function generateFlashcardsOffline(count) {
    const pool = [
        { word: "Schedule", pos: "noun", translation: "Agenda, cronograma", example: "Let's check the weekly study schedule." },
        { word: "Actually", pos: "adverb", translation: "Na verdade, realmente", example: "I actually completed all my daily tasks." },
        { word: "Avoid", pos: "verb", translation: "Evitar", example: "Try to avoid distractions while using the timer." },
        { word: "Succeed", pos: "verb", translation: "Ter sucesso", example: "With consistency, you will succeed in your goals." },
        { word: "Improvement", pos: "noun", translation: "Melhoria, progresso", example: "I can see a huge improvement in my speaking." },
        { word: "Overcome", pos: "verb", translation: "Superar, vencer", example: "We will overcome the learning difficulties." },
        { word: "Challenging", pos: "adjective", translation: "Desafiador", example: "The writing exercise was quite challenging today." },
        { word: "Achievement", pos: "noun", translation: "Conquista, feito", example: "Reaching Level 10 is a major achievement." },
        { word: "Consistent", pos: "adjective", translation: "Consistente", example: "A consistent routine is vital for ADHD learners." },
        { word: "Enhance", pos: "verb", translation: "Aprimorar, melhorar", example: "Listen to podcasts to enhance your listening skills." },
        { word: "Gather", pos: "verb", translation: "Reunir, juntar", example: "Gather your notes before starting the review." },
        { word: "Struggle", pos: "noun / verb", translation: "Dificuldade / Lutar", example: "Many students struggle with English prepositions." },
        { word: "Procrastinate", pos: "verb", translation: "Adiar, procrastinar", example: "Break tasks down into small chunks to avoid procrastination." },
        { word: "Breakthrough", pos: "noun", translation: "Avanço importante", example: "He had a vocabulary breakthrough after active reading." },
        { word: "Resilient", pos: "adjective", translation: "Resiliente, persistente", example: "Be resilient when you make spelling mistakes." },
        { word: "Dread", pos: "verb", translation: "Temer, ter pavor", example: "Don't dread the speaking practice, it is fun!" },
        { word: "Inquire", pos: "verb", translation: "Perguntar, indagar", example: "I need to inquire about the course schedule." },
        { word: "Acknowledge", pos: "verb", translation: "Reconhecer, admitir", example: "Acknowledge your progress, even the small wins." },
        { word: "Outstanding", pos: "adjective", translation: "Excepcional, excelente", example: "Your execution score today was outstanding!" },
        { word: "Thrive", pos: "verb", translation: "Prosperar, dar-se bem", example: "ADHD learners thrive in gamified environments." },
        { word: "Wander", pos: "verb", translation: "Vagar, divagar", example: "My mind tends to wander during long audio lessons." },
        { word: "Vague", pos: "adjective", translation: "Vago, impreciso", example: "The instructions were too vague for me." },
        { word: "Wealth", pos: "noun", translation: "Riqueza, fartura", example: "Reading provides a wealth of new vocabulary." },
        { word: "Fulfill", pos: "verb", translation: "Cumprir, satisfazer", example: "We must fulfill our promises to the study fiscal." },
        { word: "Reluctance", pos: "noun", translation: "Relutância, hesitação", example: "She showed some reluctance to speak English on camera." },
        { word: "Puzzled", pos: "adjective", translation: "Intrigado, confuso", example: "I was puzzled by the spelling of that word." },
        { word: "Grasp", pos: "verb / noun", translation: "Compreender, entender / Aderência", example: "It took me a while to grasp this grammar rule." },
        { word: "Accurate", pos: "adjective", translation: "Preciso, exato", example: "His translation of the phrase was very accurate." }
    ];
    
    // Filter out words that are already in state.knownWords
    let filteredPool = pool.filter(item => !state.knownWords.includes(item.word.toLowerCase()));
    
    if (filteredPool.length < 5) {
        filteredPool = pool;
    }
    
    // Select cards
    const result = [];
    for (let i = 0; i < count; i++) {
        const randIdx = Math.floor(Math.random() * filteredPool.length);
        result.push({ ...filteredPool[randIdx] });
    }
    return result;
}

function showFlashcard(index) {
    const cardEl = document.getElementById('flashcard-card');
    const cardPos = document.getElementById('card-pos');
    const cardWord = document.getElementById('card-word');
    const cardTranslation = document.getElementById('card-translation');
    const cardExample = document.getElementById('card-example');
    
    const progressText = document.getElementById('flashcard-progress-text');
    const xpReward = document.getElementById('flashcard-xp-reward');
    const progressFill = document.getElementById('flashcard-progress-fill');
    const buttonsArea = document.getElementById('flashcard-buttons');
    
    // Reset flip status
    cardEl.classList.remove('flipped');
    buttonsArea.classList.add('hidden');
    
    const card = currentFlashcards[index];
    cardPos.textContent = card.pos || "word";
    cardWord.textContent = card.word;
    cardTranslation.textContent = card.translation;
    cardExample.textContent = card.example ? `"${card.example}"` : "";
    
    // Update progress
    const total = currentFlashcards.length;
    progressText.textContent = `Card ${index + 1} de ${total}`;
    xpReward.textContent = `+${flashcardSessionXP} XP acumulado`;
    progressFill.style.width = `${(index / total) * 100}%`;
}

function nextFlashcard() {
    currentFlashcardIndex++;
    if (currentFlashcardIndex < currentFlashcards.length) {
        showFlashcard(currentFlashcardIndex);
    } else {
        // End of session!
        const total = currentFlashcards.length;
        const progressFill = document.getElementById('flashcard-progress-fill');
        if (progressFill) progressFill.style.width = "100%";
        
        // Award final completion bonus XP!
        const completionBonus = 30 + (total * 2); // 10 cards = 50 XP, 30 cards = 90 XP, 60 cards = 150 XP
        state.addXP(completionBonus);
        
        // Confetti!
        window.confetti.start();
        setTimeout(() => window.confetti.stop(), 3000);
        audioPlayer.playLevelUpTone();
        
        alert(`Parabéns! Você completou a sessão de ${total} flashcards!\nXP total recebido na sessão: +${flashcardSessionXP + completionBonus} XP!`);
        
        // Reset view
        document.getElementById('flashcard-game-area').classList.add('hidden');
        document.getElementById('flashcard-setup-area').classList.remove('hidden');
        updateLevelHUD();
    }
}

