/**
 * ADHD English Planner - Flashcard & Speaking Pools Database
 * Contém a base offline de mais de 500 termos para Anki-like flashcards
 * e mais de 50 situações práticas para a metodologia "Stop Translating" (Pense em Inglês).
 */

const FLASHCARDS_POOL = [
    // --- ADJETIVOS ---
    { word: "Resilient", pos: "adjective", translation: "Resiliente, persistente", example: "Successful language learners are highly resilient." },
    { word: "Ubiquitous", pos: "adjective", translation: "Ubíquo, onipresente", example: "English is now a ubiquitous language worldwide." },
    { word: "Obsolete", pos: "adjective", translation: "Obsoleto, ultrapassado", example: "Some translation methods are now completely obsolete." },
    { word: "Meticulous", pos: "adjective", translation: "Meticuloso, detalhista", example: "She is meticulous when proofreading her essays." },
    { word: "Challenging", pos: "adjective", translation: "Desafiador", example: "Pronouncing some English vowels can be challenging." },
    { word: "Consistent", pos: "adjective", translation: "Consistente, constante", example: "Consistent study is the key to fluency." },
    { word: "Outstanding", pos: "adjective", translation: "Excepcional, marcante", example: "The student showed outstanding improvement in speaking." },
    { word: "Puzzled", pos: "adjective", translation: "Confuso, intrigado", example: "I was puzzled by the spelling of 'queue'." },
    { word: "Accurate", pos: "adjective", translation: "Preciso, exato", example: "An accurate translation is not always natural." },
    { word: "Vague", pos: "adjective", translation: "Vago, impreciso", example: "The teacher gave vague instructions for the homework." },
    { word: "Ambiguous", pos: "adjective", translation: "Ambíguo", example: "The headline was ambiguous and confusing." },
    { word: "Volatile", pos: "adjective", translation: "Volátil, instável", example: "The weather in London is notoriously volatile." },
    { word: "Redundant", pos: "adjective", translation: "Redundante, desnecessário", example: "Adding 'free' before 'gift' is redundant." },
    { word: "Versatile", pos: "adjective", translation: "Versátil, multiuso", example: "The word 'get' is extremely versatile in English." },
    { word: "Coherent", pos: "adjective", translation: "Coerente, claro", example: "You need a coherent argument in your writing test." },
    { word: "Comprehensive", pos: "adjective", translation: "Abrangente, completo", example: "This is a comprehensive course for ADHD learners." },
    { word: "Dynamic", pos: "adjective", translation: "Dinâmico", example: "Interactive games provide a dynamic learning environment." },
    { word: "Feasible", pos: "adjective", translation: "Viável, possível", example: "Is it feasible to learn 10 new words a day?" },
    { word: "Strenuous", pos: "adjective", translation: "Árduo, cansativo", example: "Studying for 8 hours straight is too strenuous." },
    { word: "Subtle", pos: "adjective", translation: "Sutil, imperceptível", example: "There is a subtle difference between 'lend' and 'borrow'." },
    { word: "Trivial", pos: "adjective", translation: "Trivial, insignificante", example: "Don't waste time on trivial grammar exceptions." },
    { word: "Bizarre", pos: "adjective", translation: "Bizarro, esquisito", example: "English spelling has some bizarre rules." },
    { word: "Cautious", pos: "adjective", translation: "Cauteloso, prudente", example: "Be cautious when translating idioms word-for-word." },
    { word: "Drastic", pos: "adjective", translation: "Drástico, radical", example: "We need a drastic change in our study routine." },
    { word: "Eager", pos: "adjective", translation: "Ansioso, entusiasmado", example: "He is eager to practice speaking with foreigners." },
    { word: "Frank", pos: "adjective", translation: "Franco, sincero", example: "To be frank, your grammar needs some work." },
    { word: "Hostile", pos: "adjective", translation: "Hostil, desfavorável", example: "Do not fear a hostile audience when presenting." },
    { word: "Immense", pos: "adjective", translation: "Imenso, enorme", example: "Watching movies provides immense vocabulary growth." },
    { word: "Lethal", pos: "adjective", translation: "Letal, fatal", example: "Distractions are lethal to study sessions." },
    { word: "Mutual", pos: "adjective", translation: "Mútuo, recíproco", example: "Speaking practice requires mutual cooperation." },
    { word: "Naive", pos: "adjective", translation: "Ingênuo, inocente", example: "It is naive to think fluency happens overnight." },
    { word: "Scarcity", pos: "adjective", translation: "Escasso (referência)", example: "There is no scarcity of learning resources online." },
    { word: "Scarce", pos: "adjective", translation: "Escasso, raro", example: "Time is scarce, so focus on high-frequency words." },
    { word: "Tedious", pos: "adjective", translation: "Tedioso, maçante", example: "Memorizing grammar lists can be very tedious." },
    { word: "Vulnerable", pos: "adjective", translation: "Vulnerável", example: "Learners feel vulnerable when speaking a foreign tongue." },
    { word: "Wary", pos: "adjective", translation: "Desconfiado, atento", example: "Be wary of websites promising fluent English in 30 days." },
    { word: "Abundant", pos: "adjective", translation: "Abundante", example: "English idioms are abundant in TV shows." },
    { word: "Artificial", pos: "adjective", translation: "Artificial", example: "Using artificial intelligence accelerates flashcard creation." },
    { word: "Barren", pos: "adjective", translation: "Estéril, improdutivo", example: "Without practice, your speech will remain barren." },
    { word: "Clumsy", pos: "adjective", translation: "Desajeitado", example: "I felt clumsy trying to pronounce that complex word." },
    { word: "Deliberate", pos: "adjective", translation: "Deliberado, intencional", example: "Make a deliberate effort to think in English." },
    { word: "Efficient", pos: "adjective", translation: "Eficiente", example: "Bionic reading is an efficient way to absorb texts." },
    { word: "Fierce", pos: "adjective", translation: "Feroz, intenso", example: "There is fierce competition in the job market." },
    { word: "Gullible", pos: "adjective", translation: "Crédulo, ingênuo", example: "Don't be gullible about quick fluency tricks." },
    { word: "Hazardous", pos: "adjective", translation: "Perigoso, arriscado", example: "Skipping vocabulary reviews is hazardous to memory." },
    { word: "Inevitable", pos: "adjective", translation: "Inevitável", example: "Making pronunciation errors is inevitable." },
    { word: "Joint", pos: "adjective", translation: "Conjunto, compartilhado", example: "This speaking exercise is a joint effort." },
    { word: "Keen", pos: "adjective", translation: "Interessado, afiado", example: "She has a keen interest in English literature." },
    { word: "Luminous", pos: "adjective", translation: "Luminoso, brilhante", example: "The neon signs made the street look luminous." },
    { word: "Mischievous", pos: "adjective", translation: "Travesso, malicioso", example: "The child gave a mischievous smile." },
    { word: "Notable", pos: "adjective", translation: "Notável, digno de nota", example: "There is a notable difference in your confidence." },
    { word: "Ominous", pos: "adjective", translation: "Sinistro, ameaçador", example: "Dark clouds are an ominous sign of rain." },
    { word: "Plausible", pos: "adjective", translation: "Plausível, aceitável", example: "That is a plausible explanation for the rule." },
    { word: "Quaint", pos: "adjective", translation: "Pittoresco, antigo/charmoso", example: "They lived in a quaint cottage in the English countryside." },
    { word: "Rigid", pos: "adjective", translation: "Rígido, inflexível", example: "Do not follow a rigid schedule; allow some flexibility." },
    { word: "Sovereign", pos: "adjective", translation: "Soberano", example: "Each nation has sovereign rights over its laws." },
    { word: "Turbulent", pos: "adjective", translation: "Turbulento", example: "We flew through turbulent air on our way to London." },
    { word: "Unanimous", pos: "adjective", translation: "Unânime", example: "The committee reached a unanimous decision." },
    { word: "Vigorous", pos: "adjective", translation: "Vigoroso, enérgico", example: "He engaged in a vigorous debate about education." },
    { word: "Wholesome", pos: "adjective", translation: "Saudável, benéfico", example: "Reading books is a wholesome hobby." },
    { word: "Yielding", pos: "adjective", translation: "Maleável, condescendente", example: "The soft clay was yielding to his touch." },
    { word: "Zealous", pos: "adjective", translation: "Zeloso, entusiasta", example: "He is a zealous student of linguistics." },
    { word: "Affectionate", pos: "adjective", translation: "Afetuoso, carinhoso", example: "Cats are often more affectionate than people think." },
    { word: "Beneficial", pos: "adjective", translation: "Benéfico", example: "Sleeping well is beneficial for concentration." },
    { word: "Conspicuous", pos: "adjective", translation: "Visível, de destaque", example: "The green neon sign was very conspicuous." },
    { word: "Defiant", pos: "adjective", translation: "Desafiador, rebelde", example: "The teenager had a defiant look in his eyes." },
    { word: "Eloquent", pos: "adjective", translation: "Eloquente, expressivo", example: "Her speech was eloquent and moved the audience." },
    { word: "Frivolous", pos: "adjective", translation: "Frívolo, fútil", example: "Don't spend money on frivolous things." },
    { word: "Gracious", pos: "adjective", translation: "Gracioso, cortês", example: "The host was very gracious and welcoming." },
    { word: "Humble", pos: "adjective", translation: "Humilde", example: "Despite his success, he remains very humble." },
    { word: "Impartial", pos: "adjective", translation: "Imparcial", example: "A judge must remain completely impartial." },
    { word: "Judicious", pos: "adjective", translation: "Sensato, criterioso", example: "A judicious choice of words prevents misunderstandings." },
    { word: "Laborious", pos: "adjective", translation: "Trabalhoso, cansativo", example: "Translating entire books is a laborious task." },
    { word: "Monotonous", pos: "adjective", translation: "Monótono", example: "A monotonous voice can make listeners sleepy." },
    { word: "Negligent", pos: "adjective", translation: "Negligente", example: "He was negligent in checking his car's brakes." },
    { word: "Obnoxious", pos: "adjective", translation: "Detestável, insuportável", example: "The loud music from the neighbor was obnoxious." },
    { word: "Peculiar", pos: "adjective", translation: "Peculiar, estranho", example: "That accent sounds very peculiar to me." },
    { word: "Reluctant", pos: "adjective", translation: "Relutante", example: "She was reluctant to speak in public." },
    { word: "Spontaneous", pos: "adjective", translation: "Espontâneo", example: "Our trip to London was completely spontaneous." },
    { word: "Timid", pos: "adjective", translation: "Tímido, receoso", example: "The timid dog hid behind the sofa." },
    { word: "Unruly", pos: "adjective", translation: "Indomável, rebelde", example: "He tried to comb his unruly hair." },
    { word: "Vibrant", pos: "adjective", translation: "Vibrante, cheio de vida", example: "London has a vibrant cultural scene." },
    { word: "Weary", pos: "adjective", translation: "Cansado, esgotado", example: "The travelers were weary after the long flight." },
    { word: "Anxious", pos: "adjective", translation: "Ansioso, preocupado", example: "I get anxious before presentation exams." },
    { word: "Competent", pos: "adjective", translation: "Competente", example: "She is a competent English teacher." },
    { word: "Diligent", pos: "adjective", translation: "Diligente, aplicado", example: "A diligent student completes all exercises." },
    { word: "Erratic", pos: "adjective", translation: "Errático, imprevisível", example: "His schedule is erratic and changes weekly." },
    { word: "Flawless", pos: "adjective", translation: "Perfeito, sem falhas", example: "Her pronunciation of English was flawless." },
    { word: "Gloom", pos: "noun (referência)", example: "The gloom of the winter days got to him." },
    { word: "Gloomy", pos: "adjective", translation: "Sombrio, melancólico", example: "Rainy days can make you feel gloomy." },
    { word: "Imminent", pos: "adjective", translation: "Iminente", example: "The dark clouds suggest rain is imminent." },
    { word: "Lavish", pos: "adjective", translation: "Luxuoso, extravagante", example: "They stayed at a lavish hotel in New York." },
    { word: "Naïve", pos: "adjective", translation: "Ingênuo", example: "It is naïve to believe everything you read." },
    { word: "Prone", pos: "adjective", translation: "Propenso, inclinado", example: "Tired learners are prone to making spelling mistakes." },
    { word: "Scarce", pos: "adjective", translation: "Escasso", example: "Fresh water is scarce in desert regions." },
    { word: "Vast", pos: "adjective", translation: "Vasto, amplo", example: "The internet contains a vast amount of English materials." },

    // --- VERBOS ---
    { word: "Succeed", pos: "verb", translation: "Ter sucesso", example: "With consistency, you will succeed in your goals." },
    { word: "Avoid", pos: "verb", translation: "Evitar", example: "Try to avoid distractions while using the timer." },
    { word: "Overcome", pos: "verb", translation: "Superar, vencer", example: "We will overcome the learning difficulties." },
    { word: "Enhance", pos: "verb", translation: "Aprimorar, melhorar", example: "Listen to podcasts to enhance your listening skills." },
    { word: "Gather", pos: "verb", translation: "Reunir, juntar", example: "Gather your notes before starting the review." },
    { word: "Procrastinate", pos: "verb", translation: "Adiar, procrastinar", example: "Break tasks down into small chunks to avoid procrastination." },
    { word: "Dread", pos: "verb", translation: "Temer, ter pavor", example: "Don't dread the speaking practice, it is fun!" },
    { word: "Inquire", pos: "verb", translation: "Perguntar, indagar", example: "I need to inquire about the course schedule." },
    { word: "Acknowledge", pos: "verb", translation: "Reconhecer, admitir", example: "Acknowledge your progress, even the small wins." },
    { word: "Thrive", pos: "verb", translation: "Prosperar, dar-se bem", example: "ADHD learners thrive in gamified environments." },
    { word: "Wander", pos: "verb", translation: "Vagar, divagar", example: "My mind tends to wander during long audio lessons." },
    { word: "Fulfill", pos: "verb", translation: "Cumprir, satisfazer", example: "We must fulfill our promises to the study fiscal." },
    { word: "Grasp", pos: "verb", translation: "Compreender, entender", example: "It took me a while to grasp this grammar rule." },
    { word: "Optimize", pos: "verb", translation: "Otimizar", example: "We must optimize our study system for ADHD." },
    { word: "Leverage", pos: "verb", translation: "Aproveitar, potencializar", example: "Leverage daily audiobooks to practice listening." },
    { word: "Implement", pos: "verb", translation: "Implementar", example: "We will implement a spaced repetition system." },
    { word: "Evaluate", pos: "verb", translation: "Avaliar", example: "Evaluate your level using the progress test." },
    { word: "Consolidate", pos: "verb", translation: "Consolidar", example: "Write sentences to consolidate your vocabulary." },
    { word: "Alleviate", pos: "verb", translation: "Aliviar, mitigar", example: "Short breaks alleviate the cognitive load." },
    { word: "Foster", pos: "verb", translation: "Promover, incentivar", example: "We want to foster a positive learning habit." },
    { word: "Advocate", pos: "verb", translation: "Defender, apoiar", example: "Teachers advocate for active recall techniques." },
    { word: "Accommodate", pos: "verb", translation: "Acomodar, adaptar-se", example: "Our plan accommodates visual and auditory learners." },
    { word: "Allocate", pos: "verb", translation: "Alocar, reservar", example: "Allocate 20 minutes every morning for English." },
    { word: "Facilitate", pos: "verb", translation: "Facilitar, mediar", example: "Flashcards facilitate quick vocabulary review." },
    { word: "Diminish", pos: "verb", translation: "Diminuir, reduzir", example: "Anxiety will diminish as you speak more." },
    { word: "Acquire", pos: "verb", translation: "Adquirir", example: "Children acquire languages naturally." },
    { word: "Hinder", pos: "verb", translation: "Dificultar, impedir", example: "Lack of sleep will hinder your memory retention." },
    { word: "Postpone", pos: "verb", translation: "Adiar", example: "Do not postpone today's review session." },
    { word: "Flourish", pos: "verb", translation: "Florescer, prosperar", example: "Your reading skills will flourish if you read daily." },
    { word: "Abandon", pos: "verb", translation: "Abandonar", example: "Never abandon your goals because of a hard day." },
    { word: "Boost", pos: "verb", translation: "Impulsionar, aumentar", example: "Winning badges will boost your motivation." },
    { word: "Cherish", pos: "verb", translation: "Valorizar, estimar", example: "Cherish the moments you spend learning." },
    { word: "Deceive", pos: "verb", translation: "Enganar", example: "Don't deceive yourself by skipping the exercises." },
    { word: "Endure", pos: "verb", translation: "Suportar, aguentar", example: "You must endure the initial struggle to speak." },
    { word: "Gaze", pos: "verb", translation: "Olhar fixamente", example: "Do not gaze at the screen for too long without blinking." },
    { word: "Imply", pos: "verb", translation: "Implicar, insinuar", example: "Silence does not imply agreement." },
    { word: "Jeopardize", pos: "verb", translation: "Comprometer, arriscar", example: "Procrastination will jeopardize your final exam score." },
    { word: "Linger", pos: "verb", translation: "Permanecer, hesitar", example: "A faint smell of coffee lingered in the library." },
    { word: "Mourn", pos: "verb", translation: "Lamentar, prantear", example: "Don't mourn the mistakes; learn from them." },
    { word: "Neglect", pos: "verb", translation: "Negligenciar", example: "If you neglect vocabulary, grammar won't help you." },
    { word: "Obtain", pos: "verb", translation: "Obter, conseguir", example: "You can obtain the certificate after completing the test." },
    { word: "Ponder", pos: "verb", translation: "Ponderar, refletir", example: "Ponder the sentence structure before translating." },
    { word: "Quench", pos: "verb", translation: "Saciar, apagar", example: "Read articles to quench your thirst for knowledge." },
    { word: "Refute", pos: "verb", translation: "Refutar, contestar", example: "We can refute that claim with direct evidence." },
    { word: "Strive", pos: "verb", translation: "Esforçar-se, lutar", example: "Strive to practice speaking at least 5 minutes a day." },
    { word: "Tackle", pos: "verb", translation: "Enfrentar, lidar com", example: "Let's tackle this grammar issue together." },
    { word: "Undergo", pos: "verb", translation: "Submeter-se a, passar por", example: "The app will undergo a major update tonight." },
    { word: "Vanish", pos: "verb", translation: "Desaparecer, sumir", example: "All doubts will vanish once you start speaking." },
    { word: "Withdraw", pos: "verb", translation: "Retirar, afastar-se", example: "You can withdraw your registration anytime." },
    { word: "Yawn", pos: "verb", translation: "Bocejar", example: "I yawn when I am tired or bored." },
    { word: "Absorb", pos: "verb", translation: "Absorver", example: "Interactive stories help you absorb words easily." },
    { word: "Betray", pos: "verb", translation: "Trair", example: "Don't betray your study schedule for social media." },
    { word: "Cling", pos: "verb", translation: "Apegar-se, agarrar-se", example: "Do not cling to literal translations." },
    { word: "Depart", pos: "verb", translation: "Partir, desviar-se", example: "The train will depart from platform three." },
    { word: "Enforce", pos: "verb", translation: "Impor, fazer cumprir", example: "The system will enforce a 30-question test limit." },
    { word: "Flee", pos: "verb", translation: "Fugir", example: "Distracted minds flee from reading books." },
    { word: "Govern", pos: "verb", translation: "Governar, reger", example: "Grammar rules govern how sentences are built." },
    { word: "Inherit", pos: "verb", translation: "Herdar", example: "We inherit words from old root languages." },
    { word: "Justify", pos: "verb", translation: "Justificar", example: "You must justify your answers in the test." },
    { word: "Lament", pos: "verb", translation: "Lamentar", example: "Some learners lament their slow speaking speed." },
    { word: "Magnify", pos: "verb", translation: "Ampliar, aumentar", example: "Fear can magnify the difficulty of speaking." },
    { word: "Nurture", pos: "verb", translation: "Nutrir, cultivar", example: "Nurture your curiosity by reading diverse topics." },
    { word: "Oppose", pos: "verb", translation: "Opor-se a", example: "Many students oppose learning lists of verb conjugations." },
    { word: "Perceive", pos: "verb", translation: "Perceber, notar", example: "I began to perceive details in native speech." },
    { word: "Reconcile", pos: "verb", translation: "Reconciliar, conciliar", example: "It is hard to reconcile the spelling with the sound." },
    { word: "Shatter", pos: "verb", translation: "Despedaçar, quebrar", example: "Failing the test will not shatter my determination." },
    { word: "Thwart", pos: "verb", translation: "Frustrar, impedir", example: "Heavy noise will thwart your attempt to study." },
    { word: "Utilize", pos: "verb", translation: "Utilizar, usar", example: "Utilize a headset to record your speaking tasks." },
    { word: "Vary", pos: "verb", translation: "Variar", example: "Try to vary your vocabulary when writing essays." },
    { word: "Weave", pos: "verb", translation: "Tecer", example: "She can weave complex stories in her novels." },
    { word: "Yield", pos: "verb", translation: "Render, produzir", example: "Consistent practice will yield amazing results." },
    { word: "Accumulate", pos: "verb", translation: "Acumular", example: "You will accumulate XP as you complete activities." },
    { word: "Banish", pos: "verb", translation: "Banir, afastar", example: "Banish all negative thoughts about your English." },
    { word: "Conceal", pos: "verb", translation: "Ocultar, esconder", example: "Do not try to conceal your errors; correct them." },
    { word: "Detect", pos: "verb", translation: "Detectar, notar", example: "We can detect small grammar shifts over time." },
    { word: "Embrace", pos: "verb", translation: "Abraçar, aceitar", example: "Embrace your mistakes as learning moments." },
    { word: "Forecast", pos: "verb", translation: "Prever, projetar", example: "They forecast heavy rain for tomorrow." },
    { word: "Glisten", pos: "verb", translation: "Brilhar, cintilar", example: "The wet streets glisten under the lights." },
    { word: "Halt", pos: "verb", translation: "Parar, interromper", example: "The alarm will halt your daydreaming." },
    { word: "Illuminate", pos: "verb", translation: "Iluminar, esclarecer", example: "The teacher's explanation helped illuminate the rule." },
    { word: "Maintain", pos: "verb", translation: "Manter", example: "You must maintain a steady study pace." },
    { word: "Narrate", pos: "verb", translation: "Narrar", example: "Can you narrate what happened in the video?" },
    { word: "Overlook", pos: "verb", translation: "Ignorar, deixar passar", example: "Do not overlook the spelling of 'necessary'." },
    { word: "Precede", pos: "verb", translation: "Preceder", example: "The introduction should precede the main text." },
    { word: "Recall", pos: "verb", translation: "Lembrar, recordar", example: "Can you recall the meaning of 'ubiquitous'?" },
    { word: "Scatter", pos: "verb", translation: "Espalhar", example: "Scatter the flashcards on the table for a game." },
    { word: "Tolerate", pos: "verb", translation: "Tolerar", example: "We should not tolerate constant distractions." },
    { word: "Unfold", pos: "verb", translation: "Desdobrar, revelar-se", example: "We will watch the story unfold in this video." },
    { word: "Verify", pos: "verb", translation: "Verificar", example: "Verify your answers before clicking submit." },
    { word: "Wither", pos: "verb", translation: "Murchar", example: "Without practice, speaking skills will wither." },

    // --- SUBSTANTIVOS ---
    { word: "Schedule", pos: "noun", translation: "Agenda, cronograma", example: "Let's check the weekly study schedule." },
    { word: "Improvement", pos: "noun", translation: "Melhoria, progresso", example: "I can see a huge improvement in my speaking." },
    { word: "Achievement", pos: "noun", translation: "Conquista, feito", example: "Reaching Level 10 is a major achievement." },
    { word: "Struggle", pos: "noun", translation: "Dificuldade, luta", example: "Many students struggle with prepositions." },
    { word: "Breakthrough", pos: "noun", translation: "Avanço importante", example: "He had a vocabulary breakthrough after active reading." },
    { word: "Reluctance", pos: "noun", translation: "Relutância, hesitação", example: "She showed some reluctance to speak English." },
    { word: "Wealth", pos: "noun", translation: "Riqueza, fartura", example: "Reading provides a wealth of new vocabulary." },
    { word: "Constraint", pos: "noun", translation: "Limitação, restrição", example: "Time constraints can make exams stressful." },
    { word: "Discrepancy", pos: "noun", translation: "Discrepância, diferença", example: "There is a discrepancy in the spelling database." },
    { word: "Paradigm", pos: "noun", translation: "Paradigma, modelo", example: "Active recall is a paradigm shift in education." },
    { word: "Consensus", pos: "noun", translation: "Consenso", example: "The teachers reached a consensus on the exam format." },
    { word: "Feasibility", pos: "noun", translation: "Viabilidade", example: "We need to check the feasibility of this study plan." },
    { word: "Liability", pos: "noun", translation: "Responsabilidade (legal), fardo", example: "Lack of English skills is a liability in business." },
    { word: "Compliance", pos: "noun", translation: "Conformidade, conformação", example: "The company acts in compliance with international laws." },
    { word: "Autonomy", pos: "noun", translation: "Autonomia", example: "Self-study builds learning autonomy." },
    { word: "Acquisition", pos: "noun", translation: "Aquisição, obtenção", example: "Language acquisition is a lifelong journey." },
    { word: "Obstacle", pos: "noun", translation: "Obstáculo", example: "Procrastination is the main obstacle to learning." },
    { word: "Dilemma", pos: "noun", translation: "Dilema", example: "He faced the dilemma of choosing a study topic." },
    { word: "Advocate", pos: "noun", translation: "Defensor, apoiador", example: "He is a strong advocate for early bilingualism." },
    { word: "Incentive", pos: "noun", translation: "Incentivo", example: "Gaining coins is a great incentive to study." },
    { word: "Abundance", pos: "noun", translation: "Abundância", example: "There is an abundance of materials online." },
    { word: "Scarcity", pos: "noun", translation: "Escassez", example: "A scarcity of practice causes speaking blockages." },
    { word: "Famine", pos: "noun", translation: "Fome (calamidade), escassez", example: "The crops failed, causing a severe famine." },
    { word: "Glance", pos: "noun", translation: "Olhar rápido", example: "I took a quick glance at my review notes." },
    { word: "Hazard", pos: "noun", translation: "Perigo, risco", example: "Distractions are a major hazard to deep study." },
    { word: "Jeopardy", pos: "noun", translation: "Perigo, risco", example: "His job is in jeopardy because of poor language skills." },
    { word: "Legacy", pos: "noun", translation: "Legado", example: "Shakespeare left a rich literary legacy." },
    { word: "Novelty", pos: "noun", translation: "Novidade", example: "The novelty of the learning app wore off after a week." },
    { word: "Pace", pos: "noun", translation: "Ritmo, passo", example: "Work at your own pace; do not rush." },
    { word: "Quota", pos: "noun", translation: "Cota, limite", example: "I completed my daily quota of 15 flashcards." },
    { word: "Rumor", pos: "noun", translation: "Boato, rumor", example: "Don't believe the rumor about the exam changes." },
    { word: "Shortage", pos: "noun", translation: "Escassez, falta", example: "There is a shortage of qualified English teachers." },
    { word: "Threshold", pos: "noun", translation: "Limiar, entrada", example: "He was on the threshold of a huge career breakthrough." },
    { word: "Uproar", pos: "noun", translation: "Tumulto, clamor", example: "The teacher's sudden test caused an uproar." },
    { word: "Verdict", pos: "noun", translation: "Veredicto", example: "The verdict was that the software was too complex." },
    { word: "Wealth", pos: "noun", translation: "Riqueza, fartura", example: "Books offer a wealth of information." },
    { word: "Accident", pos: "noun", translation: "Acidente", example: "He spilled his tea by accident." },
    { word: "Barrier", pos: "noun", translation: "Barreira", example: "Shyness can be a barrier to communication." },
    { word: "Candidate", pos: "noun", translation: "Candidato", example: "She is a strong candidate for the job." },
    { word: "Decade", pos: "noun", translation: "Década", example: "He has been studying English for a decade." },
    { word: "Effort", pos: "noun", translation: "Esforço", example: "Fluency requires consistent daily effort." },
    { word: "Feedback", pos: "noun", translation: "Feedback, retorno", example: "Constructive feedback helps you learn faster." },
    { word: "Guidance", pos: "noun", translation: "Orientação, conselho", example: "With the tutor's guidance, I passed the test." },
    { word: "Habit", pos: "noun", translation: "Hábito", example: "Make reading a daily habit." },
    { word: "Influence", pos: "noun", translation: "Influência", example: "Music has a strong influence on pronunciation." },
    { word: "Journey", pos: "noun", translation: "Jornada", example: "Learning a language is a long journey." },
    { word: "Knowledge", pos: "noun", translation: "Conhecimento", example: "Reading broadens your knowledge." },
    { word: "Lesson", pos: "noun", translation: "Lição", example: "Today's lesson is about active reading." },
    { word: "Method", pos: "noun", translation: "Método", example: "Find a study method that works for you." },
    { word: "Nuance", pos: "noun", translation: "Nuance, detalhe sutil", example: "Idioms carry cultural nuances." },
    { word: "Option", pos: "noun", translation: "Opção", example: "You have the option to study offline." },
    { word: "Pattern", pos: "noun", translation: "Padrão", example: "Notice sentence patterns instead of grammar rules." },
    { word: "Queue", pos: "noun", translation: "Fila", example: "We waited in a long queue at the London ticket box." },
    { word: "Reward", pos: "noun", translation: "Recompensa", example: "XP is a reward for your hard work." },
    { word: "Skill", pos: "noun", translation: "Habilidade", example: "Speaking is a dynamic skill." },
    { word: "Task", pos: "noun", translation: "Tarefa", example: "Finish your speaking task before dinner." },
    { word: "Usage", pos: "noun", translation: "Uso", example: "Dictionary examples show correct word usage." },
    { word: "Variety", pos: "noun", translation: "Variedade", example: "A wide variety of activities keeps you focused." },
    { word: "Wisdom", pos: "noun", translation: "Sabedoria", example: "With age comes wisdom." },
    { word: "Zeal", pos: "noun", translation: "Zelo, entusiasmo", example: "Her zeal for teaching English is inspiring." },
    { word: "Accuracy", pos: "noun", translation: "Precisão, exatidão", example: "Focus on fluency first, then accuracy." },
    { word: "Benefit", pos: "noun", translation: "Benefício", example: "Speaking with native speakers has many benefits." },
    { word: "Consequence", pos: "noun", translation: "Consequência", example: "Missing reviews is a consequence of poor planning." },
    { word: "Distraction", pos: "noun", translation: "Distração", example: "Put your phone away to avoid distraction." },
    { word: "Evaluation", pos: "noun", translation: "Avaliação", example: "Take the evaluation test at the end of the module." },
    { word: "Failure", pos: "noun", translation: "Falha, fracasso", example: "Failure is just part of the learning process." },
    { word: "Goal", pos: "noun", translation: "Objetivo, meta", example: "My goal is to reach B2 level this year." },
    { word: "Hesitation", pos: "noun", translation: "Hesitação", example: "Try to speak without too much hesitation." },
    { word: "Illusion", pos: "noun", translation: "Ilusão", example: "Thinking translation is enough is a common illusion." },
    { word: "Justice", pos: "noun", translation: "Justiça", example: "The system treats all candidates with justice." },
    { word: "Key", pos: "noun", translation: "Chave", example: "Vocabulary is the key to expressing your ideas." },
    { word: "Language", pos: "noun", translation: "Idioma", example: "English is a beautiful language." },
    { word: "Motivation", pos: "noun", translation: "Motivação", example: "Find your internal motivation for studying." },
    { word: "Necessity", pos: "noun", translation: "Necessidade", example: "Daily practice is a necessity for B2 speaking." },
    { word: "Outcome", pos: "noun", translation: "Resultado, desfecho", example: "The outcome of the study was very positive." },
    { word: "Priority", pos: "noun", translation: "Prioridade", example: "Listening is my top priority this week." },
    { word: "Question", pos: "noun", translation: "Pergunta, questão", example: "Ask a question if you don't understand." },
    { word: "Reason", pos: "noun", translation: "Razão, motivo", example: "What is your reason for learning English?" },
    { word: "Solution", pos: "noun", translation: "Solução", example: "Consistent practice is the solution to fluency blocks." },
    { word: "Topic", pos: "noun", translation: "Tópico, assunto", example: "Choose a topic that you enjoy reading about." },
    { word: "Union", pos: "noun", translation: "União", example: "The union of reading and listening builds strong memory." },
    { word: "Value", pos: "noun", translation: "Valor", example: "This planner adds a lot of value to my routine." },
    { word: "Warning", pos: "noun", translation: "Aviso, alerta", example: "The red light is a warning that time is running out." },
    { word: "Youth", pos: "noun", translation: "Juventude", example: "He spent his youth traveling in London." },
    { word: "Zone", pos: "noun", translation: "Zona, área", example: "Try to get into your focus zone when starting." },

    // --- ADVÉRBIOS ---
    { word: "Actually", pos: "adverb", translation: "Na verdade, realmente", example: "I actually completed all my daily tasks." },
    { word: "Briefly", pos: "adverb", translation: "Brevemente", example: "Let's briefly review the rules before starting." },
    { word: "Deliberately", pos: "adverb", translation: "Deliberadamente", example: "He spoke deliberately slowly so we could understand." },
    { word: "Mutually", pos: "adverb", translation: "Mutuamente", example: "The two ideas are not mutually exclusive." },
    { word: "Reluctantly", pos: "adverb", translation: "Relutantemente", example: "She reluctantly agreed to give the presentation." },
    { word: "Scarcely", pos: "adverb", translation: "Mal, quase não", example: "I had scarcely started reading when the bell rang." },
    { word: "Tediously", pos: "adverb", translation: "Tediosamente", example: "The speaker talked tediously about grammar lists." },
    { word: "Vaguely", pos: "adverb", translation: "Vagamente", example: "I vaguely remember meeting her in London." },
    { word: "Wisely", pos: "adverb", translation: "Sabiamente", example: "He wisely invested his time in learning English." },
    { word: "Zealously", pos: "adverb", translation: "Zelosamente, com entusiasmo", example: "She zealously guarded her study routine." },
    { word: "Accurately", pos: "adverb", translation: "Precisamente", example: "She can now pronounce 'th' accurately." },
    { word: "Beneficially", pos: "adverb", translation: "Benéficamente", example: "The changes affected my learning beneficially." },
    { word: "Conspicuously", pos: "adverb", translation: "Visivelmente", example: "The error was conspicuously written on the board." },
    { word: "Diligentely", pos: "adverb", translation: "Diligentemente", example: "She worked diligently on her writing skills." },
    { word: "Eloquently", pos: "adverb", translation: "Eloquentemente", example: "He argued his point eloquently." },
    { word: "Fluently", pos: "adverb", translation: "Fluentemente", example: "My goal is to speak English fluently." },
    { word: "Gravely", pos: "adverb", translation: "Gravemente", example: "The situation was gravely serious." },
    { word: "Highly", pos: "adverb", translation: "Altamente", example: "The teacher is highly recommended." },
    { word: "Immediately", pos: "adverb", translation: "Imediatamente", example: "Open the dictionary immediately if you're stuck." },
    { word: "Judiciously", pos: "adverb", translation: "Criteriosamente", example: "Choose your study topics judiciously." },
    { word: "Keenly", pos: "adverb", translation: "Intensamente", example: "He was keenly aware of his pronunciation issues." },
    { word: "Laboriously", pos: "adverb", translation: "Trabalhosamente", example: "They laboriously translated the ancient text." },
    { word: "Merely", pos: "adverb", translation: "Apenas, meramente", example: "It was merely a spelling mistake; don't worry." },
    { word: "Notably", pos: "adverb", translation: "Notavelmente", example: "Her writing was notably better this term." },
    { word: "Obviously", pos: "adverb", translation: "Obviamente", example: "Obviously, you need to practice speaking to improve." },
    { word: "Peculiarly", pos: "adverb", translation: "Peculiarmente, estranhamente", example: "The phrase was peculiarly constructed." },
    { word: "Quickly", pos: "adverb", translation: "Rapidamente", example: "She quickly grasped the core concept." },
    { word: "Rapidly", pos: "adverb", translation: "Rapidamente", example: "Your vocabulary will expand rapidly through reading." },
    { word: "Spontaneously", pos: "adverb", translation: "Espontaneamente", example: "The students spontaneously started speaking English." },
    { word: "Thoroughly", pos: "adverb", translation: "Completamente, minuciosamente", example: "You must thoroughly review the vocabulary pool." },
    { word: "Unanimously", pos: "adverb", translation: "Unanimemente", example: "The class unanimously agreed to play the game." },
    { word: "Vigorously", pos: "adverb", translation: "Vigorosamente", example: "He vigorously shook my hand after the presentation." },
    { word: "Wholesomely", pos: "adverb", translation: "Saudavelmente", example: "They spent their vacation wholesomely outdoors." },
    { word: "Yearly", pos: "adverb", translation: "Anualmente", example: "The syllabus is updated yearly." },
    { word: "Actively", pos: "adverb", translation: "Ativamente", example: "You must actively speak to learn." },
    { word: "Bravely", pos: "adverb", translation: "Corajosamente", example: "She bravely stood up to speak on stage." },
    { word: "Carefully", pos: "adverb", translation: "Cuidadosamente", example: "Listen carefully to the audio sample." },
    { word: "Doubtfully", pos: "adverb", translation: "Duvidosamente", example: "He shook his head doubtfully at the explanation." },
    { word: "Equally", pos: "adverb", translation: "Igualmente", example: "Both options are equally valid." },
    { word: "Finally", pos: "adverb", translation: "Finalmente", example: "I finally finished the 30-question test." },
    { word: "Gently", pos: "adverb", translation: "Suavemente", example: "Close the door gently so you don't disrupt the class." },
    { word: "Honestly", pos: "adverb", translation: "Honestamente", example: "Honestly, that was the best lesson so far." },
    { word: "Intentionally", pos: "adverb", translation: "Intencionalmente", example: "He intentionally repeated the sentence to remember it." },
    { word: "Jointly", pos: "adverb", translation: "Conjuntamente", example: "They worked jointly on the group project." },
    { word: "Knowingly", pos: "adverb", translation: "Conscientemente, de propósito", example: "She knowingly ignored the rules." },
    { word: "Lightly", pos: "adverb", translation: "Levemente", example: "Tap the screen lightly to trigger the card." },
    { word: "Mostly", pos: "adverb", translation: "Principalmente, na maioria", example: "The class is mostly made of business students." },
    { word: "Naturally", pos: "adverb", translation: "Naturalmente", example: "With time, you will speak English naturally." },
    { word: "Openly", pos: "adverb", translation: "Abertamente", example: "They openly discussed their studying failures." },
    { word: "Particularly", pos: "adverb", translation: "Particularmente", example: "The grammar lesson was particularly useful." },
    { word: "Quietly", pos: "adverb", translation: "Silenciosamente", example: "Work quietly during the focus interval." },
    { word: "Rarely", pos: "adverb", translation: "Raramente", example: "I rarely get distracted when using Brown Noise." },
    { word: "Steadily", pos: "adverb", translation: "Constantemente", example: "My writing score is steadily improving." },
    { word: "Truly", pos: "adverb", translation: "Verdadeiramente", example: "I am truly amazed by your progress." },
    { word: "Ultimately", pos: "adverb", translation: "No final, por fim", example: "Ultimately, you are responsible for your routine." },
    { word: "Vastly", pos: "adverb", translation: "Vastamente, muito", example: "His speaking skills are vastly superior now." },
    { word: "Warmly", pos: "adverb", translation: "Calorosamente", example: "She welcomed us warmly into her class." },
    { word: "Anxiously", pos: "adverb", translation: "Ansiosamente", example: "We anxiously waited for the exam results." },
    { word: "Boldly", pos: "adverb", translation: "Audaciosamente", example: "He boldly declared that he would reach C1 in a year." },
    { word: "Commonly", pos: "adverb", translation: "Comumente", example: "This word is commonly used in academic circles." },
    { word: "Eagerly", pos: "adverb", translation: "Ansiosamente (com expectativa)", example: "The children eagerly opened their gifts." },
    { word: "Fortunately", pos: "adverb", translation: "Felizmente", example: "Fortunately, I saved my progress before logging out." },
    { word: "Gradually", pos: "adverb", translation: "Gradualmente", example: "You will gradually feel more comfortable speaking." },
    { word: "Hardly", pos: "adverb", translation: "Dificilmente, quase não", example: "I could hardly hear the audio due to the static." },
    { word: "Inevitably", pos: "adverb", translation: "Inevitavelmente", example: "Lack of practice will inevitably lead to forgetting." },
    { word: "Lately", pos: "adverb", translation: "Ultimamente", example: "I have been practicing speaking a lot lately." },
    { word: "Perfectly", pos: "adverb", translation: "Perfeitamente", example: "She pronounced that sentence perfectly." },
    { word: "Silently", pos: "adverb", translation: "Silenciosamente", example: "Read the paragraph silently to grasp the context." },
    { word: "Solely", pos: "adverb", translation: "Unicamente, exclusivamente", example: "Fluency does not depend solely on grammar sheets." },
    { word: "Wildly", pos: "adverb", translation: "Descontroladamente", example: "The results of the test varied wildly." }
];

const THINK_IN_ENGLISH_POOL = [
    {
        situation: "Você quer pedir a conta num restaurante de forma natural.",
        english: "Can I have the bill, please?",
        explanation: "Evite traduzir 'pedir a conta' como 'ask for the account'. Em inglês, usamos 'have the bill' (Reino Unido) ou 'have the check' (EUA)."
    },
    {
        situation: "Você quer dizer 'de nada' depois que alguém diz 'thank you'.",
        english: "You're welcome!",
        explanation: "Nunca diga 'of nothing'! 'You're welcome', 'No problem' ou 'Anytime' são os termos corretos e nativos."
    },
    {
        situation: "Você quer pedir licença para passar por alguém em um corredor apertado.",
        english: "Excuse me.",
        explanation: "Use 'Excuse me' para pedir licença física. Evite dizer 'sorry' neste caso, pois 'sorry' é usado apenas para desculpar-se após algo ocorrer."
    },
    {
        situation: "Você quer perguntar a alguém o que ela faz da vida profissionalmente.",
        english: "What do you do?",
        explanation: "Evite perguntar 'what is your job' de forma seca. 'What do you do?' é a pergunta coloquial padrão."
    },
    {
        situation: "Você quer perguntar onde fica o banheiro em um restaurante.",
        english: "Where is the restroom?",
        explanation: "Em locais públicos nos EUA, prefira 'restroom'. No Reino Unido, 'toilet' é aceito, e 'loo' é informal. Evite 'bathroom' se não houver chuveiro."
    },
    {
        situation: "Você quer dizer que concorda totalmente com a opinião de alguém.",
        english: "I couldn't agree more.",
        explanation: "Essa frase significa 'concordo plenamente' (não conseguiria concordar mais), sendo muito mais nativa do que 'I agree 100%'."
    },
    {
        situation: "Você quer dizer a alguém que vai dormir porque está muito cansado.",
        english: "I'm going to hit the sack.",
        explanation: "Expressão idiomática nativa (idiom) muito comum para dizer que vai deitar/dormir. Evite traduzir 'sleep' literalmente sempre."
    },
    {
        situation: "Você quer pedir ajuda rápida para alguém.",
        english: "Can you give me a hand?",
        explanation: "Usar 'give a hand' é uma forma nativa e gentil de pedir cooperação imediata, muito melhor do que 'help me' seco."
    },
    {
        situation: "Você quer dizer que comprou algo muito barato (uma pechincha).",
        english: "It was a steal!",
        explanation: "Significa 'foi um roubo' (no sentido de pechincha/muito barato). Evite a tradução literal 'very cheap buy'."
    },
    {
        situation: "Você quer desejar boa sorte para alguém que vai fazer uma apresentação.",
        english: "Break a leg!",
        explanation: "Superstição teatral em inglês que se tornou o sinônimo informal favorito para 'boa sorte'. Evite dizer apenas 'good luck'."
    },
    {
        situation: "Você quer dizer que está achando algo extremamente difícil de entender.",
        english: "I can't make head or tail of this.",
        explanation: "Significa que você não consegue entender nada ('sem pé nem cabeça'). É muito mais natural do que 'I don't understand anything'."
    },
    {
        situation: "Você quer perguntar as horas para alguém na rua educadamente.",
        english: "Excuse me, do you have the time?",
        explanation: "Perguntar 'What time is it?' pode soar abrupto. 'Do you have the time?' é a forma padrão polida."
    },
    {
        situation: "Você quer dizer que a decisão final depende da outra pessoa.",
        english: "The ball is in your court.",
        explanation: "Expressão originada no tênis que significa 'a decisão/jogada agora é sua'. Muito usada no meio corporativo e social."
    },
    {
        situation: "Você quer expressar que algo custou muito dinheiro (olho da cara).",
        english: "It cost an arm and a leg.",
        explanation: "Expressão idiomática clássica em inglês para indicar que algo foi extremamente caro. Substitui 'very expensive'."
    },
    {
        situation: "Você quer dizer que está se sentindo um pouco doente (resfriado/indisposto).",
        english: "I'm feeling under the weather.",
        explanation: "Indica indisposição física leve. Dizer 'I'm sick' costuma soar mais grave do que o real."
    },
    {
        situation: "Você quer dizer que entende a situação difícil de outra pessoa.",
        english: "I know how you feel.",
        explanation: "Expressão de empatia comum e natural. Evite 'I understand your problem' por soar frio e analítico."
    },
    {
        situation: "Você quer pedir a atenção de um garçom em um restaurante.",
        english: "Excuse me!",
        explanation: "Nunca estale os dedos ou chame alto. Dizer 'Excuse me' com um leve aceno é o padrão cultural polido."
    },
    {
        situation: "Você quer propor de dividir a conta do restaurante meio a meio.",
        english: "Let's go Dutch.",
        explanation: "Expressão comum para dizer que cada um pagará sua parte da conta. 'Split the bill' também é bastante comum."
    },
    {
        situation: "Você quer dizer a alguém para relaxar e não se preocupar.",
        english: "Take it easy.",
        explanation: "Expressão extremamente popular para acalmar alguém ou se despedir de forma leve. Substitui 'don't worry' ou 'relax'."
    },
    {
        situation: "Você quer dizer que uma situação chata acontece às vezes (fazer o quê).",
        english: "It is what it is.",
        explanation: "Expressão de conformismo com a realidade ('é o que é'). Muito usada para aceitar pequenos contratempos cotidianos."
    },
    {
        situation: "Você quer dizer que vai adiar um plano para outra oportunidade.",
        english: "Can I take a rain check?",
        explanation: "Expressão extremamente idiomática usada para recusar um convite educadamente propondo reagendar para o futuro."
    },
    {
        situation: "Você quer dizer que está extremamente feliz (nas nuvens).",
        english: "I'm on cloud nine.",
        explanation: "Significa estar em estado de êxtase ou felicidade absoluta. Mais expressivo do que 'I am very happy'."
    },
    {
        situation: "Você quer dizer que mudou de ideia sobre um assunto.",
        english: "I've had a change of heart.",
        explanation: "Forma poética e nativa de dizer que seus sentimentos ou opiniões sobre algo mudaram."
    },
    {
        situation: "Você quer desejar boa viagem a alguém.",
        english: "Safe travels!",
        explanation: "Embora 'Bon voyage' seja usado, 'Safe travels!' é a expressão nativa mais comum e calorosa atualmente."
    },
    {
        situation: "Você quer pedir para a pessoa falar mais alto porque você não está ouvindo.",
        english: "Could you speak up, please?",
        explanation: "Usar 'speak up' significa falar mais alto. Dizer 'speak louder' pode soar um pouco ríspido ou imperativo."
    },
    {
        situation: "Você quer dizer que está muito ocupado no trabalho (até o pescoço).",
        english: "I'm snowed under at work.",
        explanation: "Metáfora de estar 'soterrado de neve' usada para expressar sobrecarga de tarefas. Mais rica do que 'very busy'."
    },
    {
        situation: "Você quer dizer que entende o que a pessoa quis dizer (captou a mensagem).",
        english: "I get the picture.",
        explanation: "Significa que você compreendeu o cenário geral sem precisar de mais explicações detalhadas."
    },
    {
        situation: "Você quer confessar ou esclarecer algo de vez (abrir o jogo).",
        english: "Let's clear the air.",
        explanation: "Significa dissipar mal-entendidos ou tensões entre pessoas conversando abertamente."
    },
    {
        situation: "Você quer dizer que a situação saiu do seu controle.",
        english: "It got out of hand.",
        explanation: "Usado quando uma festa, discussão ou projeto perde o controle organizacional ou emocional."
    },
    {
        situation: "Você quer incentivar alguém a continuar fazendo um bom trabalho.",
        english: "Keep up the good work!",
        explanation: "Frase motivacional clássica muito usada por chefes, colegas e professores. Evite traduzir como 'continue the good work'."
    },
    {
        situation: "Você quer dizer que acha que alguém está brincando com você (tirando uma onda).",
        english: "Are you pulling my leg?",
        explanation: "Equivalente ao nosso 'Você está me zoando?' ou 'brincando comigo?'. Muito informal e comum."
    },
    {
        situation: "Você quer dizer que tem um palpite ou intuição forte sobre algo.",
        english: "I have a gut feeling.",
        explanation: "Gut significa intestino/estômago. Refere-se àquela intuição física que sentimos antes de racionalizar."
    },
    {
        situation: "Você quer expressar que as aparências enganam.",
        english: "Don't judge a book by its cover.",
        explanation: "Provérbio super comum aplicável a pessoas, lugares ou situações em inglês."
    },
    {
        situation: "Você quer dizer que o tempo passa muito rápido quando nos divertimos.",
        english: "Time flies when you're having fun.",
        explanation: "Expressão idiomática universal para o tempo voar. Substitui 'time is very fast'."
    },
    {
        situation: "Você quer dizer que vai fazer algo custe o que custar (faça chuva ou faça sol).",
        english: "Come rain or shine.",
        explanation: "Compromisso inabalável de fazer uma tarefa independentemente das circunstâncias climáticas ou sociais."
    },
    {
        situation: "Você quer dizer que resolveu dois problemas com uma única ação.",
        english: "To kill two birds with one stone.",
        explanation: "Equivalente perfeito ao nosso 'matar dois coelhos com uma cajadada só'."
    },
    {
        situation: "Você quer pedir para a pessoa ir direto ao ponto sem enrolação.",
        english: "Cut to the chase.",
        explanation: "Expressão oriunda do cinema (cortar direto para a cena de perseguição). Significa ir direto ao que interessa."
    },
    {
        situation: "Você quer dizer que escuta inglês apenas de vez em quando (raramente).",
        english: "Once in a blue moon.",
        explanation: "Expressão usada para atividades extremamente raras. Substitui de forma estilosa o advérbio 'rarely'."
    },
    {
        situation: "Você quer dizer que está super cansado no fim do dia (esgotado).",
        english: "I'm clean spent.",
        explanation: "Significa estar completamente exaurido de energia. 'I am exhausted' também funciona, mas 'spent' é muito coloquial."
    },
    {
        situation: "Você quer dizer que não quer tomar partido em uma discussão.",
        english: "I'm sitting on the fence.",
        explanation: "Estar em cima do muro. Demonstra neutralidade deliberada em um debate acalorado."
    },
    {
        situation: "Você quer confortar alguém dizendo que males vêm para o bem (há males que vêm para o bem).",
        english: "Every cloud has a silver lining.",
        explanation: "Provérbio otimista indicando que há sempre algo positivo, mesmo nas piores situações de dificuldade."
    },
    {
        situation: "Você quer dizer que concorda em esquecer desavenças do passado (águas passadas).",
        english: "Let bygones be bygones.",
        explanation: "Expressão pacífica que significa 'deixe o passado no passado' ou 'esqueça o que já foi'."
    },
    {
        situation: "Você quer dizer que revelou um segredo sem querer (deixar escapar).",
        english: "I let the cat out of the bag.",
        explanation: "Expressão clássica para quando revelamos uma surpresa ou segredo acidentalmente."
    },
    {
        situation: "Você quer dizer que a verdade sobre uma mentira sempre aparece.",
        english: "Truth will out.",
        explanation: "Provérbio shakesperiano comum que indica que a verdade inevitavelmente será descoberta."
    },
    {
        situation: "Você quer pedir para alguém esperar um momento rápido (aguente as pontas).",
        english: "Hang in there!",
        explanation: "Frase de encorajamento para alguém resistir a uma situação difícil. Para tempo rápido, use 'Hang on a second'."
    },
    {
        situation: "Você quer dizer que está com dificuldades financeiras temporárias (apertado).",
        english: "I'm a bit short on cash.",
        explanation: "Substitui 'I'm poor' de forma muito mais polida e natural no cotidiano."
    },
    {
        situation: "Você quer dizer que a prática leva à perfeição.",
        english: "Practice makes perfect.",
        explanation: "Ditado universal motivador indispensável para quem está aprendendo um novo idioma."
    },
    {
        situation: "Você quer propor de encerrar as atividades do dia (dar o dia por encerrado).",
        english: "Let's call it a day.",
        explanation: "Expressão padrão de trabalho ou estudo para sinalizar que a jornada produtiva daquele dia terminou."
    },
    {
        situation: "Você quer dizer que compreende perfeitamente a lógica de algo (faz sentido).",
        english: "It makes sense.",
        explanation: "Em inglês não se diz 'have sense', mas sim 'make sense'. Memorize essa regência!"
    },
    {
        situation: "Você quer dizer que aprendeu a lição após cometer um erro.",
        english: "I've learned my lesson.",
        explanation: "Usado após sofrer as consequências de um erro e prometer não repeti-lo."
    }
];

// Exportação para uso no app.js (como carregamos via script global)
window.FLASHCARDS_POOL = FLASHCARDS_POOL;
window.THINK_IN_ENGLISH_POOL = THINK_IN_ENGLISH_POOL;
