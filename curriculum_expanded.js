/**
 * CURRICULUM_EXPANDED (Restructured 100% Sandra Bassani book - Clean Textbook Version)
 * 9 levels: INTRO and U1 to U8.
 * 41 lessons in total, mapped directly to book units.
 * Faithfully follows the book format with 3 clean slides (Leitura & Estudo, Diálogos & Vocabulário, Exercícios).
 */

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

const BASSANI_TOPICS = {
    "INTRO": {
        "title": "O Alfabeto (The Alphabet)",
        "unit": "INTRODUÇÃO",
        "sentences": [
            {
                "en": "How do you spell your name?",
                "pt": "Como se soletra seu nome?",
                "missing": "spell",
                "options": [
                    "spell",
                    "write",
                    "say"
                ]
            },
            {
                "en": "My name is spelled with a double T.",
                "pt": "Meu nome é soletrado com dois T.",
                "missing": "spelled",
                "options": [
                    "spelled",
                    "spoken",
                    "called"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Alphabet",
                "definition": "O alfabeto inglês com 26 letras."
            },
            {
                "term": "Spell",
                "definition": "Soletrar uma palavra letra por letra."
            },
            {
                "term": "Schwa /ə/",
                "definition": "O som vocálico reduzido mais comum do inglês (ex: father)."
            }
        ],
        "quiz": {
            "question": "Como se pronuncia a letra 'W' em inglês?",
            "options": [
                "zi",
                "uai",
                "double-u",
                "dbâiu"
            ],
            "correctIndex": 3,
            "explanation": "A letra W se pronuncia 'dbâiu' (ou 'double-u' em transcrição rápida)."
        },
        "businessContext": {
            "scenario": "Soletrando e-mail ou nome em uma reunião de negócios ou call com cliente.",
            "en": "Can you spell your email address, please?",
            "pt": "Você pode soletrar o seu endereço de e-mail, por favor?",
            "missing": "spell",
            "options": [
                "spell",
                "type",
                "send"
            ],
            "terms": [
                {
                    "term": "Dot",
                    "definition": "O ponto '.' usado em e-mails e sites corporativos."
                },
                {
                    "term": "At",
                    "definition": "O símbolo '@' usado em addresses de e-mail."
                }
            ],
            "quiz": {
                "question": "Como se diz o e-mail 'sales@company.com' em inglês corporativo?",
                "options": [
                    "sales dot company at com",
                    "sales at company point com",
                    "sales slash company dot com",
                    "sales at company dot com"
                ],
                "correctIndex": 3,
                "explanation": "Usamos 'at' para '@' e 'dot' para o ponto '.' em e-mails."
            }
        },
        "rawText": " 10 \n \n \nAntes de começar a aprender palavras e frases, é importante que você se familiarize com \nos sons do Inglês. Primeiro, você vai aprender o nome das letras. Isso é importante caso \ntenha que soletrar seu nome ou outras palavras: \n \n \n \nO Alfabeto do Inglês tem 26 letras. Apresento a pronúncia de cada uma delas, \nrepresentada pelos símbolos fonéticos estabelecidos pelo Alfabeto Fonético Internacional \n(IPA), usados para classificar os sons. \n \nA (eɪ) B (bi:) C (si:) D (di:) E (i:) F (ef) G (dji:) H (eɪtʃ) I (aɪ) J (djeɪ) K (keɪ) L (el) M (em) N (en) \nO (ou) P (pi:) Q (kyu:) R (a:r) S (es) T (ti:) U (yu:) V (vi:) W (dbâiu) X (ékis) Y (uai) Z (zi). \n \n \n \n \n \n \n \n \n \n \n \n \n \nINTRODUÇÃO (INTRODUCTION) \n \nO ALFABETO (THE ALPHABET) \n \nNo link abaixo você encontra a pronúncia de todas as letras. Ouça-as e repita-as. \nhttps://www.bomingles.com.br/curso/basico/semana01/licao03 \n \n 11 \nPara entender melhor a pronúncia do inglês, vamos dividir as letras em consoantes, \nvogais e ditongos. \n \n- Consoantes, na sequência: letra / símbolo fonético / exemplo de palavra. \n \nB     /b/  - bill, bed \nC    /k/ - cat, car \nD    /d/  - day, dad \nF    /f/  - fan, fish \nG /g/*  - goal, game \nH /h/**  - house, horse  \nJ /dj/ - jam, John \nK /k/  - kill, king \nL   /l/  - late, learn \nM /m/  - make, milk \nN /n/  - night, never \nP /p/  - pill, pen \nQ /kw/ - queen, question \nR /r/  - red, rose \nS /s/  - sink, set \nT /t/  - table, teacher \nV /v/  - van, view \nW w/  - wine, wet \nX /eks/ - x-ray \nY /y/  - yes, yellow \nZ  /z/  - zinc, zero \n \n* Dependendo da posição na palavra, o G pode ter diferentes pronúncias: \n \n \n \n \n \n* Neste caso, o H é aspirado, tem som. Existem palavras em que o H é mudo. Exemplo: \nhonor, hour. \n  \n/dj/ - age, bridge \n/ŋ/ - long, sing \n \n 12 \n \n \n \n*** Este mesmo som pode ser encontrado em \nvárias palavras, representado por letras \ndiferentes. Exemplos: sugar, issue, mansion, \nmission, nation, suspicion, etc. \n \n \n \n \n \n \n \n \n \nSom Letra A + \ncombinações Exemplos Exceções \n[a:] ar \na \narmy, car, party, garden, park \nfather, calm, palm, drama \nwar, warm [Ɔ:] \n  \n[ei] a \nai, ay \nei, ey \nea \nlate, make, race, able \naim, wait, play, say \neight, weight, they \nbreak, great, steak \n  \nsaid, says [e] \nheight, eye [ai] \n[æ] a cat, apple, land, travel, mad \n \n  \nPRONÚNCIAS ESPECIAIS \n \nCH /ʧ/ - cheap, check \nSH /ʃ/ *** - she, ship \nTH (surdo)      /Ø/ - think, thanks \nTH (sonoro)  /ð/ - this, brother \nVOGAIS: \nUma mesma vogal pode \nrepresentar diferentes sons, assim \ncomo o mesmo som pode ser \nrepresentado por vogais diferentes, \npor isso, a pronúncia das vogais é \num processo complexo e requer \nmuita prática. \n \nDITONGOS: \nO ditongo ocorre quando, na \npronúncia, ocorrem duas vogais na \nmesma sílaba, mesmo que ela seja \nrepresentada, na escrita, por uma \nletra só. \nNas tabelas abaixo, apresento as \nvárias possibilidades de pronúncia \ndas vogais e dos ditongos: \n \n 13 \nSom Letra E + \ncombinações Exemplos Exceções \n[e] e \nea \nlet, tell, press, send, end \nbread, dead, weather \nmeter [i:] \nsea, mean [i:] \n[i:] e, ee \nea \nie, ei \nbe, see, meet  \nread, leave, sea \nfield, receive \nbeen [i] \nbread, deaf [e] \ngreat, break [ei] \nfriend [e] \n \n \nSom Letra I + \ncombinações Exemplos Exceções \n[i] i \ny \nit, kiss, tip, pick, dinner \nsystem, busy, pity, sunny \nmachine, ski \nliter, pizza [i:] \n[ai] i, ie \ny, uy \nice, find, smile, tie, lie, die \nmy, style, apply, buy, guy \n \n[ɜ:] i, o, u bird, first, work, burn  \n \n \nSom Letra O + \ncombinações Exemplos Exceções \n[o] o not, rock, model, bottle, copy  \n[Ɔ:] or \no \naw, au \nought \nal, wa \nmore, order, cord, port \nlong, gone, cost, coffee \nlaw, saw, pause, because \nbought, thought, caught \nhall, always, water, war, want \nwork, word [ər] \n  \n  \n  \n[oi] oi, oy oil, voice, noise, boy, toy  \n[ou] o \noa, ow \ngo, note, open, old, most \nroad, boat, low, own, bowl \ndo, move [u:] \nhow, owl [au] \n[au] ou \now \nout, about, house, mouse \nnow, brown, cow, powder \ngroup, soup [u:] \nknow, own [ou] \n \n \n \n \n 14 \nSom Letra U + \ncombinações Exemplos Exceções \n[Ʊ] oo \nu \nou \nlook, book, foot, good, could \nput, push, pull, full, sugar \nwould, could, should \n \n[u:] u \no, oo \new \nue, ui \nou \nrude, Lucy, June, \ndo, move, room, tool \ncrew, chew, flew, jewel \nblue, true, fruit, juice \ngroup, route \n  \n  \nguide, quite [ai] \nbuild [i] \n[yu:] u \new \neu \nue, ui \nuse, music, cute, huge \nfew, new \neuphemism, neutral \ncue, due, suit \n \n \n \nSom Várias Vogais Exemplos Exceções \nneutral sound [ə] u, o \nou \na, e \no, i \ngun, cut, son, money \ntough, enough, rough \nabout, taken, violent \nmemory, reason, family \n \nstressed [ʌ] \nunstressed [ə] \n \n \nSom Várias Vogais + combinações Exemplos Exceções \n[ər] er, ur, ir \nor, ar \near \nserve, herb, burn, hurt, sir \nwork, word, doctor, dollar \nheard, earn, earnest, earth \n  \nheart, hearth [a:] \n \n \n \n \n \n \n \n \nAs tabelas foram adaptadas de: \nhttp://usefulenglish.ru/phonetics/english-vowel-sounds \n 15 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n1 - Utilize o site abaixo para transcrever foneticamente as palavras que você desejar e \nobservar sua pronúncia. \n \n \n \n  \n \n \n \n \n \n \n \n \n \n \nINFORMAÇÃO ADICIONAL \n \n/ə:/ \nSchwa. Este é um fonema muito comum em Inglês, uma vogal reduzida, e é \nencontrada em muitas palavras, principalmente na sílaba final, ou em algumas \npalavras onde a única vogal está entre duas consoantes. \n \nExemplos \n \nFather (pai) / faːðə(r)/, mother (mãe) / mʌðə(r)/ \n \nhttps://tophonetics.com/pt/ \nEXERCÍCIO \n",
        "reconstructed_explanation": "INTRODUÇÃO (INTRODUCTION) <br> <br>O ALFABETO (THE ALPHABET) <br> <br>No link abaixo você encontra a pronúncia de todas as letras. Ouça-as e repita-as. <br>https://www.bomingles.com.br/curso/basico/semana01/licao03 <br>Para entender melhor a pronúncia do inglês, vamos dividir as letras em consoantes, <br>vogais e ditongos. <br> <br>- Consoantes, na sequência: letra / símbolo fonético / exemplo de palavra. <br> <br>B /b/ - bill, bed <br>C /k/ - cat, car <br>D /d/ - day, dad <br>F /f/ - fan, fish <br>G /g/* - goal, game <br>H /h/** - house, horse <br>J /dj/ - jam, John <br>K /k/ - kill, king <br>L /l/ - late, learn <br>M /m/ - make, milk <br>N /n/ - night, never <br>P /p/ - pill, pen <br>Q /kw/ - queen, question <br>R /r/ - red, rose <br>S /s/ - sink, set <br>T /t/ - table, teacher <br>V /v/ - van, view <br>W w/ - wine, wet <br>X /eks/ - x-ray <br>Y /y/ - yes, yellow <br>Z /z/ - zinc, zero <br> <br>* Dependendo da posição na palavra, o G pode ter diferentes pronúncias: <br> <br> <br> <br> <br> <br>* Neste caso, o H é aspirado, tem som. Existem palavras em que o H é mudo. Exemplo: <br>honor, hour. <br> <br>/dj/ - age, bridge <br>/ŋ/ - long, sing <br>*** Este mesmo som pode ser encontrado em <br>várias palavras, representado por letras <br>diferentes. Exemplos: sugar, issue, mansion, <br>mission, nation, suspicion, etc. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>Som Letra A + <br>combinações Exemplos Exceções <br>[a:] ar <br>a <br>army, car, party, garden, park <br>father, calm, palm, drama <br>war, warm [Ɔ:] <br> <br>[ei] a <br>ai, ay <br>ei, ey <br>ea <br>late, make, race, able <br>aim, wait, play, say <br>eight, weight, they <br>break, great, steak <br> <br>said, says [e] <br>height, eye [ai] <br>[æ] a cat, apple, land, travel, mad <br> <br> <br>PRONÚNCIAS ESPECIAIS <br> <br>CH /ʧ/ - cheap, check <br>SH /ʃ/ *** - she, ship <br>TH (surdo) /Ø/ - think, thanks <br>TH (sonoro) /ð/ - this, brother <br>VOGAIS: <br>Uma mesma vogal pode <br>representar diferentes sons, assim <br>como o mesmo som pode ser <br>representado por vogais diferentes, <br>por isso, a pronúncia das vogais é <br>um processo complexo e requer <br>muita prática. <br> <br>DITONGOS: <br>O ditongo ocorre quando, na <br>pronúncia, ocorrem duas vogais na <br>mesma sílaba, mesmo que ela seja <br>representada, na escrita, por uma <br>letra só. <br>Nas tabelas abaixo, apresento as <br>várias possibilidades de pronúncia <br>das vogais e dos ditongos: <br>Som Letra E + <br>combinações Exemplos Exceções <br>[e] e <br>ea <br>let, tell, press, send, end <br>bread, dead, weather <br>meter [i:] <br>sea, mean [i:] <br>[i:] e, ee <br>ea <br>ie, ei <br>be, see, meet <br>read, leave, sea <br>field, receive <br>been [i] <br>bread, deaf [e] <br>great, break [ei] <br>friend [e] <br> <br> <br>Som Letra I + <br>combinações Exemplos Exceções <br>[i] i <br>y <br>it, kiss, tip, pick, dinner <br>system, busy, pity, sunny <br>machine, ski <br>liter, pizza [i:] <br>[ai] i, ie <br>y, uy <br>ice, find, smile, tie, lie, die <br>my, style, apply, buy, guy <br> <br>[ɜ:] i, o, u bird, first, work, burn <br> <br> <br>Som Letra O + <br>combinações Exemplos Exceções <br>[o] o not, rock, model, bottle, copy <br>[Ɔ:] or <br>o <br>aw, au <br>ought <br>al, wa <br>more, order, cord, port <br>long, gone, cost, coffee <br>law, saw, pause, because <br>bought, thought, caught <br>hall, always, water, war, want <br>work, word [ər] <br> <br> <br> <br>[oi] oi, oy oil, voice, noise, boy, toy <br>[ou] o <br>oa, ow <br>go, note, open, old, most <br>road, boat, low, own, bowl <br>do, move [u:] <br>how, owl [au] <br>[au] ou <br>ow <br>out, about, house, mouse <br>now, brown, cow, powder <br>group, soup [u:] <br>know, own [ou] <br>Som Letra U + <br>combinações Exemplos Exceções <br>[Ʊ] oo <br>u <br>ou <br>look, book, foot, good, could <br>put, push, pull, full, sugar <br>would, could, should <br> <br>[u:] u <br>o, oo <br>ew <br>ue, ui <br>ou <br>rude, Lucy, June, <br>do, move, room, tool <br>crew, chew, flew, jewel <br>blue, true, fruit, juice <br>group, route <br> <br> <br>guide, quite [ai] <br>build [i] <br>[yu:] u <br>ew <br>eu <br>ue, ui <br>use, music, cute, huge <br>few, new <br>euphemism, neutral <br>cue, due, suit <br> <br> <br> <br>Som Várias Vogais Exemplos Exceções <br>neutral sound [ə] u, o <br>ou <br>a, e <br>o, i <br>gun, cut, son, money <br>tough, enough, rough <br>about, taken, violent <br>memory, reason, family <br> <br>stressed [ʌ] <br>unstressed [ə] <br> <br> <br>Som Várias Vogais + combinações Exemplos Exceções <br>[ər] er, ur, ir <br>or, ar <br>ear <br>serve, herb, burn, hurt, sir <br>work, word, doctor, dollar <br>heard, earn, earnest, earth <br> <br>heart, hearth [a:] <br> <br> <br> <br> <br> <br> <br> <br> <br>As tabelas foram adaptadas de: <br>http://usefulenglish.ru/phonetics/english-vowel-sounds <br>1 - Utilize o site abaixo para transcrever foneticamente as palavras que você desejar e <br>observar sua pronúncia. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>INFORMAÇÃO ADICIONAL <br> <br>/ə:/ <br>Schwa. Este é um fonema muito comum em Inglês, uma vogal reduzida, e é <br>encontrada em muitas palavras, principalmente na sílaba final, ou em algumas <br>palavras onde a única vogal está entre duas consoantes. <br> <br>Exemplos <br> <br>Father (pai) / faːðə(r)/, mother (mãe) / mʌðə(r)/ <br> <br>https://tophonetics.com/pt/",
        "reconstructed_dialogue": "",
        "reconstructed_exercises": "Cumprimentos formais (Formal greetings) <br>Good morning. <br>Good afternoon. <br>Good evening. <br> <br>Cumprimentos informais (Informal greetings) <br>Hello <br>Hi. <br>How are you? / How you’re doing? <br> <br>Para dizer como você está <br>(I’m) fine. <br>Very well. <br>Not bad. <br>Pretty good. <br>So-so. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>créditos: Paint by Number <br>2020. <br> <br>OS PRIMEIROS <br>PASSOS... <br> <br>Como se apresentar <br>I’m Cindy. <br>My name’s Cindy. <br> Apresentar uma pessoa a outra <br>John, this is Paul. (informal) <br>Mr. Anderson, this is Ms. Brown. <br>(formal) <br> <br>Responder apresentações <br>Glad to meet you. <br>Nice to meet you. <br>Pleased to meet you. <br>How do you do? (formal). <br> <br>Despedidas (Farewells) <br>Bye-bye. <br>So long. <br>See you. <br>Good-bye <br>Good night <br>Pedir para soletrar o nome <br>How do you spell your name? <br>Spell your name, please."
    },
    "U1_L1": {
        "title": "Cumprimentos, Despedidas, Apresentações",
        "unit": "UNIDADE 1 — OS PRIMEIROS PASSOS",
        "sentences": [
            {
                "en": "Nice to meet you Susan.",
                "pt": "Prazer em conhecê-la, Susan.",
                "missing": "meet",
                "options": [
                    "meet",
                    "greeting",
                    "see"
                ]
            },
            {
                "en": "How do you spell your last name?",
                "pt": "Como você soletra seu sobrenome?",
                "missing": "spell",
                "options": [
                    "spell",
                    "write",
                    "speak"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Good morning",
                "definition": "Bom dia (usado até meio-dia)."
            },
            {
                "term": "How do you do?",
                "definition": "Como vai você? (cumprimento muito formal, responde-se com a mesma frase)."
            },
            {
                "term": "See you",
                "definition": "Até logo / Vejo você depois."
            }
        ],
        "quiz": {
            "question": "Qual das opções é um cumprimento formal ao se apresentar a alguém no mundo profissional?",
            "options": [
                "How do you do?",
                "See you later",
                "Hey, what's up?",
                "Bye-bye"
            ],
            "correctIndex": 0,
            "explanation": "'How do you do?' é a saudação formal clássica de apresentação em negócios."
        },
        "businessContext": {
            "scenario": "Apresentando um novo parceiro comercial ou cliente em uma reunião de diretoria.",
            "en": "Mr. Anderson, this is Richard Brown from Sales.",
            "pt": "Sr. Anderson, este é Richard Brown de Vendas.",
            "missing": "this",
            "options": [
                "this",
                "he",
                "who"
            ],
            "terms": [
                {
                    "term": "Introductions",
                    "definition": "O ato de apresentar pessoas no início de reuniões."
                },
                {
                    "term": "Pleased to meet you",
                    "definition": "Prazer em conhecê-lo (comum em recepção de clientes)."
                }
            ],
            "quiz": {
                "question": "Como você apresenta um cliente (Sr. Davis) ao seu diretor?",
                "options": [
                    "Davis, look at this guy.",
                    "This is Davis.",
                    "Hey, meet our director.",
                    "Mr. Davis, this is our director."
                ],
                "correctIndex": 3,
                "explanation": "A forma polida e correta de apresentar é: '[Nome], this is [Nome]'."
            }
        },
        "rawText": " 16 \n \n \n \n \n \n \nCumprimentos formais (Formal greetings)  \nGood morning. \nGood afternoon. \nGood evening. \n \nCumprimentos informais (Informal greetings) \nHello \nHi.  \nHow are you? / How you’re doing? \n \nPara dizer como você está \n(I’m) fine. \nVery well. \nNot bad. \nPretty good.  \nSo-so. \n \n \n \n \n \n \n \n \n \n \n \n \ncréditos: Paint by Number \n2020. \n \nOS PRIMEIROS \nPASSOS... \n \nComo se apresentar \nI’m Cindy. \nMy name’s Cindy. \n Apresentar uma pessoa a outra \nJohn, this is Paul. (informal) \nMr. Anderson, this is Ms. Brown. \n(formal) \n \nResponder apresentações \nGlad to meet you. \nNice to meet you. \nPleased to meet you. \nHow do you do? (formal). \n \nDespedidas (Farewells) \nBye-bye. \nSo long. \nSee you. \nGood-bye \nGood night \nPedir para soletrar o nome \nHow do you spell your name? \nSpell your name, please.  \n \nLIÇÃO 1: Cumprimentos. Despedidas. Apresentações. \n \n 17 \n \nSituação 1: Uma agente de viagens pergunta dados pessoais de uma cliente. \n \n- Your name, please? \n- Chelsea Tehrani \n- How do you spell your last name? \n- T – E – H – R – A – N – I \n \nSituação 2: Estudantes conversam no primeiro dia de aula: \n \n- What’s your name? \n- George. \n- Hi! I’m Susan. \n- Nice to meet you. \n- Glad to meet you. \n \nSituação 3: Dois executivos que não se conhecem ainda se encontram para uma reunião. \n \n- Good afternoon. Are you Mr. Anderson? \n- Yes. My name’s John Anderson. \n-  How do you do? I’m Richard Brown. \n \n \n \n \n2 – Escreva em inglês um diálogo sobre a seguinte situação: \n \nÉ seu primeiro dia de aula. Você cumprimenta o professor e se apresenta. O professor \nresponde e lhe convida a entrar e sentar. Você agradece. O professor responde. \n \n \n \n \n  \nEXERCÍCIO \nDIÁLOGO \n \n",
        "reconstructed_explanation": "LIÇÃO 1: Cumprimentos. Despedidas. Apresentações.",
        "reconstructed_dialogue": "Situação 1: Uma agente de viagens pergunta dados pessoais de uma cliente. <br> <br>- Your name, please? <br>- Chelsea Tehrani <br>- How do you spell your last name? <br>- T – E – H – R – A – N – I <br> <br>Situação 2: Estudantes conversam no primeiro dia de aula: <br> <br>- What’s your name? <br>- George. <br>- Hi! I’m Susan. <br>- Nice to meet you. <br>- Glad to meet you. <br> <br>Situação 3: Dois executivos que não se conhecem ainda se encontram para uma reunião. <br> <br>- Good afternoon. Are you Mr. Anderson? <br>- Yes. My name’s John Anderson. <br>- How do you do? I’m Richard Brown.",
        "reconstructed_exercises": "2 – Escreva em inglês um diálogo sobre a seguinte situação: <br> <br>É seu primeiro dia de aula. Você cumprimenta o professor e se apresenta. O professor <br>responde e lhe convida a entrar e sentar. Você agradece. O professor responde. <br> <br> <br> <br> <br> <br>EXERCÍCIO<br>Quando sabemos o sobrenome da pessoa, usamos: <br> <br>a) Para homens, solteiros ou casados: Mr. (Mister) = Senhor. <br>Exemplo: <br>Goog morning, Mr. Brown. <br> <br>b) Para mulheres casadas: Mrs. (Missis) = Senhora. <br>Exemplo: <br>Mrs. Robin is here. <br> <br>c) Para mulheres solteiras: Miss = Senhorita. <br>Exemplo: <br>May I help you, Miss Vargas? <br> <br>d) Para mulheres cujo estado civil desconhecemos: Ms. (pronuncia-se “miz” para <br>diferenciar de Miss. <br>Exemplo: <br>Can I talk to you, Ms. Perez? <br> <br>Quando não sabemos o sobrenome da pessoa utilizamos Sir para homens e Madam para <br>mulheres. <br>Exemplo: <br>Good evening, Sir / Madam. <br> <br> <br> <br>- Excuse me = Com licença (para chamar a atenção, pedir uma informação.) <br> <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U1_L2": {
        "title": "Pronomes de Tratamento, Frases Úteis, Pronomes Demonstrativos",
        "unit": "UNIDADE 1 — OS PRIMEIROS PASSOS",
        "sentences": [
            {
                "en": "Good morning Mr. Brown.",
                "pt": "Bom dia, Sr. Brown.",
                "missing": "Mr.",
                "options": [
                    "Mr.",
                    "Mrs.",
                    "Miss"
                ]
            },
            {
                "en": "This is my workspace.",
                "pt": "Este é meu espaço de trabalho.",
                "missing": "This",
                "options": [
                    "This",
                    "These",
                    "That"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Mr. (Mister)",
                "definition": "Senhor (usado para homens casados ou solteiros)."
            },
            {
                "term": "Mrs. (Missis)",
                "definition": "Senhora (usado para mulheres casadas)."
            },
            {
                "term": "Miss",
                "definition": "Senhorita (usado para mulheres solteiras)."
            }
        ],
        "quiz": {
            "question": "Qual pronome demonstrativo usamos para indicar um objeto que está distante (singular)?",
            "options": [
                "Those",
                "This",
                "That",
                "These"
            ],
            "correctIndex": 2,
            "explanation": "Usamos 'that' para coisas distantes no singular ('aquele/aquela')."
        },
        "businessContext": {
            "scenario": "Recepção de clientes e explicação do showroom comercial usando demonstrativos.",
            "en": "These are the product samples we discussed.",
            "pt": "Estas são as amostras de produtos que discutimos.",
            "missing": "These",
            "options": [
                "These",
                "This",
                "That"
            ],
            "terms": [
                {
                    "term": "Samples",
                    "definition": "Amostras de produtos comercializados pela empresa."
                },
                {
                    "term": "Ms.",
                    "definition": "Pronome de tratamento neutro para mulheres, independente do estado civil."
                }
            ],
            "quiz": {
                "question": "Como se refere a amostras que estão perto de você no plural?",
                "options": [
                    "This samples",
                    "That samples",
                    "Those samples",
                    "These samples"
                ],
                "correctIndex": 3,
                "explanation": "Para objetos próximos no plural usamos 'These'."
            }
        },
        "rawText": " 18 \n \n \n \n \n \n \n \nQuando sabemos o sobrenome da pessoa, usamos: \n \na) Para homens, solteiros ou casados: Mr. (Mister) = Senhor.  \nExemplo: \nGoog morning, Mr. Brown. \n \nb) Para mulheres casadas: Mrs. (Missis) = Senhora.  \nExemplo: \nMrs. Robin is here. \n \nc) Para mulheres solteiras: Miss = Senhorita.  \nExemplo: \nMay I help you, Miss Vargas?  \n \nd) Para mulheres cujo estado civil desconhecemos: Ms. (pronuncia-se “miz” para \ndiferenciar de Miss.  \nExemplo: \nCan I talk to you, Ms. Perez? \n \nQuando não sabemos o sobrenome da pessoa utilizamos Sir para homens e Madam para \nmulheres.  \nExemplo: \nGood evening, Sir / Madam.  \n \n \n \n- Excuse me = Com licença (para chamar a atenção, pedir uma informação.)  \n \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 2: Pronomes de Tratamento. Frases úteis. \nPronomes Demonstrativos. \n \n Pronomes de Tratamento Comuns (Common Personal \nTitles) \nFrases Úteis (Essencial Phrases) \n 19 \nExemplo: \nExcuse me, where is there a restaurant around here? = Com licença, onde há um \nrestaurante por aqui? \n \n Can I help you? = Posso ajuda-lo(a)? \n Sorry = Desculpe-me. \n Can you repeat, please? = Pode repetir, por favor? \n I can’t understand. = Não entendo. \n That’s all right = Tudo bem (para aceitar desculpas). \n Thank you / thanks = Obrigado(a). \n You’re welcome = De nada (para responder a agradecimentos).  \n Come in! = Entre. \n Sit down! = Sente-se. \n How much? = Quanto é? / Quanto custa? \n Ao telefone: This is Monika. I'd like to speak to ______  \nMr. Johnson isn’t here at the moment. \nWould you like to leave a message? \nWait a moment. I’ll pass you through. \n \n \n \n \n \nSituação: Um aluno chega atrasado no primeiro dia de aula e conversa com o professor \nao adentrar a sala:  \n \nStudent:  Good morning, teacher!  \nTeacher:  Good morning. \nStudent:  My name’s Jeff. \nTeacher:  Nice to meet you.  \nStudent:  Nice to meet you too.  \n  Sorry I’m late. \nTeacher:  No problem. Come in. \nStudent: Thank you. \nTeacher:  You’re welcome. \n \nDIÁLOGO \n \n 20 \nVocê aprendeu a apresentar pessoas com a seguinte frase: John, this is Paul. (informal). A \npalavra destacada é um Pronome Demonstrativo que, como o próprio nome sugere, serve \npara mostrar, ou demonstrar algo. Os Pronomes Demonstrativos variam segundo o \nnúmero (singular e plural) e em rel ação à distância a que o objeto demonstrado se \nencontra (perto, longe).  \n \nVamos aprendê-los? \n \nDemonstrative \nPronouns Singular Plural \n>Near (para perto) \n>Far (para longe) \nThis (este, esta, isto) \nThat (esse, essa, isso, aquele, \naquela, aquilo) \nThese (estes, estas) \nThose (esses, essas, \naqueles, aquelas) \n \nExemplos: \nThis is our English teacher, Ms. Roberts. (Esta é nossa professora de inglês, a \nsenhora/senhorita Roberts). \nThese are our new classmates. (Estes são nossos novos colegas de classe). \nThat is the principal of the school. (Aquela é a diretora da escola). \nThose are our books. (Aqueles são nossos livros). \n \nTambém é possível usar os Pronomes Demonstrativos para perguntar sobre coisas: \nExemplos: \nWhat’s this? (O que é isto?) – This is a pen. (É uma caneta). \n   What are those? (O que é aquilo?) – Those are toys. (São brinquedos). \n \n \n \n \n \n \n \n3 – Elabore perguntas e respostas sobre os objetos abaixo, usando os pronomes \ndemonstrativos this, these, that, those, orientando-se pela distância apontada pelas setas. \nBusque em um tradutor as palavras que você não conheça. \n \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 2: Pronomes de Tratamento. Frases úteis. <br>Pronomes Demonstrativos. <br> <br> Pronomes de Tratamento Comuns (Common Personal <br>Titles) <br>Frases Úteis (Essencial Phrases) <br>Exemplo: <br>Excuse me, where is there a restaurant around here? = Com licença, onde há um <br>restaurante por aqui? <br> <br> Can I help you? = Posso ajuda-lo(a)? <br> Sorry = Desculpe-me. <br> Can you repeat, please? = Pode repetir, por favor? <br> I can’t understand. = Não entendo. <br> That’s all right = Tudo bem (para aceitar desculpas). <br> Thank you / thanks = Obrigado(a). <br> You’re welcome = De nada (para responder a agradecimentos). <br> Come in! = Entre. <br> Sit down! = Sente-se. <br> How much? = Quanto é? / Quanto custa? <br> Ao telefone: This is Monika. I'd like to speak to ______ <br>Mr. Johnson isn’t here at the moment. <br>Would you like to leave a message? <br>Wait a moment. I’ll pass you through.",
        "reconstructed_dialogue": "Situação: Um aluno chega atrasado no primeiro dia de aula e conversa com o professor <br>ao adentrar a sala: <br> <br>Student: Good morning, teacher! <br>Teacher: Good morning. <br>Student: My name’s Jeff. <br>Teacher: Nice to meet you. <br>Student: Nice to meet you too. <br> Sorry I’m late. <br>Teacher: No problem. Come in. <br>Student: Thank you. <br>Teacher: You’re welcome. <br> <br>DIÁLOGO <br>Você aprendeu a apresentar pessoas com a seguinte frase: John, this is Paul. (informal). A <br>palavra destacada é um Pronome Demonstrativo que, como o próprio nome sugere, serve <br>para mostrar, ou demonstrar algo. Os Pronomes Demonstrativos variam segundo o <br>número (singular e plural) e em rel ação à distância a que o objeto demonstrado se <br>encontra (perto, longe). <br> <br>Vamos aprendê-los? <br> <br>Demonstrative <br>Pronouns Singular Plural <br>>Near (para perto) <br>>Far (para longe) <br>This (este, esta, isto) <br>That (esse, essa, isso, aquele, <br>aquela, aquilo) <br>These (estes, estas) <br>Those (esses, essas, <br>aqueles, aquelas) <br> <br>Exemplos: <br>This is our English teacher, Ms. Roberts. (Esta é nossa professora de inglês, a <br>senhora/senhorita Roberts). <br>These are our new classmates. (Estes são nossos novos colegas de classe). <br>That is the principal of the school. (Aquela é a diretora da escola). <br>Those are our books. (Aqueles são nossos livros). <br> <br>Também é possível usar os Pronomes Demonstrativos para perguntar sobre coisas: <br>Exemplos: <br>What’s this? (O que é isto?) – This is a pen. (É uma caneta). <br> What are those? (O que é aquilo?) – Those are toys. (São brinquedos).",
        "reconstructed_exercises": "3 – Elabore perguntas e respostas sobre os objetos abaixo, usando os pronomes <br>demonstrativos this, these, that, those, orientando-se pela distância apontada pelas setas. <br>Busque em um tradutor as palavras que você não conheça.<br>→ <br> <br> a) ? <br> <br>→ <br> <br> b) ? <br> <br>→ <br> <br> c) ? <br> <br>→ <br> <br> d) ? <br> <br> <br>4 – Imagine que você chega a uma loja e é atendido no balcão. Você quer saber o preço <br>de alguns objetos e pergunta à vendedora. As frases estão quase prontas, estão faltando <br>só os Pronomes Demonstrativos ( this, that, these, those). Complete as frases com el es. <br> <br>a) I like blouse here (aqui). Can I see it, please? <br>b) How much is hat over there? (lá) <br>c) How much are pants on the shelf? (na prateleira) <br>d) I like earrings here. Could I see them? <br> <br> <br> <br> <br>É importante que ao começar a aprender um idioma estrangeiro voc ê saiba dizer <br>informações básicas sobre você, tanto para situações mais formais, como o preenchimento <br>de formulários em viagens, quanto para iniciar um diálogo. <br> <br> Seu nome e sobrenome: My name’s Mary and my <br>surname is Cart. <br> Sua nacionalidade: I’m Brazilian. <br> Sua origem: I’m from Brazil. <br> Sua data de nascimento: I was born on December 6th, <br>2001 / in 1989. <br> Seu aniversário: My birthday is in September / on July <br>7th. <br> Sua idade: I’m 19 (years old). <br> <br>créditos: Paint by Number <br>2020."
    },
    "U1_L3": {
        "title": "Falando de Você",
        "unit": "UNIDADE 1 — OS PRIMEIROS PASSOS",
        "sentences": [
            {
                "en": "I live in a big house.",
                "pt": "Eu moro em uma casa grande.",
                "missing": "live",
                "options": [
                    "live",
                    "lives",
                    "living"
                ]
            },
            {
                "en": "I study English every day.",
                "pt": "Eu estudo inglês todos os dias.",
                "missing": "study",
                "options": [
                    "study",
                    "studies",
                    "studying"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Live",
                "definition": "Morar ou habitar em um local."
            },
            {
                "term": "Address",
                "definition": "Endereço residencial ou comercial."
            },
            {
                "term": "Phone number",
                "definition": "Número de telefone."
            }
        ],
        "quiz": {
            "question": "Como se diz 'Eu moro em São Paulo' em inglês?",
            "options": [
                "I live in São Paulo",
                "I live at São Paulo",
                "I living São Paulo",
                "I lives in São Paulo"
            ],
            "correctIndex": 0,
            "explanation": "Usamos a preposição 'in' para cidades: I live in São Paulo."
        },
        "businessContext": {
            "scenario": "Fazendo um pitch profissional rápido de vendas ou comercial em um evento corporativo.",
            "en": "I represent a large commercial group in Brazil.",
            "pt": "Eu represento um grande grupo comercial no Brasil.",
            "missing": "represent",
            "options": [
                "represent",
                "live",
                "study"
            ],
            "terms": [
                {
                    "term": "Pitch",
                    "definition": "Apresentação comercial extremamente rápida e persuasiva."
                },
                {
                    "term": "Commercial group",
                    "definition": "Grupo de empresas ou conglomerado comercial."
                }
            ],
            "quiz": {
                "question": "Qual a melhor frase para se apresentar profissionalmente em uma feira de negócios?",
                "options": [
                    "Nice to see you company.",
                    "I am a person.",
                    "I live in Brazil.",
                    "I represent company X."
                ],
                "correctIndex": 3,
                "explanation": "'I represent company X' estabelece autoridade e contexto de negócios de imediato."
            }
        },
        "rawText": " 21 \n→ \n \n a)  ? \n    \n→ \n \n b)  ? \n    \n→ \n \n c)  ? \n    \n→ \n \n d)  ? \n    \n \n4 – Imagine que você chega a uma loja e é atendido no balcão. Você quer saber o preço \nde alguns objetos e pergunta à vendedora. As frases estão quase prontas, estão faltando \nsó os Pronomes Demonstrativos ( this, that, these, those). Complete as frases com el es. \n \na) I like  blouse here (aqui). Can I see it, please? \nb) How much is  hat over there? (lá) \nc) How much are  pants on the shelf? (na prateleira) \nd) I like  earrings here. Could I see them? \n \n \n \n \nÉ importante que ao começar a aprender um idioma estrangeiro voc ê saiba dizer \ninformações básicas sobre você, tanto para situações mais formais, como o preenchimento \nde formulários em viagens, quanto para iniciar um diálogo. \n \n Seu nome e sobrenome: My name’s Mary and my \nsurname is Cart. \n Sua nacionalidade: I’m Brazilian. \n Sua origem: I’m from Brazil. \n Sua data de nascimento: I was born on December 6th, \n2001 / in 1989. \n Seu aniversário: My birthday is in September / on July \n7th. \n Sua idade: I’m 19 (years old). \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 3: Falando de Você. \n \n \n 22 \n O nome de seu pai/mãe: My father’s / mother’s name is ....  \n Sobre seus irmãos e irmãs: I have a brother / sister. I don’t have any siblings. / I’m \nan only child. \n Seu estado civil: I’m married / single / divorced \n Sua descrição física: I’m tall / short. I have black eyes. \n Seu número de telefone: My (cell) phone number is …. \n Seu endereço de e-mail: My email address is … \n Onde você estuda: I go to Ifes. \n Sua profissão: I’m a student.  \n Onde você trabalha: I work at a bank. I don’t work. \n Onde você mora: I live in Brazil / in Linhares / in Araçá. \n Endereço completo: I live in Linhares, in Araçá district, on Monsenhor Pedrinha \nStreet, at number 10. \n Suas habilidades (o que sabe fazer): I can* cook very well. \n \n \n \n \n  \nDICA \n \nQuando algumas pessoas conversam com alguém que acabaram de conhecer, \npodem conversar sobre esportes, habilidades etc. Assim, algumas pessoas fazem \nperguntas como: “Você sabe cantar / dançar / nadar / jogar vídeo game / jogar \nfutebol?” etc. Para fazer essas perguntas em inglês, você pode usar o verbo can no \ninício da frase: \nExemplos: \nCan you sing? (Você sabe cantar?) \nCan you dance? (Você sabe dançar?) \n \nPara negar, acrescenta-se NOT após o can na estrutura da frase afirmativa. \nI cannot (can’t) cook very well. \n 23 \n \n \nSituação: Sally conversa com um colega de um curso virtual que acaba de conhecer pela \nplataforma: \n \nSally:   Hi, I’m Sally. I’m from The United States. I’m 19 years old. \nEdd:   Hello, Sally, I’m Edd. I’m from England. I’m 18 years old. \nSally:   Nice to meet you. \nEdd:    Nice too meet you too. \nSally:   I go to a modern high school in Texas. \nEdd:    Nice! I go to a school in Manhattan. \n[…] \n \n \n \n \n \n \n5 – Escreva um diálogo, em inglês, no seu caderno, de acordo com as instruções abaixo:  \n \nSituação: Você chega à recepção da escola no seu primeiro dia. \n \nVocê:   Diga “bom dia” à pessoa que te recebe e pergunte: quem é você? \nSecretária:  Eu sou Maria. Eu sou secretária. \nVocê:   E eu sou estudante da turma A. Meu nome é Carlos. \nSecretária:  Olá, Carlos! Prazer em conhecê-lo. \n \n6 – Marque a resposta correta para cada pergunta:  \n \na) How is your mother? \n(    ) I’m fine, and you? \n(    ) She’s fine, thank you. \n(    ) She’s a teacher \nb) How old is your sister? \n(    ) She is fine \n(    ) She is sixteen. \n(    ) She is my sister \nc) Where are you from? \n(    ) I’m from Italy. \n(    ) You are from London. \n(    ) I am here. \n \n \n \nDIÁLOGO \n \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 3: Falando de Você. <br> O nome de seu pai/mãe: My father’s / mother’s name is .... <br> Sobre seus irmãos e irmãs: I have a brother / sister. I don’t have any siblings. / I’m <br>an only child. <br> Seu estado civil: I’m married / single / divorced <br> Sua descrição física: I’m tall / short. I have black eyes. <br> Seu número de telefone: My (cell) phone number is …. <br> Seu endereço de e-mail: My email address is … <br> Onde você estuda: I go to Ifes. <br> Sua profissão: I’m a student. <br> Onde você trabalha: I work at a bank. I don’t work. <br> Onde você mora: I live in Brazil / in Linhares / in Araçá. <br> Endereço completo: I live in Linhares, in Araçá district, on Monsenhor Pedrinha <br>Street, at number 10. <br> Suas habilidades (o que sabe fazer): I can* cook very well. <br> <br> <br> <br> <br> <br>DICA <br> <br>Quando algumas pessoas conversam com alguém que acabaram de conhecer, <br>podem conversar sobre esportes, habilidades etc. Assim, algumas pessoas fazem <br>perguntas como: “Você sabe cantar / dançar / nadar / jogar vídeo game / jogar <br>futebol?” etc. Para fazer essas perguntas em inglês, você pode usar o verbo can no <br>início da frase: <br>Exemplos: <br>Can you sing? (Você sabe cantar?) <br>Can you dance? (Você sabe dançar?) <br> <br>Para negar, acrescenta-se NOT após o can na estrutura da frase afirmativa. <br>I cannot (can’t) cook very well.",
        "reconstructed_dialogue": "Situação: Sally conversa com um colega de um curso virtual que acaba de conhecer pela <br>plataforma: <br> <br>Sally: Hi, I’m Sally. I’m from The United States. I’m 19 years old. <br>Edd: Hello, Sally, I’m Edd. I’m from England. I’m 18 years old. <br>Sally: Nice to meet you. <br>Edd: Nice too meet you too. <br>Sally: I go to a modern high school in Texas. <br>Edd: Nice! I go to a school in Manhattan. <br>[…]",
        "reconstructed_exercises": "5 – Escreva um diálogo, em inglês, no seu caderno, de acordo com as instruções abaixo: <br> <br>Situação: Você chega à recepção da escola no seu primeiro dia. <br> <br>Você: Diga “bom dia” à pessoa que te recebe e pergunte: quem é você? <br>Secretária: Eu sou Maria. Eu sou secretária. <br>Você: E eu sou estudante da turma A. Meu nome é Carlos. <br>Secretária: Olá, Carlos! Prazer em conhecê-lo. <br> <br>6 – Marque a resposta correta para cada pergunta: <br> <br>a) How is your mother? <br>( ) I’m fine, and you? <br>( ) She’s fine, thank you. <br>( ) She’s a teacher <br>b) How old is your sister? <br>( ) She is fine <br>( ) She is sixteen. <br>( ) She is my sister <br>c) Where are you from? <br>( ) I’m from Italy. <br>( ) You are from London. <br>( ) I am here. <br> <br> <br> <br>DIÁLOGO<br>7 – Complete esta conversa entre Jennifer, Xavier e Luigi. <br> <br>Jennifer: is Xavier. <br>Luigi: to meet you. <br>Xavier: to meet you <br>Luigi: are you from? <br>Xavier: from Spain. <br> <br>8 – Responda corretamente, em inglês, as perguntas abaixo: <br> <br>a) What’s the date today? <br>b) When is your birthday? (somente o mês) <br>c) When is your birthday? (dia e mês) <br> <br> <br> <br> <br> <br> <br> <br> <br>Italy – Italian <br>Great Britain – British <br>Germany – German <br>France – French <br>Spain – Spanish <br>Austria – Austrian <br>United States – American <br>India – Indian <br>The Netherlands – Dutch <br>Mexico – Mexican <br>Denmark – Danish <br>Portugal - Portuguese <br>Japan – Japanese <br>Brazil – Brazilian <br>Scotland – Scottish <br>England – English <br>Ireland – Irish <br> <br> <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U1_L4": {
        "title": "Países/Nacionalidades, Família, Profissões/Ocupações",
        "unit": "UNIDADE 1 — OS PRIMEIROS PASSOS",
        "sentences": [
            {
                "en": "I am from Brazil and I am Brazilian.",
                "pt": "Eu sou do Brasil e sou brasileiro.",
                "missing": "Brazilian",
                "options": [
                    "Brazilian",
                    "Brazil",
                    "Brazilese"
                ]
            },
            {
                "en": "My brother is an engineer.",
                "pt": "Meu irmão é um engenheiro.",
                "missing": "engineer",
                "options": [
                    "engineer",
                    "engineering",
                    "engineers"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Manager",
                "definition": "Gerente ou gestor de equipe."
            },
            {
                "term": "Lawyer",
                "definition": "Advogado ou profissional da área jurídica."
            },
            {
                "term": "Engineer",
                "definition": "Engenheiro."
            }
        ],
        "quiz": {
            "question": "Lembrando das regras de grafia, como são escritas as nacionalidades e países em inglês?",
            "options": [
                "Apenas no início de frases",
                "Sempre com letras minúsculas",
                "Depende do tamanho da palavra",
                "Sempre com a inicial maiúscula (ex: Brazilian)"
            ],
            "correctIndex": 3,
            "explanation": "Nacionalidades e países sempre levam letra inicial maiúscula: Brazilian, German, Brazil."
        },
        "businessContext": {
            "scenario": "Apresentando a equipe comercial internacional e a origem de cada gerente.",
            "en": "Our sales manager is from Germany.",
            "pt": "Nosso gerente de vendas é da Alemanha.",
            "missing": "manager",
            "options": [
                "manager",
                "family",
                "country"
            ],
            "terms": [
                {
                    "term": "Sales manager",
                    "definition": "Gerente responsável por planejar e coordenar as vendas da empresa."
                },
                {
                    "term": "International team",
                    "definition": "Equipe transfronteiriça com membros de múltiplos países."
                }
            ],
            "quiz": {
                "question": "Como você diria 'Nossa equipe é alemã' em inglês?",
                "options": [
                    "Our team is Germany.",
                    "Our team is from German.",
                    "Our team is Germanyan.",
                    "Our team is German."
                ],
                "correctIndex": 3,
                "explanation": "'German' é o adjetivo de nacionalidade. 'Germany' é o país."
            }
        },
        "rawText": " 24 \n7 – Complete esta conversa entre Jennifer, Xavier e Luigi.  \n \nJennifer:  is Xavier.  \nLuigi:  to meet you.  \nXavier:  to meet you  \nLuigi:  are you from?  \nXavier:  from Spain.  \n \n8 – Responda corretamente, em inglês, as perguntas abaixo:  \n \na) What’s the date today?  \nb) When is your birthday? (somente o mês)  \nc) When is your birthday? (dia e mês)  \n  \n \n \n \n \n \n \n \nItaly – Italian  \nGreat Britain – British \nGermany – German  \nFrance – French  \nSpain – Spanish   \nAustria – Austrian  \nUnited States – American  \nIndia – Indian  \nThe Netherlands – Dutch  \nMexico – Mexican  \nDenmark – Danish \nPortugal - Portuguese   \nJapan – Japanese \nBrazil – Brazilian  \nScotland – Scottish \nEngland – English \nIreland – Irish \n \n \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 4: Países e Nacionalidades. Membros da família. \nProfissões / Ocupações. \n \n \nPaíses (Countries) e Nacionalidades (Nationalities) \n \n 25 \n \n \n \n9 – Complete as informações sobre as pessoas abaixo, informando suas nacionalidades.  \n \na) Takuma is from Japan. He’s  \nb) Antonio Banderas is from Spain. He’s  \nc) Cristiano Ronaldo is from Portugal. He’s  \nd) Queen Elizabeth is from Great Britain. She’s  \n \n10 – Escreva, em inglês, o país correspondente às nacionalidades:   \n \na) The French live in  \nb) The Portuguese live in  \nc) The English live in  \nd) The Spanish live in  \ne) The Japanese live in  \nf) The Italians live in  \ng) The Irish live in  \n \n \n \n \nParents = pais Wife = esposa Stepfather = padrasto \nFather = pai Husband = esposo Stepmother = madrasta \nMother = mãe Fiancé = noivo Stepson = enteado \nSon = filho Fiancée = noiva Stepdaughter = enteada \nDaughter = filha Bride = noiva Foster parents = pais adotivos \nBrother = irmão Uncle = tio Foster father = pai adotivo \nSister = irmã Aunt = tia Foster mother = mãe adotiva \nSiblings = irmãos Nephew = sobrinho  \nHalfbrother = meio-irmão Niece = sobrinha  \nHalfsister = meia-irmã Cousin = primo / prima  \nOnly child = filho único   \n \nEXERCÍCIOS \nMembros da Família (Family Members) e Parentes (Relatives) \n 26 \nPara falar dos avós ou netos, basta acrescentar a partícula -grand nos parentescos que \ncorrespondam. \nExemplos:  \nGrandparents – avós Grandfather – avô Grandson – neto \n \nPara falar de bisavôs e bisnetos, acrescenta-se a palavra -great antes de -grand. \nExemplos: \nGreat grandfather – bisavô  Great granddaughter – bisneta \n \nPara falar de parentesco advindo de união conjugal, coloca -se o sufixo “in -law”, que, \nliteralmente, significa “por lei”. \nExemplos: \nFather-in-law – sogro  Mother-in-law – sogra \nBrother-in-law – cunhado  Sister-in-law – cunhada \n \n \n \n \nSituação: Emily e Chloe moram num apartamento que dividem para estudar. Chloe acha \numa foto de sua família em seus guardados e elas onversam. \n \nEmily:  Who is this woman? Is she your mother? \nChloe:  Yes, that’s right, and this man next to her is my father. \nEmily:  Nice. What do they do for a living? \nChloe:  My mother is an accountant and my father is a merchant. \nEmily:  Who are those guys? \nChloe:  The one on the left is my brother David and the one on the right is my \n                      cousin Brad. \nEmily:  Is your brother a student?  \nChloe:  No, now he works at a bank. \nEmily:  And how about these other people? \nChloe:  They are my uncles and my aunts. \nEmily:  Ah, and this lovely cat here? \nChloe:  His name’s Alf. He’s so cute! \n[...] \n  \nDIÁLOGO \n \n 27 \n \n \n \n \n11 – Complete as frases utilizando corretamente as palavras do quadro.  \n \n \n \n \n A maioria das profissões e ocupações tem a mesma forma para o masculino e feminino: \n \nEngineer = engenheiro \nDoctor = médico \nTeacher = professor \nNurse = enfermeiro \nBiologist = biólogo \nAccountant = contador \nEconomist = economista \nArchitect = arquiteto \nBaker = confeiteiro \nBricklayer = pedreiro \nMerchant = comerciante \nDriver = motorista \nButcher = açougueiro \nCarpenter = carpinteiro \nCook = cozinheiro \nCleaner = limpador/diarista \nDentist = dentista \nHousewife = dona de casa \nGarbage collector = gari \nElectrician = eletricista \nFarmer = fazendeiro \nGardener = jardineiro \nHairdresser = cabeleireiro \nJournalist = jornalista \nJudge = juiz \nLawyer = advogado \nLibrarian = bibliotecário \nMechanic = mecânico \n \nOutras profissões/ ocupações têm uma forma específica para o \nmasculino e feminino: \nActor = ator \nActress = atriz \n \na) His wife is my daughter. He’s my  \nb) Her husband is an  \nc) Who is Anna? She's my  \nd) What’s your  ’s profession? He’s a  \ne) How do you  your , please? \nsister – spell – \nengineer – name – \nfather – doctor – \nson-in-law \nEXERCÍCIO \nProfissões/Ocupações (Professions/Occupations) \n 28 \nAlgumas profissões fazem a distinção de gênero da seguinte forma: \n Masculino singular: man \n Masculino plural:   men \n Feminino singular: woman \n Feminino plural: women \n \nExemplos: \nBusinessman = empresário \nBusinesswoman = empresária \nSalesman = vendedor \nSaleswoman = vendedora \nPolicemen = policiais masculinos \nPolicewoman = policiais femininas \n \n \n \n \n \n \nSituação: Dois amigos conversam sobre suas profissões. \n \nRichard:  What is your occupation? \nSophie:  I’m a nurse. \nRichard:   How interesting! Here do you work?  \nSophie  I work at the municipal hospital. \nRichard:  Oh. That must be a hard work. You must have many people to \ntake care of. \nSophie:  Yes, that’s true, but I like it, and you, what do you do? \nRichard:   I’m a musician. \nSophie:   Really? How nice. Where do you perform? \nRichard:   At many places (restaurants, bars, festivals, parties…) \nSophie:   It must be great fun. \nRichard:   Yes, but sometimes It’s exhausting too. \nSophie:  I know… \n \n \n \n \n \nDIÁLOGO \n \n 29 \n \n \n12 – Relacione as profissões com as explicações do que as pessoas fazem. \n \na) Accountant (    ) Defende pessoas nos tribunais. \nb) Actress (    ) Faz projetos de casas e edifícios. \nc) Architect (    ) Passa conhecimentos a estudantes na escola. \nd) Dentist (    ) Trabalha com o dinheiro de uma empresa. \ne) Doctor (    ) Geralmente escreve cartas, relatórios em escritórios. \nf) Lawyer (    ) Trata problemas de saúde. \ng) Nurse (    ) Ajuda o médico a tratar pacientes doentes ou feridos. \nh) Secretary (    ) Resolve  problemas dentários. \ni) Teacher (    ) Atua em filmes ou peças de teatro. \n \n13 – Observe a descrição das atividades abaixo e, em seguida, assinale qual profissional as \nexecuta.  \n \n \na) Trabalha no departamento financeiro. Sua tarefa é conferir se os registros \nfinanceiros das empresas estão corretos. \n   (    ) Supervisor.  (    ) Engineer.   (    ) President.   (    ) Accountant. \n \n \nb) Ajuda o chefe a organizar sua agenda e suas tarefas, a preparar reuniões, \netc.   \n(    ) Sales \nAssistant.   \n(    ) Secretary.        (    ) Lawyer. (    ) Director. \n \n \nc) Ele é um dos donos ou acionista majoritário da empresa. Faz aplicações e \ninvestimentos e dirige a empresa. \n(    ) President. (    ) Engineer.   (    ) Marketing \nDirector. \n(    ) Lawyer. \n \n \nd) Ele trabalha no departamento jurídico. Seu trabalho é saber lidar com as \nleis que podem afetar a empresa. \n(    ) Accountant.   (    )  Manager. (    ) Director.   (    ) Lawyer. \n \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 4: Países e Nacionalidades. Membros da família. <br>Profissões / Ocupações. <br> <br> <br>Países (Countries) e Nacionalidades (Nationalities)",
        "reconstructed_dialogue": "Situação: Emily e Chloe moram num apartamento que dividem para estudar. Chloe acha <br>uma foto de sua família em seus guardados e elas onversam. <br> <br>Emily: Who is this woman? Is she your mother? <br>Chloe: Yes, that’s right, and this man next to her is my father. <br>Emily: Nice. What do they do for a living? <br>Chloe: My mother is an accountant and my father is a merchant. <br>Emily: Who are those guys? <br>Chloe: The one on the left is my brother David and the one on the right is my <br> cousin Brad. <br>Emily: Is your brother a student? <br>Chloe: No, now he works at a bank. <br>Emily: And how about these other people? <br>Chloe: They are my uncles and my aunts. <br>Emily: Ah, and this lovely cat here? <br>Chloe: His name’s Alf. He’s so cute! <br>[...] <br> <br>DIÁLOGO <br>11 – Complete as frases utilizando corretamente as palavras do quadro. <br> <br> <br> <br> <br> A maioria das profissões e ocupações tem a mesma forma para o masculino e feminino: <br> <br>Engineer = engenheiro <br>Doctor = médico <br>Teacher = professor <br>Nurse = enfermeiro <br>Biologist = biólogo <br>Accountant = contador <br>Economist = economista <br>Architect = arquiteto <br>Baker = confeiteiro <br>Bricklayer = pedreiro <br>Merchant = comerciante <br>Driver = motorista <br>Butcher = açougueiro <br>Carpenter = carpinteiro <br>Cook = cozinheiro <br>Cleaner = limpador/diarista <br>Dentist = dentista <br>Housewife = dona de casa <br>Garbage collector = gari <br>Electrician = eletricista <br>Farmer = fazendeiro <br>Gardener = jardineiro <br>Hairdresser = cabeleireiro <br>Journalist = jornalista <br>Judge = juiz <br>Lawyer = advogado <br>Librarian = bibliotecário <br>Mechanic = mecânico <br> <br>Outras profissões/ ocupações têm uma forma específica para o <br>masculino e feminino: <br>Actor = ator <br>Actress = atriz <br> <br>a) His wife is my daughter. He’s my <br>b) Her husband is an <br>c) Who is Anna? She's my <br>d) What’s your ’s profession? He’s a <br>e) How do you your , please? <br>sister – spell – <br>engineer – name – <br>father – doctor – <br>son-in-law <br>EXERCÍCIO <br>Profissões/Ocupações (Professions/Occupations) <br>Algumas profissões fazem a distinção de gênero da seguinte forma: <br> Masculino singular: man <br> Masculino plural: men <br> Feminino singular: woman <br> Feminino plural: women <br> <br>Exemplos: <br>Businessman = empresário <br>Businesswoman = empresária <br>Salesman = vendedor <br>Saleswoman = vendedora <br>Policemen = policiais masculinos <br>Policewoman = policiais femininas <br> <br> <br> <br> <br> <br> <br>Situação: Dois amigos conversam sobre suas profissões. <br> <br>Richard: What is your occupation? <br>Sophie: I’m a nurse. <br>Richard: How interesting! Here do you work? <br>Sophie I work at the municipal hospital. <br>Richard: Oh. That must be a hard work. You must have many people to <br>take care of. <br>Sophie: Yes, that’s true, but I like it, and you, what do you do? <br>Richard: I’m a musician. <br>Sophie: Really? How nice. Where do you perform? <br>Richard: At many places (restaurants, bars, festivals, parties…) <br>Sophie: It must be great fun. <br>Richard: Yes, but sometimes It’s exhausting too. <br>Sophie: I know… <br> <br> <br> <br> <br> <br>DIÁLOGO <br>12 – Relacione as profissões com as explicações do que as pessoas fazem. <br> <br>a) Accountant ( ) Defende pessoas nos tribunais. <br>b) Actress ( ) Faz projetos de casas e edifícios. <br>c) Architect ( ) Passa conhecimentos a estudantes na escola. <br>d) Dentist ( ) Trabalha com o dinheiro de uma empresa. <br>e) Doctor ( ) Geralmente escreve cartas, relatórios em escritórios. <br>f) Lawyer ( ) Trata problemas de saúde. <br>g) Nurse ( ) Ajuda o médico a tratar pacientes doentes ou feridos. <br>h) Secretary ( ) Resolve problemas dentários. <br>i) Teacher ( ) Atua em filmes ou peças de teatro. <br> <br>13 – Observe a descrição das atividades abaixo e, em seguida, assinale qual profissional as <br>executa. <br> <br> <br>a) Trabalha no departamento financeiro. Sua tarefa é conferir se os registros <br>financeiros das empresas estão corretos. <br> ( ) Supervisor. ( ) Engineer. ( ) President. ( ) Accountant. <br> <br> <br>b) Ajuda o chefe a organizar sua agenda e suas tarefas, a preparar reuniões, <br>etc. <br>( ) Sales <br>Assistant. <br>( ) Secretary. ( ) Lawyer. ( ) Director. <br> <br> <br>c) Ele é um dos donos ou acionista majoritário da empresa. Faz aplicações e <br>investimentos e dirige a empresa. <br>( ) President. ( ) Engineer. ( ) Marketing <br>Director. <br>( ) Lawyer. <br> <br> <br>d) Ele trabalha no departamento jurídico. Seu trabalho é saber lidar com as <br>leis que podem afetar a empresa. <br>( ) Accountant. ( ) Manager. ( ) Director. ( ) Lawyer.",
        "reconstructed_exercises": "9 – Complete as informações sobre as pessoas abaixo, informando suas nacionalidades. <br> <br>a) Takuma is from Japan. He’s <br>b) Antonio Banderas is from Spain. He’s <br>c) Cristiano Ronaldo is from Portugal. He’s <br>d) Queen Elizabeth is from Great Britain. She’s <br> <br>10 – Escreva, em inglês, o país correspondente às nacionalidades: <br> <br>a) The French live in <br>b) The Portuguese live in <br>c) The English live in <br>d) The Spanish live in <br>e) The Japanese live in <br>f) The Italians live in <br>g) The Irish live in <br> <br> <br> <br> <br>Parents = pais Wife = esposa Stepfather = padrasto <br>Father = pai Husband = esposo Stepmother = madrasta <br>Mother = mãe Fiancé = noivo Stepson = enteado <br>Son = filho Fiancée = noiva Stepdaughter = enteada <br>Daughter = filha Bride = noiva Foster parents = pais adotivos <br>Brother = irmão Uncle = tio Foster father = pai adotivo <br>Sister = irmã Aunt = tia Foster mother = mãe adotiva <br>Siblings = irmãos Nephew = sobrinho <br>Halfbrother = meio-irmão Niece = sobrinha <br>Halfsister = meia-irmã Cousin = primo / prima <br>Only child = filho único <br> <br>EXERCÍCIOS <br>Membros da Família (Family Members) e Parentes (Relatives) <br>Para falar dos avós ou netos, basta acrescentar a partícula -grand nos parentescos que <br>correspondam. <br>Exemplos: <br>Grandparents – avós Grandfather – avô Grandson – neto <br> <br>Para falar de bisavôs e bisnetos, acrescenta-se a palavra -great antes de -grand. <br>Exemplos: <br>Great grandfather – bisavô Great granddaughter – bisneta <br> <br>Para falar de parentesco advindo de união conjugal, coloca -se o sufixo “in -law”, que, <br>literalmente, significa “por lei”. <br>Exemplos: <br>Father-in-law – sogro Mother-in-law – sogra <br>Brother-in-law – cunhado Sister-in-law – cunhada<br>14 – Algumas pessoas se encontram em um seminário de negócios e, no intervalo, <br>conversam para se conhecerem melhor. Leia o diálogo entre eles e passe-o para o inglês: <br> <br>Kate: Olá! Me chamo Kate. <br>Isabel: Olá Kate, me chamo Isabel. Eu sou secretária. <br> E você? Qual a sua profissão? <br> Kate: Eu sou jornalista. <br>Isabel: Eu sou francesa. Você é alemã? <br>Kate: Não, sou espanhola. <br> Rodolfo, o que você faz? <br>Rod: Eu sou economista. <br> Manuel, você é engenheiro? <br>Manuel: Não, sou advogado. <br>Kate: Bem, até logo, tenho que ir: <br>Todos: Até logo: <br> <br> <br> <br> <br> <br> <br> <br> <br>Muitas vezes, quando conhecemos alguém nas redes sociais <br>sem mostrar nossa imagem, é comum as pessoas perguntarem: <br>“como você é?”, ou quando você fala de outra pessoa, em geral, <br>se pergunta: “como ele(a) é?”. Por isso, aprenda a falar de sua <br>descrição física: <br> <br>a) Usa-se o verbo To Be para falar sobre seu peso e altura. <br>Exemplo: <br>I am slim and tall. (Sou magro e alto) <br>b) Usa-se o verbo To Have para falar dos olhos e do cabelo: <br>Exemplo: <br>I have blue eyes and brown hair. (Tenho os olhos azuis e cabelo castanho) <br>créditos: Paint by Number <br>2020."
    },
    "U1_L5": {
        "title": "Como você é? – Descrição física e de personalidade",
        "unit": "UNIDADE 1 — OS PRIMEIROS PASSOS",
        "sentences": [
            {
                "en": "I am tall and very optimistic.",
                "pt": "Eu sou alto e muito otimista.",
                "missing": "tall",
                "options": [
                    "tall",
                    "short",
                    "fat"
                ]
            },
            {
                "en": "She is an intelligent manager.",
                "pt": "Ela é uma gerente inteligente.",
                "missing": "intelligent",
                "options": [
                    "intelligent",
                    "intelligents",
                    "intelligence"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Optimistic",
                "definition": "Otimista, que enxerga o lado positivo."
            },
            {
                "term": "Tall / Short",
                "definition": "Alto / Baixo (altura física)."
            },
            {
                "term": "Ambitious",
                "definition": "Ambicioso, focado em crescer."
            }
        ],
        "quiz": {
            "question": "Qual o verbo 'To Be' correto para a frase: 'She _____ very professional'?",
            "options": [
                "are",
                "am",
                "is",
                "be"
            ],
            "correctIndex": 2,
            "explanation": "Para He, She, It, a conjugação do verbo To Be no presente é 'is'."
        },
        "businessContext": {
            "scenario": "Descrevendo o perfil profissional de um cliente exigente durante um alinhamento comercial.",
            "en": "The client is demanding but very polite.",
            "pt": "O cliente é exigente, mas muito educado.",
            "missing": "demanding",
            "options": [
                "demanding",
                "lazy",
                "tall"
            ],
            "terms": [
                {
                    "term": "Demanding",
                    "definition": "Exigente, que demanda altos padrões de qualidade."
                },
                {
                    "term": "Polite",
                    "definition": "Educado, refinado no trato corporativo."
                }
            ],
            "quiz": {
                "question": "Qual a melhor maneira de descrever um cliente que quer tudo perfeito mas é educado?",
                "options": [
                    "Unprofessional and short",
                    "Demanding but polite",
                    "Aggressive but polite",
                    "Lazy and short"
                ],
                "correctIndex": 1,
                "explanation": "'Demanding but polite' descreve perfeitamente um perfil de negócios exigente e profissional."
            }
        },
        "rawText": " 30 \n14 – Algumas pessoas se encontram em um seminário de negócios e, no intervalo, \nconversam para se conhecerem melhor. Leia o diálogo entre eles e passe-o para o inglês:  \n \nKate: Olá! Me chamo Kate.   \nIsabel: Olá Kate, me chamo Isabel. Eu sou secretária.  \n E você? Qual a sua profissão?  \n Kate: Eu sou jornalista.  \nIsabel: Eu sou francesa. Você é alemã?  \nKate: Não, sou espanhola.  \n Rodolfo, o que você faz?  \nRod: Eu sou economista.  \n Manuel, você é engenheiro?  \nManuel: Não, sou advogado.  \nKate:   Bem, até logo, tenho que ir:  \nTodos: Até logo:  \n \n \n \n \n \n \n \n \nMuitas vezes, quando conhecemos alguém nas redes sociais \nsem mostrar nossa imagem, é comum as pessoas perguntarem: \n“como você é?”, ou quando você fala de outra pessoa, em geral, \nse pergunta: “como ele(a) é?”. Por isso, aprenda a falar de sua \ndescrição física: \n \na) Usa-se o verbo To Be para falar sobre seu peso e altura. \nExemplo: \nI am slim and tall. (Sou magro e alto) \nb) Usa-se o verbo To Have para falar dos olhos e do cabelo: \nExemplo: \nI have blue eyes and brown hair. (Tenho os olhos azuis e cabelo castanho) \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 5: Como você é? – Descrição física e de personalidade. \nPronomes Pessoais ( sujeito). Verbo To Be (forma \nafirmativa).  \n \n \n \n 31 \nA descrição de nossa personalidade ou de nosso comportamento é feita com o verbo To \nBe: \nExemplos: \nI am friendly and talkative. (Sou amigável e falante) \nShe is very quiet. (Ela é muito tímida) \nThey are creative. (Eles são muito criativos) \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nVOCABULÁRIO \n \nWeight (Peso): fat (gordo), thin (magro), skinny (bem magro), \nslim ou slender (magro/a de forma saudável), overweight (acima do peso). \n \nHeigh (Altura): tall (alto), short (baixo), middle height (estatura média). \n \nEyes (Olhos) : green  (verdes), black (pretos), blue  (azuis), hazel  (cor de mel), \nbrown (castanhos).  \n \nHair (Cabelo) : short  (curto), long (longo), shoulder-length (na altura do ombro) \nwavy (ondulado), curly (cacheado), straight (liso), blond  (loiro), brown  (castanho), \nred (ruivo), black (preto), gray (grisalho), bald (careca). \n \nOutros: moustache / mustache (bigode), beard (barba), glasses (óculos). \n \nQuando os verbos estão no \ninfinito (sem conjugação), \nvêm acompanhados da \npartícula to.  \n \nExemplos: \nTo Be = ser / estar \nTo work = trabalhar \nTo stydy = estudar \nOBSERVAÇÃO \n \nVOCABULÁRIO \n \ninteresting = interessante  \nintelligent = inteligente \nsad = triste \neasy-going = fácil de lidar, tranquilo/a  \nnoisy = barulhento/a)  \nindependent = independente \nhappy = feliz  \n \n 32 \nPara perguntar sobre a descrição física Para perguntar sobre a personalidade \n/comportamento \nWhat do you look like? = Como você é \nfisicamente? What are you like? = Como você é? \nWhat does she look like? = Como ela é \nfisicamente? \nWhat is he like? = Como ele é? \n \n \n \n \n \n \nSituação: Uma nova estudante começou os estudos em uma turma hoje e uma colega \nque ainda não a conheceu quer cumprimentá-la. Para facilitar a identificação dela, a colega \nconversa com a professora: \n \nIsabella:  Hi, teacher! Is there a new student in our class? \nTeacher:  Yes, her name’s Lara. \nIsabella:   Where is she from? \nTeacher:  She’s from England. \nIsabella:  What does she look like? \nTeacher:  She’s brunette, tall, she has curly hair and brown eyes. \nIsabella:  Is she nice? \nTeacher:  Yes, and she’s very intelligent, easy-going and friendly. \n \n \n \n \n \n \n15 – Uma assistente de diretoria de uma empresa vai buscar um novo cliente estrangeiro \nno aeroporto. Eles não se conhecem, então, ela pergunta a um colega as características \nfísicas dele. Leia o diálogo abaixo sobre esse assunto e depois marque o tipo físico qu e \ncorresponde ao descrito no diálogo.  \n \n \nDIÁLOGO \n \nEXERCÍCIOS \n 33 \nHelen:  What does Michael look like? \nTim:   Well, he's medium height, dark, \nhas a beard and a mustache.  \nHelen:  Is he handsome?  \nTim:   Of course he is!  \nHelen:  And what's he like?  \nTim:   He's organized and efficient.  \nHelen:  Oh look! Is that him?  \n \n \n \n16 – Assinale a palavra que melhor caracteriza um traço físico dos personagens:  \n \n    \na) (    ) brunette a) (    )  bald a) (    ) moustache        a) (    ) fat \nb) (    ) blonde                b) (    )  moustache       b) (    ) bald b) (    ) thin \nc) (    ) gray-haired      c) (    )  beard   c) (    ) slim c) (    ) tall \n \nVocê já sabe  que para fazer descrições , tanto físicas quanto de personalidade ou de \ncomportamento, usamos as  formas do verbo To Be.  Ele é muito importante, pois está \npresente em muitas falas e ações. Vamos revisá -lo? Mas, antes, passaremos pelos \nPronomes Pessoais. Vejamos: \n \nPersonal Pronouns – Subject (Pronomes Pessoais – Sujeito) \n \n \n \n \n \n \n \n \n \n  \n \na) \n(    )  \nb) \n(    ) \n \nc) \n(    ) \n \nc) \n(    ) \n \nI Eu \nYou Tu, você \nHe Ele \nShe Ela \nIt Ele/ela (coisas e animais) \nWe Nós \nYou Vós, vocês \nThey Eles/elas (plural de he, she, it) \n \n 34 \n \n \n \n \n17 – Substitua os nomes por Pronomes Pessoais (Sujeito):  \n \na) John likes music.  likes music. \nb) The school is modern.  is modern. \nc) Apples and oranges are expensive.   are expensive. \nd) Mary is a dentist.  is a dentist. \n \n18 – Complete as frases abaixo com os P ronomes Pessoais (Sujeito) correspondentes às \npalavras entre parênteses:  \n \na)  is pretty. (Mary) \nb)  are good. (books) \nc)  are students. (Peter and Paul) \nd)  go to school. (Mary and I) \ne)  is black. (cat) \nf)  are young. (Mary and you). \n \n \n \n \nVerbo Ser / Estar no Presente do Indicativo (forma afirmativa). \n \nA forma afirmativa do verbo To Be é feita nesta sequência: \nSujeito + forma do verbo (+ complemento). \n \nExemplos:  \nI am proud of you = Estou orgulhoso(a) de você. \nMs. Robinson is over there! = A senhora Robinson está lá.  \nWe are happy = Estamos felizes. \nThey are my parents = Eles são meus pais. \n \nEXERCÍCIOS \nTo Be verb (Present – affirmative form) \n \n 35 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n19 – Complete as frases abaixo para o verbo To Be no presente (forma afirmativa).  \n \na) You  doctors. \nb) Peter  a reporter. \nc) Fred and Jim  talk show hosts. \nd) I  a good secretary. \n \n20 – Escreva algumas informações sobre você usando o verbo To Be no presente. Diga: \n \nSeu nome; sua profissão;  suas características físicas e de personalidade ; o nome do seu \npai, de sua mãe e irmãos  e a profissão deles ; seu estado civil; quando é seu aniversário; \nsua idade.  \n \n \n \n \n \n  \nRESUMINDO \n \nI am (I’m) - Eu sou/estou \nYou are (You’re) - Tu és/estás, você é/está \nHe is (He’s) - Ele é/está \nShe is (She’s) - Ela é/está \nIt is (It’s) - Ele/ela (coisas e animais) é/está \nWe are (We’re) - Nós somos/estamos \nYou are (You’re) - Vós sois/estais, vocês são/estão \nThey are (They’re) – Eles/elas são/estão \n \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 5: Como você é? – Descrição física e de personalidade. <br>Pronomes Pessoais ( sujeito). Verbo To Be (forma <br>afirmativa). <br>A descrição de nossa personalidade ou de nosso comportamento é feita com o verbo To <br>Be: <br>Exemplos: <br>I am friendly and talkative. (Sou amigável e falante) <br>She is very quiet. (Ela é muito tímida) <br>They are creative. (Eles são muito criativos) <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>VOCABULÁRIO <br> <br>Weight (Peso): fat (gordo), thin (magro), skinny (bem magro), <br>slim ou slender (magro/a de forma saudável), overweight (acima do peso). <br> <br>Heigh (Altura): tall (alto), short (baixo), middle height (estatura média). <br> <br>Eyes (Olhos) : green (verdes), black (pretos), blue (azuis), hazel (cor de mel), <br>brown (castanhos). <br> <br>Hair (Cabelo) : short (curto), long (longo), shoulder-length (na altura do ombro) <br>wavy (ondulado), curly (cacheado), straight (liso), blond (loiro), brown (castanho), <br>red (ruivo), black (preto), gray (grisalho), bald (careca). <br> <br>Outros: moustache / mustache (bigode), beard (barba), glasses (óculos). <br> <br>Quando os verbos estão no <br>infinito (sem conjugação), <br>vêm acompanhados da <br>partícula to. <br> <br>Exemplos: <br>To Be = ser / estar <br>To work = trabalhar <br>To stydy = estudar <br>OBSERVAÇÃO <br> <br>VOCABULÁRIO <br> <br>interesting = interessante <br>intelligent = inteligente <br>sad = triste <br>easy-going = fácil de lidar, tranquilo/a <br>noisy = barulhento/a) <br>independent = independente <br>happy = feliz <br>Para perguntar sobre a descrição física Para perguntar sobre a personalidade <br>/comportamento <br>What do you look like? = Como você é <br>fisicamente? What are you like? = Como você é? <br>What does she look like? = Como ela é <br>fisicamente? <br>What is he like? = Como ele é?",
        "reconstructed_dialogue": "Situação: Uma nova estudante começou os estudos em uma turma hoje e uma colega <br>que ainda não a conheceu quer cumprimentá-la. Para facilitar a identificação dela, a colega <br>conversa com a professora: <br> <br>Isabella: Hi, teacher! Is there a new student in our class? <br>Teacher: Yes, her name’s Lara. <br>Isabella: Where is she from? <br>Teacher: She’s from England. <br>Isabella: What does she look like? <br>Teacher: She’s brunette, tall, she has curly hair and brown eyes. <br>Isabella: Is she nice? <br>Teacher: Yes, and she’s very intelligent, easy-going and friendly.",
        "reconstructed_exercises": "15 – Uma assistente de diretoria de uma empresa vai buscar um novo cliente estrangeiro <br>no aeroporto. Eles não se conhecem, então, ela pergunta a um colega as características <br>físicas dele. Leia o diálogo abaixo sobre esse assunto e depois marque o tipo físico qu e <br>corresponde ao descrito no diálogo. <br> <br> <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>Helen: What does Michael look like? <br>Tim: Well, he's medium height, dark, <br>has a beard and a mustache. <br>Helen: Is he handsome? <br>Tim: Of course he is! <br>Helen: And what's he like? <br>Tim: He's organized and efficient. <br>Helen: Oh look! Is that him? <br> <br> <br> <br>16 – Assinale a palavra que melhor caracteriza um traço físico dos personagens: <br> <br> <br>a) ( ) brunette a) ( ) bald a) ( ) moustache a) ( ) fat <br>b) ( ) blonde b) ( ) moustache b) ( ) bald b) ( ) thin <br>c) ( ) gray-haired c) ( ) beard c) ( ) slim c) ( ) tall <br> <br>Você já sabe que para fazer descrições , tanto físicas quanto de personalidade ou de <br>comportamento, usamos as formas do verbo To Be. Ele é muito importante, pois está <br>presente em muitas falas e ações. Vamos revisá -lo? Mas, antes, passaremos pelos <br>Pronomes Pessoais. Vejamos: <br> <br>Personal Pronouns – Subject (Pronomes Pessoais – Sujeito) <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>a) <br>( ) <br>b) <br>( ) <br> <br>c) <br>( ) <br> <br>c) <br>( ) <br> <br>I Eu <br>You Tu, você <br>He Ele <br>She Ela <br>It Ele/ela (coisas e animais) <br>We Nós <br>You Vós, vocês <br>They Eles/elas (plural de he, she, it) <br>17 – Substitua os nomes por Pronomes Pessoais (Sujeito): <br> <br>a) John likes music. likes music. <br>b) The school is modern. is modern. <br>c) Apples and oranges are expensive. are expensive. <br>d) Mary is a dentist. is a dentist. <br> <br>18 – Complete as frases abaixo com os P ronomes Pessoais (Sujeito) correspondentes às <br>palavras entre parênteses: <br> <br>a) is pretty. (Mary) <br>b) are good. (books) <br>c) are students. (Peter and Paul) <br>d) go to school. (Mary and I) <br>e) is black. (cat) <br>f) are young. (Mary and you). <br> <br> <br> <br> <br>Verbo Ser / Estar no Presente do Indicativo (forma afirmativa). <br> <br>A forma afirmativa do verbo To Be é feita nesta sequência: <br>Sujeito + forma do verbo (+ complemento). <br> <br>Exemplos: <br>I am proud of you = Estou orgulhoso(a) de você. <br>Ms. Robinson is over there! = A senhora Robinson está lá. <br>We are happy = Estamos felizes. <br>They are my parents = Eles são meus pais. <br> <br>EXERCÍCIOS <br>To Be verb (Present – affirmative form) <br>19 – Complete as frases abaixo para o verbo To Be no presente (forma afirmativa). <br> <br>a) You doctors. <br>b) Peter a reporter. <br>c) Fred and Jim talk show hosts. <br>d) I a good secretary. <br> <br>20 – Escreva algumas informações sobre você usando o verbo To Be no presente. Diga: <br> <br>Seu nome; sua profissão; suas características físicas e de personalidade ; o nome do seu <br>pai, de sua mãe e irmãos e a profissão deles ; seu estado civil; quando é seu aniversário; <br>sua idade. <br> <br> <br> <br> <br> <br> <br>RESUMINDO <br> <br>I am (I’m) - Eu sou/estou <br>You are (You’re) - Tu és/estás, você é/está <br>He is (He’s) - Ele é/está <br>She is (She’s) - Ela é/está <br>It is (It’s) - Ele/ela (coisas e animais) é/está <br>We are (We’re) - Nós somos/estamos <br>You are (You’re) - Vós sois/estais, vocês são/estão <br>They are (They’re) – Eles/elas são/estão<br> What is your (last / first) name? = qual é seu nome / <br>sobrenome? <br> How old are you? = qual a sua idade? <br> When is your birthday? = quando é seu aniversário? <br> What is your (cell) phone number? = qual seu número <br>de telefone/celular? <br> What is your email address? = qual seu endereço de <br>e-mail? <br> What nationality are you? What is your nationality? = <br>qual a sua nacionalidade? <br> Where are you from? = de onde você é? <br> What is your father’s / mother’s name? qual o nome de seu pai/mãe? <br> What is your address? = qual seu endereço? <br> What is your favorite color? = qual sua cor preferida? * <br> <br> <br> <br>FAZENDO PERGUNTAS <br>PESSOAIS <br>VOCABULÁRIO <br> <br>* Cores (Colors) <br>Blue = azul <br>Green = verde <br>Red = vermelho <br>Orange = laranja <br>Yellow = amarelo <br>Brown = marrom <br>Silver = prateado <br>Golden = dourado <br>Pink = rosa <br>Black = preto <br>White = branco <br>Gray or Grey = cinza <br>Purple = roxo <br>créditos: Paint by Number <br>2020."
    },
    "U2_L1": {
        "title": "Perguntas com To Be (forma interrogativa)",
        "unit": "UNIDADE 2 — FAZENDO PERGUNTAS PESSOAIS",
        "sentences": [
            {
                "en": "Are you a sales director?",
                "pt": "Você é diretor de vendas?",
                "missing": "Are",
                "options": [
                    "Are",
                    "Is",
                    "Am"
                ]
            },
            {
                "en": "Is she in the office today?",
                "pt": "Ela está no escritório hoje?",
                "missing": "Is",
                "options": [
                    "Is",
                    "Are",
                    "Am"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Are you...?",
                "definition": "Você é...? / Você está...? (inversão da pergunta)."
            },
            {
                "term": "Office",
                "definition": "Escritório físico de trabalho."
            },
            {
                "term": "Director",
                "definition": "Diretor corporativo."
            }
        ],
        "quiz": {
            "question": "Qual a inversão correta para transformar a frase 'You are French' em pergunta?",
            "options": [
                "Do you are French?",
                "You are French?",
                "Is you French?",
                "Are you French?"
            ],
            "correctIndex": 3,
            "explanation": "Na forma interrogativa do verbo To Be, o verbo vem antes do sujeito: 'Are you French?'."
        },
        "businessContext": {
            "scenario": "Entrevista de vendas ou reunião de qualificação com cliente em potencial.",
            "en": "Are you the decision maker for this project?",
            "pt": "Você é o tomador de decisão deste projeto?",
            "missing": "maker",
            "options": [
                "maker",
                "taker",
                "worker"
            ],
            "terms": [
                {
                    "term": "Decision maker",
                    "definition": "A pessoa que tem a autoridade para aprovar a compra ou contratação."
                },
                {
                    "term": "Qualification",
                    "definition": "Processo de verificar se o cliente em potencial tem perfil de compra."
                }
            ],
            "quiz": {
                "question": "Como você pergunta formalmente se a pessoa é responsável pela decisão final?",
                "options": [
                    "Are you the buyer worker?",
                    "Is you the boss?",
                    "Do you buy?",
                    "Are you the decision maker?"
                ],
                "correctIndex": 3,
                "explanation": "'Are you the decision maker?' é a forma padrão de qualificar o lead na área comercial."
            }
        },
        "rawText": " 36 \n \n \n \n \n \n \n \n \n \n \n What is your (last / first) name? = qual é seu nome / \nsobrenome? \n How old are you? = qual a sua idade? \n When is your birthday? = quando é seu aniversário? \n What is your (cell) phone number? = qual seu número \nde telefone/celular? \n What is your email address? = qual seu endereço de     \ne-mail? \n What nationality are you? What is your nationality? = \nqual a sua nacionalidade?  \n Where are you from? = de onde você é? \n What is your father’s / mother’s name? qual o nome de seu pai/mãe? \n What is your address? = qual seu endereço? \n What is your favorite color? = qual sua cor preferida? * \n \n \n \nFAZENDO PERGUNTAS \nPESSOAIS \nVOCABULÁRIO \n \n* Cores (Colors) \nBlue = azul \nGreen = verde \nRed = vermelho \nOrange = laranja \nYellow = amarelo \nBrown = marrom \nSilver = prateado \nGolden = dourado \nPink = rosa \nBlack = preto \nWhite = branco \nGray or Grey = cinza \nPurple = roxo \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 1: Perguntas Pessoais (usando o verbo \nTo Be – forma interrogativa) \n \n \n \n \n \n 37 \n \n \n \nSituação: Você conhece um colega de classe no primeiro dia de aula e ocorre  a seguinte \nconversa: \n \nLuri:        Hi, How are you? \nMarcos:   I’m fine, and you? \nLuri:        Pretty good!  \nMarcos:   Who is our English teacher? \nLuri:        I think Ms. Anderson.  \nMarcos:   Where are you from? \nLuri:        I’m from Minas, and you? \nLuri:       I’m from Espírito Santo. \nMarcos:   Nice to meet you. \nLuri:       Nice to meet you too. \n \n \n \n \n= Verbo Ser / Estar no Presente do Indicativo (forma interrogativa). \n \nA forma interrogativa do verbo To Be tem esta sequência: \nForma do verbo + sujeito (+ complemento). \n \nExemplos:  \nAre you new here? \nIs he Italian? \nAre they our teachers? \nAre you hungry? \nIs she your friend? \n \n  \nAm I? - Eu sou/estou? \nAre you? - Tu és/estás, você é/está? \nIs he? - Ele é/está? \nIs she? - Ela é/está? \nIs it? – Ele/ela (coisas e animais) é/está? \nAre we? - Nós somos/estamos? \nAre you? - Vós sois/estais, vocês são/estão? \nAre they? – Eles/elas são/estão? \n \nRESUMINDO \n \nDIÁLOGO \n \nTo Be verb (Present – interrogative form) \n 38 \n \n \n \n \n \n \n \n \na) Devem ser respondidas usando-se o verbo, que aparece explícito ou subentendido na \npergunta. \n \nb) Quando a resposta for afirmativa, não é possível usar contrações do sujeito com o verbo. \n \nc) Quando a resposta for negativa, é obrigatório o uso da contração. \nRespostas às perguntas dos exemplos acima: \n \nExemplos: \nAre you new here? - Yes, I am. / No, I’m not. \nIs he Italian? - Yes, he is. / No, he isn’t. \nAre they our teachers? - Yes, they are. / No, they aren’t. \nAre you hungry? - Yes, I am. No, I’m not. \nIs she your friend? - Yes, she is. No, she isn’t. \n \n \n \n \n \n \n21 – Você e um(a) amigo(a) estão conversando sobre preferências e ele(a) tenta adivinhar \nquem é seu ator favorito. Para isso, ele(a) lhe faz algumas perguntas. Traduza para o inglês \nesta conversa. \n \nMichael:  Ele é jovem? \nPaul:  Sim, (é). \nMichael:  É famoso? \nPaul:  Sim, é muito famoso. \nDICA \n \nAs perguntas acima podem ser respondidas apenas com “sim” ou “não”, pois são \nfeitas somente para “confirmação” de uma informação sabida ou provável. Nesse \ncaso, as respostas são curtas (short answers) e seguem três regrinhas: \nEXERCÍCIOS \n 39 \nMichael:  É um bom ator? \nPaul:  Sim, (é). \nMichael:  É casado? \nPaul:  Não, (não é). \nMichael:  É alto ou baixo? \nPaul:  Alto. \nMichael:  É americano? \nPaul:  Não, é mexicano. \n \n22 – Observe a imagem abaixo e depois escreva, em inglês, as cores presentes nela: \n \n \n \n23 – Responda corretamente as perguntas usando short answers.  \n \na) Is the cat in the basket? No,  \nb) Are Ron and Max your friends? Yes,  \nc) Is John from France? No,  \nd) Is she nice? Yes,  \ne) Are you from Germany? Yes,  \n \n \n \n \n \n 40 \n24 – Complete com short answers. \n \na) Are you from Spain? - Yes,  /No,  \nb) Are Peter and Sue your friends? - Yes,  /No,  \nc) Is she going by bus? - Yes,  /No,  \nd) Am I right? – Yes,  /No,  \ne) Is the dog hungry? – Yes,  /No,  \n \n25 – Traduza o diálogo abaixo para o inglês: \n \nSituação: Você está andando na rua e de repente um entrevistador quer lhe fazer algumas \nperguntas para uma enquete. Primeiro,  ele lhe faz perguntas pessoais. Elabore as \nperguntas e as respostas em inglês. \n \nEntrevistador: Cumprimente. Pergunte se pode falar com ele(a)  \nVocê: Responda que sim.  \nEntrevistador: Agradeça. Pergunte o nome dele(a).  \nVocê: Responda.  \nEntrevistador: Pergunte se ele(a) é argentino(a).  \nVocê: Responda que não e diga sua nacionalidade.  \nEntrevistador: Pergunte se ele(a) tem 18 anos.  \nVocê: Diga que sim.  \nEntrevistador: Pergunte se ele(a) é estudante.  \nVocê: Diga que sim.  \nEntrevistador: Pergunte quando é o aniversário dele(a).  \nVocê: Responda informando somente o mês.  \nEntrevistador: Pergunte se ele(a) é solteiro(a).  \nVocê: Responda que sim.  \n[...] \nO entrevistador lhe faz outras perguntas e depois encerra a entrevista. \nEntrevistador: Agradeça.  \nVocê: Responda.  \n \n \n \n 41 \n26 – Elabore uma pergunta para cada resposta dada. (em inglês).  \n \na) \nb) \nc) \nd) \ne) \n I’m a teacher. \nI’m Cindy Anders. \nI’m from Brazil. \nI’m fine. \nHe’s my father. \n \n \n \n \n \n27 – Escreva perguntas, em inglês, para as respostas abaixo: \n \na) I play the guitar.  \nb) Julia is an architect.  \nc) Steven and Gary are professors.  \nd) The church is next to the bank.  \n \n28 – Responda em inglês as perguntas abaixo (respostas pessoais):  \n \na) Hello. How are you?  \nb) What’s your name?  \nc) What's your first name?  \nd) What's your last name?  \ne) Where are you from?  \nf) How old are you?  \ng) What’s your favorite color?  \nh) What nationality are you?  \n \n29 – Relacione as perguntas com a respostas: \n \na) How old is your brother? (      ) He’s at the swimming pool. \nb) What’s your brother like? (      ) He’s shy but friendly. \nc) Where’s your brother at the moment? (      ) He’s a soccer player. \nd) What is your brother’s profession? (      ) 17 years old. \ne) What time is it?    (      ) I’m fine, thanks. \nf) How are you today? (      ) It’s seven. \n",
        "reconstructed_explanation": "LIÇÃO 1: Perguntas Pessoais (usando o verbo <br>To Be – forma interrogativa)",
        "reconstructed_dialogue": "Situação: Você conhece um colega de classe no primeiro dia de aula e ocorre a seguinte <br>conversa: <br> <br>Luri: Hi, How are you? <br>Marcos: I’m fine, and you? <br>Luri: Pretty good! <br>Marcos: Who is our English teacher? <br>Luri: I think Ms. Anderson. <br>Marcos: Where are you from? <br>Luri: I’m from Minas, and you? <br>Luri: I’m from Espírito Santo. <br>Marcos: Nice to meet you. <br>Luri: Nice to meet you too. <br> <br> <br> <br> <br>= Verbo Ser / Estar no Presente do Indicativo (forma interrogativa). <br> <br>A forma interrogativa do verbo To Be tem esta sequência: <br>Forma do verbo + sujeito (+ complemento). <br> <br>Exemplos: <br>Are you new here? <br>Is he Italian? <br>Are they our teachers? <br>Are you hungry? <br>Is she your friend? <br> <br> <br>Am I? - Eu sou/estou? <br>Are you? - Tu és/estás, você é/está? <br>Is he? - Ele é/está? <br>Is she? - Ela é/está? <br>Is it? – Ele/ela (coisas e animais) é/está? <br>Are we? - Nós somos/estamos? <br>Are you? - Vós sois/estais, vocês são/estão? <br>Are they? – Eles/elas são/estão? <br> <br>RESUMINDO <br> <br>DIÁLOGO <br> <br>To Be verb (Present – interrogative form) <br>a) Devem ser respondidas usando-se o verbo, que aparece explícito ou subentendido na <br>pergunta. <br> <br>b) Quando a resposta for afirmativa, não é possível usar contrações do sujeito com o verbo. <br> <br>c) Quando a resposta for negativa, é obrigatório o uso da contração. <br>Respostas às perguntas dos exemplos acima: <br> <br>Exemplos: <br>Are you new here? - Yes, I am. / No, I’m not. <br>Is he Italian? - Yes, he is. / No, he isn’t. <br>Are they our teachers? - Yes, they are. / No, they aren’t. <br>Are you hungry? - Yes, I am. No, I’m not. <br>Is she your friend? - Yes, she is. No, she isn’t.",
        "reconstructed_exercises": "21 – Você e um(a) amigo(a) estão conversando sobre preferências e ele(a) tenta adivinhar <br>quem é seu ator favorito. Para isso, ele(a) lhe faz algumas perguntas. Traduza para o inglês <br>esta conversa. <br> <br>Michael: Ele é jovem? <br>Paul: Sim, (é). <br>Michael: É famoso? <br>Paul: Sim, é muito famoso. <br>DICA <br> <br>As perguntas acima podem ser respondidas apenas com “sim” ou “não”, pois são <br>feitas somente para “confirmação” de uma informação sabida ou provável. Nesse <br>caso, as respostas são curtas (short answers) e seguem três regrinhas: <br>EXERCÍCIOS <br>Michael: É um bom ator? <br>Paul: Sim, (é). <br>Michael: É casado? <br>Paul: Não, (não é). <br>Michael: É alto ou baixo? <br>Paul: Alto. <br>Michael: É americano? <br>Paul: Não, é mexicano. <br> <br>22 – Observe a imagem abaixo e depois escreva, em inglês, as cores presentes nela: <br> <br> <br> <br>23 – Responda corretamente as perguntas usando short answers. <br> <br>a) Is the cat in the basket? No, <br>b) Are Ron and Max your friends? Yes, <br>c) Is John from France? No, <br>d) Is she nice? Yes, <br>e) Are you from Germany? Yes, <br>24 – Complete com short answers. <br> <br>a) Are you from Spain? - Yes, /No, <br>b) Are Peter and Sue your friends? - Yes, /No, <br>c) Is she going by bus? - Yes, /No, <br>d) Am I right? – Yes, /No, <br>e) Is the dog hungry? – Yes, /No, <br> <br>25 – Traduza o diálogo abaixo para o inglês: <br> <br>Situação: Você está andando na rua e de repente um entrevistador quer lhe fazer algumas <br>perguntas para uma enquete. Primeiro, ele lhe faz perguntas pessoais. Elabore as <br>perguntas e as respostas em inglês. <br> <br>Entrevistador: Cumprimente. Pergunte se pode falar com ele(a) <br>Você: Responda que sim. <br>Entrevistador: Agradeça. Pergunte o nome dele(a). <br>Você: Responda. <br>Entrevistador: Pergunte se ele(a) é argentino(a). <br>Você: Responda que não e diga sua nacionalidade. <br>Entrevistador: Pergunte se ele(a) tem 18 anos. <br>Você: Diga que sim. <br>Entrevistador: Pergunte se ele(a) é estudante. <br>Você: Diga que sim. <br>Entrevistador: Pergunte quando é o aniversário dele(a). <br>Você: Responda informando somente o mês. <br>Entrevistador: Pergunte se ele(a) é solteiro(a). <br>Você: Responda que sim. <br>[...] <br>O entrevistador lhe faz outras perguntas e depois encerra a entrevista. <br>Entrevistador: Agradeça. <br>Você: Responda. <br>26 – Elabore uma pergunta para cada resposta dada. (em inglês). <br> <br>a) <br>b) <br>c) <br>d) <br>e) <br> I’m a teacher. <br>I’m Cindy Anders. <br>I’m from Brazil. <br>I’m fine. <br>He’s my father. <br> <br> <br> <br> <br> <br>27 – Escreva perguntas, em inglês, para as respostas abaixo: <br> <br>a) I play the guitar. <br>b) Julia is an architect. <br>c) Steven and Gary are professors. <br>d) The church is next to the bank. <br> <br>28 – Responda em inglês as perguntas abaixo (respostas pessoais): <br> <br>a) Hello. How are you? <br>b) What’s your name? <br>c) What's your first name? <br>d) What's your last name? <br>e) Where are you from? <br>f) How old are you? <br>g) What’s your favorite color? <br>h) What nationality are you? <br> <br>29 – Relacione as perguntas com a respostas: <br> <br>a) How old is your brother? ( ) He’s at the swimming pool. <br>b) What’s your brother like? ( ) He’s shy but friendly. <br>c) Where’s your brother at the moment? ( ) He’s a soccer player. <br>d) What is your brother’s profession? ( ) 17 years old. <br>e) What time is it? ( ) I’m fine, thanks. <br>f) How are you today? ( ) It’s seven.<br>30 – Abaixo estão algumas respostas pessoais dadas por um candidato a um emprego <br>durante uma entrevista. O entrevistador só anotou as respostas. Escreva as perguntas que <br>se encaixam com cada resposta. <br> <br>a) I am fine, thanks. <br>b) José Gomez. <br>c) J – O – S – É. <br>d) I’m Spanish. <br>e) I’m a sales manager. <br> <br>31 – Observe as pessoas abaixo e depois marque a resposta correta em relação a elas. <br> <br> <br>a) Is he thin? b) Is he happy? <br>( ) No, he isn't ( ) No, he isn't <br>( ) Yes, he is. ( ) Yes, he is. <br> <br> <br> <br> <br> <br>Observe esta pergunta: “What is your father’s name?” (Qual o <br>nome do seu pai?). Nela, o ‘s não é a contração do verbo To Be <br>(is), mas sim uma forma para expressar ideia de posse, <br>chamada de Caso Genitivo ou Caso Possessivo (The Genitive <br>Case – ‘S). Geralmente, só é utilizado quando o possuidor é <br>pessoa ou animal, e não deve ser usado com coisas (seres <br>inanimados). Quando se quer expressar a ideia de posse para <br>coisas, usa-se a forma: the + substantivo + of + possuidor. <br> <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U2_L2": {
        "title": "O Caso Genitivo ('S)",
        "unit": "UNIDADE 2 — FAZENDO PERGUNTAS PESSOAIS",
        "sentences": [
            {
                "en": "This is John's desk.",
                "pt": "Esta é a mesa do John.",
                "missing": "John's",
                "options": [
                    "John's",
                    "Johns",
                    "of John"
                ]
            },
            {
                "en": "Where is the manager's office?",
                "pt": "Onde fica a sala do gerente?",
                "missing": "manager's",
                "options": [
                    "manager's",
                    "managers",
                    "of manager"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Genitive Case",
                "definition": "Uso do apostrofo + S ('s) para indicar posse ou relação."
            },
            {
                "term": "Desk",
                "definition": "Mesa de trabalho de escritório."
            },
            {
                "term": "Office",
                "definition": "Escritório ou sala de administração."
            }
        ],
        "quiz": {
            "question": "Como traduzimos 'o carro de Mary' usando o caso genitivo?",
            "options": [
                "Mary's car",
                "The car of Mary",
                "Marys car",
                "Mary car"
            ],
            "correctIndex": 0,
            "explanation": "O possuidor recebe o 's antes da coisa possuída: Mary's car."
        },
        "businessContext": {
            "scenario": "Explicando organograma ou posse de relatórios comerciais a clientes.",
            "en": "We need to check the company's financial report.",
            "pt": "Nós precisamos verificar o relatório financeiro da empresa.",
            "missing": "company's",
            "options": [
                "company's",
                "companys",
                "companies"
            ],
            "terms": [
                {
                    "term": "Financial report",
                    "definition": "Relatório contábil ou financeiro corporativo."
                },
                {
                    "term": "Headquarters (HQ)",
                    "definition": "Sede principal da empresa."
                }
            ],
            "quiz": {
                "question": "Como você diz 'o escritório do diretor comercial' em inglês?",
                "options": [
                    "The sales director's office",
                    "The sales director office",
                    "The office of the director of sales",
                    "The sales directors office'"
                ],
                "correctIndex": 0,
                "explanation": "Usamos o 's após sales director: 'The sales director's office'."
            }
        },
        "rawText": " 42 \n30 – Abaixo estão algumas respostas pessoais dadas por um candidato a um emprego \ndurante uma entrevista. O entrevistador só anotou as respostas. Escreva as perguntas que \nse encaixam com cada resposta.  \n \na) I am fine, thanks.  \nb) José Gomez.  \nc) J – O – S – É.  \nd) I’m Spanish.  \ne) I’m a sales manager.  \n \n31 – Observe as pessoas abaixo e depois marque a resposta correta em relação a elas. \n \n  \na) Is he thin?     b) Is he happy? \n(     ) No, he isn't      (     ) No, he isn't \n(     ) Yes, he is. (     ) Yes, he is. \n \n \n \n \n \nObserve esta pergunta: “What is your father’s name?” (Qual o \nnome do seu pai?). Nela, o ‘s não é a contração do verbo To Be \n(is), mas sim uma forma para expressar ideia de posse, \nchamada de Caso Genitivo ou Caso Possessivo  (The Genitive \nCase – ‘S). Geralmente, só é utilizado quando o possuidor é \npessoa ou animal, e não deve ser usado com coisas  (seres \ninanimados). Quando se quer expressar a ideia de posse para \ncoisas, usa-se a forma: the + substantivo + of + possuidor. \n \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 2: O Caso Genitivo  \n \n \n \n \n 43 \nExemplos: \nMy brother’s name is John. (O nome do meu irmão é John) \nThe arm of this chair is broken. (O braço desta cadeira está quebrado). A forma “this chair’s \narm is broken” é incorreta (a forma chair arm existe como uma palavra composta.) \n \nNo entanto, há exceções quanto ao uso do ‘s para com seres inanimados: quando se referir \na tempo, medidas, lugares com nomes de pessoas, entre outros, é possível. \nExemplos:  \nA three weeks' vacation (férias de três semanas) \nSt. Peter's Cathedral (Catedral de São Pedro)  \n \nExemplos: \nJesus’ teachings (os ensinamentos de Jesus)   \nJesus’s teachings (os ensinamentos de Jesus)    \nThe girls' books (os livros das meninas) \n \nE quando há mais de um possuidor?  \nQuando o mesmo elemento tem mais de um \npossuidor, usa-se o ‘S no último possuidor citado. \n \nExemplo: \nMy mom and father’s house: (a casa da minha mãe e do meu pai, sendo a mesma casa).  \n \nContudo, se quisermos sinalizar que cada um tem sua própria casa, o ‘S deve ser usado \npara cada possuidor. \nExemplo: \nMy mom’s and father’s house. (A casa da minha mãe e a casa do meu pai) \n  \nQuando o substantivo \n(possuidor) termina com S, \nseja no nome original, seja \npelo plural, duas formas são \npossíveis: acrescenta -se o \napóstrofo S ou usa -se \nsomente o apóstrofo. \n \nOBSERVAÇÃO \n \n 44 \n \n \n \n32 – Coloque ‘S ou ‘ nos espaços das frases abaixo, para estabelecer uma ideia de posse. \n \na) Mr. Anderson  secretary is sick. \nb) In this story they sell ladies  hats. \nc) Mary  husband is very kind. \nd) I love my grandma  cakes. \ne) Bring me the girls  toys. \n \n33 – Traduza as frases abaixo: \n \na) This is Frank’s car:  \nb) The children’s room is upstairs:  \nc) This is the girls’ mother:  \nd) Mary’s bag is new:  \n \n34 – Imagine que você deixou algumas roupas na lavanderia e mais tarde volta para pegá-\nlas. Só que você esqueceu a nota e agora tem qu e falar quais peças você deixou. Escreva \nem inglês a identificação das peças,  conforme abaixo. Procure as palavras que você não \nsouber em um dicionário. \n \na) O vestido da minha irmã:  \nb) A camisa do meu irmão:  \nc) O boné do meu pai:  \nd) As calças dos meus irmãos:  \ne) As saias da minha mãe:  \n \n  \nEXERCÍCIOS \n\n",
        "reconstructed_explanation": "LIÇÃO 2: O Caso Genitivo <br>Exemplos: <br>My brother’s name is John. (O nome do meu irmão é John) <br>The arm of this chair is broken. (O braço desta cadeira está quebrado). A forma “this chair’s <br>arm is broken” é incorreta (a forma chair arm existe como uma palavra composta.) <br> <br>No entanto, há exceções quanto ao uso do ‘s para com seres inanimados: quando se referir <br>a tempo, medidas, lugares com nomes de pessoas, entre outros, é possível. <br>Exemplos: <br>A three weeks' vacation (férias de três semanas) <br>St. Peter's Cathedral (Catedral de São Pedro) <br> <br>Exemplos: <br>Jesus’ teachings (os ensinamentos de Jesus) <br>Jesus’s teachings (os ensinamentos de Jesus) <br>The girls' books (os livros das meninas) <br> <br>E quando há mais de um possuidor? <br>Quando o mesmo elemento tem mais de um <br>possuidor, usa-se o ‘S no último possuidor citado. <br> <br>Exemplo: <br>My mom and father’s house: (a casa da minha mãe e do meu pai, sendo a mesma casa). <br> <br>Contudo, se quisermos sinalizar que cada um tem sua própria casa, o ‘S deve ser usado <br>para cada possuidor. <br>Exemplo: <br>My mom’s and father’s house. (A casa da minha mãe e a casa do meu pai) <br> <br>Quando o substantivo <br>(possuidor) termina com S, <br>seja no nome original, seja <br>pelo plural, duas formas são <br>possíveis: acrescenta -se o <br>apóstrofo S ou usa -se <br>somente o apóstrofo. <br> <br>OBSERVAÇÃO",
        "reconstructed_dialogue": "",
        "reconstructed_exercises": "32 – Coloque ‘S ou ‘ nos espaços das frases abaixo, para estabelecer uma ideia de posse. <br> <br>a) Mr. Anderson secretary is sick. <br>b) In this story they sell ladies hats. <br>c) Mary husband is very kind. <br>d) I love my grandma cakes. <br>e) Bring me the girls toys. <br> <br>33 – Traduza as frases abaixo: <br> <br>a) This is Frank’s car: <br>b) The children’s room is upstairs: <br>c) This is the girls’ mother: <br>d) Mary’s bag is new: <br> <br>34 – Imagine que você deixou algumas roupas na lavanderia e mais tarde volta para pegá-<br>las. Só que você esqueceu a nota e agora tem qu e falar quais peças você deixou. Escreva <br>em inglês a identificação das peças, conforme abaixo. Procure as palavras que você não <br>souber em um dicionário. <br> <br>a) O vestido da minha irmã: <br>b) A camisa do meu irmão: <br>c) O boné do meu pai: <br>d) As calças dos meus irmãos: <br>e) As saias da minha mãe:<br>Saber os Pronomes Interrogativos é muito importante, pois lhe <br>proporciona fazer as perguntas mais usuais e fomentar a <br>comunicação: Veja os principais: <br> <br> What: qual, o que, que, quais. <br>What size do you wear? (Qual tamanho de roupa você <br>usa?) <br> When: quando. <br>When is your birthday? (Quando é o seu aniversário?) <br> Where: onde. <br>Where do you live? (Onde você mora?) <br> Who: quem <br>Who is that woman? (Quem é aquela mulher?) <br> Why: por que <br>Why do you study English? (Por que você estuda inglês?) <br> How: como <br>How do you go to school? (Como você vai para a escola?)* <br> Whose: de quem <br>Whose book is that? (De quem é aquele livro?) <br> Which: qual (entre duas ou mais opções) <br>Which fruit do you prefer: orange or lemon? (Qual fruta você prefere: laranja ou <br>limão?) <br> <br>créditos: Paint by Number <br>2020."
    },
    "U2_L3": {
        "title": "Pronomes Interrogativos, Meios de Transporte, Vestuário",
        "unit": "UNIDADE 2 — FAZENDO PERGUNTAS PESSOAIS",
        "sentences": [
            {
                "en": "What is your commercial target?",
                "pt": "Qual é a sua meta comercial?",
                "missing": "What",
                "options": [
                    "What",
                    "Where",
                    "Who"
                ]
            },
            {
                "en": "How do you travel to meetings?",
                "pt": "Como você viaja para as reuniões?",
                "missing": "How",
                "options": [
                    "How",
                    "Why",
                    "Who"
                ]
            }
        ],
        "vocab": [
            {
                "term": "What",
                "definition": "O que / Qual."
            },
            {
                "term": "How",
                "definition": "Como / De que maneira."
            },
            {
                "term": "Suit",
                "definition": "Terno, vestuário formal de negócios."
            }
        ],
        "quiz": {
            "question": "Qual pronome interrogativo usamos para perguntar sobre localizações?",
            "options": [
                "Where",
                "What",
                "Who",
                "Why"
            ],
            "correctIndex": 0,
            "explanation": "'Where' significa 'onde' e é usado para locais."
        },
        "businessContext": {
            "scenario": "Recebendo um parceiro comercial internacional e alinhando transporte e código de vestimenta.",
            "en": "Where is your team meeting tonight?",
            "pt": "Onde é a reunião do seu time hoje à noite?",
            "missing": "Where",
            "options": [
                "Where",
                "Who",
                "What"
            ],
            "terms": [
                {
                    "term": "Dress code",
                    "definition": "Normas de vestuário exigidas na corporação."
                },
                {
                    "term": "Corporate taxi",
                    "definition": "Serviço de táxi conveniado da empresa."
                }
            ],
            "quiz": {
                "question": "Como você pergunta qual meio de transporte o cliente prefere para ir ao aeroporto?",
                "options": [
                    "What is airport transportation?",
                    "How do you want to go to the airport?",
                    "Where is airport taxi?",
                    "Why airport?"
                ],
                "correctIndex": 1,
                "explanation": "'How do you want to go...' pergunta o meio de transporte ('como')."
            }
        },
        "rawText": " 45 \n \n \n \n \nSaber os Pronomes Interrogativos é muito importante, pois lhe \nproporciona fazer as perguntas mais usuais e fomentar a \ncomunicação: Veja os principais: \n \n What: qual, o que, que, quais. \nWhat size do you wear? (Qual tamanho de roupa você \nusa?) \n When: quando.  \nWhen is your birthday? (Quando é o seu aniversário?) \n Where: onde. \nWhere do you live? (Onde você mora?) \n Who: quem   \nWho is that woman? (Quem é aquela mulher?) \n Why: por que \nWhy do you study English? (Por que você estuda inglês?) \n How: como \nHow do you go to school? (Como você vai para a escola?)* \n Whose: de quem \nWhose book is that? (De quem é aquele livro?) \n Which: qual (entre duas ou mais opções) \nWhich fruit do you prefer: orange or lemon?  (Qual fruta você prefere:  laranja ou \nlimão?) \n  \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 3: Pronomes Interrogativos. \nMeios de Transporte. Vestuário. \n 46 \n \n \n \n \n \n \n \n \n \n \nÉ muito comum em viagens as pessoas fazerem comoras, principalmente de roupas. Nesse \nsentido, muitas perguntas são feitas, para saber o tamanho das peças, saber onde prová -\nlas, qual a forma de pagamento, etc. Para isso, você pode usar p alavras interrogativ as \n(Question-Words) ou a combinação delas, como “how much” (qual o valor”, “how many” \n(quantos), “what size” (qual o tamanho), entre outros. Veja abaixo algumas perguntas e \nrespostas comuns a situações de compra de roupas e um pouco de vocabulário. \n \nWhat is your size? / what size are you? (Qual tamanho você usa?) \nI wear a size M. (Uso M) \n \nDo you have a larger/smaller size? (Você tem tamanho maior/menor?) \nUnfortunatelly, it’s the only size. (Infelizmente, este é o único tamanho) \n \nCan I pay by credit card? (Posso pagar com cartão de crédito?) \nYes, we take credit cards. / Only cash. (Sim, aceitamos cartões / Apenas dinheiro) \n \nVeja abaixo a classificação de roupas, que você também encontra em lojas on-line. \n \nWomen’s clothing = Moda feminina. \nMen’s clothing = Moda masculina. \nChildren’s clothing = Moda infantil. \nSports clothing = Moda esportiva/Fitness. \nWomen’s underwear = Roupa íntima feminina. \nMen’s underwear = Roupa íntima masculina. \n  \nDICA \n \nMeans of transportation (meios de transportes) \n geralmente precedidos da preposição BY: \n           subway (metrô), car (carro), bicycle/bike (bicicleta), motorcycle (moto),  \n           taxi (táxi), train (trem), bus (ônibus), boat. \n geralmente precedido da preposição ON:  \n           foot (a pé). \n 47 \n \n \n \n \n \n \n \n \n \n \nSituação: Alyssa entra em uma loja de roupas e conversa com a vendedora (Claire) \n \nAlyssa:  Good morning, could I see this blouse, please? \nClaire:  Of course. Here you are. \nAlyssa:  Do you have a different color? \nVOCABULÁRIO \n \nRoupas e Calçados (Clothes and Shoes) \nBikini = Biquine \nBlouse = Blusa (para mulheres) \nBra ou brassiere = Sutiã \nBriefs / underwear = Cueca \nCoat = Casaco \nDress = Vestido \nJacket = Jaqueta \nJeans = Calça jeans \nLingerie = Lingerie \nOvercoat = Sobretudo \n \nPajamas = Pijama \nPanties = Calcinha \nPants = Calça (Inglês Americano) \nShirt = Camisa \nShorts = Bermuda ou calção \nSkirt = Saia \nShoes = Sapatos \nSneakers = Tênis \nSocks = Meias \nSuit = Terno \nSweater = Suéter, blusa \nTrousers = Calças (Inglês Britânico) \nT-Shirt = Camiseta \n \nAcessórios (Accessories) \nBelt = Cinto Necklace = Colar ou gargantilha Tie = Gravata \nBoots = Botas Purse = Bolsa Wallet = Carteira \nBracelet = Pulseira Raincoat = Capa de Chuva Watch = Relógio \nCap = Boné Ring = Anel  \nEarring = Brinco Sandals = Sandálias  \nGloves = Luvas Flip-flops = sandália de tiras (tipo “havaianas”)  \nHat = Chapéu Scarf = Cachecol  \n \nDIÁLOGO \n \n 48 \nClaire:  Which color do you want? \nAlyssa:  Maybe white or green. \nClaire:  Medium size? \nAlyssa:  Yes, please. I’d like to see some boots, a scarf and a blouse too. \nClaire:  Anything else? \nAlyssa:  Yes, for my husband a T-shirt, a sweater, a coat and a hat.   \nClaire:  Too many things… \nAlyssa:  Yes, we are going to travel. \n[…] \n \n \n \n \n \n \n35 – Complete corretamente o diálogo com as palavras do quadro.  \n \nname  your  who  where  spell  what’s \n \nFrancis: What’s your ?  \nPietro: My name’s Pietro. \nFrancis: How do you  your name? \nPietro: P - I - E - T - R - O \nFrancis:  your email address?  \nPietro: pietro.@bomaluno.mail.com \nFrancis: What’s  mobile phone number? \nPietro: It’s 27 98 52 567323 \nFrancis:  are you from? \nPietro: I’m from Paris. \nFrancis:  is your best friend? \nPietro: Lyly is my best friend. \n \n  \nEXERCÍCIOS \n 49 \n36 – Completa as frases com as palavras interrogativas do quadro abaixo, guiando-se pelas \nrespostas ao lado das perguntas.  \n \nWhere – What – When – How often – How – Why – Who \n \na)  are you going on holiday? - Next Friday \nb)  are you going? - Portugal. \nc)  studies English? - My sister. \nd)  do you go on holiday? - Once every two years. \ne)  don’t you travel more often? - Because we don’t have the money. \nf)  do you do on weekends? - We relax in the garden and visit friends. \ng)  do you choose your holiday destination? - We use the internet. \n \n37 – Complete as frases com um Pronome Interrogativo  ou Expressão Interrogativa  do \nquadro e depois relacione as perguntas com as respostas correspondentes:  \n \nHow big – Where – What – When – How many – Which – How much – How – Why – How \nold – How often – Who \n \na)  is your name?  (   ) It costs ten dollars. \nb)  is with you?  (   ) I'm from Brazil. \nc)  are you from?  (   ) Mary. \nd)  are you today?  (   ) In the afternoon. \ne)  do you usually do your homework?  (   ) I'm fine, thanks. \nf)  do you go to the movies?  (   ) There are 12 people. \ng)  one do you prefer: coffee or tea?  (   ) She is nine years old. \nh)  people are there in this classroom?  (   ) Twice a month. \ni)  does it cost?  (   ) Because it´s important. \nj)  is your sister?  (   ) I prefer coffee. \nk)  do you study English?  (   ) John and Peter. \nl)  is this T-shirt?  (   ) It’s small. \n \n  \n",
        "reconstructed_explanation": "LIÇÃO 3: Pronomes Interrogativos. <br>Meios de Transporte. Vestuário. <br>É muito comum em viagens as pessoas fazerem comoras, principalmente de roupas. Nesse <br>sentido, muitas perguntas são feitas, para saber o tamanho das peças, saber onde prová -<br>las, qual a forma de pagamento, etc. Para isso, você pode usar p alavras interrogativ as <br>(Question-Words) ou a combinação delas, como “how much” (qual o valor”, “how many” <br>(quantos), “what size” (qual o tamanho), entre outros. Veja abaixo algumas perguntas e <br>respostas comuns a situações de compra de roupas e um pouco de vocabulário. <br> <br>What is your size? / what size are you? (Qual tamanho você usa?) <br>I wear a size M. (Uso M) <br> <br>Do you have a larger/smaller size? (Você tem tamanho maior/menor?) <br>Unfortunatelly, it’s the only size. (Infelizmente, este é o único tamanho) <br> <br>Can I pay by credit card? (Posso pagar com cartão de crédito?) <br>Yes, we take credit cards. / Only cash. (Sim, aceitamos cartões / Apenas dinheiro) <br> <br>Veja abaixo a classificação de roupas, que você também encontra em lojas on-line. <br> <br>Women’s clothing = Moda feminina. <br>Men’s clothing = Moda masculina. <br>Children’s clothing = Moda infantil. <br>Sports clothing = Moda esportiva/Fitness. <br>Women’s underwear = Roupa íntima feminina. <br>Men’s underwear = Roupa íntima masculina. <br> <br>DICA <br> <br>Means of transportation (meios de transportes) <br> geralmente precedidos da preposição BY: <br> subway (metrô), car (carro), bicycle/bike (bicicleta), motorcycle (moto), <br> taxi (táxi), train (trem), bus (ônibus), boat. <br> geralmente precedido da preposição ON: <br> foot (a pé).",
        "reconstructed_dialogue": "Situação: Alyssa entra em uma loja de roupas e conversa com a vendedora (Claire) <br> <br>Alyssa: Good morning, could I see this blouse, please? <br>Claire: Of course. Here you are. <br>Alyssa: Do you have a different color? <br>VOCABULÁRIO <br> <br>Roupas e Calçados (Clothes and Shoes) <br>Bikini = Biquine <br>Blouse = Blusa (para mulheres) <br>Bra ou brassiere = Sutiã <br>Briefs / underwear = Cueca <br>Coat = Casaco <br>Dress = Vestido <br>Jacket = Jaqueta <br>Jeans = Calça jeans <br>Lingerie = Lingerie <br>Overcoat = Sobretudo <br> <br>Pajamas = Pijama <br>Panties = Calcinha <br>Pants = Calça (Inglês Americano) <br>Shirt = Camisa <br>Shorts = Bermuda ou calção <br>Skirt = Saia <br>Shoes = Sapatos <br>Sneakers = Tênis <br>Socks = Meias <br>Suit = Terno <br>Sweater = Suéter, blusa <br>Trousers = Calças (Inglês Britânico) <br>T-Shirt = Camiseta <br> <br>Acessórios (Accessories) <br>Belt = Cinto Necklace = Colar ou gargantilha Tie = Gravata <br>Boots = Botas Purse = Bolsa Wallet = Carteira <br>Bracelet = Pulseira Raincoat = Capa de Chuva Watch = Relógio <br>Cap = Boné Ring = Anel <br>Earring = Brinco Sandals = Sandálias <br>Gloves = Luvas Flip-flops = sandália de tiras (tipo “havaianas”) <br>Hat = Chapéu Scarf = Cachecol <br> <br>DIÁLOGO <br>Claire: Which color do you want? <br>Alyssa: Maybe white or green. <br>Claire: Medium size? <br>Alyssa: Yes, please. I’d like to see some boots, a scarf and a blouse too. <br>Claire: Anything else? <br>Alyssa: Yes, for my husband a T-shirt, a sweater, a coat and a hat. <br>Claire: Too many things… <br>Alyssa: Yes, we are going to travel. <br>[…]",
        "reconstructed_exercises": "35 – Complete corretamente o diálogo com as palavras do quadro. <br> <br>name your who where spell what’s <br> <br>Francis: What’s your ? <br>Pietro: My name’s Pietro. <br>Francis: How do you your name? <br>Pietro: P - I - E - T - R - O <br>Francis: your email address? <br>Pietro: pietro.@bomaluno.mail.com <br>Francis: What’s mobile phone number? <br>Pietro: It’s 27 98 52 567323 <br>Francis: are you from? <br>Pietro: I’m from Paris. <br>Francis: is your best friend? <br>Pietro: Lyly is my best friend. <br> <br> <br>EXERCÍCIOS <br>36 – Completa as frases com as palavras interrogativas do quadro abaixo, guiando-se pelas <br>respostas ao lado das perguntas. <br> <br>Where – What – When – How often – How – Why – Who <br> <br>a) are you going on holiday? - Next Friday <br>b) are you going? - Portugal. <br>c) studies English? - My sister. <br>d) do you go on holiday? - Once every two years. <br>e) don’t you travel more often? - Because we don’t have the money. <br>f) do you do on weekends? - We relax in the garden and visit friends. <br>g) do you choose your holiday destination? - We use the internet. <br> <br>37 – Complete as frases com um Pronome Interrogativo ou Expressão Interrogativa do <br>quadro e depois relacione as perguntas com as respostas correspondentes: <br> <br>How big – Where – What – When – How many – Which – How much – How – Why – How <br>old – How often – Who <br> <br>a) is your name? ( ) It costs ten dollars. <br>b) is with you? ( ) I'm from Brazil. <br>c) are you from? ( ) Mary. <br>d) are you today? ( ) In the afternoon. <br>e) do you usually do your homework? ( ) I'm fine, thanks. <br>f) do you go to the movies? ( ) There are 12 people. <br>g) one do you prefer: coffee or tea? ( ) She is nine years old. <br>h) people are there in this classroom? ( ) Twice a month. <br>i) does it cost? ( ) Because it´s important. <br>j) is your sister? ( ) I prefer coffee. <br>k) do you study English? ( ) John and Peter. <br>l) is this T-shirt? ( ) It’s small.<br>38 – Observe a imagem abaixo e marque as roupas e os acessórios presentes nela: <br> <br> <br>( ) Bikini ( ) Skirt ( ) Boots <br>( ) Blouse ( ) Sneakers ( ) Gloves <br>( ) Coat ( ) Socks ( ) Hat <br>( ) Dress ( ) Suit ( ) Purse <br>( ) Jeans ( ) Sweater ( ) Raincoat <br>( ) Overcoat ( ) Trousers ( ) Scarf <br>( ) Pants ( ) T-Shirt ( ) Tie <br>( ) Shorts ( ) Belt ( ) Sandals <br> <br> <br> <br> <br> <br> <br> <br> <br>créditos: Paint by Number <br>2020. <br>Dias da Semana (Days of the Week) <br>Sunday (domingo) Thursday (quinta-feira) <br>Monday (segunda-feira) Friday (sexta-feira) <br>Tuesday (terça-feira) Saturday (sábado) <br>Wednesday (quarta-feira) <br> <br>Meses do Ano (Months of the Year) <br>January July <br>February August <br>March September <br>April October <br>May November <br>June December"
    },
    "U2_L4": {
        "title": "Dias da Semana, Meses, Números Cardinais",
        "unit": "UNIDADE 2 — FAZENDO PERGUNTAS PESSOAIS",
        "sentences": [
            {
                "en": "The commercial contract starts on Monday.",
                "pt": "O contrato comercial começa na segunda-feira.",
                "missing": "Monday",
                "options": [
                    "Monday",
                    "January",
                    "First"
                ]
            },
            {
                "en": "We have fifty sales agents.",
                "pt": "Nós temos cinquenta agentes de vendas.",
                "missing": "fifty",
                "options": [
                    "fifty",
                    "fifteen",
                    "five"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Monday to Friday",
                "definition": "Segunda a sexta (dias úteis comerciais)."
            },
            {
                "term": "Fifty",
                "definition": "Cinquenta (número cardinal)."
            },
            {
                "term": "Schedule",
                "definition": "Agenda ou cronograma de trabalho."
            }
        ],
        "quiz": {
            "question": "Qual preposição de tempo é usada antes de dias da semana?",
            "options": [
                "in",
                "by",
                "on",
                "at"
            ],
            "correctIndex": 2,
            "explanation": "Usamos a preposição 'on' para dias da semana (ex: on Monday)."
        },
        "businessContext": {
            "scenario": "Alinhamento de cronograma de vendas semanais e volume de novos contratos.",
            "en": "Our billing cycle resets on Friday.",
            "pt": "Nosso ciclo de faturamento reinicia na sexta-feira.",
            "missing": "Friday",
            "options": [
                "Friday",
                "May",
                "Ten"
            ],
            "terms": [
                {
                    "term": "Billing cycle",
                    "definition": "Ciclo de faturamento recorrente da empresa."
                },
                {
                    "term": "Weekdays",
                    "definition": "Dias de semana (segunda a sexta)."
                }
            ],
            "quiz": {
                "question": "Como agendar uma apresentação de vendas para sexta-feira usando a preposição correta?",
                "options": [
                    "The presentation is under Friday.",
                    "The presentation is in Friday.",
                    "The presentation is at Friday.",
                    "The presentation is on Friday."
                ],
                "correctIndex": 3,
                "explanation": "Usamos 'on' para dias específicos: 'on Friday'."
            }
        },
        "rawText": " 50 \n38 – Observe a imagem abaixo e marque as roupas e os acessórios presentes nela: \n \n \n(   ) Bikini  (   ) Skirt  (   ) Boots \n(   ) Blouse  (   ) Sneakers  (   ) Gloves \n(   ) Coat  (   ) Socks  (   ) Hat \n(   ) Dress  (   ) Suit  (   ) Purse \n(   ) Jeans  (   ) Sweater  (   ) Raincoat \n(   ) Overcoat  (   ) Trousers  (   ) Scarf \n(   ) Pants  (   ) T-Shirt  (   ) Tie \n(   ) Shorts  (   ) Belt  (   ) Sandals \n \n \n \n \n \n \n  \n \ncréditos: Paint by Number \n2020. \nDias da Semana (Days of the Week) \nSunday (domingo) Thursday (quinta-feira) \nMonday (segunda-feira) Friday (sexta-feira) \nTuesday (terça-feira) Saturday (sábado) \nWednesday (quarta-feira)  \n \nMeses do Ano (Months of the Year) \nJanuary July \nFebruary August \nMarch September \nApril October \nMay November \nJune December \n \nLIÇÃO 4: Dias da semana. Meses. Números Cardinais. \n 51 \n \n \n \n \n \n \n \n \n \n39 – Escreva nos espaços o dia da semana, em inglês, de acordo com o indicado.  \n \na) It's Monday. Yesterday was  \nb) It was Friday yesterday. Today is  \nc) It was Tuesday yesterday. it's  today. \nd) It's Wednesday today. Yesterday was  \ne) It was Sunday yesterday. It's  today. \n \n40 – Escreva, em inglês, o mês em que estas datas festivas ocorrem: \n \na) Halloween:  \nb) Christmas:  \nc) Children’s day:  \nd) The International Women's day:  \ne) Mother’s day (in Brazil):  \n \n \n \nSão usados para: \n \na) Dizer a idade: I’m 15 (years old). \nb) Informar o número de telefone: My phone number is 9987 00123. \nc) Dizer as horas: It’s 09:20. \nd) Informar o número da sua residência: I live at (number) 135. \ne) Falar de preços: This T-shirt costs $ 45 dollars. \nf) Dizer o ano de nascimento: I was born in 1989. \nOs dias da semana e os meses do ano são escritos sempre com letra inicial \nmaiúscula. \nOBSERVAÇÃO \n \nEXERCÍCIOS \nNúmeros Cardinais (Cardinal Numbers) \n \n 52 \n \n0 – zero 9 – nine 18 – eighteen 27 – twenty-seven \n1 – one 10 – ten 19 – nineteen 28 – twenty-eight \n2 – two 11 – eleven 20 – twenty 29 – twenty-nine \n3 – three 12 – twelve 21 – twenty-one 30 – thirty  \n4 – four 13 – thirteen 22 – twenty-two 31 – thirty-one \n5 – five 14 – fourteen 23 – twenty-three 32 – thirty-two \n6 – six 15 – fifteen 24 – twenty-four …….. \n7 – seven 16 – sixteen 25 – twenty-five  \n8 – eight 17 – seventeen 26 – twenty-six  \n \n40 – forty \n50 – fifty \n60 – sixty \n70 – seventy \n80 – eighty \n90 – ninety \n100 – one hundred \n1,000 – one thousand \n1,0000 – one million \n \n  \n \n  \na) Em inglês, quando escrevemos números, usamos \nvírgula onde em português, usamos ponto. \nExemplo: \n1.000 (português) / 1,000 (inglês). \n \nb) A leitura de número composto é feito da seguinte \nforma: \n1.938 = one thousand nine hundred  thirty-eight. (não é \nnecessário colocar “e” (and) entre centenas, dezenas e \nunidades, como em português: mil, novecentos e trinta e \noito). \n \nOBSERVAÇÃO \n \n 53 \n \n \n \nSituação: Um comerciante atende uma cliente, que lhe faz perguntas sobre o preço de \nvárias mercadorias: \n \nComerciante:  Good afternoon, Madam! \nCliente:    Good afternoon! How much is this melon? \nComerciante:  It’s $ 2 dollars. \nCliente:   How much are these apples? \nComerciante:   The 5 lb bag costs 5 dollars. \nCliente:   What’s the price of this cake? \nComerciante:   It costs $ 3 dollars. \n \n \n \n \n \n \n41 – Escreva os números abaixo por extenso:  \n \na) 188  \nb) 62  \nc) 467  \nd) 100  \ne) 1413  \nf) 1205  \n \n42 – (Instituto Excelência / Prefeitura de Catanduvas-PR) Leia o trecho abaixo e depois \nresponda a pergunta: \n \n“Mary has two young children and they are very intelligent. Their names are \"Jack\" and \n\"Julie\". Jack is nine years old and Julie is eleven years old.” \n \nHow many numerals appear in the sentence? \na) Four. \nDIÁLOGO \n \nEXERCÍCIOS \n 54 \nb) Five. \nc) Two. \nd) Nenhuma das alternativas. \n \n43 – Observe o desenho e pergunte o preço do objeto (em inglês – frase completa, \nincluindo o nome do objeto). Depois, escreva por extenso o valor indicado (em inglês).  \n \na) (belt - $ 35.29)  \n \n \n \nb) (umbrella - $ \n29.15) \n \n  \n \n \n \nc) (ring – $210.58) \n \n \n \nd) (cap – 21.87) \n \n \n \n \n44 – Você entra em uma loja e se interessa pelos produtos abaixo. Você pergunta o preço \nde cada produto e o vendedor diz os preços abaixo. Escreva-os por extenso.  \n \na) trousers  b) shoes c) glasses d) gloves e) chips  \n     \n$ 46.25 $ 52.11 $ 75.33 $ 15.47 $ 0.90 \n \n\n",
        "reconstructed_explanation": "LIÇÃO 4: Dias da semana. Meses. Números Cardinais.",
        "reconstructed_dialogue": "Situação: Um comerciante atende uma cliente, que lhe faz perguntas sobre o preço de <br>várias mercadorias: <br> <br>Comerciante: Good afternoon, Madam! <br>Cliente: Good afternoon! How much is this melon? <br>Comerciante: It’s $ 2 dollars. <br>Cliente: How much are these apples? <br>Comerciante: The 5 lb bag costs 5 dollars. <br>Cliente: What’s the price of this cake? <br>Comerciante: It costs $ 3 dollars. <br> <br> <br> <br> <br> <br> <br>41 – Escreva os números abaixo por extenso: <br> <br>a) 188 <br>b) 62 <br>c) 467 <br>d) 100 <br>e) 1413 <br>f) 1205 <br> <br>42 – (Instituto Excelência / Prefeitura de Catanduvas-PR) Leia o trecho abaixo e depois <br>responda a pergunta: <br> <br>“Mary has two young children and they are very intelligent. Their names are \"Jack\" and <br>\"Julie\". Jack is nine years old and Julie is eleven years old.” <br> <br>How many numerals appear in the sentence? <br>a) Four. <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>b) Five. <br>c) Two. <br>d) Nenhuma das alternativas. <br> <br>43 – Observe o desenho e pergunte o preço do objeto (em inglês – frase completa, <br>incluindo o nome do objeto). Depois, escreva por extenso o valor indicado (em inglês). <br> <br>a) (belt - $ 35.29) <br> <br> <br> <br>b) (umbrella - $ <br>29.15) <br> <br> <br> <br> <br> <br>c) (ring – $210.58) <br> <br> <br> <br>d) (cap – 21.87) <br> <br> <br> <br> <br>44 – Você entra em uma loja e se interessa pelos produtos abaixo. Você pergunta o preço <br>de cada produto e o vendedor diz os preços abaixo. Escreva-os por extenso. <br> <br>a) trousers b) shoes c) glasses d) gloves e) chips <br> <br>$ 46.25 $ 52.11 $ 75.33 $ 15.47 $ 0.90",
        "reconstructed_exercises": "39 – Escreva nos espaços o dia da semana, em inglês, de acordo com o indicado. <br> <br>a) It's Monday. Yesterday was <br>b) It was Friday yesterday. Today is <br>c) It was Tuesday yesterday. it's today. <br>d) It's Wednesday today. Yesterday was <br>e) It was Sunday yesterday. It's today. <br> <br>40 – Escreva, em inglês, o mês em que estas datas festivas ocorrem: <br> <br>a) Halloween: <br>b) Christmas: <br>c) Children’s day: <br>d) The International Women's day: <br>e) Mother’s day (in Brazil): <br> <br> <br> <br>São usados para: <br> <br>a) Dizer a idade: I’m 15 (years old). <br>b) Informar o número de telefone: My phone number is 9987 00123. <br>c) Dizer as horas: It’s 09:20. <br>d) Informar o número da sua residência: I live at (number) 135. <br>e) Falar de preços: This T-shirt costs $ 45 dollars. <br>f) Dizer o ano de nascimento: I was born in 1989. <br>Os dias da semana e os meses do ano são escritos sempre com letra inicial <br>maiúscula. <br>OBSERVAÇÃO <br> <br>EXERCÍCIOS <br>Números Cardinais (Cardinal Numbers) <br>0 – zero 9 – nine 18 – eighteen 27 – twenty-seven <br>1 – one 10 – ten 19 – nineteen 28 – twenty-eight <br>2 – two 11 – eleven 20 – twenty 29 – twenty-nine <br>3 – three 12 – twelve 21 – twenty-one 30 – thirty <br>4 – four 13 – thirteen 22 – twenty-two 31 – thirty-one <br>5 – five 14 – fourteen 23 – twenty-three 32 – thirty-two <br>6 – six 15 – fifteen 24 – twenty-four …….. <br>7 – seven 16 – sixteen 25 – twenty-five <br>8 – eight 17 – seventeen 26 – twenty-six <br> <br>40 – forty <br>50 – fifty <br>60 – sixty <br>70 – seventy <br>80 – eighty <br>90 – ninety <br>100 – one hundred <br>1,000 – one thousand <br>1,0000 – one million <br> <br> <br> <br> <br>a) Em inglês, quando escrevemos números, usamos <br>vírgula onde em português, usamos ponto. <br>Exemplo: <br>1.000 (português) / 1,000 (inglês). <br> <br>b) A leitura de número composto é feito da seguinte <br>forma: <br>1.938 = one thousand nine hundred thirty-eight. (não é <br>necessário colocar “e” (and) entre centenas, dezenas e <br>unidades, como em português: mil, novecentos e trinta e <br>oito). <br> <br>OBSERVAÇÃO <br>55 <br>a) <br>b) <br>c) <br>d) <br>e) <br> <br> <br> <br> <br> <br> <br>Usamos os números ordinais para falar sobre datas, andares em prédios, etc. <br> <br>1st first 40th fortieth <br>2nd second 50th fiftieth <br>3rd third 60th sixtieth <br>4th fourth 70th seventieth <br>5th fifth 80th eightieth <br>6th sixth 90th ninetieth <br>7th seventh 100th one hundredth <br>8th eighth 110th one hundred and <br>tenth 9th ninth <br>10 th tenth 200th two hundredth <br>11th eleventh 500 th five hundredth <br>12th twelfth 1000 th one thousandth <br>13th thirteenth 100,000 th one hundred <br>thousandth 14th fourteenth <br>15th fifteenth <br>16th sixteenth <br>17th seventeenth <br>18th eighteenth <br>19 th nineteenth <br>20th twentieth <br>30th thirtieth <br> <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U2_L5": {
        "title": "Números Ordinais, Data, Horas",
        "unit": "UNIDADE 2 — FAZENDO PERGUNTAS PESSOAIS",
        "sentences": [
            {
                "en": "Our office is on the third floor.",
                "pt": "Nosso escritório fica no terceiro andar.",
                "missing": "third",
                "options": [
                    "third",
                    "three",
                    "thirty"
                ]
            },
            {
                "en": "The meeting starts at two o'clock.",
                "pt": "A reunião começa às duas em ponto.",
                "missing": "o'clock",
                "options": [
                    "o'clock",
                    "hours",
                    "time"
                ]
            }
        ],
        "vocab": [
            {
                "term": "First / Second / Third",
                "definition": "Primeiro / Segundo / Terceiro (números ordinais)."
            },
            {
                "term": "o'clock",
                "definition": "Termo usado para indicar horas exatas (ex: 3 o'clock)."
            },
            {
                "term": "Meeting room",
                "definition": "Sala de reunião."
            }
        ],
        "quiz": {
            "question": "Como se escreve 'quinto' em inglês ordinal?",
            "options": [
                "five",
                "fift",
                "fifth",
                "fiveth"
            ],
            "correctIndex": 2,
            "explanation": "A forma ordinal correta de 5 é fifth (5th)."
        },
        "businessContext": {
            "scenario": "Fechamento de data de assinatura de contrato comercial com cliente internacional.",
            "en": "We will sign the agreement on September tenth.",
            "pt": "Nós assinaremos o acordo em dez de setembro.",
            "missing": "tenth",
            "options": [
                "tenth",
                "ten",
                "tenty"
            ],
            "terms": [
                {
                    "term": "Agreement",
                    "definition": "Acordo comercial ou memorando de entendimento."
                },
                {
                    "term": "Quarter",
                    "definition": "Trimestre comercial (Q1, Q2, Q3, Q4)."
                }
            ],
            "quiz": {
                "question": "Como agendar um call de fechamento para às 3 da tarde em ponto?",
                "options": [
                    "The call is 3 hours p.m.",
                    "The call is at 3 hour.",
                    "The call is on 3 p.m.",
                    "The call is at 3 o'clock p.m."
                ],
                "correctIndex": 3,
                "explanation": "Usamos 'at' antes de horas e 'o'clock' para horas cheias: 'at 3 o'clock'."
            }
        },
        "rawText": " 55 \na)  \nb)  \nc)  \nd)  \ne)  \n \n \n \n \n \n \nUsamos os números ordinais para falar sobre datas, andares em prédios, etc.  \n  \n1st  first 40th  fortieth \n2nd second 50th  fiftieth \n3rd  third 60th  sixtieth \n4th  fourth 70th  seventieth \n5th  fifth 80th  eightieth \n6th  sixth 90th  ninetieth \n7th  seventh 100th  one hundredth \n8th  eighth 110th  one hundred and \ntenth 9th  ninth \n10 th  tenth 200th  two hundredth \n11th  eleventh 500 th  five hundredth \n12th  twelfth 1000 th  one thousandth \n13th  thirteenth 100,000 th  one hundred \nthousandth 14th  fourteenth \n15th  fifteenth  \n16th  sixteenth  \n17th  seventeenth  \n18th  eighteenth  \n19 th  nineteenth  \n20th twentieth \n30th thirtieth \n \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 5: Números Ordinais. Data. Horas. \nNúmeros Ordinais (Ordinal Numbers) \n \n 56 \n \n \n \n \n \n \n \n \n \n \n \n \n45 – Classifique os números abaixo em Cardinal ou Ordinal. \n \neight – seventeenth – twenty-first – two – sixth – twenty-eighth – ninth – thirty – \nsecond – fifteen – twentieth – third. \n \nCardinal:  \nOrdinal:  \n \n46 – Você trabalha em um escritório que fica em um edifício  empresarial. No elevador, \nalgumas pessoas te pedem informação sobre o andar em que ficam determinadas  \nempresas. Escreva os andares indicados abaixo, em inglês:   \n \na) 1º  \nb) 11º  \nc) 15º  \nd) 3º  \n \n \n \n \nWhat time is it? / What’s the time? / Do you have the time? \nIt's six forty-five. (6:45). \n \nEXERCÍCIOS \nOBSERVAÇÃO \n \nEm números compostos, somente a unidade é escrita em ordinal. \nExemplos:  \n21 = twenty-first  \n32 = thirty-second \n \n \nComo perguntar e dizer as horas \n \n 57 \nExistem várias maneiras de dizer as horas, algumas coincidem com a forma de se dizer em \nportuguês, outras não. Veja: \n \n \n \n08:00 – It’s eight. / It’s eight o’clock / It’s eight sharp / It’s eight p.m. ou a.m. \n12: 00 – It’s twelve. / It’s twelve o’clock / It’s twelve sharp. / It’s midday.  It’s noon / it’s \nmidnight. \n \n \n \nNão se usa “e” entre as horas e os minutos. \n7:10 – It’s seven ten. \n09:20 – It’s nine twenty.  \n05:30 – It’s five thirty / thirty minutes past/after five. \n \nInformações importantes \na) É comum acrescentar um “oh” antes de números de minutos de 1 a 9. \n05:02 – It’s five-oh-two. \n05:08 – It’s five-oh-eight. \n \nb) É usual dizer “os minutos que se passaram após a hora”. \n10:15 – It’s fifteen after (past) ten.  \n \nc) Usa-se a expressão “a quarter” para referir-se a 15 minutos. \n11:15 – It’s a quarter past (after) eleven.  \n \nd) Geralmente, passados mais de 30 minutos, é comum dizer os minutos que faltam para \na próxima hora. \n11:45 – It’s fifteen (a quarter) to eleven. \nHoras exatas \nHoras e minutos \n \n 58 \n \n \n \n \n \n \nSituação: Dois colegas se encontram e um está atrasado para sua aula: \n \nMartin:  Hello, friend. What are you doing here? \nRoy:    I have History class now. \nMartin:   How do you like it? \nRoy:   It’s good. What time is it? \nMartin:  It’s 07:45. \nRoy:   Wow, I’m late. I have class at 07:40. Bye. \nMartin:   Bye. Have a nice class! \n \n  \n \nFonte: https://static.hostaud.com/images/bi/curso/basico/semana01/licao01/time-clock.jpg \nRESUMINDO \n \nDIÁLOGO \n \n 59 \n \n \n \n \n47 – Escreva corretamente, em inglês, as horas indicadas.  \n \na) 10:30  \n \nb) 4:25  \n \nc) 6:10  \n \nd) 9:45  \n \n \n48 – Observe as horas informadas abaixo e coloque, em números, como se fosse um \nrelógio digital, a hora correspondente. \nExemplo:  It’s five to three: 2:55 \n \na) It’s a quarter to four:  \nb) It’s ten to three:  \nc) It’s half-past one:  \nd) It’s nine ten  \ne) It’s a quarter after twelve:  \nf) It’s eight twenty-five:  \n \n  \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 5: Números Ordinais. Data. Horas. <br>Números Ordinais (Ordinal Numbers)",
        "reconstructed_dialogue": "Situação: Dois colegas se encontram e um está atrasado para sua aula: <br> <br>Martin: Hello, friend. What are you doing here? <br>Roy: I have History class now. <br>Martin: How do you like it? <br>Roy: It’s good. What time is it? <br>Martin: It’s 07:45. <br>Roy: Wow, I’m late. I have class at 07:40. Bye. <br>Martin: Bye. Have a nice class! <br> <br> <br> <br>Fonte: https://static.hostaud.com/images/bi/curso/basico/semana01/licao01/time-clock.jpg <br>RESUMINDO <br> <br>DIÁLOGO <br>47 – Escreva corretamente, em inglês, as horas indicadas. <br> <br>a) 10:30 <br> <br>b) 4:25 <br> <br>c) 6:10 <br> <br>d) 9:45 <br> <br> <br>48 – Observe as horas informadas abaixo e coloque, em números, como se fosse um <br>relógio digital, a hora correspondente. <br>Exemplo: It’s five to three: 2:55 <br> <br>a) It’s a quarter to four: <br>b) It’s ten to three: <br>c) It’s half-past one: <br>d) It’s nine ten <br>e) It’s a quarter after twelve: <br>f) It’s eight twenty-five:",
        "reconstructed_exercises": "45 – Classifique os números abaixo em Cardinal ou Ordinal. <br> <br>eight – seventeenth – twenty-first – two – sixth – twenty-eighth – ninth – thirty – <br>second – fifteen – twentieth – third. <br> <br>Cardinal: <br>Ordinal: <br> <br>46 – Você trabalha em um escritório que fica em um edifício empresarial. No elevador, <br>algumas pessoas te pedem informação sobre o andar em que ficam determinadas <br>empresas. Escreva os andares indicados abaixo, em inglês: <br> <br>a) 1º <br>b) 11º <br>c) 15º <br>d) 3º <br> <br> <br> <br> <br>What time is it? / What’s the time? / Do you have the time? <br>It's six forty-five. (6:45). <br> <br>EXERCÍCIOS <br>OBSERVAÇÃO <br> <br>Em números compostos, somente a unidade é escrita em ordinal. <br>Exemplos: <br>21 = twenty-first <br>32 = thirty-second <br> <br> <br>Como perguntar e dizer as horas <br>Existem várias maneiras de dizer as horas, algumas coincidem com a forma de se dizer em <br>português, outras não. Veja: <br> <br> <br> <br>08:00 – It’s eight. / It’s eight o’clock / It’s eight sharp / It’s eight p.m. ou a.m. <br>12: 00 – It’s twelve. / It’s twelve o’clock / It’s twelve sharp. / It’s midday. It’s noon / it’s <br>midnight. <br> <br> <br> <br>Não se usa “e” entre as horas e os minutos. <br>7:10 – It’s seven ten. <br>09:20 – It’s nine twenty. <br>05:30 – It’s five thirty / thirty minutes past/after five. <br> <br>Informações importantes <br>a) É comum acrescentar um “oh” antes de números de minutos de 1 a 9. <br>05:02 – It’s five-oh-two. <br>05:08 – It’s five-oh-eight. <br> <br>b) É usual dizer “os minutos que se passaram após a hora”. <br>10:15 – It’s fifteen after (past) ten. <br> <br>c) Usa-se a expressão “a quarter” para referir-se a 15 minutos. <br>11:15 – It’s a quarter past (after) eleven. <br> <br>d) Geralmente, passados mais de 30 minutos, é comum dizer os minutos que faltam para <br>a próxima hora. <br>11:45 – It’s fifteen (a quarter) to eleven. <br>Horas exatas <br>Horas e minutos <br>60 <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> Her name’s Mary and her surname/last name is Brown. (O <br>nome dela é Mary e o sobrenome é Brown) <br> My sister is 23 (years old). (Minha irmã tem 23 anos de <br>idade) <br> Nick’s birthday is in May. (O aniversário de Nick é em <br>maio) <br> Peter’s e-mail address is … (O e-mail de Peter é…) <br> Lucy is Spanish and her husband is Italian. (Lucy é <br>espanhola e o marido dela é italiano) <br> Monica is from Japan. (Monica é do Japão) <br> Susan father’s name is Paul. (O nome do pai de Susan é <br>Paul) <br> Mike’s address is Jhoan Bird Avenue, New View District, apartment 10. (O <br>endereço de Maike é Avenida Jhoan Bird, Distrito/Bairro New View, apartamento <br>10) <br> What’s her (first / last) name? (Qual é o nome / sobrenome dela?) <br> How old is he? (Qual a idade dele?) <br> When is his birthday? (Quando é o aniversário dele?) <br> What are their email addresses? (Quais os endereços de e-mail deles?) <br> What nationality is she? What’s her nationality? (Qual a nacionalidade dela?) <br> Where are they from? (De onde eles são?) <br> What’s her father’s / mother’s name? (Qual o nome do pai/mãe dela?) <br> What’s his address? (Qqual o endereço dele?) <br> Is Paula Brazilian? (Paula é brasileira?) <br> <br>PERGUNTAS PESSOAIS <br>SOBRE TERCEIROS <br>créditos: Paint by Number <br>2020."
    },
    "U3_L1": {
        "title": "Adjetivos Possessivos",
        "unit": "UNIDADE 3 — PERGUNTAS PESSOAIS SOBRE TERCEIROS",
        "sentences": [
            {
                "en": "Our company has new sales targets.",
                "pt": "Nossa empresa tem novas metas de vendas.",
                "missing": "Our",
                "options": [
                    "Our",
                    "We",
                    "Ours"
                ]
            },
            {
                "en": "Their office is in Chicago.",
                "pt": "O escritório deles é em Chicago.",
                "missing": "Their",
                "options": [
                    "Their",
                    "They",
                    "Theirs"
                ]
            }
        ],
        "vocab": [
            {
                "term": "My / Your",
                "definition": "Meu / Seu (adjetivos possessivos que acompanham substantivo)."
            },
            {
                "term": "Our / Their",
                "definition": "Nosso / Deles (adjetivos possessivos)."
            },
            {
                "term": "Sales targets",
                "definition": "Metas de vendas estabelecidas."
            }
        ],
        "quiz": {
            "question": "Qual adjetivo possessivo completa a frase: 'This is _____ boss, Mr. Green.'?",
            "options": [
                "my",
                "I",
                "mine",
                "me"
            ],
            "correctIndex": 0,
            "explanation": "Adjetivos possessivos precedem substantivos: 'my boss'."
        },
        "businessContext": {
            "scenario": "Apresentando portfólio de produtos e indicando posse de marcas comerciais.",
            "en": "We must highlight our brand features to the client.",
            "pt": "Nós devemos destacar as características da nossa marca para o cliente.",
            "missing": "our",
            "options": [
                "our",
                "ours",
                "us"
            ],
            "terms": [
                {
                    "term": "Brand features",
                    "definition": "Diferenciais competitivos ou características da marca."
                },
                {
                    "term": "Market share",
                    "definition": "Fatia de mercado que a empresa ocupa."
                }
            ],
            "quiz": {
                "question": "Como se diz 'a meta comercial deles'?",
                "options": [
                    "Them commercial target",
                    "Theirs commercial target",
                    "Their commercial target",
                    "They commercial target"
                ],
                "correctIndex": 2,
                "explanation": "Usamos o possessivo 'Their' antes do substantivo."
            }
        },
        "rawText": " 60 \n \n \n \n \n \n \n \n \n \n \n Her name’s Mary and her surname/last name is Brown. (O \nnome dela é Mary e o sobrenome é Brown) \n My sister is 23 (years old). (Minha irmã tem 23 anos de \nidade)   \n Nick’s birthday is in May. (O aniversário de Nick é em \nmaio) \n Peter’s e-mail address is … (O e-mail de Peter é…) \n Lucy is Spanish and her husband is Italian. (Lucy é \nespanhola e o marido dela é italiano) \n Monica is from Japan. (Monica é do Japão) \n Susan father’s name is Paul. (O nome do pai de Susan é \nPaul) \n Mike’s address is Jhoan Bird Avenue, New View District, apartment 10. (O \nendereço de Maike é Avenida Jhoan Bird, Distrito/Bairro New View, apartamento \n10)  \n What’s her (first / last) name? (Qual é o nome / sobrenome dela?) \n How old is he? (Qual a idade dele?) \n When is his birthday?  (Quando é o aniversário dele?) \n What are their email addresses?  (Quais os endereços de e-mail deles?) \n What nationality is she? What’s her nationality?  (Qual a nacionalidade dela?) \n Where are they from?  (De onde eles são?) \n What’s her father’s / mother’s name? (Qual o nome do pai/mãe dela?) \n What’s his address?  (Qqual o endereço dele?) \n Is Paula Brazilian?  (Paula é brasileira?) \n \nPERGUNTAS PESSOAIS \nSOBRE TERCEIROS \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 1: Falando e perguntando sobre terceiros. \nAdjetivos Possessivos. \n \n \n \n \n \n \n 61 \nAs palavras destacadas nas frases acima (her, his, their) são  Adjetivos Possessivos \n(Possessive Adjectives) e são usados para estabelecer sentido de posse.  Apesar de não \nterem essa nomenclatura em português, eles são classificados assim em inglês porque  \nacompanham um substantivo, diferenciando -se dos Pronomes Possessivos que, por sua \nvez, têm a função de substituir o substantivo, como veremos à frente. \n \n \n \nMy - meu, meus, minha, minhas \nYour - seu, sua \nHis - dele \nHer - dela \nIts - dele, dela (coisas ou animais) \nOur - nosso, nossos \nYour - seus, suas \nTheir - deles, delas \n \nExemplos: \nMy cat ran away. \nOur English book is very interesting. \nTheir passport is not valid. \nYour bag is big. \nMy dog eats all its food. \n \n \n \n \n \nSituação: Adam está concorrendo a uma vaga de estágio na faculdade e tem que \nresponder algumas perguntas sobre seus pais em uma entrevista: \n \nEntrevistador:  So, you’re not from here, but are your parents American? \nAdam:   Yes, they are. \nEntrevistador:  Where are they from? \nAdam:   They’re from Alabama. \nEntrevistador:  What’s your mother’s name? \nDIÁLOGO \n \nAdjetivos Possessivos (Possessive Adjectives \n 62 \nAdam:   It’s Megan Clark. \nEntrevistador:  When is her birthday? \nAdam:   It’s on October 30th. \nEntrevistador:   Is your father a teacher? \nAdam:   Yes, he is. \nEntrevistador:   What’s his name? \nAdam:   Andrew Macready \nEntrevistador:  How old is he? \nAdam:   He is 48. \n[…] \n \n \n \n \n \n \n49 – (Instituto Machado de Assis – adaptada): em quais frases os adjetivos possessivos \nforam usados? Escolha a alternativa correta.  \n \nI. He lives with his parents.  a) (   ) I and III \nII. They are going to wash their hands.  b) (   ) II and IV \nIII. We are going to sell our house.  c) (   ) I and IV \nIV. Do you like your job?   d) (   ) All alternatives are correct \n \n50 – (FUMARC - adaptada): O melhor adjetivo possessivo para completar esta frase: “the \nuse of chemicals and ______ impact on the environment are phenomenal” é: \n \na) (   ) Our \nb) (   ) Your \nc) (   ) Her \nd) (   ) His \ne) (   ) Its \n \n51 – Escreva um pequeno texto apresentando seu / sua melhor amigo(a), com as seguintes \ninformações: nome; onde mora; onde estuda, onde trabalha; de onde é; a nacionalidade; \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 1: Falando e perguntando sobre terceiros. <br>Adjetivos Possessivos. <br>As palavras destacadas nas frases acima (her, his, their) são Adjetivos Possessivos <br>(Possessive Adjectives) e são usados para estabelecer sentido de posse. Apesar de não <br>terem essa nomenclatura em português, eles são classificados assim em inglês porque <br>acompanham um substantivo, diferenciando -se dos Pronomes Possessivos que, por sua <br>vez, têm a função de substituir o substantivo, como veremos à frente. <br> <br> <br> <br>My - meu, meus, minha, minhas <br>Your - seu, sua <br>His - dele <br>Her - dela <br>Its - dele, dela (coisas ou animais) <br>Our - nosso, nossos <br>Your - seus, suas <br>Their - deles, delas <br> <br>Exemplos: <br>My cat ran away. <br>Our English book is very interesting. <br>Their passport is not valid. <br>Your bag is big. <br>My dog eats all its food.",
        "reconstructed_dialogue": "Situação: Adam está concorrendo a uma vaga de estágio na faculdade e tem que <br>responder algumas perguntas sobre seus pais em uma entrevista: <br> <br>Entrevistador: So, you’re not from here, but are your parents American? <br>Adam: Yes, they are. <br>Entrevistador: Where are they from? <br>Adam: They’re from Alabama. <br>Entrevistador: What’s your mother’s name? <br>DIÁLOGO <br> <br>Adjetivos Possessivos (Possessive Adjectives <br>Adam: It’s Megan Clark. <br>Entrevistador: When is her birthday? <br>Adam: It’s on October 30th. <br>Entrevistador: Is your father a teacher? <br>Adam: Yes, he is. <br>Entrevistador: What’s his name? <br>Adam: Andrew Macready <br>Entrevistador: How old is he? <br>Adam: He is 48. <br>[…]",
        "reconstructed_exercises": "49 – (Instituto Machado de Assis – adaptada): em quais frases os adjetivos possessivos <br>foram usados? Escolha a alternativa correta. <br> <br>I. He lives with his parents. a) ( ) I and III <br>II. They are going to wash their hands. b) ( ) II and IV <br>III. We are going to sell our house. c) ( ) I and IV <br>IV. Do you like your job? d) ( ) All alternatives are correct <br> <br>50 – (FUMARC - adaptada): O melhor adjetivo possessivo para completar esta frase: “the <br>use of chemicals and ______ impact on the environment are phenomenal” é: <br> <br>a) ( ) Our <br>b) ( ) Your <br>c) ( ) Her <br>d) ( ) His <br>e) ( ) Its <br> <br>51 – Escreva um pequeno texto apresentando seu / sua melhor amigo(a), com as seguintes <br>informações: nome; onde mora; onde estuda, onde trabalha; de onde é; a nacionalidade;<br>quantos irmãos ou irmãs tem; o estado civil; a idade; quem são os pais; qual a cor favorita; <br>características físicas e de personalidade. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>I am not (I’m not) Eu não sou / estou <br>You are not (You’re not / You aren’t) Você não é / está <br>He is not (He’s not / He isn’t) Ele não é / está <br>She is not (She’s not / She isn’t) Ela não é / está <br>It is not (It’s not / It isn’t) Ele, ela não é / está <br>We are not (We’re not / We aren’t) Nós não somos / estamos <br>You are not (You’re not / You aren’t) Vocês não são / estão <br>They are not (They’re not / They aren’t) Eles - elas não são / estão <br> <br>Exemplos: <br>We are not Brazilian. <br>My father is not a teacher. <br>He is not my friend. <br>She is not my sister. <br>They are not engineers. <br> <br> <br> <br>Assim como os Adjetivos Possessivos, o s Pronomes P ossessivos também expressam <br>sentido de posse, mas substituindo substantivos já mencionados na frase. São eles <br> <br>Mine – meu, meus, minha, minhas <br>Yours – seu, sua"
    },
    "U3_L2": {
        "title": "To Be Negativo, Pronomes Possessivos",
        "unit": "UNIDADE 3 — PERGUNTAS PESSOAIS SOBRE TERCEIROS",
        "sentences": [
            {
                "en": "This commercial plan is not ours.",
                "pt": "Este plano comercial não é nosso.",
                "missing": "ours",
                "options": [
                    "ours",
                    "our",
                    "us"
                ]
            },
            {
                "en": "The final decision is theirs.",
                "pt": "A decisão final é deles.",
                "missing": "theirs",
                "options": [
                    "theirs",
                    "their",
                    "them"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Ours / Theirs",
                "definition": "Nosso / Deles (pronomes possessivos que substituem substantivo)."
            },
            {
                "term": "Mine / Yours",
                "definition": "Meu / Seu (pronomes possessivos)."
            },
            {
                "term": "Decision",
                "definition": "Decisão estratégica."
            }
        ],
        "quiz": {
            "question": "Qual a diferença de 'my' e 'mine'?",
            "options": [
                "'my' é usado por homens e 'mine' por mulheres.",
                "Não há diferença.",
                "'my' é formal e 'mine' é informal.",
                "'my' acompanha o substantivo e 'mine' o substitui."
            ],
            "correctIndex": 3,
            "explanation": "'my' exige substantivo (my car), 'mine' substitui o substantivo (this is mine)."
        },
        "businessContext": {
            "scenario": "Reunião de conciliação de termos contratuais e direitos de propriedade intelectual.",
            "en": "The intellectual property is theirs, not ours.",
            "pt": "A propriedade intelectual é deles, não nossa.",
            "missing": "theirs",
            "options": [
                "theirs",
                "their",
                "them"
            ],
            "terms": [
                {
                    "term": "Intellectual property",
                    "definition": "Direito sobre criações e patentes industriais."
                },
                {
                    "term": "Not ours",
                    "definition": "Expressão indicando exclusão de direitos da empresa."
                }
            ],
            "quiz": {
                "question": "Como você afirma em um contrato que o projeto não é de sua empresa?",
                "options": [
                    "The project is not ours.",
                    "The project is not our.",
                    "The project is not us.",
                    "The project is not we."
                ],
                "correctIndex": 0,
                "explanation": "Usamos o pronome possessivo final 'ours' após o verbo."
            }
        },
        "rawText": " 63 \nquantos irmãos ou irmãs tem; o estado civil; a idade; quem são os pais; qual a cor favorita; \ncaracterísticas físicas e de personalidade. \n \n \n \n \n \n \n \n \n \n \nI am not (I’m not)  Eu não sou / estou \nYou are not (You’re not / You aren’t)  Você não é / está \nHe is not (He’s not / He isn’t)  Ele não é / está \nShe is not (She’s not / She isn’t)  Ela não é / está \nIt is  not (It’s not / It isn’t)  Ele, ela não é / está \nWe are not (We’re not / We aren’t)  Nós não somos / estamos \nYou are not (You’re not / You aren’t)  Vocês não são / estão \nThey are not (They’re not / They aren’t)  Eles - elas não são / estão \n \nExemplos: \nWe are not Brazilian. \nMy father is not a teacher. \nHe is not my friend. \nShe is not my sister. \nThey are not engineers. \n \n \n \nAssim como os Adjetivos Possessivos, o s Pronomes P ossessivos também expressam \nsentido de posse, mas substituindo substantivos já mencionados na frase. São eles \n \nMine – meu, meus, minha, minhas \nYours – seu, sua \nLIÇÃO 2: To Be Verb no presente – forma negativa. \nPronomes Possessivos. \n \n \n \n \n \n \nTo Be Verb (Present – negative form) = Verbo Ser / Estar \nno Presente do Indicativo (forma negativa).  \n \nPronomes Possessivos (Possessive Pronouns) \n 64 \nHis – dele, dele \nHers – dela \nIts – dele, dela (coisas ou animais) \nOurs – nosso, nossos \nYours – seus, suas \nTheirs – deles, delas \n \nExemplos: \n* I have my bike and she has hers. (her bike) = Eu tenho minha bicicleta e ela tem a dela. \n* Give me your books and I give you mine (my book) = Dê-me seu livro e eu lhe dou os \nmeus. \n* His car is green, hers is pink. (her car). = O carro dele é verde, o dela é rosa. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nSituação: Jimmy precisa falar com Alex, mas ele não atende ao telefone. Quando \nfinalmente consegue encontrá-lo, eles conversam:  \n \nJimmy:  Hey, guy, are you at home? \nAlex:    Hello. No, I’m not at home. I’m at Ginna’s.  \nJimmy:  Is her sister at home with you? \nAlex:   No, she isn’t. She’s out with your friend Jeremy. \nJimmy:  He is not my friend. \nAlex:   I need your book to study for the test tomorrow. \nA tradução dos Pronomes Possessivos varia em português de acordo com o \ncontexto, dependendo do número e gênero do substantivo que está sendo \nsubstituído. Nesse caso, é preciso acrescentar artigos indefinidos com função de \npronome (o, a, os, as), como mostrado nos exemplos acima. \nOBSERVAÇÃO \n \nDIÁLOGO \n \n 65 \nJimmy:  My book? Where is yours? \nAlex:   I can’t find it! \n[…] \n \n \n \n \n \n \n \n52 – (FURB – adaptada): Marque a sequência que completa corretamente a frase: \n_______ dog is brown, _______ is caramel. \n \na) (   ) His - my b) (   ) It – mine c) (   ) Yours – hers \nd) (   ) Ours – theirs e) (   ) Our - hers    \n \n53 – (Instituto Machado de Assis – adaptada): Complete a frase abaixo com o A djetivo \nPossessivo correto: \n_______ friends John and Phillip are coming to visit us. \n \na) (   ) Yours. b) (   ) Theirs. c) (   ) Our. \nd) (   ) Mine.       \n \n54 – (CONPASS – adaptada): Marque a sequência que completa corretamente a frase: \nIf you lend me ______ book, I can lend you ________. \n \na) (   ) yours – my b) (   ) your – my c) (   ) yours – mine \nd) (   ) mine – your e) (   ) your – mine    \n \n55 – (CONPASS – adaptada): Marque a sequência que completa corretamente a frase: \nThese are not _____ glasses. Are they ______, John? \n \na) (   ) my; yours b) (   ) my; your c) (   ) mine; yours \nd) (   ) mine; your e) (   ) their; your.    \n \n  \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 2: To Be Verb no presente – forma negativa. <br>Pronomes Possessivos. <br> <br> <br> <br> <br> <br> <br>To Be Verb (Present – negative form) = Verbo Ser / Estar <br>no Presente do Indicativo (forma negativa). <br> <br>Pronomes Possessivos (Possessive Pronouns) <br>His – dele, dele <br>Hers – dela <br>Its – dele, dela (coisas ou animais) <br>Ours – nosso, nossos <br>Yours – seus, suas <br>Theirs – deles, delas <br> <br>Exemplos: <br>* I have my bike and she has hers. (her bike) = Eu tenho minha bicicleta e ela tem a dela. <br>* Give me your books and I give you mine (my book) = Dê-me seu livro e eu lhe dou os <br>meus. <br>* His car is green, hers is pink. (her car). = O carro dele é verde, o dela é rosa.",
        "reconstructed_dialogue": "Situação: Jimmy precisa falar com Alex, mas ele não atende ao telefone. Quando <br>finalmente consegue encontrá-lo, eles conversam: <br> <br>Jimmy: Hey, guy, are you at home? <br>Alex: Hello. No, I’m not at home. I’m at Ginna’s. <br>Jimmy: Is her sister at home with you? <br>Alex: No, she isn’t. She’s out with your friend Jeremy. <br>Jimmy: He is not my friend. <br>Alex: I need your book to study for the test tomorrow. <br>A tradução dos Pronomes Possessivos varia em português de acordo com o <br>contexto, dependendo do número e gênero do substantivo que está sendo <br>substituído. Nesse caso, é preciso acrescentar artigos indefinidos com função de <br>pronome (o, a, os, as), como mostrado nos exemplos acima. <br>OBSERVAÇÃO <br> <br>DIÁLOGO <br>Jimmy: My book? Where is yours? <br>Alex: I can’t find it! <br>[…]",
        "reconstructed_exercises": "52 – (FURB – adaptada): Marque a sequência que completa corretamente a frase: <br>_______ dog is brown, _______ is caramel. <br> <br>a) ( ) His - my b) ( ) It – mine c) ( ) Yours – hers <br>d) ( ) Ours – theirs e) ( ) Our - hers <br> <br>53 – (Instituto Machado de Assis – adaptada): Complete a frase abaixo com o A djetivo <br>Possessivo correto: <br>_______ friends John and Phillip are coming to visit us. <br> <br>a) ( ) Yours. b) ( ) Theirs. c) ( ) Our. <br>d) ( ) Mine. <br> <br>54 – (CONPASS – adaptada): Marque a sequência que completa corretamente a frase: <br>If you lend me ______ book, I can lend you ________. <br> <br>a) ( ) yours – my b) ( ) your – my c) ( ) yours – mine <br>d) ( ) mine – your e) ( ) your – mine <br> <br>55 – (CONPASS – adaptada): Marque a sequência que completa corretamente a frase: <br>These are not _____ glasses. Are they ______, John? <br> <br>a) ( ) my; yours b) ( ) my; your c) ( ) mine; yours <br>d) ( ) mine; your e) ( ) their; your.<br>Os Prono mes Reflexivos (Reflexive Pronouns) remetem ao <br>sujeito que praticou determinada ação e fazem a concordância <br>de número com ele. São derivados dos Pronomes Pessoais <br>(Sujeito) e são marcados pela terminação ‘self’, quando o <br>sujeito está no singular, e ‘selves’, quando o sujeito está no <br>plural. <br> <br> <br> <br> <br> <br>Personal Pronouns Reflexive Pronouns Tradução <br>I Myself me, a mim mesmo(a) <br>You Yourself te, se, a ti, a você mesmo(a) <br>He Himself se, a si, a ele mesmo <br>She Herself se, a si, a ela mesma <br>It Itself se, a si mesmo(a) <br>We Ourselves nos, a nós mesmos(as) <br>You Yourselves se, a vocês mesmos(as) <br>They Themselves se, a eles mesmos, a elas mesmas <br> <br>Veja os contextos mais comuns em que estes pronomes são usados: <br>a) O sujeito recebe os efeitos da própria ação: <br>Exemplo: <br>He cut himself (ele se cortou). <br>b) A ênfase da ação está no sujeito que a executou. <br>Exemplo: <br>She herself cooked the dinner. (Ela mesma fez o jantar) <br> <br>c) O sujeito se destaca por ter praticado a ação sozinho. <br>Exemplo: <br>They cleaned the house by themselves. (Eles limparam a casa sozinhos) <br> <br>créditos: Paint by Number <br>2020."
    },
    "U3_L3": {
        "title": "Pronomes Reflexivos",
        "unit": "UNIDADE 3 — PERGUNTAS PESSOAIS SOBRE TERCEIROS",
        "sentences": [
            {
                "en": "The director signed the contract himself.",
                "pt": "O diretor assinou o contrato ele mesmo.",
                "missing": "himself",
                "options": [
                    "himself",
                    "herself",
                    "myself"
                ]
            },
            {
                "en": "We managed the client setup ourselves.",
                "pt": "Nós mesmos gerenciamos a configuração do cliente.",
                "missing": "ourselves",
                "options": [
                    "ourselves",
                    "themselves",
                    "yourselves"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Himself / Herself",
                "definition": "Ele mesmo / Ela mesma."
            },
            {
                "term": "Ourselves",
                "definition": "Nós mesmos."
            },
            {
                "term": "Manage",
                "definition": "Gerenciar ou controlar."
            }
        ],
        "quiz": {
            "question": "Qual pronome reflexivo concorda com 'They'?",
            "options": [
                "yourselves",
                "himself",
                "themselves",
                "ourselves"
            ],
            "correctIndex": 2,
            "explanation": "O reflexivo de 'They' é 'themselves'."
        },
        "businessContext": {
            "scenario": "Apresentando a eficiência de uma ferramenta de autoatendimento para clientes (Self-Service).",
            "en": "Clients can customize the dashboard themselves.",
            "pt": "Os clientes podem customizar o painel eles mesmos.",
            "missing": "themselves",
            "options": [
                "themselves",
                "himself",
                "ourselves"
            ],
            "terms": [
                {
                    "term": "Customize",
                    "definition": "Personalizar ou adaptar às necessidades específicas."
                },
                {
                    "term": "Self-service portal",
                    "definition": "Portal eletrônico onde o cliente executa ações sozinho."
                }
            ],
            "quiz": {
                "question": "Como descrever que o cliente gerencia suas compras sozinho?",
                "options": [
                    "The client manages purchases ourselves.",
                    "The client manages purchases himself.",
                    "The client manages purchases myself.",
                    "The client manages purchases itself."
                ],
                "correctIndex": 1,
                "explanation": "'himself' (ou 'herself'/'itself' se corporativo) concorda com o sujeito 'the client'."
            }
        },
        "rawText": " 66 \n \n \nOs Prono mes Reflexivos (Reflexive Pronouns)  remetem ao \nsujeito que praticou determinada ação e fazem a concordância \nde número com ele. São derivados dos Pronomes Pessoais  \n(Sujeito) e são marcados pela terminação  ‘self’, quando o \nsujeito está no singular, e ‘selves’, quando o sujeito está no \nplural.  \n \n \n \n \n \nPersonal Pronouns Reflexive Pronouns Tradução \nI Myself  me, a mim mesmo(a) \nYou Yourself  te, se, a ti, a você mesmo(a) \nHe Himself  se, a si, a ele mesmo \nShe Herself  se, a si, a ela mesma \nIt Itself  se, a si mesmo(a) \nWe Ourselves  nos, a nós mesmos(as) \nYou Yourselves  se, a vocês mesmos(as) \nThey Themselves  se, a eles mesmos, a elas mesmas \n \nVeja os contextos mais comuns em que estes pronomes são usados: \na) O sujeito recebe os efeitos da própria ação: \nExemplo: \nHe cut himself (ele se cortou). \nb) A ênfase da ação está no sujeito que a executou. \nExemplo: \nShe herself cooked the dinner. (Ela mesma fez o jantar) \n \nc) O sujeito se destaca por ter praticado a ação sozinho. \nExemplo: \nThey cleaned the house by themselves. (Eles limparam a casa sozinhos) \n  \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 3: Pronomes Reflexivos \n \n \n \n \n \n \n 67 \n \n \n \nSituação: Brandon e Victoria estão testando umas receitas culinárias quando de repente... \n \nBrandon:  Ouch!! I cut myself... \nVictoria:  God, let me see it… \nBrandon:  Nothing much… \nVictoria:  You need to take care of yourself… \nBrandon:  I know, but… \nVictoria:  My mother always protects herself with a glove in the kitchen. \nBrandon:  Yes, and she should. A knife itself is always a dangerous stuff. \n[…] \n \n \n \n \n \n \n \n56 – Escreva o Pronome Reflexivo correto para completar cada frase: \n \na) The cat nearly killed  when it ran across the road. \nb) I enjoyed  at the party. \nc) He always looks at  in the mirror. \nd) We helped  to the coffee. \ne) The woman accidentally hurt  with the knife. \nf) The children enjoyed  at the beach. \n \n57 – (NUCEPE – adaptada): Marque a alternativa que completa as frases com os Pronomes \nReflexivos corretos. \n \n1. Carol can’t wash  if she doesn’t have any water. \n2. The children  built the doghouse. \n3. The boy cut  with a knife last night \n \nDIÁLOGO \n \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 3: Pronomes Reflexivos",
        "reconstructed_dialogue": "Situação: Brandon e Victoria estão testando umas receitas culinárias quando de repente... <br> <br>Brandon: Ouch!! I cut myself... <br>Victoria: God, let me see it… <br>Brandon: Nothing much… <br>Victoria: You need to take care of yourself… <br>Brandon: I know, but… <br>Victoria: My mother always protects herself with a glove in the kitchen. <br>Brandon: Yes, and she should. A knife itself is always a dangerous stuff. <br>[…]",
        "reconstructed_exercises": "56 – Escreva o Pronome Reflexivo correto para completar cada frase: <br> <br>a) The cat nearly killed when it ran across the road. <br>b) I enjoyed at the party. <br>c) He always looks at in the mirror. <br>d) We helped to the coffee. <br>e) The woman accidentally hurt with the knife. <br>f) The children enjoyed at the beach. <br> <br>57 – (NUCEPE – adaptada): Marque a alternativa que completa as frases com os Pronomes <br>Reflexivos corretos. <br> <br>1. Carol can’t wash if she doesn’t have any water. <br>2. The children built the doghouse. <br>3. The boy cut with a knife last night <br> <br>DIÁLOGO<br>a) ( ) herself / himself / himself <br>b) ( ) herself / themselves / himself <br>c) ( ) themselves / himself / herself <br>d) ( ) ourselves/ themselves / himself <br>e) ( ) herself / themselves / myself <br> <br> <br> <br> <br> <br> <br> <br>O artigo definido The significa o, a, os, as. É usado quando <br>queremos nos referir a um substantivo específico. Saberemos <br>se o artigo está no singular ou no plural, no masculino ou <br>feminino, dependendo do substantivo a que acompanha. <br> <br>Exemplos: <br>The book is open on page ten = o livro está aberto na página <br>dez. <br>The table is clean = a mesa está limpa. (refere-se àquela mesa <br>em específico). <br>The computers are out of order = os computadores não estão funcionando. <br>The girls are playing in the garden = as meninas estão brincando no jardim. <br> <br> <br> <br>Os Artigos Indefinidos A e An significam um e uma e são usados sempre com substantivos <br>no singular. Referem-se a substantivos de forma generalizada, não específica. <br>Exemplos: <br>A boy fell down the stairs = um garoto caiu da escada (qual garoto?). <br>An engineer has a good salary = um engenheiro ganha um bom salário (engenheiros, de <br>forma geral, e não apenas um). <br> <br>créditos: Paint by Number <br>2020."
    },
    "U3_L4": {
        "title": "Artigos Definido e Indefinidos",
        "unit": "UNIDADE 3 — PERGUNTAS PESSOAIS SOBRE TERCEIROS",
        "sentences": [
            {
                "en": "We need a commercial agreement.",
                "pt": "Nós precisamos de um acordo comercial.",
                "missing": "a",
                "options": [
                    "a",
                    "an",
                    "the"
                ]
            },
            {
                "en": "The CEO signed the document.",
                "pt": "O CEO assinou o documento.",
                "missing": "The",
                "options": [
                    "The",
                    "A",
                    "An"
                ]
            }
        ],
        "vocab": [
            {
                "term": "A / An",
                "definition": "Um / Uma (artigos indefinidos. 'A' antes de consoante, 'An' antes de som de vogal)."
            },
            {
                "term": "The",
                "definition": "O / A / Os / As (artigo definido)."
            },
            {
                "term": "Agreement",
                "definition": "Acordo formal."
            }
        ],
        "quiz": {
            "question": "Qual artigo indefinido usamos antes da palavra 'honest manager'?",
            "options": [
                "a",
                "an",
                "nulo",
                "the"
            ],
            "correctIndex": 1,
            "explanation": "'Honest' começa com som vocálico (o 'h' é mudo), por isso exige 'an honest manager'."
        },
        "businessContext": {
            "scenario": "Apresentando um perfil de novos investimentos em uma proposta de negócios.",
            "en": "We signed an agreement with an investment fund.",
            "pt": "Nós assinamos um acordo com um fundo de investimentos.",
            "missing": "an",
            "options": [
                "an",
                "a",
                "the"
            ],
            "terms": [
                {
                    "term": "Investment fund",
                    "definition": "Fundo de captação financeira para fins comerciais."
                },
                {
                    "term": "Strategic partner",
                    "definition": "Parceiro de negócios crucial para expansão."
                }
            ],
            "quiz": {
                "question": "Qual a alternativa gramaticalmente correta?",
                "options": [
                    "An executive office",
                    "The executive office's",
                    "A executive office",
                    "An executive offices"
                ],
                "correctIndex": 0,
                "explanation": "Usamos 'an' antes de palavras iniciadas com som de vogal: 'An executive'."
            }
        },
        "rawText": " 68 \na) (   ) herself / himself / himself \nb) (   ) herself / themselves / himself \nc) (   ) themselves / himself / herself \nd) (   ) ourselves/ themselves / himself \ne) (   ) herself / themselves / myself \n \n \n \n \n \n \n \nO artigo definido The significa o, a, os, as. É usado quando \nqueremos nos referir a um substantivo específico. Saberemos \nse o artigo está no singular ou no plural, no masculino ou \nfeminino, dependendo do substantivo a que acompanha.  \n \nExemplos: \nThe book is open on page ten = o livro está aberto na página \ndez. \nThe table is clean = a mesa está limpa. (refere-se àquela mesa \nem específico). \nThe computers are out of order = os computadores não estão funcionando. \nThe girls are playing in the garden = as meninas estão brincando no jardim. \n \n \n \nOs Artigos Indefinidos A e An significam um e uma e são usados sempre com substantivos \nno singular. Referem-se a substantivos de forma generalizada, não específica.  \nExemplos: \nA boy fell down the stairs = um garoto caiu da escada (qual garoto?). \nAn engineer has a good salary = um engenheiro ganha um bom salário (engenheiros, de \nforma geral, e não apenas um). \n  \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 4: O Artigo Definido. Os Artigos Indefinidos. \n \n \n \n \n \n \nO Artigo Definido The (Definite Article – The) \n \nOs Artigos Indefinidos A, An (The Indefinite Articles A, An) \n \n 69 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nSituação: Nicole precisa comprar materiais escolares e entrega sua lista à vendedora de \numa papelaria (Natalie). \n \nNicole: Hello, I need to buy some school supplies. \nNatalie: Hi, tell me which ones. \nNicole: A binder (fichário), adhesive tape (fita adesiva), a backpack (mochila), a \ncalculator (calculadora), a diary (agenda)... \nNatalie: Sorry, we don’t have any diary. \nNicole:  Ok. So, I’ll take a notepad (bloco de notas) instead. \nNatalie:  Yes. Here you are. Anything else? \nNicole: Yes: an English dictionary (dicionário), an eraser (borracha, apagador), a \nhighlighter (marca-texto) … \nNatalie: What color? \nNicole:  Yellow, please. \nNatalie:  Good, is that all? \nUsa-se A antes de substantivos iniciados por consoante ou som consonantal, e \npalavras iniciadas por E e U com som de “iu”.  \nExemplos: a boy (um menino), a girl (uma menina), a house (uma c asa), a dentist \n(um/a dentista) / a European man (um homem europeu) / a uniform (um uniforme). \n \nUsa-se AN antes de substantivos iniciados por vogal ou som vocálico.  \nExemplos: an hour ago (uma hora atrás) / an apple (uma maçã). \n \nUm caso especial: antes de palavras iniciadas com Y e W usa-se A (e não An).  \nExemplos:  \nA woman > a woman in the city. (uma mulher na cidade) \nA year > a year of joy. (um ano de alegria). \nREGRAS DE USO \n \nDIÁLOGO \n \n 70 \nNicole:  No. I need a map (mapa), a mechanical pencil (lapiseira), a pen (caneta), a pencil \n(lápis), a pencil case (estojo), a ruler (régua), a sharpener (apontador) and a \ntape (fita adesiva). That’s all. \n[…] \n \n  \n \n \n \n \n58 – Você está conversando com um colega sobre as profissões dos seus familiares. \nComplete as frases com A ou AN diante do nome da profissão: \n \na) My mother is  engineer. \nb) My brother is  computer programmer. \nc) My father is  dentist. \nd) My sister is  economist. \ne) My aunt Susi is  nurse. \n \n59 – (FUCAB – adaptada): Leia as frases e após marque a sequência de Artigos \nIndefinidos que completa corretamente as frases: \n \n1. English is  international language. \n2. English is  useful language. \n3. English and Spanish are  important languages nowadays. \n \na) (   ) a / a / a b) (   ) an / an / an. c) (   ) a / a / an. \nd) (   ) an / a / no article e) (   ) an / an / no article    \n \n60 – (UNIP): Marque a sequência que completa corretamente as frases: \nIt’s ________ honor to meet ________ young lady from Sweden. \n \na) (   ) a / an  b) (   ) an / an c) (   ) a / a \nd) (   ) an / a        \n \n  \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 4: O Artigo Definido. Os Artigos Indefinidos. <br> <br> <br> <br> <br> <br> <br>O Artigo Definido The (Definite Article – The) <br> <br>Os Artigos Indefinidos A, An (The Indefinite Articles A, An)",
        "reconstructed_dialogue": "Situação: Nicole precisa comprar materiais escolares e entrega sua lista à vendedora de <br>uma papelaria (Natalie). <br> <br>Nicole: Hello, I need to buy some school supplies. <br>Natalie: Hi, tell me which ones. <br>Nicole: A binder (fichário), adhesive tape (fita adesiva), a backpack (mochila), a <br>calculator (calculadora), a diary (agenda)... <br>Natalie: Sorry, we don’t have any diary. <br>Nicole: Ok. So, I’ll take a notepad (bloco de notas) instead. <br>Natalie: Yes. Here you are. Anything else? <br>Nicole: Yes: an English dictionary (dicionário), an eraser (borracha, apagador), a <br>highlighter (marca-texto) … <br>Natalie: What color? <br>Nicole: Yellow, please. <br>Natalie: Good, is that all? <br>Usa-se A antes de substantivos iniciados por consoante ou som consonantal, e <br>palavras iniciadas por E e U com som de “iu”. <br>Exemplos: a boy (um menino), a girl (uma menina), a house (uma c asa), a dentist <br>(um/a dentista) / a European man (um homem europeu) / a uniform (um uniforme). <br> <br>Usa-se AN antes de substantivos iniciados por vogal ou som vocálico. <br>Exemplos: an hour ago (uma hora atrás) / an apple (uma maçã). <br> <br>Um caso especial: antes de palavras iniciadas com Y e W usa-se A (e não An). <br>Exemplos: <br>A woman > a woman in the city. (uma mulher na cidade) <br>A year > a year of joy. (um ano de alegria). <br>REGRAS DE USO <br> <br>DIÁLOGO <br>Nicole: No. I need a map (mapa), a mechanical pencil (lapiseira), a pen (caneta), a pencil <br>(lápis), a pencil case (estojo), a ruler (régua), a sharpener (apontador) and a <br>tape (fita adesiva). That’s all. <br>[…]",
        "reconstructed_exercises": "58 – Você está conversando com um colega sobre as profissões dos seus familiares. <br>Complete as frases com A ou AN diante do nome da profissão: <br> <br>a) My mother is engineer. <br>b) My brother is computer programmer. <br>c) My father is dentist. <br>d) My sister is economist. <br>e) My aunt Susi is nurse. <br> <br>59 – (FUCAB – adaptada): Leia as frases e após marque a sequência de Artigos <br>Indefinidos que completa corretamente as frases: <br> <br>1. English is international language. <br>2. English is useful language. <br>3. English and Spanish are important languages nowadays. <br> <br>a) ( ) a / a / a b) ( ) an / an / an. c) ( ) a / a / an. <br>d) ( ) an / a / no article e) ( ) an / an / no article <br> <br>60 – (UNIP): Marque a sequência que completa corretamente as frases: <br>It’s ________ honor to meet ________ young lady from Sweden. <br> <br>a) ( ) a / an b) ( ) an / an c) ( ) a / a <br>d) ( ) an / a<br>Me – Mim, me <br>You - Te, você <br>Him – Ele, - o, lo <br>Her – Ela, - a, la <br>It – Ele/ela (coisas e animais) - lo, la <br>Us - Nós <br>You - Vós, vocês <br>Them – Eles/elas <br> <br>Exemplos: <br>She likes me. (ela gosta de mim). <br>I’d like to talk to her. (eu gostaria de falar com ela). <br>Help me, please! (ajude-me, por favor). <br>We live with them. (nós moramos com eles/as). <br>He comes with us. (ele vem conosco). <br> <br> <br> <br> <br> <br> <br>61 – Complete as frases substituindo os sujeitos destacados anteriormente por Personal <br>Pronouns (Object). <br> <br>a) I am waiting for Peter and Alex. I am waiting for <br>b) Mom is cooking for my sister and me. She is cooking for <br>c) Susan is thinking about Karl. She is thinking about <br>d) I am speaking to Mary. I am speaking to <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U3_L5": {
        "title": "Pronomes Pessoais (objeto), There to Be",
        "unit": "UNIDADE 3 — PERGUNTAS PESSOAIS SOBRE TERCEIROS",
        "sentences": [
            {
                "en": "Please contact them tomorrow.",
                "pt": "Por favor, contate-os amanhã.",
                "missing": "them",
                "options": [
                    "them",
                    "they",
                    "their"
                ]
            },
            {
                "en": "There is a meeting room available.",
                "pt": "Há uma sala de reunião disponível.",
                "missing": "There",
                "options": [
                    "There",
                    "They",
                    "Their"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Me / Him / Her / Them",
                "definition": "Me / Ele / Ela / Eles (pronomes objeto que recebem a ação)."
            },
            {
                "term": "There is / There are",
                "definition": "Há / Existem (verbo haver/existir no singular e plural)."
            },
            {
                "term": "Available",
                "definition": "Disponível para uso."
            }
        ],
        "quiz": {
            "question": "Qual a frase correta para indicar que há cinco pessoas na sala?",
            "options": [
                "There are five people in the room.",
                "Have five people in the room.",
                "They are five people in the room.",
                "There is five people in the room."
            ],
            "correctIndex": 0,
            "explanation": "Para plural, o verbo existir é 'There are'."
        },
        "businessContext": {
            "scenario": "Mostrando a infraestrutura da filial e informando recursos disponíveis ao cliente.",
            "en": "There are many offices in this business center.",
            "pt": "Há muitos escritórios neste centro de negócios.",
            "missing": "are",
            "options": [
                "are",
                "is",
                "be"
            ],
            "terms": [
                {
                    "term": "Business center",
                    "definition": "Centro comercial corporativo ou polo empresarial."
                },
                {
                    "term": "Showroom",
                    "definition": "Sala de exposição e demonstração de produtos."
                }
            ],
            "quiz": {
                "question": "Como você avisa o cliente que há um showroom comercial no prédio?",
                "options": [
                    "Have a showroom in the building.",
                    "There are a showroom in the building.",
                    "They have showroom in building.",
                    "There is a commercial showroom in the building."
                ],
                "correctIndex": 3,
                "explanation": "Para singular usamos 'There is a'."
            }
        },
        "rawText": " 71 \n \n \n \n \n \n \nMe – Mim, me \nYou - Te, você \nHim – Ele, - o, lo \nHer – Ela, - a, la \nIt – Ele/ela (coisas e animais) - lo, la \nUs - Nós \nYou - Vós, vocês \nThem – Eles/elas \n \nExemplos: \nShe likes me. (ela gosta de mim). \nI’d like to talk to her. (eu gostaria de falar com ela). \nHelp me, please! (ajude-me, por favor). \nWe live with them. (nós moramos com eles/as). \nHe comes with us. (ele vem conosco). \n \n \n \n \n \n \n61 – Complete as frases substituindo os sujeitos destacados anteriormente por Personal \nPronouns (Object). \n \na) I am waiting for Peter and Alex.  I am waiting for  \nb) Mom is cooking for my sister and me. She is cooking for  \nc) Susan is thinking about Karl. She is thinking about  \nd) I am speaking to Mary. I am speaking to   \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 5: Pronomes Pessoais (objeto). \nVerbo There to Be (Haver / Existir) \n \n \n \n \n \n \n \nEXERCÍCIOS \nPronomes Pessoais – Objeto (Personal Pronouns – Object) \n 72 \n62 – Marque a alternativa que completa corretamente a frase abaixo: \nThe teacher gives the students homework. She gives ______ homework. \n \na) (   ) you b) (   ) them c) (   ) me \n \n63 – Marque a alternativa que completa corretamente a frase abaixo:  \nI am reading the book to my brother. / I am reading the book to _________ \n \na) (   ) him b) (   ) her c) (   ) me \n \n64 – Marque a alternativa que completa corretamente a frase abaixo: \nThe men are riding their horses. / They are riding _____________. \n \na) (   ) they b) (   ) it c) (   ) them \n \n65 – Circule o pronome que completa corretamente as frases:  \n \na) Rita goes to school with ___ (me / I) \nb) ____ is my friend. (she / her) \nc) Can you help ____? (me / I) \nd) _____ go to school by bus. (we / us) \ne)  We are going for a drink. Would you like to come with ____? (us / we) \n \n66 – (IDHTEC – adaptada): Marque a sequência que completa corretamente os espaços no \ndiálogo. \n \n“Do ____ know Andy?\" \n“Sure, he is in my class, I study with ____. Why?\" \n“Oh, nothing. I want ____ to help me, that's all.\" \n“I have ____ 'phone number. Call him!\" \n“Ok, thanks!\" \n \na) (   ) You – him – his – his b) (   ) You – his – his – he c) (   ) You – him –  \nhim – his d) (   ) I – he – him – him e) (   ) I – he – his – his   \n \n 73 \n67 – (Instituto Pró-Município – adaptada): Marque a sequência que completa corretamente \nos espaços no diálogo. \n \nA: Barbara likes _______ teachers. Do you like _______?  \nB: Oh, yes! I like _______ very much. \n \na) (   ) she, them; they; b) (   ) her, they; them; c) (   ) hers, theirs; theirs; \nd) (   ) her, yours; them.      \n \nObserve esta foto de uma sala de aula e veja quantas coisas há nela. \n \n \n \n \n \n \n \n \n \n \n \n \nThere is an air conditioning unit. \nThere are about eight students. \nThere are pictures on the windows. \nThere is not (there’s not / there isn’t) any teacher. \nIs there a teacher in the room? \nAre there many chairs/desks in it?  \n \n \n \nEste verbo é usado quando queremos falar da existência de algo. Ele só tem duas formas: \nthere is para o singular e there are para o plural. A forma interrogativa é feita colocando -\nse is ou are antes da palavra there. A forma negativa é feita acrescentando -se not depois \nde is ou are, conforme se pode ver nos exemplos acima. \n \nThere To Be Verb (Present) = Verbo Have r / Existir no Presente do Indicativo. \n \n 74 \n SINGULAR PLURAL \n          Formas Afirmativa: There is There are \nInterrogativa: Is there? Are there? \nNegativa: There is not / there’s not / There \nisn’t \nThere are not / there aren’t \n \n \n \n \n \n \n \n \n \n \n \nTambém podemos usar o verbo There To Be para perguntar sobre a existência de lugares \nna cidade. \nExemplos:  \nIs there a restaurante around here? (Há um restaurante por aqui?). \nAre there many banks in this area? (Há muitos bancos nesta área?). \n \n \nDICA \n \nPodemos responder as perguntas relativas à foto acima usando short answers. \nIs there a teacher in the room? \n- No, there isn’t. \nAre there many chairs / desks in it? Yes, there are. \n- Yes, there are. \nVOCABULÁRIO \n \nLugares (Places) \nPost office = correios Drogstore = farmácia Gas / oil station = \nposto de gasolina Airport = aeroporto Police Station = delegacia \nBakery = padaria Supermarket = supermercado  \nBookstore = livraria Zoo = zoológico  \nBus stop = ponto de ônibus Restaurant = restaurante  \nBus station = rodoviária Laundromat = lavanderia  \nMuseum = museu Square = praça  \n \n 75 \nPara falar da localização desses lugares, usamos os seguintes advérbios de lugares:\nExemplos: \nThe Cathedral is in front of the Post office. (A Catedral está em frente aos Correios) \nThe supermarket is next to the drugstore. (O supermercado está ao lado da farmácia) \nThe airport is far. (O aeroporto é longe) \n \nEm se tratando de localização, é muito comum as pessoas perguntarem como se chega a \ndeterminados lugares. \nExemplos: \nHow can I go to the train station? (Como eu chego na estação de trem?). \nWhere is the Zoo? (Onde é o Zoológico?) \n \nAs formas mais comuns de dar informações sobre localizações são: \n \nTurn left / right = Vire à esquerda / direita. \nGo straight ahead = Siga reto. \nIt’s this way = É por aqui. \nGo to the opposite direction = Vá na direção contrária. \nGo up / down the street = Suba / desça a rua. \nIt’s two blocks from here = Fica a duas quadras daqui). \nIt’s across the street = É do outro lado da rua. \nAt the (traffic) lights = No semáforo. \n  \nHere = aqui. On the left = à esquerda \nNext to / beside = ao lado On the right = à direita \nIn front of = em frente. Over there = lá. \nBehind = atrás. Near = perto. \nOn the corner = na esquina. Far = longe \n \n 76 \n \n \n \nSituação: Uma senhora lhe pede informações na rua sobre localização. \n \nSenhora:  Excuse me. I'm looking for the airport. Can you tell me how to get there? \nVocê:   No, sorry. I’m not from here.  But I think you can take the subway to the \nairport.  \nSenhor:  Where’s the subway station? \nVocê:   It's over there. \nSenhora:  Where? I don't see it. \nVocê:   Across the street, near that restaurant. \nSenhora:  Oh, I see it now. Do you know if there is a restroom around here? \nVocê:   Yes, there's one here. It's in this square. \nSenhora:  Thanks. \nVocê:   Bye. \n \n \n \n \n \n \n \n68 – Complete corretamente os diálogos abaixo (em inglês):  \n \na) - Excuse me. Is there a bank near here? \n     - Yes. ___________________. It’s ____________________. \n     - Thank you. \n     - ______________________. \nb) - Are there many shopping malls in your city? \n    - No, _______________. My city is small, but ___________ a good stadium. \n    - Ah, how nice! \n \n69 – Responda corretamente as perguntas abaixo, em inglês, usando short answers.  \n \na) Is there a drugstore near your house? Yes,  \nDIÁLOGO \n \nEXERCÍCIOS \n 77 \nb) Is there a shopping mall near here? No,  \nc) Are there shops near your school? No,  \nd) Are there good restaurants around here? Yes,  \n \n70 – Uma pessoa precisa de informação sobre a localização desses lugares. Observe o \nmapa abaixo e responda corretamente as perguntas, em inglês. Pode haver mais de uma \nresposta correta.  \n \n \nFonte: https://br.pinterest.com/pin/199706564705754728/ \n \na) Where is the police station?  \nb) Where is the movie theater?  \nc) Where is the store?  \nd) Where is the train station?  \ne) Where is the hospital?  \n \n71 – Escreva um diálogo, em inglês, seguindo as instruções abaixo, no seu caderno:  \n \nContexto: Você (V) e um colega (C) da escola se conhecem há pouco tempo e, em uma \noportunidade, começam a comentar sobre as características da cidade de cada um.  \n \nV – Pergunte se a cidade de C é grande. \nC – Negue (usando short answer) e diga que é pequena. \nV – Pergunte se há bons restaurantes lá. \nC – Diga que sim, e que também há bons hotéis. \n\n 78 \nV – Informe que em sua cidade há bons teatros e um grande shopping center. \nC – Pergunte se também há boas livrarias. \nV – Diga que sim e que há um grande parque perto da sua casa. \nC – Mostre-se surpreso com a informação e diga que a cidade de V é muito legal. \n \n72 – Escreva um diálogo, em inglês, seguindo as instruções abaixo:  \n \nContexto: Você está em casa preparando um lanche, mas faltam alguns ingredientes e \nvocê sai para comprá-los. Como você é novo na cidade, não conhece bem o lugar e precisa \npedir informações. Você (V) aborda um pedestre (P): \n \nV –  Chame a atenção da pessoa  \nP –  Responda:  \nV –  Pergunte se há um supermercado por ali:  \nP –  Diga que sim e dê a localização:  \nV –  Confirme se é ao lado do Banco do Brasil:  \nP –  Diga que sim e dê mais informações:  \nV –  Agradeça:  \nP –  Responda  \n \n  \n \n\n",
        "reconstructed_explanation": "LIÇÃO 5: Pronomes Pessoais (objeto). <br>Verbo There to Be (Haver / Existir) <br> <br> <br> <br> <br> <br> <br> <br>EXERCÍCIOS <br>Pronomes Pessoais – Objeto (Personal Pronouns – Object)",
        "reconstructed_dialogue": "Situação: Uma senhora lhe pede informações na rua sobre localização. <br> <br>Senhora: Excuse me. I'm looking for the airport. Can you tell me how to get there? <br>Você: No, sorry. I’m not from here. But I think you can take the subway to the <br>airport. <br>Senhor: Where’s the subway station? <br>Você: It's over there. <br>Senhora: Where? I don't see it. <br>Você: Across the street, near that restaurant. <br>Senhora: Oh, I see it now. Do you know if there is a restroom around here? <br>Você: Yes, there's one here. It's in this square. <br>Senhora: Thanks. <br>Você: Bye. <br> <br> <br> <br> <br> <br> <br> <br>68 – Complete corretamente os diálogos abaixo (em inglês): <br> <br>a) - Excuse me. Is there a bank near here? <br> - Yes. ___________________. It’s ____________________. <br> - Thank you. <br> - ______________________. <br>b) - Are there many shopping malls in your city? <br> - No, _______________. My city is small, but ___________ a good stadium. <br> - Ah, how nice! <br> <br>69 – Responda corretamente as perguntas abaixo, em inglês, usando short answers. <br> <br>a) Is there a drugstore near your house? Yes, <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>b) Is there a shopping mall near here? No, <br>c) Are there shops near your school? No, <br>d) Are there good restaurants around here? Yes, <br> <br>70 – Uma pessoa precisa de informação sobre a localização desses lugares. Observe o <br>mapa abaixo e responda corretamente as perguntas, em inglês. Pode haver mais de uma <br>resposta correta. <br> <br> <br>Fonte: https://br.pinterest.com/pin/199706564705754728/ <br> <br>a) Where is the police station? <br>b) Where is the movie theater? <br>c) Where is the store? <br>d) Where is the train station? <br>e) Where is the hospital? <br> <br>71 – Escreva um diálogo, em inglês, seguindo as instruções abaixo, no seu caderno: <br> <br>Contexto: Você (V) e um colega (C) da escola se conhecem há pouco tempo e, em uma <br>oportunidade, começam a comentar sobre as características da cidade de cada um. <br> <br>V – Pergunte se a cidade de C é grande. <br>C – Negue (usando short answer) e diga que é pequena. <br>V – Pergunte se há bons restaurantes lá. <br>C – Diga que sim, e que também há bons hotéis. <br>V – Informe que em sua cidade há bons teatros e um grande shopping center. <br>C – Pergunte se também há boas livrarias. <br>V – Diga que sim e que há um grande parque perto da sua casa. <br>C – Mostre-se surpreso com a informação e diga que a cidade de V é muito legal. <br> <br>72 – Escreva um diálogo, em inglês, seguindo as instruções abaixo: <br> <br>Contexto: Você está em casa preparando um lanche, mas faltam alguns ingredientes e <br>você sai para comprá-los. Como você é novo na cidade, não conhece bem o lugar e precisa <br>pedir informações. Você (V) aborda um pedestre (P): <br> <br>V – Chame a atenção da pessoa <br>P – Responda: <br>V – Pergunte se há um supermercado por ali: <br>P – Diga que sim e dê a localização: <br>V – Confirme se é ao lado do Banco do Brasil: <br>P – Diga que sim e dê mais informações: <br>V – Agradeça: <br>P – Responda",
        "reconstructed_exercises": "62 – Marque a alternativa que completa corretamente a frase abaixo: <br>The teacher gives the students homework. She gives ______ homework. <br> <br>a) ( ) you b) ( ) them c) ( ) me <br> <br>63 – Marque a alternativa que completa corretamente a frase abaixo: <br>I am reading the book to my brother. / I am reading the book to _________ <br> <br>a) ( ) him b) ( ) her c) ( ) me <br> <br>64 – Marque a alternativa que completa corretamente a frase abaixo: <br>The men are riding their horses. / They are riding _____________. <br> <br>a) ( ) they b) ( ) it c) ( ) them <br> <br>65 – Circule o pronome que completa corretamente as frases: <br> <br>a) Rita goes to school with ___ (me / I) <br>b) ____ is my friend. (she / her) <br>c) Can you help ____? (me / I) <br>d) _____ go to school by bus. (we / us) <br>e) We are going for a drink. Would you like to come with ____? (us / we) <br> <br>66 – (IDHTEC – adaptada): Marque a sequência que completa corretamente os espaços no <br>diálogo. <br> <br>“Do ____ know Andy?\" <br>“Sure, he is in my class, I study with ____. Why?\" <br>“Oh, nothing. I want ____ to help me, that's all.\" <br>“I have ____ 'phone number. Call him!\" <br>“Ok, thanks!\" <br> <br>a) ( ) You – him – his – his b) ( ) You – his – his – he c) ( ) You – him – <br>him – his d) ( ) I – he – him – him e) ( ) I – he – his – his <br>67 – (Instituto Pró-Município – adaptada): Marque a sequência que completa corretamente <br>os espaços no diálogo. <br> <br>A: Barbara likes _______ teachers. Do you like _______? <br>B: Oh, yes! I like _______ very much. <br> <br>a) ( ) she, them; they; b) ( ) her, they; them; c) ( ) hers, theirs; theirs; <br>d) ( ) her, yours; them. <br> <br>Observe esta foto de uma sala de aula e veja quantas coisas há nela. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>There is an air conditioning unit. <br>There are about eight students. <br>There are pictures on the windows. <br>There is not (there’s not / there isn’t) any teacher. <br>Is there a teacher in the room? <br>Are there many chairs/desks in it? <br> <br> <br> <br>Este verbo é usado quando queremos falar da existência de algo. Ele só tem duas formas: <br>there is para o singular e there are para o plural. A forma interrogativa é feita colocando -<br>se is ou are antes da palavra there. A forma negativa é feita acrescentando -se not depois <br>de is ou are, conforme se pode ver nos exemplos acima. <br> <br>There To Be Verb (Present) = Verbo Have r / Existir no Presente do Indicativo. <br> SINGULAR PLURAL <br> Formas Afirmativa: There is There are <br>Interrogativa: Is there? Are there? <br>Negativa: There is not / there’s not / There <br>isn’t <br>There are not / there aren’t <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>Também podemos usar o verbo There To Be para perguntar sobre a existência de lugares <br>na cidade. <br>Exemplos: <br>Is there a restaurante around here? (Há um restaurante por aqui?). <br>Are there many banks in this area? (Há muitos bancos nesta área?). <br> <br> <br>DICA <br> <br>Podemos responder as perguntas relativas à foto acima usando short answers. <br>Is there a teacher in the room? <br>- No, there isn’t. <br>Are there many chairs / desks in it? Yes, there are. <br>- Yes, there are. <br>VOCABULÁRIO <br> <br>Lugares (Places) <br>Post office = correios Drogstore = farmácia Gas / oil station = <br>posto de gasolina Airport = aeroporto Police Station = delegacia <br>Bakery = padaria Supermarket = supermercado <br>Bookstore = livraria Zoo = zoológico <br>Bus stop = ponto de ônibus Restaurant = restaurante <br>Bus station = rodoviária Laundromat = lavanderia <br>Museum = museu Square = praça <br>Para falar da localização desses lugares, usamos os seguintes advérbios de lugares:<br>Exemplos: <br>The Cathedral is in front of the Post office. (A Catedral está em frente aos Correios) <br>The supermarket is next to the drugstore. (O supermercado está ao lado da farmácia) <br>The airport is far. (O aeroporto é longe) <br> <br>Em se tratando de localização, é muito comum as pessoas perguntarem como se chega a <br>determinados lugares. <br>Exemplos: <br>How can I go to the train station? (Como eu chego na estação de trem?). <br>Where is the Zoo? (Onde é o Zoológico?) <br> <br>As formas mais comuns de dar informações sobre localizações são: <br> <br>Turn left / right = Vire à esquerda / direita. <br>Go straight ahead = Siga reto. <br>It’s this way = É por aqui. <br>Go to the opposite direction = Vá na direção contrária. <br>Go up / down the street = Suba / desça a rua. <br>It’s two blocks from here = Fica a duas quadras daqui). <br>It’s across the street = É do outro lado da rua. <br>At the (traffic) lights = No semáforo. <br> <br>Here = aqui. On the left = à esquerda <br>Next to / beside = ao lado On the right = à direita <br>In front of = em frente. Over there = lá. <br>Behind = atrás. Near = perto. <br>On the corner = na esquina. Far = longe <br>79 <br> <br> <br> <br> <br> <br> <br> <br>No dia a dia, fazemos muitas ações que são habituais, que são <br>parte da nossa rotina diária, semanal, mensal, etc. Para falar <br>dessas ações, usamos o verbo principal no infinitivo sem -to, <br>para formar o tempo Presente Simples (Simple Present), na <br>forma afirmativa. <br> <br>Exemplos: <br>to work (trabalhar) > I work = eu trabalho. <br>to study (estudar) > I study = eu estudo. <br> <br>Veja mais frases que expressam ações habituais, relatadas em primeira pessoa do <br>singular (I – eu): <br> <br> I wake up at 6 o’clock every day. (Eu acordo às 6h todos os dias). <br> I go to school at 6:30. (Eu vou à escolar as 06:30). <br> I have lunch at 12:00. (Eu almoço às 12:00). <br> I do my homework in the morning. (Eu faço meu dever de casa pela manhã). <br> I help my mother with the housework. (Eu ajudo minha mãe com os afazeres <br>domésticos). <br> I surf the Internet. (Eu navego na Internet). <br> I play soccer. (Eu jogo futebol). <br> I take a shower. (Eu tomo um banho). <br> I go to bed at 11:00. (Eu durmo às 11h). <br> <br>Além da primeira pessoa do singular (I), seguem a mesma forma de conjugação (You), <br>(We) e (They). <br>Exemplos: <br>You work very hard every day. (Você trabalha muito todos os dias). <br>We dance at the club every Saturday (Nós dançamos no clube todo sábado). <br>ROTINA / AÇÕES HABITUAIS <br>– SIMPLE PRESENT"
    },
    "U4_L1": {
        "title": "Rotina / Ações Habituais (I/You/We/They)",
        "unit": "UNIDADE 4 — ROTINA E AÇÕES HABITUAIS (SIMPLE PRESENT)",
        "sentences": [
            {
                "en": "I check my sales metrics daily.",
                "pt": "Eu checo minhas métricas de vendas diariamente.",
                "missing": "check",
                "options": [
                    "check",
                    "checks",
                    "checking"
                ]
            },
            {
                "en": "We schedule client demo calls weekly.",
                "pt": "Nós agendamos chamadas de demonstração com clientes semanalmente.",
                "missing": "schedule",
                "options": [
                    "schedule",
                    "schedules",
                    "scheduling"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Check",
                "definition": "Verificar, inspecionar ou monitorar."
            },
            {
                "term": "Schedule",
                "definition": "Agendar compromissos ou programar."
            },
            {
                "term": "Metrics",
                "definition": "Dados estatísticos de desempenho."
            }
        ],
        "quiz": {
            "question": "Qual é a forma base do Simple Present para 'We' do verbo 'work'?",
            "options": [
                "works",
                "work",
                "worker",
                "working"
            ],
            "correctIndex": 1,
            "explanation": "No presente simples, sujeitos plurais (We, They) e I/You usam a forma verbal pura: work."
        },
        "businessContext": {
            "scenario": "Descrevendo a rotina comercial e reuniões de alinhamento com a diretoria.",
            "en": "We review our commercial targets every morning.",
            "pt": "Nós revisamos nossas metas comerciais todas as manhãs.",
            "missing": "review",
            "options": [
                "review",
                "reviews",
                "reviewing"
            ],
            "terms": [
                {
                    "term": "Review",
                    "definition": "Analisar retrospectivamente ou avaliar."
                },
                {
                    "term": "Weekly briefing",
                    "definition": "Reunião rápida semanal para repasse de metas."
                }
            ],
            "quiz": {
                "question": "Como dizer 'Nós fazemos reuniões todos os dias'?",
                "options": [
                    "We does meetings every day.",
                    "We holding meetings every day.",
                    "We holds meetings every day.",
                    "We hold meetings every day."
                ],
                "correctIndex": 3,
                "explanation": "'We hold' (nós conduzimos/fazemos) é a conjugação no presente correto."
            }
        },
        "rawText": " 79 \n \n \n \n \n \n \n \nNo dia a dia, fazemos muitas ações que são habituais, que são \nparte da nossa rotina diária, semanal, mensal, etc.  Para falar \ndessas ações, usamos o verbo principal no infinitivo sem -to, \npara formar o tempo Presente Simples (Simple Present), na \nforma afirmativa.  \n \nExemplos: \nto work (trabalhar) > I work = eu trabalho. \nto study (estudar) > I study = eu estudo. \n \nVeja mais frases que expressam ações habituais, relatadas em primeira pessoa do \nsingular (I – eu): \n \n I wake up at 6 o’clock every day. (Eu acordo às 6h todos os dias). \n I go to school at 6:30. (Eu vou à escolar as 06:30). \n I have lunch at 12:00. (Eu almoço às 12:00). \n I do my homework in the morning. (Eu faço meu dever de casa pela manhã). \n I help my mother with the housework. (Eu ajudo minha mãe com os afazeres \ndomésticos). \n I surf the Internet. (Eu navego na Internet). \n I play soccer. (Eu jogo futebol). \n I take a shower. (Eu tomo um banho). \n I go to bed at 11:00. (Eu durmo às 11h). \n \nAlém da primeira pessoa do singular (I), seguem a mesma forma de conjugação (You), \n(We) e (They). \nExemplos:  \nYou work very hard every day. (Você trabalha muito todos os dias). \nWe dance at the club every Saturday (Nós dançamos no clube todo sábado). \nROTINA / AÇÕES HABITUAIS \n– SIMPLE PRESENT \nLIÇÃO 1: Falando de sua rotina / ações habituais \n \n \n \n \n \ncréditos: Paint by Number \n2020. \n \n\n 80 \nThey play soccer very well. (Eles jogam futebol muito bem). \n \nTodas as frases apresentadas até aqui estão na forma afirmativa , e têm a seguinte \nestrutura: Sujeito + verbo no infinitivo sem -to + complemento. \n \nAs frases negativas e interrogativas, no entanto, têm uma estrutura diferente e precisam \nde um verbo auxiliar na sua composição. No caso dos exemplos que estão sendo \nutilizados, o auxiliar é “do”. \n \nA frase negativa tem a seguinte estrutura: Sujeito + do + not + verbo no infinitivo sem     \n-to + complemento. \nExemplos: \nI do not wake up early on Sundays (Eu não acordo cedo aos domingos). \nThey do not play soccer on Mondays (Eles não jogam futebol às segundas-feiras). \n \n \n \n \n \n \n \n \n \n \n \nNa frase interrogativa, o auxiliar é colocado antes do sujeito e tem a seguinte estrutura: \nDo + sujeito + verbo no infinitivo sem –to + complemento. \nExemplos: \nDo you work here? (Você trabalha aqui?) \nDo they play soccer well? (Eles jogam futebol bem?) \n \nAs perguntas dos exemplos acima podem ser respondidas com short answers (respostas \ncurtas) com o sentido de “sim” ou “não”. \nExemplos: \nDo you work here? – Yes, I do. / No, I don’t. \nDo they play soccer well? – Yes, they do. / No, they don’t. \nÉ possível juntar do + not e formar “don’t”. Assim, as frases anteriores podem ser, \nprincipalmente na comunicação oral: \nI don’t wake up early on Sundays (Eu não acordo cedo aos domingos). \nThey don’t play soccer on Mondays (Eles não jogam futebol às segundas-feiras). \nOBSERVAÇÃO \n \n 81 \nVocê deve estar sentindo falta da conjugação para He, She, It, não é mesmo? \nEssas pessoas têm uma conjugação verbal especial, que será apresentada na Lição 4 desta \nUnidade. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nQuando o Simple Present é usado para expressar ações habituais, geralmente as frases \nvêm acompanhadas de Advérbios de Frequência (Adverbs of Frequency ), que são \npalavras que modificam o verbo, o adjetivo ou o advérbio. Veja os principais: \n \nAlways = sempre  \nSeldom / rarely = raramente  \nNever = nunca  \nFrequently / often = frequentemente  \nGenerally / usually = geralmente, usualmente  \nSometimes = às vezes  \nHardly ever = quase nunca \n \nVeja mais alguns verbos que são, geralmente, muito utilizados no Simple Present. \n Go: dancing (dançar) / to the movies (cinema) / to the theater (teatro) / to (the) \nchurch (igreja) / to the club (clube).  \n Watch: TV, a film, a talk show (programa de entrevistas), series.  \n Swim: in a lake (lago) / in a swimming pool (piscine) / in a river (rio).  \n Study: Mathematics, Biology, History, Portuguese, Geography.  \n Paint: a wall (parede), a picture (quadro, pintura), a house, a drawing (desenho).  \nO Simple Present também é usado para expressar: \na) Uma verdade universal: “Dogs bark” (Cães latem). \nb) Gostos: They like to go shopping on weekends. (Eles gostam de fazer compras \nno fim de semana). \nc) Sentimentos: I love him. (Eu o amo). \nd) Opiniões: I think you’re right (Eu acho que você está certo). \ne) Etc. \n \nOBSERVAÇÃO \n \n 82 \n Have: a book, a bike, English classes, a notebook (caderno).  \n Play: soccer, computer games, volleyball, the guitar (violão).  \n Read / Write: magazines (revistas), books, an essay (ensaio), an article, the news \n           (jornal).  \n Answer: the telephone, a question (pergunta).  \n Do: homework (dever de casa), the bed (cama), a favor, the shopping (compra). \n \n \n \n \n \nSituação: Dois amigos estão conversando sobre algumas diferenças culturais e de rotina \nde seus países. \n \nBrian:   Hey, Daniel.... tell me about your routine in your country. At what time do \nyou go to school? \nDaniel: I go to school early. My classes start at 7. So I have to wake up at 6 and \n   take the bus at 6:30. \nBrian:   Here the schools start at 9, so I can wake up later, and as I live near school, \nI can go there on foot. \nDaniel:  Lucky you are! I usually help my mother with business stuff, so I always go \nto the bank to pay some bills. \nBrian:   In my country, the banks open at 10. \nDaniel:  Here the banks are open from 11 to for. \n[…] \n \n \n \n  \nDIÁLOGO \n \n",
        "reconstructed_explanation": "LIÇÃO 1: Falando de sua rotina / ações habituais <br> <br> <br> <br> <br> <br>créditos: Paint by Number <br>2020. <br>They play soccer very well. (Eles jogam futebol muito bem). <br> <br>Todas as frases apresentadas até aqui estão na forma afirmativa , e têm a seguinte <br>estrutura: Sujeito + verbo no infinitivo sem -to + complemento. <br> <br>As frases negativas e interrogativas, no entanto, têm uma estrutura diferente e precisam <br>de um verbo auxiliar na sua composição. No caso dos exemplos que estão sendo <br>utilizados, o auxiliar é “do”. <br> <br>A frase negativa tem a seguinte estrutura: Sujeito + do + not + verbo no infinitivo sem <br>-to + complemento. <br>Exemplos: <br>I do not wake up early on Sundays (Eu não acordo cedo aos domingos). <br>They do not play soccer on Mondays (Eles não jogam futebol às segundas-feiras). <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>Na frase interrogativa, o auxiliar é colocado antes do sujeito e tem a seguinte estrutura: <br>Do + sujeito + verbo no infinitivo sem –to + complemento. <br>Exemplos: <br>Do you work here? (Você trabalha aqui?) <br>Do they play soccer well? (Eles jogam futebol bem?) <br> <br>As perguntas dos exemplos acima podem ser respondidas com short answers (respostas <br>curtas) com o sentido de “sim” ou “não”. <br>Exemplos: <br>Do you work here? – Yes, I do. / No, I don’t. <br>Do they play soccer well? – Yes, they do. / No, they don’t. <br>É possível juntar do + not e formar “don’t”. Assim, as frases anteriores podem ser, <br>principalmente na comunicação oral: <br>I don’t wake up early on Sundays (Eu não acordo cedo aos domingos). <br>They don’t play soccer on Mondays (Eles não jogam futebol às segundas-feiras). <br>OBSERVAÇÃO <br>Você deve estar sentindo falta da conjugação para He, She, It, não é mesmo? <br>Essas pessoas têm uma conjugação verbal especial, que será apresentada na Lição 4 desta <br>Unidade. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>Quando o Simple Present é usado para expressar ações habituais, geralmente as frases <br>vêm acompanhadas de Advérbios de Frequência (Adverbs of Frequency ), que são <br>palavras que modificam o verbo, o adjetivo ou o advérbio. Veja os principais: <br> <br>Always = sempre <br>Seldom / rarely = raramente <br>Never = nunca <br>Frequently / often = frequentemente <br>Generally / usually = geralmente, usualmente <br>Sometimes = às vezes <br>Hardly ever = quase nunca <br> <br>Veja mais alguns verbos que são, geralmente, muito utilizados no Simple Present. <br> Go: dancing (dançar) / to the movies (cinema) / to the theater (teatro) / to (the) <br>church (igreja) / to the club (clube). <br> Watch: TV, a film, a talk show (programa de entrevistas), series. <br> Swim: in a lake (lago) / in a swimming pool (piscine) / in a river (rio). <br> Study: Mathematics, Biology, History, Portuguese, Geography. <br> Paint: a wall (parede), a picture (quadro, pintura), a house, a drawing (desenho). <br>O Simple Present também é usado para expressar: <br>a) Uma verdade universal: “Dogs bark” (Cães latem). <br>b) Gostos: They like to go shopping on weekends. (Eles gostam de fazer compras <br>no fim de semana). <br>c) Sentimentos: I love him. (Eu o amo). <br>d) Opiniões: I think you’re right (Eu acho que você está certo). <br>e) Etc. <br> <br>OBSERVAÇÃO <br> Have: a book, a bike, English classes, a notebook (caderno). <br> Play: soccer, computer games, volleyball, the guitar (violão). <br> Read / Write: magazines (revistas), books, an essay (ensaio), an article, the news <br> (jornal). <br> Answer: the telephone, a question (pergunta). <br> Do: homework (dever de casa), the bed (cama), a favor, the shopping (compra).",
        "reconstructed_dialogue": "Situação: Dois amigos estão conversando sobre algumas diferenças culturais e de rotina <br>de seus países. <br> <br>Brian: Hey, Daniel.... tell me about your routine in your country. At what time do <br>you go to school? <br>Daniel: I go to school early. My classes start at 7. So I have to wake up at 6 and <br> take the bus at 6:30. <br>Brian: Here the schools start at 9, so I can wake up later, and as I live near school, <br>I can go there on foot. <br>Daniel: Lucky you are! I usually help my mother with business stuff, so I always go <br>to the bank to pay some bills. <br>Brian: In my country, the banks open at 10. <br>Daniel: Here the banks are open from 11 to for. <br>[…]",
        "reconstructed_exercises": "73 – Preencha a tabela abaixo com horários e atividades que você faz no sábado. O horário <br>pode ser escrito com numerais (07:00) e as atividades devem ser descritas em inglês e não <br>podem se repetir na tabela. <br> <br>Time Activities <br> <br> <br> <br> <br> <br> <br> <br> <br>74 – As ações habituais são geralmente expressas no Simple Present com advérbios de <br>frequência. Leia as frases a seguir e indique com que frequência as pessoas executam <br>determinadas ações, traduzindo as palavras destacadas. <br> <br>a) They often go to the movies. (vão ao cinema:) <br>b) He sometimes reads the newspaper. (lê o jornal) <br>c) She usually goes to church. (vai à igreja:) <br>d) We always watch television in the evening. (vemos/assistimos à televisão:) <br>e) I eat vegetables and fruits every day. (como frutas e verduras:) <br>f) She never helps her daughter with her homework. (ajuda a filha) <br> <br> <br> <br> <br> <br> <br>As palavras destacadas nas frases dos exemplos da"
    },
    "U4_L2": {
        "title": "Preposições",
        "unit": "UNIDADE 4 — ROTINA E AÇÕES HABITUAIS (SIMPLE PRESENT)",
        "sentences": [
            {
                "en": "Our head office is in São Paulo.",
                "pt": "Nossa matriz fica em São Paulo.",
                "missing": "in",
                "options": [
                    "in",
                    "on",
                    "at"
                ]
            },
            {
                "en": "The commercial presentation is on Friday.",
                "pt": "A apresentação comercial é na sexta-feira.",
                "missing": "on",
                "options": [
                    "on",
                    "in",
                    "at"
                ]
            }
        ],
        "vocab": [
            {
                "term": "In / On / At",
                "definition": "Preposições de tempo e lugar. In (cidades/países/meses), On (dias da semana/superfícies), At (horas exatas/endereços específicos)."
            },
            {
                "term": "By plane / car",
                "definition": "Viajar de avião / carro (preposição 'by' indica meio de transporte)."
            },
            {
                "term": "Head office",
                "definition": "Matriz da empresa."
            }
        ],
        "quiz": {
            "question": "Qual preposição de tempo usamos antes de horas (ex: 9:00 AM)?",
            "options": [
                "on",
                "at",
                "in",
                "by"
            ],
            "correctIndex": 1,
            "explanation": "Usamos a preposição 'at' para horários definidos: 'at 9:00 AM'."
        },
        "businessContext": {
            "scenario": "Organizando viagem comercial e marcando reuniões presenciais com cliente.",
            "en": "We will meet the client at their headquarters.",
            "pt": "Nós encontraremos o cliente na sede deles.",
            "missing": "at",
            "options": [
                "at",
                "in",
                "on"
            ],
            "terms": [
                {
                    "term": "Headquarters",
                    "definition": "Escritório principal da empresa."
                },
                {
                    "term": "On-site meeting",
                    "definition": "Reunião presencial no local de trabalho."
                }
            ],
            "quiz": {
                "question": "Como agendar um call comercial na segunda às 10 horas?",
                "options": [
                    "On Monday at 10 AM",
                    "In Monday in 10 AM",
                    "By Monday at 10 AM",
                    "At Monday on 10 AM"
                ],
                "correctIndex": 0,
                "explanation": "Usamos 'on' para dias de semana e 'at' para horas: 'on Monday at 10 AM'."
            }
        },
        "rawText": " 83 \n \n \n \n73 – Preencha a tabela abaixo com horários e atividades que você faz no sábado. O horário \npode ser escrito com numerais (07:00) e as atividades devem ser descritas em inglês e não \npodem se repetir na tabela.  \n \nTime Activities \n  \n  \n  \n  \n  \n  \n \n \n74 – As ações habituais são geralmente expressas no Simple Present com advérbios de \nfrequência. Leia as frases a seguir e indique com que frequência as pessoas executam \ndeterminadas ações, traduzindo as palavras destacadas.  \n \na) They often go to the movies. (vão ao cinema:)  \nb) He sometimes reads the newspaper. (lê o jornal)  \nc) She usually goes to church. (vai à igreja:)  \nd) We always watch television in the evening. (vemos/assistimos à televisão:)  \ne) I eat vegetables and fruits every day. (como frutas e verduras:)  \nf) She never helps her daughter with her homework. (ajuda a filha)  \n \n \n \n \n \n \nAs palavras destacadas nas frases dos exemplos da Lição 1 (at, to, in, with) são Preposições \n(Prepositions), que são utilizadas para conectar substantivos, pronomes ou outros \nelementos na frase que indicar ideia de lugar, tempo, direção, movimento, etc.  \nVeja as mais comumente usadas (o significado e as traduções podem variar):  \nLIÇÃO 2: Preposições. \n \n \n \n \n \nEXERCÍCIOS \n 84 \nIn = dentro.  \nThe pen is in the schoolbag (a caneta está dentro da mochila). \n \nTo = para (direção).  \nLet’s go to school. (Vamos para a escolar). \n \nFrom = de, proveniente de algum lugar.  \nWe are from Brazil. (Somos do Brasil) \n \nOn = em, no, na, em cima, sobre.  \nThe book in on the desk. (O livro está em cima da mesa) \n \nFor = para  \nThis book is for you. (Este livro é para você) \n \nOf = de  \nThis table is made of wood. (Esta mesa é feita de madeira) \n \nWith = com  \nDo you come with him? (Você vem com ele?) \n \nWithout = sem \nI can’t live without you (Não posso viver sem você). \n \nAt = em  \nWe are at home. (Estamos em casa). \n \nBy = significa perto ou ao lado, referindo-se a lugar:  \nShe is by the door. (Ela está perto da porta). \nTambém significa também autoria: \nThis picture was painted by Mr. Green. (Este quadro foi pintado pelo Sr. \nGreen)  \n \nAbout = sobre, a respeito  \nThis book is about nature. (Este livro é sobre natureza)  \nAbove = acima  \n 85 \nThe stars above us. (As estrelas acima de nós) \n \nBelow = abaixo \nThe temperature is below freezing (A temperatura está abaixo de zero) \n \nBefore = antes \nBe here before noon! (Esteja aqui antes do meio-dia) \n \nUnder = embaixo, debaixo de \nThe invitation is under this book. (O convite está embaixo deste livro). \n \nEntre essas preposições, há três que são muito usadas, principalmente em diálogos, e que \nseu uso correto depende de situações específicas: Veja:  \n \nUsamos IN para nos referir a:  \n \na) um período de tempo maior e menos específico.  \nExemplos:  \n I usually do my homework in the morning. (Eu geralmente faço meu dever de casa \npela manhã) – não especifica um horário. \n My birthday is in July (Meu aniversário é em julho) - não especifica o dia. \n My daughter was born in 1999. (Minha filha nasceu em 1999). \n \nb) lugares e ambientes, países, Estados, cidades, lojas, bairros, partes da casa, etc.  \nExemplos:  \n I live in England. (Eu moro na Inglaterra) \n She is in her bedroom. (Ela está no quarto dela). \n Linhares is in Espírito Santo, Brazil. (Linhares está/fica no Espírito Santo, Brasil). \n \nUsamos ON para nos referir a:  \n \na) tempo, dias e datas específicos.  \nExemplos:  \n My mother was born on May 8th. (Minha mãe nasceu em 8 de maio) \n I go to the gym on Wednesdays and Fridays. (Eu vou à academia às quartas e \nsextas). \n 86 \nb) lugares, superfícies, ruas ou objetos em cima de outros.  \nExemplos:  \n The bags are on the sofa. (As bolsas estão sobre o sofá). \n I live on Flower Street. (Eu moro na Rua Flower / Rua das Flores). \nUsamos AT para nos referir a:  \n \na) horários ou momentos específicos. \nExemplos:  \n I wake up at 7. (Eu acordo às 7) \n My English class starts at 9. (Minha aula de inglês começa às 9) \n \nb) lugares locais específicos.  \nExemplos:  \n I’ll meet you at the cinema/movies. (Encontro você no cinema)  \n Let’s study at the library. (Vamos estudar na biblioteca) \n \n \n \n \n \n \n75 – Complete as respostas das perguntas com a preposição correta. \n \na) Where’s Julia? She’s  school. \nb) When is your birthday? It’s  May. \nc) Who painted this picture? It was painted  George. \nd) What is this desk made of? It’s made  plastic. \ne) Where should we go now? Let’s go  the club. \nf) Where is he from? He’s  Italy. \n \n  \nEXERCÍCIOS \n\n",
        "reconstructed_explanation": "Lição 1 (at, to, in, with) são Preposições <br>(Prepositions), que são utilizadas para conectar substantivos, pronomes ou outros <br>elementos na frase que indicar ideia de lugar, tempo, direção, movimento, etc. <br>Veja as mais comumente usadas (o significado e as traduções podem variar): <br>LIÇÃO 2: Preposições. <br> <br> <br> <br> <br> <br>EXERCÍCIOS <br>In = dentro. <br>The pen is in the schoolbag (a caneta está dentro da mochila). <br> <br>To = para (direção). <br>Let’s go to school. (Vamos para a escolar). <br> <br>From = de, proveniente de algum lugar. <br>We are from Brazil. (Somos do Brasil) <br> <br>On = em, no, na, em cima, sobre. <br>The book in on the desk. (O livro está em cima da mesa) <br> <br>For = para <br>This book is for you. (Este livro é para você) <br> <br>Of = de <br>This table is made of wood. (Esta mesa é feita de madeira) <br> <br>With = com <br>Do you come with him? (Você vem com ele?) <br> <br>Without = sem <br>I can’t live without you (Não posso viver sem você). <br> <br>At = em <br>We are at home. (Estamos em casa). <br> <br>By = significa perto ou ao lado, referindo-se a lugar: <br>She is by the door. (Ela está perto da porta). <br>Também significa também autoria: <br>This picture was painted by Mr. Green. (Este quadro foi pintado pelo Sr. <br>Green) <br> <br>About = sobre, a respeito <br>This book is about nature. (Este livro é sobre natureza) <br>Above = acima <br>The stars above us. (As estrelas acima de nós) <br> <br>Below = abaixo <br>The temperature is below freezing (A temperatura está abaixo de zero) <br> <br>Before = antes <br>Be here before noon! (Esteja aqui antes do meio-dia) <br> <br>Under = embaixo, debaixo de <br>The invitation is under this book. (O convite está embaixo deste livro). <br> <br>Entre essas preposições, há três que são muito usadas, principalmente em diálogos, e que <br>seu uso correto depende de situações específicas: Veja: <br> <br>Usamos IN para nos referir a: <br> <br>a) um período de tempo maior e menos específico. <br>Exemplos: <br> I usually do my homework in the morning. (Eu geralmente faço meu dever de casa <br>pela manhã) – não especifica um horário. <br> My birthday is in July (Meu aniversário é em julho) - não especifica o dia. <br> My daughter was born in 1999. (Minha filha nasceu em 1999). <br> <br>b) lugares e ambientes, países, Estados, cidades, lojas, bairros, partes da casa, etc. <br>Exemplos: <br> I live in England. (Eu moro na Inglaterra) <br> She is in her bedroom. (Ela está no quarto dela). <br> Linhares is in Espírito Santo, Brazil. (Linhares está/fica no Espírito Santo, Brasil). <br> <br>Usamos ON para nos referir a: <br> <br>a) tempo, dias e datas específicos. <br>Exemplos: <br> My mother was born on May 8th. (Minha mãe nasceu em 8 de maio) <br> I go to the gym on Wednesdays and Fridays. (Eu vou à academia às quartas e <br>sextas). <br>b) lugares, superfícies, ruas ou objetos em cima de outros. <br>Exemplos: <br> The bags are on the sofa. (As bolsas estão sobre o sofá). <br> I live on Flower Street. (Eu moro na Rua Flower / Rua das Flores). <br>Usamos AT para nos referir a: <br> <br>a) horários ou momentos específicos. <br>Exemplos: <br> I wake up at 7. (Eu acordo às 7) <br> My English class starts at 9. (Minha aula de inglês começa às 9) <br> <br>b) lugares locais específicos. <br>Exemplos: <br> I’ll meet you at the cinema/movies. (Encontro você no cinema) <br> Let’s study at the library. (Vamos estudar na biblioteca)",
        "reconstructed_dialogue": "",
        "reconstructed_exercises": "75 – Complete as respostas das perguntas com a preposição correta. <br> <br>a) Where’s Julia? She’s school. <br>b) When is your birthday? It’s May. <br>c) Who painted this picture? It was painted George. <br>d) What is this desk made of? It’s made plastic. <br>e) Where should we go now? Let’s go the club. <br>f) Where is he from? He’s Italy.<br>76 – Observe a imagem abaixo e, usando preposições, escreva frases completas sobre <br>onde estão os seguintes objetos: <br> <br> <br>a) A janela em relação ao sofá: <br> <br>b) O relógio em relação à prateleira: <br> <br>c) O abajur em relação aos livros: <br> <br>d) A garrafa em relação à estante: <br> <br>e) Os presentes em relação à estante: <br> <br> <br> <br> <br> <br>Além das Preposições, outras palavras servem para estabelecer <br>uma conexão entre ideias ou palavras em uma mesma frase ou <br>entre frases distintas. São chamadas de <br>Conectivos (Connectives, ou Linking W ords). Elas existem <br>em grande quantidade e são classificadas em grupo, de acordo <br>com sua função; mas, aqui, vamos apresentar as mais comuns <br>usadas principalmente em frases para comunicação oral rápida <br>e mais simples. <br> <br>And (e) <br>But (mas) <br>Still (ainda) <br>Because (porque) <br>So (então) <br>Or (ou) <br> <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U4_L3": {
        "title": "Conectivos e Advérbios",
        "unit": "UNIDADE 4 — ROTINA E AÇÕES HABITUAIS (SIMPLE PRESENT)",
        "sentences": [
            {
                "en": "Our price is high but the quality is superior.",
                "pt": "Nosso preço é alto, mas a qualidade é superior.",
                "missing": "but",
                "options": [
                    "but",
                    "and",
                    "because"
                ]
            },
            {
                "en": "We work hard, so we win contracts.",
                "pt": "Nós trabalhamos duro, então nós ganhamos contratos.",
                "missing": "so",
                "options": [
                    "so",
                    "still",
                    "or"
                ]
            }
        ],
        "vocab": [
            {
                "term": "And / But / Or",
                "definition": "E / Mas / Ou (conectivos lógicos)."
            },
            {
                "term": "Because / So",
                "definition": "Porque / Então (conectivos de causa e consequência)."
            },
            {
                "term": "Superior quality",
                "definition": "Qualidade acima da média."
            }
        ],
        "quiz": {
            "question": "Qual conectivo indica consequência ou conclusão?",
            "options": [
                "because",
                "so",
                "still",
                "but"
            ],
            "correctIndex": 1,
            "explanation": "'so' (então/portanto) introduz o resultado de uma causa."
        },
        "businessContext": {
            "scenario": "Exposição de proposta comercial defendendo o custo-benefício de um produto.",
            "en": "We offer a premium service, so our rates are higher.",
            "pt": "Nós oferecemos um serviço premium, então nossas tarifas são mais altas.",
            "missing": "so",
            "options": [
                "so",
                "because",
                "but"
            ],
            "terms": [
                {
                    "term": "Premium service",
                    "definition": "Serviço de alto padrão com suporte dedicado."
                },
                {
                    "term": "Rates",
                    "definition": "Tarifas ou taxas cobradas por serviços prestados."
                }
            ],
            "quiz": {
                "question": "Como conectar 'Queremos expandir' e 'Precisamos contratar mais vendedores'?",
                "options": [
                    "We want to expand, so we need to hire more sales reps.",
                    "We want to expand but we need to hire more sales reps.",
                    "We want to expand because we need to hire more sales reps.",
                    "We want to expand or we need to hire more sales reps."
                ],
                "correctIndex": 0,
                "explanation": "A necessidade de contratação é a consequência do desejo de expansão, logo 'so' é o conectivo correto."
            }
        },
        "rawText": " 87 \n76 – Observe a imagem abaixo e, usando preposições, escreva  frases completas sobre  \nonde estão os seguintes objetos: \n \n \na) A janela em relação ao sofá:  \n   \nb) O relógio em relação à prateleira:  \n   \nc) O abajur em relação aos livros:  \n   \nd) A garrafa em relação à estante:  \n   \ne) Os presentes em relação à estante:  \n \n \n \n \n  \nAlém das Preposições, outras palavras servem para estabelecer \numa conexão entre ideias ou palavras em uma mesma frase ou \nentre frases distintas. São chamadas de \nConectivos (Connectives, ou  Linking W ords). Elas existem \nem grande quantidade e são classificadas em grupo, de acordo \ncom sua função; mas, aqui, vamos apresentar as mais comuns \nusadas principalmente em frases para comunicação oral rápida \ne mais simples. \n \nAnd (e) \nBut (mas) \nStill (ainda) \nBecause (porque) \nSo (então) \nOr (ou) \n \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 3: Conectivos. Advérbios. \n \n \n \n \n \n 88 \n \nExemplos:  \n My uncle is a mechanic and my aunt is a teacher. (Meu tio é mecânico e minha tia \né professora) \n My boyfriend wants to go to the beach but I want to go to the mountains. (Meu \nnamorado quer ir à praia, mas eu quero ir às montanhas) \n She’s very late but I’m still waiting for her. (Ela está muito atrasada, mas eu ainda \nespero por ela) \n I won’t go out today because it’s raining. (Eu não vou sair hoje porque está \nchovendo) \n He forgot his wallet at home, so he couldn’t pay the bill. (Ele esqueceu a carteira \nem casa, então, ele não pôde pagar a conta) \n Would you like some coffee or some tea? (Você quer café ou chá?) \n \n \n \nOs advérbios são palavras que modificam o verbo, o adjetivo ou o advérbio. Podem ter \nvárias classificações de acordo com o sentido que oferecem na frase (de tempo, modo, \nlugar, afirmação, intensidade, frequência, etc.). Os advérbios de frequência foram \napresentados na Unidade 4, Lição 1. Nesta lição, estudaremos mais alguns: de modo, de \nintensidade e de tempo. \n \na) Advérbios de Modo (Manner) \nOs Advérbios de Modo, em sua maioria, são formados a partir de adjetivos, acrescentando-\nse o sufixo – ly a eles (existem algumas variações na escrita de alguns). \n \nQuiet (quieto, em silêncio) – quietly (silenciosamente)  \nPatient (paciente) – patiently (pacientemente). \nRapid (rápido) – rapidly (rapidamente). \nCareful (cuidadoso) – carefully (cuidadosamente) \nSlow (devagar) – slowly (vagarosamente) \nHappy (feliz) – happily (felizmente). \n  \nAlguns Advérbios de Modo não \nderivam de adjetivos e têm forma \nprópria: \nWell (bem)  \nFast (rápido) \nHard (duro) \nOBSERVAÇÃO \n \nOs Advérbios \n 89 \nb) Advérbios de Intensidade (Intensifier)  \nUsamos os Advérbios de Intensidade quando queremos expressar a força de uma ação. \nVeja os mais usuais: \n \nEnough = suficiente  \nI don’t have enough money to buy this house. (Eu não tenho dinheiro suficiente para \ncomprar esta casa) \n \nReally = realmente/de verdade  \nThe film was really good! (O filme foi realmente bom!) \n \nToo = demais, excessivamente  \nIt’s too cold to go out. (Está frio demais para sair) \n \nVery = muito \nShe’s very shy. (Ela é muito tímida) \n \nAlmost = quase \nShe almost fell down the stairs. (Ela quase caiu da escada) \n \nc) Advérbios de Tempo (Time) \n \nUsamos o advérbio de tempo para dizer quando algo acontece, aconteceu ou acontecerá, \ndependendo do tempo verbal ou da situação (alguns tempos verbais que aparecem nos \nexemplos serão detalhados nas lições seguintes). Alguns advérb ios coincidem em ser \npreposições em outros contextos.   \n \nSoon = em breve \nSee you soon. (Vejo você em breve) \n \nLate = tarde \nIt’s too late. I have to go. (É muito tarde. Tenho que ir) \n  \nTomorrow = amanhã  \nI’m going to travel tomorrow. (Vou viajar amanhã). \n \n 90 \nEarly = cedo \nI always wake up early. (Eu sempre acordo cedo).  \n \nLately = ultimamente  \nI haven’t seen him lately (Não o tenho visto ultimamente) \n \nForever = para sempre \nShe left forever. (Ela partiu para sempre) \n \nYesterday = ontem  \nShe went to the party yesterday. (Ela foi à festa ontem) \n \nToday = hoje \nI’m so happy today! (Estou tão feliz hoje!)  \n \nNow = agora \nPlease, come here now. (Por favor, veja aqui agora) \n \nAfter = depois \nClose the door after leaving. (Feche a porta depois de sair) \n \nBefore = antes \nWash your hands before eating. (Lave as mãos antes de comer) \n \n \n \n \n \n \nSituação: Dois colegas de trabalho falam sobre suas rotinas no fim de semana. \nAmanda:  So, where are you from? \nJuan:   Well, originally I’m from Bolivia, but my family moved to England when I \nwas a child. \nAmanda:  You speak very good English. \nJuan:   What do you do on weekends? \nAmanda:  I usually stay home and study. Sometimes I go out with some friends, and \nDIÁLOGO \n \n 91 \nyou? \nJuan:   I often watch my favorite series and always read a book. \nAmanda:  As I wake up early, I always get up quietly so as not to make noise. I have \n           breakfast and go jogging. \nJuan:   I never go jogging or work out. I hate it. \nAmanda:  I like it… I always go with a friend so we can talk while jogging. \n \n \n \n \n \n \n77 – (FUNRIO – Prefeitura de Alta Floresta – MT) \nObserve the following sentence: \n \nHe was angry when we enquired ____ his daughter. \n \nIdentify the best alternative that completes the context. \n \na) (   ) On. \nb) (   ) With. \nc) (   ) Of. \nd) (   ) About. \ne) (   ) For. \n \n78 – CENTEC: Complete the blank spaces and check the correct sequence. \n \nThis car is so ________. \nI’m ________ sorry for this. \nShe feels _____ about that experience. \n \na) (   ) Fast – terribly – bad. \nb) (   ) Fastly – terrible – bad. \nc) (   ) Fastly – terribly – badly. \nd) (   ) Fast – terrible – badly. \ne) (   ) Fast – terrible – bad. \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 3: Conectivos. Advérbios. <br>Exemplos: <br> My uncle is a mechanic and my aunt is a teacher. (Meu tio é mecânico e minha tia <br>é professora) <br> My boyfriend wants to go to the beach but I want to go to the mountains. (Meu <br>namorado quer ir à praia, mas eu quero ir às montanhas) <br> She’s very late but I’m still waiting for her. (Ela está muito atrasada, mas eu ainda <br>espero por ela) <br> I won’t go out today because it’s raining. (Eu não vou sair hoje porque está <br>chovendo) <br> He forgot his wallet at home, so he couldn’t pay the bill. (Ele esqueceu a carteira <br>em casa, então, ele não pôde pagar a conta) <br> Would you like some coffee or some tea? (Você quer café ou chá?) <br> <br> <br> <br>Os advérbios são palavras que modificam o verbo, o adjetivo ou o advérbio. Podem ter <br>várias classificações de acordo com o sentido que oferecem na frase (de tempo, modo, <br>lugar, afirmação, intensidade, frequência, etc.). Os advérbios de frequência foram <br>apresentados na Unidade 4, Lição 1. Nesta lição, estudaremos mais alguns: de modo, de <br>intensidade e de tempo. <br> <br>a) Advérbios de Modo (Manner) <br>Os Advérbios de Modo, em sua maioria, são formados a partir de adjetivos, acrescentando-<br>se o sufixo – ly a eles (existem algumas variações na escrita de alguns). <br> <br>Quiet (quieto, em silêncio) – quietly (silenciosamente) <br>Patient (paciente) – patiently (pacientemente). <br>Rapid (rápido) – rapidly (rapidamente). <br>Careful (cuidadoso) – carefully (cuidadosamente) <br>Slow (devagar) – slowly (vagarosamente) <br>Happy (feliz) – happily (felizmente). <br> <br>Alguns Advérbios de Modo não <br>derivam de adjetivos e têm forma <br>própria: <br>Well (bem) <br>Fast (rápido) <br>Hard (duro) <br>OBSERVAÇÃO <br> <br>Os Advérbios <br>b) Advérbios de Intensidade (Intensifier) <br>Usamos os Advérbios de Intensidade quando queremos expressar a força de uma ação. <br>Veja os mais usuais: <br> <br>Enough = suficiente <br>I don’t have enough money to buy this house. (Eu não tenho dinheiro suficiente para <br>comprar esta casa) <br> <br>Really = realmente/de verdade <br>The film was really good! (O filme foi realmente bom!) <br> <br>Too = demais, excessivamente <br>It’s too cold to go out. (Está frio demais para sair) <br> <br>Very = muito <br>She’s very shy. (Ela é muito tímida) <br> <br>Almost = quase <br>She almost fell down the stairs. (Ela quase caiu da escada) <br> <br>c) Advérbios de Tempo (Time) <br> <br>Usamos o advérbio de tempo para dizer quando algo acontece, aconteceu ou acontecerá, <br>dependendo do tempo verbal ou da situação (alguns tempos verbais que aparecem nos <br>exemplos serão detalhados nas lições seguintes). Alguns advérb ios coincidem em ser <br>preposições em outros contextos. <br> <br>Soon = em breve <br>See you soon. (Vejo você em breve) <br> <br>Late = tarde <br>It’s too late. I have to go. (É muito tarde. Tenho que ir) <br> <br>Tomorrow = amanhã <br>I’m going to travel tomorrow. (Vou viajar amanhã). <br>Early = cedo <br>I always wake up early. (Eu sempre acordo cedo). <br> <br>Lately = ultimamente <br>I haven’t seen him lately (Não o tenho visto ultimamente) <br> <br>Forever = para sempre <br>She left forever. (Ela partiu para sempre) <br> <br>Yesterday = ontem <br>She went to the party yesterday. (Ela foi à festa ontem) <br> <br>Today = hoje <br>I’m so happy today! (Estou tão feliz hoje!) <br> <br>Now = agora <br>Please, come here now. (Por favor, veja aqui agora) <br> <br>After = depois <br>Close the door after leaving. (Feche a porta depois de sair) <br> <br>Before = antes <br>Wash your hands before eating. (Lave as mãos antes de comer)",
        "reconstructed_dialogue": "Situação: Dois colegas de trabalho falam sobre suas rotinas no fim de semana. <br>Amanda: So, where are you from? <br>Juan: Well, originally I’m from Bolivia, but my family moved to England when I <br>was a child. <br>Amanda: You speak very good English. <br>Juan: What do you do on weekends? <br>Amanda: I usually stay home and study. Sometimes I go out with some friends, and <br>DIÁLOGO <br>you? <br>Juan: I often watch my favorite series and always read a book. <br>Amanda: As I wake up early, I always get up quietly so as not to make noise. I have <br> breakfast and go jogging. <br>Juan: I never go jogging or work out. I hate it. <br>Amanda: I like it… I always go with a friend so we can talk while jogging.",
        "reconstructed_exercises": "77 – (FUNRIO – Prefeitura de Alta Floresta – MT) <br>Observe the following sentence: <br> <br>He was angry when we enquired ____ his daughter. <br> <br>Identify the best alternative that completes the context. <br> <br>a) ( ) On. <br>b) ( ) With. <br>c) ( ) Of. <br>d) ( ) About. <br>e) ( ) For. <br> <br>78 – CENTEC: Complete the blank spaces and check the correct sequence. <br> <br>This car is so ________. <br>I’m ________ sorry for this. <br>She feels _____ about that experience. <br> <br>a) ( ) Fast – terribly – bad. <br>b) ( ) Fastly – terrible – bad. <br>c) ( ) Fastly – terribly – badly. <br>d) ( ) Fast – terrible – badly. <br>e) ( ) Fast – terrible – bad.<br>Podemos falar da rotina de nossos amigos, membros da família, colegas de trabalho, etc., <br>usando também os verbos no Simpre Present, mas de uma maneira especial. Veja algumas <br>frases: <br> <br> My mother wakes up at 7 o’clock and goes to work. <br>(Minha mãe acorda às 7 e vai para o trabalho) <br> My dog plays with its toy every morning. (Meu <br>cachorro brinca com o brinquedo dele toda manhã) <br> Joanne studies for her tests every afternoon. (Joanne <br>estuda para as provas dela toda tarde) <br> Alex watches TV every Sunday. (Alex assiste à TV todo <br>domingo) <br> Jim rarely listens to music. (Jim raramente ouve <br>música) <br> Patt has English classes twice a week. (Patt tem aulas de inglês duas vezes por <br>semana) <br> Cindy always arrives to the meetings on time. (Cindy sempre chega a tempo às <br>reuniões) <br> Mary cleans the house* every day. (Mary limpa a casa todo dia). <br> <br> <br> <br>Você deve ter notado nas frases acima que ao falarmos de terceiras pessoas utilizamos <br>um S (e variações) no verbo principal. Vamos ver como isso funciona? <br> <br>Primeiro, vamos registrar que as frases em inglês têm construções diferentes, dependendo <br>se são afirmativas, interrogativas ou negativas. <br> <br>créditos: Paint by Number <br>2020. <br> <br>*Partes da Casa (Parts of the House) <br>Living room = sala de estar Bathroom = banheiro Garden = jardim <br>Dining room = sala de jantar Kitchen = cozinha Balcony = sacada, varanda <br>Bedroom = quarto Garage = garagem Stairway = escada"
    },
    "U4_L4": {
        "title": "Rotina de Terceiros (He/She/It) — Regras do S/ES",
        "unit": "UNIDADE 4 — ROTINA E AÇÕES HABITUAIS (SIMPLE PRESENT)",
        "sentences": [
            {
                "en": "She manages the commercial department.",
                "pt": "Ela gerencia o departamento comercial.",
                "missing": "manages",
                "options": [
                    "manages",
                    "manage",
                    "managing"
                ]
            },
            {
                "en": "He signs the contract with the supplier.",
                "pt": "Ele assina o contrato com o fornecedor.",
                "missing": "signs",
                "options": [
                    "signs",
                    "sign",
                    "signing"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Signs",
                "definition": "Assina (flexão de 3ª pessoa do verbo sign)."
            },
            {
                "term": "Supplier",
                "definition": "Fornecedor ou parceiro que provê produtos/serviços."
            },
            {
                "term": "Department",
                "definition": "Divisão interna da corporação."
            }
        ],
        "quiz": {
            "question": "Qual a terminação correta para 'go' na 3ª pessoa do singular (He/She/It)?",
            "options": [
                "go",
                "goes",
                "gos",
                "going"
            ],
            "correctIndex": 1,
            "explanation": "Verbos terminados em -O recebem -es na 3ª pessoa do singular: goes."
        },
        "businessContext": {
            "scenario": "Apresentando a rotina de aprovações do Diretor Financeiro para novos clientes.",
            "en": "The CFO approves all commercial contracts.",
            "pt": "O Diretor Financeiro aprova todos os contratos comerciais.",
            "missing": "approves",
            "options": [
                "approves",
                "approve",
                "approving"
            ],
            "terms": [
                {
                    "term": "CFO",
                    "definition": "Chief Financial Officer (Diretor Financeiro da empresa)."
                },
                {
                    "term": "Approves",
                    "definition": "Aprova (flexão da 3ª pessoa do singular do verbo approve)."
                }
            ],
            "quiz": {
                "question": "Como dizer 'O gerente gerencia as vendas'?",
                "options": [
                    "The manager manage the sales.",
                    "The manager to manage the sales.",
                    "The manager managing the sales.",
                    "The manager manages the sales."
                ],
                "correctIndex": 3,
                "explanation": "Para 'The manager' (ele/ela), o verbo recebe flexão do S/ES: 'manages'."
            }
        },
        "rawText": " 92 \n \n \n \nPodemos falar da rotina de nossos amigos, membros da família, colegas de trabalho, etc.,  \nusando também os verbos no Simpre Present, mas de uma maneira especial. Veja algumas \nfrases: \n \n My mother wakes up at 7 o’clock and goes to work. \n(Minha mãe acorda às 7 e vai para o trabalho) \n My dog plays with its toy every morning. (Meu \ncachorro brinca com o brinquedo dele toda manhã) \n Joanne studies for her tests every afternoon. (Joanne \nestuda para as provas dela toda tarde) \n Alex watches TV every Sunday. (Alex assiste à TV todo \ndomingo) \n Jim rarely listens to music. (Jim raramente ouve \nmúsica) \n Patt has English classes twice a week. (Patt tem aulas de inglês duas vezes por \nsemana) \n Cindy always arrives to the meetings on time. (Cindy sempre chega a tempo às \nreuniões) \n Mary cleans the house* every day. (Mary limpa a casa todo dia). \n \n \n \nVocê deve ter notado nas frases acima que ao falarmos de terceiras pessoas utilizamos \num S (e variações) no verbo principal. Vamos ver como isso funciona? \n \nPrimeiro, vamos registrar que as frases em inglês têm construções diferentes, dependendo \nse são afirmativas, interrogativas ou negativas. \n \ncréditos: Paint by Number \n2020. \n \n*Partes da Casa (Parts of the House) \nLiving room = sala de estar Bathroom = banheiro Garden = jardim \nDining room = sala de jantar Kitchen = cozinha Balcony = sacada, varanda \nBedroom = quarto Garage = garagem Stairway = escada \n \nLIÇÃO 4: Falando da Rotina e Hábitos de Terceiros \n(vários verbos). \n \n \n \n \n \n 93 \n \nAs frases afirmativas do Present Simple / Simple Present  são feitas com a seguinte \ncomposição: \nSujeito + verbo (+ complemento).  \nExemplo: \nI work at a hospital. \n \nAs frases interrogativas têm a seguinte forma: \nVerbo auxiliar (do ou does) no início da frase + sujeito + verbo principal (+ \ncomplemento) + ?  \n \nExemplos:  \nDo you work here? = você trabalha aqui? \nDoes he work here? = ele trabalha aqui? \nHow do you spell your name? = como se soletra o seu nome? \nWhen were you born? = quando você nasceu? \nDo you have brothers and sisters? = Você tem irmãos e irmãs? \nWhere do you study / work? = onde você estuda / trabalha? \nWhat do you do? / What is your profession? = qual sua profissão? \nWhere do you live? = onde você mora? \n \n \n \n \n \n \n \n \n \n \nAs frases negativas são feitas assim: \nSujeito + verbo auxiliar (do ou does) + not + verbo principal (+ complemento).  \nDICA \n \nPodemos responder três perguntas dos exemplos usando short answers: \nDo you work here? = você trabalha aqui? \n-  Yes, I do. / No, I don’t. \nDoes he work here? = ele trabalha aqui? \n- Yes, he does. / No, he doesn’t. \nDo you have brothers and sisters? \n- Yes, I do. / No, I don’t. \n \n 94 \nExemplo: \nI do not (don’t) work here (eu não trabalho aqui) / He does not (doesn’t) work here (ele \nnão trabalha aqui). \n \n \n \nVocê deve ter notado também, nas frases dos exemplos, que o verbo principal, na forma \nafirmativa, nem sempre recebe somente S no infinitivo (sem to); alguns verbos passam por \nalgumas modificações ortográficas. Conheça as principais: \n \n1 – Nos verbos terminados em ch, ss, o, sh, x, z acrescenta-se ES: \nExemplos: \nteach (ensinar) > She teaches English. (Ela ensina inglês) \nkiss (beijar) > He kisses her in the cheek. (Ele a beija na face) \ngo (ir) > Lucca goes to the gym every night. (Lucca vai à academia toda noite) \nwash (lavar) > My father always washes the dishes. (Meu pai sempre lava a louça)  \nfix (consertar) > He always fixes my car. (Ele sempre conserta meu carro) \nbuzz (zumbir) < The bee buzzes the flowers. (A abelha zumbe nas flores) \n \n2 – Verbos terminados em Y, precedido de consoante perdem essa letra, e ganham I + ES. \n \nExemplos: \ncry (chorar) > The baby cries a lot. (O bebê chora muito) \ntry (tentar) > He tries to get better grades every semester. (Ele tenta tirar notas melhores \ntodo semestre) \nForma afirmativa Forma negativa Forma Interrogativa \nI / we / you / they work I / we / you / they  \ndon’t work \nDo I / we / you / they work? \nHe / she / it works He / she / it doesn’t work Does he / she / it work? \n \nRESUMINDO \n \n 95 \n \n \n \n \n \n \nSituação: Charlie e Alice estudam juntos e falam sobre suas  rotinas de estudos e de \natividades dos familiares. \n \nCharlie:  So, Alice, do you come to school every day? \nAlice:   Yes, I have many subjects to study. My day starts early. I wake up at 6, take a \nshower, have breakfast and come to school by bus. \nCharlie:  Can’t your mother bring you? \nAlice:   No, my mother doesn’t have enough time to bring me. She starts work early, \nso she wakes up at 5:30, prepares our breakfast, cleans the house, takes my \nbrother to school and then goes to work. \n \n \n \n \n \n \n79 – Complete corretamente as frases com os verbos do quadro.  \n \nEats    make    drink    like    speaks    play    visits    plays \n \na) They  to study English. \nb) That girl  French well. \nc) The boys  in the park. \nd) John  the piano beautifully. \ne) You always  delicious cakes. \nf) She  her parents every Sunday. \nUm Caso Especial: o verbo To Have (ter) possui uma forma específica para he / she / it \nna forma afirmativa do  Presente do Indicativo: has. Exemplo: I have many books / she \nhas few books. \nDIÁLOGO \n \nEXERCÍCIOS \n 96 \ng) They  too much wine. \nh) Peter  fruit every morning. \n \n \n \n80 – Complete as frases abaixo com os verbos dos parênteses no Simple Present  \n(afirmativo).  \n \na) I (to listen)  to music every day. \nb) Simon (to collect)  stamps. \nc) We (to wash)  the dishes once a day. \nd) My mother always (to make)  breakfast. \ne) Sarah usually (to meet)  Maria at the tennis club. \n \n81 – Passe as frases abaixo para a forma interrogativa:  \n \na) I play tennis:  \nb) The train leaves at 8 a.m:  \nc) He always forgets his wallet:  \nd) Carolina is in America:  \n \n82 – Complete as frases abaixo com os verbos dos par ênteses no Simple Present – forma \nnegativa. \n \na) Tom  rare coins. (not/to collect) \nb) You  in the bathroom. (to sing) \nc) Julie  in the garden. (to work) \nd) I  the house. (to clean) \ne) Tina and Kate   the windows. (to open) \nf) Adam  French. (to speak) \ng) His sister  this kind of movie. (to like) \n \n83 – Um visitante estrangeiro que está em na empresa para conhecer novos produtos. \nEnquanto ele espera pelo gerente, você lhe faz algumas perguntas, para ser educado e \nmanter uma conversa. As perguntas que você faz são as que estão abaixo, mas nelas estão \n",
        "reconstructed_explanation": "LIÇÃO 4: Falando da Rotina e Hábitos de Terceiros <br>(vários verbos). <br>As frases afirmativas do Present Simple / Simple Present são feitas com a seguinte <br>composição: <br>Sujeito + verbo (+ complemento). <br>Exemplo: <br>I work at a hospital. <br> <br>As frases interrogativas têm a seguinte forma: <br>Verbo auxiliar (do ou does) no início da frase + sujeito + verbo principal (+ <br>complemento) + ? <br> <br>Exemplos: <br>Do you work here? = você trabalha aqui? <br>Does he work here? = ele trabalha aqui? <br>How do you spell your name? = como se soletra o seu nome? <br>When were you born? = quando você nasceu? <br>Do you have brothers and sisters? = Você tem irmãos e irmãs? <br>Where do you study / work? = onde você estuda / trabalha? <br>What do you do? / What is your profession? = qual sua profissão? <br>Where do you live? = onde você mora? <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>As frases negativas são feitas assim: <br>Sujeito + verbo auxiliar (do ou does) + not + verbo principal (+ complemento). <br>DICA <br> <br>Podemos responder três perguntas dos exemplos usando short answers: <br>Do you work here? = você trabalha aqui? <br>- Yes, I do. / No, I don’t. <br>Does he work here? = ele trabalha aqui? <br>- Yes, he does. / No, he doesn’t. <br>Do you have brothers and sisters? <br>- Yes, I do. / No, I don’t. <br>Exemplo: <br>I do not (don’t) work here (eu não trabalho aqui) / He does not (doesn’t) work here (ele <br>não trabalha aqui). <br> <br> <br> <br>Você deve ter notado também, nas frases dos exemplos, que o verbo principal, na forma <br>afirmativa, nem sempre recebe somente S no infinitivo (sem to); alguns verbos passam por <br>algumas modificações ortográficas. Conheça as principais: <br> <br>1 – Nos verbos terminados em ch, ss, o, sh, x, z acrescenta-se ES: <br>Exemplos: <br>teach (ensinar) > She teaches English. (Ela ensina inglês) <br>kiss (beijar) > He kisses her in the cheek. (Ele a beija na face) <br>go (ir) > Lucca goes to the gym every night. (Lucca vai à academia toda noite) <br>wash (lavar) > My father always washes the dishes. (Meu pai sempre lava a louça) <br>fix (consertar) > He always fixes my car. (Ele sempre conserta meu carro) <br>buzz (zumbir) < The bee buzzes the flowers. (A abelha zumbe nas flores)",
        "reconstructed_dialogue": "Situação: Charlie e Alice estudam juntos e falam sobre suas rotinas de estudos e de <br>atividades dos familiares. <br> <br>Charlie: So, Alice, do you come to school every day? <br>Alice: Yes, I have many subjects to study. My day starts early. I wake up at 6, take a <br>shower, have breakfast and come to school by bus. <br>Charlie: Can’t your mother bring you? <br>Alice: No, my mother doesn’t have enough time to bring me. She starts work early, <br>so she wakes up at 5:30, prepares our breakfast, cleans the house, takes my <br>brother to school and then goes to work. <br> <br> <br> <br> <br> <br> <br>79 – Complete corretamente as frases com os verbos do quadro. <br> <br>Eats make drink like speaks play visits plays <br> <br>a) They to study English. <br>b) That girl French well. <br>c) The boys in the park. <br>d) John the piano beautifully. <br>e) You always delicious cakes. <br>f) She her parents every Sunday. <br>Um Caso Especial: o verbo To Have (ter) possui uma forma específica para he / she / it <br>na forma afirmativa do Presente do Indicativo: has. Exemplo: I have many books / she <br>has few books. <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>g) They too much wine. <br>h) Peter fruit every morning. <br> <br> <br> <br>80 – Complete as frases abaixo com os verbos dos parênteses no Simple Present <br>(afirmativo). <br> <br>a) I (to listen) to music every day. <br>b) Simon (to collect) stamps. <br>c) We (to wash) the dishes once a day. <br>d) My mother always (to make) breakfast. <br>e) Sarah usually (to meet) Maria at the tennis club. <br> <br>81 – Passe as frases abaixo para a forma interrogativa: <br> <br>a) I play tennis: <br>b) The train leaves at 8 a.m: <br>c) He always forgets his wallet: <br>d) Carolina is in America: <br> <br>82 – Complete as frases abaixo com os verbos dos par ênteses no Simple Present – forma <br>negativa. <br> <br>a) Tom rare coins. (not/to collect) <br>b) You in the bathroom. (to sing) <br>c) Julie in the garden. (to work) <br>d) I the house. (to clean) <br>e) Tina and Kate the windows. (to open) <br>f) Adam French. (to speak) <br>g) His sister this kind of movie. (to like) <br> <br>83 – Um visitante estrangeiro que está em na empresa para conhecer novos produtos. <br>Enquanto ele espera pelo gerente, você lhe faz algumas perguntas, para ser educado e <br>manter uma conversa. As perguntas que você faz são as que estão abaixo, mas nelas estão",
        "reconstructed_exercises": "2 – Verbos terminados em Y, precedido de consoante perdem essa letra, e ganham I + ES. <br> <br>Exemplos: <br>cry (chorar) > The baby cries a lot. (O bebê chora muito) <br>try (tentar) > He tries to get better grades every semester. (Ele tenta tirar notas melhores <br>todo semestre) <br>Forma afirmativa Forma negativa Forma Interrogativa <br>I / we / you / they work I / we / you / they <br>don’t work <br>Do I / we / you / they work? <br>He / she / it works He / she / it doesn’t work Does he / she / it work? <br> <br>RESUMINDO <br>97 <br>faltando verbos auxiliares, que são necess ários quando fazemos perguntas no Simple <br>Present. Assim, complete as perguntas com o verbo auxiliar correto e depois responda-as, <br>usando short answers. <br> <br>a) you and Ana like the weather here? <br> Yes, <br>b) you study Portuguese? <br> No, <br>c) Paul need our products? <br> Yes, <br>d) Ana know our catalog? <br> No, <br> <br> <br> <br> <br> <br> <br>O S que acrescentamos ao verbo tem três maneiras de ser <br>pronunciado: <br> <br>1 – Quando o verbo termina com um desses sons surdos: /p/, <br>/t/, /k/, /f/, /θ/, o som é da letra S mesmo, pronunciado de <br>forma marcante: <br> <br>She stops here every day for a snack. (Ela para aqui todos os <br>dias para um lanche). <br>The boat floats smoothly. (O barco flutua sem problemas). <br>He talks to her. (Ele conversa com ela). <br>She laughs (gh = f) loudly. (Ela ri alto). <br>He smooths the cat’s fur. (th = θ). (Ele alisa o pelo do gato). <br> <br>2 – Quando o verbo termina com som sonoro ( /b/ /d/ /g/ /l/ /m/ /n/ / ŋ/ /v/ /ð/ e em <br>vogais, o S tem som de Z: <br> <br>This paper absorbs all the oil. (Este papel absorve todo o óleo). <br> <br>créditos: Paint by Number <br>2020."
    },
    "U4_L5": {
        "title": "Pronúncia do S Final",
        "unit": "UNIDADE 4 — ROTINA E AÇÕES HABITUAIS (SIMPLE PRESENT)",
        "sentences": [
            {
                "en": "He talks to several clients.",
                "pt": "Ele conversa com vários clientes.",
                "missing": "talks",
                "options": [
                    "talks",
                    "talk",
                    "talking"
                ]
            },
            {
                "en": "She works on international campaigns.",
                "pt": "Ela trabalha em campanhas internacionais.",
                "missing": "works",
                "options": [
                    "works",
                    "work",
                    "worker"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Voiced / Voiceless",
                "definition": "Com som de voz (vibração cordas vocais) / Sem som de voz."
            },
            {
                "term": "/s/ sound",
                "definition": "Som de s sibilante (após consoantes surdas, ex: works)."
            },
            {
                "term": "/z/ sound",
                "definition": "Som de z vibrado (após consoantes sonoras, ex: plays)."
            }
        ],
        "quiz": {
            "question": "Qual palavra tem o S final pronunciado como /iz/?",
            "options": [
                "talks",
                "manages",
                "works",
                "runs"
            ],
            "correctIndex": 1,
            "explanation": "Palavras terminadas em sons de 'ch', 'sh', 's', 'z', 'g' suave (como manage) recebem som de sílaba extra /iz/: manages."
        },
        "businessContext": {
            "scenario": "Alinhamento com equipe de vendas sobre campanhas comerciais e serviços oferecidos.",
            "en": "The company updates its product catalogs.",
            "pt": "A empresa atualiza seus catálogos de produtos.",
            "missing": "updates",
            "options": [
                "updates",
                "update",
                "updating"
            ],
            "terms": [
                {
                    "term": "Catalog",
                    "definition": "Mostruário digital ou impresso contendo ofertas de vendas."
                },
                {
                    "term": "Campaigns",
                    "definition": "Campanhas publicitárias comerciais."
                }
            ],
            "quiz": {
                "question": "Qual destas palavras comerciais tem a pronúncia do S final como /iz/?",
                "options": [
                    "services",
                    "sales",
                    "deals",
                    "contracts"
                ],
                "correctIndex": 0,
                "explanation": "Service termina com som de sibilante /s/, exigindo som /iz/ no plural: services."
            }
        },
        "rawText": " 97 \nfaltando verbos auxiliares, que são necess ários quando fazemos perguntas no Simple \nPresent. Assim, complete as perguntas com o verbo auxiliar correto e depois responda-as, \nusando short answers.  \n \na)  you and Ana like the weather here? \n Yes,   \nb)  you study Portuguese? \n No,   \nc)  Paul need our products? \n Yes,   \nd)  Ana know our catalog? \n No,   \n \n \n \n \n \n  \nO S que acrescentamos ao verbo tem três maneiras de ser \npronunciado:  \n \n1 – Quando o verbo termina com um desses sons surdos: /p/, \n/t/, /k/, /f/, /θ/, o som é da letra S mesmo, pronunciado de \nforma marcante: \n \nShe stops here every day for a snack. (Ela para aqui todos os \ndias para um lanche). \nThe boat floats smoothly. (O barco flutua sem problemas). \nHe talks to her. (Ele conversa com ela). \nShe laughs (gh = f) loudly. (Ela ri alto). \nHe smooths the cat’s fur. (th = θ). (Ele alisa o pelo do gato). \n \n2 – Quando o verbo termina com som sonoro ( /b/ /d/ /g/ /l/ /m/ /n/ / ŋ/ /v/ /ð/ e em \nvogais, o S tem som de Z: \n \nThis paper absorbs all the oil. (Este papel absorve todo o óleo). \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 5: Pronúncia do S final. \n \n \n \n \n \n 98 \nShe reads a lot. (Ela lê muito). \nThe dog digs the garden. (O cão escava o jardim). \nShe reveals her secrets. (Ela revela os segredos dela). \nHe swims in the pool. (Ele nada na piscina).  \nThe candle burns fast. (A vela queima rapidamente). \nShe brings her books. (ng = ŋ) (Ela traz os livros dela). \nShe forgives all his faults. (Ela perdoa todas as falhas dele). \nHe bathes his dog. (th = ð). (Ele dá banho no cachorro dele). \nThe bird flies. (O pássaro voa).  \n \n3 – Quando o verbo termina em som sibilante (aquele produzido ao se projetar um pouco \nde ar com a língua em direção aos dentes - /s/, /z/, /ʃ/, /tʃ/, /ʒ/ ou /dʒ/), o S é pronunciado \ncomo IZ: \n \nHe kisses her with love. (Ele a beija com amor). \nThe hummingbird buzzes its wings. (O colibri vibra suas asas).  \nShe washes her car. (Ela lava o carro dela). \nHe watches TV on the sofa. (Ele assiste à TV no sofá). \nShe *measures her waist. (Ela mede a cintura dela). \nHe always changes the color of his hair. (Ele sempre muda a cor do cabelo). \n \n* Nesta palavra o S em negrito tem som de /ʒ/. \n \n \n \n \n  \nAs regras acima se aplicam também ao plural dos substantivos.  \nExemplos: \nbooks, maps, churches, cities, birds, etc. \nOBSERVAÇÃO \n \n 99 \n \n \n \n84 – Acesse o site baixo para treinar a pronúncia de substantivos e verbos com a \nterminação em S: \n \n  \n \n85 – Escreva o plural das palavras abaixo. Após, classifique-as de acordo com a pronúncia \ndo S final: /s/,  /z/ or /iz/  \n \na) desk: ____________________ /      /  f) bus: _____________________ /      / \nb) bike: ____________________ /      /  g) fish: _____________________ /      / \nc) watch: __________________ /      /  h) piano: __________________ /      / \nd) cat: _____________________ /      /  i) products: ________________ /      / \ne) game: ___________________ /     /  k) house: __________________ /      / \n \n \n \n  \nhttp://www.eflnet.com/tutorials/finalses.php \nEXERCÍCIOS \nÉ PRECISO TAMBÉM CUIDAR DA PRONÚNCIA DO S INICIAL. \nMuitos brasileiros acabam colocando, erroneamente, um “i” como “suporte” para formar uma \nsílaba inicial, e assim pronunciam “star” como “istar”, “stop” como “istopi” – neste último \nexemplo, também tendem a acrescentar, de forma igualmente incorreta, um “i”  no final. A \npronúncia correta das palavras iniciadas com S, seguidas de consoante, seria como um “C” ou \n“SSSS”. Veja alguns exemplos com a pronúncia correta, transcrita segundo o Alfabeto Fonético \nInternacional (considere possíveis diferenças entre o inglês americano e o britânico):  \n Star /stɑr/  Stop /stɑp/  \n Study /’stʌdi/  Slow /sloʊ/  \n School /skuːl/  Sleep /slip/  \n \nDica \n \n",
        "reconstructed_explanation": "LIÇÃO 5: Pronúncia do S final. <br>She reads a lot. (Ela lê muito). <br>The dog digs the garden. (O cão escava o jardim). <br>She reveals her secrets. (Ela revela os segredos dela). <br>He swims in the pool. (Ele nada na piscina). <br>The candle burns fast. (A vela queima rapidamente). <br>She brings her books. (ng = ŋ) (Ela traz os livros dela). <br>She forgives all his faults. (Ela perdoa todas as falhas dele). <br>He bathes his dog. (th = ð). (Ele dá banho no cachorro dele). <br>The bird flies. (O pássaro voa).",
        "reconstructed_dialogue": "",
        "reconstructed_exercises": "3 – Quando o verbo termina em som sibilante (aquele produzido ao se projetar um pouco <br>de ar com a língua em direção aos dentes - /s/, /z/, /ʃ/, /tʃ/, /ʒ/ ou /dʒ/), o S é pronunciado <br>como IZ: <br> <br>He kisses her with love. (Ele a beija com amor). <br>The hummingbird buzzes its wings. (O colibri vibra suas asas). <br>She washes her car. (Ela lava o carro dela). <br>He watches TV on the sofa. (Ele assiste à TV no sofá). <br>She *measures her waist. (Ela mede a cintura dela). <br>He always changes the color of his hair. (Ele sempre muda a cor do cabelo). <br> <br>* Nesta palavra o S em negrito tem som de /ʒ/. <br> <br> <br> <br> <br> <br>As regras acima se aplicam também ao plural dos substantivos. <br>Exemplos: <br>books, maps, churches, cities, birds, etc. <br>OBSERVAÇÃO <br>84 – Acesse o site baixo para treinar a pronúncia de substantivos e verbos com a <br>terminação em S: <br> <br> <br> <br>85 – Escreva o plural das palavras abaixo. Após, classifique-as de acordo com a pronúncia <br>do S final: /s/, /z/ or /iz/ <br> <br>a) desk: ____________________ / / f) bus: _____________________ / / <br>b) bike: ____________________ / / g) fish: _____________________ / / <br>c) watch: __________________ / / h) piano: __________________ / / <br>d) cat: _____________________ / / i) products: ________________ / / <br>e) game: ___________________ / / k) house: __________________ / / <br> <br> <br> <br> <br>http://www.eflnet.com/tutorials/finalses.php <br>EXERCÍCIOS <br>É PRECISO TAMBÉM CUIDAR DA PRONÚNCIA DO S INICIAL. <br>Muitos brasileiros acabam colocando, erroneamente, um “i” como “suporte” para formar uma <br>sílaba inicial, e assim pronunciam “star” como “istar”, “stop” como “istopi” – neste último <br>exemplo, também tendem a acrescentar, de forma igualmente incorreta, um “i” no final. A <br>pronúncia correta das palavras iniciadas com S, seguidas de consoante, seria como um “C” ou <br>“SSSS”. Veja alguns exemplos com a pronúncia correta, transcrita segundo o Alfabeto Fonético <br>Internacional (considere possíveis diferenças entre o inglês americano e o britânico): <br> Star /stɑr/  Stop /stɑp/ <br> Study /’stʌdi/  Slow /sloʊ/ <br> School /skuːl/  Sleep /slip/ <br> <br>Dica<br>Você pode expressar preferências por tipo de comida <br>mencionando a nacionalidade. <br> <br>Exemplos: <br>I love Japanese food. <br>My sister likes Italian food. <br> <br>Você também pode mencionar diretamente um “prato”. <br>Exemplo: <br>I like beef, salad and French fries. <br> <br>Para ampliar seu vocabulário sobre o tema, veja abaixo palavras e frases mais comuns: <br> <br> <br> <br>FALANDO DE GOSTOS E <br>PREFERÊNCIAS. <br> <br>créditos: Paint by Number <br>2020."
    },
    "U5_L1": {
        "title": "Restaurantes, Comidas e Bebidas",
        "unit": "UNIDADE 5 — FALANDO DE GOSTOS E PREFERÊNCIAS",
        "sentences": [
            {
                "en": "I prefer Italian restaurants for business.",
                "pt": "Eu prefiro restaurantes italianos para negócios.",
                "missing": "prefer",
                "options": [
                    "prefer",
                    "prefers",
                    "preferring"
                ]
            },
            {
                "en": "We like to host dinners for clients.",
                "pt": "Nós gostamos de oferecer jantares para clientes.",
                "missing": "host",
                "options": [
                    "host",
                    "serve",
                    "eat"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Prefer",
                "definition": "Preferir uma opção em detrimento de outra."
            },
            {
                "term": "Host a dinner",
                "definition": "Oferecer ou organizar um jantar."
            },
            {
                "term": "Reservation",
                "definition": "Reserva de mesa."
            }
        ],
        "quiz": {
            "question": "Como se diz 'Eu gostaria de fazer uma reserva' em inglês?",
            "options": [
                "I want table.",
                "I like reservation.",
                "I prefer booking table.",
                "I would like to make a reservation."
            ],
            "correctIndex": 3,
            "explanation": "'I would like to make a reservation' é a expressão mais polida em inglês."
        },
        "businessContext": {
            "scenario": "Alinhando jantar de negócios corporativo para fechamento de parceria comercial.",
            "en": "We booked a table at a premium steakhouse.",
            "pt": "Nós reservamos uma mesa em uma churrascaria premium.",
            "missing": "booked",
            "options": [
                "booked",
                "reservated",
                "cooked"
            ],
            "terms": [
                {
                    "term": "Steakhouse",
                    "definition": "Restaurante especializado em carnes e cortes nobres."
                },
                {
                    "term": "Business lunch",
                    "definition": "Almoço comercial focado em discutir parcerias."
                }
            ],
            "quiz": {
                "question": "Como propor educadamente um almoço de negócios ao seu cliente?",
                "options": [
                    "Hey, eat lunch with me?",
                    "We lunch together?",
                    "Lunch is good?",
                    "Would you like to join me for a business lunch?"
                ],
                "correctIndex": 3,
                "explanation": "'Would you like to join me for...' é o convite formal corporativo padrão."
            }
        },
        "rawText": " 100 \n \n \n \n \n \n \n \n \n \n \n \n \nVocê pode expressar preferências por tipo de comida \nmencionando a nacionalidade. \n \nExemplos: \nI love Japanese food. \nMy sister likes Italian food. \n \nVocê também pode mencionar diretamente um “prato”. \nExemplo: \nI like beef, salad and French fries. \n \nPara ampliar seu vocabulário sobre o tema, veja abaixo palavras e frases mais comuns: \n \n \n \nFALANDO DE GOSTOS E \nPREFERÊNCIAS.  \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 1: Gostos e Preferências sobre Restaurantes, \nComidas e Bebidas.  \n \n \n \n \n \n \n \nVOCABULÁRIO \n \nReservation = reserva.  \nCheck = conta.  \nTip = gorjeta.  \nChange = troco. \nAll you can eat = tipo de restaurante onde se pode comer à vontade.  \nTable service = restaurante a la carte. \n \n 101 \n \n \n \n \n \n \nSituação: Andrew convida Sophia para sair para jantar. \n \nAndrew:  Would you like to go out for dinner? \nSophia:  I’d love to! \nDIÁLOGO \n \n Quick service ou counter service = restaurante estilo “fast food”, ou com “serviço” no \nbalcão. \n Waiter/Waitress = garçom/garçonete. \n For here or to go? (Para comer aqui ou para viagem?) \n I’d like to book a table for Friday. (Eu gostaria de reservar uma mesa para sábado.) \n A table for 3, please. (Uma mesa para três pessoas, por favor.) \n Do you have a reservation? (Você tem uma reserva?) \n I’m sorry, we’re full. (Sinto muito, estamos lotados.) \n This table is reserved. (Esta mesa está reservada.) \n This table is free. (Esta mesa está livre.) \n Please follow me. (Siga-me, por favor.) \n What do you recommend? (O que você recomenda?) \n Any appetizers? (Alguma entrada?) \n Would you like to see the menu? (Gostaria de ver o cardápio?) \n Would you like to order now? (Gostaria de pedir agora?) \n Can I take your order? (Posso anotar seu pedido?) \n I would like to order a…. (Eu gostaria de pedir…) \n Today’s special is spaghetti. (O prato do dia é espaguete.) \n Rare, medium or well done? (Malpassado, ao ponto, ou bem-passado?) \n And to drink? (E para beber?) \n Here you go. (Aqui está). \n Anything else? (Mais alguma coisa)? \n May I take your plate? (Posso tirar seu prato?) \n The check / bill, please. (A conta, por favor.) \n We don’t accept/take credit cards. (Não aceitamos cartões de crédito.) \n We only accept cash or debit card. (Só aceitamos dinheiro ou cartão de débito.) \n Service is included. (O serviço está incluso.) \nHere’s your receipt. (Aqui está seu recibo / fatura) \n \n\n",
        "reconstructed_explanation": "LIÇÃO 1: Gostos e Preferências sobre Restaurantes, <br>Comidas e Bebidas. <br> <br> <br> <br> <br> <br> <br> <br>VOCABULÁRIO <br> <br>Reservation = reserva. <br>Check = conta. <br>Tip = gorjeta. <br>Change = troco. <br>All you can eat = tipo de restaurante onde se pode comer à vontade. <br>Table service = restaurante a la carte.",
        "reconstructed_dialogue": "Situação: Andrew convida Sophia para sair para jantar. <br> <br>Andrew: Would you like to go out for dinner? <br>Sophia: I’d love to! <br>DIÁLOGO <br> <br> Quick service ou counter service = restaurante estilo “fast food”, ou com “serviço” no <br>balcão. <br> Waiter/Waitress = garçom/garçonete. <br> For here or to go? (Para comer aqui ou para viagem?) <br> I’d like to book a table for Friday. (Eu gostaria de reservar uma mesa para sábado.) <br> A table for 3, please. (Uma mesa para três pessoas, por favor.) <br> Do you have a reservation? (Você tem uma reserva?) <br> I’m sorry, we’re full. (Sinto muito, estamos lotados.) <br> This table is reserved. (Esta mesa está reservada.) <br> This table is free. (Esta mesa está livre.) <br> Please follow me. (Siga-me, por favor.) <br> What do you recommend? (O que você recomenda?) <br> Any appetizers? (Alguma entrada?) <br> Would you like to see the menu? (Gostaria de ver o cardápio?) <br> Would you like to order now? (Gostaria de pedir agora?) <br> Can I take your order? (Posso anotar seu pedido?) <br> I would like to order a…. (Eu gostaria de pedir…) <br> Today’s special is spaghetti. (O prato do dia é espaguete.) <br> Rare, medium or well done? (Malpassado, ao ponto, ou bem-passado?) <br> And to drink? (E para beber?) <br> Here you go. (Aqui está). <br> Anything else? (Mais alguma coisa)? <br> May I take your plate? (Posso tirar seu prato?) <br> The check / bill, please. (A conta, por favor.) <br> We don’t accept/take credit cards. (Não aceitamos cartões de crédito.) <br> We only accept cash or debit card. (Só aceitamos dinheiro ou cartão de débito.) <br> Service is included. (O serviço está incluso.) <br>Here’s your receipt. (Aqui está seu recibo / fatura)",
        "reconstructed_exercises": "Andrew: What kind of food do you like? <br>Sophia: I like Italian food. <br>Andrew: Do you like pizza? <br>Sophia: Yes, I do. <br>Andrew: What of drink do you like most? <br>Sophia: I like wine, especially the Portuguese ones. <br>Andrew: And (about) desserts, which ones do you like most? <br>Sophia: I love apple pie. <br>Andrew: Me too, but I’d rather have ice cream. <br>Andrew: So, let’s go to La Pasta? <br>Sophia: I’d rather go to Trattoria. It’s near here and the food is delicious! <br>[…] <br> <br> <br> <br> <br> <br> <br>Ao nos referir sobre comidas e bebidas, muitas vezes, é <br>necessário quantificá-las: uma porção, uma xícara, um pedaço, <br>um litro, um copo, já que em inglês, os alimentos que não <br>podem ser contados em unidades, os chamados <br>“uncountable”, precisam dos quantificadores como referência <br>quantidade; “countable” são os que podem ser contados. Veja: <br> <br> <br> <br>apple (maçã), orange (laranja), candies (doces), potatoes <br>(batatas), pancakes (panquecas), hot dogs, cookies (biscoitos), etc. <br> <br> <br> <br>rice (arroz), cereal, sugar (açúcar), juice (suco), water (água), coffee (café), cheese (queijo), <br>bread (pão), honey (mel), butter (manteiga), salt (sal), pasta (massa), flour (farinha), jam <br>(presunto), milk (leite), meat (carne), tea (chá), soup (sopa), etc. <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U5_L2": {
        "title": "Substantivos Contáveis e Incontáveis",
        "unit": "UNIDADE 5 — FALANDO DE GOSTOS E PREFERÊNCIAS",
        "sentences": [
            {
                "en": "We need some advice on this contract.",
                "pt": "Precisamos de alguns conselhos sobre este contrato.",
                "missing": "advice",
                "options": [
                    "advice",
                    "advices",
                    "advising"
                ]
            },
            {
                "en": "How much information do you have?",
                "pt": "Quanta informação você tem?",
                "missing": "much",
                "options": [
                    "much",
                    "many",
                    "few"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Much / Many",
                "definition": "Muito para incontáveis (singular) / Muitos para contáveis (plural)."
            },
            {
                "term": "Advice",
                "definition": "Conselho ou orientação (incontável em inglês, não tem plural advices)."
            },
            {
                "term": "Information",
                "definition": "Informação (incontável, não existe informations)."
            }
        ],
        "quiz": {
            "question": "Qual das opções abaixo é um substantivo incontável (uncountable)?",
            "options": [
                "client",
                "report",
                "information",
                "dollar"
            ],
            "correctIndex": 2,
            "explanation": "'information' é incontável e não aceita a forma plural 'informations'."
        },
        "businessContext": {
            "scenario": "Alinhando o buffet e coffee break para recepção de acionistas da empresa.",
            "en": "We need to order some water and coffee for the boardroom.",
            "pt": "Nós precisamos pedir água e café para a sala de reuniões.",
            "missing": "water",
            "options": [
                "water",
                "waters",
                "watering"
            ],
            "terms": [
                {
                    "term": "Boardroom refreshments",
                    "definition": "Petiscos e bebidas oferecidas em reuniões diretivas."
                },
                {
                    "term": "Coffee breaks",
                    "definition": "Intervalos para café em treinamentos corporativos."
                }
            ],
            "quiz": {
                "question": "Como pedir informações de preços adicionais a um fornecedor?",
                "options": [
                    "We need few informations about prices.",
                    "We need many information about your prices.",
                    "We need more informations about your prices.",
                    "We need some more information about your prices."
                ],
                "correctIndex": 3,
                "explanation": "'information' deve ser mantido no singular, pois é incontável."
            }
        },
        "rawText": " 102 \nAndrew:  What kind of food do you like?  \nSophia:   I like Italian food. \nAndrew:  Do you like pizza? \nSophia:  Yes, I do. \nAndrew:  What of drink do you like most? \nSophia:   I like wine, especially the Portuguese ones. \nAndrew:  And (about) desserts, which ones do you like most? \nSophia:  I love apple pie. \nAndrew:  Me too, but I’d rather have ice cream. \nAndrew:  So, let’s go to La Pasta? \nSophia:  I’d rather go to Trattoria. It’s near here and the food is delicious! \n[…] \n \n \n \n \n \n \nAo nos referir sobre comidas e bebidas, muitas vezes, é \nnecessário quantificá-las: uma porção, uma xícara, um pedaço, \num litro, um copo, já que em inglês, os alimentos que não \npodem ser contados em unidades, os chamados \n“uncountable”, precisam dos quantificadores como referência \nquantidade; “countable” são os que podem ser contados. Veja: \n \n \n \napple (maçã), orange  (laranja), candies (doces), potatoes  \n(batatas), pancakes (panquecas), hot dogs, cookies (biscoitos), etc. \n \n \n \nrice (arroz), cereal, sugar (açúcar), juice (suco), water (água), coffee (café), cheese (queijo), \nbread (pão), honey (mel), butter (manteiga), salt (sal), pasta (massa), flour (farinha), jam \n(presunto), milk (leite), meat (carne), tea (chá), soup (sopa), etc. \n  \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 2: Substantivos Contáveis e Incontáveis. \n \n \n \n \nSubstantivos Contáveis (Countable nouns) \n \nSubstantivos Incontáveis (Uncountable nouns) \n \n 103 \nExemplos: \n I ate two apples for breakfast. (Comi duas maçãs no café da manhã). \n She got four candies. (Ela pegou quatro doces). \n Could you please give me some coffee? (Você poderia me dar um pouco de café, \npor favor?) \n I need a glass of water. (Preciso de um copo d’água). \n He drank two cups of tea. (Ela tomou duas xícaras de chá). \n They bought a jar of orange juice. (Eles compraram uma jarra de suco de laranja). \n \n \n \n \n \n  \nVOCABULÁRIO \n \nMeals: breakfast (café da manhã), lunch (almoço), dinner (jantar). \n \nFood: rice, beans (feijão), meat, soup, cheese, bread, spaghetti, cake (bolo), fish \n(peixe), hot dog, chicken (frango), egg (ovo). \n \nVegetables: potato, tomato, carrot (cenoura), cauliflower (couve-flor), broccoli, \nspinach (espinafre), lettuce (alface). \n \nFruit: orange, mango, banana, strawberry (morango), grapes (uva), pear (pera), \npineapple (abacaxi), melon (melão), watermelon (melancia), papaya (mamão). \n \nDrinks: juice, soda, soft drink (refrigerante), beer (cerveja), water, tea, milk. \n \nOthers: sugar, chocolate, salt, ice cream (sorvete), brownie, jam, French fries. \n \nTableware: Spoon (colher), knife (faca), glass (copo); fork (garfo), plate/dish \n(prato), cup (xícara). \n 104 \n \n \n \n86 – Abaixo você encontra um extenso vocabulário relativo a comidas, bebidas e utensílios \nde mesa. Separe -os em colunas, segundo o grupo a que pertencem, sem traduzir, em \ninglês.  \n \ntea – pear – knife - hamburger – peach – soda – fork – sparkling water – salad – cake – \ngrapes – sandwich – lemon – milk – beer – glass – butter – cup – orange – cereal – spoon \n– pizza – plate – coffee.  \n \na) Beverages:    \nb) Breakfast:  \nc) Snacks:  \nd) Fruit:  \ne) Tableware:  \n \n87 – (Instituto Machado de Assis – adaptada): Qual substantivo não apresenta a \nclassificação correta? \n \na) (   ) Car (Countable) \nb) (   ) Chocolate (Uncountable) \nc) (   ) Music (Countable) \nd) (   ) Student (Countable) \n \n88 – Passe o diálogo abaixo para o inglês:  \n \nPaul: Você gostaria de jantar comigo Mary?  \nMary: Sim, gostaria. Quando?  \nPaul: Sábado à noite.  \nMary: A que horas?  \nPaul: Às 8h. Está bem para você?  \nMary: Sim.  \nPaul: Gostaria de ir a um restaurante francês?  \nMary: Sim, eu gosto de comida francesa.  \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 2: Substantivos Contáveis e Incontáveis. <br> <br> <br> <br> <br>Substantivos Contáveis (Countable nouns) <br> <br>Substantivos Incontáveis (Uncountable nouns) <br>Exemplos: <br> I ate two apples for breakfast. (Comi duas maçãs no café da manhã). <br> She got four candies. (Ela pegou quatro doces). <br> Could you please give me some coffee? (Você poderia me dar um pouco de café, <br>por favor?) <br> I need a glass of water. (Preciso de um copo d’água). <br> He drank two cups of tea. (Ela tomou duas xícaras de chá). <br> They bought a jar of orange juice. (Eles compraram uma jarra de suco de laranja). <br> <br> <br> <br> <br> <br> <br>VOCABULÁRIO <br> <br>Meals: breakfast (café da manhã), lunch (almoço), dinner (jantar). <br> <br>Food: rice, beans (feijão), meat, soup, cheese, bread, spaghetti, cake (bolo), fish <br>(peixe), hot dog, chicken (frango), egg (ovo). <br> <br>Vegetables: potato, tomato, carrot (cenoura), cauliflower (couve-flor), broccoli, <br>spinach (espinafre), lettuce (alface). <br> <br>Fruit: orange, mango, banana, strawberry (morango), grapes (uva), pear (pera), <br>pineapple (abacaxi), melon (melão), watermelon (melancia), papaya (mamão). <br> <br>Drinks: juice, soda, soft drink (refrigerante), beer (cerveja), water, tea, milk. <br> <br>Others: sugar, chocolate, salt, ice cream (sorvete), brownie, jam, French fries. <br> <br>Tableware: Spoon (colher), knife (faca), glass (copo); fork (garfo), plate/dish <br>(prato), cup (xícara).",
        "reconstructed_dialogue": "",
        "reconstructed_exercises": "86 – Abaixo você encontra um extenso vocabulário relativo a comidas, bebidas e utensílios <br>de mesa. Separe -os em colunas, segundo o grupo a que pertencem, sem traduzir, em <br>inglês. <br> <br>tea – pear – knife - hamburger – peach – soda – fork – sparkling water – salad – cake – <br>grapes – sandwich – lemon – milk – beer – glass – butter – cup – orange – cereal – spoon <br>– pizza – plate – coffee. <br> <br>a) Beverages: <br>b) Breakfast: <br>c) Snacks: <br>d) Fruit: <br>e) Tableware: <br> <br>87 – (Instituto Machado de Assis – adaptada): Qual substantivo não apresenta a <br>classificação correta? <br> <br>a) ( ) Car (Countable) <br>b) ( ) Chocolate (Uncountable) <br>c) ( ) Music (Countable) <br>d) ( ) Student (Countable) <br> <br>88 – Passe o diálogo abaixo para o inglês: <br> <br>Paul: Você gostaria de jantar comigo Mary? <br>Mary: Sim, gostaria. Quando? <br>Paul: Sábado à noite. <br>Mary: A que horas? <br>Paul: Às 8h. Está bem para você? <br>Mary: Sim. <br>Paul: Gostaria de ir a um restaurante francês? <br>Mary: Sim, eu gosto de comida francesa.<br>89 – (NUCEPE – adaptada): A sequência que mostra somente substantivos contáveis é: <br> <br>a) ( ) rice, meat, cherry, tea. <br>b) ( ) sausage, water, potato, cake. <br>c) ( ) electricity, pride, house, bread. <br>d) ( ) eggplant, pantyhose, truck, wolf. <br>e) ( ) homework, evidence, flour, orange. <br> <br> <br> <br> <br> <br> <br> <br>Muitas pessoas gostam de conversar sobre cinema e <br>programas de TV. A seguir, veja algumas frases usuais: <br> <br> What's on at the cinema/movies? (O que está passando <br>no cinema?) <br> Is there anything good on at the cinema /movies? (Está <br>passando algo bom no cinema?) <br> They’re showing a new movie. (Está passando um filme <br>novo.) <br> What's this film about? (Este filme é sobre o quê?) <br> Have you seen it? (Você já o viu?) <br> I’ve got two tickets. (Tenho dois ingressos.) <br> Who's in it? (Quem está no filme?) <br> Did you like it? (Você gostou?) <br> <br> <br> <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U5_L3": {
        "title": "Gostos e preferências: Cinema e TV",
        "unit": "UNIDADE 5 — FALANDO DE GOSTOS E PREFERÊNCIAS",
        "sentences": [
            {
                "en": "I watch business documentaries to learn.",
                "pt": "Eu assisto documentários de negócios para aprender.",
                "missing": "documentaries",
                "options": [
                    "documentaries",
                    "documentary",
                    "documents"
                ]
            },
            {
                "en": "She enjoys creative marketing ads.",
                "pt": "Ela gosta de anúncios de marketing criativos.",
                "missing": "ads",
                "options": [
                    "ads",
                    "movies",
                    "novels"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Watch",
                "definition": "Assistir ou monitorar visualmente."
            },
            {
                "term": "Commercial / Ad",
                "definition": "Anúncio publicitário ou propaganda televisiva comercial."
            },
            {
                "term": "Documentary",
                "definition": "Documentário informativo."
            }
        ],
        "quiz": {
            "question": "Como se traduz a frase 'Ela gosta de anúncios'?",
            "options": [
                "She likes to watches advertisement.",
                "She like advertisements.",
                "She likes advertisements.",
                "She liking advertisement."
            ],
            "correctIndex": 2,
            "explanation": "Para 'She', o verbo recebe o S: She likes."
        },
        "businessContext": {
            "scenario": "Discutindo a produção do novo comercial de TV da marca com a agência de publicidade.",
            "en": "Our new commercial will air during prime time.",
            "pt": "Nosso novo comercial irá ao ar durante o horário nobre.",
            "missing": "commercial",
            "options": [
                "commercial",
                "cinema",
                "movie"
            ],
            "terms": [
                {
                    "term": "Air time",
                    "definition": "Tempo ou horário de veiculação na mídia."
                },
                {
                    "term": "Prime time",
                    "definition": "Horário nobre televisivo com maior audiência comercial."
                }
            ],
            "quiz": {
                "question": "Como denominar o vídeo publicitário que vai ao ar na TV?",
                "options": [
                    "TV Cinema",
                    "TV Commercial",
                    "TV Movie",
                    "TV Documentary"
                ],
                "correctIndex": 1,
                "explanation": "Vídeos promocionais de empresas na TV são chamados de 'TV commercials'."
            }
        },
        "rawText": " 105 \n \n89 – (NUCEPE – adaptada): A sequência que mostra somente substantivos contáveis é:  \n \na) (   ) rice, meat, cherry, tea. \nb) (   ) sausage, water, potato, cake. \nc) (   ) electricity, pride, house, bread. \nd) (   ) eggplant, pantyhose, truck, wolf. \ne) (   ) homework, evidence, flour, orange. \n \n \n \n \n  \n \n \nMuitas pessoas gostam de conversar sobre cinema e \nprogramas de TV. A seguir, veja algumas frases usuais: \n \n What's on at the cinema/movies? (O que está passando \nno cinema?) \n Is there anything good on at the cinema /movies? (Está \npassando algo bom no cinema?) \n They’re showing a new movie. (Está passando um filme \nnovo.) \n What's this film about? (Este filme é sobre o quê?) \n Have you seen it? (Você já o viu?) \n I’ve got two tickets. (Tenho dois ingressos.) \n Who's in it? (Quem está no filme?) \n Did you like it? (Você gostou?) \n \n \n \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 3: Gostos e preferências: Cinema e TV. \n 106 \n \n \n \n \n \n \n \n \n \nSituação: Evelyn e Florence conversam sobre suas preferências de filmes e programas de \nTV. \n \nEvelyn:   What kind of film do you like? \nFlorence:   I like drama \nVOCABULÁRIO \n \nTo show = Passar (programa ou filme) \nTicket = Ingresso \nBox office hit / blockbuster = Sucesso de bilheteria \n \nDIÁLOGO \n \nKinds of film: horror, documentaries, action, thriller (suspense), comedy, western, \nscience fiction, animated/animation. \nOpiniões sobre filmes e programas televisivos: \nI loved it. (Eu adorei.) \nIt’s worth seeing. (Vale a pena assistir.) \nI really enjoyed it.  (Eu gostei muito.) \nI saw the preview.  (Eu vi o trailer.) \nIt looks good on the preview. (Pelo trailer parece bom.) \nIt’s horrible! (É muito ruim!) \nI didn’t like it. (Não gostei.) \nIt is a waste of money. (É jogar dinheiro fora.) \nIt’s not worth it! (Não vale a pena!) \n \n 107 \nEvelyn:  Who’s your favorite actor? \nFlorence:   My favorite actor is Rodrigo Santoro. I love him! \nEvelyn:  I love him too! \nFlorence:  How often do you go to the cinema/movies? \nEvelyn:  I go to the cinema once a month. \nFlorence:  What's on at the cinema these days? \nEvelyn:  I’m not sure, but I think they’re showing “Coringa” at Cinemax. \nFlorence:  Would you like to see it? \nEvelyn:  Sure! I’d love to. \nFlorence:  And… what kind of TV programs do you like? \nEvelyn:   I like talk shows. \nFlorence:  Do you watch TV every day? \nEvelyn:   No. Sometimes. \n[…] \n \n \n \n \n \n \n90 – Complete o diálogo corretamente, em inglês, com respostas apropriadas.   \n \nPaty: Can I ask you some questions, Victoria? \nVick:  \nPaty: Where do you live? \nVick:  \nPaty: How old are you? \nVick:  \nPaty: Are you a student? \nVick:  \nPaty: Do you like watching to movies? \nVick:  \nPaty: What kind of movies do you like? \nVick:  \nPaty: And what do you do in your free time? \nVick:  \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 3: Gostos e preferências: Cinema e TV.",
        "reconstructed_dialogue": "Situação: Evelyn e Florence conversam sobre suas preferências de filmes e programas de <br>TV. <br> <br>Evelyn: What kind of film do you like? <br>Florence: I like drama <br>VOCABULÁRIO <br> <br>To show = Passar (programa ou filme) <br>Ticket = Ingresso <br>Box office hit / blockbuster = Sucesso de bilheteria <br> <br>DIÁLOGO <br> <br>Kinds of film: horror, documentaries, action, thriller (suspense), comedy, western, <br>science fiction, animated/animation. <br>Opiniões sobre filmes e programas televisivos: <br>I loved it. (Eu adorei.) <br>It’s worth seeing. (Vale a pena assistir.) <br>I really enjoyed it. (Eu gostei muito.) <br>I saw the preview. (Eu vi o trailer.) <br>It looks good on the preview. (Pelo trailer parece bom.) <br>It’s horrible! (É muito ruim!) <br>I didn’t like it. (Não gostei.) <br>It is a waste of money. (É jogar dinheiro fora.) <br>It’s not worth it! (Não vale a pena!) <br>Evelyn: Who’s your favorite actor? <br>Florence: My favorite actor is Rodrigo Santoro. I love him! <br>Evelyn: I love him too! <br>Florence: How often do you go to the cinema/movies? <br>Evelyn: I go to the cinema once a month. <br>Florence: What's on at the cinema these days? <br>Evelyn: I’m not sure, but I think they’re showing “Coringa” at Cinemax. <br>Florence: Would you like to see it? <br>Evelyn: Sure! I’d love to. <br>Florence: And… what kind of TV programs do you like? <br>Evelyn: I like talk shows. <br>Florence: Do you watch TV every day? <br>Evelyn: No. Sometimes. <br>[…]",
        "reconstructed_exercises": "90 – Complete o diálogo corretamente, em inglês, com respostas apropriadas. <br> <br>Paty: Can I ask you some questions, Victoria? <br>Vick: <br>Paty: Where do you live? <br>Vick: <br>Paty: How old are you? <br>Vick: <br>Paty: Are you a student? <br>Vick: <br>Paty: Do you like watching to movies? <br>Vick: <br>Paty: What kind of movies do you like? <br>Vick: <br>Paty: And what do you do in your free time? <br>Vick:<br>Paty: Great! Now I have to go. <br>Vick: <br> <br>91 – Relacione o tipo de filme com suas definições: <br> <br>1. a movie without real people- another word for a cartoon. ( ) Sci-Fi <br>2. an old movie, often in black and white. ( ) Silent <br>3. a movie with lots of songs and dancing. ( ) Action <br>4. a movie that is very frightening. ( ) Musical <br>5. a movie involving the police. ( ) Thriller <br>6. a movie set in the future. ( ) Comedy <br>7. a movie that will make you laugh a lot. ( ) Romance <br>8. a movie with a love story ( ) Animation <br> <br> <br> <br> <br>Quando falamos de gostos e preferências costumamos fazer <br>comparações (o que é melhor, pior, igual, inferior, etc.). Em <br>inglês, essas estruturas comparativas são muito fáceis de <br>fazer. Veja: <br> <br> <br> <br>Exemplos: <br>New York is as big as São Paulo. (Nova Iorque é tão grande <br>quanto São Paulo). <br>This book is as good as the other. (Este livro é tão bom quanto o outro). <br> <br> <br> <br>Exemplos: <br>Lesson 1 is less important than lesson 2. (A"
    },
    "U5_L4": {
        "title": "O Comparativo",
        "unit": "UNIDADE 5 — FALANDO DE GOSTOS E PREFERÊNCIAS",
        "sentences": [
            {
                "en": "This project is more profitable than the last one.",
                "pt": "Este projeto é mais lucrativo do que o anterior.",
                "missing": "more",
                "options": [
                    "more",
                    "most",
                    "er"
                ]
            },
            {
                "en": "Our software is faster than the competitor's.",
                "pt": "Nosso software é mais rápido que o do concorrente.",
                "missing": "faster",
                "options": [
                    "faster",
                    "fastest",
                    "more fast"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Faster than",
                "definition": "Mais rápido do que (comparativo de adjetivo curto)."
            },
            {
                "term": "More expensive",
                "definition": "Mais caro (comparativo de adjetivo longo)."
            },
            {
                "term": "Competitor",
                "definition": "Empresa concorrente no mercado."
            }
        ],
        "quiz": {
            "question": "Qual é o comparativo correto para o adjetivo 'good'?",
            "options": [
                "more good",
                "gooder",
                "better",
                "best"
            ],
            "correctIndex": 2,
            "explanation": "'good' é um adjetivo irregular e seu comparativo é 'better'."
        },
        "businessContext": {
            "scenario": "Apresentando análise comparativa de concorrência e vantagens do seu produto.",
            "en": "Our pricing is more competitive than theirs.",
            "pt": "Nossos preços são mais competitivos do que os deles.",
            "missing": "competitive",
            "options": [
                "competitive",
                "competitiver",
                "more competitive"
            ],
            "terms": [
                {
                    "term": "Competitive",
                    "definition": "Atraente em preço ou qualidade comparado aos outros."
                },
                {
                    "term": "Value proposition",
                    "definition": "Proposta de valor diferenciada que atrai o comprador."
                }
            ],
            "quiz": {
                "question": "Como dizer que sua solução é melhor que a do concorrente?",
                "options": [
                    "Our solution is more good than competitor.",
                    "Our solution is gooder than competitor.",
                    "Our solution is better than the competitor's.",
                    "Our solution is best than competitor."
                ],
                "correctIndex": 2,
                "explanation": "'better than' é o comparativo de superioridade correto para good."
            }
        },
        "rawText": " 108 \nPaty: Great! Now I have to go. \nVick:  \n \n91 – Relacione o tipo de filme com suas definições:  \n \n1. a movie without real people- another word for a cartoon. (   ) Sci-Fi \n2. an old movie, often in black and white. (   ) Silent \n3. a movie with lots of songs and dancing. (   ) Action \n4. a movie that is very frightening. (   ) Musical \n5. a movie involving the police. (   ) Thriller \n6. a movie set in the future. (   ) Comedy \n7. a movie that will make you laugh a lot. (   ) Romance \n8. a movie with a love story (   ) Animation \n \n \n \n \nQuando falamos de gostos e preferências costumamos fazer \ncomparações (o que é melhor, pior, igual, inferior, etc.). Em \ninglês, essas estruturas comparativas são muito fáceis de \nfazer. Veja: \n \n \n \nExemplos:  \nNew York is as big as São Paulo. (Nova Iorque é tão grande \nquanto São Paulo).        \nThis book is as good as the other. (Este livro é tão bom quanto o outro). \n \n \n \nExemplos: \nLesson 1 is less important than lesson 2. (A lição 1 é menos importante do que a lição 2). \nMy bag is less organized than yours. (Minha bolsa está menos organizada do que a sua). \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 4: O Comparativo. \nComparativo de Igualdade: as + adjetivo + as  \n \nComparativo de Inferioridade: less + adjetivo + than \n \n 109 \n \n \na) Quando comparamos adjetivos de uma: adjetivo + er + than. \nExemplos: \nJeff taller than Roger. (Jef é mais alto do que o Roger). \nThis car is faster than mine (este carro é mais rápido do que o meu).  \n \na.1) Quando o adjetivo termina em E, recebe apenas R. \n       >Safe (seguro) > safer (mais seguro). \n Exemplo: \nThis city is safer than Beijing. (Esta cidade é mais segura do que Pequim.) \n \na.2) Para receber o sufixo –er muitos adjetivos precisam passar por alterações ortográficas.  \n      >Big (grande) > bigger (maior) - terminado em CVC (consoante, vogal, consoante), \ndobra-se a última letra. \nExemplo: \nMy house is bigger than yours. (Minha casa é maior do que a sua). \n \na.3) Para adjetivos de duas sílabas terminado em Y, troca-se o Y por i e acrescenta-se er. \n>Easy (fácil) > easier (mais fácil). \nExemplo: \nExercise 2 is easier than exercise 1. (O exercício 2 é mais fácil do que o exercício 1.) \n \nb) Quando comparamos adjetivos de duas sílabas que não terminam em Y, e todos os \nadjetivos de três sílabas ou mais, usamos a forma more + adjetivo + than. \nExemplos: \nThis apartment is more comfortable than that one.  \n(Este apartamento é mais confortável do que aquele.) \n          \nShanghai is more polluted than Barcelona. \n(Xangai é mais poluída do que Barcelona.) \n \nc) Há adjetivos que são irregulares, ou seja, fazem o comparativo com uma forma própria. \nExemplos: \nGood (bom) > better (melhor). \nBad (ruim) > worse (pior) \nComparativo de Superioridade: -er+adjetivo / more + adjetivo + than \n 110 \nFar (longe) > farther ou further (mais longe) \n \n \n \n \n \n \nSituação: Frank e Glenda estão decidindo onde vão passar o feriado. Frank quer ir a Búzios \ne Glenda a Maragogi. Eles conversam fazendo comparações entre esses lugares. \n \nFrank:   How about going to Buzios this holiday? \nGlenda:  I don’t know… I prefer a less crowded beach. How about Maragogi? \nFrank:   Maragogi is farther than Buzios. \nGlenda:  Yes, but Maragogi is as beautiful as Buzios, and besides, it’s quieter. \nFrank:   The road to Buzios is wider and better. \nGlenda:  Yes, but prices in Buzios are higher than in Maragogi. \nFrank:   You’re right.  \nGlenda:  And besides, the water in Maragogi is cleaner than in Buzios. \nFrank:   Ok. You’ve convinced me… Let’s go to Maragogi. \n \n \n \n \n \n \n92 – Faça frases com os elementos indicados, usando o comparativo de igualdade.  \n \na) David / his brother (clever)  \nb) A cell phone / a computer (useful)  \nc) Miss Lopez / Miss Taylor (competent)  \n \n93 – Elabore frases com os elementos abaixo usando o comparativo de inferioridade:  \n \na) Búzios / Petrópolis (polluted)  \nb) Boxing / Car Racing (dangerous)  \nc) Fiat / Corolla (comfortable)  \nDIÁLOGO \n \nEXERCÍCIOS \n 111 \n \n94 – Complete as frases utilizando os adjetivos dos parênteses para formar o comparativo \nde superioridade: \n \na) Linhares is  than Rio Bananal. (big). \nb) Lagoa Juparanã is  than Lagoa Nova (large). \nc) This tree is  than that one. (tall). \nd) This camera is  than mine (efficient). \ne) Rio Tietê is  than Rio Doce (polluted). \nf) Rolex is  than Gucci. (expensive). \n \n95 – (FMU - adaptada):  A opção que completa corretamente a frase é: \nThat table is __________ than this one. \n \na) (   ) long \nb) (   ) more long \nc) (   ) longest \nd) (   ) longer \ne) (   ) most long \n \n96 – (PUC - adaptada): A opção que completa corretamente a frase é: \nPapyrus was used ____________ than paper. \n \na) (   ) early \nb) (   ) earlier \nc) (   ) more early \nd) (   ) earlyer \ne) (   ) earliest \n \n \n \n \n \n \n \n \n",
        "reconstructed_explanation": "lição 1 é menos importante do que a lição 2). <br>My bag is less organized than yours. (Minha bolsa está menos organizada do que a sua). <br> <br> <br>créditos: Paint by Number <br>2020. <br> <br>LIÇÃO 4: O Comparativo. <br>Comparativo de Igualdade: as + adjetivo + as <br> <br>Comparativo de Inferioridade: less + adjetivo + than <br>a) Quando comparamos adjetivos de uma: adjetivo + er + than. <br>Exemplos: <br>Jeff taller than Roger. (Jef é mais alto do que o Roger). <br>This car is faster than mine (este carro é mais rápido do que o meu). <br> <br>a.1) Quando o adjetivo termina em E, recebe apenas R. <br> >Safe (seguro) > safer (mais seguro). <br> Exemplo: <br>This city is safer than Beijing. (Esta cidade é mais segura do que Pequim.) <br> <br>a.2) Para receber o sufixo –er muitos adjetivos precisam passar por alterações ortográficas. <br> >Big (grande) > bigger (maior) - terminado em CVC (consoante, vogal, consoante), <br>dobra-se a última letra. <br>Exemplo: <br>My house is bigger than yours. (Minha casa é maior do que a sua). <br> <br>a.3) Para adjetivos de duas sílabas terminado em Y, troca-se o Y por i e acrescenta-se er. <br>>Easy (fácil) > easier (mais fácil). <br>Exemplo: <br>Exercise 2 is easier than exercise 1. (O exercício 2 é mais fácil do que o exercício 1.) <br> <br>b) Quando comparamos adjetivos de duas sílabas que não terminam em Y, e todos os <br>adjetivos de três sílabas ou mais, usamos a forma more + adjetivo + than. <br>Exemplos: <br>This apartment is more comfortable than that one. <br>(Este apartamento é mais confortável do que aquele.) <br> <br>Shanghai is more polluted than Barcelona. <br>(Xangai é mais poluída do que Barcelona.) <br> <br>c) Há adjetivos que são irregulares, ou seja, fazem o comparativo com uma forma própria. <br>Exemplos: <br>Good (bom) > better (melhor). <br>Bad (ruim) > worse (pior) <br>Comparativo de Superioridade: -er+adjetivo / more + adjetivo + than <br>Far (longe) > farther ou further (mais longe)",
        "reconstructed_dialogue": "Situação: Frank e Glenda estão decidindo onde vão passar o feriado. Frank quer ir a Búzios <br>e Glenda a Maragogi. Eles conversam fazendo comparações entre esses lugares. <br> <br>Frank: How about going to Buzios this holiday? <br>Glenda: I don’t know… I prefer a less crowded beach. How about Maragogi? <br>Frank: Maragogi is farther than Buzios. <br>Glenda: Yes, but Maragogi is as beautiful as Buzios, and besides, it’s quieter. <br>Frank: The road to Buzios is wider and better. <br>Glenda: Yes, but prices in Buzios are higher than in Maragogi. <br>Frank: You’re right. <br>Glenda: And besides, the water in Maragogi is cleaner than in Buzios. <br>Frank: Ok. You’ve convinced me… Let’s go to Maragogi.",
        "reconstructed_exercises": "92 – Faça frases com os elementos indicados, usando o comparativo de igualdade. <br> <br>a) David / his brother (clever) <br>b) A cell phone / a computer (useful) <br>c) Miss Lopez / Miss Taylor (competent) <br> <br>93 – Elabore frases com os elementos abaixo usando o comparativo de inferioridade: <br> <br>a) Búzios / Petrópolis (polluted) <br>b) Boxing / Car Racing (dangerous) <br>c) Fiat / Corolla (comfortable) <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>94 – Complete as frases utilizando os adjetivos dos parênteses para formar o comparativo <br>de superioridade: <br> <br>a) Linhares is than Rio Bananal. (big). <br>b) Lagoa Juparanã is than Lagoa Nova (large). <br>c) This tree is than that one. (tall). <br>d) This camera is than mine (efficient). <br>e) Rio Tietê is than Rio Doce (polluted). <br>f) Rolex is than Gucci. (expensive). <br> <br>95 – (FMU - adaptada): A opção que completa corretamente a frase é: <br>That table is __________ than this one. <br> <br>a) ( ) long <br>b) ( ) more long <br>c) ( ) longest <br>d) ( ) longer <br>e) ( ) most long <br> <br>96 – (PUC - adaptada): A opção que completa corretamente a frase é: <br>Papyrus was used ____________ than paper. <br> <br>a) ( ) early <br>b) ( ) earlier <br>c) ( ) more early <br>d) ( ) earlyer <br>e) ( ) earliest<br>Quando queremos destacar uma característica ou qualidade <br>de algo ou de alguém, de modo superior ou inferior, usamos <br>o grau superlativo, que tem duas formas: <br> <br> <br> <br>Quando o adjetivo tem uma ou duas sílabas: the + adjetivo + <br>est. <br>Cold (frio) > the coldest (o/a mais frio/a). <br>Fast (rápido) > the fastest (o/a mais rápido/a). <br> <br>Exemplos: <br>Russia is one of the coldest countries in the world. (A Rússia é um dos países mais frios <br>do mundo). <br>Ferrari is the fastest car I know. (Ferrari é o carro mais rápido que eu conheço). <br> <br>Quando o adjetivo tem mais de duas sílabas: the most + adjetivo. <br>Expensive > the most expensive. (o mais caro) <br>Beautiful > the most beautiful. (o mais bonito) <br> <br>Exemplos: <br>McLaren is the most expensive car in the world so far. (McLaren é o carro mais caro do <br>mundo até agora) <br>Angelina Joli is one of the most beautiful actresses. (Angelina Joli é uma das atrizes mais <br>bonitas) <br> <br> <br> <br>A estrutura do superlativo de inferioridade é: the least + adjetivo. <br>Exemplos: <br>Vaticano is the least populous country. (O Vaticano é o país menos populoso) <br>Richard is the least generous boy I know. (Richard é o garoto menos generoso que eu <br>conheço) <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U5_L5": {
        "title": "O Superlativo",
        "unit": "UNIDADE 5 — FALANDO DE GOSTOS E PREFERÊNCIAS",
        "sentences": [
            {
                "en": "This is the most secure server we have.",
                "pt": "Este é o servidor mais seguro que nós temos.",
                "missing": "most",
                "options": [
                    "most",
                    "more",
                    "est"
                ]
            },
            {
                "en": "He is our fastest software developer.",
                "pt": "Ele é o nosso desenvolvedor de software mais rápido.",
                "missing": "fastest",
                "options": [
                    "fastest",
                    "faster",
                    "most fast"
                ]
            }
        ],
        "vocab": [
            {
                "term": "The fastest",
                "definition": "O mais rápido (superlativo de adjetivo curto)."
            },
            {
                "term": "The most expensive",
                "definition": "O mais caro (superlativo de adjetivo longo)."
            },
            {
                "term": "Secure",
                "definition": "Seguro contra falhas ou ataques."
            }
        ],
        "quiz": {
            "question": "Qual o superlativo correto para o adjetivo 'bad'?",
            "options": [
                "most bad",
                "baddest",
                "worse",
                "worst"
            ],
            "correctIndex": 3,
            "explanation": "'bad' é irregular e seu superlativo de superioridade é 'the worst' (o pior)."
        },
        "businessContext": {
            "scenario": "Pitch de vendas enfatizando que sua empresa é a líder e possui o produto mais eficiente.",
            "en": "We deliver the most efficient sales platform on the market.",
            "pt": "Nós entregamos a plataforma de vendas mais eficiente do mercado.",
            "missing": "efficient",
            "options": [
                "efficient",
                "efficientest",
                "more efficient"
            ],
            "terms": [
                {
                    "term": "Most efficient",
                    "definition": "Mais produtivo ou econômico em relação ao restante."
                },
                {
                    "term": "Market leader",
                    "definition": "Empresa dominante em vendas no segmento."
                }
            ],
            "quiz": {
                "question": "Como afirmar que seu serviço é o melhor do setor?",
                "options": [
                    "Our service is the best in the industry.",
                    "Our service is the better in industry.",
                    "Our service is the most good in industry.",
                    "Our service is the worst in industry."
                ],
                "correctIndex": 0,
                "explanation": "'the best' é o superlativo de superioridade do adjetivo good."
            }
        },
        "rawText": " 112 \n \n \nQuando queremos destacar uma característica ou qualidade \nde algo ou de alguém, de modo superior ou inferior, usamos \no grau superlativo, que tem duas formas: \n \n \n \nQuando o adjetivo tem uma ou duas sílabas: the + adjetivo + \nest. \nCold (frio) > the coldest (o/a mais frio/a). \nFast (rápido) > the fastest (o/a mais rápido/a). \n \nExemplos:  \nRussia is one of the coldest countries in the world. (A Rússia é um dos países mais frios \ndo mundo). \nFerrari is the fastest car I know. (Ferrari é o carro mais rápido que eu conheço). \n \nQuando o adjetivo tem mais de duas sílabas: the most + adjetivo. \nExpensive > the most expensive. (o mais caro) \nBeautiful >   the most beautiful. (o mais bonito) \n \nExemplos:  \nMcLaren is the most expensive car in the world so far. (McLaren é o carro mais caro do \nmundo até agora) \nAngelina Joli is one of the most beautiful actresses. (Angelina Joli é uma das atrizes mais \nbonitas) \n \n \n \nA estrutura do superlativo de inferioridade é: the least + adjetivo. \nExemplos: \nVaticano is the least populous country. (O Vaticano é o país menos populoso) \nRichard is the least generous boy I know. (Richard é o garoto menos generoso que eu \nconheço) \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 5: O Superlativo. \nSuperlativo de Superioridade \n \nSuperlativo de Inferioridade  \n \n 113 \n \n \nSituação: Frank e Glenda estão passando o feriado em Maragogi e fazem considerações \nsobre a praia e sua estadia. \n \nGlenda:  Wow, this is the most beautiful beach I’ve ever been. \nFrank:   It’s really beautiful, and the water is the cleanest I know. \nGlenda:  I think we made the best decision to come here. \nFrank:   Yes, and the food is the most delicious I’ve tasted. \nGlenda:  The souvenirs are the cheapest I’ve bought. \nFrank:   People here are so polite! \nGlenda:  Yes… they give you the uinformation you need, talk to you… \nFrank:   You know the worst thing here? \nGlenda:  No… what? \nFrank:   We have to go back home in a few days… \n[…] \n \n \n \n \n \n \n97 – Você certamente  já ouviu falar no Guin ness Book, o livro dos recordes. Nele, o \nsuperlativo impera, pois registra o que há de melhor, maior, pior, etc. no mundo. Com base \nnisso, complete as frases abaixo com o superlativo de superioridade para se referir a alguns \nrecordes: \n \na)  human domino with mattress. (big). \nb)  things – nails, tongues, etc. (long). \nc)  horse alive. (short). \nd)  skateboard speed achieved in a standing position. (fast). \ne)  single-function residential building. (tall). \n \n  \nDIÁLOGO \n \nEXERCÍCIOS \n 114 \n98 – Faça frases completas em inglês mencionando quem ou o que é: \n \na) A marca de grife mais cara:  \nb) A região mais isolada do mundo:  \nc) O jogo de tabuleiro mais complicado:  \nd) O idioma mais difícil:  \n \n \n \n  \nThe most common letter in English is ‘E’ - it represents 11% of what is written in the language. \n(A letra mais comum em inglês é o ‘E’ – ele representa 11% do que se escreve no idioma).  \nOne of the oldest and shortest words is I. (Uma das palavras mais antigas e a mais curta é “I” \n– eu) \n“Strengths” is the largest  word in the language with only one vowel and one syllable. \n(“Strengths” é a maior palavra da língua com apenas uma vogal e uma sílaba). \n\"Rhythm\" is the longest word without a vowel. (“Rhythm” é a palavra mais longa sem vogal). \nThe most common adjective used in English is \"good\". (O adjetivo mais comum usado em \ninglês é “good”). \nThe most common noun is \"time\". (O substantivo mais comum é “time”). \n“Almost” is the longest word that has the letters in alphabetical ord er. (“Almost” é a palavra \nmais longa que tem as letras em ordem alfabética). \n(adaptado de: https://blog.topenglish.com.br/35-curiosidades-sobre-lingua-inglesa/) \nTreine o superlativo nas frases  \nabaixo sobre a língua inglesa \n \n",
        "reconstructed_explanation": "LIÇÃO 5: O Superlativo. <br>Superlativo de Superioridade <br> <br>Superlativo de Inferioridade",
        "reconstructed_dialogue": "Situação: Frank e Glenda estão passando o feriado em Maragogi e fazem considerações <br>sobre a praia e sua estadia. <br> <br>Glenda: Wow, this is the most beautiful beach I’ve ever been. <br>Frank: It’s really beautiful, and the water is the cleanest I know. <br>Glenda: I think we made the best decision to come here. <br>Frank: Yes, and the food is the most delicious I’ve tasted. <br>Glenda: The souvenirs are the cheapest I’ve bought. <br>Frank: People here are so polite! <br>Glenda: Yes… they give you the uinformation you need, talk to you… <br>Frank: You know the worst thing here? <br>Glenda: No… what? <br>Frank: We have to go back home in a few days… <br>[…]",
        "reconstructed_exercises": "97 – Você certamente já ouviu falar no Guin ness Book, o livro dos recordes. Nele, o <br>superlativo impera, pois registra o que há de melhor, maior, pior, etc. no mundo. Com base <br>nisso, complete as frases abaixo com o superlativo de superioridade para se referir a alguns <br>recordes: <br> <br>a) human domino with mattress. (big). <br>b) things – nails, tongues, etc. (long). <br>c) horse alive. (short). <br>d) skateboard speed achieved in a standing position. (fast). <br>e) single-function residential building. (tall). <br> <br> <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>98 – Faça frases completas em inglês mencionando quem ou o que é: <br> <br>a) A marca de grife mais cara: <br>b) A região mais isolada do mundo: <br>c) O jogo de tabuleiro mais complicado: <br>d) O idioma mais difícil: <br> <br> <br> <br> <br>The most common letter in English is ‘E’ - it represents 11% of what is written in the language. <br>(A letra mais comum em inglês é o ‘E’ – ele representa 11% do que se escreve no idioma). <br>One of the oldest and shortest words is I. (Uma das palavras mais antigas e a mais curta é “I” <br>– eu) <br>“Strengths” is the largest word in the language with only one vowel and one syllable. <br>(“Strengths” é a maior palavra da língua com apenas uma vogal e uma sílaba). <br>\"Rhythm\" is the longest word without a vowel. (“Rhythm” é a palavra mais longa sem vogal). <br>The most common adjective used in English is \"good\". (O adjetivo mais comum usado em <br>inglês é “good”). <br>The most common noun is \"time\". (O substantivo mais comum é “time”). <br>“Almost” is the longest word that has the letters in alphabetical ord er. (“Almost” é a palavra <br>mais longa que tem as letras em ordem alfabética). <br>(adaptado de: https://blog.topenglish.com.br/35-curiosidades-sobre-lingua-inglesa/) <br>Treine o superlativo nas frases <br>abaixo sobre a língua inglesa<br>Nas primeiras unidades, você aprendeu a falar sobre você (quem <br>é, onde mora / trabalha, quem são seus parentes e amigos, etc.). <br>Agora, você vai imaginar que o tempo passou e muitas coisas <br>mudaram. Você vai “olhar para trás ” e dizer como você e seus <br>amigos eram e o que faziam, ou seja, você vai falar sobre ações e <br>fatos passados, usando tempos verbais que serão apresentados <br>na sequência. <br> <br>Seu sobrenome: My surname was Cart, now it’s Brown (você <br>incluiu um sobrenome por paternidade ou casamento). <br> <br>Sua nacionalidade: I was Brazilian, now I’m Italian (algumas pessoas abrem mão da sua <br>nacionalidade quando adquirem cidadania em alguns países). <br> <br>Sua idade: I was 19 (years old) when my father died. <br> <br>Sobre seus irmãos e irmãs: I had a brother / sister. <br> <br>Seu estado civil: I was married when I was 20. Now, I’m divorced. <br> <br>Seu número de telefone: My (cell) phone number was …., but now it’s … <br> <br>Seu endereço de e-mail: My email address was …, now it’s... <br> <br>Onde você estuda: I studied High School at Ifes. <br> <br>Sua profissão: I was a student when I was 16; now I’m a dentist. <br>FALANDO DE AÇÕES <br>PASSADAS <br> <br>créditos: Paint by Number <br>2020."
    },
    "U6_L1": {
        "title": "Simple Past — Was / Were",
        "unit": "UNIDADE 6 — FALANDO DE AÇÕES PASSADAS",
        "sentences": [
            {
                "en": "I was at the commercial office yesterday.",
                "pt": "Eu estava no escritório comercial ontem.",
                "missing": "was",
                "options": [
                    "was",
                    "were",
                    "been"
                ]
            },
            {
                "en": "They were ready for the negotiation.",
                "pt": "Eles estavam prontos para a negociação.",
                "missing": "were",
                "options": [
                    "were",
                    "was",
                    "are"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Was",
                "definition": "Fui / Era / Estive / Estava (passado de To Be para I, He, She, It)."
            },
            {
                "term": "Were",
                "definition": "Fomos / Éramos / Estiveram / Estavam (passado de To Be para You, We, They)."
            },
            {
                "term": "Negotiation",
                "definition": "Ato de negociar termos e preços comerciais."
            }
        ],
        "quiz": {
            "question": "Qual a forma correta do verbo To Be no passado para 'We'?",
            "options": [
                "was",
                "are",
                "been",
                "were"
            ],
            "correctIndex": 3,
            "explanation": "Para We, You, They no passado simples, o verbo To Be é 'were'."
        },
        "businessContext": {
            "scenario": "Apresentação de fechamento contábil e auditoria sobre reuniões comerciais de ontem.",
            "en": "All key partners were present at the meeting.",
            "pt": "Todos os parceiros principais estavam presentes na reunião.",
            "missing": "were",
            "options": [
                "were",
                "was",
                "are"
            ],
            "terms": [
                {
                    "term": "Key partners",
                    "definition": "Parceiros estratégicos mais importantes do negócio."
                },
                {
                    "term": "Yesterday",
                    "definition": "O dia anterior ao de hoje."
                }
            ],
            "quiz": {
                "question": "Como você diria 'O diretor financeiro estava ausente ontem'?",
                "options": [
                    "The CFO was absent yesterday.",
                    "The CFO is absent yesterday.",
                    "The CFO been absent yesterday.",
                    "The CFO were absent yesterday."
                ],
                "correctIndex": 0,
                "explanation": "Para 'The CFO' (ele/ela), usamos a forma 'was' no passado."
            }
        },
        "rawText": " 115 \n \n \n \n \n \n \n \n \n \nNas primeiras unidades, você aprendeu a falar sobre você (quem \né, onde mora / trabalha, quem são seus parentes e amigos, etc.). \nAgora, você vai imaginar que o tempo passou e muitas coisas \nmudaram. Você vai “olhar para trás ” e dizer como você e seus \namigos eram e o que faziam, ou seja, você vai falar sobre ações e \nfatos passados, usando tempos verbais que serão apresentados \nna sequência. \n \nSeu sobrenome: My surname was Cart, now it’s Brown (você \nincluiu um sobrenome por paternidade ou casamento). \n \nSua nacionalidade: I was Brazilian, now I’m Italian (algumas pessoas abrem mão da sua \nnacionalidade quando adquirem cidadania em alguns países). \n \nSua idade: I was 19 (years old) when my father died. \n \nSobre seus irmãos e irmãs: I had a brother / sister. \n \nSeu estado civil: I was married when I was 20. Now, I’m divorced. \n \nSeu número de telefone: My (cell) phone number was …., but now it’s … \n \nSeu endereço de e-mail: My email address was …, now it’s... \n \nOnde você estuda: I studied High School at Ifes. \n \nSua profissão: I was a student when I was 16; now I’m a dentist. \nFALANDO DE AÇÕES \nPASSADAS \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 1: Ações concluídas no passado (Simple Past)  \n– informações básicas. \n \n \n \n \n \n \n \n 116 \nOnde você trabalha: I worked at a bank in the 80’s.  \n \nOnde você mora: I lived in Brazil in 1992. Now I live in France. \n \nVocê notou que aparecerem  diferentes formas verbais no passado, como was, studied, \nlived e had? Isso acontece porque em inglês o verbo To Be tem uma conjugação própria \n(was, were), e os outros verbos se dividem em regulares (aos que se acrescenta a \nterminação –ed) e os irregulares (têm forma específica). Veremos cada caso. \n \n1) As formas was e were fazem parte do verbo To Be e não precisam de verbo auxiliar nas \nformas interrogativa e negativa. \n \nI, he, she, it = was.  \nYou, We, They = were.  \n \nExemplos:  \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nO Simple Past é o tempo verbal que utilizamos para nos referir a um passado: \n \na) Concluído em um tempo determinado. \nExemplo: \nI lived in New York last year. (Eu morei em Nova Iorque no ano passado) \n \nForma afirmativa (sujeito + verbo + complemento): \nI was a good student.  \nMy parents were teachers. \n \nForma interrogativa (verbo + sujeito + complemento): \nWas she your friend? \n \nForma negativa (sujeito + not + complemento) \nShe was not (wasn’t) my friend. \n \n\n 117 \nb) Concluído, mencionando sua duração. \nExemplo: \nI lived in New York for 5 years. (Eu morei em Nova Iorque por 5 anos) \n \nc) Que expressa um fato ou hábito finalizado. \nExemplo: \nI lived in New York when I was a child. (Eu morei em Nova Iorque quando eu era criança) \n \n2) Lived representa os verbos que têm forma regular no passado (acrescenta-se –ed no \ninfinitivo).  \nExemplo: \nWork > worked \nNo caso do verbo live, que termina em E, foi acrescentado apenas o –d. \nOs verbos regulares serão estudados com mais detalhes na Lição 2 desta Unidade. \n \n3) Had é a forma irregular do verbo have. Outros verbos irregulares serão apresentados \nna Lição 3 desta Unidade. \n \n \n \n     \n \n  \n \n \n \n \n \n \n  \nPara reforçar o estado de ações concluídas, o Simple Past  geralmente vem  \nacompanhado das seguintes expressões de tempo: \n \nYesterday (ontem), the day before yesterday (anteontem), last night (ontem à \nnoite), last year (ano passado), last month (mês passado), last week (semana \npassada), ago (atrás), etc. \nOBSERVAÇÃO \n \n 118 \n \n \nSituação: Lizzie e Kevin conversam sobre uma foto antiga que acharam emu ma arrumação \nnas gavetas. \n \nLizzie:  Look at this photo! Who is this? \nKevin:  It’s me when I was young. \nLizzie:  You weren’t bald here yet. \nKevin:  Yes, I had long curly hair. I was a singer in a band group. \nLizzie:  How nice! \nKevin:  Those were good times! \nLizzie:  Were you in college at that time? \nKevin:  Oh, no, I was finishing High School. \nLizzie:  Long time ago… \n[…] \n \n \n \n \n \n \n99 – Passe as frases abaixo, que estão no Simple Present, para o Simple Past.  \nAtenção: é necessário mudar os advérbios de tempo.  \n \na) Where are they today?  \nb) Where is Jack today?  \nc) I am at home this afternoon.  \nd) We aren't in school now.  \ne) He isn't a teacher.  \n \n100 – Complete este pequeno relato de uma viagem usando o verbo To Be no Simple Past. \n \nLast year I ________ in Berlin on vocation when I ran into an old friend. It ______ a pleasure \nto meet him. Last time we met he ______ 25 years old. He’s 30 now! We studied at the \nsame college and he _______ an excellent student. \nHis parents ________ my neighbors at that time. We ______ very happy.  \nDIÁLOGO \n \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 1: Ações concluídas no passado (Simple Past) <br>– informações básicas. <br>Onde você trabalha: I worked at a bank in the 80’s. <br> <br>Onde você mora: I lived in Brazil in 1992. Now I live in France. <br> <br>Você notou que aparecerem diferentes formas verbais no passado, como was, studied, <br>lived e had? Isso acontece porque em inglês o verbo To Be tem uma conjugação própria <br>(was, were), e os outros verbos se dividem em regulares (aos que se acrescenta a <br>terminação –ed) e os irregulares (têm forma específica). Veremos cada caso. <br> <br>1) As formas was e were fazem parte do verbo To Be e não precisam de verbo auxiliar nas <br>formas interrogativa e negativa. <br> <br>I, he, she, it = was. <br>You, We, They = were. <br> <br>Exemplos: <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>O Simple Past é o tempo verbal que utilizamos para nos referir a um passado: <br> <br>a) Concluído em um tempo determinado. <br>Exemplo: <br>I lived in New York last year. (Eu morei em Nova Iorque no ano passado) <br> <br>Forma afirmativa (sujeito + verbo + complemento): <br>I was a good student. <br>My parents were teachers. <br> <br>Forma interrogativa (verbo + sujeito + complemento): <br>Was she your friend? <br> <br>Forma negativa (sujeito + not + complemento) <br>She was not (wasn’t) my friend. <br>b) Concluído, mencionando sua duração. <br>Exemplo: <br>I lived in New York for 5 years. (Eu morei em Nova Iorque por 5 anos) <br> <br>c) Que expressa um fato ou hábito finalizado. <br>Exemplo: <br>I lived in New York when I was a child. (Eu morei em Nova Iorque quando eu era criança) <br> <br>2) Lived representa os verbos que têm forma regular no passado (acrescenta-se –ed no <br>infinitivo). <br>Exemplo: <br>Work > worked <br>No caso do verbo live, que termina em E, foi acrescentado apenas o –d. <br>Os verbos regulares serão estudados com mais detalhes na Lição 2 desta Unidade. <br> <br>3) Had é a forma irregular do verbo have. Outros verbos irregulares serão apresentados <br>na Lição 3 desta Unidade. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>Para reforçar o estado de ações concluídas, o Simple Past geralmente vem <br>acompanhado das seguintes expressões de tempo: <br> <br>Yesterday (ontem), the day before yesterday (anteontem), last night (ontem à <br>noite), last year (ano passado), last month (mês passado), last week (semana <br>passada), ago (atrás), etc. <br>OBSERVAÇÃO",
        "reconstructed_dialogue": "Situação: Lizzie e Kevin conversam sobre uma foto antiga que acharam emu ma arrumação <br>nas gavetas. <br> <br>Lizzie: Look at this photo! Who is this? <br>Kevin: It’s me when I was young. <br>Lizzie: You weren’t bald here yet. <br>Kevin: Yes, I had long curly hair. I was a singer in a band group. <br>Lizzie: How nice! <br>Kevin: Those were good times! <br>Lizzie: Were you in college at that time? <br>Kevin: Oh, no, I was finishing High School. <br>Lizzie: Long time ago… <br>[…]",
        "reconstructed_exercises": "99 – Passe as frases abaixo, que estão no Simple Present, para o Simple Past. <br>Atenção: é necessário mudar os advérbios de tempo. <br> <br>a) Where are they today? <br>b) Where is Jack today? <br>c) I am at home this afternoon. <br>d) We aren't in school now. <br>e) He isn't a teacher. <br> <br>100 – Complete este pequeno relato de uma viagem usando o verbo To Be no Simple Past. <br> <br>Last year I ________ in Berlin on vocation when I ran into an old friend. It ______ a pleasure <br>to meet him. Last time we met he ______ 25 years old. He’s 30 now! We studied at the <br>same college and he _______ an excellent student. <br>His parents ________ my neighbors at that time. We ______ very happy. <br>DIÁLOGO<br>Imagine que você foi abordado por um policial, que lhe pede <br>para relatar todas as ações que você realizou ontem, para fins <br>de averiguação (ele confundiu você com alguém!). Você então <br>lhe informa sobre suas atividades: <br> <br> I worked at the bookstore. (Trabalhei na livraria) <br> I helped my mother with the housework. (Ajudei minha <br>mãe com os afazeres domésticos) <br> I surfed the Internet. (Naveguei na Internet) <br> I played video games. (Joguei video games) <br> I watched TV. (Assisti à TV) <br> I talked to Andrew. (Conversei com o Andrew) <br> I danced with Susan. (Dancei com a Susan) <br> <br>As ações relatadas estão na forma afirmativa, cujas frases têm a seguinte composição: <br>sujeito + verbo principal + complemento. <br> <br>Você percebeu qual é a regra básica para formar o passado de um verbo regular? Isso <br>mesmo: acrescentar –ed ao infinitivo do verbo (na forma afirmativa). <br> <br>Mas, alguns verbos passam por modificações ortográficas antes do acréscimo de ED. Veja <br>as principais: <br> <br>a) Verbos que já terminam em E, acrescenta-se somente o D. <br>Exemplos: <br>live > she lived in Vitória in 2010. (ela morou/morava em Vitória em 2010) <br>like > they liked to swim. (eles gostaram/gostavam de nadar) <br> <br>b) Para verbos terminados em Y, usa-se a seguinte fórmula: -Y + IED. <br>Exemplos: <br>study > we studied at that school. (estudamos naquela escola) <br>try > she tried to tell you. (ela tentou lhe dizer) <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U6_L2": {
        "title": "Simple Past — Verbos Regulares",
        "unit": "UNIDADE 6 — FALANDO DE AÇÕES PASSADAS",
        "sentences": [
            {
                "en": "We launched our commercial campaign last week.",
                "pt": "Nós lançamos nossa campanha comercial na semana passada.",
                "missing": "launched",
                "options": [
                    "launched",
                    "launch",
                    "launching"
                ]
            },
            {
                "en": "He called the prospective client yesterday.",
                "pt": "Ele ligou para o cliente em potencial ontem.",
                "missing": "called",
                "options": [
                    "called",
                    "call",
                    "calling"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Launched",
                "definition": "Lançou / Lançamos (passado regular do verbo launch)."
            },
            {
                "term": "Called",
                "definition": "Ligou / Chamou (passado regular de call)."
            },
            {
                "term": "Last week",
                "definition": "Semana passada."
            }
        ],
        "quiz": {
            "question": "Como formamos o passado simples da maioria dos verbos regulares em inglês?",
            "options": [
                "Alterando a vogal central",
                "Dobrando a primeira letra",
                "Usando o auxiliar did na afirmativa",
                "Adicionando o sufixo -ed ao final do verbo"
            ],
            "correctIndex": 3,
            "explanation": "Verbos regulares no passado simples afirmativo recebem a terminação '-ed'."
        },
        "businessContext": {
            "scenario": "Reportando ações e ligações comerciais realizadas no funil de vendas ontem.",
            "en": "We contacted fifty prospects yesterday.",
            "pt": "Nós contatamos cinquenta contatos ontem.",
            "missing": "contacted",
            "options": [
                "contacted",
                "contact",
                "contacting"
            ],
            "terms": [
                {
                    "term": "Prospect",
                    "definition": "Cliente em potencial com quem ainda não fechou negócio."
                },
                {
                    "term": "Contacted",
                    "definition": "Entrou em contato (passado do verbo contact)."
                }
            ],
            "quiz": {
                "question": "Como relatar 'Ela atualizou o sistema de CRM ontem'?",
                "options": [
                    "She did updated the CRM yesterday.",
                    "She updated the CRM yesterday.",
                    "She updating CRM yesterday.",
                    "She update the CRM yesterday."
                ],
                "correctIndex": 1,
                "explanation": "'updated' é o passado simples regular correto de update."
            }
        },
        "rawText": " 119 \n \n \n \nImagine que você foi abordado por um policial, que lhe pede \npara relatar todas as ações que você realizou ontem, para fins \nde averiguação (ele confundiu você com alguém!). Você então \nlhe informa sobre suas atividades: \n \n I worked at the bookstore. (Trabalhei na livraria) \n I helped my mother with the housework. (Ajudei minha \nmãe com os afazeres domésticos) \n I surfed the Internet. (Naveguei na Internet) \n I played video games. (Joguei video games) \n I watched TV. (Assisti à TV) \n I talked to Andrew. (Conversei com o Andrew) \n I danced with Susan. (Dancei com a Susan) \n \nAs ações relatadas estão na forma afirmativa, cujas frases têm a seguinte composição:  \nsujeito + verbo principal + complemento. \n \nVocê percebeu qual é a regra básica para formar o passado de um verbo regular? Isso \nmesmo: acrescentar –ed ao infinitivo do verbo (na forma afirmativa). \n \nMas, alguns verbos passam por modificações ortográficas antes do acréscimo de ED. Veja \nas principais: \n \na) Verbos que já terminam em E, acrescenta-se somente o D.  \nExemplos: \nlive > she lived in Vitória in 2010. (ela morou/morava em Vitória em 2010) \nlike > they liked to swim. (eles gostaram/gostavam de nadar) \n \nb) Para verbos terminados em Y, usa-se a seguinte fórmula: -Y + IED. \nExemplos: \nstudy > we studied at that school. (estudamos naquela escola) \ntry > she tried to tell you. (ela tentou lhe dizer) \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 2: Ações concluídas no passado (Simple Past)  \n– verbos regulares \n 120 \nc) Verbos de mais de uma sílaba, com a última sendo tônica, terminada em CVC \n(consoante, vogal, consoante), dobra-se a última consoante. \nExemplos: \ndrop > he dropped the bottle. (ele deixou a garrafa cair) \nstop > the train stopped so far. (o trem parou muito longe) \n \nQuando você quer perguntar sobre ações passadas, você deve usar o verbo aux iliar DID \nno início da pergunta. Assim as frases interrogativas têm a seguinte composição: DID + \nsujeito + verbo principal + complemento. \nExemplo: \nDid you work yesterday? (Você trabalhou ontem?) \n \nObserve que, no caso acima, o verbo work não pode ter –ed, pois este é somente para a \nforma afirmativa. O DID também não tem tradução, ele só sinaliza que o verbo principal \nestá no passado. \n \nPara falar de ações negativas no passado (o que você não fez, o que não aconteceu, etc.), \nusa-se também o DID, acompanhado de not, nesta sequência: sujeito + did + not + \ncomplemento. \nExemplo: \nHe did not (didn’t) study here. (Ele não estudou aqui) \n \nO quadro abaixo sintetiza essas regras:  \n \nForma Afirmativa Forma Interrogativa* Forma Negativa \nI / You / He / She / It \n/ We / You / They \nworked \nDid I / You / He / She / \nIt / We / You / They \nwork? \nI / You / He / She / It / We / You / \nThey did not (didn’t)  work \n \n  \n 121 \n \n \n \n \n \n \n \n \n \n \n \n \nSituação: Aimee comenta com sua mãe (Cecily) que não se sente bem e elas conversam. \n \nAimee:  I’m not feeling well... I feel tired. \nCecily:  Did you work too much today? \nAimee:  I think I did. I studied for some tests, I cooked lunch, cleaned the house, I \nanswered the phone, opened the window to take fresh air… \nCecily:  Too many tasks… \nAimee:  Yes, I know… and besides I played video games, watered the plants… \nCecily:  Did you take some rest? \nAimee:  No, I didn’t. \nCecily:  So, do it now and sleep a little. \n[…]  \n \n \n \n \n \n \n101 – Complete as frases usando os verbos dos parênteses no Simple Past. (regular verbs). \n \na) Jane  a film. (to watch) \nb) He  a box. (to carry) \nc) They  their father. (to help) \nd) I  to Andrew. (to talk) \nDICA \n \n*Perguntas deste tipo podem ser respondidas com short answers: \nDid you work yesterday? \n- Yes, I did. / No, I didn’t. \nDid she study for the text? \n- Yes, she did. / No, she didn’t. \nDIÁLOGO \n \nEXERCÍCIOS \n 122 \ne) Susan  with Peter. (to dance) \nf) The boys  basketball. (to try) \ng) We  a trip. (to plan) \nh) She  her hair. (to wash) \ni) The car  at the traffic lights. (to stop) \n \n102 – Forme frases interrogativas, no Simple Past , utilizando os elementos abaixo. Em \nseguida, responda as questões com short answers.  \n \na) Anna / the window / open:  \n Yes,  \nb) Mary and you / home / walk:  \n No,  \nc) they/ the castle / visit:  \n No,  \n \n103 – (IESES): Qual alternativa está gramaticalmente incorreta?   \n \na) (   ) You didn´t walk yesterday.   \nb) (   ) Did you walk yesterday?  \nc) (   ) You walked yesterday.  \nA citação abaixo traz alguns verbos em destaque (itálico) no Simple Past. Seu conteúdo é \nmotivador e otimista. \n \n“I will never forget that the only reason I’m standing here today is because somebody, \nsomewhere stood up for me when it was risky. Stood up when it was hard. Stood up when it \nwasn’t popular. And because that somebody stood up, a few more stood up. And than a few \nthousand more stood up. And then, a million few stood up. And standing up, with courage and \nclear purpose, they somehow managed to change the world. \n \nBarack Obama, Jan. 2008. \n \n(https://3chicspolitico.com/president-obamas-notable-quotes/president-obama-quotes15-2/) \n \n\n",
        "reconstructed_explanation": "LIÇÃO 2: Ações concluídas no passado (Simple Past) <br>– verbos regulares <br>c) Verbos de mais de uma sílaba, com a última sendo tônica, terminada em CVC <br>(consoante, vogal, consoante), dobra-se a última consoante. <br>Exemplos: <br>drop > he dropped the bottle. (ele deixou a garrafa cair) <br>stop > the train stopped so far. (o trem parou muito longe) <br> <br>Quando você quer perguntar sobre ações passadas, você deve usar o verbo aux iliar DID <br>no início da pergunta. Assim as frases interrogativas têm a seguinte composição: DID + <br>sujeito + verbo principal + complemento. <br>Exemplo: <br>Did you work yesterday? (Você trabalhou ontem?) <br> <br>Observe que, no caso acima, o verbo work não pode ter –ed, pois este é somente para a <br>forma afirmativa. O DID também não tem tradução, ele só sinaliza que o verbo principal <br>está no passado. <br> <br>Para falar de ações negativas no passado (o que você não fez, o que não aconteceu, etc.), <br>usa-se também o DID, acompanhado de not, nesta sequência: sujeito + did + not + <br>complemento. <br>Exemplo: <br>He did not (didn’t) study here. (Ele não estudou aqui) <br> <br>O quadro abaixo sintetiza essas regras: <br> <br>Forma Afirmativa Forma Interrogativa* Forma Negativa <br>I / You / He / She / It <br>/ We / You / They <br>worked <br>Did I / You / He / She / <br>It / We / You / They <br>work? <br>I / You / He / She / It / We / You / <br>They did not (didn’t) work",
        "reconstructed_dialogue": "Situação: Aimee comenta com sua mãe (Cecily) que não se sente bem e elas conversam. <br> <br>Aimee: I’m not feeling well... I feel tired. <br>Cecily: Did you work too much today? <br>Aimee: I think I did. I studied for some tests, I cooked lunch, cleaned the house, I <br>answered the phone, opened the window to take fresh air… <br>Cecily: Too many tasks… <br>Aimee: Yes, I know… and besides I played video games, watered the plants… <br>Cecily: Did you take some rest? <br>Aimee: No, I didn’t. <br>Cecily: So, do it now and sleep a little. <br>[…]",
        "reconstructed_exercises": "101 – Complete as frases usando os verbos dos parênteses no Simple Past. (regular verbs). <br> <br>a) Jane a film. (to watch) <br>b) He a box. (to carry) <br>c) They their father. (to help) <br>d) I to Andrew. (to talk) <br>DICA <br> <br>*Perguntas deste tipo podem ser respondidas com short answers: <br>Did you work yesterday? <br>- Yes, I did. / No, I didn’t. <br>Did she study for the text? <br>- Yes, she did. / No, she didn’t. <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>e) Susan with Peter. (to dance) <br>f) The boys basketball. (to try) <br>g) We a trip. (to plan) <br>h) She her hair. (to wash) <br>i) The car at the traffic lights. (to stop) <br> <br>102 – Forme frases interrogativas, no Simple Past , utilizando os elementos abaixo. Em <br>seguida, responda as questões com short answers. <br> <br>a) Anna / the window / open: <br> Yes, <br>b) Mary and you / home / walk: <br> No, <br>c) they/ the castle / visit: <br> No, <br> <br>103 – (IESES): Qual alternativa está gramaticalmente incorreta? <br> <br>a) ( ) You didn´t walk yesterday. <br>b) ( ) Did you walk yesterday? <br>c) ( ) You walked yesterday. <br>A citação abaixo traz alguns verbos em destaque (itálico) no Simple Past. Seu conteúdo é <br>motivador e otimista. <br> <br>“I will never forget that the only reason I’m standing here today is because somebody, <br>somewhere stood up for me when it was risky. Stood up when it was hard. Stood up when it <br>wasn’t popular. And because that somebody stood up, a few more stood up. And than a few <br>thousand more stood up. And then, a million few stood up. And standing up, with courage and <br>clear purpose, they somehow managed to change the world. <br> <br>Barack Obama, Jan. 2008. <br> <br>(https://3chicspolitico.com/president-obamas-notable-quotes/president-obama-quotes15-2/)<br>d) ( ) Did you walked yesterday? <br> <br> <br> <br> <br>Existe uma tendência dos aprendizes de inglês, principalmente <br>os brasileiros, de pronunciar o –ed final dos verbos tal como se <br>escreve. É um erro clássico! Veja qual deve ser a pronúncia (3 <br>casos distintos). <br> <br>1º caso: Nos verbos terminados em som sonoro (aqueles que <br>vibram as cordas vocais quando emitidos – todas as vogais e <br>sons específicos, como [b], [g], [dʒ], [l], [r], [v], [z], [ð], [m], [n], <br>[ŋ] o –ed tem o som de –d. <br> <br>Exemplos: <br> <br>Played /pleɪd/ Pulled /pʊld/ Breathed /briːðd/ <br>Bobbed /bɑːbd/ Discovered /dɪskəvərd/ Performed /pərfɔːrmd/ <br>Begged /beɡd/ Lived /lɪvd/ Cleaned /kliːnd/ <br>Bridged /brɪdʒd/ Buzzed /bʌzd/ Banged /bæŋd/ <br> <br>2º caso: Nos verbos terminados em som surdo (aqueles que não vibram as cordas vocais <br>quando emitidos - [p], [k], [θ] “th”, [f], [s], [ʃ] “sh”, e [tʃ] “ch”, o –ed é pronunciado como –t. <br> <br>Exemplos: <br> <br>Helped /helpt/ Laughed /læft/ Watched /wɑːtʃt/ <br>Worked /wɜːkt/ Missed /mɪst/ <br>Frothed / frɒθt/ Washed /wɑʃt/ <br> <br>3º caso: Nos verbos terminados em –d ou –t, acrescenta-se a vogal -i, formando-se uma <br>nova sílaba. Assim, a pronúncia do –ed torna-se – ɪd. <br> <br>Exemplos: <br>Needed /niːdɪd/ Ended /endɪd/ <br> <br>créditos: Paint by Number <br>2020."
    },
    "U6_L3": {
        "title": "Pronúncia dos Verbos Regulares no Simple Past",
        "unit": "UNIDADE 6 — FALANDO DE AÇÕES PASSADAS",
        "sentences": [
            {
                "en": "We fixed the commercial contract details.",
                "pt": "Nós consertamos os detalhes do contrato comercial.",
                "missing": "fixed",
                "options": [
                    "fixed",
                    "fix",
                    "fixing"
                ]
            },
            {
                "en": "The manager decided to sign the deal.",
                "pt": "O gerente decidiu assinar o acordo.",
                "missing": "decided",
                "options": [
                    "decided",
                    "decide",
                    "deciding"
                ]
            }
        ],
        "vocab": [
            {
                "term": "/t/ sound",
                "definition": "Pronúncia de -ED como 'T' após sons surdos (ex: fixed, worked)."
            },
            {
                "term": "/d/ sound",
                "definition": "Pronúncia de -ED como 'D' após sons sonoros (ex: called, planned)."
            },
            {
                "term": "/id/ sound",
                "definition": "Pronúncia de -ED como 'ID' após sons de 'T' ou 'D' (ex: decided, wanted)."
            }
        ],
        "quiz": {
            "question": "Qual destes verbos no passado tem a terminação -ed pronunciada como uma sílaba extra /id/?",
            "options": [
                "called",
                "helped",
                "presented",
                "worked"
            ],
            "correctIndex": 2,
            "explanation": "Verbos cuja consoante final antes do -ed é 't' ou 'd' (como present) recebem a pronúncia /id/: presented."
        },
        "businessContext": {
            "scenario": "Reunião de equipe analisando o feedback das propostas e contratos entregues.",
            "en": "The client requested additional discounts.",
            "pt": "O cliente solicitou descontos adicionais.",
            "missing": "requested",
            "options": [
                "requested",
                "request",
                "requesting"
            ],
            "terms": [
                {
                    "term": "Requested",
                    "definition": "Solicitou formalmente (termina com som de 'T', logo pronuncia-se /id/)."
                },
                {
                    "term": "Discounts",
                    "definition": "Redução do preço original de venda."
                }
            ],
            "quiz": {
                "question": "Qual palavra tem a pronúncia do -ed com som de /t/?",
                "options": [
                    "signed",
                    "started",
                    "needed",
                    "talked"
                ],
                "correctIndex": 3,
                "explanation": "O som de k em talk é surdo, logo a pronúncia é /t/: talked."
            }
        },
        "rawText": " 123 \nd) (   ) Did you walked yesterday?  \n \n \n \n \nExiste uma tendência dos aprendizes de inglês, principalmente \nos brasileiros, de pronunciar o –ed final dos verbos tal como se \nescreve. É um erro clássico! Veja qual deve ser a pronúncia (3 \ncasos distintos). \n \n1º caso: Nos verbos terminados em som sonoro (aqueles que \nvibram as cordas vocais quando emitidos – todas as vogais e \nsons específicos, como [b], [g], [dʒ], [l], [r], [v], [z], [ð], [m], [n], \n[ŋ] o –ed tem o som de –d.  \n \nExemplos:  \n \nPlayed  /pleɪd/ Pulled  /pʊld/ Breathed  /briːðd/ \nBobbed  /bɑːbd/ Discovered /dɪskəvərd/ Performed  /pərfɔːrmd/ \nBegged  /beɡd/ Lived  /lɪvd/ Cleaned  /kliːnd/ \nBridged  /brɪdʒd/ Buzzed  /bʌzd/ Banged  /bæŋd/ \n \n2º caso: Nos verbos terminados em som surdo (aqueles que não vibram as cordas vocais \nquando emitidos - [p], [k], [θ] “th”, [f], [s], [ʃ] “sh”, e [tʃ] “ch”, o –ed é pronunciado como –t. \n \nExemplos: \n \nHelped  /helpt/ Laughed  /læft/ Watched  /wɑːtʃt/ \nWorked  /wɜːkt/  Missed  /mɪst/  \nFrothed  / frɒθt/ Washed  /wɑʃt/  \n \n3º caso: Nos verbos terminados em –d ou –t, acrescenta-se a vogal -i, formando-se uma \nnova sílaba. Assim, a pronúncia do –ed torna-se – ɪd. \n \nExemplos: \nNeeded  /niːdɪd/ Ended  /endɪd/  \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 3: Pronúncia dos Verbos Regulares no \nSimple Past (com o sufixo – ed). \n",
        "reconstructed_explanation": "LIÇÃO 3: Pronúncia dos Verbos Regulares no <br>Simple Past (com o sufixo – ed).",
        "reconstructed_dialogue": "",
        "reconstructed_exercises": "Hunted /hʌntəd/ Started /stɑːrtɪd/ <br> <br> <br> <br> <br> <br>104 – Acesse o site abaixo e ouça a pronúncia dos verbos regulares no Simple Past. <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>Muitos verbos têm uma forma própria no passado, algumas <br>mais fáceis de associar com o infinitivo, outras, nem tanto. <br>Então, o melhor jeito de aprender é memorizar as formas. <br> <br>Exemplos: <br>Drink > drank <br>Go > went. <br> <br>As frases afirmativas são feitas com a seguinte composição: <br>Sujeito + verbo + complemento. <br> <br>Exemplos: <br>She drank a lot of water yesterday. (Ela bebeu muita água ontem) <br>I went to the club last week. (Eu fui ao clube na semana passada) <br> <br>Para facilitar a memorização, apresento os vernos agrupados por semelhança. Não incluirei <br>o Particípio Passado, pois esta forma não precisa ser usada no Simple Past: <br> <br>https://www.englishexperts.com.br/pronuncia-do-passado-terminado-em-ed/ <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U6_L4": {
        "title": "Simple Past — Verbos Irregulares",
        "unit": "UNIDADE 6 — FALANDO DE AÇÕES PASSADAS",
        "sentences": [
            {
                "en": "We met the client at the conference.",
                "pt": "Nós encontramos o cliente na conferência.",
                "missing": "met",
                "options": [
                    "met",
                    "meet",
                    "meeting"
                ]
            },
            {
                "en": "They sold their solutions to a big group.",
                "pt": "Eles venderam suas soluções para um grande grupo.",
                "missing": "sold",
                "options": [
                    "sold",
                    "sell",
                    "selling"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Met",
                "definition": "Encontrou / Encontramos (passado irregular de meet)."
            },
            {
                "term": "Sold",
                "definition": "Vendeu / Vendemos (passado irregular de sell)."
            },
            {
                "term": "Spent",
                "definition": "Gastou / Gastamos (passado irregular de spend)."
            }
        ],
        "quiz": {
            "question": "Qual é o passado simples correto do verbo 'buy' (comprar)?",
            "options": [
                "bought",
                "buyed",
                "boughten",
                "boughts"
            ],
            "correctIndex": 0,
            "explanation": "'buy' é irregular e seu passado simples é 'bought'."
        },
        "businessContext": {
            "scenario": "Revisão comercial anual detalhando investimentos e contratos fechados.",
            "en": "We spent the entire marketing budget last quarter.",
            "pt": "Nós gastamos todo o orçamento de marketing no trimestre passado.",
            "missing": "spent",
            "options": [
                "spent",
                "spend",
                "spending"
            ],
            "terms": [
                {
                    "term": "Entire budget",
                    "definition": "Orçamento total alocado para uma atividade."
                },
                {
                    "term": "Last quarter",
                    "definition": "Trimestre anterior."
                }
            ],
            "quiz": {
                "question": "Como expressar 'Nós fechamos (fizemos) um ótimo negócio ontem'?",
                "options": [
                    "We maked a great deal yesterday.",
                    "We made a great deal yesterday.",
                    "We buyed a great deal yesterday.",
                    "We did made a great deal yesterday."
                ],
                "correctIndex": 1,
                "explanation": "O passado do verbo irregular 'make' é 'made': 'We made a great deal'."
            }
        },
        "rawText": " 124 \nHunted  /hʌntəd/ Started  /stɑːrtɪd/  \n \n \n \n \n \n104 – Acesse o site abaixo e ouça a pronúncia dos verbos regulares no Simple Past. \n \n \n \n \n \n \n \n \n \nMuitos verbos têm uma forma própria no passado, algumas \nmais fáceis de associar com o infinitivo, outras, nem tanto. \nEntão, o melhor jeito de aprender é memorizar as formas.  \n \nExemplos: \nDrink > drank                  \nGo > went.  \n \nAs frases afirmativas são feitas com a seguinte composição: \nSujeito + verbo + complemento.  \n \nExemplos: \nShe drank a lot of water yesterday. (Ela bebeu muita água ontem) \nI went to the club last week. (Eu fui ao clube na semana passada) \n \nPara facilitar a memorização, apresento os vernos agrupados por semelhança. Não incluirei \no Particípio Passado, pois esta forma não precisa ser usada no Simple Past: \n  \nhttps://www.englishexperts.com.br/pronuncia-do-passado-terminado-em-ed/ \n \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 4: Ações passadas – Verbos Irregulares \nEXERCÍCIO \n 125 \na) Verbos com as duas formas iguais:  \n \nInfinitive Simple Past Translation \nbeat beat bater \nburst burst queimar \ncost cost custar \ncut cut cortar \nhit hit bater \nhurt hurt ferir, machucar \nlet let deixar, permitir \nput put colocar, pôr \nread read ler \nspread spread espalhar \nshut shut fechar, trancar \n \nb) Verbos que mudam apenas uma letra: \n \nInfinitive Simple Past Translation \nbecome became rornar-se \nbegin began começar \nbuild built construir \ncome came vir \ndrink drank beber \ndraw drew desenhar \nget got obter, conseguir \nhang hung pendurar \nhear heard ouvir, escutar \nlend lent emprestar \nmake made fazer \nride rode passear, cavalgar \nrun ran correr \nmean meant significar \nsend sent enviar \nshine shone brilhar \n 126 \nsit sat sentar \nspend spent gastar \nswim swam nadar \nwin won ganhar \n \nc) Verbos que “perdem” uma letra repetida: \n \nInfinitive Simple Past Translation \nbreed bred criar \nchoose chose escolher \nfeed fed alimentar \nmeet met encontrar, conhecer \nshoot shot atirar, alvejar. \n \nd) Verbos que têm formas bem diferentes: \n \nInfinitive Simple Past Translation \nbe was / were ser / estar \nbreak broke quebrar \nbring brought trazer \nbuy bought comprar \ncatch caught pegar, capturar \ndo did fazer \nfight fought lutar, brigar \nfind found encontrar \nhave had ter \nkeep kept manter \nlay laid pôr, colocar \nleave left deixar, partir \nlose lost perder \npay paid pagar \nsay said dizer \n 127 \nsell sold vender \nsleep slept dormir \nstand stood ficar, permanecer \nteach taught ensinar \ntell told dizer, contar \nthink thought pensar \nunderstand understood entender \n \nAdaptado de: http://benditoingles.com.br/tecnica-aprendizado-verbos-irregulares-em-ingles \n \nAs formas interrogativas e negativas usam DID em sua composição. A formação das frases \né a mesma que já estudou com os verbos regulares . E nestas formas, o verbo ap arece \ncomo no infinitivo (-to). Veja: \n \nFrases interrogativas \nVerbo auxiliar (did) no início da frase + sujeito + verbo principal  no infinitivo sem -to + \ncomplemento.  \n \nExemplos:  \nDid you go to the movies yesterday? (Você foi ao cinema ontem?) \nDid they understand the lessons? (Eles entenderam as lições?). \n \nFrases negativas \nSujeito + verbo auxiliar (did) + not + verbo principal no infinitivo sem -to + \ncomplemento.  \n \nExemplos: \nI did not (didn’t) play soccer last week. (Eu não jjoguei futebol na semana passada). \nHe did not (didn’t) come to school last Friday. (Ele não veio à escola na última sexta-\nfeira). \n  \n 128 \n \n \nSituação: Na volta às aulas, dois amigos conversam sobre o que fizeram nas férias. \n \nAnthony:  Hey, man! What’s up? \nDerek:  I am fine, and you? \nAnthony:  Everything’s right. \nDerek:  What did you do on your holidays? \nAnthony:  I had a lot of fun and did many nice things. \nDerek:  Did you travel? \nAnthony:  Yes, I traveled to Sidney. \nDerek:  Wow, and how was it? \nAnthony:  It was great. I went to many nice places there. \nDerek:  Did you go to the Opera House? \nAnthony:  Yes, and I saw a nice play there. \nDerek:  Did you go to the beaches too? \nAnthony:  Yes, there are many good beaches in Australia. And you, what did you do? \nDerek:  I spent a lot of time at my grandma’s, in a farm. It was fun and got some \nrest. \nAnthony:  Did your brothers go with you? \nDerek:  Yes, and we did a lot of things there, we swam in a lake, went horse-riding, \npicked fruits, etc. \nAnthony:  How nice! \n \n \n \n \n \n \n105 – Conte a um amigo o que fez no fim de semana, em inglês: \n \nVocê: foi ao shopping, comprou uma camiseta legal; foi ao cinema, jantou com uma amiga, \nconversou com ela sobre trabalho, estudo e diversão. O tempo estava firme, não choveu, \nentão vocês caminharam pela praia, depois tomaram um táxi e foram pra casa. \n \n \nDIÁLOGO \n \nEXERCÍCIOS \n 129 \n106 – Pergunte aos seus colegas de escola/trabalho o que eles: \n \na) Fizeram no sábado à noite. \nb) Compraram de presente de aniversário para a Cristina. \nc) Comeram no restaurante italiano. \nd) Estudaram para a prova. \ne) Encontraram na rua. \nf) Fizeram para o jantar. \n \n107 – Complete o trecho abaixo com os verbos no Simple Past e descubra as ações que \nCathy realizou.  \n \nYesterday was Saturday. I _____________ at 10:00 (wake up), ____________ (eat) my breakfast \nand ___________ (read) the newspaper. Then I _____________ (write) an e-mail to John. In the \nafternoon I ____________ (go) to a park and _____________ (meet) my friends Gina and Paul. I \n_______________ (have) a wonderful day. \n \n108 – Preencha os espaços nas frases com os verbos dos parênteses conjugados no Simple \nPast.  \n \na) _________ Sarah _________ to the club on Saturday? (go)      \nb) We ________________ you the report last Friday. (send) \nc) Mr. Fox _______________   in the office last week. (be / not) \nd) The postman ___________in, ___________me the papers and ________ (come) / (give) / (leave) \n \n109 – Complete um trecho da música abaixo com os verbos dos parênteses no Simple \nPast.  \n \nKilling me Softly (Fugees) \n \nI _______________ (to hear) he ___________ (to sing) a good song \n 130 \nI _______________ (to hear) he ___________ (to have) a style \nAnd so I ____________ (to come) to see him, to listen for a \nwhile \nAnd there he _____________ (to be) this young boy \nA stranger to my eyes \nI ______________ (to feel) all flushed with fever \nEmbarrassed by the crowd \nI ______________ (to feel) he’d found my letters  \nAnd ____________ (to read) each one out loud \nI _______________ (to pray) that he would finish \nBut he just __________ (to keep) right on… \n \n110 – (Marinha / Colégio Naval - adaptada): A sequência que apresenta todos os verbos \nno Simple Past é: \n \na) (   ) put - drank - ate - heard - taken  \nb) (   ) knew - brought - wanted - made - was  \nc) (   ) wrote - come - felt - had - flew  \nd) (   ) told - were - begun - gave - read  \ne) (   ) left - spent - slept - swum - traveled  \n  \n \n111 – (Exército –  ESPCEX): Escolha a opção correta que completa a frase abaixo:   \n“I _________ you at the party last night”. \n \na) (   ) didn’t see \nb) (   ) didn’t saw \nc) (   ) don’t saw \nd) (   ) don’t see \n \n \n \n \n \n \n \n \n\n",
        "reconstructed_explanation": "LIÇÃO 4: Ações passadas – Verbos Irregulares <br>EXERCÍCIO <br>a) Verbos com as duas formas iguais: <br> <br>Infinitive Simple Past Translation <br>beat beat bater <br>burst burst queimar <br>cost cost custar <br>cut cut cortar <br>hit hit bater <br>hurt hurt ferir, machucar <br>let let deixar, permitir <br>put put colocar, pôr <br>read read ler <br>spread spread espalhar <br>shut shut fechar, trancar <br> <br>b) Verbos que mudam apenas uma letra: <br> <br>Infinitive Simple Past Translation <br>become became rornar-se <br>begin began começar <br>build built construir <br>come came vir <br>drink drank beber <br>draw drew desenhar <br>get got obter, conseguir <br>hang hung pendurar <br>hear heard ouvir, escutar <br>lend lent emprestar <br>make made fazer <br>ride rode passear, cavalgar <br>run ran correr <br>mean meant significar <br>send sent enviar <br>shine shone brilhar <br>sit sat sentar <br>spend spent gastar <br>swim swam nadar <br>win won ganhar <br> <br>c) Verbos que “perdem” uma letra repetida: <br> <br>Infinitive Simple Past Translation <br>breed bred criar <br>choose chose escolher <br>feed fed alimentar <br>meet met encontrar, conhecer <br>shoot shot atirar, alvejar. <br> <br>d) Verbos que têm formas bem diferentes: <br> <br>Infinitive Simple Past Translation <br>be was / were ser / estar <br>break broke quebrar <br>bring brought trazer <br>buy bought comprar <br>catch caught pegar, capturar <br>do did fazer <br>fight fought lutar, brigar <br>find found encontrar <br>have had ter <br>keep kept manter <br>lay laid pôr, colocar <br>leave left deixar, partir <br>lose lost perder <br>pay paid pagar <br>say said dizer <br>sell sold vender <br>sleep slept dormir <br>stand stood ficar, permanecer <br>teach taught ensinar <br>tell told dizer, contar <br>think thought pensar <br>understand understood entender <br> <br>Adaptado de: http://benditoingles.com.br/tecnica-aprendizado-verbos-irregulares-em-ingles <br> <br>As formas interrogativas e negativas usam DID em sua composição. A formação das frases <br>é a mesma que já estudou com os verbos regulares . E nestas formas, o verbo ap arece <br>como no infinitivo (-to). Veja: <br> <br>Frases interrogativas <br>Verbo auxiliar (did) no início da frase + sujeito + verbo principal no infinitivo sem -to + <br>complemento. <br> <br>Exemplos: <br>Did you go to the movies yesterday? (Você foi ao cinema ontem?) <br>Did they understand the lessons? (Eles entenderam as lições?). <br> <br>Frases negativas <br>Sujeito + verbo auxiliar (did) + not + verbo principal no infinitivo sem -to + <br>complemento. <br> <br>Exemplos: <br>I did not (didn’t) play soccer last week. (Eu não jjoguei futebol na semana passada). <br>He did not (didn’t) come to school last Friday. (Ele não veio à escola na última sexta-<br>feira).",
        "reconstructed_dialogue": "Situação: Na volta às aulas, dois amigos conversam sobre o que fizeram nas férias. <br> <br>Anthony: Hey, man! What’s up? <br>Derek: I am fine, and you? <br>Anthony: Everything’s right. <br>Derek: What did you do on your holidays? <br>Anthony: I had a lot of fun and did many nice things. <br>Derek: Did you travel? <br>Anthony: Yes, I traveled to Sidney. <br>Derek: Wow, and how was it? <br>Anthony: It was great. I went to many nice places there. <br>Derek: Did you go to the Opera House? <br>Anthony: Yes, and I saw a nice play there. <br>Derek: Did you go to the beaches too? <br>Anthony: Yes, there are many good beaches in Australia. And you, what did you do? <br>Derek: I spent a lot of time at my grandma’s, in a farm. It was fun and got some <br>rest. <br>Anthony: Did your brothers go with you? <br>Derek: Yes, and we did a lot of things there, we swam in a lake, went horse-riding, <br>picked fruits, etc. <br>Anthony: How nice!",
        "reconstructed_exercises": "105 – Conte a um amigo o que fez no fim de semana, em inglês: <br> <br>Você: foi ao shopping, comprou uma camiseta legal; foi ao cinema, jantou com uma amiga, <br>conversou com ela sobre trabalho, estudo e diversão. O tempo estava firme, não choveu, <br>então vocês caminharam pela praia, depois tomaram um táxi e foram pra casa. <br> <br> <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>106 – Pergunte aos seus colegas de escola/trabalho o que eles: <br> <br>a) Fizeram no sábado à noite. <br>b) Compraram de presente de aniversário para a Cristina. <br>c) Comeram no restaurante italiano. <br>d) Estudaram para a prova. <br>e) Encontraram na rua. <br>f) Fizeram para o jantar. <br> <br>107 – Complete o trecho abaixo com os verbos no Simple Past e descubra as ações que <br>Cathy realizou. <br> <br>Yesterday was Saturday. I _____________ at 10:00 (wake up), ____________ (eat) my breakfast <br>and ___________ (read) the newspaper. Then I _____________ (write) an e-mail to John. In the <br>afternoon I ____________ (go) to a park and _____________ (meet) my friends Gina and Paul. I <br>_______________ (have) a wonderful day. <br> <br>108 – Preencha os espaços nas frases com os verbos dos parênteses conjugados no Simple <br>Past. <br> <br>a) _________ Sarah _________ to the club on Saturday? (go) <br>b) We ________________ you the report last Friday. (send) <br>c) Mr. Fox _______________ in the office last week. (be / not) <br>d) The postman ___________in, ___________me the papers and ________ (come) / (give) / (leave) <br> <br>109 – Complete um trecho da música abaixo com os verbos dos parênteses no Simple <br>Past. <br> <br>Killing me Softly (Fugees) <br> <br>I _______________ (to hear) he ___________ (to sing) a good song <br>I _______________ (to hear) he ___________ (to have) a style <br>And so I ____________ (to come) to see him, to listen for a <br>while <br>And there he _____________ (to be) this young boy <br>A stranger to my eyes <br>I ______________ (to feel) all flushed with fever <br>Embarrassed by the crowd <br>I ______________ (to feel) he’d found my letters <br>And ____________ (to read) each one out loud <br>I _______________ (to pray) that he would finish <br>But he just __________ (to keep) right on… <br> <br>110 – (Marinha / Colégio Naval - adaptada): A sequência que apresenta todos os verbos <br>no Simple Past é: <br> <br>a) ( ) put - drank - ate - heard - taken <br>b) ( ) knew - brought - wanted - made - was <br>c) ( ) wrote - come - felt - had - flew <br>d) ( ) told - were - begun - gave - read <br>e) ( ) left - spent - slept - swum - traveled <br> <br> <br>111 – (Exército – ESPCEX): Escolha a opção correta que completa a frase abaixo: <br>“I _________ you at the party last night”. <br> <br>a) ( ) didn’t see <br>b) ( ) didn’t saw <br>c) ( ) don’t saw <br>d) ( ) don’t see<br>112 – (INEP / Enceja – adaptada) Marque a opção correta. <br>Ao verificar o estado do livro emprestado ao cachorro Odie, o gato Garfield decide: <br> <br> <br>a) ( ) levar o livro para restauração. <br>b) ( ) deixar o livro com o cachorro. <br>c) ( ) comprar outro livro. <br>d) ( ) punir o cachorro. <br> <br> <br> <br> <br> <br>Como você deve ter notado, este capítulo se refere, nas lições 1 <br>e 2, a ações concluídas no passado. E você deve estar se <br>perguntando: “e existem ações no passado que não foram <br>concluídas?” Bem, digamos que, na língua inglesa, o <br>pensamento sobre esse tema difere bastante do português. Para <br>que você entenda melhor, lhe apresento o tempo verbal Present <br>Perfect. As ações desse tempo se situam em um ponto entre o <br>passado e o presente. <br> <br>Observe estas três frases, em português: <br> <br>a) Eu estudei muito. <br>b) Eu estudei muito hoje. <br> <br>créditos: Paint by Number <br>2020."
    },
    "U6_L5": {
        "title": "Present Perfect",
        "unit": "UNIDADE 6 — FALANDO DE AÇÕES PASSADAS",
        "sentences": [
            {
                "en": "I have worked here for five years.",
                "pt": "Eu trabalho aqui há cinco anos.",
                "missing": "worked",
                "options": [
                    "worked",
                    "work",
                    "working"
                ]
            },
            {
                "en": "They have signed the contract today.",
                "pt": "Eles assinaram o contrato hoje.",
                "missing": "signed",
                "options": [
                    "signed",
                    "sign",
                    "signing"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Have worked / Has worked",
                "definition": "Tem trabalhado / Trabalhou (Present Perfect)."
            },
            {
                "term": "Since / For",
                "definition": "Desde (marco temporal inicial) / Há / Por (tempo de duração acumulada)."
            },
            {
                "term": "Lately",
                "definition": "Ultimamente, nos últimos tempos."
            }
        ],
        "quiz": {
            "question": "Qual auxiliar usamos no Present Perfect para a terceira pessoa (He/She/It)?",
            "options": [
                "had",
                "does",
                "has",
                "have"
            ],
            "correctIndex": 2,
            "explanation": "Para He/She/It, usamos o auxiliar 'has' (ex: She has studied)."
        },
        "businessContext": {
            "scenario": "Apresentando o histórico de conquistas comerciais do time na reunião anual.",
            "en": "We have achieved our sales targets lately.",
            "pt": "Nós alcançamos nossas metas de vendas ultimamente.",
            "missing": "achieved",
            "options": [
                "achieved",
                "achieve",
                "achieving"
            ],
            "terms": [
                {
                    "term": "Achieved",
                    "definition": "Alcançou / Atingiu metas ou resultados."
                },
                {
                    "term": "Lately",
                    "definition": "Recentemente, de forma contínua."
                }
            ],
            "quiz": {
                "question": "Como dizer 'Eu converso com o cliente desde janeiro' usando Present Perfect?",
                "options": [
                    "I have talked to the client since January.",
                    "I talk to the client since January.",
                    "I have talk to the client for January.",
                    "I talked to the client since January."
                ],
                "correctIndex": 0,
                "explanation": "Ações que começaram no passado e continuam exigem Present Perfect com 'since' para o marco: 'I have talked... since January'."
            }
        },
        "rawText": " 131 \n112 – (INEP / Enceja – adaptada) Marque a opção correta. \nAo verificar o estado do livro emprestado ao cachorro Odie, o gato Garfield decide: \n \n \na) (   ) levar o livro para restauração. \nb) (   ) deixar o livro com o cachorro. \nc) (   ) comprar outro livro. \nd) (   ) punir o cachorro. \n \n \n \n \n \nComo você deve ter notado, este capítulo se refere, nas lições 1 \ne 2, a ações concluídas no passado. E você deve estar se \nperguntando: “e existem ações no passado que não foram \nconcluídas?” Bem, digamos que, na língua inglesa, o \npensamento sobre esse tema difere bastante do português. Para \nque você entenda melhor, lhe apresento o tempo verbal Present \nPerfect. As ações desse tempo se situam em um ponto entre o \npassado e o presente. \n \nObserve estas três frases, em português: \n \na) Eu estudei muito. \nb) Eu estudei muito hoje. \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 5: Present Perfect. \n 132 \nc) Eu tenho estudado muito ultimamente. \n \nSe lhe perguntassem em qual tempo verbal essas frases estão, certamente você diria: “no \npassado”. Para ser mais preciso, no “pretérito perfeito”, o que poderia corresponder, em \ninglês, ao passado simples, ou Simple Past, como vimos.   \n \nNo entanto, essa correlação não é tão direta assim, e há algumas particularidades a se \nconsiderar. Se a ação cumpre alguma característica apresentada abaixo (tomando como \nbase as frases anteriores), ela deverá ser expressada no tempo Present Perfect. \n \na) O período de ocorrência da ação não é especificado, por não ser importante mencioná-\nlo: I have studied a lot (Eu estudei muito). \n \nb) A ação ocorreu em um tempo que ainda não está concluído: I have studied today (Eu \nestudei muito hoje) – o tempo ainda está em curso, não se concluiu. Outras expressões de \ntempo nessa perspectiva são: This week / month / year (esta semana, este mês, este ano), \npor exemplo. \n \nc) A ação começou no passado e perdura, continua no presente; portanto, não está \ntotalmente concluída: I have studied a lot lately (Eu tenho estudado muito) – e ainda estou \nestudando. \n \nA formação do Present Perfect é a seguinte: \n \n \n \n \n \n \n \n \n \n \n \n \n \nFrases afirmativas: \n \nVerbo auxiliar have quando o sujeito da frase for I, You, We, They; ou has, quando \no sujeito da frase for He, She, It + verbo principal no Particípio Passado + \ncomplemento da frase. \n \nExemplos:  \nThey have read this book for one hour. (Eles leram este livro por uma hora) \nShe has been to Rio de Janeiro many times. (Ela esteve no Rio de Janeiro muitas \nvezes). \n \n \n\n 133 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nAs formas verbais read e been, destacadas nos exemplos, estão no particípio passado e são \nirregulares. Os verbos regulares fazem sua forma de particípio passado com a terminação \n–ed.  \n \nExemplos: \nWork = worked \nPlay = played \nLive = lived \n \nFrases interrogativas: \nVerbo auxiliar have quando o sujeito da frase for I, You, We, They; ou has, quando \no sujeito da frase for He, She, It + sujeito da frase + complemento da frase. \n \nExemplos:  \nHave they read this book for one hour? (Eles leram este livro por uma hora?) \nHas she been to Rio de Janeiro many times? (Ela esteve no Rio de Janeiro muitas \nvezes?) \n \n \nFrases negativas: \n- Verbo auxiliar have quando o sujeito da frase for I, You, We, They; ou has, \nquando o sujeito da frase for He, She, It + not + verbo principal no Particípio \nPassado + complemento da frase. \n \nExemplos:  \n- They have not (haven’t) read this book for one hour. (Eles não leram este livro \npor uma hora). \n- She has not (hasn’t) been to Rio de Janeiro many times. (Ela não esteve no Rio \nde Janeiro muitas vezes). \n \n \n\n 134 \nOs verbos irregulares têm forma própria. Veja alguns mais usados. A tradução, na tabela, \nrefere-se ao infinitivo, e pode ter vários outros significados, dependendo do contexto. \nA) Verbos com duas formas iguais (infinitivo e particípio passado): \n \nInfinitive Past Participle Translation \nbecome become tornar-se \nbet bet apostar \ncome come vir, chegar \ncost cost custar \ncut cut cortar \nhit hit bater \nhurt hurt ferir, machucar \nlet let deixar, permitir \nput put colocar, pôr \nquit quit desistir, abandonar \nread read ler \nrun run correr \nset set pôr, dispor, ajustar  \nspread spread espalhar \nshut shut fechar, trancar \nwet wet molhar, umedecer \n \nObservação: \na) A pronúncia do verbo “read” é [ riːd], no infinitivo, e [rɛd] no particípio passado. Assim \ncomo “read”, muitos outros verbos podem ter escrita igual em duas formas, mas pronúncia \ndiferente. É preciso sempre buscar uma fonte de checagem da pronúncia, como o Google \nTradutor, por exemplo. \n \nB) Verbos que mudam apenas uma letra: \n \nInfinitive Simple Past Translation \nbegin begun começar, iniciar \nbuild built construir \ndrink drunk beber \nget got obter, conseguir \n 135 \nhang hung pendurar \nlend lent emprestar \nmake made fazer \nsend sent enviar \nshine shone brilhar \nsit set sentar \nspend spent gastar \nwin won ganhar \n \nC) Verbos que “perdem” uma letra repetida: \n \nInfinitive Simple Past Translation \nbleed bled sangrar \nbreed bred criar, procriar, gerar \nfeed fed alimentar \nmeet met encontrar, conhecer \nshoot shot atirar, alvejar. \n \nD) Verbos em que se acrescenta uma letra ao infinitivo: \n \nInfinitive Simple Past Translation \nblow blown soprar \nburn burnt queimar, incendiar \ndeal dealt negociar, repartir \ndraw drawn desenhar \ndrive driven dirigir, guiar \ngive given dar, conceder \ngrow grown crescer, florescer  \nhear heard escutar, ouvir \nknow known saber, conhecer \nlearn learnt aprender \nmean meant significar \n 136 \nrise risen levantar(se), erguer \nsee seen ver, enxergar \nshake shaken sacudir, agitar \nshow shown mostrar \nspoil spoilt estragar, destruir \ntake taken tomar, pegar \nthrow thrown lançar, arremessar \n \nE) Verbos que têm formas bem diferentes: \n \nInfinitive Simple Past Translation \nbe was / were ser / estar \nbeat beaten bater, espancar \nbite bitten morder \nbreak broken quebrar \nbring brought trazer \nbuy bought comprar \ncatch caught pegar, capturar \ndo done fazer \neat eaten comer \nfall fallen cair, diminuir, abater-se \nfeel felt sentir \nfight fought lutar, brigar \nfind found encontrar \nhave had ter \nhide hidden esconder(se), ocultar \nkeep kept manter \nlay laid pôr, colocar \nleave left deixar, partir \nlose lost perder \n 137 \npay paid pagar \nsay said dizer \nsell sold vender \nsleep slept dormir \nsmell smelt cheirar \nstand stood ficar, permanecer \nteach taught ensinar \ntell told dizer, contar \nthink thought pensar \nunderstand understood entender \nwake woken acordar, despertar \nwear worn vestir, usar, trajar \nAdaptado de: http://benditoingles.com.br/tecnica-aprendizado-verbos-irregulares-em-ingles \n \nO Present Perfect também pode ser empregado para: \na) Designar ações que acabaram de acontecer no momento da fala, ou recentemente. \nExemplo: \nI have just saw her. (Eu acabei de vê-la) \n \nb) Relatar ações que se iniciaram e ainda continuam acontecendo no momento da fala.  \nExemplo: \nWe have studied a lot for the exams.  (Nós temos estudado muito para as provas). – e \nainda estamos estudando... \n \nInformações importantes: \na) O Present Perfect pode ser empregado para descrever outras ações, dependendo da \nintenção do falante. \n \nb) Uma vez que o aprendizado do inglês é universal, muitas vezes, os falantes em vários \npaíses acabam usando o Simple Past  para todas as ações, por parecer mais sim ples e \nprático. No entanto, é recomendado usar o Present Perfect em suas especificações. \n \nc) A tradução de frases no Present Perfect para o português é diversa, e varia segundo o \ncontexto.  \n 138 \nExemplo: \nThey have lived here for years. (Eles moraram aqui por anos / Eles moram aqui há anos / \nEles têm morado aqui há anos / Eles estão morando aqui há anos).  \nA ação da última frase também pode ser expressada no tempo Present Perfect Continuous, \npara destacar a continuidade da ação. \n \nÉ comum o uso do Present Perfect com os advérbios abaixo, que ajudam a completar o \nsentido da frase: \n \nYet (já ou ainda) \nNever (nunca) \nAlready (já) \nEver (já ou alguma vez) \nJust (agora mesmo ou há pouco) \nLately (ultimamente) \nRecently (recentemente) \n \n \n \n \nSituação: Duas colegas de escritório conversam sobre suas atividades: \n \nClaire:  What have you done till now, Francis? We have many things to do today. \nChristine:  I know… Till now I've written a lot of reporters. \nClaire:  I need the report about our new investments. \nChristine:  Here you are. I’ve called almost all of our customers to invite them to the \ncocktail. \nClaire:  Good. Have you gotten to speak to Mr. Brown? \nChristine:  Not yet, but I’ve tried it many times. \nClaire:  Has Mr. Davis telephoned? \nChristine:  No, not yet. I’ll call him later. \nClaire:  Have you seen our new marketing add? \nChristine:  Yes, I have seen it many times today. \nClaire:  Well, let’s have lunch now… \n \n  \nDIÁLOGO \n \n 139 \n \n \n \n \n113 – Identifique a sequência correta do uso do Present Perfect em cada uma das frases \nabaixo, de acordo com a ação indicada.  \n \na) ação repetida num passado indeterminado;  \nb) ação praticada num passado indeterminado, com reflexos no presente;  \nc) ação indicada no passado e ainda acontecendo no presente.  \n \n(   ) I’ve lost my keys. How can I get home now?  \n(   ) The Rolling Stones have been to Brazil more than once.  \n(   ) Mrs. Campbell has worked with children since she was very young.  \n(   ) I’ve had my old car for over ten years.  \n(   ) I’ve made some coffee. Would you like a cup?  \n \na) (   ) a – a – b – c – c \nb) (   ) c – b – c – c – d \nc) (   ) b – a – a – c – b \nd) (   ) b – a – c – c – b \ne) (   ) c – c – b – c – b \n \n114 – Complete as frases usando os verbos dos parênteses no Present Perfect.  \n \na) I  (read) your book several times. \nb) She  (wear) that skirt many times. \nc) My family  (visit) Brazil a few times. \nd) I  (eat) already. \ne) Marta  (finish) her homework. \nf) You  (break) the glass again. \ng) They  (pay) for everything. \nh) I  (meet) Anna once. \ni) We  (see) him before. \nj) You  (buy) 4 cars so far. \nEXERCÍCIOS \n 140 \n115 – Complete o texto usando os verbos nos parênteses no Present Perfect.  \n \nJack_____________________ (be) my friend for over 20 years. We _______________ (know)   each \nother since we were children. Recently, he and his fam ily ___________________ (move)  to a \nhouse on the same street as me, and now our children play together almost every day.  \nFor the last ten years, Jack and I _____________________ (play) for the same hockey team every \nSaturday. Jack is a better player than I am, but in the last few months he____________  \n(have) some trouble with his left knee, and he _______________________ (find) it hard to play a \nfull game. He ___________________ (see)  the doctor several times about his  knee, but the \ndoctor doesn't know what is causing his pain. Jack _______________________ (decide)  to take \na break from hockey for a while, so that his knee can recover. It's going to be lonely on the \nteam without him! \n(adaptado de: https://continuingstudies.uvic.ca/elc/studyzone/410/grammar/pperf1) \n \n116 – Marque a opção que completa corretamente a frase. (qconcursos.com) \nBoeing ____ this week that it ____ successfully ____ a manned airplane powered _____ \nhydrogen fuel cells. \n \na) (   ) announced / has / flown / on; \nb) (   ) has announced / had / flown / by; \nc) (   ) announced / has / flown / by; \nd) (   ) have announced / has / flown / on; \ne) (   ) announced / had / flown / on. \n \n117 -  Qual seria a melhor pergunta para esta resposta? \n           Yes, I've ever been to Australia. \n \na) (   ) Have you ever been to Australia? \nb) (   ) Do you have been to Australia? \nc) (   ) You have ever been to Australia? \nd) (   ) Have you go to Australia? \n \n118 - Leia o texto e marque a opção que o completa corretamente. (qconcursos.com) \n \nThe millennium development goals (MDGs ) ______ eight key areas - poverty, education, \ngender equality, child mortality, maternal health, disease, the environment an d global \n 141 \npartnership. Each goal ______ by 21 specific targets and more than 60 indicators. The UN \n______the MDGs 'the most successful anti -poverty movement in history’, but what \nprogress______ on each of the goals? (Adapted from https://vwwv.theguardian.com) \n \na) (   ) have been targeted / supports / has been called / has made \nb) (   ) have targeted / support / has called / has been made \nc) (   ) have targeted / is supported / has called / has been made \nd) (   ) have been targeted / supported / has been called / has been made \ne) (   ) have targeted / are supported / has been called / has made \n \n119 – Leia o texto e marque a opção que o completa corretamente. (qconcursos.com) \n \nPamela is absolutely dedicated to work. She is a doctor and director of a university \ndepartment where she has ______ a lot of research on anesthesiology. She has also ______ \ngrants from federal and private organizations and has______ her projects all over the world \nto be presented at professional meetings. \n \na) (   ) do / win / took \nb) (   ) did / won / taken \nc) (   ) did / won / took \nd) (   ) done / won / took \ne) (   ) done / won / taken \n \n  \n",
        "reconstructed_explanation": "LIÇÃO 5: Present Perfect. <br>c) Eu tenho estudado muito ultimamente. <br> <br>Se lhe perguntassem em qual tempo verbal essas frases estão, certamente você diria: “no <br>passado”. Para ser mais preciso, no “pretérito perfeito”, o que poderia corresponder, em <br>inglês, ao passado simples, ou Simple Past, como vimos. <br> <br>No entanto, essa correlação não é tão direta assim, e há algumas particularidades a se <br>considerar. Se a ação cumpre alguma característica apresentada abaixo (tomando como <br>base as frases anteriores), ela deverá ser expressada no tempo Present Perfect. <br> <br>a) O período de ocorrência da ação não é especificado, por não ser importante mencioná-<br>lo: I have studied a lot (Eu estudei muito). <br> <br>b) A ação ocorreu em um tempo que ainda não está concluído: I have studied today (Eu <br>estudei muito hoje) – o tempo ainda está em curso, não se concluiu. Outras expressões de <br>tempo nessa perspectiva são: This week / month / year (esta semana, este mês, este ano), <br>por exemplo. <br> <br>c) A ação começou no passado e perdura, continua no presente; portanto, não está <br>totalmente concluída: I have studied a lot lately (Eu tenho estudado muito) – e ainda estou <br>estudando. <br> <br>A formação do Present Perfect é a seguinte: <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>Frases afirmativas: <br> <br>Verbo auxiliar have quando o sujeito da frase for I, You, We, They; ou has, quando <br>o sujeito da frase for He, She, It + verbo principal no Particípio Passado + <br>complemento da frase. <br> <br>Exemplos: <br>They have read this book for one hour. (Eles leram este livro por uma hora) <br>She has been to Rio de Janeiro many times. (Ela esteve no Rio de Janeiro muitas <br>vezes). <br>As formas verbais read e been, destacadas nos exemplos, estão no particípio passado e são <br>irregulares. Os verbos regulares fazem sua forma de particípio passado com a terminação <br>–ed. <br> <br>Exemplos: <br>Work = worked <br>Play = played <br>Live = lived <br> <br>Frases interrogativas: <br>Verbo auxiliar have quando o sujeito da frase for I, You, We, They; ou has, quando <br>o sujeito da frase for He, She, It + sujeito da frase + complemento da frase. <br> <br>Exemplos: <br>Have they read this book for one hour? (Eles leram este livro por uma hora?) <br>Has she been to Rio de Janeiro many times? (Ela esteve no Rio de Janeiro muitas <br>vezes?) <br> <br> <br>Frases negativas: <br>- Verbo auxiliar have quando o sujeito da frase for I, You, We, They; ou has, <br>quando o sujeito da frase for He, She, It + not + verbo principal no Particípio <br>Passado + complemento da frase. <br> <br>Exemplos: <br>- They have not (haven’t) read this book for one hour. (Eles não leram este livro <br>por uma hora). <br>- She has not (hasn’t) been to Rio de Janeiro many times. (Ela não esteve no Rio <br>de Janeiro muitas vezes). <br>Os verbos irregulares têm forma própria. Veja alguns mais usados. A tradução, na tabela, <br>refere-se ao infinitivo, e pode ter vários outros significados, dependendo do contexto. <br>A) Verbos com duas formas iguais (infinitivo e particípio passado): <br> <br>Infinitive Past Participle Translation <br>become become tornar-se <br>bet bet apostar <br>come come vir, chegar <br>cost cost custar <br>cut cut cortar <br>hit hit bater <br>hurt hurt ferir, machucar <br>let let deixar, permitir <br>put put colocar, pôr <br>quit quit desistir, abandonar <br>read read ler <br>run run correr <br>set set pôr, dispor, ajustar <br>spread spread espalhar <br>shut shut fechar, trancar <br>wet wet molhar, umedecer <br> <br>Observação: <br>a) A pronúncia do verbo “read” é [ riːd], no infinitivo, e [rɛd] no particípio passado. Assim <br>como “read”, muitos outros verbos podem ter escrita igual em duas formas, mas pronúncia <br>diferente. É preciso sempre buscar uma fonte de checagem da pronúncia, como o Google <br>Tradutor, por exemplo. <br> <br>B) Verbos que mudam apenas uma letra: <br> <br>Infinitive Simple Past Translation <br>begin begun começar, iniciar <br>build built construir <br>drink drunk beber <br>get got obter, conseguir <br>hang hung pendurar <br>lend lent emprestar <br>make made fazer <br>send sent enviar <br>shine shone brilhar <br>sit set sentar <br>spend spent gastar <br>win won ganhar <br> <br>C) Verbos que “perdem” uma letra repetida: <br> <br>Infinitive Simple Past Translation <br>bleed bled sangrar <br>breed bred criar, procriar, gerar <br>feed fed alimentar <br>meet met encontrar, conhecer <br>shoot shot atirar, alvejar. <br> <br>D) Verbos em que se acrescenta uma letra ao infinitivo: <br> <br>Infinitive Simple Past Translation <br>blow blown soprar <br>burn burnt queimar, incendiar <br>deal dealt negociar, repartir <br>draw drawn desenhar <br>drive driven dirigir, guiar <br>give given dar, conceder <br>grow grown crescer, florescer <br>hear heard escutar, ouvir <br>know known saber, conhecer <br>learn learnt aprender <br>mean meant significar <br>rise risen levantar(se), erguer <br>see seen ver, enxergar <br>shake shaken sacudir, agitar <br>show shown mostrar <br>spoil spoilt estragar, destruir <br>take taken tomar, pegar <br>throw thrown lançar, arremessar <br> <br>E) Verbos que têm formas bem diferentes: <br> <br>Infinitive Simple Past Translation <br>be was / were ser / estar <br>beat beaten bater, espancar <br>bite bitten morder <br>break broken quebrar <br>bring brought trazer <br>buy bought comprar <br>catch caught pegar, capturar <br>do done fazer <br>eat eaten comer <br>fall fallen cair, diminuir, abater-se <br>feel felt sentir <br>fight fought lutar, brigar <br>find found encontrar <br>have had ter <br>hide hidden esconder(se), ocultar <br>keep kept manter <br>lay laid pôr, colocar <br>leave left deixar, partir <br>lose lost perder <br>pay paid pagar <br>say said dizer <br>sell sold vender <br>sleep slept dormir <br>smell smelt cheirar <br>stand stood ficar, permanecer <br>teach taught ensinar <br>tell told dizer, contar <br>think thought pensar <br>understand understood entender <br>wake woken acordar, despertar <br>wear worn vestir, usar, trajar <br>Adaptado de: http://benditoingles.com.br/tecnica-aprendizado-verbos-irregulares-em-ingles <br> <br>O Present Perfect também pode ser empregado para: <br>a) Designar ações que acabaram de acontecer no momento da fala, ou recentemente. <br>Exemplo: <br>I have just saw her. (Eu acabei de vê-la) <br> <br>b) Relatar ações que se iniciaram e ainda continuam acontecendo no momento da fala. <br>Exemplo: <br>We have studied a lot for the exams. (Nós temos estudado muito para as provas). – e <br>ainda estamos estudando... <br> <br>Informações importantes: <br>a) O Present Perfect pode ser empregado para descrever outras ações, dependendo da <br>intenção do falante. <br> <br>b) Uma vez que o aprendizado do inglês é universal, muitas vezes, os falantes em vários <br>países acabam usando o Simple Past para todas as ações, por parecer mais sim ples e <br>prático. No entanto, é recomendado usar o Present Perfect em suas especificações. <br> <br>c) A tradução de frases no Present Perfect para o português é diversa, e varia segundo o <br>contexto. <br>Exemplo: <br>They have lived here for years. (Eles moraram aqui por anos / Eles moram aqui há anos / <br>Eles têm morado aqui há anos / Eles estão morando aqui há anos). <br>A ação da última frase também pode ser expressada no tempo Present Perfect Continuous, <br>para destacar a continuidade da ação. <br> <br>É comum o uso do Present Perfect com os advérbios abaixo, que ajudam a completar o <br>sentido da frase: <br> <br>Yet (já ou ainda) <br>Never (nunca) <br>Already (já) <br>Ever (já ou alguma vez) <br>Just (agora mesmo ou há pouco) <br>Lately (ultimamente) <br>Recently (recentemente)",
        "reconstructed_dialogue": "Situação: Duas colegas de escritório conversam sobre suas atividades: <br> <br>Claire: What have you done till now, Francis? We have many things to do today. <br>Christine: I know… Till now I've written a lot of reporters. <br>Claire: I need the report about our new investments. <br>Christine: Here you are. I’ve called almost all of our customers to invite them to the <br>cocktail. <br>Claire: Good. Have you gotten to speak to Mr. Brown? <br>Christine: Not yet, but I’ve tried it many times. <br>Claire: Has Mr. Davis telephoned? <br>Christine: No, not yet. I’ll call him later. <br>Claire: Have you seen our new marketing add? <br>Christine: Yes, I have seen it many times today. <br>Claire: Well, let’s have lunch now… <br> <br> <br>DIÁLOGO",
        "reconstructed_exercises": "113 – Identifique a sequência correta do uso do Present Perfect em cada uma das frases <br>abaixo, de acordo com a ação indicada. <br> <br>a) ação repetida num passado indeterminado; <br>b) ação praticada num passado indeterminado, com reflexos no presente; <br>c) ação indicada no passado e ainda acontecendo no presente. <br> <br>( ) I’ve lost my keys. How can I get home now? <br>( ) The Rolling Stones have been to Brazil more than once. <br>( ) Mrs. Campbell has worked with children since she was very young. <br>( ) I’ve had my old car for over ten years. <br>( ) I’ve made some coffee. Would you like a cup? <br> <br>a) ( ) a – a – b – c – c <br>b) ( ) c – b – c – c – d <br>c) ( ) b – a – a – c – b <br>d) ( ) b – a – c – c – b <br>e) ( ) c – c – b – c – b <br> <br>114 – Complete as frases usando os verbos dos parênteses no Present Perfect. <br> <br>a) I (read) your book several times. <br>b) She (wear) that skirt many times. <br>c) My family (visit) Brazil a few times. <br>d) I (eat) already. <br>e) Marta (finish) her homework. <br>f) You (break) the glass again. <br>g) They (pay) for everything. <br>h) I (meet) Anna once. <br>i) We (see) him before. <br>j) You (buy) 4 cars so far. <br>EXERCÍCIOS <br>115 – Complete o texto usando os verbos nos parênteses no Present Perfect. <br> <br>Jack_____________________ (be) my friend for over 20 years. We _______________ (know) each <br>other since we were children. Recently, he and his fam ily ___________________ (move) to a <br>house on the same street as me, and now our children play together almost every day. <br>For the last ten years, Jack and I _____________________ (play) for the same hockey team every <br>Saturday. Jack is a better player than I am, but in the last few months he____________ <br>(have) some trouble with his left knee, and he _______________________ (find) it hard to play a <br>full game. He ___________________ (see) the doctor several times about his knee, but the <br>doctor doesn't know what is causing his pain. Jack _______________________ (decide) to take <br>a break from hockey for a while, so that his knee can recover. It's going to be lonely on the <br>team without him! <br>(adaptado de: https://continuingstudies.uvic.ca/elc/studyzone/410/grammar/pperf1) <br> <br>116 – Marque a opção que completa corretamente a frase. (qconcursos.com) <br>Boeing ____ this week that it ____ successfully ____ a manned airplane powered _____ <br>hydrogen fuel cells. <br> <br>a) ( ) announced / has / flown / on; <br>b) ( ) has announced / had / flown / by; <br>c) ( ) announced / has / flown / by; <br>d) ( ) have announced / has / flown / on; <br>e) ( ) announced / had / flown / on. <br> <br>117 - Qual seria a melhor pergunta para esta resposta? <br> Yes, I've ever been to Australia. <br> <br>a) ( ) Have you ever been to Australia? <br>b) ( ) Do you have been to Australia? <br>c) ( ) You have ever been to Australia? <br>d) ( ) Have you go to Australia? <br> <br>118 - Leia o texto e marque a opção que o completa corretamente. (qconcursos.com) <br> <br>The millennium development goals (MDGs ) ______ eight key areas - poverty, education, <br>gender equality, child mortality, maternal health, disease, the environment an d global <br>partnership. Each goal ______ by 21 specific targets and more than 60 indicators. The UN <br>______the MDGs 'the most successful anti -poverty movement in history’, but what <br>progress______ on each of the goals? (Adapted from https://vwwv.theguardian.com) <br> <br>a) ( ) have been targeted / supports / has been called / has made <br>b) ( ) have targeted / support / has called / has been made <br>c) ( ) have targeted / is supported / has called / has been made <br>d) ( ) have been targeted / supported / has been called / has been made <br>e) ( ) have targeted / are supported / has been called / has made <br> <br>119 – Leia o texto e marque a opção que o completa corretamente. (qconcursos.com) <br> <br>Pamela is absolutely dedicated to work. She is a doctor and director of a university <br>department where she has ______ a lot of research on anesthesiology. She has also ______ <br>grants from federal and private organizations and has______ her projects all over the world <br>to be presented at professional meetings. <br> <br>a) ( ) do / win / took <br>b) ( ) did / won / taken <br>c) ( ) did / won / took <br>d) ( ) done / won / took <br>e) ( ) done / won / taken<br>Você já deve estar fazendo planos de continuar sua vida <br>acadêmica na universidade/faculdade e entrar no mundo <br>profissional, não é? Então você vai aprender agora como falar <br>de seus planos: <br> <br>Quando você quer falar de intenções, geralmente usa o futuro <br>com o WILL. <br> <br>I will live in another city. <br>I will study at a great university. <br>I will be an excellent student. <br>I will be a good engineer. <br> <br>É fácil, não? Este é o tempo chamado “Simple Future” (Futuro Simples) e é usado, <br>geralmente, para falar de planos em relação ao presente. É formado da seguinte maneira: <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>FALANDO DE <br>AÇÕES FUTURAS <br> <br>créditos: Paint by Number <br>2020. <br> <br>Forma afirmativa: sujeito + will + verbo + complemento. <br>Exemplo: I will travel do Europe next year. <br> <br>Forma interrogativa: will + sujeito + verbo + complemento. <br>Exemplo: Will you travel to Europe next year? <br> <br>Forma negativa: sujeito + will + not + verbo + complemento. <br>Exemplo: I will (won’t) travel to Europe next year."
    },
    "U7_L1": {
        "title": "Simple Future (WILL)",
        "unit": "UNIDADE 7 — FALANDO DE AÇÕES FUTURAS",
        "sentences": [
            {
                "en": "We will sign the new contract tomorrow.",
                "pt": "Nós assinaremos o novo contrato amanhã.",
                "missing": "will",
                "options": [
                    "will",
                    "would",
                    "going"
                ]
            },
            {
                "en": "I will call the client after the meeting.",
                "pt": "Eu ligarei para o cliente após a reunião.",
                "missing": "will",
                "options": [
                    "will",
                    "am",
                    "do"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Will",
                "definition": "Verbo auxiliar usado para expressar decisões futuras espontâneas ou promessas."
            },
            {
                "term": "Tomorrow",
                "definition": "Amanhã."
            },
            {
                "term": "Contract",
                "definition": "Contrato legal de venda ou prestação de serviços."
            }
        ],
        "quiz": {
            "question": "Como se faz a negação de 'will'?",
            "options": [
                "don't will",
                "willn't",
                "not will",
                "won't"
            ],
            "correctIndex": 3,
            "explanation": "A contração de 'will not' é 'won't'."
        },
        "businessContext": {
            "scenario": "Estipulando prazos e garantias contratuais de entrega de mercadorias ao cliente.",
            "en": "We will deliver the products next week.",
            "pt": "Nós entregaremos os produtos na próxima semana.",
            "missing": "deliver",
            "options": [
                "deliver",
                "delivery",
                "delivered"
            ],
            "terms": [
                {
                    "term": "Deliver",
                    "definition": "Entregar mercadorias ou resultados contratados."
                },
                {
                    "term": "Next week",
                    "definition": "Na semana que vem."
                }
            ],
            "quiz": {
                "question": "Como prometer formalmente ao cliente que você enviará a proposta comercial amanhã?",
                "options": [
                    "I send you proposal tomorrow.",
                    "I will send you the proposal tomorrow.",
                    "I going to send proposal tomorrow.",
                    "I'll sending you proposal tomorrow."
                ],
                "correctIndex": 1,
                "explanation": "Para promessas comerciais em conversações de negócios, usamos 'will': 'I will send'."
            }
        },
        "rawText": " 142 \n \n \n \n \n \n \n \n \nVocê já deve estar fazendo planos de continuar sua vida \nacadêmica na universidade/faculdade e entrar no mundo \nprofissional, não é? Então você vai aprender agora como falar \nde seus planos: \n \nQuando você quer falar de intenções, geralmente usa o futuro \ncom o WILL. \n \nI will live in another city. \nI will study at a great university. \nI will be an excellent student. \nI will be a good engineer. \n \nÉ fácil, não? Este é o tempo chamado “Simple Future” (Futuro Simples) e é usado, \ngeralmente, para falar de planos em relação ao presente. É formado da seguinte maneira: \n \n \n \n \n \n \n \n \n \n \n \n \n \nFALANDO DE  \nAÇÕES FUTURAS \n \ncréditos: Paint by Number \n2020. \n \nForma afirmativa: sujeito + will + verbo + complemento.  \nExemplo: I will travel do Europe next year. \n \nForma interrogativa: will + sujeito + verbo + complemento.  \nExemplo: Will you travel to Europe next year? \n \nForma negativa: sujeito + will + not + verbo + complemento.  \nExemplo: I will (won’t) travel to Europe next year. \n \nLIÇÃO 1: O que você quer ser “quando crescer?” \n \n \n \n \n \n \n 143 \nEsta forma de conjugação serve para todos os pronomes-sujeitos: I, He, She, It, We, You, \nThey. Eles podem ser usados com a contração do WILL: \n \nI will = I'll \nYou will = you'll (singular) \nHe will = he'll \nShe will = she'll \nIt will = it'll  \nWe will = we'll \nYou will = you'll (plural) \nThey will = they'll \nWill not = won't \n \nAlguns advérbios de tempo são comumente utilizados com o Simple Future: \n \nTomorrow = amanhã \nThe day after tomorrow = depois de amanhã \nNext year / month / week / Friday = no(a) próximo(a) ano / mês / semana / sexta-feira. \n \n \n \n \n \nSituação: Sally faz planos para o ano que se inicia e lista uma série de atividades que ela \npretende fazer: \n \nAndie:  So, Sally, another year’s coming.. \nSally:   Yes, and I promise I’ll do all the things I couldn’t do this year. \nAndie:  What things? \nSally:  I’ll travel to Scotland. I’ll start another diet. I’ll get another boyfriend. I’ll read \nmore books. I’ll wake up early on Sundays. I’ll see more filmes. I’ll protect \nanimals. I’ll eat healthy… I’ll… \nAndie:  Too many resolutions! \nSally:   Yes, I know… \n \n \nDIÁLOGO \n \n 144 \n \n \n \n \n120 – Complete corretamente as frases com os verbos dos parênteses no Simple Future.  \n \na) Tomorrow it  in the North. (to rain) \nb) My friend  12 next year. (to be) \nc) The pupils  good marks on the test. (to get) \nd) My father  to work hard tonight. (to have) \ne) Our class  in a quiz show. (to take part) \n \n121 – Forme frases usando os elementos abaixo, colocando os verbos no Simple Future.  \n \na) I / answer / the question:  \nb) She / read / the book:  \nc) They / drink / beer:  \nd) We / send / the postcard:  \ne) Vanessa / catch / the ball:  \n \n122 – Complete os fragmentos da música abaixo (cantada por Toto) conjugando os verbos \ndos parênteses no Simple Future.  \n \nAs soon as my heart stops breakin' \nAnticipating; as soon as forever is through \nI ______________ (to be) over you \nThere were the nights, holding you close \nSomeday I ____________ (to try) to forget them \n           \n123 – Complete o fragmento da música abaixo conjugando os verbos dos parênteses no \nSimple Future.  \n \nIs this Love?  (Bob Marley) \n \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 1: O que você quer ser “quando crescer?” <br>Esta forma de conjugação serve para todos os pronomes-sujeitos: I, He, She, It, We, You, <br>They. Eles podem ser usados com a contração do WILL: <br> <br>I will = I'll <br>You will = you'll (singular) <br>He will = he'll <br>She will = she'll <br>It will = it'll <br>We will = we'll <br>You will = you'll (plural) <br>They will = they'll <br>Will not = won't <br> <br>Alguns advérbios de tempo são comumente utilizados com o Simple Future: <br> <br>Tomorrow = amanhã <br>The day after tomorrow = depois de amanhã <br>Next year / month / week / Friday = no(a) próximo(a) ano / mês / semana / sexta-feira.",
        "reconstructed_dialogue": "Situação: Sally faz planos para o ano que se inicia e lista uma série de atividades que ela <br>pretende fazer: <br> <br>Andie: So, Sally, another year’s coming.. <br>Sally: Yes, and I promise I’ll do all the things I couldn’t do this year. <br>Andie: What things? <br>Sally: I’ll travel to Scotland. I’ll start another diet. I’ll get another boyfriend. I’ll read <br>more books. I’ll wake up early on Sundays. I’ll see more filmes. I’ll protect <br>animals. I’ll eat healthy… I’ll… <br>Andie: Too many resolutions! <br>Sally: Yes, I know… <br> <br> <br>DIÁLOGO",
        "reconstructed_exercises": "120 – Complete corretamente as frases com os verbos dos parênteses no Simple Future. <br> <br>a) Tomorrow it in the North. (to rain) <br>b) My friend 12 next year. (to be) <br>c) The pupils good marks on the test. (to get) <br>d) My father to work hard tonight. (to have) <br>e) Our class in a quiz show. (to take part) <br> <br>121 – Forme frases usando os elementos abaixo, colocando os verbos no Simple Future. <br> <br>a) I / answer / the question: <br>b) She / read / the book: <br>c) They / drink / beer: <br>d) We / send / the postcard: <br>e) Vanessa / catch / the ball: <br> <br>122 – Complete os fragmentos da música abaixo (cantada por Toto) conjugando os verbos <br>dos parênteses no Simple Future. <br> <br>As soon as my heart stops breakin' <br>Anticipating; as soon as forever is through <br>I ______________ (to be) over you <br>There were the nights, holding you close <br>Someday I ____________ (to try) to forget them <br> <br>123 – Complete o fragmento da música abaixo conjugando os verbos dos parênteses no <br>Simple Future. <br> <br>Is this Love? (Bob Marley)<br>I wanna love you and treat you right <br>I wanna love you every day and every night <br>We________________ (to be) together with a roof right over our heads <br>We ________________ (to share) the shelter of my single bed… <br> <br>124 – Ainda sobre o fragmento da mú sica, a tradução (literal) das frases que você <br>completou é “Estaremos juntos com um teto sobre nossas cabeças” e “Dividiremos o <br>aconchego da minha cama de solteiro”. Em inglês, essas frases foram feitas no Simple <br>Future porque: <br> <br>a) ( ) Há certeza da realização desses fatos no futuro. <br>b) ( ) Houve planejamento dessas ações em detalhes para que os fatos assim ocorram. <br>c) ( ) Essas ações são apenas promessas, são simples planos. <br>d) ( ) Essas ações acontecerão num futuro próximo. <br> <br> <br> <br> <br> <br>Quando você quer se referir a ações futuras que já têm um <br>planejamento, que já estão mais “certas” para acontecerem, <br>pode usar a forma “going to”. A estrutura da frase é a seguinte:"
    },
    "U7_L2": {
        "title": "Going To (ações planejadas)",
        "unit": "UNIDADE 7 — FALANDO DE AÇÕES FUTURAS",
        "sentences": [
            {
                "en": "We are going to visit the prospective client.",
                "pt": "Nós vamos visitar o cliente em potencial (planejado).",
                "missing": "going",
                "options": [
                    "going",
                    "will",
                    "go"
                ]
            },
            {
                "en": "He is going to present our sales software.",
                "pt": "Ele vai apresentar o nosso software de vendas.",
                "missing": "going",
                "options": [
                    "going",
                    "will",
                    "gone"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Be going to",
                "definition": "Estrutura usada para planos futuros e intenções pré-definidas."
            },
            {
                "term": "Visit",
                "definition": "Visitar um cliente ou parceiro comercial."
            },
            {
                "term": "Present",
                "definition": "Apresentar ou demonstrar algo."
            }
        ],
        "quiz": {
            "question": "Qual é a estrutura correta para expressar planos futuros com 'going to' para 'They'?",
            "options": [
                "They are going to study.",
                "They will going to study.",
                "They is going to study.",
                "They going to study."
            ],
            "correctIndex": 0,
            "explanation": "A estrutura exige: sujeito + be (are) + going to + verbo."
        },
        "businessContext": {
            "scenario": "Detalhamento de compromissos da agenda comercial corporativa para a próxima semana.",
            "en": "They are going to launch the campaign on Monday.",
            "pt": "Eles vão lançar a campanha na segunda-feira.",
            "missing": "launch",
            "options": [
                "launch",
                "launched",
                "launching"
            ],
            "terms": [
                {
                    "term": "Plan",
                    "definition": "Plano ou planejamento estratégico estruturado."
                },
                {
                    "term": "Product launch",
                    "definition": "Lançamento oficial de um produto no mercado."
                }
            ],
            "quiz": {
                "question": "Como expressar o plano agendado de fazer uma demonstração do produto às 14h?",
                "options": [
                    "We will demonstrate the product at 2 PM.",
                    "We are demonstrate the product.",
                    "We demonstrate the product at 2 PM.",
                    "We are going to demonstrate the product at 2 PM."
                ],
                "correctIndex": 3,
                "explanation": "Para planos estruturados e agendas corporativas, usamos 'going to': 'We are going to'."
            }
        },
        "rawText": " 145 \nI wanna love you and treat you right \nI wanna love you every day and every night \nWe________________ (to be) together with a roof right over our heads \nWe ________________ (to share) the shelter of my single bed… \n \n124 – Ainda sobre o fragmento da mú sica, a tradução (literal) das frases que você \ncompletou é “Estaremos juntos com um teto sobre nossas cabeças” e “Dividiremos o \naconchego da minha cama de solteiro”. Em inglês, essas frases foram feitas no Simple \nFuture porque:  \n \na) (   ) Há certeza da realização desses fatos no futuro. \nb) (   ) Houve planejamento dessas ações em detalhes para que os fatos assim ocorram. \nc) (   ) Essas ações são apenas promessas, são simples planos. \nd) (   ) Essas ações acontecerão num futuro próximo. \n \n \n \n \n \nQuando você quer se referir a ações futuras que já têm um \nplanejamento, que já estão mais “certas” para acontecerem, \npode usar a forma “going to”. A estrutura da frase é a seguinte:  \n \n \n \n \n  \nLIÇÃO 2: Ações Futuras Planejadas (Going to) \n \n \ncréditos: Paint by Number \n2020. \n \nForma afirmativa:  \nsujeito + verbo to be + going to + verbo principal no \ninfinitivo sem “to” + complemento.  \n \nExemplos: \nI am (I’m) going to visit my grandparents tomorrow. \n\"Vou visitar meus avós amanhã\" \nShe is (she’s) going to sing at the party. \n\"Ela vai cantar na festa\" \nThey are (they’re) going to travel to New York next week. \n\"Eles vão viajar a Nova Iorque na próxima semana\" \n \n\n 146 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n  \nForma interrogativa:  \nverbo to be + sujeito + going to + verbo principal no infinitivo sem “to” + \ncomplemento.  \n \nExemplos: \nAre you going to visit your grandparents tomorrow? (Você vai visita r seus avós \namanhã? \nIs she going to sing at the party? (Ela vai cantar na festa?) \nAre they going to travel to New York next week? (Eles vão viajar a Nova York na \npróxima semana?) \n \n \nForma negativa:  \nsujeito + verbo to be + NOT + going to + verbo principal no infinitivo sem “to” + \ncomplemento.  \n \nExemplos: \nam (I’m not) going to visit my grandparents tomorrow. \nShe is not (she’s not / she isn’t) going to sing at the party. \nThey are not (they’re not / they aren’t I) going to travel to New York next week. \n \n \nRESUMINDO \n \nAffirmative Interrogative Negative \nI am going to Am I going to …? I am not going to \nHe / She / It is going to Is He / She / It going to …? He / She / It is not \ngoing to \nWe / You / They are \ngoing to \nAre We / You / They going to \n…? \nWe / You / They are \nnot going to \n \n 147 \n \n \nSituação: Dois amigos combinam a preparação de um bolo para comemorar o aniversário \nde Joanne. \n \nNick:   What are you going to do tomorrow? \nFred:   Nothing special, why? \nNick:   Tomorrow is Joanne’s birthday. How about making her a birthday cake? \nFred:   Good idea. Who is going to buy the ingredients? \nNick:   You can do it. I’m going to buy some drinks. \nFred:   At what time can you meet to make the cake? \nNick:   I think I’m not going to be back before noon. \nFred:   No problem. We can meet after noon, about 14.  \nNick:   I’m going to invite some of our friends to come. \nFred:   Good. I’m going to clean the house and prepare other things. \n \n \n \n \n \n \n \n125 – Escreva as palavras abaixo na ordem corr eta para formar frases no Future going to \nnas formas afirmativa, negativa e interrogativa:  \n \na) to / am / dentist / the / I / this / going / visit / afternoon /?  \nb) swim / aren’t / they / to / going / tomorrow.  \nc) her / paint / isn’t / to / room / going / she.  \nd) Peter / to / wash /going / his car/ is.  \ne) she / write / going / is / to / a letter.  \n \n  \nDIÁLOGO \n \nEXERCÍCIOS \n 148 \n126 – (Furb-SC - adaptada): Marque a opção que responde corretamente a pergunta \nabaixo: \n \nWhat are you going to do? \n \na) (   ) I travel to Los Angeles. \nb) (   ) I do my homework. \nc) (   ) I'm going to call the police. \nd) (   ) We're going not to do that. \ne) (   ) We'll think about it last week. \n \n127 – (Instituto Machado de Assis – adaptada) \nObserve a gravura e depois marque a opção correta, com base no tempo futuro: \n \n \n \n \n \n \n \n \n \n \nThe cars __________ at any second. \na) Turn. \nb) Turned. \nc) Are going to turn. \nd) Will turn. \nQuando se pensa em uma viagem para treinar o inglês, vêm logo à mente cidades como Nova Iorque \nou Londres. Mas, há muitas outras opções. Deixo algumas: \n Bristol: importante cidade no sul da Inglaterra, se sobressai pelo seu nível musical, artístico e \ncultural, onde se realizam dezenas de festivais no verão. \n Auckland: esta linda cidade australiana dispõe de muitos golfos, praias e trilhas. Teve vários \nde seus cenários destacados em filmes, e possui ampla variedade gastronômica.  \n Brisbane (Austrália): é uma cidade calma, possui centros culturais antigos e se destaca pelos \nseus bares e restaurantes. \n Vancouver (Canadá): cidade bastante segura, possui muitas riquezas naturais contrastando \ncom o desenvolvimento urbano. É perfeita para ativ idades turísticas, como o jogging, \npaddleboarding, o esqui, etc. \nDica \n \n",
        "reconstructed_explanation": "LIÇÃO 2: Ações Futuras Planejadas (Going to) <br> <br> <br>créditos: Paint by Number <br>2020. <br> <br>Forma afirmativa: <br>sujeito + verbo to be + going to + verbo principal no <br>infinitivo sem “to” + complemento. <br> <br>Exemplos: <br>I am (I’m) going to visit my grandparents tomorrow. <br>\"Vou visitar meus avós amanhã\" <br>She is (she’s) going to sing at the party. <br>\"Ela vai cantar na festa\" <br>They are (they’re) going to travel to New York next week. <br>\"Eles vão viajar a Nova Iorque na próxima semana\" <br>Forma interrogativa: <br>verbo to be + sujeito + going to + verbo principal no infinitivo sem “to” + <br>complemento. <br> <br>Exemplos: <br>Are you going to visit your grandparents tomorrow? (Você vai visita r seus avós <br>amanhã? <br>Is she going to sing at the party? (Ela vai cantar na festa?) <br>Are they going to travel to New York next week? (Eles vão viajar a Nova York na <br>próxima semana?) <br> <br> <br>Forma negativa: <br>sujeito + verbo to be + NOT + going to + verbo principal no infinitivo sem “to” + <br>complemento. <br> <br>Exemplos: <br>am (I’m not) going to visit my grandparents tomorrow. <br>She is not (she’s not / she isn’t) going to sing at the party. <br>They are not (they’re not / they aren’t I) going to travel to New York next week. <br> <br> <br>RESUMINDO <br> <br>Affirmative Interrogative Negative <br>I am going to Am I going to …? I am not going to <br>He / She / It is going to Is He / She / It going to …? He / She / It is not <br>going to <br>We / You / They are <br>going to <br>Are We / You / They going to <br>…? <br>We / You / They are <br>not going to",
        "reconstructed_dialogue": "Situação: Dois amigos combinam a preparação de um bolo para comemorar o aniversário <br>de Joanne. <br> <br>Nick: What are you going to do tomorrow? <br>Fred: Nothing special, why? <br>Nick: Tomorrow is Joanne’s birthday. How about making her a birthday cake? <br>Fred: Good idea. Who is going to buy the ingredients? <br>Nick: You can do it. I’m going to buy some drinks. <br>Fred: At what time can you meet to make the cake? <br>Nick: I think I’m not going to be back before noon. <br>Fred: No problem. We can meet after noon, about 14. <br>Nick: I’m going to invite some of our friends to come. <br>Fred: Good. I’m going to clean the house and prepare other things.",
        "reconstructed_exercises": "125 – Escreva as palavras abaixo na ordem corr eta para formar frases no Future going to <br>nas formas afirmativa, negativa e interrogativa: <br> <br>a) to / am / dentist / the / I / this / going / visit / afternoon /? <br>b) swim / aren’t / they / to / going / tomorrow. <br>c) her / paint / isn’t / to / room / going / she. <br>d) Peter / to / wash /going / his car/ is. <br>e) she / write / going / is / to / a letter. <br> <br> <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>126 – (Furb-SC - adaptada): Marque a opção que responde corretamente a pergunta <br>abaixo: <br> <br>What are you going to do? <br> <br>a) ( ) I travel to Los Angeles. <br>b) ( ) I do my homework. <br>c) ( ) I'm going to call the police. <br>d) ( ) We're going not to do that. <br>e) ( ) We'll think about it last week. <br> <br>127 – (Instituto Machado de Assis – adaptada) <br>Observe a gravura e depois marque a opção correta, com base no tempo futuro: <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>The cars __________ at any second. <br>a) Turn. <br>b) Turned. <br>c) Are going to turn. <br>d) Will turn. <br>Quando se pensa em uma viagem para treinar o inglês, vêm logo à mente cidades como Nova Iorque <br>ou Londres. Mas, há muitas outras opções. Deixo algumas: <br> Bristol: importante cidade no sul da Inglaterra, se sobressai pelo seu nível musical, artístico e <br>cultural, onde se realizam dezenas de festivais no verão. <br> Auckland: esta linda cidade australiana dispõe de muitos golfos, praias e trilhas. Teve vários <br>de seus cenários destacados em filmes, e possui ampla variedade gastronômica. <br> Brisbane (Austrália): é uma cidade calma, possui centros culturais antigos e se destaca pelos <br>seus bares e restaurantes. <br> Vancouver (Canadá): cidade bastante segura, possui muitas riquezas naturais contrastando <br>com o desenvolvimento urbano. É perfeita para ativ idades turísticas, como o jogging, <br>paddleboarding, o esqui, etc. <br>Dica<br>É comum usarmos o futuro para falar de previsões do <br>tempo. <br> <br>Exemplos: <br>It’s going to rain tomorrow. (Vai chover amanhã) <br>It will be sunny next week. (Vai fazer sol na próxima semana) <br>It looks like it’s going to rain! (Parece que vai chover!) <br> <br>Então, vamos aprender um pouco mais sobre este tema? <br> <br> <br> <br>What’s the weather like? (Como está o tempo?) <br>How’s the weather? (Como está o tempo?) <br>What’s the weather forecast for tomorrow? (Qual a previsão do tempo para amanhã?) <br>What’s the weather like today in Boston? (Como está o tempo hoje em Boston?) <br>How’s the weather in Australia in spring time ? (Como é o tempo n a Austrália na <br>primavera?) <br> <br> <br> <br> <br>créditos: Paint by Number <br>2020. <br> <br>VOCABULÁRIO <br> <br>Palavras Relacionadas ao Clima: <br>Sunny: Ensolarado Bright: Claro, ensolarado Windy: Com vento <br>Hot: Calor Cold: Frio Icy: Gelado <br>Warm: Calor ameno Cloudy: Nublado Rainy: Chuvoso <br>Dry: Seco Foggy: Enevoado, com cerração Wet: Úmido <br>Clear: Limpo, sem nuvens Snowy: Com neve Stormy: Com <br>tempestades"
    },
    "U7_L3": {
        "title": "Perguntas e palavras sobre o Clima/Tempo Meteorológico. Estações",
        "unit": "UNIDADE 7 — FALANDO DE AÇÕES FUTURAS",
        "sentences": [
            {
                "en": "It will be rainy during our trade expo.",
                "pt": "Estará chuvoso durante a nossa exposição comercial.",
                "missing": "rainy",
                "options": [
                    "rainy",
                    "rain",
                    "raining"
                ]
            },
            {
                "en": "Winter is our best sales season.",
                "pt": "O inverno é a nossa melhor temporada de vendas.",
                "missing": "Winter",
                "options": [
                    "Winter",
                    "Summer",
                    "Spring"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Rainy / Sunny",
                "definition": "Chuvoso / Ensolarado."
            },
            {
                "term": "Winter / Summer",
                "definition": "Inverno / Verão."
            },
            {
                "term": "Sales season",
                "definition": "Temporada de vendas alta ou baixa."
            }
        ],
        "quiz": {
            "question": "Como se pergunta 'Como está o tempo?' em inglês?",
            "options": [
                "What's the weather like?",
                "How is the weather doing?",
                "What is the climate?",
                "Is it hot?"
            ],
            "correctIndex": 0,
            "explanation": "'What's the weather like?' é a expressão padrão para perguntar sobre as condições do tempo."
        },
        "businessContext": {
            "scenario": "Avaliando impactos logísticos e de clima para entrega de produtos sazonais.",
            "en": "The delivery is delayed because of the heavy storm.",
            "pt": "A entrega está atrasada por causa da forte tempestade.",
            "missing": "storm",
            "options": [
                "storm",
                "sun",
                "spring"
            ],
            "terms": [
                {
                    "term": "Delayed delivery",
                    "definition": "Atraso no prazo de entrega logística contratada."
                },
                {
                    "term": "Sales season",
                    "definition": "Período sazonal de pico de faturamento comercial."
                }
            ],
            "quiz": {
                "question": "Como justificar comercialmente um atraso devido a problemas climáticos extremos?",
                "options": [
                    "We don't deliver in winter.",
                    "We have delays due to severe weather conditions.",
                    "The weather is bad, sorry.",
                    "No delivery because of rain."
                ],
                "correctIndex": 1,
                "explanation": "We have delays due to severe weather conditions é o posicionamento de logística padrão corporativo."
            }
        },
        "rawText": " 149 \n \n \n \n \nÉ comum usarmos o futuro para falar de previsões do \ntempo.  \n \nExemplos:  \nIt’s going to rain tomorrow. (Vai chover amanhã) \nIt will be sunny next week. (Vai fazer sol na próxima semana) \nIt looks like it’s going to rain! (Parece que vai chover!) \n \nEntão, vamos aprender um pouco mais sobre este tema?  \n \n \n \nWhat’s the weather like? (Como está o tempo?) \nHow’s the weather? (Como está o tempo?) \nWhat’s the weather forecast for tomorrow? (Qual a previsão do tempo para amanhã?) \nWhat’s the weather like today in Boston? (Como está o tempo hoje em Boston?) \nHow’s the weather in Australia in spring time ? (Como é o tempo n a Austrália na  \nprimavera?) \n \n \n \n \ncréditos: Paint by Number \n2020. \n \nVOCABULÁRIO \n \nPalavras Relacionadas ao Clima: \nSunny: Ensolarado Bright: Claro, ensolarado Windy: Com vento \nHot: Calor Cold: Frio Icy: Gelado \nWarm: Calor ameno Cloudy: Nublado Rainy: Chuvoso \nDry: Seco Foggy: Enevoado, com cerração Wet: Úmido \nClear: Limpo, sem nuvens Snowy: Com neve Stormy: Com \ntempestades \n \n \nLIÇÃO 3: Perguntas e Palavras  sobre o Clima/Tempo \nMeteorológico. Estações. \n \n \n \n \n \nPerguntas sobre o clima: \n \n 150 \n \n \n \n \nSituação: Tony e Megan conversam por uma rede social como é o clima em seus países: \n \nTony:  Tell me what the weather is like in your country. \nMegan: Well, it depends on the station. In winter, it’s very cold. The days are wet \nand sometimes it snows. \nTony:   In my country, it depends on the region. Some are very cold in winter, like \nSão José, others not so much as Vitória. \nMegan:  In summertime it’s too hot and the sun shines bright. I always go to the \nbeach or to a club. \nTony:   In Brazil the summer is very hot in all regions, not only at the beach but in \nthe mountain regions too. \nMegan:  In Autumn and Spring we have comfortable temperatures. \nTony:   I love sunny days and I don’t like windy days. \n[…] \n \n  \nPerscepções sobre  o Tempo Meteorológico: \nAwful = Horrível Good = Bom Pleasant = Agradável \nBeautiful = Lindo Great = Ótimo Unpleasant = Desagradável \nBad = Ruim Lovely = Adorável Wonderful = Maravilhoso \nExcellent = Excelente Nice = Legal  \n \n \nEstações (Seasons): \nSpring = primavera Fall / Autumn = outono  \nSummer = verão Winter = inverno  \n \nDIÁLOGO \n \n 151 \n \n \n \n \n128 – Alguns clientes gostam de comentar e perguntar sobre o tempo, geralmente para \niniciar uma conversa. Observe as figuras abaixo e escreva o adjetivo relativo a o tempo \nclimático que elas representam.  \n \n \n \n \na) It’s __________ \n \n \n \nb) It’s __________ \n    \n \n \n \nc) It’s __________ \n \n \n \nd) It’s __________ \n \n129 – Relacione as colunas:  \n \na) \n \n \n(    ) It’s sunny. It’s dry. The sun is shining. \nb) \n \n(    ) It’s cold. \nEXERCÍCIOS \n 152 \nc) \n \n \n(    ) It’s snowy. It’s snowing. \nd) \n \n \n(    ) It’s cloudy. It’s hot. \ne) \n \n \n(    ) It’s rainy. It’s wet. It’s raining. \nf) \n \n(    ) There’s a strong wind. It’s windy. \n \n \n  \nAs estações do ano na América do Norte ocorrem nos seguintes períodos: \n Primavera: de 20 de março a 21 de junho. \n Verão: de 21 de junho a 23 de setembro. \n Outono: de 22 ou 23 de setembro a 22 de dezembro. \n Inverno: de 22 de dezembro a 20 de março. \nDica \n \n",
        "reconstructed_explanation": "LIÇÃO 3: Perguntas e Palavras sobre o Clima/Tempo <br>Meteorológico. Estações. <br> <br> <br> <br> <br> <br>Perguntas sobre o clima:",
        "reconstructed_dialogue": "Situação: Tony e Megan conversam por uma rede social como é o clima em seus países: <br> <br>Tony: Tell me what the weather is like in your country. <br>Megan: Well, it depends on the station. In winter, it’s very cold. The days are wet <br>and sometimes it snows. <br>Tony: In my country, it depends on the region. Some are very cold in winter, like <br>São José, others not so much as Vitória. <br>Megan: In summertime it’s too hot and the sun shines bright. I always go to the <br>beach or to a club. <br>Tony: In Brazil the summer is very hot in all regions, not only at the beach but in <br>the mountain regions too. <br>Megan: In Autumn and Spring we have comfortable temperatures. <br>Tony: I love sunny days and I don’t like windy days. <br>[…] <br> <br> <br>Perscepções sobre o Tempo Meteorológico: <br>Awful = Horrível Good = Bom Pleasant = Agradável <br>Beautiful = Lindo Great = Ótimo Unpleasant = Desagradável <br>Bad = Ruim Lovely = Adorável Wonderful = Maravilhoso <br>Excellent = Excelente Nice = Legal <br> <br> <br>Estações (Seasons): <br>Spring = primavera Fall / Autumn = outono <br>Summer = verão Winter = inverno <br> <br>DIÁLOGO",
        "reconstructed_exercises": "128 – Alguns clientes gostam de comentar e perguntar sobre o tempo, geralmente para <br>iniciar uma conversa. Observe as figuras abaixo e escreva o adjetivo relativo a o tempo <br>climático que elas representam. <br> <br> <br> <br> <br>a) It’s __________ <br> <br> <br> <br>b) It’s __________ <br> <br> <br> <br> <br>c) It’s __________ <br> <br> <br> <br>d) It’s __________ <br> <br>129 – Relacione as colunas: <br> <br>a) <br> <br> <br>( ) It’s sunny. It’s dry. The sun is shining. <br>b) <br> <br>( ) It’s cold. <br>EXERCÍCIOS <br>c) <br> <br> <br>( ) It’s snowy. It’s snowing. <br>d) <br> <br> <br>( ) It’s cloudy. It’s hot. <br>e) <br> <br> <br>( ) It’s rainy. It’s wet. It’s raining. <br>f) <br> <br>( ) There’s a strong wind. It’s windy. <br> <br> <br> <br>As estações do ano na América do Norte ocorrem nos seguintes períodos: <br> Primavera: de 20 de março a 21 de junho. <br> Verão: de 21 de junho a 23 de setembro. <br> Outono: de 22 ou 23 de setembro a 22 de dezembro. <br> Inverno: de 22 de dezembro a 20 de março. <br>Dica<br>O verbo To Be tem três formas no presente (am, is, are) e duas <br>no passado (was, were). E qual é sua forma no futuro? O futuro <br>é feito da mesma forma que os outros verbos, ou seja, <br>utilizando-se a partícula WILL ou o futuro com GOING TO antes <br>da forma de infinitivo (para todos os sujeitos – I, You, He, She, <br>It, We, They). <br> <br>Exemplos: <br>Next week I will be in New York at this time. (Na semana que <br>vem estarei em Nova York a esta hora). <br> <br>Next week I am going to be in New York at this time. (Na semana que vem vou estar em <br>Nova York a esta hora). <br> <br>My son’s birthday party will be next Saturday. (A festa de aniversário do meu filho será no <br>próximo sábado). <br> <br>My son’s birthday party is going to be next Saturday. (A festa de aniversário do meu filho <br>vai ser no próximo sábado). <br> <br>As formas interrogativa e negativa seguem as formas gerais de formação: <br> <br>Will you be in New York next week? / Are you going to be in New York next week? <br> <br>I will not (won’t) be in Paris next month. / He is not (isn’t) going to be in Paris next <br>month. <br> <br>O verbo There to Be segue a mesma lógica. <br> <br>There will be / is going to be someone waiting for me in the airport. (Haverá alguém me <br>esperando no aeroporto). <br>Will there be / Is there going to be someone / anyone waiting for me in the airport? <br>(Haverá alguém me esperando no aeroporto?)"
    },
    "U7_L4": {
        "title": "O Futuro simples dos verbos To Be e There To Be",
        "unit": "UNIDADE 7 — FALANDO DE AÇÕES FUTURAS",
        "sentences": [
            {
                "en": "The showroom will be open tomorrow.",
                "pt": "O showroom estará aberto amanhã.",
                "missing": "be",
                "options": [
                    "be",
                    "been",
                    "is"
                ]
            },
            {
                "en": "There will be several international buyers.",
                "pt": "Haverá vários compradores internacionais.",
                "missing": "will",
                "options": [
                    "will",
                    "are",
                    "have"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Will be",
                "definition": "Será / Estará (futuro de To Be para todos os sujeitos)."
            },
            {
                "term": "There will be",
                "definition": "Haverá / Existirá (futuro de There to Be)."
            },
            {
                "term": "International buyer",
                "definition": "Comprador corporativo de outro país."
            }
        ],
        "quiz": {
            "question": "Como se conjuga 'There to Be' no futuro simples?",
            "options": [
                "There are going to be",
                "There will be",
                "There will have",
                "There is going to be"
            ],
            "correctIndex": 1,
            "explanation": "A conjugação padrão de existir no futuro é 'There will be' para singular e plural."
        },
        "businessContext": {
            "scenario": "Análise de projeções comerciais e oportunidades futuras em rodadas de negócios.",
            "en": "There will be new market opportunities next year.",
            "pt": "Haverá novas oportunidades de mercado no ano que vem.",
            "missing": "opportunities",
            "options": [
                "opportunities",
                "competitors",
                "risks"
            ],
            "terms": [
                {
                    "term": "Market opportunities",
                    "definition": "Novas frentes ou nichos lucrativos de venda."
                },
                {
                    "term": "Expansion plan",
                    "definition": "Planejamento estratégico de expansão de vendas corporativas."
                }
            ],
            "quiz": {
                "question": "Como garantir ao investidor que haverá recursos na sala de reuniões?",
                "options": [
                    "There is a projector in the room.",
                    "Have a projector in the room.",
                    "There will be a projector in the meeting room.",
                    "We will have been a projector."
                ],
                "correctIndex": 2,
                "explanation": "There will be indica a existência futura ('haverá') de forma correta."
            }
        },
        "rawText": " 153 \n \n \n \nO verbo To Be tem três formas no presente (am, is, are) e duas \nno passado (was, were). E qual é sua forma no futuro? O futuro \né feito da mesma forma que os outros  verbos, ou seja, \nutilizando-se a partícula WILL ou o futuro com GOING TO antes \nda forma de infinitivo (para todos os sujeitos – I, You, He, She, \nIt, We, They).  \n \nExemplos:  \nNext week I will be in New York at this time. (Na semana que \nvem estarei em Nova York a esta hora). \n \nNext week I am going to be in New York at this time. (Na semana que vem vou estar em \nNova York a esta hora). \n \nMy son’s birthday party will be next Saturday. (A festa de aniversário do meu filho será no \npróximo sábado). \n \nMy son’s birthday party is going to be next Saturday. (A festa de aniversário do meu filho \nvai ser no próximo sábado). \n \nAs formas interrogativa e negativa seguem as formas gerais de formação: \n \nWill you be in New York next week? / Are you going to be in New York next week? \n \nI will not (won’t) be in Paris next month. / He is not (isn’t) going to be in Paris next \nmonth. \n \nO verbo There to Be segue a mesma lógica.  \n \nThere will be / is going to be  someone waiting for me in the airport. (Haverá alguém me \nesperando no aeroporto). \nWill there be  / Is there going to be  someone / anyone waiting for me in the airport?  \n(Haverá alguém me esperando no aeroporto?) \nLIÇÃO 4: O Futuro simples dos verbos To Be e  \nThere To Be \n \ncréditos: Paint by Number \n2020. \n \n\n 154 \n \nThere will not (won’t) be  / is not (isn’t) going to be   anyone waiting for me in the \nairport. (Não haverá ninguém me esperando no aeroporto). \n \nObservação: As traduções de frases com o verbo haver podem ser mais livres no português \nfalado, e é comum usar o verbo ter: “Vai ter alguém me esperando?”  \nVocê encontrará mais exemplos desse uso também em outras lições deste livro. \n \n \n \n \n \n \nSituação: Dois cientistas fazem previsão sobre algumas coisas que acontecerão no mundo \ndaqui a a alguns anos. \n \nRobson:  Here we are man... working and planning actions… \nIsaac:   Do you think the world will change a lot in a short time? \nRobson:  I’m not sure if the world will change, but some interesting things will \nhappen. \nIsaac:  Which ones? \nRobson:  India will be the most populous country on Earth. \nIsaac:   Yes, in a near future. \nRobson:  Many cities will ban fossil fuel-powered vehicles. \nIsaac:   Yes, there are many cities now doing it. \nRobson:  All television will be Internet-based. \nIsaac:   It will be very good! \nRobson:  There will be a 3D-printing that will print human organs, and human brain \nsimulations will be possible. \nIsaac:   What else? \nRobson:  The Aerion AS2 supersonic jet will enter service. \nIsaac:   It will be great! \n[…] \n \n  \nDIÁLOGO \n \n 155 \n \n \n \n \n130 – Situação: Uma amiga lhe convida para ir a uma festa de confraternização. Antes de \nresponder, você quer saber algumas informações (pergunte em inglês). \n \n- Haverá muita gente?  \n- Haverá comidas e bebidas?  \n- Haverá música pop?  \n- Vai ter doces / sobremesas?  \n \nSua amiga responde as suas perguntas (em inglês) \n \n- Sim, haverá muita gente.  \n- Haverá muita comida deliciosa e bebidas não alcoólicas.  \n- Sim, vai ter música pop, rock, country, etc.  \n- Vai ter pudim e torta de chocolate.  \n \n131 – Passe as frases abaixo para as formas interrogativa (I) e negativa (N). \n \na) She will be here next month. \nI =  \nN =  \n \nb) They will be happy in their new house. \nI =  \nN =  \n \n  \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 4: O Futuro simples dos verbos To Be e <br>There To Be <br> <br>créditos: Paint by Number <br>2020. <br>There will not (won’t) be / is not (isn’t) going to be anyone waiting for me in the <br>airport. (Não haverá ninguém me esperando no aeroporto). <br> <br>Observação: As traduções de frases com o verbo haver podem ser mais livres no português <br>falado, e é comum usar o verbo ter: “Vai ter alguém me esperando?” <br>Você encontrará mais exemplos desse uso também em outras lições deste livro.",
        "reconstructed_dialogue": "Situação: Dois cientistas fazem previsão sobre algumas coisas que acontecerão no mundo <br>daqui a a alguns anos. <br> <br>Robson: Here we are man... working and planning actions… <br>Isaac: Do you think the world will change a lot in a short time? <br>Robson: I’m not sure if the world will change, but some interesting things will <br>happen. <br>Isaac: Which ones? <br>Robson: India will be the most populous country on Earth. <br>Isaac: Yes, in a near future. <br>Robson: Many cities will ban fossil fuel-powered vehicles. <br>Isaac: Yes, there are many cities now doing it. <br>Robson: All television will be Internet-based. <br>Isaac: It will be very good! <br>Robson: There will be a 3D-printing that will print human organs, and human brain <br>simulations will be possible. <br>Isaac: What else? <br>Robson: The Aerion AS2 supersonic jet will enter service. <br>Isaac: It will be great! <br>[…] <br> <br> <br>DIÁLOGO",
        "reconstructed_exercises": "130 – Situação: Uma amiga lhe convida para ir a uma festa de confraternização. Antes de <br>responder, você quer saber algumas informações (pergunte em inglês). <br> <br>- Haverá muita gente? <br>- Haverá comidas e bebidas? <br>- Haverá música pop? <br>- Vai ter doces / sobremesas? <br> <br>Sua amiga responde as suas perguntas (em inglês) <br> <br>- Sim, haverá muita gente. <br>- Haverá muita comida deliciosa e bebidas não alcoólicas. <br>- Sim, vai ter música pop, rock, country, etc. <br>- Vai ter pudim e torta de chocolate. <br> <br>131 – Passe as frases abaixo para as formas interrogativa (I) e negativa (N). <br> <br>a) She will be here next month. <br>I = <br>N = <br> <br>b) They will be happy in their new house. <br>I = <br>N =<br>Quando pensamos em planos, geralmente pensamos nas férias <br>e, consequentemente, em viagens e turismo. Vamos aprender <br>um pouco sobre esses temas? <br> <br> <br> <br>Depois de escolhido o roteiro, você precisa saber o que <br>dizer/perguntar: <br> <br>a) Para fazer uma reserva de hotel, por telefone ou <br>presencialmente: <br> <br> I would (I'd) like to make a reservation. (Eu gostaria de fazer uma reserva). <br> For what dates? (Para quais datas?) <br> Do you have anything available for (1 person / 2 people) on July 6th? (Você tem <br>alguma disponibilidade para 1 pessoa / 2 pessoas) para 6 de julho? <br> I need a room for (1 person / 2 people) (Preciso de um quarto para 1 pessoa / 2 <br>pessoas) <br> How much is that a night? (Qual o valor da diária?) <br> I would (I'd) like a room with a double bed / a single bed (Eu gostaria de um <br>quarto com cama de casal / cama de solteiro) <br> Is breakfast included? (O café da manhã está incluído?) <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>créditos: Paint by Number <br>2020. <br> <br>Com a facilidade de reservas on -line, as <br>conversas com atendentes ficaram bem <br>limitadas, mas, é importante saber as frases <br>básicas para al guma situação não <br>convencional. <br>OBSERVAÇÃO"
    },
    "U7_L5": {
        "title": "Planejando viagens",
        "unit": "UNIDADE 7 — FALANDO DE AÇÕES FUTURAS",
        "sentences": [
            {
                "en": "I need to book a flight to Chicago.",
                "pt": "Eu preciso reservar um voo para Chicago.",
                "missing": "book",
                "options": [
                    "book",
                    "flight",
                    "buy"
                ]
            },
            {
                "en": "Where is the business check-in counter?",
                "pt": "Onde fica o balcão de check-in da classe executiva?",
                "missing": "counter",
                "options": [
                    "counter",
                    "plane",
                    "seat"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Book a flight",
                "definition": "Reservar ou comprar passagem aérea."
            },
            {
                "term": "Check-in counter",
                "definition": "Balcão de atendimento para emissão de passagens e malas."
            },
            {
                "term": "Business class",
                "definition": "Classe executiva de viagens corporativas."
            }
        ],
        "quiz": {
            "question": "Como se diz 'restituição de bagagem' em inglês?",
            "options": [
                "bag drop",
                "baggage claim",
                "ticket counter",
                "luggage check"
            ],
            "correctIndex": 1,
            "explanation": "A área de pegar as malas no aeroporto é a 'baggage claim'."
        },
        "businessContext": {
            "scenario": "Organizando viagem internacional para fechamento de vendas com multinacional.",
            "en": "We will reserve the hotel and taxi for the client.",
            "pt": "Nós reservaremos o hotel e o táxi para o cliente.",
            "missing": "reserve",
            "options": [
                "reserve",
                "host",
                "travel"
            ],
            "terms": [
                {
                    "term": "Travel arrangements",
                    "definition": "Organização logística de passagens e hotéis corporativos."
                },
                {
                    "term": "Business trip",
                    "definition": "Viagem corporativa de negócios."
                }
            ],
            "quiz": {
                "question": "Como você confirma que reservou o hotel comercial para a equipe?",
                "options": [
                    "I made hotel for team.",
                    "I bought the hotel room team.",
                    "I booked the hotel rooms for our sales team.",
                    "I did reservated hotel room."
                ],
                "correctIndex": 2,
                "explanation": "'I booked' é o termo de negócios para dizer 'eu reservei'."
            }
        },
        "rawText": " 156 \n \n \n \nQuando pensamos em planos, geralmente pensamos nas férias \ne, consequentemente, em viagens e turismo. Vamos aprender \num pouco sobre esses temas? \n \n \n \nDepois de escolhido o roteiro, você precisa saber o que \ndizer/perguntar: \n \na) Para fazer uma reserva de hotel, por telefone ou \npresencialmente: \n \n I would (I'd) like to make a reservation. (Eu gostaria de fazer uma reserva). \n For what dates? (Para quais datas?) \n Do you have anything available for (1 person / 2 people) on July 6th? (Você tem \nalguma disponibilidade para 1 pessoa / 2 pessoas) para 6 de julho? \n I need a room for (1 person / 2 people) (Preciso de um quarto para 1 pessoa / 2 \npessoas) \n How much is that a night? (Qual o valor da diária?) \n I would (I'd) like a room with a double bed / a single bed (Eu gostaria de um \nquarto com cama de casal / cama de solteiro) \n Is breakfast included? (O café da manhã está incluído?) \n \n \n \n \n \n \n \n \n \n \n  \n \ncréditos: Paint by Number \n2020. \n \nCom a facilidade de reservas on -line, as \nconversas com atendentes ficaram bem \nlimitadas, mas, é importante saber as frases \nbásicas para al guma situação não \nconvencional. \nOBSERVAÇÃO \n \nLIÇÃO 5: Planejando Viagens. \nPlanejando uma viagem: \n \n 157 \nb) No aeroporto: \n \nAo chegar ao aeroporto, você precisa ler placas indicativas, perguntar como se locomover \nno terminal ou responder a algumas perguntas que a polícia de fronteira ou funcionários \ndo aeroporto podem lhe fazer. Veja algumas palavras e frases mais comuns. \n \nPassengers = passageiros \nPassport = passaporte \nBoarding Pass = cartão de embarque \nImmigration Control = controle de imigração \nInsurance = seguro \nTicket = passage/bilhete aéreo \nBaggage Ticket = bilhete de bagagem \nDelay = atraso \nFlight = voo \nAisle seat = assento do corredor \nWindow seat = assento da janela \nGate number (10) = portão de embarque número 10 \nDeparture = embarque/partida \nArrival = desembarque/chegada \nHand luggage = bagagem de mão \nBaggage Claim área = área de recebimento de bagagem \nRestroom / Toilette \nCustoms = alfândega \n \n Could I see your passport, please? (Posso ver seu passaporte, por \nfavor? \n Have you anything to declare? (Você tem algo a declarar?) \n What is the purpose of your travel? (Qual o objetivo de sua viagem?) \n Where do you come from? (De onde você vem?) \n How many suitcases do you have? (Quantas malas você tem?) \n Would you please open your suitcases? (Você pode abrir suas malas, por favor? \n You have to pay duty on these items (Você tem de pagar impostos sobre esses \nitens). \n Where are you staying? (Onde você vai ficar?) \n How long are you staying? (Por quanto tempo você vai ficar?) \n 158 \n Have a nice stay! (Tenha uma boa estadia!) \n \nc) Conseguir um transporte: \n \nTaxi / cab = táxi  \nTo flag down = acenar (para um táxi ou ônibus) \nRide = corrida (de táxi) \nCatch a bus = pegar um ônibus \nShuttle bus = ônibus de translado. \nTake a train = pegar um trem \nBullet train = trem bala \n \n Where can I take a taxi? (Onde posso pegar um taxi?) \n I would like to go to…. (eu gostaria de ir a…) \n How much is it? / What’s the fare? (qual o preço/valor?) \n Do you accept / take debit/ credit cards? (você aceita cartão de crédito/débito?) \n Only cash (só dinheiro) \n Where can I take a bus downtown? (Onde posso pegar um ônibus para o centro \nda cidade?) \n What time does the train/bus/ leave?  (A que horas o trem/ônibus/ sai?) \n Excuse me, does this bus go to Manhattan? (Com licença, este ônibus vai a \nManhattan?) \n Is this seat free? (Este lugar está livre?) \n Could I get a receipt, please? (Você pode me dar a nota / o recibo, por favor?) \n \nd) No hotel: \n \n Do you have a reservation? (Você tem reserva?) \n How many guests? (Quantos hóspedes?) \n Check-out is at (noon). (O check-out é ao meio dia) \n I need your signature here, please. (Preciso de sua assinatura aqui, por favor). \n Here's your key. (Aqui está sua chave). \n Enjoy your stay! (Aproveite sua estadia!). \n \n \n \n 159 \n \n \n \nSituação: Rachel acaba de chegar ao aeroporto e preca de algumas informações para seu \nembarque: \n \nRachel:  Excuse me, Sir. \nAttendant: Yes. \nRachel: Where is gate 12, please? \nAttendant: May I see your boarding pass and ID, please? \nRachel: Yes, here it is. \nAttendant: Where are you coming from? \nRachel: You: I’m coming from Rio de Janeiro, Brazil. \nAttendant: Oh, it’s at terminal 3. Just go straight and follow the signs. \nRachel: OK, thank you! \nAttendant: You’re welcome \n \n \n \n \n \n \n132 – Complete o diálogo abaixo com as palavras do quadro: \n \npassword - floor - reservation - room – breakfast - restaurant \n \n- Good morning, welcome to Flowers Hotel. Do you have a ____________? \n- Yes, I do. I would like to check in, please. \n- Could you fill in this form, please? \n- Is _______________ included? \n- Yes, it is. It is served from 6 to 9 a.m. at the _____________ on the first _______.” \n- Your ___________ is 51, on 5th floor. Here are your keys.  \n- What is the Wi-Fi ____________?” \n- Oh, I’ll write it down for you. Here it is. \n- Thank you. \n \nDIÁLOGO \n \nEXERCÍCIOS \n 160 \n133 – Escreva em inglês o que você diz quando precisa: \n \na) Fazer uma reserva de hotel:  \nb) Perguntar quanto custa uma corrida de táxi.  \nc) Perguntar se pode pagar com cartão de crédito.  \nd) Pedir um recibo (nota fiscal).  \ne) Perguntar onde conseguir um táxi:  \n \n \n  Dicas de viagem \n \nPlaneje sua viagem (o itinerário, lugares que gostaria de conhecer, quanto tempo vai ficar em \ncada lugar, como funciona o transporte local, etc.) \n \nSeja sempre educado e não economize nas palavras “please” e “thank you”. \n \nNão “fure” fila, nem fique querendo “dar um jeitinho” em certas situações. Use seu direito, mas \ncumpra seu dever. \n \nFaça um seguro viagem. Ele pode cobrir, além de despesas médicas, extravio e avaria de \nbagagem. Isso torna sua viagem mais tranquila. \n \nExperimente a gastronomia local. Busque conhecer novos pratos, frutas, legumes e temperos \nque geralmente não são comuns no seu país. Isso aumentará sua experiência cultural. \n \nProcure conhecer a história do país que vai visitar, seus costumes e tradições, e respeite suas \npeculiaridades.  \n \nCuide de sua vestimenta em países que assim o requeiram. Não tente “impor” costumes \ndiferentes do seu país em terra alheia. Seja sempre respeitoso. \n",
        "reconstructed_explanation": "LIÇÃO 5: Planejando Viagens. <br>Planejando uma viagem: <br>b) No aeroporto: <br> <br>Ao chegar ao aeroporto, você precisa ler placas indicativas, perguntar como se locomover <br>no terminal ou responder a algumas perguntas que a polícia de fronteira ou funcionários <br>do aeroporto podem lhe fazer. Veja algumas palavras e frases mais comuns. <br> <br>Passengers = passageiros <br>Passport = passaporte <br>Boarding Pass = cartão de embarque <br>Immigration Control = controle de imigração <br>Insurance = seguro <br>Ticket = passage/bilhete aéreo <br>Baggage Ticket = bilhete de bagagem <br>Delay = atraso <br>Flight = voo <br>Aisle seat = assento do corredor <br>Window seat = assento da janela <br>Gate number (10) = portão de embarque número 10 <br>Departure = embarque/partida <br>Arrival = desembarque/chegada <br>Hand luggage = bagagem de mão <br>Baggage Claim área = área de recebimento de bagagem <br>Restroom / Toilette <br>Customs = alfândega <br> <br> Could I see your passport, please? (Posso ver seu passaporte, por <br>favor? <br> Have you anything to declare? (Você tem algo a declarar?) <br> What is the purpose of your travel? (Qual o objetivo de sua viagem?) <br> Where do you come from? (De onde você vem?) <br> How many suitcases do you have? (Quantas malas você tem?) <br> Would you please open your suitcases? (Você pode abrir suas malas, por favor? <br> You have to pay duty on these items (Você tem de pagar impostos sobre esses <br>itens). <br> Where are you staying? (Onde você vai ficar?) <br> How long are you staying? (Por quanto tempo você vai ficar?) <br> Have a nice stay! (Tenha uma boa estadia!) <br> <br>c) Conseguir um transporte: <br> <br>Taxi / cab = táxi <br>To flag down = acenar (para um táxi ou ônibus) <br>Ride = corrida (de táxi) <br>Catch a bus = pegar um ônibus <br>Shuttle bus = ônibus de translado. <br>Take a train = pegar um trem <br>Bullet train = trem bala <br> <br> Where can I take a taxi? (Onde posso pegar um taxi?) <br> I would like to go to…. (eu gostaria de ir a…) <br> How much is it? / What’s the fare? (qual o preço/valor?) <br> Do you accept / take debit/ credit cards? (você aceita cartão de crédito/débito?) <br> Only cash (só dinheiro) <br> Where can I take a bus downtown? (Onde posso pegar um ônibus para o centro <br>da cidade?) <br> What time does the train/bus/ leave? (A que horas o trem/ônibus/ sai?) <br> Excuse me, does this bus go to Manhattan? (Com licença, este ônibus vai a <br>Manhattan?) <br> Is this seat free? (Este lugar está livre?) <br> Could I get a receipt, please? (Você pode me dar a nota / o recibo, por favor?) <br> <br>d) No hotel: <br> <br> Do you have a reservation? (Você tem reserva?) <br> How many guests? (Quantos hóspedes?) <br> Check-out is at (noon). (O check-out é ao meio dia) <br> I need your signature here, please. (Preciso de sua assinatura aqui, por favor). <br> Here's your key. (Aqui está sua chave). <br> Enjoy your stay! (Aproveite sua estadia!).",
        "reconstructed_dialogue": "Situação: Rachel acaba de chegar ao aeroporto e preca de algumas informações para seu <br>embarque: <br> <br>Rachel: Excuse me, Sir. <br>Attendant: Yes. <br>Rachel: Where is gate 12, please? <br>Attendant: May I see your boarding pass and ID, please? <br>Rachel: Yes, here it is. <br>Attendant: Where are you coming from? <br>Rachel: You: I’m coming from Rio de Janeiro, Brazil. <br>Attendant: Oh, it’s at terminal 3. Just go straight and follow the signs. <br>Rachel: OK, thank you! <br>Attendant: You’re welcome",
        "reconstructed_exercises": "132 – Complete o diálogo abaixo com as palavras do quadro: <br> <br>password - floor - reservation - room – breakfast - restaurant <br> <br>- Good morning, welcome to Flowers Hotel. Do you have a ____________? <br>- Yes, I do. I would like to check in, please. <br>- Could you fill in this form, please? <br>- Is _______________ included? <br>- Yes, it is. It is served from 6 to 9 a.m. at the _____________ on the first _______.” <br>- Your ___________ is 51, on 5th floor. Here are your keys. <br>- What is the Wi-Fi ____________?” <br>- Oh, I’ll write it down for you. Here it is. <br>- Thank you. <br> <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>133 – Escreva em inglês o que você diz quando precisa: <br> <br>a) Fazer uma reserva de hotel: <br>b) Perguntar quanto custa uma corrida de táxi. <br>c) Perguntar se pode pagar com cartão de crédito. <br>d) Pedir um recibo (nota fiscal). <br>e) Perguntar onde conseguir um táxi: <br> <br> <br> Dicas de viagem <br> <br>Planeje sua viagem (o itinerário, lugares que gostaria de conhecer, quanto tempo vai ficar em <br>cada lugar, como funciona o transporte local, etc.) <br> <br>Seja sempre educado e não economize nas palavras “please” e “thank you”. <br> <br>Não “fure” fila, nem fique querendo “dar um jeitinho” em certas situações. Use seu direito, mas <br>cumpra seu dever. <br> <br>Faça um seguro viagem. Ele pode cobrir, além de despesas médicas, extravio e avaria de <br>bagagem. Isso torna sua viagem mais tranquila. <br> <br>Experimente a gastronomia local. Busque conhecer novos pratos, frutas, legumes e temperos <br>que geralmente não são comuns no seu país. Isso aumentará sua experiência cultural. <br> <br>Procure conhecer a história do país que vai visitar, seus costumes e tradições, e respeite suas <br>peculiaridades. <br> <br>Cuide de sua vestimenta em países que assim o requeiram. Não tente “impor” costumes <br>diferentes do seu país em terra alheia. Seja sempre respeitoso.<br>Em português, consideramos que as frases: a) “Ela estuda <br>inglês duas vezes por semana” e b) “Ela está estudando inglês <br>agora” estão no presente. No entanto, em inglês essas frases <br>têm diferentes classificações. A primeira, refere-se a uma ação <br>habitual e, por isso, está no Simple Present (que você já <br>aprendeu na Unidade 4). A segunda refere-se a uma ação que <br>está acontecendo no momento da fala ou se refere a um <br>momento que está em curso. Nesse caso, a frase está no <br>Presente Progressivo/ Contínuo (Present <br>Progressive/Continuous), e como o nome supõe, é o tempo em <br>que as ações estão em progresso, em curso. A formação deste <br>tempo é a seguinte: <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>TEMPOS VERBAIS <br>PROGRESSIVOS. IMPERATIVO <br> <br>créditos: Paint by Number <br>2020. <br> <br>Forma afirmativa: <br>Sujeito + verbo To Be no presente + verbo principal + ING + complemento. <br> <br>Exemplos: <br>She is studying Mathematics for the test. (Ela está estudando matemática para a <br>prova). <br>I am cleaning the house. (Estou limpando a casa). <br> <br>Forma interrogativa: <br>Verbo To Be no presente + sujeito + verbo principal + ING + complemento. <br> <br>Exemplos: <br>Is she studying Mathematics for the text? (Ela está estudando matemática para <br>a prova?) <br>Are you cleaning the house? (Você está limpando a casa?)"
    },
    "U8_L1": {
        "title": "Presente Progressivo / Contínuo",
        "unit": "UNIDADE 8 — TEMPOS PROGRESSIVOS E IMPERATIVO",
        "sentences": [
            {
                "en": "The commercial team is calling clients now.",
                "pt": "A equipe comercial está ligando para clientes agora.",
                "missing": "calling",
                "options": [
                    "calling",
                    "call",
                    "called"
                ]
            },
            {
                "en": "We are preparing the sales proposal.",
                "pt": "Nós estamos preparando a proposta de vendas.",
                "missing": "preparing",
                "options": [
                    "preparing",
                    "prepare",
                    "prepares"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Calling",
                "definition": "Ligando ou telefonando (Present Continuous)."
            },
            {
                "term": "Preparing",
                "definition": "Preparando propostas ou apresentações."
            },
            {
                "term": "Sales proposal",
                "definition": "Proposta comercial formal de valores."
            }
        ],
        "quiz": {
            "question": "Qual a estrutura padrão do Present Continuous?",
            "options": [
                "Sujeito + verbo To Be + verbo-ING",
                "Sujeito + will + verbo",
                "Sujeito + have + particípio",
                "Sujeito + verbo base"
            ],
            "correctIndex": 0,
            "explanation": "Forma-se com o verbo To Be correspondente + o verbo principal com terminação '-ing'."
        },
        "businessContext": {
            "scenario": "Acompanhamento de status de pipeline em tempo real da equipe comercial.",
            "en": "Our sales reps are negotiating the contract terms right now.",
            "pt": "Nossos representantes de vendas estão negociando os termos do contrato exatamente agora.",
            "missing": "negotiating",
            "options": [
                "negotiating",
                "negotiate",
                "negotiates"
            ],
            "terms": [
                {
                    "term": "Sales reps",
                    "definition": "Representantes comerciais ou vendedores de campo."
                },
                {
                    "term": "Right now",
                    "definition": "Neste exato momento."
                }
            ],
            "quiz": {
                "question": "Como relatar ao gerente que você está finalizando o acordo agora?",
                "options": [
                    "I finalizing agreement.",
                    "I am finalizing the agreement right now.",
                    "I has been finalizing agreement.",
                    "I will finalizing agreement."
                ],
                "correctIndex": 1,
                "explanation": "Ação acontecendo no momento da fala exige Present Continuous: 'I am finalizing'."
            }
        },
        "rawText": " 161 \n  \n \n \n \n \n \n \n \nEm português, consideramos que as frases: a) “Ela estuda \ninglês duas vezes por semana” e b) “Ela está estudando inglês \nagora” estão no presente. No entanto, em inglês essas frases \ntêm diferentes classificações. A primeira,  refere-se a uma ação \nhabitual e, por isso, está no Simple Present (que você já \naprendeu na Unidade 4). A segunda refere-se a uma ação que \nestá acontecendo no momento da fala ou se refere a um \nmomento que está em curso. Nesse caso, a frase está no \nPresente Progressivo/ Contínuo (Present \nProgressive/Continuous), e como o nome supõe, é o tempo em \nque as ações estão em progresso, em curso. A formação deste \ntempo é a seguinte: \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \nTEMPOS VERBAIS \nPROGRESSIVOS. IMPERATIVO \n \ncréditos: Paint by Number \n2020. \n \nForma afirmativa:  \nSujeito + verbo To Be no presente + verbo principal + ING + complemento. \n \nExemplos:  \nShe is studying Mathematics for the test. (Ela está estudando matemática para a \nprova). \nI am cleaning the house. (Estou limpando a casa). \n \nForma interrogativa:  \nVerbo To Be no presente + sujeito + verbo principal + ING + complemento. \n \nExemplos: \nIs she studying Mathematics for the text? (Ela está estudando matemática para \na prova?) \nAre you cleaning the house? (Você está limpando a casa?) \n \nLIÇÃO 1: Presente Progressivo / Contínuo \n \n \n \n \n \n \n 162 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \na) Quando o verbo termina em –e, retira-se o –e antes de acrescentar ING. \n \nExemplos: \nTake = taking. Dance = dancing. Make = making.  \n \nExceção: To Be = being \n \nb) Quando o verbo termina em –ie, troca-se essa terminação por –y e acrescenta-se –ing. \n \nExemplos: \nLie = lying Die = dying   \n \n \nc)  Quando o verbo é monossílabo, ou dissílabo, com sílaba final tônica, e termina em CVC \n(consoante + vogal + consoante), duplica-se a última consoante. \n \nExemplos: \nCut = cutting Sit = sitting Put = putting Run = running \nPrefer = preferring    \n \nAlguns verbos passam por uma \nmudança ortográfica antes do \nacréscimo do sufixo ING. \nOBSERVAÇÃO \n \nForma negativa: \nSujeito + verbo To Be no presente + NOT + verbo principal + ING + complemento. \n \nExemplos:  \nShe is not (isn’t) studying Mathematics for the test. \nI am not (I’m not) cleaning the house. \n \n\n 163 \nExceções: \nSe a sílaba tônica for a primeira, a letra final \nnão é dobrada antes do acréscimo de ING. \n \nExemplos: \nOpen – opening \nHappen - happening \nQuando a última consoante é  w ou x, ela \nnão é dobrada. \n \n \nExemplos: \nSnow = snowing \nFix = fixing \n \n \n \n \n \n \n \nSituação: Lara chega em casa do shopping e traz muitos pacotes. Pede ajuda, mas estão \ntodos ocupados fazendo alguma coisa. \n \nLara:  Can you help me with these packs? They are heavy! \nThomas: Sorry. I am cleaning the floor. \nLara:  And you, Sandra? \nSandra: I am sorry. I am cooking dinner.  \nDavis:  I am finishing my homework. \nWilliam: I am playing videogames. \nLara:  Hello! Can somebody help me? \nSimon: Yes, I can. Wait a minute! I am watching the news on TV. \n \n  \nDIÁLOGO \n \n 164 \n \n \n \n134 – O diretor da empresa onde você trabalha viajou e depois ligou para saber como está \no andamento do trabalho. Diga, em inglês, o que cada pessoa está fazendo no escritório. \n \na) Mary está escrevendo uma carta.  \nb) Frank está falando ao telefone.  \nc) Joan está terminando um relatório.  \nd) Rick está tomando café.  \ne) Janet está lendo o jornal.  \nf) Ryan está conversando com um cliente.  \n \n135 – Sua mãe vai para o trabalho e de lá quer verificar se está tudo em ordem em casa. \nEla faz perguntas e você responde. Traduza a conversa para o inglês, em seu caderno. \n \nMãe:   O bebê está dormindo? \nVocê:   Não, ele está brincando. \nMãe:   Doris está limpando a casa? \nVocê:   (Sim), está. \nMãe:   George está regando as plantas? \nVocê:   Não, está não. \nMãe:   Alan está estudando para a prova de História? \nVocê:   (Sim), está. \nMãe:   O vovô está vendo TV? \nVocê:   Não, está almoçando. \n \n136 – (Instituto Machado de Assis – adaptada): Escolha a opção correta para completar a \nfrase. \n \n“Please be quiet! We __________ a test.\" \n \na) (   ) do \nb) (   ) is do \nc) (   ) did \nd) (   ) are taking \nEXERCÍCIOS \n 165 \n \n137 – Treine a colocação do ING nos verbos completando a letra da música baixo com os \nverbos dos parênteses. \n \nFalling for You (Colbie Caillat)  \n \nI don't know \nBut I think I may be _____________ for you. (to fall) \n______________ so quickly. (to drop) \nMaybe I should keep this to myself \n______________ 'til I know you better. (to wait) \nI am __________, not to tell you. (to try) \nBut I want to, \nI'm scared of what you'll say \nAnd so I'm _____________ what I'm ___________ (to hide) / (to feel). \nBut I'm tired of holding this inside my head \nI've been _____________ all my time. (to spend) \nJust _____________ about ya. (to think) \nI don't know what to do \nI think I'm ____________ for you. (to fall) \nI've been ____________ all my life. (to wait) \nAnd now I found ya \nI don't know what to do \nI think I'm fallin' for you \nI'm fallin' for you \nAs I'm ____________ here. (to stand) \nAnd you hold my hand \nPull me towards you \n[...] \n \n  \n \n\n",
        "reconstructed_explanation": "LIÇÃO 1: Presente Progressivo / Contínuo <br>a) Quando o verbo termina em –e, retira-se o –e antes de acrescentar ING. <br> <br>Exemplos: <br>Take = taking. Dance = dancing. Make = making. <br> <br>Exceção: To Be = being <br> <br>b) Quando o verbo termina em –ie, troca-se essa terminação por –y e acrescenta-se –ing. <br> <br>Exemplos: <br>Lie = lying Die = dying <br> <br> <br>c) Quando o verbo é monossílabo, ou dissílabo, com sílaba final tônica, e termina em CVC <br>(consoante + vogal + consoante), duplica-se a última consoante. <br> <br>Exemplos: <br>Cut = cutting Sit = sitting Put = putting Run = running <br>Prefer = preferring <br> <br>Alguns verbos passam por uma <br>mudança ortográfica antes do <br>acréscimo do sufixo ING. <br>OBSERVAÇÃO <br> <br>Forma negativa: <br>Sujeito + verbo To Be no presente + NOT + verbo principal + ING + complemento. <br> <br>Exemplos: <br>She is not (isn’t) studying Mathematics for the test. <br>I am not (I’m not) cleaning the house. <br>Exceções: <br>Se a sílaba tônica for a primeira, a letra final <br>não é dobrada antes do acréscimo de ING. <br> <br>Exemplos: <br>Open – opening <br>Happen - happening <br>Quando a última consoante é w ou x, ela <br>não é dobrada. <br> <br> <br>Exemplos: <br>Snow = snowing <br>Fix = fixing",
        "reconstructed_dialogue": "Situação: Lara chega em casa do shopping e traz muitos pacotes. Pede ajuda, mas estão <br>todos ocupados fazendo alguma coisa. <br> <br>Lara: Can you help me with these packs? They are heavy! <br>Thomas: Sorry. I am cleaning the floor. <br>Lara: And you, Sandra? <br>Sandra: I am sorry. I am cooking dinner. <br>Davis: I am finishing my homework. <br>William: I am playing videogames. <br>Lara: Hello! Can somebody help me? <br>Simon: Yes, I can. Wait a minute! I am watching the news on TV. <br> <br> <br>DIÁLOGO",
        "reconstructed_exercises": "134 – O diretor da empresa onde você trabalha viajou e depois ligou para saber como está <br>o andamento do trabalho. Diga, em inglês, o que cada pessoa está fazendo no escritório. <br> <br>a) Mary está escrevendo uma carta. <br>b) Frank está falando ao telefone. <br>c) Joan está terminando um relatório. <br>d) Rick está tomando café. <br>e) Janet está lendo o jornal. <br>f) Ryan está conversando com um cliente. <br> <br>135 – Sua mãe vai para o trabalho e de lá quer verificar se está tudo em ordem em casa. <br>Ela faz perguntas e você responde. Traduza a conversa para o inglês, em seu caderno. <br> <br>Mãe: O bebê está dormindo? <br>Você: Não, ele está brincando. <br>Mãe: Doris está limpando a casa? <br>Você: (Sim), está. <br>Mãe: George está regando as plantas? <br>Você: Não, está não. <br>Mãe: Alan está estudando para a prova de História? <br>Você: (Sim), está. <br>Mãe: O vovô está vendo TV? <br>Você: Não, está almoçando. <br> <br>136 – (Instituto Machado de Assis – adaptada): Escolha a opção correta para completar a <br>frase. <br> <br>“Please be quiet! We __________ a test.\" <br> <br>a) ( ) do <br>b) ( ) is do <br>c) ( ) did <br>d) ( ) are taking <br>EXERCÍCIOS <br>137 – Treine a colocação do ING nos verbos completando a letra da música baixo com os <br>verbos dos parênteses. <br> <br>Falling for You (Colbie Caillat) <br> <br>I don't know <br>But I think I may be _____________ for you. (to fall) <br>______________ so quickly. (to drop) <br>Maybe I should keep this to myself <br>______________ 'til I know you better. (to wait) <br>I am __________, not to tell you. (to try) <br>But I want to, <br>I'm scared of what you'll say <br>And so I'm _____________ what I'm ___________ (to hide) / (to feel). <br>But I'm tired of holding this inside my head <br>I've been _____________ all my time. (to spend) <br>Just _____________ about ya. (to think) <br>I don't know what to do <br>I think I'm ____________ for you. (to fall) <br>I've been ____________ all my life. (to wait) <br>And now I found ya <br>I don't know what to do <br>I think I'm fallin' for you <br>I'm fallin' for you <br>As I'm ____________ here. (to stand) <br>And you hold my hand <br>Pull me towards you <br>[...]<br>O tempo progressivo ou contínuo também é usado no <br>passado (Past Progressive/Continuous), e serve para falar de <br>ações que a) estavam acontecendo quando outra ocorreu (eu <br>estava dormindo quando o telefone tocou) ou de ações que <br>b) estavam ocorrendo simultaneamente (eu estava estudando <br>enquanto minha mãe estava ouvindo música). Vamos ver cada <br>caso, em inglês. <br> <br>No exemplo a, uma palavrinha importante dá este sentido à <br>frase: When (quando): I was sleeping when the phone r ang. <br>Neste caso, a primeira frase corresponde ao Past Progressive ou Continuous e a segunda <br>está no Simple Past (já estudado nas lições anteriores). <br> <br>No exemplo b, a palavra que dá esse sentido é While (enquanto): I was studying while my <br>mother was listening to music. Neste caso, as duas frases estão no Past Progressive ou <br>Continuous. <br> <br>Em ambos os exemplos, as primeiras frases estão na forma afirmativa, que tem a seguinte <br>estrutura: <br>Sujeito + verbo To Be no passado + verbo principal com ING + complemento. <br> <br>Outros exemplos: <br> <br>She was working when her husband arrived. (Ela estava trabalhando quando seu esposo <br>chegou). <br> <br>They were running while their children were playing. (Eles estavam correndo enquanto as <br>crianças estavam brincando). <br> <br>Para fazer perguntas, a forma interrogativa tem a seguinte estrutura: <br>Verbo To Be no passado + sujeito + verbo principal com ING + complemento. <br> <br> <br>créditos: Paint by Number <br>2020."
    },
    "U8_L2": {
        "title": "Passado Progressivo / Contínuo",
        "unit": "UNIDADE 8 — TEMPOS PROGRESSIVOS E IMPERATIVO",
        "sentences": [
            {
                "en": "I was writing the sales report when they called.",
                "pt": "Eu estava escrevendo o relatório de vendas quando eles ligaram.",
                "missing": "was",
                "options": [
                    "was",
                    "were",
                    "been"
                ]
            },
            {
                "en": "They were discussing the budget during the call.",
                "pt": "Eles estavam discutindo o orçamento durante a ligação.",
                "missing": "discussing",
                "options": [
                    "discussing",
                    "discuss",
                    "discussed"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Was / Were writing",
                "definition": "Estava / Estavam escrevendo (Past Continuous)."
            },
            {
                "term": "During the call",
                "definition": "No transcorrer da chamada telefônica."
            },
            {
                "term": "Budget",
                "definition": "Verba financeira disponível."
            }
        ],
        "quiz": {
            "question": "Qual conjunção é comumente usada para introduzir uma ação que interrompe outra no passado contínuo?",
            "options": [
                "when",
                "while",
                "because",
                "so"
            ],
            "correctIndex": 0,
            "explanation": "Usamos 'when' (quando) para introduzir uma ação curta que interrompeu outra que estava acontecendo."
        },
        "businessContext": {
            "scenario": "Esclarecendo mal-entendido com cliente sobre o que estava sendo feito quando houve um cancelamento.",
            "en": "We were processing your order when the system failed.",
            "pt": "Nós estávamos processando o seu pedido quando o sistema falhou.",
            "missing": "processing",
            "options": [
                "processing",
                "process",
                "processed"
            ],
            "terms": [
                {
                    "term": "Process order",
                    "definition": "Faturamento ou processamento logístico da compra do cliente."
                },
                {
                    "term": "System failure",
                    "definition": "Instabilidade técnica ou queda do servidor corporativo."
                }
            ],
            "quiz": {
                "question": "Como dizer 'Nós estávamos apresentando a proposta comercial quando o cliente chegou'?",
                "options": [
                    "We were presenting the proposal when the client arrived.",
                    "We was presenting proposal when client arrived.",
                    "We did presenting proposal when client arrived.",
                    "We presenting proposal when client arrived."
                ],
                "correctIndex": 0,
                "explanation": "Para We usamos 'were' + verbo-ing: 'We were presenting'."
            }
        },
        "rawText": " 166 \n \n \n \nO tempo progressivo ou contínuo  também é usado no \npassado (Past Progressive/Continuous), e serve para falar de \nações que a) estavam acontecendo quando outra ocorreu (eu \nestava dormindo quando o telefone tocou) ou de ações que \nb) estavam ocorrendo simultaneamente (eu estava estudando \nenquanto minha mãe estava ouvindo música). Vamos ver cada \ncaso, em inglês. \n \nNo exemplo a, uma palavrinha importante dá este sentido à \nfrase: When (quando): I was sleeping when the phone r ang. \nNeste caso, a primeira frase corresponde ao Past Progressive ou Continuous e a segunda \nestá no Simple Past (já estudado nas lições anteriores). \n \nNo exemplo b, a palavra que dá esse sentido é While (enquanto): I was studying while my \nmother was listening to music.  Neste caso, as duas frases estão no Past Progressive ou \nContinuous. \n \nEm ambos os exemplos, as primeiras frases estão na forma afirmativa, que tem a seguinte \nestrutura: \nSujeito + verbo To Be no passado + verbo principal com ING + complemento. \n \nOutros exemplos: \n \nShe was working when her husband arrived.  (Ela estava trabalhando quando seu esposo \nchegou). \n \nThey were running while their children were playing.  (Eles estavam correndo enquanto as \ncrianças estavam brincando). \n \nPara fazer perguntas, a forma interrogativa tem a seguinte estrutura: \nVerbo To Be no passado + sujeito + verbo principal com ING + complemento. \n  \n \ncréditos: Paint by Number \n2020. \n \nLIÇÃO 2: Passado Progressivo/Contínuo \n \n \n \n \n \n 167 \nExemplos: \n Was she working when her husband arrived?  (Ela estava trabalhando quando o \nesposo chegou?) \n Were they running while their children were playing?  (Eles/Elas estavam correndo \nenquanto os filhos estavam brincando?) \n \nPara negar uma ação, a frase negativa tem a seguinte forma: \nSujeito + verbo To Be no passado + NOT + verbo principal com ING + complemento. \n \nExemplos: \n She was not (wasn’t) working when her husband arrived. (Ela não estava trabalhando \nquando o esposo chegou) \n They were not (weren’t) running while their children were playing.  (Eles/Elas não \nestavam correndo enquanto os filhos estavam brincando) \n \n \n \n \nSituação: Eric convida Gracie para irem ao cinema e eles conversam: \n \nEric:   How about going to the movies tonight. \nGracie:  A movie tonight? No, thanks. \nEric:   Why not? You like movies. \nGracie:  Yes, but last night I was watching a film and I got scared. \nEric:   Why? What was it about? \nGracie:  The film was a thriller, the story was about a man who had a dog that stalked \nhim and the man couldn’t get ride of it. \nEric:   And…? \nGracie:  In the film they were fighting and I was getting nervous. When I was getting \nready to turn off the TV, the phone rang. I was going to answer  it when the \nlights went off. \nEric:   Were you alone? \nGracie:  Yes, but fortunately my father came into the living room at that very moment \nand stayed with me. \n […] \n \nDIÁLOGO \n \n 168 \n \n \n \n \n \n138 – Ontem faltou energia na cidade e muitas pessoas tiveram que interromper as \natividades que estavam fazendo. Complete as frases abaixo com os verbos dos parênteses \nno Past Continuous e descubra quais são essas atividades. \n \na) James  a shower (to take). \nb) The Watsons  a party (to have) \nc) Christian  his electric guitar. (to play). \nd) My brother  the dishes (to wash). \ne) Tom and Sophia  TV (to watch). \n \n139 – (Marinha / Colégio Naval – adaptada) \n \nComplete as frases abaixo com o uso correto do Simple Past e do Past Continuous. Em \nseguida, marque a opção que corresponda: \n \n- I was waiting for the bus when I___________ (see) her. \n- The children ___________ (argue) when the teacher arrived. \n- Everyone___________ (listen) to music when the lights ___________. (go) out. \n \na) (   ) saw / was arguing / were listening / went  \nb) (   ) was seeing / was arguing / listened / were \nc) (   ) were weeing / argued / listenned / were  \nd) (   ) saw / were arguing / was listening / went  \ne) (   ) was seing / argued / listened / were going \n \n  \nEXERCÍCIOS \n",
        "reconstructed_explanation": "LIÇÃO 2: Passado Progressivo/Contínuo <br>Exemplos: <br> Was she working when her husband arrived? (Ela estava trabalhando quando o <br>esposo chegou?) <br> Were they running while their children were playing? (Eles/Elas estavam correndo <br>enquanto os filhos estavam brincando?) <br> <br>Para negar uma ação, a frase negativa tem a seguinte forma: <br>Sujeito + verbo To Be no passado + NOT + verbo principal com ING + complemento. <br> <br>Exemplos: <br> She was not (wasn’t) working when her husband arrived. (Ela não estava trabalhando <br>quando o esposo chegou) <br> They were not (weren’t) running while their children were playing. (Eles/Elas não <br>estavam correndo enquanto os filhos estavam brincando)",
        "reconstructed_dialogue": "Situação: Eric convida Gracie para irem ao cinema e eles conversam: <br> <br>Eric: How about going to the movies tonight. <br>Gracie: A movie tonight? No, thanks. <br>Eric: Why not? You like movies. <br>Gracie: Yes, but last night I was watching a film and I got scared. <br>Eric: Why? What was it about? <br>Gracie: The film was a thriller, the story was about a man who had a dog that stalked <br>him and the man couldn’t get ride of it. <br>Eric: And…? <br>Gracie: In the film they were fighting and I was getting nervous. When I was getting <br>ready to turn off the TV, the phone rang. I was going to answer it when the <br>lights went off. <br>Eric: Were you alone? <br>Gracie: Yes, but fortunately my father came into the living room at that very moment <br>and stayed with me. <br> […] <br> <br>DIÁLOGO",
        "reconstructed_exercises": "138 – Ontem faltou energia na cidade e muitas pessoas tiveram que interromper as <br>atividades que estavam fazendo. Complete as frases abaixo com os verbos dos parênteses <br>no Past Continuous e descubra quais são essas atividades. <br> <br>a) James a shower (to take). <br>b) The Watsons a party (to have) <br>c) Christian his electric guitar. (to play). <br>d) My brother the dishes (to wash). <br>e) Tom and Sophia TV (to watch). <br> <br>139 – (Marinha / Colégio Naval – adaptada) <br> <br>Complete as frases abaixo com o uso correto do Simple Past e do Past Continuous. Em <br>seguida, marque a opção que corresponda: <br> <br>- I was waiting for the bus when I___________ (see) her. <br>- The children ___________ (argue) when the teacher arrived. <br>- Everyone___________ (listen) to music when the lights ___________. (go) out. <br> <br>a) ( ) saw / was arguing / were listening / went <br>b) ( ) was seeing / was arguing / listened / were <br>c) ( ) were weeing / argued / listenned / were <br>d) ( ) saw / were arguing / was listening / went <br>e) ( ) was seing / argued / listened / were going<br>O Futuro Progressivo/Contínuo (Future <br>Progressive/Continuous) é um tempo verbal usado <br>para mencionar ações que estarão ocorrendo no futuro em <br>um momento específico no futuro. É comumente usado para <br>fazer suposições, avisos, perguntas ou falas sobre planos e <br>promessas. <br> <br>As expressões de tempo mais utilizadas com esse tempo são: <br>tomorrow (amanhã); tomorrow morning (amanhã de manhã); <br>next week (próxima semana); next month (próximo mês); next <br>year (próximo ano), etc. <br> <br>Veja a seguir a formação desse tempo, nas três formas com WILL e também com Going To <br>+ Be: <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>créditos: Paint by Number <br>2020. <br> <br>Forma afirmativa: <br>Sujeito+simple future do verbo to be (will be) + verbo principal com –ing (+ <br>complemento) / Sujeito + verbo to be + going to + verbo principal com –ing <br>(+complemento) <br> <br>Exemplos: <br>You will be studying in the library. (Você estará estudando na biblioteca) <br>You are going to be studying in the library. (Você vai estar estudando na <br>biblioteca)"
    },
    "U8_L3": {
        "title": "Futuro Progressivo / Contínuo",
        "unit": "UNIDADE 8 — TEMPOS PROGRESSIVOS E IMPERATIVO",
        "sentences": [
            {
                "en": "This time tomorrow we will be hosting the commercial event.",
                "pt": "A esta hora amanhã estaremos realizando o evento comercial.",
                "missing": "be",
                "options": [
                    "be",
                    "been",
                    "is"
                ]
            },
            {
                "en": "They will be negotiating during the afternoon.",
                "pt": "Eles estarão negociando durante a tarde.",
                "missing": "negotiating",
                "options": [
                    "negotiating",
                    "negotiate",
                    "negotiated"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Will be hosting",
                "definition": "Estará realizando / organizando (Future Continuous)."
            },
            {
                "term": "Negotiating",
                "definition": "Negociando propostas comerciais."
            },
            {
                "term": "Event",
                "definition": "Seminário ou encontro de vendas."
            }
        ],
        "quiz": {
            "question": "Qual a estrutura correta do Future Continuous?",
            "options": [
                "will + verbo base",
                "will have + particípio",
                "going to be + verbo",
                "will be + verbo-ING"
            ],
            "correctIndex": 3,
            "explanation": "Forma-se com 'will be' + verbo principal no gerúndio (com terminação -ing)."
        },
        "businessContext": {
            "scenario": "Projetando as atividades comerciais em que a equipe estará focada no próximo mês.",
            "en": "We will be attending the trade expo next month.",
            "pt": "Nós estaremos participando da feira de negócios no mês que vem.",
            "missing": "attending",
            "options": [
                "attending",
                "attend",
                "attended"
            ],
            "terms": [
                {
                    "term": "Trade expo",
                    "definition": "Feira de negócios ou convenção setorial comercial."
                },
                {
                    "term": "Attending",
                    "definition": "Assistindo ou participando presencialmente."
                }
            ],
            "quiz": {
                "question": "Como descrever o que você estará fazendo amanhã de manhã em prol de um cliente?",
                "options": [
                    "I will be presenting our commercial solution tomorrow morning.",
                    "I will be present commercial solution.",
                    "I present commercial solution tomorrow morning.",
                    "I will presenting our commercial solution."
                ],
                "correctIndex": 0,
                "explanation": "'I will be presenting' (estarei apresentando) é a conjugação do futuro contínuo correto."
            }
        },
        "rawText": " 169 \n \n \n \nO Futuro Progressivo/Contínuo (Future \nProgressive/Continuous) é um tempo verbal usado \npara mencionar ações que estarão ocorrendo no futuro  em \num momento específico no futuro.  É comumente usado para \nfazer suposições, avisos, perguntas ou falas sobre planos e \npromessas. \n \nAs expressões de tempo mais utilizadas com esse tempo são: \ntomorrow (amanhã); tomorrow morning (amanhã de manhã); \nnext week (próxima semana); next month (próximo mês); next \nyear (próximo ano), etc. \n \nVeja a seguir a formação desse tempo, nas três formas com WILL e também com Going To \n+ Be:  \n \n \n \n \n \n \n \n \n \n \n \n  \n \ncréditos: Paint by Number \n2020. \n \nForma afirmativa:  \nSujeito+simple future do verbo to be (will be) + verbo principal com –ing (+ \ncomplemento) / Sujeito + verbo to be + going to + verbo principal com –ing \n(+complemento) \n \nExemplos:  \nYou will be studying in the library. (Você estará estudando na biblioteca) \nYou are going to be studying in the library. (Você vai estar estudando na \nbiblioteca) \n \nLIÇÃO 3: Futuro Progressivo/Contínuo \n \n \n \n \n \n 170 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n  \nForma interrogativa: \nVerbo auxiliar will+sujeito+verbo to be+verbo principal com –ing (+complemento) \n/ Verbo to be +sujeito + going to + verbo to be + verbo principal com –ing \n(+complemento) \nExemplos:  \nWill you be studying in the library? (Você estará estudando na biblioteca?) \nAre you going to be studying in the library? (Você vai estar estudando na \nbiblioteca?) \n \n \nForma negativa:  \nSujeito+ verbo auxiliar will + not+to be+verbo principal com –ing+ \ncomplemento. / Sujeito + verbo to be + not + going to + verbo principal com –\ning (+complemento) \n \nExemplos:  \nYou will not be (won’t be) studying in the library. (Você não estará estudando na \nbiblioteca). \nYou are not (aren’t) going to be studying in the library.  \n(Nós não vamos estar estudando na biblioteca). \n \nRESUMINDO \n \nAfirmativa \n• I, you, he she, it,we, \nyou, they} will be \nstaying in the library\nInterrogativa\n• I you, he she, it, we, \nyou, they} won't be \nstaying in the library\nNegativa\n• Will I, you, he she, it, \nwe, you, they} be \nstaying in the library?\n 171 \n \n \nSituação: Katie precisa viajar e precisa de alguém para cuidar do seu gato. Então, ela pede \najuda a uma amiga. \n \nKatie:  Hey Hanna, how are you doing? \nHanna:  Fine, and you? \nKatie:    Fine too, thanks. Let me ask you: What will you be doing tomorrow? \nHanna:  Nothing special. Probably I will be studying my school lessons. We will be \nstudying a new subject next week. Why? \nKatie:  I am going to travel tomorrow and I need someone to take care of my cat. \nHanna:  Ok, I can take care of him.  \nKatie:   Can you come here to get him? \nHanna:  Yes, I will be arriving there in one hour. \nKatie:   Thank you so much! \n \n \n \n \n \n \n140 – Traduza as frases abaixo: \n \na) I will be sleeping when you arrive here.  \nb) She will be living abroad when he starts college.  \nc) You will be working again in two weeks' time.  \nd) By this time tomorrow, I will be arriving in California.  \n \n141 – Complete as previsões do que a Mary estará fazendo amanhã nos seguintes horários, \nguiando-se pelas traduções: \n \na) By 6 o’clock she  (estará acordando) \nb) By 7 she  (estará tomando café) \nc) By 8 she  (estará se arrumando) \nd) By 9 she  (estará tomando o ônibus para ir à escola) \n \nDIÁLOGO \n \nEXERCÍCIOS \n 172 \n142 – Transforme as frases abaixo para as formas interrogativa (I) e negativa (N) \n \na) It will be raining a lot this week. \nI =  \nN =  \n \nb) At the end of this course, I will be playing the guitar well. \nI =  \nN =  \n \nc) They will be serving a delicious cake at the party. \nI =  \nN =  \n \nd) She will be talking with his boss about his problem. \nI =  \nN =  \n \n143 – (Prefeitura de Vermelho Novo – MG) \nMarque a alternativa em que o tempo verbal Future Continuous  foi empregado \ncorretamente: \n \na) (   ) Hopefully tomorrow, we will lying on the beach all day. \nb) (   ) What will you be doinng in a year from now? \nc) (   ) At this level you will be speak Spanish fluently in a question of months. \nd) (   ) Before long, he will be asking you for more money again. \n \n \n  \n",
        "reconstructed_explanation": "LIÇÃO 3: Futuro Progressivo/Contínuo <br>Forma interrogativa: <br>Verbo auxiliar will+sujeito+verbo to be+verbo principal com –ing (+complemento) <br>/ Verbo to be +sujeito + going to + verbo to be + verbo principal com –ing <br>(+complemento) <br>Exemplos: <br>Will you be studying in the library? (Você estará estudando na biblioteca?) <br>Are you going to be studying in the library? (Você vai estar estudando na <br>biblioteca?) <br> <br> <br>Forma negativa: <br>Sujeito+ verbo auxiliar will + not+to be+verbo principal com –ing+ <br>complemento. / Sujeito + verbo to be + not + going to + verbo principal com –<br>ing (+complemento) <br> <br>Exemplos: <br>You will not be (won’t be) studying in the library. (Você não estará estudando na <br>biblioteca). <br>You are not (aren’t) going to be studying in the library. <br>(Nós não vamos estar estudando na biblioteca). <br> <br>RESUMINDO <br> <br>Afirmativa <br>• I, you, he she, it,we, <br>you, they} will be <br>staying in the library<br>Interrogativa<br>• I you, he she, it, we, <br>you, they} won't be <br>staying in the library<br>Negativa<br>• Will I, you, he she, it, <br>we, you, they} be <br>staying in the library?",
        "reconstructed_dialogue": "Situação: Katie precisa viajar e precisa de alguém para cuidar do seu gato. Então, ela pede <br>ajuda a uma amiga. <br> <br>Katie: Hey Hanna, how are you doing? <br>Hanna: Fine, and you? <br>Katie: Fine too, thanks. Let me ask you: What will you be doing tomorrow? <br>Hanna: Nothing special. Probably I will be studying my school lessons. We will be <br>studying a new subject next week. Why? <br>Katie: I am going to travel tomorrow and I need someone to take care of my cat. <br>Hanna: Ok, I can take care of him. <br>Katie: Can you come here to get him? <br>Hanna: Yes, I will be arriving there in one hour. <br>Katie: Thank you so much!",
        "reconstructed_exercises": "140 – Traduza as frases abaixo: <br> <br>a) I will be sleeping when you arrive here. <br>b) She will be living abroad when he starts college. <br>c) You will be working again in two weeks' time. <br>d) By this time tomorrow, I will be arriving in California. <br> <br>141 – Complete as previsões do que a Mary estará fazendo amanhã nos seguintes horários, <br>guiando-se pelas traduções: <br> <br>a) By 6 o’clock she (estará acordando) <br>b) By 7 she (estará tomando café) <br>c) By 8 she (estará se arrumando) <br>d) By 9 she (estará tomando o ônibus para ir à escola) <br> <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>142 – Transforme as frases abaixo para as formas interrogativa (I) e negativa (N) <br> <br>a) It will be raining a lot this week. <br>I = <br>N = <br> <br>b) At the end of this course, I will be playing the guitar well. <br>I = <br>N = <br> <br>c) They will be serving a delicious cake at the party. <br>I = <br>N = <br> <br>d) She will be talking with his boss about his problem. <br>I = <br>N = <br> <br>143 – (Prefeitura de Vermelho Novo – MG) <br>Marque a alternativa em que o tempo verbal Future Continuous foi empregado <br>corretamente: <br> <br>a) ( ) Hopefully tomorrow, we will lying on the beach all day. <br>b) ( ) What will you be doinng in a year from now? <br>c) ( ) At this level you will be speak Spanish fluently in a question of months. <br>d) ( ) Before long, he will be asking you for more money again.<br>O Imperativo (Imperative) é usado para dar ordens, instruções <br>ou fazer pedidos. <br>Em inglês, sua forma é bem simples! <br> <br>A forma afirmativa é feita retirando-se a partícula –to do <br>verbo no infinitivo + o complemento da frase. <br> <br>Exemplos: <br>to study = estudar > study for the test (estude para a prova!). <br>to work = trabalhar > work fast! (trabalhe rápido!) <br> <br>A forma negativa é feita acrescentando-se DON’T antes do verbo sem to. <br> <br>Exemplos: <br>Don’t study. (não estude) <br>Don’t work. (não trabalhe) <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>Exemplo: <br>Please, open the window. / Open the window, please. (Por favor, abra a janela). <br> <br>O Imperativo também é comumente usa do pelos professores em sala de aula para pedir <br>aos alunos que façam (ou não) determinadas ações, como abrir ou a porta, não falarem <br>muito alto, etc. Veja algumas: <br> <br>créditos: Paint by Number <br>2020. <br> <br>Quando queremos atenuar uma ordem, ou ser gentil fazendo um pedido, <br>acrescentamos “please”, antes ou depois da frase."
    },
    "U8_L4": {
        "title": "Imperativo",
        "unit": "UNIDADE 8 — TEMPOS VERBAIS PROGRESSIVOS. IMPERATIVO",
        "sentences": [
            {
                "en": "Review the pricing tables immediately.",
                "pt": "Revise as tabelas de preços imediatamente.",
                "missing": "Review",
                "options": [
                    "Review",
                    "Reviews",
                    "Reviewing"
                ]
            },
            {
                "en": "Do not send proposals without client approval.",
                "pt": "Não envie propostas sem a aprovação do cliente.",
                "missing": "send",
                "options": [
                    "send",
                    "sending",
                    "sends"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Review",
                "definition": "Revisar (verbo na forma base usado para comando imperativo)."
            },
            {
                "term": "Do not send",
                "definition": "Não envie (imperativo negativo)."
            },
            {
                "term": "Immediately",
                "definition": "Imediatamente."
            }
        ],
        "quiz": {
            "question": "Como formamos o imperativo negativo em inglês?",
            "options": [
                "Usando 'Not' + verbo",
                "Usando 'Do not' (ou 'Don't') + verbo na forma base",
                "Usando 'No' + verbo",
                "Adicionando -ing ao verbo"
            ],
            "correctIndex": 1,
            "explanation": "O imperativo negativo padrão usa a estrutura 'Do not / Don't' + verbo no infinitivo sem to."
        },
        "businessContext": {
            "scenario": "Instruções urgentes e diretrizes comerciais repassadas aos vendedores da empresa.",
            "en": "Send the final contract details now.",
            "pt": "Envie os detalhes finais do contrato agora.",
            "missing": "Send",
            "options": [
                "Send",
                "Sends",
                "Sending"
            ],
            "terms": [
                {
                    "term": "Final contract",
                    "definition": "Contrato comercial pronto para assinatura."
                },
                {
                    "term": "Urgent guideline",
                    "definition": "Orientação interna de alta prioridade."
                }
            ],
            "quiz": {
                "question": "Como dar uma instrução negativa de não alterar os preços padrão?",
                "options": [
                    "Not change the standard prices.",
                    "Don't change the standard prices.",
                    "No change standard prices.",
                    "Change not standard prices."
                ],
                "correctIndex": 1,
                "explanation": "A instrução proibitiva padrão de negócios usa 'Don't change'."
            }
        },
        "rawText": " 173 \n \n \n \n \nO Imperativo (Imperative) é usado para dar ordens, instruções \nou fazer pedidos. \nEm inglês, sua forma é bem simples! \n \nA forma afirmativa é feita retirando-se a partícula –to do \nverbo no infinitivo + o complemento da frase. \n \nExemplos:  \nto study = estudar > study for the test (estude para a prova!). \nto work = trabalhar > work fast! (trabalhe rápido!) \n \nA forma negativa é feita acrescentando-se DON’T antes do verbo sem to. \n \nExemplos:  \nDon’t study. (não estude) \nDon’t work. (não trabalhe) \n \n \n \n \n \n \n \n \n \nExemplo:   \nPlease, open the window. / Open the window, please. (Por favor, abra a janela). \n \nO Imperativo também é comumente usa do pelos professores em sala de aula para pedir \naos alunos que façam (ou não) determinadas ações, como abrir ou a porta, não falarem \nmuito alto, etc. Veja algumas: \n \ncréditos: Paint by Number \n2020. \n \nQuando queremos atenuar uma ordem, ou ser  gentil fazendo um pedido, \nacrescentamos “please”, antes ou depois da frase. \n \nLIÇÃO 4: Imperativo  \n \n \n \n \nDICA \n \n 174 \n \nOpen the door. (Abra a porta) \nClose the window. (Feche a janela) \nRead the text. (Leia o texto) \nRepeat it. (Repita) \nOpen your books at page 10. (Abram seus livros na página 10) \nListen to me. (Ouça-me) \nDon’t speak aloud. (Não fale alto) \nDon’t go out now. (Não saia agora) \n \n \n \n \n \n \nSituação: A professora dá instruções aos alunos sobre como realizar as tarefas na aula. \n \nTeacher:  Please, open your books at page 15. We are going to study a new lesson. \nStudent 1:  Teacher, I forgot my book. \nTeacher:  Sit next to a classmate and ask to share his/her book. Read the first article \nand then do the exercises. \nLater… \nStudent 2:  Ms. Santos, I couldn’t understand the exercises. \nTeacher:  Ask a classmate to help you. \n \n[Later…] \n \nTeacher:  Anthony, please, answer exercise 1. \nAnthony:  The answer is in 1958. \nTeacher:  Correct!  \nAnthony:  Ms. Santos, can I write all the answers on the blackboard? \nTeacher:  Yes, please. Write them up on the blackboard. And all of you, don’t speak \nso loudly. \n[…] \n \n \nDIÁLOGO \n \n 175 \n \n \n \n \n144 – Relacione os verbos com as frases para formar sentenças no Imperative. \n \na) Sing (    ) a coke \nb) Speak (    ) fruit \nc) Play (    ) TV \nd) Dance (    ) the violin \ne) Watch (    ) to your friend \nf) Eat (    ) on the street \ng) Walk (    ) a song \nh) Drink (    ) a car \ni)  Drive  (    ) at a nightclub \n \n145 – (Instituto Machado de Assis – adaptada): Observe a gravura e escolha a alternativa \ncorreta quanto ao Imperativo. \n \n146 – (Marinha / Escola Naval – adaptada): Marque a opção que completa corretamente \no parágrafo abaixo: \n \nHow to use the camera at the beach or near water: \n_______ the camera dry naturally in case it gets wet. After that, please______ the door/cover \nto be sure no sand is present. ______ as required. ______ the camera anywhere the \ntemperature may exceed 35°C as this may damage the unit.  \n \na) (   ) Let / to inspect / To clean / Do not leave \nb) (   ) Let / inspect / Clean / Do not leave  \nc) (   ) To let / inspect / Clean / Not leave  \na) (   ) Don´t close your door! \nb) (   ) Go to bed! \nc) (   ) Get up! \nd) (   ) Make your bed. \n \nEXERCÍCIOS \n 176 \nd) (   ) To let / inspect / Clean / Leave not \ne) (   ) To let / to inspect / To clean / Leave not \n \n147 – (Aeronáutica / FAB – adaptada): A frase: “ Don't give up” na forma afirmativa é:   \n \na) (   ) giving up.  \nb) (   ) I give up.  \nc) (   ) I gave up.  \nd) (   ) give up.  \n \n148 – Complete as frases usando os verbos do quadro no Imperativo afirmativo (a, b, c, \nd) e negativo (e, f, g). \n \nto ask – to close – to come – to be – to wait – to help – to give \n \na)  a minute. \nb)  over here, please. \nc)  the door when you go out. \nd)  your teacher. \ne)  me your phone number. \nf)  quiet. \ng)  your sister to cook dinner. \n \n  \n",
        "reconstructed_explanation": "LIÇÃO 4: Imperativo <br> <br> <br> <br> <br>DICA <br>Open the door. (Abra a porta) <br>Close the window. (Feche a janela) <br>Read the text. (Leia o texto) <br>Repeat it. (Repita) <br>Open your books at page 10. (Abram seus livros na página 10) <br>Listen to me. (Ouça-me) <br>Don’t speak aloud. (Não fale alto) <br>Don’t go out now. (Não saia agora)",
        "reconstructed_dialogue": "Situação: A professora dá instruções aos alunos sobre como realizar as tarefas na aula. <br> <br>Teacher: Please, open your books at page 15. We are going to study a new lesson. <br>Student 1: Teacher, I forgot my book. <br>Teacher: Sit next to a classmate and ask to share his/her book. Read the first article <br>and then do the exercises. <br>Later… <br>Student 2: Ms. Santos, I couldn’t understand the exercises. <br>Teacher: Ask a classmate to help you. <br> <br>[Later…] <br> <br>Teacher: Anthony, please, answer exercise 1. <br>Anthony: The answer is in 1958. <br>Teacher: Correct! <br>Anthony: Ms. Santos, can I write all the answers on the blackboard? <br>Teacher: Yes, please. Write them up on the blackboard. And all of you, don’t speak <br>so loudly. <br>[…] <br> <br> <br>DIÁLOGO",
        "reconstructed_exercises": "144 – Relacione os verbos com as frases para formar sentenças no Imperative. <br> <br>a) Sing ( ) a coke <br>b) Speak ( ) fruit <br>c) Play ( ) TV <br>d) Dance ( ) the violin <br>e) Watch ( ) to your friend <br>f) Eat ( ) on the street <br>g) Walk ( ) a song <br>h) Drink ( ) a car <br>i) Drive ( ) at a nightclub <br> <br>145 – (Instituto Machado de Assis – adaptada): Observe a gravura e escolha a alternativa <br>correta quanto ao Imperativo. <br> <br>146 – (Marinha / Escola Naval – adaptada): Marque a opção que completa corretamente <br>o parágrafo abaixo: <br> <br>How to use the camera at the beach or near water: <br>_______ the camera dry naturally in case it gets wet. After that, please______ the door/cover <br>to be sure no sand is present. ______ as required. ______ the camera anywhere the <br>temperature may exceed 35°C as this may damage the unit. <br> <br>a) ( ) Let / to inspect / To clean / Do not leave <br>b) ( ) Let / inspect / Clean / Do not leave <br>c) ( ) To let / inspect / Clean / Not leave <br>a) ( ) Don´t close your door! <br>b) ( ) Go to bed! <br>c) ( ) Get up! <br>d) ( ) Make your bed. <br> <br>EXERCÍCIOS <br>d) ( ) To let / inspect / Clean / Leave not <br>e) ( ) To let / to inspect / To clean / Leave not <br> <br>147 – (Aeronáutica / FAB – adaptada): A frase: “ Don't give up” na forma afirmativa é: <br> <br>a) ( ) giving up. <br>b) ( ) I give up. <br>c) ( ) I gave up. <br>d) ( ) give up. <br> <br>148 – Complete as frases usando os verbos do quadro no Imperativo afirmativo (a, b, c, <br>d) e negativo (e, f, g). <br> <br>to ask – to close – to come – to be – to wait – to help – to give <br> <br>a) a minute. <br>b) over here, please. <br>c) the door when you go out. <br>d) your teacher. <br>e) me your phone number. <br>f) quiet. <br>g) your sister to cook dinner.<br>Muitas vezes, quando não estamos bem de saúde, as pessoas <br>costumam nos aconselhar a ir a um médico, ou simplesmente <br>dizem: “vá ao médico!”. <br> <br>No primeiro caso, usamos a palavras “should” para conselhos: <br>You should see a doctor. <br> <br>No segundo caso, usamos o Imperativo: Go see a doctor. <br> <br>Para ampliar o vocabulário sobre o tema “saúde”, veja abaixo <br>algumas palavras e frases mais usuais: <br> <br> <br> <br> <br> <br>Partes do Corpo (Parts of the Body): <br>Back = costas Neck = pescoço Eye = olho <br>Heart = coração Shoulder = ombro Eyebrow = sobrancelha <br>Lung = pulmão Head = cabeça Ear = orelha <br>Arm = braço Forehead = testa Leg = perna <br>Hands = mãos Face = rosto Knee = joelho <br>Fingers = dedos da mão Nose = nariz Feet = pés <br>Nail = unha Mouth = boca Foot = pé <br>Elbow = cotovelo Teeth = dentes Ankle = tornozelo <br>Belly = barriga Tooth = dente Toes = dedos do pé <br>Brain = cérebro Lip = lábio <br> <br> <br> <br> <br>créditos: Paint by Number <br>2020. <br> <br>VOCABULÁRIO"
    },
    "U8_L5": {
        "title": "Partes do Corpo e Questões de Saúde",
        "unit": "UNIDADE 8 — TEMPOS VERBAIS PROGRESSIVOS. IMPERATIVO",
        "sentences": [
            {
                "en": "He has a backache from office chairs.",
                "pt": "Ele tem dor nas costas devido às cadeiras do escritório.",
                "missing": "backache",
                "options": [
                    "backache",
                    "headache",
                    "toothache"
                ]
            },
            {
                "en": "I need some medicine for my flu.",
                "pt": "Eu preciso de remédio para a minha gripe.",
                "missing": "medicine",
                "options": [
                    "medicine",
                    "food",
                    "water"
                ]
            }
        ],
        "vocab": [
            {
                "term": "Backache",
                "definition": "Dor nas costas (comum em trabalhos de mesa)."
            },
            {
                "term": "Flu",
                "definition": "Gripe ou resfriado comum."
            },
            {
                "term": "Sick leave",
                "definition": "Licença médica de saúde remunerada."
            }
        ],
        "quiz": {
            "question": "Como se diz 'dor de cabeça' em inglês?",
            "options": [
                "flu",
                "backache",
                "heartache",
                "headache"
            ],
            "correctIndex": 3,
            "explanation": "'headache' significa dor de cabeça."
        },
        "businessContext": {
            "scenario": "Notificando ausência por motivos de saúde e solicitando licença médica ao RH.",
            "en": "She requested a sick leave because of a severe headache.",
            "pt": "Ela solicitou uma licença médica por causa de uma forte dor de cabeça.",
            "missing": "leave",
            "options": [
                "leave",
                "holiday",
                "sprint"
            ],
            "terms": [
                {
                    "term": "Sick leave request",
                    "definition": "Aviso formal de ausência por atestado médico."
                },
                {
                    "term": "Health insurance",
                    "definition": "Plano de saúde corporativo fornecido pela empresa."
                }
            ],
            "quiz": {
                "question": "Qual a melhor frase comercial para informar ao cliente que o gestor está de licença médica?",
                "options": [
                    "The manager has body pain.",
                    "The manager is ill now.",
                    "The manager is on sick leave today.",
                    "The manager is not at home."
                ],
                "correctIndex": 2,
                "explanation": "'is on sick leave' é a frase corporativa neutra e respeitosa recomendada."
            }
        },
        "rawText": " 177 \n \n \n \n \nMuitas vezes, quando não  estamos bem de saúde, as pessoas \ncostumam nos aconselhar a ir a um médico, ou simplesmente \ndizem: “vá ao médico!”. \n \nNo primeiro caso, usamos a palavras “should” para conselhos: \nYou should see a doctor. \n \nNo segundo caso, usamos o Imperativo: Go see a doctor. \n \nPara ampliar o vocabulário sobre o tema “saúde”, veja abaixo \nalgumas palavras e frases mais usuais: \n \n \n \n \n \nPartes do Corpo (Parts of the Body):  \nBack = costas Neck = pescoço Eye = olho \nHeart = coração Shoulder = ombro Eyebrow = sobrancelha \nLung = pulmão Head = cabeça Ear = orelha \nArm =  braço Forehead = testa Leg = perna \nHands = mãos Face = rosto Knee = joelho \nFingers = dedos da mão Nose = nariz Feet = pés \nNail = unha Mouth = boca Foot = pé \nElbow = cotovelo Teeth = dentes Ankle = tornozelo \nBelly = barriga Tooth = dente Toes = dedos do pé \nBrain = cérebro Lip = lábio  \n \n \n  \n \ncréditos: Paint by Number \n2020. \n \nVOCABULÁRIO \n \n \nLIÇÃO 5: Partes do Corpo e Questões de Saúde \n \n \n 178 \nFrases Usuais: \n \nWhat's the problem?  (Qual o problema?) \nWhat's wrong? (O que há de errado?) \nWhat are your symptoms? (Quais os sintomas?) \nWhen did the symptoms start? (Quando os sintomas começaram?) \nI have a fever (tenho febre) / a runny nose (tenho coriza). \n \n \nTypes of Illness (Tipos de Doenças/Enfermidades) \n \nDizziness = tontura \nAllergy = alergia \nInsomnia = insônia \nCough = tosse \nSneeze = espirro \nFever / Temperature = febre \nRash = coceira \nThe Flu = gripe \nCold = resfriado \n \n \n \n  \nMuitas dores e enfermidades têm a seguinte composição: a parte do corpo que \ndói + a palavra “ache”, que se refere à dor: \nExemplos: \nToothache = dor de dente \nStomachache = dor de estômago \nBellyache = dor de barriga. \nEtc. \nOBSERVAÇÃO \n \n 179 \n \n \n \nSituação: Lia percebe que um colega não está se sentindo bem e conversa com ele. \n \nLia:   Hi, is anything wrong? \nMike:    I’m not feeling well. \nLia:   What’s matter? \nMike:    I have a stomachache. \nLia:   What did you eat for breakfast? \nMike:   Nothing special, some bread and cheese and a cup of coffee. I had some \n                      yogurt too. \nLia:   Maybe the yogurt didn’t sit right with you. \nMike:   My head aches too. \nLia:   I think you should see a doctor. \nMike:   You’re right. I’ll go to the doctor’s office. \n \n \n \n \n \n \n149 – Para ajudar a relatar ao médico sobre algum problema de saúde  é importante \nconhecer algumas partes do corpo. Abaixo você encontra algumas. Coloque o nome delas, \nem inglês, abaixo de cada figura. \n \na) b) c) d) e) f) g) h) \n        \n \n__________ \n \n__________ \n \n__________ \n \n__________ \n \n__________ \n \n__________ \n \n__________ \n \n__________ \n \n \nDIÁLOGO \n \nEXERCÍCIOS \n 180 \n150 – Escreva, em inglês, ao lado de cada figura, o sintoma relacionado a um problema de \nsaúde.  \n \na) \n \n \nd) \n \nb)  \n \ne) \n \nc) \n \n \nf) \n \n \n \nUm pouco de diversão.... \nPara treinar o vocabulário de partes do corpo, roupas e outras palavras, complete a letra \nda música abaixo com nomes, em inglês, correspondentes às imagens. \n \nMaybe (Brainstorm) \n \nMy  , my   \n \nMy \n , my \n \n \n \nMy guardian \n \n is mine   \n \nAnd you say... \n \nMy dreams, my \n     \n\n 181 \n \nMy sex, my \n \n    \n \nAnd it's my Corona with lime \nAnd then I say .. \nMaybe we could divide it in two \nMaybe my animals live in your zoo \nAnd You say \n \nMy \n , my \n \n \n \nMy kingdom, my      \n \nMy  palace and court is mine \nAnd You say… \n \nMy \n s, my show   \n \nMy years to grow \n \nThe   that I spend is fine  \n \nAnd then I say … \nMaybe we could divide it in two \nMaybe my animals live in Your Zoo \nAnd then I say .. \nMaybe \nMaybe I'm in love with You... \nBut you say... \n \n\n 182 \nMy \n , my \n \n \n \nMy \n   \nmy fat   \n \nMy \n  is shut by me  \n \nAnd You say… \nMy skin, my blood \n \nMy  ,  \n  \n \nMy freedom is what you see \nBut then I say \nMaybe we could divide it in two \nMaybe my animals live in your zoo \nThen I say \nMaybe \nMaybe I'm in love with You.... \n[...] \n \n  \n\n 183 \n \n \n \n \n1: Resposta livre \n2: Sugestão de resposta:  \n- Good morning, teacher! I’m Sarah \n- Good morning! Please, come in and take a seat. \n- Thank you. \n- You’re welcome / OK  \n \n3: a) This is my English book; b) That is my calculator; c) These are Sandra’s keys; d) Those \n    pictures are great! \n4:  a) this; b) that; c) those; d) these. \n5:  \nVocê:   Good morning! Who are you? \nSecretária:  I’m Maria. I’m a secretary here. \nVocê:   I’m a student. My name’s Carlos. \nSecretária:  Hi, Carlos! Nice to meet you. \n \n6: a) She’s fine, thank you; b) She is sixteen; c) I’m from Italy. \n7: a) this; b) nice; c) glad/pleased; d) Where; e) I’m. \n8: a) Today is March 15th 2018; b) My birthday is in November; c) My birthday is on May \n13th. \n9: a) Japanese; b) Spanish; c) Portuguese; d) British. \n10: a) France; b) Portugal; c) England; d) Scotland; e) Japan; f) Italy; g) Ireland. \n11: a) son-in-law; b) engineer; c) sister; d) father / doctor; e) spell / name. \n12: F, C, I, A, H, E, G, D, B. \n13: a) Accountant; b) Secretary; c) President; d) Lawyer. \n \n14: \nKate:  Hi, my name’s Kate. \nIsabel: Hi, Kate, I’m Isabel. I’m a secretary. What about you, what do you do? \nKate: I’m a journalist. \nIsabel: I’m French. Are you German? \nKate: No, I’m Spanish. Rodolfo, what do you do? \nGABARITO DOS EXERCÍCIOS  \n \n\n 184 \nRod: I’m an economist. Manuel, are you an engineer? \nManuel: No, I’m a lawyer. \nKate: Well, I have to go now. \nTodos: See you. \n \n15: A \n16: 1 B; 2 B; 3 B; 4 A. \n17: a) he; b) it; c) they; d) she. \n18: a) she; b) they; c) they; d) we; e) it; f) you. \n19: a) are; b) is; c) are; d) am. \n20: respostas pessoais. \n \n21: \nMichael:  Is he young? \nPaul:  Yes, he is. \nMichael:  Is he famous? \nPaul:  Yes, he’s very famous. \nMichael:  Is he a good actor? \nPaul:  Yes, he is. \nMichael:  Is he married? \nPaul:  No, he isn’t. \nMichael:  Is he tall or short? \nPaul:  Tall. \nMichael:  Is he American? \nPaul:  No, he’s Mexican. \n \n22: purple; blue; green; yellow; orange; red; pink; gray; brown. \n23: a) No, it isn’t; b) Yes, they are; c) No, he isn’t; d) Yes, she is; e) Yes, I am. \n24: a) Yes, I am / No, I’m not; b) Yes, they are / No, they aren’t; c) Yes, she is / No, she \n      isn’t; d) Yes, you are / No you aren’t; e) Yes, it is / No, it isn’t. \n25: \nEntrevistador: Good morning. Can I talk to you? \nVocê:     Yes. \nEntrevistador: Thank you. What’s your name? \nVocê:               My name’s _____.  \nEntrevistador: Are you Argentinian? \n 185 \nVocê:              No, I’m Venezuelan. \nEntrevistador: Are you 18 years old? \nVocê:              Yes, I am. \nEntrevistador: Are you a student? \nVocê:              Yes, I am. \nEntrevistador: When is your birthday? \nVocê:               It’s in July. \nEntrevistador: Are you single? \nVocê:              Yes, I am. \nEntrevistador: Thank you. \nVocê:              You’re welcome. \n \n26: a) What do you do? / What’s your profession?; b) Who are you? / What’s your name?; \nc) Where are you from?; d) How are you?; e) Who’s he? \n27: a) What do you do in your free time? / What’s your hobby?; b) What’s Julia’s profession? \n      / What does Julia do?; c) What do Steven and Gary do?; d) Where is the church? \n28: respostas pessoais. \n29: C, B, D, A, F, E. \n30: a) How are you?; b) What’s your (full) name?; c) How do you spell your first name?;  \n      d) What’s your nationality?; e) What’s your occupation/profession? \n31: a) No, he isn’t; b) Yes, he is. \n32: a) ’s; b) ’; c) ’s; d) ’s; e) ’ \n33: a) Este é o carro de Frank; b) O quarto das crianças ficam lá em cima; c) Esta é a mãe \n      das meninas; d) A bolsa de Mary é nova. \n34: a) My sister’s dress; b) My brother’s shirt; c) My father’s cap; d) My brothers’ pants; e) \n      My mother’s skirts. \n35: name; spell; what’s; your; where; who. \n36: a) When; b) Where; c) Who; d) How often; e) Why; f) What; g) How. \n37: a) What; b) Who; c) Where; d) How; e) When; f) How often; g) Which; h) How many;  \n      i) How much; j) How old; k) Why; l) How big (I, C, A, E, D, H, J, F, K, G, B, L). \n38: Blouse; Skirt; Boots; Coat; Dress; Jeans; Overcoat; Pants; Suit; Sweater; Purse; Trousers; \n      Scarf. \n39: a) Sunday; b) Saturday; c) Wednesday; d) Wednesday; e) Monday. \n40: a) October; b) December;  c) October: d) March; e) May.  \n41: a) One hundred, eighty-eight; b) Sixty-two; c) Four hundred, sixty-seven;  \nd) One/a hundred; e) One thousand, four hundred, thirteen; f) One thousand, two hundred \n 186 \n      oh five. \n42:  D (o certo é three) \n43:    \na) How much is this belt? – It’s thirty-five dollars and twenty-nine cents. \nb) How much is this umbrella? It’s twenty-nine dollars and fifteen cents. \nc) How much is this ring? It’s two hundred ten dollars and fifty-eight cents. \nd) How much is this cap? It’s twenty-one dollars and eighty-seven cents. \n44: a) Forty-six dollars and twenty-five cents; b) Fifty-two dollars and eleven cents;  \n      c) Seventy-five dollars and thirty-three cents; d) Fifteen dollars and forty-seven cents; \n      e) Ninety cents. \n45:  \nCardinal: eight; two; thirty; fifteen  \nOrdinal: seventeenth; twenty-first; sixth; twenty-eighth; ninth; second; twentieth-third.  \n46: a) First; b) eleventh; fifteenth; third. \n47: a) It’s half past ten; b) It’s twenty-five after/past four; c) It’s six ten; d) It’s a quarter to \n      ten. \n48: a) 3:45; b) 2:50; c) 1:30; d) 9:10; e) 12:15; f) 8:25 \n49: D \n50: E \n51: resposta pessoal \n52: E \n53: C \n54: E \n55: A \n56: a) itself; b) myself; c) himself; d) ourselves; e) herself; f) themselves \n57: B \n58: a) an; b) a; c) a; d) an; e) a. \n59: D \n60: D \n61: a) them; b) us; c) him; d) her \n62: B \n63: A \n64: C \n65: a) me; b) She; c) me; d) We; e) us \n66: C \n67: D \n 187 \n68: a) There is. Next to the drugstore / You’re welcome; b) There aren’t. / there is. \n69: a) there is; b) there isn’t; c) there aren’t; d) there are. \n70: a) It’s between the bank and the store; b) It’s in front of the restaurant; c) It’s next to \n      the police station; d) It’s near the church; e) It’s in front of the church. \n \n71: \nV – Is your city big? \nC – No, it isn’t. It’s small. \nV – Are there good restaurants there? \nC – Yes, there are, and there are good hotels too. \nV –  In my city there are good theaters and there is a big shopping center. \nC – Are there good bookstores, too? \nV – Yes, there are, and there is a big park near my house. \nC – Really? Your city is very cool. \n \n72: \nV – Excuse me. \nP – Yes. \nV – Is there a supermarket around here? \nP – Yes, there is one in front of the post office. \nV – Is it in front of Brazil bank? \nP – Yes, it is, and it’s next to the church. \n \n73: Respostas pessoais. \n74: a) frequentemente; b) às vezes; c) geralmente; d) sempre; e) todos os dias; \nf) nunca. \n75: a) at; b) in; c) by; d) of; e) to; f) from. \n76: a) The window is above the sofa; b) The clock is above the shelf; c) The lamp is beside \n      the books; d) The bottle is on the top of the shelf; e) The gifts are in the shelf. \n77: B \n78: A \n79: a) like; b) speaks; c) play; d) plays; e) make; f) visits; g) drink; h) eats. \n80: a) listen; b) collects; c) wash; d) makes; e) meets. \n81: a) Do you/I play tennis?; b) Does the train leave at 8 a.m.?; c) Does he always forget \n      his wallet?; d) Is Carolina in America? \n82: a) doesn’t collect; b) don’t sing; c) doesn’t work; d) don’t clean; e) don’t open  \n 188 \nf) doesn’t speak French; g) doesn’t like. \n83: a) Do / we do; b) Do / I don’t; c) Does / He does; d) Does / she doesn’t. \n84: resposta no próprio site utilizado. \n \n85: \na) desks: /s/  f) buses: /iz/ \nb) bikes: /s/  g) fishes: /iz/ \nc) watches: /iz/  h) pianos: /z/ \nd) cats: /s/  i) products: /s/ \ne) games: /z/  k) houses: /z/ \n \n86:  \na) Beverages: tea, soda, sparkling water, beer.  \nb) Breakfast: cake, milk, butter, cereal, coffee \nc) Snacks: hamburger, salad, sandwich, pizza.  \nd) Fruit: pear, peach, grapes, lemon, orange.  \ne) Tableware: knife, fork, glass, cup, spoon, plate. \n \n87: C \n \n88: \nPaul:  Would you like to have dinner with me, Mary? \nMary:  Yes, I’d like to. When? \nPaul:  Saturday night. \nMary:  At what time? \nPaul:  At 8. Is that ok? \nMary:  Yes, it is. \nPaul:  Would you like to go to French restaurant? \nMary:  Yes, I do. I like French food. \n \n89: D \n \n90: \nPaty: Can I ask you some questions, Victoria? \nVick: Yes, go on \nPaty: Where do you live? \n 189 \nVick: I live in Sergipe, Brazil \nPaty: How old are you? \nVick: I’m 18 years old. \nPaty: Are you a student? \nVick: Yes, I am. \nPaty: Do you like watching to movies? \nVick: Yes, I really like watching to movies. \nPaty: What kind of movies do you like? \nVick: I like drama and comedies. \nPaty: And what do you do in your free time? \nVick: I read, go for a walk, take some rest… \nPaty: Great! Now I have to go. \nVick: Ok. Bye! \n \n91: 6; 2; 5; 3; 4; 7; 8; 1. \n92: a) David is as clever as his brother; b) A cell phone is as useful as a computer; \n      c) Miss Lopez is as competent as Miss Taylor. \n93: a) Búzios is less polluted than Petrópolis; b) Boxing is less dangerous than car racing; \n      c) Fiat is less comfortable than Corolla. \n94: a) Linhares is bigger than Rio Bananal; b) Lagoa Juparanã is larger than Lagoa Nova; \n      c) This tree is taller than that one; d) This camera is more efficient than mine; e) Rio \n      Tietê is more polluted than Rio Doce; f) Rolex is more expensive than Gucci. \n95: D \n96: B \n97: a) The biggest; b) The longest; c) The shortest; d) The fastest; e) The tallest \n98: a) Louis Vuitton is the most expensive brand; b) Antarctica is one of the most isolated \n      region in the world; c) Chess is the most complicated board game; d) Korean is the \n      most difficult language. \n99: a) Where were they last week?; b) Where was Jack yesterday?; c) I was at home two \n      hours ago; d) We weren’t in school yesterday; e) He wasn’t a teacher. \n100: was; was; was; was; were were. \n101: a) watched; b) carried; c) helped; d) talked; e) danced; f) tried; g) planned; h) washed; \n        i) stopped. \n102: a) Did Anna open the window? Yes, she did; b) Did Mary and you walk home? No, \n        we didn’t; c) Did they visit the castle? No, they didn’t. \n103: D \n 190 \n104: resposta no site indicado. \n105: I went to the shopping mall; I bought a cool T-Shirt; I went to the movies/cinema; I \nhad dinner with a friend; we talked about work, study and entertainment. As the weather \nwas good, it didn’t rain, so we walked on the beach; after, we took a taxi and went home. \n \n106: a) What did you do on Saturday night?; b) What did you buy for Cristina’s birthday?; \n        c) What did you eat at the Italian restaurant?; d) What did you study for the exam?; \n        e) What did you find on the street?; f) What did you cook for dinner? \n \n107: woke up; ate; read; wrote; went; met; had. \n108: a) Did, go; b) sent; c) wasn’t; d) came, gave, left. \n109: heard; sang; heard; had; came; was; felt; felt; read; prayed; kept. \n110: C \n111: A \n112: B \n113: D \n114: a) have read; b) has worn; c) have visited; d) have eaten; e) has finished; f) have  broken;  \n        g) have paid; h) have met; i) have seen; j) have bought. \n115: has been; have known; have moved; have played; has had; has found; has seen; has \n       decided.  \n116: B \n117: A \n118: C \n119: E \n120: a) will rain; b) will be; c) will get; d) will have; e) will take part.  \n121: a) I will answer the question; b) She will read the book; c) They will drink beer; d) We \n        will send the postcard; e) Vanessa will catch the ball. \n122: I’ll be; I’ll try.  \n123: We’ll be; We’ll share.  \n124: C \n125: a) Am I going to visit the dentist afternoon?; b) They aren’t going to swim tomorrow; \n        c) She isn’t going to paint her room; d) Peter is going to wash his car. e) She is going \n       to write a letter. \n126: C \n127: C \n128: a) sunny; b) cloudy; c) rainy; d) snowy \n 191 \n129: C, B, A, F, D, E \n130: Will there be many people there?; Will there be food and drinks?; Will there be pop \n        music?; Will there be sweets and desserts? \n \nYes, there will be many people; There will be lots of delicious food and non-alcoholic \ndrinks; Yes, there will be pop, rock, country, etc.; There will be pudding and chocolate pie. \n \n131:  \na) I = Will she be here next month?  \n    N = She will not (won’t) be here next month. \n \nb) I = Will they be happy in their new house? \n    N = They will not (won’t) be happy in their new house. \n \n132: reservation; breakfast; restaurant; floor; room; password.  \n133: a) I would (I’d) like to make a reservation; b) How much is it? / What’s the fare?; c) Do \n        you accept / take debit/ credit cards?; d) Could I get a receipt, please?; e) Where can \n        I take a taxi?  \n \n134: a) Mary is writing a letter; b) Frank is talking on the phone; c) Joan is finishing a  report; \n       d) Rick is drinking coffee; e) Janet is reading the newspaper; f) Ryan is talking to a \n       customer. \n \n135: \nMãe:   Is the baby sleeping? \nVocê:   No, he’s playing. \nMãe:   Is Doris cleaning the house? \nVocê:   Yes, she is.  \nMãe:   Is George watering the plants? \nVocê:   No, he isn’t. \nMãe:   Is Alan studying for the History exam? \nVocê:   Yes, he is.  \nMãe:   Is grandpa watching TV? \nVocê:   No, he’s having lunch. \n \n \n",
        "reconstructed_explanation": "LIÇÃO 5: Partes do Corpo e Questões de Saúde <br>Frases Usuais: <br> <br>What's the problem? (Qual o problema?) <br>What's wrong? (O que há de errado?) <br>What are your symptoms? (Quais os sintomas?) <br>When did the symptoms start? (Quando os sintomas começaram?) <br>I have a fever (tenho febre) / a runny nose (tenho coriza). <br> <br> <br>Types of Illness (Tipos de Doenças/Enfermidades) <br> <br>Dizziness = tontura <br>Allergy = alergia <br>Insomnia = insônia <br>Cough = tosse <br>Sneeze = espirro <br>Fever / Temperature = febre <br>Rash = coceira <br>The Flu = gripe <br>Cold = resfriado <br> <br> <br> <br> <br>Muitas dores e enfermidades têm a seguinte composição: a parte do corpo que <br>dói + a palavra “ache”, que se refere à dor: <br>Exemplos: <br>Toothache = dor de dente <br>Stomachache = dor de estômago <br>Bellyache = dor de barriga. <br>Etc. <br>OBSERVAÇÃO",
        "reconstructed_dialogue": "Situação: Lia percebe que um colega não está se sentindo bem e conversa com ele. <br> <br>Lia: Hi, is anything wrong? <br>Mike: I’m not feeling well. <br>Lia: What’s matter? <br>Mike: I have a stomachache. <br>Lia: What did you eat for breakfast? <br>Mike: Nothing special, some bread and cheese and a cup of coffee. I had some <br> yogurt too. <br>Lia: Maybe the yogurt didn’t sit right with you. <br>Mike: My head aches too. <br>Lia: I think you should see a doctor. <br>Mike: You’re right. I’ll go to the doctor’s office.",
        "reconstructed_exercises": "149 – Para ajudar a relatar ao médico sobre algum problema de saúde é importante <br>conhecer algumas partes do corpo. Abaixo você encontra algumas. Coloque o nome delas, <br>em inglês, abaixo de cada figura. <br> <br>a) b) c) d) e) f) g) h) <br> <br> <br>__________ <br> <br>__________ <br> <br>__________ <br> <br>__________ <br> <br>__________ <br> <br>__________ <br> <br>__________ <br> <br>__________ <br> <br> <br>DIÁLOGO <br> <br>EXERCÍCIOS <br>150 – Escreva, em inglês, ao lado de cada figura, o sintoma relacionado a um problema de <br>saúde. <br> <br>a) <br> <br> <br>d) <br> <br>b) <br> <br>e) <br> <br>c) <br> <br> <br>f) <br> <br> <br> <br>Um pouco de diversão.... <br>Para treinar o vocabulário de partes do corpo, roupas e outras palavras, complete a letra <br>da música abaixo com nomes, em inglês, correspondentes às imagens. <br> <br>Maybe (Brainstorm) <br> <br>My , my <br> <br>My <br> , my <br> <br> <br> <br>My guardian <br> <br> is mine <br> <br>And you say... <br> <br>My dreams, my <br>My sex, my <br> <br> <br> <br>And it's my Corona with lime <br>And then I say .. <br>Maybe we could divide it in two <br>Maybe my animals live in your zoo <br>And You say <br> <br>My <br> , my <br> <br> <br> <br>My kingdom, my <br> <br>My palace and court is mine <br>And You say… <br> <br>My <br> s, my show <br> <br>My years to grow <br> <br>The that I spend is fine <br> <br>And then I say … <br>Maybe we could divide it in two <br>Maybe my animals live in Your Zoo <br>And then I say .. <br>Maybe <br>Maybe I'm in love with You... <br>But you say... <br>My <br> , my <br> <br> <br> <br>My <br> <br>my fat <br> <br>My <br> is shut by me <br> <br>And You say… <br>My skin, my blood <br> <br>My , <br> <br> <br>My freedom is what you see <br>But then I say <br>Maybe we could divide it in two <br>Maybe my animals live in your zoo <br>Then I say <br>Maybe <br>Maybe I'm in love with You.... <br>[...] <br>1: Resposta livre <br>2: Sugestão de resposta: <br>- Good morning, teacher! I’m Sarah <br>- Good morning! Please, come in and take a seat. <br>- Thank you. <br>- You’re welcome / OK <br> <br>3: a) This is my English book; b) That is my calculator; c) These are Sandra’s keys; d) Those <br> pictures are great! <br>4: a) this; b) that; c) those; d) these. <br>5: <br>Você: Good morning! Who are you? <br>Secretária: I’m Maria. I’m a secretary here. <br>Você: I’m a student. My name’s Carlos. <br>Secretária: Hi, Carlos! Nice to meet you. <br> <br>6: a) She’s fine, thank you; b) She is sixteen; c) I’m from Italy. <br>7: a) this; b) nice; c) glad/pleased; d) Where; e) I’m. <br>8: a) Today is March 15th 2018; b) My birthday is in November; c) My birthday is on May <br>13th. <br>9: a) Japanese; b) Spanish; c) Portuguese; d) British. <br>10: a) France; b) Portugal; c) England; d) Scotland; e) Japan; f) Italy; g) Ireland. <br>11: a) son-in-law; b) engineer; c) sister; d) father / doctor; e) spell / name. <br>12: F, C, I, A, H, E, G, D, B. <br>13: a) Accountant; b) Secretary; c) President; d) Lawyer. <br> <br>14: <br>Kate: Hi, my name’s Kate. <br>Isabel: Hi, Kate, I’m Isabel. I’m a secretary. What about you, what do you do? <br>Kate: I’m a journalist. <br>Isabel: I’m French. Are you German? <br>Kate: No, I’m Spanish. Rodolfo, what do you do? <br>GABARITO DOS EXERCÍCIOS <br>Rod: I’m an economist. Manuel, are you an engineer? <br>Manuel: No, I’m a lawyer. <br>Kate: Well, I have to go now. <br>Todos: See you. <br> <br>15: A <br>16: 1 B; 2 B; 3 B; 4 A. <br>17: a) he; b) it; c) they; d) she. <br>18: a) she; b) they; c) they; d) we; e) it; f) you. <br>19: a) are; b) is; c) are; d) am. <br>20: respostas pessoais. <br> <br>21: <br>Michael: Is he young? <br>Paul: Yes, he is. <br>Michael: Is he famous? <br>Paul: Yes, he’s very famous. <br>Michael: Is he a good actor? <br>Paul: Yes, he is. <br>Michael: Is he married? <br>Paul: No, he isn’t. <br>Michael: Is he tall or short? <br>Paul: Tall. <br>Michael: Is he American? <br>Paul: No, he’s Mexican. <br> <br>22: purple; blue; green; yellow; orange; red; pink; gray; brown. <br>23: a) No, it isn’t; b) Yes, they are; c) No, he isn’t; d) Yes, she is; e) Yes, I am. <br>24: a) Yes, I am / No, I’m not; b) Yes, they are / No, they aren’t; c) Yes, she is / No, she <br> isn’t; d) Yes, you are / No you aren’t; e) Yes, it is / No, it isn’t. <br>25: <br>Entrevistador: Good morning. Can I talk to you? <br>Você: Yes. <br>Entrevistador: Thank you. What’s your name? <br>Você: My name’s _____. <br>Entrevistador: Are you Argentinian? <br>Você: No, I’m Venezuelan. <br>Entrevistador: Are you 18 years old? <br>Você: Yes, I am. <br>Entrevistador: Are you a student? <br>Você: Yes, I am. <br>Entrevistador: When is your birthday? <br>Você: It’s in July. <br>Entrevistador: Are you single? <br>Você: Yes, I am. <br>Entrevistador: Thank you. <br>Você: You’re welcome. <br> <br>26: a) What do you do? / What’s your profession?; b) Who are you? / What’s your name?; <br>c) Where are you from?; d) How are you?; e) Who’s he? <br>27: a) What do you do in your free time? / What’s your hobby?; b) What’s Julia’s profession? <br> / What does Julia do?; c) What do Steven and Gary do?; d) Where is the church? <br>28: respostas pessoais. <br>29: C, B, D, A, F, E. <br>30: a) How are you?; b) What’s your (full) name?; c) How do you spell your first name?; <br> d) What’s your nationality?; e) What’s your occupation/profession? <br>31: a) No, he isn’t; b) Yes, he is. <br>32: a) ’s; b) ’; c) ’s; d) ’s; e) ’ <br>33: a) Este é o carro de Frank; b) O quarto das crianças ficam lá em cima; c) Esta é a mãe <br> das meninas; d) A bolsa de Mary é nova. <br>34: a) My sister’s dress; b) My brother’s shirt; c) My father’s cap; d) My brothers’ pants; e) <br> My mother’s skirts. <br>35: name; spell; what’s; your; where; who. <br>36: a) When; b) Where; c) Who; d) How often; e) Why; f) What; g) How. <br>37: a) What; b) Who; c) Where; d) How; e) When; f) How often; g) Which; h) How many; <br> i) How much; j) How old; k) Why; l) How big (I, C, A, E, D, H, J, F, K, G, B, L). <br>38: Blouse; Skirt; Boots; Coat; Dress; Jeans; Overcoat; Pants; Suit; Sweater; Purse; Trousers; <br> Scarf. <br>39: a) Sunday; b) Saturday; c) Wednesday; d) Wednesday; e) Monday. <br>40: a) October; b) December; c) October: d) March; e) May. <br>41: a) One hundred, eighty-eight; b) Sixty-two; c) Four hundred, sixty-seven; <br>d) One/a hundred; e) One thousand, four hundred, thirteen; f) One thousand, two hundred <br> oh five. <br>42: D (o certo é three) <br>43: <br>a) How much is this belt? – It’s thirty-five dollars and twenty-nine cents. <br>b) How much is this umbrella? It’s twenty-nine dollars and fifteen cents. <br>c) How much is this ring? It’s two hundred ten dollars and fifty-eight cents. <br>d) How much is this cap? It’s twenty-one dollars and eighty-seven cents. <br>44: a) Forty-six dollars and twenty-five cents; b) Fifty-two dollars and eleven cents; <br> c) Seventy-five dollars and thirty-three cents; d) Fifteen dollars and forty-seven cents; <br> e) Ninety cents. <br>45: <br>Cardinal: eight; two; thirty; fifteen <br>Ordinal: seventeenth; twenty-first; sixth; twenty-eighth; ninth; second; twentieth-third. <br>46: a) First; b) eleventh; fifteenth; third. <br>47: a) It’s half past ten; b) It’s twenty-five after/past four; c) It’s six ten; d) It’s a quarter to <br> ten. <br>48: a) 3:45; b) 2:50; c) 1:30; d) 9:10; e) 12:15; f) 8:25 <br>49: D <br>50: E <br>51: resposta pessoal <br>52: E <br>53: C <br>54: E <br>55: A <br>56: a) itself; b) myself; c) himself; d) ourselves; e) herself; f) themselves <br>57: B <br>58: a) an; b) a; c) a; d) an; e) a. <br>59: D <br>60: D <br>61: a) them; b) us; c) him; d) her <br>62: B <br>63: A <br>64: C <br>65: a) me; b) She; c) me; d) We; e) us <br>66: C <br>67: D <br>68: a) There is. Next to the drugstore / You’re welcome; b) There aren’t. / there is. <br>69: a) there is; b) there isn’t; c) there aren’t; d) there are. <br>70: a) It’s between the bank and the store; b) It’s in front of the restaurant; c) It’s next to <br> the police station; d) It’s near the church; e) It’s in front of the church. <br> <br>71: <br>V – Is your city big? <br>C – No, it isn’t. It’s small. <br>V – Are there good restaurants there? <br>C – Yes, there are, and there are good hotels too. <br>V – In my city there are good theaters and there is a big shopping center. <br>C – Are there good bookstores, too? <br>V – Yes, there are, and there is a big park near my house. <br>C – Really? Your city is very cool. <br> <br>72: <br>V – Excuse me. <br>P – Yes. <br>V – Is there a supermarket around here? <br>P – Yes, there is one in front of the post office. <br>V – Is it in front of Brazil bank? <br>P – Yes, it is, and it’s next to the church. <br> <br>73: Respostas pessoais. <br>74: a) frequentemente; b) às vezes; c) geralmente; d) sempre; e) todos os dias; <br>f) nunca. <br>75: a) at; b) in; c) by; d) of; e) to; f) from. <br>76: a) The window is above the sofa; b) The clock is above the shelf; c) The lamp is beside <br> the books; d) The bottle is on the top of the shelf; e) The gifts are in the shelf. <br>77: B <br>78: A <br>79: a) like; b) speaks; c) play; d) plays; e) make; f) visits; g) drink; h) eats. <br>80: a) listen; b) collects; c) wash; d) makes; e) meets. <br>81: a) Do you/I play tennis?; b) Does the train leave at 8 a.m.?; c) Does he always forget <br> his wallet?; d) Is Carolina in America? <br>82: a) doesn’t collect; b) don’t sing; c) doesn’t work; d) don’t clean; e) don’t open <br>f) doesn’t speak French; g) doesn’t like. <br>83: a) Do / we do; b) Do / I don’t; c) Does / He does; d) Does / she doesn’t. <br>84: resposta no próprio site utilizado. <br> <br>85: <br>a) desks: /s/ f) buses: /iz/ <br>b) bikes: /s/ g) fishes: /iz/ <br>c) watches: /iz/ h) pianos: /z/ <br>d) cats: /s/ i) products: /s/ <br>e) games: /z/ k) houses: /z/ <br> <br>86: <br>a) Beverages: tea, soda, sparkling water, beer. <br>b) Breakfast: cake, milk, butter, cereal, coffee <br>c) Snacks: hamburger, salad, sandwich, pizza. <br>d) Fruit: pear, peach, grapes, lemon, orange. <br>e) Tableware: knife, fork, glass, cup, spoon, plate. <br> <br>87: C <br> <br>88: <br>Paul: Would you like to have dinner with me, Mary? <br>Mary: Yes, I’d like to. When? <br>Paul: Saturday night. <br>Mary: At what time? <br>Paul: At 8. Is that ok? <br>Mary: Yes, it is. <br>Paul: Would you like to go to French restaurant? <br>Mary: Yes, I do. I like French food. <br> <br>89: D <br> <br>90: <br>Paty: Can I ask you some questions, Victoria? <br>Vick: Yes, go on <br>Paty: Where do you live? <br>Vick: I live in Sergipe, Brazil <br>Paty: How old are you? <br>Vick: I’m 18 years old. <br>Paty: Are you a student? <br>Vick: Yes, I am. <br>Paty: Do you like watching to movies? <br>Vick: Yes, I really like watching to movies. <br>Paty: What kind of movies do you like? <br>Vick: I like drama and comedies. <br>Paty: And what do you do in your free time? <br>Vick: I read, go for a walk, take some rest… <br>Paty: Great! Now I have to go. <br>Vick: Ok. Bye! <br> <br>91: 6; 2; 5; 3; 4; 7; 8; 1. <br>92: a) David is as clever as his brother; b) A cell phone is as useful as a computer; <br> c) Miss Lopez is as competent as Miss Taylor. <br>93: a) Búzios is less polluted than Petrópolis; b) Boxing is less dangerous than car racing; <br> c) Fiat is less comfortable than Corolla. <br>94: a) Linhares is bigger than Rio Bananal; b) Lagoa Juparanã is larger than Lagoa Nova; <br> c) This tree is taller than that one; d) This camera is more efficient than mine; e) Rio <br> Tietê is more polluted than Rio Doce; f) Rolex is more expensive than Gucci. <br>95: D <br>96: B <br>97: a) The biggest; b) The longest; c) The shortest; d) The fastest; e) The tallest <br>98: a) Louis Vuitton is the most expensive brand; b) Antarctica is one of the most isolated <br> region in the world; c) Chess is the most complicated board game; d) Korean is the <br> most difficult language. <br>99: a) Where were they last week?; b) Where was Jack yesterday?; c) I was at home two <br> hours ago; d) We weren’t in school yesterday; e) He wasn’t a teacher. <br>100: was; was; was; was; were were. <br>101: a) watched; b) carried; c) helped; d) talked; e) danced; f) tried; g) planned; h) washed; <br> i) stopped. <br>102: a) Did Anna open the window? Yes, she did; b) Did Mary and you walk home? No, <br> we didn’t; c) Did they visit the castle? No, they didn’t. <br>103: D <br>104: resposta no site indicado. <br>105: I went to the shopping mall; I bought a cool T-Shirt; I went to the movies/cinema; I <br>had dinner with a friend; we talked about work, study and entertainment. As the weather <br>was good, it didn’t rain, so we walked on the beach; after, we took a taxi and went home. <br> <br>106: a) What did you do on Saturday night?; b) What did you buy for Cristina’s birthday?; <br> c) What did you eat at the Italian restaurant?; d) What did you study for the exam?; <br> e) What did you find on the street?; f) What did you cook for dinner? <br> <br>107: woke up; ate; read; wrote; went; met; had. <br>108: a) Did, go; b) sent; c) wasn’t; d) came, gave, left. <br>109: heard; sang; heard; had; came; was; felt; felt; read; prayed; kept. <br>110: C <br>111: A <br>112: B <br>113: D <br>114: a) have read; b) has worn; c) have visited; d) have eaten; e) has finished; f) have broken; <br> g) have paid; h) have met; i) have seen; j) have bought. <br>115: has been; have known; have moved; have played; has had; has found; has seen; has <br> decided. <br>116: B <br>117: A <br>118: C <br>119: E <br>120: a) will rain; b) will be; c) will get; d) will have; e) will take part. <br>121: a) I will answer the question; b) She will read the book; c) They will drink beer; d) We <br> will send the postcard; e) Vanessa will catch the ball. <br>122: I’ll be; I’ll try. <br>123: We’ll be; We’ll share. <br>124: C <br>125: a) Am I going to visit the dentist afternoon?; b) They aren’t going to swim tomorrow; <br> c) She isn’t going to paint her room; d) Peter is going to wash his car. e) She is going <br> to write a letter. <br>126: C <br>127: C <br>128: a) sunny; b) cloudy; c) rainy; d) snowy <br>129: C, B, A, F, D, E <br>130: Will there be many people there?; Will there be food and drinks?; Will there be pop <br> music?; Will there be sweets and desserts? <br> <br>Yes, there will be many people; There will be lots of delicious food and non-alcoholic <br>drinks; Yes, there will be pop, rock, country, etc.; There will be pudding and chocolate pie. <br> <br>131: <br>a) I = Will she be here next month? <br> N = She will not (won’t) be here next month. <br> <br>b) I = Will they be happy in their new house? <br> N = They will not (won’t) be happy in their new house. <br> <br>132: reservation; breakfast; restaurant; floor; room; password. <br>133: a) I would (I’d) like to make a reservation; b) How much is it? / What’s the fare?; c) Do <br> you accept / take debit/ credit cards?; d) Could I get a receipt, please?; e) Where can <br> I take a taxi? <br> <br>134: a) Mary is writing a letter; b) Frank is talking on the phone; c) Joan is finishing a report; <br> d) Rick is drinking coffee; e) Janet is reading the newspaper; f) Ryan is talking to a <br> customer. <br> <br>135: <br>Mãe: Is the baby sleeping? <br>Você: No, he’s playing. <br>Mãe: Is Doris cleaning the house? <br>Você: Yes, she is. <br>Mãe: Is George watering the plants? <br>Você: No, he isn’t. <br>Mãe: Is Alan studying for the History exam? <br>Você: Yes, he is. <br>Mãe: Is grandpa watching TV? <br>Você: No, he’s having lunch."
    }
};

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


const CEFR_LEVELS_MAPPING = {
    "INTRO": [
        "INTRO"
    ],
    "U1": [
        "U1_L1",
        "U1_L2",
        "U1_L3",
        "U1_L4",
        "U1_L5"
    ],
    "U2": [
        "U2_L1",
        "U2_L2",
        "U2_L3",
        "U2_L4",
        "U2_L5"
    ],
    "U3": [
        "U3_L1",
        "U3_L2",
        "U3_L3",
        "U3_L4",
        "U3_L5"
    ],
    "U4": [
        "U4_L1",
        "U4_L2",
        "U4_L3",
        "U4_L4",
        "U4_L5"
    ],
    "U5": [
        "U5_L1",
        "U5_L2",
        "U5_L3",
        "U5_L4",
        "U5_L5"
    ],
    "U6": [
        "U6_L1",
        "U6_L2",
        "U6_L3",
        "U6_L4",
        "U6_L5"
    ],
    "U7": [
        "U7_L1",
        "U7_L2",
        "U7_L3",
        "U7_L4",
        "U7_L5"
    ],
    "U8": [
        "U8_L1",
        "U8_L2",
        "U8_L3",
        "U8_L4",
        "U8_L5"
    ]
};

function buildSyllabus() {
    const finalData = {};
    const levels = ["INTRO", "U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8"];
    const levelTitles = {
        "INTRO": "Introdução — O Alfabeto",
        "U1": "Unidade 1 — Os Primeiros Passos",
        "U2": "Unidade 2 — Fazendo Perguntas Pessoais",
        "U3": "Unidade 3 — Perguntas Pessoais Sobre Terceiros",
        "U4": "Unidade 4 — Rotina e Ações Habituais (Simple Present)",
        "U5": "Unidade 5 — Falando de Gostos e Preferências",
        "U6": "Unidade 6 — Falando de Ações Passadas",
        "U7": "Unidade 7 — Falando de Ações Futuras",
        "U8": "Unidade 8 — Tempos Progressivos e Imperativo"
    };
    
    levels.forEach(lvl => {
        finalData[lvl] = [];
        const lids = CEFR_LEVELS_MAPPING[lvl];
        const moduleLessons = [];
        
        lids.forEach((activeTopicId, lesIdx) => {
            const lessonId = `${lvl.toLowerCase()}_l${lesIdx + 1}`;
            const topic = BASSANI_TOPICS[activeTopicId];
            let slides = [];
            
            // Slide 1: Leitura & Estudo (Clean content)
            slides.push({
                type: "intro",
                title: `Leitura & Estudo 📖 (Pg. ${topic.start_page})`,
                content: `<strong>${topic.title}</strong><br><br>${topic.reconstructed_explanation}`
            });
            
            // Slide 2: Diálogos & Vocabulário (Clean content)
            slides.push({
                type: "dialogue_vocab",
                title: "Diálogos & Vocabulário 📚",
                dialogue: topic.reconstructed_dialogue,
                vocab: topic.vocab || []
            });
            
            // Slide 3: Exercícios do Livro (Clean content, only if present)
            if (topic.reconstructed_exercises && topic.reconstructed_exercises.trim() !== "") {
                slides.push({
                    type: "book_exercises",
                    title: "Exercícios do Livro ✍️",
                    exercises: topic.reconstructed_exercises,
                    explanation: (topic.quiz && topic.quiz.explanation) ? topic.quiz.explanation : "Pratique completando e traduzindo os exercícios no seu caderno."
                });
            }
            
            moduleLessons.push({
                id: lessonId,
                title: topic.title,
                slides: slides,
                quiz: topic.quiz
            });
        });
        
        finalData[lvl].push({
            title: levelTitles[lvl],
            lessons: moduleLessons
        });
    });
    
    return finalData;
}

const CURRICULUM_DATA = buildSyllabus();


window.QUESTION_POOL_INTRO = {
    "vocabulary": [
        {
            "id": "intro_v_1",
            "question": "Qual termo corresponde a: \"O alfabeto inglês com 26 letras.\"?",
            "options": [
                "Schwa /ə/",
                "Alphabet",
                "Spell",
                "FauxOption3"
            ],
            "correctIndex": 1,
            "explanation": "'Alphabet' significa: O alfabeto inglês com 26 letras.."
        },
        {
            "id": "intro_v_2",
            "question": "Qual termo corresponde a: \"Soletrar uma palavra letra por letra.\"?",
            "options": [
                "Spell",
                "Schwa /ə/",
                "FauxOption3",
                "Alphabet"
            ],
            "correctIndex": 0,
            "explanation": "'Spell' significa: Soletrar uma palavra letra por letra.."
        },
        {
            "id": "intro_v_3",
            "question": "Qual termo corresponde a: \"O som vocálico reduzido mais comum do inglês (ex: father).\"?",
            "options": [
                "Alphabet",
                "Spell",
                "Schwa /ə/",
                "FauxOption3"
            ],
            "correctIndex": 2,
            "explanation": "'Schwa /ə/' significa: O som vocálico reduzido mais comum do inglês (ex: father).."
        },
        {
            "id": "intro_v_fallback_4",
            "question": "Qual a tradução de 'business'?",
            "options": [
                "aula",
                "negócios",
                "livro",
                "estudo"
            ],
            "correctIndex": 1,
            "explanation": "'business' significa negócios."
        },
        {
            "id": "intro_v_fallback_5",
            "question": "Qual a tradução de 'business'?",
            "options": [
                "aula",
                "livro",
                "negócios",
                "estudo"
            ],
            "correctIndex": 2,
            "explanation": "'business' significa negócios."
        },
        {
            "id": "intro_v_fallback_6",
            "question": "Qual a tradução de 'business'?",
            "options": [
                "livro",
                "negócios",
                "aula",
                "estudo"
            ],
            "correctIndex": 1,
            "explanation": "'business' significa negócios."
        },
        {
            "id": "intro_v_fallback_7",
            "question": "Qual a tradução de 'business'?",
            "options": [
                "aula",
                "estudo",
                "negócios",
                "livro"
            ],
            "correctIndex": 2,
            "explanation": "'business' significa negócios."
        },
        {
            "id": "intro_v_fallback_8",
            "question": "Qual a tradução de 'business'?",
            "options": [
                "livro",
                "estudo",
                "negócios",
                "aula"
            ],
            "correctIndex": 2,
            "explanation": "'business' significa negócios."
        }
    ],
    "grammar": [
        {
            "id": "intro_g_1",
            "question": "Como se pronuncia a letra 'W' em inglês?",
            "options": [
                "double-u",
                "uai",
                "dbâiu",
                "zi"
            ],
            "correctIndex": 2,
            "explanation": "A letra W se pronuncia 'dbâiu' (ou 'double-u' em transcrição rápida)."
        },
        {
            "id": "intro_g_2",
            "question": "Como se diz o e-mail 'sales@company.com' em inglês corporativo?",
            "options": [
                "sales slash company dot com",
                "sales at company dot com",
                "sales at company point com",
                "sales dot company at com"
            ],
            "correctIndex": 1,
            "explanation": "Usamos 'at' para '@' e 'dot' para o ponto '.' em e-mails."
        },
        {
            "id": "intro_g_fallback_3",
            "question": "Complete: 'We _____ English daily.'",
            "options": [
                "studies",
                "studying",
                "studied",
                "study"
            ],
            "correctIndex": 3,
            "explanation": "Com o pronome 'We' no presente, usamos 'study'."
        },
        {
            "id": "intro_g_fallback_4",
            "question": "Complete: 'We _____ English daily.'",
            "options": [
                "study",
                "studies",
                "studied",
                "studying"
            ],
            "correctIndex": 0,
            "explanation": "Com o pronome 'We' no presente, usamos 'study'."
        },
        {
            "id": "intro_g_fallback_5",
            "question": "Complete: 'We _____ English daily.'",
            "options": [
                "study",
                "studies",
                "studying",
                "studied"
            ],
            "correctIndex": 0,
            "explanation": "Com o pronome 'We' no presente, usamos 'study'."
        },
        {
            "id": "intro_g_fallback_6",
            "question": "Complete: 'We _____ English daily.'",
            "options": [
                "studied",
                "study",
                "studying",
                "studies"
            ],
            "correctIndex": 1,
            "explanation": "Com o pronome 'We' no presente, usamos 'study'."
        },
        {
            "id": "intro_g_fallback_7",
            "question": "Complete: 'We _____ English daily.'",
            "options": [
                "study",
                "studying",
                "studied",
                "studies"
            ],
            "correctIndex": 0,
            "explanation": "Com o pronome 'We' no presente, usamos 'study'."
        },
        {
            "id": "intro_g_fallback_8",
            "question": "Complete: 'We _____ English daily.'",
            "options": [
                "study",
                "studies",
                "studied",
                "studying"
            ],
            "correctIndex": 0,
            "explanation": "Com o pronome 'We' no presente, usamos 'study'."
        }
    ],
    "listening": [
        {
            "id": "intro_l_1",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: How do you _____ your name?",
            "options": [
                "say",
                "write",
                "spell"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"How do you spell your name?\" (Como se soletra seu nome?)."
        },
        {
            "id": "intro_l_2",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: My name is _____ with a double T.",
            "options": [
                "spelled",
                "spoken",
                "called"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"My name is spelled with a double T.\" (Meu nome é soletrado com dois T.)."
        },
        {
            "id": "intro_l_fallback_3",
            "question": "Selecione a palavra correta: 'I work in an ____.'",
            "options": [
                "officer",
                "office",
                "offices",
                "official"
            ],
            "correctIndex": 1,
            "explanation": "'I work in an office' é a frase correta."
        },
        {
            "id": "intro_l_fallback_4",
            "question": "Selecione a palavra correta: 'I work in an ____.'",
            "options": [
                "officer",
                "office",
                "offices",
                "official"
            ],
            "correctIndex": 1,
            "explanation": "'I work in an office' é a frase correta."
        },
        {
            "id": "intro_l_fallback_5",
            "question": "Selecione a palavra correta: 'I work in an ____.'",
            "options": [
                "office",
                "officer",
                "offices",
                "official"
            ],
            "correctIndex": 0,
            "explanation": "'I work in an office' é a frase correta."
        },
        {
            "id": "intro_l_fallback_6",
            "question": "Selecione a palavra correta: 'I work in an ____.'",
            "options": [
                "offices",
                "official",
                "officer",
                "office"
            ],
            "correctIndex": 3,
            "explanation": "'I work in an office' é a frase correta."
        },
        {
            "id": "intro_l_fallback_7",
            "question": "Selecione a palavra correta: 'I work in an ____.'",
            "options": [
                "offices",
                "office",
                "officer",
                "official"
            ],
            "correctIndex": 1,
            "explanation": "'I work in an office' é a frase correta."
        },
        {
            "id": "intro_l_fallback_8",
            "question": "Selecione a palavra correta: 'I work in an ____.'",
            "options": [
                "offices",
                "official",
                "office",
                "officer"
            ],
            "correctIndex": 2,
            "explanation": "'I work in an office' é a frase correta."
        }
    ],
    "pronunciation": [
        {
            "question": "Como se pronuncia a letra 'W' em inglês?",
            "options": [
                "double-u",
                "dbâiu",
                "uai",
                "zi"
            ],
            "correctIndex": 1,
            "explanation": "A letra W se pronuncia 'dbâiu' (double-u)."
        },
        {
            "question": "Como se pronuncia a letra 'H' em inglês?",
            "options": [
                "agá",
                "ét",
                "eitch",
                "ei"
            ],
            "correctIndex": 2,
            "explanation": "A letra H pronuncia-se 'eitch'."
        },
        {
            "question": "Como se pronuncia a letra 'G' em inglês?",
            "options": [
                "guê",
                "dji",
                "gí",
                "djí"
            ],
            "correctIndex": 3,
            "explanation": "A letra G pronuncia-se 'djí'."
        },
        {
            "question": "Como se pronuncia a letra 'Y' em inglês?",
            "options": [
                "iai",
                "uêi",
                "uai",
                "ipsilon"
            ],
            "correctIndex": 2,
            "explanation": "A letra Y pronuncia-se 'uai'."
        },
        {
            "question": "Como se pronuncia a letra 'Z' em inglês?",
            "options": [
                "zi",
                "za",
                "zed",
                "zê"
            ],
            "correctIndex": 0,
            "explanation": "A letra Z se pronuncia 'zi' no inglês americano e 'zed' no britânico."
        },
        {
            "question": "Como se pronuncia a letra 'J' em inglês?",
            "options": [
                "jota",
                "djai",
                "ji",
                "djei"
            ],
            "correctIndex": 3,
            "explanation": "A letra J pronuncia-se 'djei'."
        },
        {
            "question": "Qual é a pronúncia do som CH na palavra 'cheap'?",
            "options": [
                "som de s (sí-pi)",
                "som de c (quí-pi)",
                "som de tche (tchí-pi)",
                "som de x (chí-pi)"
            ],
            "correctIndex": 2,
            "explanation": "CH em inglês geralmente tem som de 'tche'."
        },
        {
            "question": "O que é o som 'Schwa /ə/' em inglês?",
            "options": [
                "Uma vogal reduzida neutra e fraca",
                "Uma consoante forte",
                "Uma letra muda",
                "Um ditongo longo"
            ],
            "correctIndex": 0,
            "explanation": "O Schwa é o som vocálico mais comum do inglês, sendo curto, fraco e neutro."
        }
    ]
};

window.QUESTION_POOL_U1 = {
    "vocabulary": [
        {
            "id": "u1_v_1",
            "question": "Qual termo corresponde a: \"Bom dia (usado até meio-dia).\"?",
            "options": [
                "Mr. (Mister)",
                "Good morning",
                "How do you do?",
                "See you"
            ],
            "correctIndex": 1,
            "explanation": "'Good morning' significa: Bom dia (usado até meio-dia).."
        },
        {
            "id": "u1_v_2",
            "question": "Qual termo corresponde a: \"Como vai você? (cumprimento muito formal, responde-se com a mesma frase).\"?",
            "options": [
                "See you",
                "Mr. (Mister)",
                "Good morning",
                "How do you do?"
            ],
            "correctIndex": 3,
            "explanation": "'How do you do?' significa: Como vai você? (cumprimento muito formal, responde-se com a mesma frase).."
        },
        {
            "id": "u1_v_3",
            "question": "Qual termo corresponde a: \"Até logo / Vejo você depois.\"?",
            "options": [
                "Good morning",
                "See you",
                "Mr. (Mister)",
                "How do you do?"
            ],
            "correctIndex": 1,
            "explanation": "'See you' significa: Até logo / Vejo você depois.."
        },
        {
            "id": "u1_v_4",
            "question": "Qual termo corresponde a: \"Senhor (usado para homens casados ou solteiros).\"?",
            "options": [
                "How do you do?",
                "Mr. (Mister)",
                "See you",
                "Good morning"
            ],
            "correctIndex": 1,
            "explanation": "'Mr. (Mister)' significa: Senhor (usado para homens casados ou solteiros).."
        },
        {
            "id": "u1_v_5",
            "question": "Qual termo corresponde a: \"Senhora (usado para mulheres casadas).\"?",
            "options": [
                "Good morning",
                "Mrs. (Missis)",
                "How do you do?",
                "See you"
            ],
            "correctIndex": 1,
            "explanation": "'Mrs. (Missis)' significa: Senhora (usado para mulheres casadas).."
        },
        {
            "id": "u1_v_6",
            "question": "Qual termo corresponde a: \"Senhorita (usado para mulheres solteiras).\"?",
            "options": [
                "How do you do?",
                "See you",
                "Good morning",
                "Miss"
            ],
            "correctIndex": 3,
            "explanation": "'Miss' significa: Senhorita (usado para mulheres solteiras).."
        },
        {
            "id": "u1_v_7",
            "question": "Qual termo corresponde a: \"Morar ou habitar em um local.\"?",
            "options": [
                "See you",
                "Live",
                "How do you do?",
                "Good morning"
            ],
            "correctIndex": 1,
            "explanation": "'Live' significa: Morar ou habitar em um local.."
        },
        {
            "id": "u1_v_8",
            "question": "Qual termo corresponde a: \"Endereço residencial ou comercial.\"?",
            "options": [
                "See you",
                "How do you do?",
                "Address",
                "Good morning"
            ],
            "correctIndex": 2,
            "explanation": "'Address' significa: Endereço residencial ou comercial.."
        }
    ],
    "grammar": [
        {
            "id": "u1_g_1",
            "question": "Qual das opções é um cumprimento formal ao se apresentar a alguém no mundo profissional?",
            "options": [
                "See you later",
                "Bye-bye",
                "How do you do?",
                "Hey, what's up?"
            ],
            "correctIndex": 2,
            "explanation": "'How do you do?' é a saudação formal clássica de apresentação em negócios."
        },
        {
            "id": "u1_g_2",
            "question": "Como você apresenta um cliente (Sr. Davis) ao seu diretor?",
            "options": [
                "This is Davis.",
                "Mr. Davis, this is our director.",
                "Hey, meet our director.",
                "Davis, look at this guy."
            ],
            "correctIndex": 1,
            "explanation": "A forma polida e correta de apresentar é: '[Nome], this is [Nome]'."
        },
        {
            "id": "u1_g_3",
            "question": "Qual pronome demonstrativo usamos para indicar um objeto que está distante (singular)?",
            "options": [
                "These",
                "This",
                "That",
                "Those"
            ],
            "correctIndex": 2,
            "explanation": "Usamos 'that' para coisas distantes no singular ('aquele/aquela')."
        },
        {
            "id": "u1_g_4",
            "question": "Como se refere a amostras que estão perto de você no plural?",
            "options": [
                "This samples",
                "These samples",
                "Those samples",
                "That samples"
            ],
            "correctIndex": 1,
            "explanation": "Para objetos próximos no plural usamos 'These'."
        },
        {
            "id": "u1_g_5",
            "question": "Como se diz 'Eu moro em São Paulo' em inglês?",
            "options": [
                "I lives in São Paulo",
                "I live at São Paulo",
                "I living São Paulo",
                "I live in São Paulo"
            ],
            "correctIndex": 3,
            "explanation": "Usamos a preposição 'in' para cidades: I live in São Paulo."
        },
        {
            "id": "u1_g_6",
            "question": "Qual a melhor frase para se apresentar profissionalmente em uma feira de negócios?",
            "options": [
                "I represent company X.",
                "Nice to see you company.",
                "I am a person.",
                "I live in Brazil."
            ],
            "correctIndex": 0,
            "explanation": "'I represent company X' estabelece autoridade e contexto de negócios de imediato."
        },
        {
            "id": "u1_g_7",
            "question": "Lembrando das regras de grafia, como são escritas as nacionalidades e países em inglês?",
            "options": [
                "Apenas no início de frases",
                "Sempre com a inicial maiúscula (ex: Brazilian)",
                "Depende do tamanho da palavra",
                "Sempre com letras minúsculas"
            ],
            "correctIndex": 1,
            "explanation": "Nacionalidades e países sempre levam letra inicial maiúscula: Brazilian, German, Brazil."
        },
        {
            "id": "u1_g_8",
            "question": "Como você diria 'Nossa equipe é alemã' em inglês?",
            "options": [
                "Our team is Germany.",
                "Our team is from German.",
                "Our team is German.",
                "Our team is Germanyan."
            ],
            "correctIndex": 2,
            "explanation": "'German' é o adjetivo de nacionalidade. 'Germany' é o país."
        }
    ],
    "listening": [
        {
            "id": "u1_l_1",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: Nice to _____ you Susan.",
            "options": [
                "see",
                "greeting",
                "meet"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"Nice to meet you Susan.\" (Prazer em conhecê-la, Susan.)."
        },
        {
            "id": "u1_l_2",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: How do you _____ your last name?",
            "options": [
                "spell",
                "write",
                "speak"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"How do you spell your last name?\" (Como você soletra seu sobrenome?)."
        },
        {
            "id": "u1_l_3",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: Good morning _____ Brown.",
            "options": [
                "Mrs.",
                "Miss",
                "Mr."
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"Good morning Mr. Brown.\" (Bom dia, Sr. Brown.)."
        },
        {
            "id": "u1_l_4",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ is my workspace.",
            "options": [
                "That",
                "This",
                "These"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"This is my workspace.\" (Este é meu espaço de trabalho.)."
        },
        {
            "id": "u1_l_5",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: I _____ in a big house.",
            "options": [
                "lives",
                "living",
                "live"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"I live in a big house.\" (Eu moro em uma casa grande.)."
        },
        {
            "id": "u1_l_6",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: I _____ English every day.",
            "options": [
                "studying",
                "studies",
                "study"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"I study English every day.\" (Eu estudo inglês todos os dias.)."
        },
        {
            "id": "u1_l_7",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: I am from Brazil and I am _____.",
            "options": [
                "Brazil",
                "Brazilese",
                "Brazilian"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"I am from Brazil and I am Brazilian.\" (Eu sou do Brasil e sou brasileiro.)."
        },
        {
            "id": "u1_l_8",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: My brother is an _____.",
            "options": [
                "engineering",
                "engineers",
                "engineer"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"My brother is an engineer.\" (Meu irmão é um engenheiro.)."
        }
    ],
    "pronunciation": [
        {
            "question": "Como se pronuncia a abreviação 'Mr.'?",
            "options": [
                "miss",
                "mister",
                "miz",
                "míssis"
            ],
            "correctIndex": 1,
            "explanation": "Mr. pronuncia-se 'mister'."
        },
        {
            "question": "Como se pronuncia a abreviação 'Mrs.'?",
            "options": [
                "miz",
                "mister",
                "miss",
                "míssis"
            ],
            "correctIndex": 3,
            "explanation": "Mrs. pronuncia-se 'míssis'."
        },
        {
            "question": "Como se pronuncia a abreviação 'Ms.'?",
            "options": [
                "miss (com som de S seco)",
                "mister",
                "míssis",
                "miz (com som de Z vibrado)"
            ],
            "correctIndex": 3,
            "explanation": "Ms. pronuncia-se 'miz' com som de Z vibrado final."
        },
        {
            "question": "Como se pronuncia 'Sir'?",
            "options": [
                "sê",
                "sãr (com R retroflexo)",
                "sér",
                "sir (como se escreve)"
            ],
            "correctIndex": 1,
            "explanation": "Sir pronuncia-se 'sãr' com R retroflexo."
        },
        {
            "question": "Como pronunciamos 'Madam' de forma nativa?",
            "options": [
                "médam",
                "madame",
                "madãm",
                "medãm"
            ],
            "correctIndex": 0,
            "explanation": "Madam pronuncia-se 'médam'."
        },
        {
            "question": "Como pronunciamos a palavra 'Brazilian'?",
            "options": [
                "bra-zi-lê-an",
                "bra-zíl-i-an",
                "brê-zí-li-an",
                "brê-zi-li-ên"
            ],
            "correctIndex": 2,
            "explanation": "Brazilian pronuncia-se 'brê-zí-li-an'."
        },
        {
            "question": "Como pronunciamos a palavra 'Engineer'?",
            "options": [
                "en-dji-ní-er",
                "en-gui-ner",
                "en-dji-ner",
                "en-dji-na-ier"
            ],
            "correctIndex": 0,
            "explanation": "Engineer pronuncia-se 'en-dji-ní-er'."
        },
        {
            "question": "Qual é a pronúncia correta de 'Secretary'?",
            "options": [
                "se-cre-tê-ri",
                "sé-cre-tri",
                "sé-cre-tê-ri",
                "se-cre-tá-ri"
            ],
            "correctIndex": 2,
            "explanation": "Secretary pronuncia-se 'sé-cre-tê-ri'."
        }
    ]
};

window.QUESTION_POOL_U2 = {
    "vocabulary": [
        {
            "id": "u2_v_1",
            "question": "Qual termo corresponde a: \"Você é...? / Você está...? (inversão da pergunta).\"?",
            "options": [
                "Are you...?",
                "Director",
                "Genitive Case",
                "Office"
            ],
            "correctIndex": 0,
            "explanation": "'Are you...?' significa: Você é...? / Você está...? (inversão da pergunta).."
        },
        {
            "id": "u2_v_2",
            "question": "Qual termo corresponde a: \"Escritório físico de trabalho.\"?",
            "options": [
                "Genitive Case",
                "Director",
                "Are you...?",
                "Office"
            ],
            "correctIndex": 3,
            "explanation": "'Office' significa: Escritório físico de trabalho.."
        },
        {
            "id": "u2_v_3",
            "question": "Qual termo corresponde a: \"Diretor corporativo.\"?",
            "options": [
                "Office",
                "Are you...?",
                "Director",
                "Genitive Case"
            ],
            "correctIndex": 2,
            "explanation": "'Director' significa: Diretor corporativo.."
        },
        {
            "id": "u2_v_4",
            "question": "Qual termo corresponde a: \"Uso do apostrofo + S ('s) para indicar posse ou relação.\"?",
            "options": [
                "Office",
                "Genitive Case",
                "Are you...?",
                "Director"
            ],
            "correctIndex": 1,
            "explanation": "'Genitive Case' significa: Uso do apostrofo + S ('s) para indicar posse ou relação.."
        },
        {
            "id": "u2_v_5",
            "question": "Qual termo corresponde a: \"Mesa de trabalho de escritório.\"?",
            "options": [
                "Office",
                "Desk",
                "Director",
                "Are you...?"
            ],
            "correctIndex": 1,
            "explanation": "'Desk' significa: Mesa de trabalho de escritório.."
        },
        {
            "id": "u2_v_6",
            "question": "Qual termo corresponde a: \"Escritório ou sala de administração.\"?",
            "options": [
                "Are you...?",
                "Genitive Case",
                "Office",
                "Director"
            ],
            "correctIndex": 2,
            "explanation": "'Office' significa: Escritório ou sala de administração.."
        },
        {
            "id": "u2_v_7",
            "question": "Qual termo corresponde a: \"O que / Qual.\"?",
            "options": [
                "Office",
                "Are you...?",
                "Director",
                "What"
            ],
            "correctIndex": 3,
            "explanation": "'What' significa: O que / Qual.."
        },
        {
            "id": "u2_v_8",
            "question": "Qual termo corresponde a: \"Como / De que maneira.\"?",
            "options": [
                "Office",
                "How",
                "Director",
                "Are you...?"
            ],
            "correctIndex": 1,
            "explanation": "'How' significa: Como / De que maneira.."
        }
    ],
    "grammar": [
        {
            "id": "u2_g_1",
            "question": "Qual a inversão correta para transformar a frase 'You are French' em pergunta?",
            "options": [
                "You are French?",
                "Do you are French?",
                "Are you French?",
                "Is you French?"
            ],
            "correctIndex": 2,
            "explanation": "Na forma interrogativa do verbo To Be, o verbo vem antes do sujeito: 'Are you French?'."
        },
        {
            "id": "u2_g_2",
            "question": "Como você pergunta formalmente se a pessoa é responsável pela decisão final?",
            "options": [
                "Are you the buyer worker?",
                "Do you buy?",
                "Are you the decision maker?",
                "Is you the boss?"
            ],
            "correctIndex": 2,
            "explanation": "'Are you the decision maker?' é a forma padrão de qualificar o lead na área comercial."
        },
        {
            "id": "u2_g_3",
            "question": "Como traduzimos 'o carro de Mary' usando o caso genitivo?",
            "options": [
                "The car of Mary",
                "Mary's car",
                "Marys car",
                "Mary car"
            ],
            "correctIndex": 1,
            "explanation": "O possuidor recebe o 's antes da coisa possuída: Mary's car."
        },
        {
            "id": "u2_g_4",
            "question": "Como você diz 'o escritório do diretor comercial' em inglês?",
            "options": [
                "The sales directors office'",
                "The office of the director of sales",
                "The sales director's office",
                "The sales director office"
            ],
            "correctIndex": 2,
            "explanation": "Usamos o 's após sales director: 'The sales director's office'."
        },
        {
            "id": "u2_g_5",
            "question": "Qual pronome interrogativo usamos para perguntar sobre localizações?",
            "options": [
                "Where",
                "Why",
                "What",
                "Who"
            ],
            "correctIndex": 0,
            "explanation": "'Where' significa 'onde' e é usado para locais."
        },
        {
            "id": "u2_g_6",
            "question": "Como você pergunta qual meio de transporte o cliente prefere para ir ao aeroporto?",
            "options": [
                "What is airport transportation?",
                "How do you want to go to the airport?",
                "Where is airport taxi?",
                "Why airport?"
            ],
            "correctIndex": 1,
            "explanation": "'How do you want to go...' pergunta o meio de transporte ('como')."
        },
        {
            "id": "u2_g_7",
            "question": "Qual preposição de tempo é usada antes de dias da semana?",
            "options": [
                "at",
                "by",
                "on",
                "in"
            ],
            "correctIndex": 2,
            "explanation": "Usamos a preposição 'on' para dias da semana (ex: on Monday)."
        },
        {
            "id": "u2_g_8",
            "question": "Como agendar uma apresentação de vendas para sexta-feira usando a preposição correta?",
            "options": [
                "The presentation is under Friday.",
                "The presentation is in Friday.",
                "The presentation is at Friday.",
                "The presentation is on Friday."
            ],
            "correctIndex": 3,
            "explanation": "Usamos 'on' para dias específicos: 'on Friday'."
        }
    ],
    "listening": [
        {
            "id": "u2_l_1",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ you a sales director?",
            "options": [
                "Am",
                "Are",
                "Is"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"Are you a sales director?\" (Você é diretor de vendas?)."
        },
        {
            "id": "u2_l_2",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ she in the office today?",
            "options": [
                "Is",
                "Are",
                "Am"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"Is she in the office today?\" (Ela está no escritório hoje?)."
        },
        {
            "id": "u2_l_3",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: This is _____ desk.",
            "options": [
                "John's",
                "of John",
                "Johns"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"This is John's desk.\" (Esta é a mesa do John.)."
        },
        {
            "id": "u2_l_4",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: Where is the _____ office?",
            "options": [
                "manager's",
                "managers",
                "of manager"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"Where is the manager's office?\" (Onde fica a sala do gerente?)."
        },
        {
            "id": "u2_l_5",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ is your commercial target?",
            "options": [
                "Where",
                "Who",
                "What"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"What is your commercial target?\" (Qual é a sua meta comercial?)."
        },
        {
            "id": "u2_l_6",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ do you travel to meetings?",
            "options": [
                "Why",
                "How",
                "Who"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"How do you travel to meetings?\" (Como você viaja para as reuniões?)."
        },
        {
            "id": "u2_l_7",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: The commercial contract starts on _____.",
            "options": [
                "First",
                "January",
                "Monday"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"The commercial contract starts on Monday.\" (O contrato comercial começa na segunda-feira.)."
        },
        {
            "id": "u2_l_8",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We have _____ sales agents.",
            "options": [
                "five",
                "fifteen",
                "fifty"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"We have fifty sales agents.\" (Nós temos cinquenta agentes de vendas.)."
        }
    ],
    "pronunciation": [
        {
            "question": "Como se pronuncia a palavra 'Orange'?",
            "options": [
                "o-rândj",
                "ó-rindj",
                "ó-raindj",
                "o-renge"
            ],
            "correctIndex": 1,
            "explanation": "Orange pronuncia-se 'ó-rindj'."
        },
        {
            "question": "Como pronunciamos a palavra 'Subway'?",
            "options": [
                "sub-uai",
                "sãb-wêi",
                "sub-uêi",
                "sãb-uai"
            ],
            "correctIndex": 1,
            "explanation": "Subway pronuncia-se 'sãb-wêi'."
        },
        {
            "question": "Como pronunciamos 'Bicycle'?",
            "options": [
                "bi-ci-col",
                "bi-ci-cle",
                "bái-ci-cle",
                "bái-ci-col"
            ],
            "correctIndex": 3,
            "explanation": "Bicycle pronuncia-se 'bái-ci-col'."
        },
        {
            "question": "Como se pronuncia 'Sneakers'?",
            "options": [
                "sné-quêrs",
                "sné-kers",
                "sní-kers",
                "sní-quêrs"
            ],
            "correctIndex": 2,
            "explanation": "Sneakers pronuncia-se 'sní-kers'."
        },
        {
            "question": "Como pronunciamos 'Wednesday'?",
            "options": [
                "uéd-nes-dai",
                "wênz-dei (o D é mudo)",
                "wênz-dai",
                "uéd-nes-dei"
            ],
            "correctIndex": 1,
            "explanation": "Wednesday pronuncia-se 'wênz-dei' (o D é mudo)."
        },
        {
            "question": "Como se pronuncia 'Thursday'?",
            "options": [
                "fãrz-dei",
                "θãrz-dei (com TH soprado)",
                "tãrz-dei",
                "θãrz-dai"
            ],
            "correctIndex": 1,
            "explanation": "Thursday pronuncia-se 'θãrz-dei' com som de TH interdental."
        },
        {
            "question": "Como pronunciamos 'August'?",
            "options": [
                "ó-gust",
                "au-gust",
                "ó-gãst",
                "au-gãst"
            ],
            "correctIndex": 2,
            "explanation": "August pronuncia-se 'ó-gãst'."
        },
        {
            "question": "Como se pronuncia a palavra 'Hours' (horas)?",
            "options": [
                "áu-ers (o H é mudo)",
                "ó-urs",
                "ór-es",
                "ráu-ers (com H aspirado)"
            ],
            "correctIndex": 0,
            "explanation": "Hours tem o H mudo, fazendo o som iniciar na vogal 'áu-ers'."
        }
    ]
};

window.QUESTION_POOL_U3 = {
    "vocabulary": [
        {
            "id": "u3_v_1",
            "question": "Qual termo corresponde a: \"Meu / Seu (adjetivos possessivos que acompanham substantivo).\"?",
            "options": [
                "Our / Their",
                "Sales targets",
                "Ours / Theirs",
                "My / Your"
            ],
            "correctIndex": 3,
            "explanation": "'My / Your' significa: Meu / Seu (adjetivos possessivos que acompanham substantivo).."
        },
        {
            "id": "u3_v_2",
            "question": "Qual termo corresponde a: \"Nosso / Deles (adjetivos possessivos).\"?",
            "options": [
                "My / Your",
                "Our / Their",
                "Sales targets",
                "Ours / Theirs"
            ],
            "correctIndex": 1,
            "explanation": "'Our / Their' significa: Nosso / Deles (adjetivos possessivos).."
        },
        {
            "id": "u3_v_3",
            "question": "Qual termo corresponde a: \"Metas de vendas estabelecidas.\"?",
            "options": [
                "Sales targets",
                "Ours / Theirs",
                "My / Your",
                "Our / Their"
            ],
            "correctIndex": 0,
            "explanation": "'Sales targets' significa: Metas de vendas estabelecidas.."
        },
        {
            "id": "u3_v_4",
            "question": "Qual termo corresponde a: \"Nosso / Deles (pronomes possessivos que substituem substantivo).\"?",
            "options": [
                "Sales targets",
                "Ours / Theirs",
                "My / Your",
                "Our / Their"
            ],
            "correctIndex": 1,
            "explanation": "'Ours / Theirs' significa: Nosso / Deles (pronomes possessivos que substituem substantivo).."
        },
        {
            "id": "u3_v_5",
            "question": "Qual termo corresponde a: \"Meu / Seu (pronomes possessivos).\"?",
            "options": [
                "Sales targets",
                "Mine / Yours",
                "My / Your",
                "Our / Their"
            ],
            "correctIndex": 1,
            "explanation": "'Mine / Yours' significa: Meu / Seu (pronomes possessivos).."
        },
        {
            "id": "u3_v_6",
            "question": "Qual termo corresponde a: \"Decisão estratégica.\"?",
            "options": [
                "Our / Their",
                "Sales targets",
                "Decision",
                "My / Your"
            ],
            "correctIndex": 2,
            "explanation": "'Decision' significa: Decisão estratégica.."
        },
        {
            "id": "u3_v_7",
            "question": "Qual termo corresponde a: \"Ele mesmo / Ela mesma.\"?",
            "options": [
                "My / Your",
                "Himself / Herself",
                "Our / Their",
                "Sales targets"
            ],
            "correctIndex": 1,
            "explanation": "'Himself / Herself' significa: Ele mesmo / Ela mesma.."
        },
        {
            "id": "u3_v_8",
            "question": "Qual termo corresponde a: \"Nós mesmos.\"?",
            "options": [
                "Our / Their",
                "Ourselves",
                "My / Your",
                "Sales targets"
            ],
            "correctIndex": 1,
            "explanation": "'Ourselves' significa: Nós mesmos.."
        }
    ],
    "grammar": [
        {
            "id": "u3_g_1",
            "question": "Qual adjetivo possessivo completa a frase: 'This is _____ boss, Mr. Green.'?",
            "options": [
                "me",
                "my",
                "mine",
                "I"
            ],
            "correctIndex": 1,
            "explanation": "Adjetivos possessivos precedem substantivos: 'my boss'."
        },
        {
            "id": "u3_g_2",
            "question": "Como se diz 'a meta comercial deles'?",
            "options": [
                "Theirs commercial target",
                "Their commercial target",
                "They commercial target",
                "Them commercial target"
            ],
            "correctIndex": 1,
            "explanation": "Usamos o possessivo 'Their' antes do substantivo."
        },
        {
            "id": "u3_g_3",
            "question": "Qual a diferença de 'my' e 'mine'?",
            "options": [
                "'my' é formal e 'mine' é informal.",
                "'my' é usado por homens e 'mine' por mulheres.",
                "'my' acompanha o substantivo e 'mine' o substitui.",
                "Não há diferença."
            ],
            "correctIndex": 2,
            "explanation": "'my' exige substantivo (my car), 'mine' substitui o substantivo (this is mine)."
        },
        {
            "id": "u3_g_4",
            "question": "Como você afirma em um contrato que o projeto não é de sua empresa?",
            "options": [
                "The project is not us.",
                "The project is not we.",
                "The project is not ours.",
                "The project is not our."
            ],
            "correctIndex": 2,
            "explanation": "Usamos o pronome possessivo final 'ours' após o verbo."
        },
        {
            "id": "u3_g_5",
            "question": "Qual pronome reflexivo concorda com 'They'?",
            "options": [
                "themselves",
                "yourselves",
                "himself",
                "ourselves"
            ],
            "correctIndex": 0,
            "explanation": "O reflexivo de 'They' é 'themselves'."
        },
        {
            "id": "u3_g_6",
            "question": "Como descrever que o cliente gerencia suas compras sozinho?",
            "options": [
                "The client manages purchases myself.",
                "The client manages purchases himself.",
                "The client manages purchases ourselves.",
                "The client manages purchases itself."
            ],
            "correctIndex": 1,
            "explanation": "'himself' (ou 'herself'/'itself' se corporativo) concorda com o sujeito 'the client'."
        },
        {
            "id": "u3_g_7",
            "question": "Qual artigo indefinido usamos antes da palavra 'honest manager'?",
            "options": [
                "nulo",
                "a",
                "an",
                "the"
            ],
            "correctIndex": 2,
            "explanation": "'Honest' começa com som vocálico (o 'h' é mudo), por isso exige 'an honest manager'."
        },
        {
            "id": "u3_g_8",
            "question": "Qual a alternativa gramaticalmente correta?",
            "options": [
                "The executive office's",
                "An executive offices",
                "An executive office",
                "A executive office"
            ],
            "correctIndex": 2,
            "explanation": "Usamos 'an' antes de palavras iniciadas com som de vogal: 'An executive'."
        }
    ],
    "listening": [
        {
            "id": "u3_l_1",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ company has new sales targets.",
            "options": [
                "Ours",
                "Our",
                "We"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"Our company has new sales targets.\" (Nossa empresa tem novas metas de vendas.)."
        },
        {
            "id": "u3_l_2",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ office is in Chicago.",
            "options": [
                "Their",
                "They",
                "Theirs"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"Their office is in Chicago.\" (O escritório deles é em Chicago.)."
        },
        {
            "id": "u3_l_3",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: This commercial plan is not _____.",
            "options": [
                "ours",
                "our",
                "us"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"This commercial plan is not ours.\" (Este plano comercial não é nosso.)."
        },
        {
            "id": "u3_l_4",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: The final decision is _____.",
            "options": [
                "their",
                "them",
                "theirs"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"The final decision is theirs.\" (A decisão final é deles.)."
        },
        {
            "id": "u3_l_5",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: The director signed the contract _____.",
            "options": [
                "myself",
                "himself",
                "herself"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"The director signed the contract himself.\" (O diretor assinou o contrato ele mesmo.)."
        },
        {
            "id": "u3_l_6",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We managed the client setup _____.",
            "options": [
                "yourselves",
                "ourselves",
                "themselves"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"We managed the client setup ourselves.\" (Nós mesmos gerenciamos a configuração do cliente.)."
        },
        {
            "id": "u3_l_7",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We need _____ commerci_____l _____greement.",
            "options": [
                "an",
                "the",
                "a"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"We need a commercial agreement.\" (Nós precisamos de um acordo comercial.)."
        },
        {
            "id": "u3_l_8",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ CEO signed the document.",
            "options": [
                "A",
                "An",
                "The"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"The CEO signed the document.\" (O CEO assinou o documento.)."
        }
    ],
    "pronunciation": [
        {
            "question": "Como pronunciamos 'Their'?",
            "options": [
                "dêr",
                "θêr",
                "fêr",
                "ðêr (com TH sonoro)"
            ],
            "correctIndex": 3,
            "explanation": "Their pronuncia-se 'ðêr' com o TH sonoro entre os dentes."
        },
        {
            "question": "Como se pronuncia 'Ours'?",
            "options": [
                "áu-ers",
                "ó-urs",
                "ôr-es",
                "áu-erz"
            ],
            "correctIndex": 3,
            "explanation": "Ours pronuncia-se 'áu-erz'."
        },
        {
            "question": "Como pronunciamos 'Myself'?",
            "options": [
                "mái-sélf",
                "mi-sélf",
                "mi-selfi",
                "mái-selfi"
            ],
            "correctIndex": 0,
            "explanation": "Myself pronuncia-se 'mái-sélf' com F seco final."
        },
        {
            "question": "Como se pronuncia o artigo 'The' antes de som de vogal (ex: the apple)?",
            "options": [
                "ðá (som de da)",
                "ðí (som de di)",
                "ti",
                "tê"
            ],
            "correctIndex": 1,
            "explanation": "Antes de som de vogal, 'the' pronuncia-se 'ðí'."
        },
        {
            "question": "Como se pronuncia o artigo 'The' antes de som de consoante (ex: the book)?",
            "options": [
                "tê",
                "ðí (som de di)",
                "ðə (som de dâ/schwa)",
                "ti"
            ],
            "correctIndex": 2,
            "explanation": "Antes de som de consoante, 'the' pronuncia-se 'ðə' com som reduzido de schwa."
        },
        {
            "question": "Como pronunciamos a palavra 'Them'?",
            "options": [
                "ðém",
                "fém",
                "θém",
                "dém"
            ],
            "correctIndex": 0,
            "explanation": "Them pronuncia-se 'ðém' com TH sonoro."
        },
        {
            "question": "Como pronunciamos 'There is' de forma conectada?",
            "options": [
                "ðê-ríz",
                "dêr-íz",
                "ðêr-ís",
                "dê-rís"
            ],
            "correctIndex": 0,
            "explanation": "Connected speech: 'There is' soa como 'ðê-ríz' no fluxo normal da fala."
        },
        {
            "question": "Como se pronuncia 'Him'?",
            "options": [
                "ím (com H mudo)",
                "rém",
                "rím (com H aspirado)",
                "ém"
            ],
            "correctIndex": 2,
            "explanation": "Him tem o H aspirado (som de R em português): 'rím'."
        }
    ]
};

window.QUESTION_POOL_U4 = {
    "vocabulary": [
        {
            "id": "u4_v_1",
            "question": "Qual termo corresponde a: \"Verificar, inspecionar ou monitorar.\"?",
            "options": [
                "In / On / At",
                "Check",
                "Schedule",
                "Metrics"
            ],
            "correctIndex": 1,
            "explanation": "'Check' significa: Verificar, inspecionar ou monitorar.."
        },
        {
            "id": "u4_v_2",
            "question": "Qual termo corresponde a: \"Agendar compromissos ou programar.\"?",
            "options": [
                "In / On / At",
                "Check",
                "Schedule",
                "Metrics"
            ],
            "correctIndex": 2,
            "explanation": "'Schedule' significa: Agendar compromissos ou programar.."
        },
        {
            "id": "u4_v_3",
            "question": "Qual termo corresponde a: \"Dados estatísticos de desempenho.\"?",
            "options": [
                "Schedule",
                "Metrics",
                "In / On / At",
                "Check"
            ],
            "correctIndex": 1,
            "explanation": "'Metrics' significa: Dados estatísticos de desempenho.."
        },
        {
            "id": "u4_v_4",
            "question": "Qual termo corresponde a: \"Preposições de tempo e lugar. In (cidades/países/meses), On (dias da semana/superfícies), At (horas exatas/endereços específicos).\"?",
            "options": [
                "Metrics",
                "Check",
                "In / On / At",
                "Schedule"
            ],
            "correctIndex": 2,
            "explanation": "'In / On / At' significa: Preposições de tempo e lugar. In (cidades/países/meses), On (dias da semana/superfícies), At (horas exatas/endereços específicos).."
        },
        {
            "id": "u4_v_5",
            "question": "Qual termo corresponde a: \"Viajar de avião / carro (preposição 'by' indica meio de transporte).\"?",
            "options": [
                "By plane / car",
                "Check",
                "Metrics",
                "Schedule"
            ],
            "correctIndex": 0,
            "explanation": "'By plane / car' significa: Viajar de avião / carro (preposição 'by' indica meio de transporte).."
        },
        {
            "id": "u4_v_6",
            "question": "Qual termo corresponde a: \"Matriz da empresa.\"?",
            "options": [
                "Check",
                "Head office",
                "Metrics",
                "Schedule"
            ],
            "correctIndex": 1,
            "explanation": "'Head office' significa: Matriz da empresa.."
        },
        {
            "id": "u4_v_7",
            "question": "Qual termo corresponde a: \"E / Mas / Ou (conectivos lógicos).\"?",
            "options": [
                "Metrics",
                "Schedule",
                "Check",
                "And / But / Or"
            ],
            "correctIndex": 3,
            "explanation": "'And / But / Or' significa: E / Mas / Ou (conectivos lógicos).."
        },
        {
            "id": "u4_v_8",
            "question": "Qual termo corresponde a: \"Porque / Então (conectivos de causa e consequência).\"?",
            "options": [
                "Because / So",
                "Metrics",
                "Check",
                "Schedule"
            ],
            "correctIndex": 0,
            "explanation": "'Because / So' significa: Porque / Então (conectivos de causa e consequência).."
        }
    ],
    "grammar": [
        {
            "id": "u4_g_1",
            "question": "Qual é a forma base do Simple Present para 'We' do verbo 'work'?",
            "options": [
                "worker",
                "works",
                "work",
                "working"
            ],
            "correctIndex": 2,
            "explanation": "No presente simples, sujeitos plurais (We, They) e I/You usam a forma verbal pura: work."
        },
        {
            "id": "u4_g_2",
            "question": "Como dizer 'Nós fazemos reuniões todos os dias'?",
            "options": [
                "We holds meetings every day.",
                "We hold meetings every day.",
                "We holding meetings every day.",
                "We does meetings every day."
            ],
            "correctIndex": 1,
            "explanation": "'We hold' (nós conduzimos/fazemos) é a conjugação no presente correto."
        },
        {
            "id": "u4_g_3",
            "question": "Qual preposição de tempo usamos antes de horas (ex: 9:00 AM)?",
            "options": [
                "by",
                "on",
                "in",
                "at"
            ],
            "correctIndex": 3,
            "explanation": "Usamos a preposição 'at' para horários definidos: 'at 9:00 AM'."
        },
        {
            "id": "u4_g_4",
            "question": "Como agendar um call comercial na segunda às 10 horas?",
            "options": [
                "In Monday in 10 AM",
                "At Monday on 10 AM",
                "By Monday at 10 AM",
                "On Monday at 10 AM"
            ],
            "correctIndex": 3,
            "explanation": "Usamos 'on' para dias de semana e 'at' para horas: 'on Monday at 10 AM'."
        },
        {
            "id": "u4_g_5",
            "question": "Qual conectivo indica consequência ou conclusão?",
            "options": [
                "because",
                "but",
                "still",
                "so"
            ],
            "correctIndex": 3,
            "explanation": "'so' (então/portanto) introduz o resultado de uma causa."
        },
        {
            "id": "u4_g_6",
            "question": "Como conectar 'Queremos expandir' e 'Precisamos contratar mais vendedores'?",
            "options": [
                "We want to expand, so we need to hire more sales reps.",
                "We want to expand because we need to hire more sales reps.",
                "We want to expand but we need to hire more sales reps.",
                "We want to expand or we need to hire more sales reps."
            ],
            "correctIndex": 0,
            "explanation": "A necessidade de contratação é a consequência do desejo de expansão, logo 'so' é o conectivo correto."
        },
        {
            "id": "u4_g_7",
            "question": "Qual a terminação correta para 'go' na 3ª pessoa do singular (He/She/It)?",
            "options": [
                "gos",
                "go",
                "goes",
                "going"
            ],
            "correctIndex": 2,
            "explanation": "Verbos terminados em -O recebem -es na 3ª pessoa do singular: goes."
        },
        {
            "id": "u4_g_8",
            "question": "Como dizer 'O gerente gerencia as vendas'?",
            "options": [
                "The manager to manage the sales.",
                "The manager manages the sales.",
                "The manager managing the sales.",
                "The manager manage the sales."
            ],
            "correctIndex": 1,
            "explanation": "Para 'The manager' (ele/ela), o verbo recebe flexão do S/ES: 'manages'."
        }
    ],
    "listening": [
        {
            "id": "u4_l_1",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: I _____ my sales metrics daily.",
            "options": [
                "checking",
                "checks",
                "check"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"I check my sales metrics daily.\" (Eu checo minhas métricas de vendas diariamente.)."
        },
        {
            "id": "u4_l_2",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We _____ client demo calls weekly.",
            "options": [
                "schedule",
                "schedules",
                "scheduling"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"We schedule client demo calls weekly.\" (Nós agendamos chamadas de demonstração com clientes semanalmente.)."
        },
        {
            "id": "u4_l_3",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: Our head office is _____ São Paulo.",
            "options": [
                "at",
                "in",
                "on"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"Our head office is in São Paulo.\" (Nossa matriz fica em São Paulo.)."
        },
        {
            "id": "u4_l_4",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: The commercial presentati_____ is _____ Friday.",
            "options": [
                "in",
                "on",
                "at"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"The commercial presentation is on Friday.\" (A apresentação comercial é na sexta-feira.)."
        },
        {
            "id": "u4_l_5",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: Our price is high _____ the quality is superior.",
            "options": [
                "but",
                "and",
                "because"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"Our price is high but the quality is superior.\" (Nosso preço é alto, mas a qualidade é superior.)."
        },
        {
            "id": "u4_l_6",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We work hard, _____ we win contracts.",
            "options": [
                "or",
                "still",
                "so"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"We work hard, so we win contracts.\" (Nós trabalhamos duro, então nós ganhamos contratos.)."
        },
        {
            "id": "u4_l_7",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: She _____ the commercial department.",
            "options": [
                "manages",
                "manage",
                "managing"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"She manages the commercial department.\" (Ela gerencia o departamento comercial.)."
        },
        {
            "id": "u4_l_8",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: He _____ the contract with the supplier.",
            "options": [
                "signs",
                "signing",
                "sign"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"He signs the contract with the supplier.\" (Ele assina o contrato com o fornecedor.)."
        }
    ],
    "pronunciation": [
        {
            "question": "Qual a pronúncia da terminação -S na palavra 'works'?",
            "options": [
                "/iz/ (sílaba extra)",
                "/s/ mudo",
                "/s/ (som de S surdo)",
                "/z/ (som de Z sonoro)"
            ],
            "correctIndex": 2,
            "explanation": "Works termina no som /k/ (surdo), logo o -S soa como /s/."
        },
        {
            "question": "Qual a pronúncia da terminação -S na palavra 'plays'?",
            "options": [
                "/s/ (som de S surdo)",
                "/s/ mudo",
                "/iz/ (sílaba extra)",
                "/z/ (som de Z sonoro)"
            ],
            "correctIndex": 3,
            "explanation": "Plays termina no som vocálico (sonoro), logo o -S soa como /z/."
        },
        {
            "question": "Qual a pronúncia da terminação -ES na palavra 'watches'?",
            "options": [
                "/iz/ (sílaba extra)",
                "/z/ (som de Z sonoro)",
                "/s/ (som de S surdo)",
                "/es/"
            ],
            "correctIndex": 0,
            "explanation": "Watches termina em som sibilante (/ch/), exigindo a sílaba extra /iz/."
        },
        {
            "question": "Como pronunciamos a palavra 'Schedule' no inglês americano?",
            "options": [
                "ské-dule",
                "ché-dule",
                "ské-djul",
                "ché-djul"
            ],
            "correctIndex": 2,
            "explanation": "No inglês americano, Schedule pronuncia-se 'ské-djul'."
        },
        {
            "question": "Como pronunciamos a palavra 'Schedule' no inglês britânico?",
            "options": [
                "ské-djul",
                "ské-dule",
                "ché-djul",
                "ché-dule"
            ],
            "correctIndex": 2,
            "explanation": "No inglês britânico, Schedule pronuncia-se 'ché-djul'."
        },
        {
            "question": "Como se pronuncia a preposição 'At'?",
            "options": [
                "æt (com t seco)",
                "éti",
                "át",
                "á-ti"
            ],
            "correctIndex": 0,
            "explanation": "At termina no som seco do T, sem colocar 'i' ao final."
        },
        {
            "question": "Como se pronuncia 'Usually'?",
            "options": [
                "iú-zi-a-li",
                "u-su-a-li",
                "iú-ju-a-li",
                "u-ju-a-li"
            ],
            "correctIndex": 2,
            "explanation": "Usually pronuncia-se 'iú-ju-a-li'."
        },
        {
            "question": "Como pronunciamos 'Weekly'?",
            "options": [
                "wí-cli",
                "u-í-cli",
                "wé-cli",
                "u-é-cli"
            ],
            "correctIndex": 0,
            "explanation": "Weekly pronuncia-se 'wí-cli'."
        }
    ]
};

window.QUESTION_POOL_U5 = {
    "vocabulary": [
        {
            "id": "u5_v_1",
            "question": "Qual termo corresponde a: \"Preferir uma opção em detrimento de outra.\"?",
            "options": [
                "Reservation",
                "Host a dinner",
                "Much / Many",
                "Prefer"
            ],
            "correctIndex": 3,
            "explanation": "'Prefer' significa: Preferir uma opção em detrimento de outra.."
        },
        {
            "id": "u5_v_2",
            "question": "Qual termo corresponde a: \"Oferecer ou organizar um jantar.\"?",
            "options": [
                "Reservation",
                "Host a dinner",
                "Much / Many",
                "Prefer"
            ],
            "correctIndex": 1,
            "explanation": "'Host a dinner' significa: Oferecer ou organizar um jantar.."
        },
        {
            "id": "u5_v_3",
            "question": "Qual termo corresponde a: \"Reserva de mesa.\"?",
            "options": [
                "Prefer",
                "Reservation",
                "Host a dinner",
                "Much / Many"
            ],
            "correctIndex": 1,
            "explanation": "'Reservation' significa: Reserva de mesa.."
        },
        {
            "id": "u5_v_4",
            "question": "Qual termo corresponde a: \"Muito para incontáveis (singular) / Muitos para contáveis (plural).\"?",
            "options": [
                "Host a dinner",
                "Prefer",
                "Much / Many",
                "Reservation"
            ],
            "correctIndex": 2,
            "explanation": "'Much / Many' significa: Muito para incontáveis (singular) / Muitos para contáveis (plural).."
        },
        {
            "id": "u5_v_5",
            "question": "Qual termo corresponde a: \"Conselho ou orientação (incontável em inglês, não tem plural advices).\"?",
            "options": [
                "Advice",
                "Host a dinner",
                "Reservation",
                "Prefer"
            ],
            "correctIndex": 0,
            "explanation": "'Advice' significa: Conselho ou orientação (incontável em inglês, não tem plural advices).."
        },
        {
            "id": "u5_v_6",
            "question": "Qual termo corresponde a: \"Informação (incontável, não existe informations).\"?",
            "options": [
                "Host a dinner",
                "Information",
                "Prefer",
                "Reservation"
            ],
            "correctIndex": 1,
            "explanation": "'Information' significa: Informação (incontável, não existe informations).."
        },
        {
            "id": "u5_v_7",
            "question": "Qual termo corresponde a: \"Assistir ou monitorar visualmente.\"?",
            "options": [
                "Watch",
                "Host a dinner",
                "Prefer",
                "Reservation"
            ],
            "correctIndex": 0,
            "explanation": "'Watch' significa: Assistir ou monitorar visualmente.."
        },
        {
            "id": "u5_v_8",
            "question": "Qual termo corresponde a: \"Anúncio publicitário ou propaganda televisiva comercial.\"?",
            "options": [
                "Prefer",
                "Host a dinner",
                "Reservation",
                "Commercial / Ad"
            ],
            "correctIndex": 3,
            "explanation": "'Commercial / Ad' significa: Anúncio publicitário ou propaganda televisiva comercial.."
        }
    ],
    "grammar": [
        {
            "id": "u5_g_1",
            "question": "Como se diz 'Eu gostaria de fazer uma reserva' em inglês?",
            "options": [
                "I want table.",
                "I would like to make a reservation.",
                "I prefer booking table.",
                "I like reservation."
            ],
            "correctIndex": 1,
            "explanation": "'I would like to make a reservation' é a expressão mais polida em inglês."
        },
        {
            "id": "u5_g_2",
            "question": "Como propor educadamente um almoço de negócios ao seu cliente?",
            "options": [
                "Lunch is good?",
                "We lunch together?",
                "Hey, eat lunch with me?",
                "Would you like to join me for a business lunch?"
            ],
            "correctIndex": 3,
            "explanation": "'Would you like to join me for...' é o convite formal corporativo padrão."
        },
        {
            "id": "u5_g_3",
            "question": "Qual das opções abaixo é um substantivo incontável (uncountable)?",
            "options": [
                "report",
                "dollar",
                "client",
                "information"
            ],
            "correctIndex": 3,
            "explanation": "'information' é incontável e não aceita a forma plural 'informations'."
        },
        {
            "id": "u5_g_4",
            "question": "Como pedir informações de preços adicionais a um fornecedor?",
            "options": [
                "We need many information about your prices.",
                "We need some more information about your prices.",
                "We need few informations about prices.",
                "We need more informations about your prices."
            ],
            "correctIndex": 1,
            "explanation": "'information' deve ser mantido no singular, pois é incontável."
        },
        {
            "id": "u5_g_5",
            "question": "Como se traduz a frase 'Ela gosta de anúncios'?",
            "options": [
                "She likes to watches advertisement.",
                "She like advertisements.",
                "She liking advertisement.",
                "She likes advertisements."
            ],
            "correctIndex": 3,
            "explanation": "Para 'She', o verbo recebe o S: She likes."
        },
        {
            "id": "u5_g_6",
            "question": "Como denominar o vídeo publicitário que vai ao ar na TV?",
            "options": [
                "TV Movie",
                "TV Commercial",
                "TV Cinema",
                "TV Documentary"
            ],
            "correctIndex": 1,
            "explanation": "Vídeos promocionais de empresas na TV são chamados de 'TV commercials'."
        },
        {
            "id": "u5_g_7",
            "question": "Qual é o comparativo correto para o adjetivo 'good'?",
            "options": [
                "better",
                "more good",
                "best",
                "gooder"
            ],
            "correctIndex": 0,
            "explanation": "'good' é um adjetivo irregular e seu comparativo é 'better'."
        },
        {
            "id": "u5_g_8",
            "question": "Como dizer que sua solução é melhor que a do concorrente?",
            "options": [
                "Our solution is gooder than competitor.",
                "Our solution is better than the competitor's.",
                "Our solution is best than competitor.",
                "Our solution is more good than competitor."
            ],
            "correctIndex": 1,
            "explanation": "'better than' é o comparativo de superioridade correto para good."
        }
    ],
    "listening": [
        {
            "id": "u5_l_1",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: I _____ Italian restaurants for business.",
            "options": [
                "prefers",
                "preferring",
                "prefer"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"I prefer Italian restaurants for business.\" (Eu prefiro restaurantes italianos para negócios.)."
        },
        {
            "id": "u5_l_2",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We like to _____ dinners for clients.",
            "options": [
                "eat",
                "serve",
                "host"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"We like to host dinners for clients.\" (Nós gostamos de oferecer jantares para clientes.)."
        },
        {
            "id": "u5_l_3",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We need some _____ on this contract.",
            "options": [
                "advice",
                "advices",
                "advising"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"We need some advice on this contract.\" (Precisamos de alguns conselhos sobre este contrato.)."
        },
        {
            "id": "u5_l_4",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: How _____ information do you have?",
            "options": [
                "few",
                "much",
                "many"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"How much information do you have?\" (Quanta informação você tem?)."
        },
        {
            "id": "u5_l_5",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: I watch business _____ to learn.",
            "options": [
                "documents",
                "documentary",
                "documentaries"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"I watch business documentaries to learn.\" (Eu assisto documentários de negócios para aprender.)."
        },
        {
            "id": "u5_l_6",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: She enjoys creative marketing _____.",
            "options": [
                "movies",
                "novels",
                "ads"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"She enjoys creative marketing ads.\" (Ela gosta de anúncios de marketing criativos.)."
        },
        {
            "id": "u5_l_7",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: This project is _____ profitable than the last one.",
            "options": [
                "most",
                "er",
                "more"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"This project is more profitable than the last one.\" (Este projeto é mais lucrativo do que o anterior.)."
        },
        {
            "id": "u5_l_8",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: Our software is _____ than the competitor's.",
            "options": [
                "faster",
                "more fast",
                "fastest"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"Our software is faster than the competitor's.\" (Nosso software é mais rápido que o do concorrente.)."
        }
    ],
    "pronunciation": [
        {
            "question": "Como pronunciamos a palavra 'Vegetables' (vegetais)?",
            "options": [
                "vedj-tá-bles",
                "(Recommended) védj-tə-bəlz (3 sílabas)",
                "ve-ge-ta-bles (4 sílabas)",
                "ve-dji-tê-bolz"
            ],
            "correctIndex": 1,
            "explanation": "Vegetables tem apenas 3 sílabas na pronúncia natural: 'védj-tə-bəlz'."
        },
        {
            "question": "Como pronunciamos 'Chocolate'?",
            "options": [
                "tchóc-leit",
                "tchó-co-leit",
                "tcho-co-la-te",
                "tchóc-lãt"
            ],
            "correctIndex": 3,
            "explanation": "Chocolate pronuncia-se 'tchóc-lãt'."
        },
        {
            "question": "Como se pronuncia a palavra 'Salad'?",
            "options": [
                "sæ-lãd",
                "sa-lád",
                "sê-lãd",
                "sa-la-de"
            ],
            "correctIndex": 0,
            "explanation": "Salad pronuncia-se 'sæ-lãd' com D seco final."
        },
        {
            "question": "Como pronunciamos 'Countable'?",
            "options": [
                "côn-ta-ble",
                "cáun-tə-bol",
                "cáun-tê-bol",
                "coun-ta-ble"
            ],
            "correctIndex": 1,
            "explanation": "Countable pronuncia-se 'cáun-tə-bol'."
        },
        {
            "question": "Como se pronuncia 'Expensive'?",
            "options": [
                "es-pên-sif",
                "ecs-pên-siv",
                "es-pen-sivi",
                "ecs-pen-si-ve"
            ],
            "correctIndex": 1,
            "explanation": "Expensive termina com o som de V seco vibrado, e o E final é mudo."
        },
        {
            "question": "Como pronunciamos a palavra 'Best'?",
            "options": [
                "bésti",
                "bêste",
                "bês",
                "bést (com t seco final)"
            ],
            "correctIndex": 3,
            "explanation": "Best finaliza no T seco, sem adicionar vogais fantasmas ao final."
        },
        {
            "question": "Como se pronuncia a palavra 'Worst' (pior)?",
            "options": [
                "wór-sti",
                "wãrst",
                "wost",
                "wãr-sti"
            ],
            "correctIndex": 1,
            "explanation": "Worst pronuncia-se 'wãrst'."
        },
        {
            "question": "Como se pronuncia 'Restaurant' de forma nativa?",
            "options": [
                "res-tó-ran-ti",
                "rés-tã-rãn-te",
                "res-tau-ran-te",
                "rés-trãnt"
            ],
            "correctIndex": 3,
            "explanation": "Restaurant pronuncia-se 'rés-trãnt' no inglês falado normal."
        }
    ]
};

window.QUESTION_POOL_U6 = {
    "vocabulary": [
        {
            "id": "u6_v_1",
            "question": "Qual termo corresponde a: \"Fui / Era / Estive / Estava (passado de To Be para I, He, She, It).\"?",
            "options": [
                "Were",
                "Was",
                "Negotiation",
                "Launched"
            ],
            "correctIndex": 1,
            "explanation": "'Was' significa: Fui / Era / Estive / Estava (passado de To Be para I, He, She, It).."
        },
        {
            "id": "u6_v_2",
            "question": "Qual termo corresponde a: \"Fomos / Éramos / Estiveram / Estavam (passado de To Be para You, We, They).\"?",
            "options": [
                "Was",
                "Were",
                "Launched",
                "Negotiation"
            ],
            "correctIndex": 1,
            "explanation": "'Were' significa: Fomos / Éramos / Estiveram / Estavam (passado de To Be para You, We, They).."
        },
        {
            "id": "u6_v_3",
            "question": "Qual termo corresponde a: \"Ato de negociar termos e preços comerciais.\"?",
            "options": [
                "Was",
                "Were",
                "Launched",
                "Negotiation"
            ],
            "correctIndex": 3,
            "explanation": "'Negotiation' significa: Ato de negociar termos e preços comerciais.."
        },
        {
            "id": "u6_v_4",
            "question": "Qual termo corresponde a: \"Lançou / Lançamos (passado regular do verbo launch).\"?",
            "options": [
                "Negotiation",
                "Was",
                "Launched",
                "Were"
            ],
            "correctIndex": 2,
            "explanation": "'Launched' significa: Lançou / Lançamos (passado regular do verbo launch).."
        },
        {
            "id": "u6_v_5",
            "question": "Qual termo corresponde a: \"Ligou / Chamou (passado regular de call).\"?",
            "options": [
                "Negotiation",
                "Were",
                "Called",
                "Was"
            ],
            "correctIndex": 2,
            "explanation": "'Called' significa: Ligou / Chamou (passado regular de call).."
        },
        {
            "id": "u6_v_6",
            "question": "Qual termo corresponde a: \"Semana passada.\"?",
            "options": [
                "Negotiation",
                "Last week",
                "Was",
                "Were"
            ],
            "correctIndex": 1,
            "explanation": "'Last week' significa: Semana passada.."
        },
        {
            "id": "u6_v_7",
            "question": "Qual termo corresponde a: \"Pronúncia de -ED como 'T' após sons surdos (ex: fixed, worked).\"?",
            "options": [
                "/t/ sound",
                "Negotiation",
                "Was",
                "Were"
            ],
            "correctIndex": 0,
            "explanation": "'/t/ sound' significa: Pronúncia de -ED como 'T' após sons surdos (ex: fixed, worked).."
        },
        {
            "id": "u6_v_8",
            "question": "Qual termo corresponde a: \"Pronúncia de -ED como 'D' após sons sonoros (ex: called, planned).\"?",
            "options": [
                "/d/ sound",
                "Were",
                "Negotiation",
                "Was"
            ],
            "correctIndex": 0,
            "explanation": "'/d/ sound' significa: Pronúncia de -ED como 'D' após sons sonoros (ex: called, planned).."
        }
    ],
    "grammar": [
        {
            "id": "u6_g_1",
            "question": "Qual a forma correta do verbo To Be no passado para 'We'?",
            "options": [
                "are",
                "was",
                "were",
                "been"
            ],
            "correctIndex": 2,
            "explanation": "Para We, You, They no passado simples, o verbo To Be é 'were'."
        },
        {
            "id": "u6_g_2",
            "question": "Como você diria 'O diretor financeiro estava ausente ontem'?",
            "options": [
                "The CFO were absent yesterday.",
                "The CFO was absent yesterday.",
                "The CFO been absent yesterday.",
                "The CFO is absent yesterday."
            ],
            "correctIndex": 1,
            "explanation": "Para 'The CFO' (ele/ela), usamos a forma 'was' no passado."
        },
        {
            "id": "u6_g_3",
            "question": "Como formamos o passado simples da maioria dos verbos regulares em inglês?",
            "options": [
                "Dobrando a primeira letra",
                "Adicionando o sufixo -ed ao final do verbo",
                "Usando o auxiliar did na afirmativa",
                "Alterando a vogal central"
            ],
            "correctIndex": 1,
            "explanation": "Verbos regulares no passado simples afirmativo recebem a terminação '-ed'."
        },
        {
            "id": "u6_g_4",
            "question": "Como relatar 'Ela atualizou o sistema de CRM ontem'?",
            "options": [
                "She updated the CRM yesterday.",
                "She updating CRM yesterday.",
                "She did updated the CRM yesterday.",
                "She update the CRM yesterday."
            ],
            "correctIndex": 0,
            "explanation": "'updated' é o passado simples regular correto de update."
        },
        {
            "id": "u6_g_5",
            "question": "Qual destes verbos no passado tem a terminação -ed pronunciada como uma sílaba extra /id/?",
            "options": [
                "worked",
                "called",
                "presented",
                "helped"
            ],
            "correctIndex": 2,
            "explanation": "Verbos cuja consoante final antes do -ed é 't' ou 'd' (como present) recebem a pronúncia /id/: presented."
        },
        {
            "id": "u6_g_6",
            "question": "Qual palavra tem a pronúncia do -ed com som de /t/?",
            "options": [
                "talked",
                "signed",
                "needed",
                "started"
            ],
            "correctIndex": 0,
            "explanation": "O som de k em talk é surdo, logo a pronúncia é /t/: talked."
        },
        {
            "id": "u6_g_7",
            "question": "Qual é o passado simples correto do verbo 'buy' (comprar)?",
            "options": [
                "boughten",
                "buyed",
                "bought",
                "boughts"
            ],
            "correctIndex": 2,
            "explanation": "'buy' é irregular e seu passado simples é 'bought'."
        },
        {
            "id": "u6_g_8",
            "question": "Como expressar 'Nós fechamos (fizemos) um ótimo negócio ontem'?",
            "options": [
                "We made a great deal yesterday.",
                "We buyed a great deal yesterday.",
                "We did made a great deal yesterday.",
                "We maked a great deal yesterday."
            ],
            "correctIndex": 0,
            "explanation": "O passado do verbo irregular 'make' é 'made': 'We made a great deal'."
        }
    ],
    "listening": [
        {
            "id": "u6_l_1",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: I _____ at the commercial office yesterday.",
            "options": [
                "were",
                "was",
                "been"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"I was at the commercial office yesterday.\" (Eu estava no escritório comercial ontem.)."
        },
        {
            "id": "u6_l_2",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: They _____ ready for the negotiation.",
            "options": [
                "were",
                "are",
                "was"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"They were ready for the negotiation.\" (Eles estavam prontos para a negociação.)."
        },
        {
            "id": "u6_l_3",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We _____ our commercial campaign last week.",
            "options": [
                "launching",
                "launch",
                "launched"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"We launched our commercial campaign last week.\" (Nós lançamos nossa campanha comercial na semana passada.)."
        },
        {
            "id": "u6_l_4",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: He _____ the prospective client yesterday.",
            "options": [
                "calling",
                "called",
                "call"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"He called the prospective client yesterday.\" (Ele ligou para o cliente em potencial ontem.)."
        },
        {
            "id": "u6_l_5",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We _____ the commercial contract details.",
            "options": [
                "fixing",
                "fix",
                "fixed"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"We fixed the commercial contract details.\" (Nós consertamos os detalhes do contrato comercial.)."
        },
        {
            "id": "u6_l_6",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: The manager _____ to sign the deal.",
            "options": [
                "decided",
                "decide",
                "deciding"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"The manager decided to sign the deal.\" (O gerente decidiu assinar o acordo.)."
        },
        {
            "id": "u6_l_7",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We _____ the client at the conference.",
            "options": [
                "met",
                "meeting",
                "meet"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"We met the client at the conference.\" (Nós encontramos o cliente na conferência.)."
        },
        {
            "id": "u6_l_8",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: They _____ their solutions to a big group.",
            "options": [
                "sold",
                "selling",
                "sell"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"They sold their solutions to a big group.\" (Eles venderam suas soluções para um grande grupo.)."
        }
    ],
    "pronunciation": [
        {
            "question": "Qual é a pronúncia do -ED na palavra 'worked'?",
            "options": [
                "/ed/",
                "/ɪd/ (sílaba extra)",
                "/d/ (som de D seco)",
                "/t/ (som de T seco)"
            ],
            "correctIndex": 3,
            "explanation": "Worked termina com som surdo (/k/), logo o -ED soa como /t/."
        },
        {
            "question": "Qual é a pronúncia do -ED na palavra 'played'?",
            "options": [
                "/ed/",
                "/d/ (som de D seco)",
                "/ɪd/ (sílaba extra)",
                "/t/ (som de T seco)"
            ],
            "correctIndex": 1,
            "explanation": "Played termina com som sonoro (vogal), logo o -ED soa como /d/."
        },
        {
            "question": "Qual é a pronúncia do -ED na palavra 'started'?",
            "options": [
                "/ed/",
                "/d/ (som de D seco)",
                "/ɪd/ (sílaba extra)",
                "/t/ (som de T seco)"
            ],
            "correctIndex": 2,
            "explanation": "Started termina com o som /t/, exigindo a sílaba extra /ɪd/."
        },
        {
            "question": "Qual é a pronúncia do -ED na palavra 'decided'?",
            "options": [
                "/t/ (som de T seco)",
                "/ed/",
                "/d/ (som de D seco)",
                "/ɪd/ (sílaba extra)"
            ],
            "correctIndex": 3,
            "explanation": "Decided termina com o som /d/, exigindo a sílaba extra /ɪd/."
        },
        {
            "question": "Como pronunciamos a palavra 'Was'?",
            "options": [
                "wãs (com som de S)",
                "wãz (com som de Z)",
                "uás",
                "uáz"
            ],
            "correctIndex": 1,
            "explanation": "Was pronuncia-se 'wãz' com o som de Z no final."
        },
        {
            "question": "Como pronunciamos a palavra 'Were'?",
            "options": [
                "wãr",
                "wér",
                "uér",
                "uêr"
            ],
            "correctIndex": 0,
            "explanation": "Were pronuncia-se 'wãr' (rima com her)."
        },
        {
            "question": "Como se pronuncia 'Irregular'?",
            "options": [
                "i-re-gu-lar",
                "i-rê-gu-lar",
                "i-ré-gyu-lar",
                "ai-re-gyu-lar"
            ],
            "correctIndex": 2,
            "explanation": "Irregular pronuncia-se 'i-ré-gyu-lar'."
        },
        {
            "question": "Como se pronuncia a palavra 'Gone' (particípio de go)?",
            "options": [
                "gõ-ni",
                "góni",
                "gôn",
                "gón"
            ],
            "correctIndex": 3,
            "explanation": "Gone pronuncia-se 'gón' (o E final é mudo)."
        }
    ]
};

window.QUESTION_POOL_U7 = {
    "vocabulary": [
        {
            "id": "u7_v_1",
            "question": "Qual termo corresponde a: \"Verbo auxiliar usado para expressar decisões futuras espontâneas ou promessas.\"?",
            "options": [
                "Tomorrow",
                "Contract",
                "Will",
                "Be going to"
            ],
            "correctIndex": 2,
            "explanation": "'Will' significa: Verbo auxiliar usado para expressar decisões futuras espontâneas ou promessas.."
        },
        {
            "id": "u7_v_2",
            "question": "Qual termo corresponde a: \"Amanhã.\"?",
            "options": [
                "Will",
                "Contract",
                "Tomorrow",
                "Be going to"
            ],
            "correctIndex": 2,
            "explanation": "'Tomorrow' significa: Amanhã.."
        },
        {
            "id": "u7_v_3",
            "question": "Qual termo corresponde a: \"Contrato legal de venda ou prestação de serviços.\"?",
            "options": [
                "Contract",
                "Be going to",
                "Will",
                "Tomorrow"
            ],
            "correctIndex": 0,
            "explanation": "'Contract' significa: Contrato legal de venda ou prestação de serviços.."
        },
        {
            "id": "u7_v_4",
            "question": "Qual termo corresponde a: \"Estrutura usada para planos futuros e intenções pré-definidas.\"?",
            "options": [
                "Will",
                "Tomorrow",
                "Be going to",
                "Contract"
            ],
            "correctIndex": 2,
            "explanation": "'Be going to' significa: Estrutura usada para planos futuros e intenções pré-definidas.."
        },
        {
            "id": "u7_v_5",
            "question": "Qual termo corresponde a: \"Visitar um cliente ou parceiro comercial.\"?",
            "options": [
                "Visit",
                "Will",
                "Tomorrow",
                "Contract"
            ],
            "correctIndex": 0,
            "explanation": "'Visit' significa: Visitar um cliente ou parceiro comercial.."
        },
        {
            "id": "u7_v_6",
            "question": "Qual termo corresponde a: \"Apresentar ou demonstrar algo.\"?",
            "options": [
                "Present",
                "Contract",
                "Will",
                "Tomorrow"
            ],
            "correctIndex": 0,
            "explanation": "'Present' significa: Apresentar ou demonstrar algo.."
        },
        {
            "id": "u7_v_7",
            "question": "Qual termo corresponde a: \"Chuvoso / Ensolarado.\"?",
            "options": [
                "Tomorrow",
                "Rainy / Sunny",
                "Will",
                "Contract"
            ],
            "correctIndex": 1,
            "explanation": "'Rainy / Sunny' significa: Chuvoso / Ensolarado.."
        },
        {
            "id": "u7_v_8",
            "question": "Qual termo corresponde a: \"Inverno / Verão.\"?",
            "options": [
                "Winter / Summer",
                "Tomorrow",
                "Will",
                "Contract"
            ],
            "correctIndex": 0,
            "explanation": "'Winter / Summer' significa: Inverno / Verão.."
        }
    ],
    "grammar": [
        {
            "id": "u7_g_1",
            "question": "Como se faz a negação de 'will'?",
            "options": [
                "don't will",
                "willn't",
                "not will",
                "won't"
            ],
            "correctIndex": 3,
            "explanation": "A contração de 'will not' é 'won't'."
        },
        {
            "id": "u7_g_2",
            "question": "Como prometer formalmente ao cliente que você enviará a proposta comercial amanhã?",
            "options": [
                "I'll sending you proposal tomorrow.",
                "I send you proposal tomorrow.",
                "I going to send proposal tomorrow.",
                "I will send you the proposal tomorrow."
            ],
            "correctIndex": 3,
            "explanation": "Para promessas comerciais em conversações de negócios, usamos 'will': 'I will send'."
        },
        {
            "id": "u7_g_3",
            "question": "Qual é a estrutura correta para expressar planos futuros com 'going to' para 'They'?",
            "options": [
                "They will going to study.",
                "They are going to study.",
                "They is going to study.",
                "They going to study."
            ],
            "correctIndex": 1,
            "explanation": "A estrutura exige: sujeito + be (are) + going to + verbo."
        },
        {
            "id": "u7_g_4",
            "question": "Como expressar o plano agendado de fazer uma demonstração do produto às 14h?",
            "options": [
                "We will demonstrate the product at 2 PM.",
                "We are going to demonstrate the product at 2 PM.",
                "We demonstrate the product at 2 PM.",
                "We are demonstrate the product."
            ],
            "correctIndex": 1,
            "explanation": "Para planos estruturados e agendas corporativas, usamos 'going to': 'We are going to'."
        },
        {
            "id": "u7_g_5",
            "question": "Como se pergunta 'Como está o tempo?' em inglês?",
            "options": [
                "What is the climate?",
                "How is the weather doing?",
                "What's the weather like?",
                "Is it hot?"
            ],
            "correctIndex": 2,
            "explanation": "'What's the weather like?' é a expressão padrão para perguntar sobre as condições do tempo."
        },
        {
            "id": "u7_g_6",
            "question": "Como justificar comercialmente um atraso devido a problemas climáticos extremos?",
            "options": [
                "No delivery because of rain.",
                "We don't deliver in winter.",
                "The weather is bad, sorry.",
                "We have delays due to severe weather conditions."
            ],
            "correctIndex": 3,
            "explanation": "We have delays due to severe weather conditions é o posicionamento de logística padrão corporativo."
        },
        {
            "id": "u7_g_7",
            "question": "Como se conjuga 'There to Be' no futuro simples?",
            "options": [
                "There will be",
                "There are going to be",
                "There will have",
                "There is going to be"
            ],
            "correctIndex": 0,
            "explanation": "A conjugação padrão de existir no futuro é 'There will be' para singular e plural."
        },
        {
            "id": "u7_g_8",
            "question": "Como garantir ao investidor que haverá recursos na sala de reuniões?",
            "options": [
                "There will be a projector in the meeting room.",
                "We will have been a projector.",
                "There is a projector in the room.",
                "Have a projector in the room."
            ],
            "correctIndex": 0,
            "explanation": "There will be indica a existência futura ('haverá') de forma correta."
        }
    ],
    "listening": [
        {
            "id": "u7_l_1",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We _____ sign the new contract tomorrow.",
            "options": [
                "would",
                "will",
                "going"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"We will sign the new contract tomorrow.\" (Nós assinaremos o novo contrato amanhã.)."
        },
        {
            "id": "u7_l_2",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: I _____ call the client after the meeting.",
            "options": [
                "am",
                "do",
                "will"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"I will call the client after the meeting.\" (Eu ligarei para o cliente após a reunião.)."
        },
        {
            "id": "u7_l_3",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We are _____ to visit the prospective client.",
            "options": [
                "go",
                "going",
                "will"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"We are going to visit the prospective client.\" (Nós vamos visitar o cliente em potencial (planejado).)."
        },
        {
            "id": "u7_l_4",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: He is _____ to present our sales software.",
            "options": [
                "gone",
                "will",
                "going"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"He is going to present our sales software.\" (Ele vai apresentar o nosso software de vendas.)."
        },
        {
            "id": "u7_l_5",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: It will be _____ during our trade expo.",
            "options": [
                "rainy",
                "raining",
                "rain"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"It will be rainy during our trade expo.\" (Estará chuvoso durante a nossa exposição comercial.)."
        },
        {
            "id": "u7_l_6",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ is our best sales season.",
            "options": [
                "Summer",
                "Winter",
                "Spring"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"Winter is our best sales season.\" (O inverno é a nossa melhor temporada de vendas.)."
        },
        {
            "id": "u7_l_7",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: The showroom will _____ open tomorrow.",
            "options": [
                "be",
                "is",
                "been"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"The showroom will be open tomorrow.\" (O showroom estará aberto amanhã.)."
        },
        {
            "id": "u7_l_8",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: There _____ be several international buyers.",
            "options": [
                "are",
                "will",
                "have"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"There will be several international buyers.\" (Haverá vários compradores internacionais.)."
        }
    ],
    "pronunciation": [
        {
            "question": "Como pronunciamos a contração 'I'll'?",
            "options": [
                "áil (L velar)",
                "aili",
                "él",
                "áio"
            ],
            "correctIndex": 0,
            "explanation": "I'll pronuncia-se 'áil' com o L velar encostando no céu da boca."
        },
        {
            "question": "Como pronunciamos a palavra 'Won't' (negativa de will)?",
            "options": [
                "uôunt",
                "uónt",
                "wónt",
                "wôunt"
            ],
            "correctIndex": 3,
            "explanation": "Won't pronuncia-se 'wôunt'."
        },
        {
            "question": "Como pronunciamos 'Gonna' (contração de going to)?",
            "options": [
                "go-na",
                "gun-na",
                "góna",
                "gôna"
            ],
            "correctIndex": 2,
            "explanation": "Gonna pronuncia-se 'góna'."
        },
        {
            "question": "Como se pronuncia 'Weather' (tempo/clima)?",
            "options": [
                "wé-ðər (com TH sonoro)",
                "wé-ter",
                "wé-fer",
                "wé-ðar"
            ],
            "correctIndex": 0,
            "explanation": "Weather pronuncia-se 'wé-ðər'."
        },
        {
            "question": "Como se pronuncia a palavra 'Autumn' (outono)?",
            "options": [
                "ó-tumni",
                "au-tuni",
                "au-tumn",
                "ó-təm (o N final é mudo)"
            ],
            "correctIndex": 3,
            "explanation": "Autumn pronuncia-se 'ó-təm', o N final é mudo."
        },
        {
            "question": "Como se pronuncia 'Airport'?",
            "options": [
                "air-por-ti",
                "air-pór-ti",
                "êr-pórt",
                "êr-põrt"
            ],
            "correctIndex": 2,
            "explanation": "Airport pronuncia-se 'êr-pórt'."
        },
        {
            "question": "Como se pronuncia 'Hotel' em inglês?",
            "options": [
                "róu-tel",
                "ó-tel",
                "rou-tél (sílaba tônica final)",
                "o-tél"
            ],
            "correctIndex": 2,
            "explanation": "Hotel tem a sílaba tônica final e o H aspirado: 'rou-tél'."
        },
        {
            "question": "Como se pronuncia 'Flight' (voo)?",
            "options": [
                "fleigt",
                "fláigt",
                "fláit (o GH é mudo)",
                "fláiti"
            ],
            "correctIndex": 2,
            "explanation": "Flight pronuncia-se 'fláit', o GH é silencioso."
        }
    ]
};

window.QUESTION_POOL_U8 = {
    "vocabulary": [
        {
            "id": "u8_v_1",
            "question": "Qual termo corresponde a: \"Ligando ou telefonando (Present Continuous).\"?",
            "options": [
                "Sales proposal",
                "Calling",
                "Was / Were writing",
                "Preparing"
            ],
            "correctIndex": 1,
            "explanation": "'Calling' significa: Ligando ou telefonando (Present Continuous).."
        },
        {
            "id": "u8_v_2",
            "question": "Qual termo corresponde a: \"Preparando propostas ou apresentações.\"?",
            "options": [
                "Calling",
                "Sales proposal",
                "Preparing",
                "Was / Were writing"
            ],
            "correctIndex": 2,
            "explanation": "'Preparing' significa: Preparando propostas ou apresentações.."
        },
        {
            "id": "u8_v_3",
            "question": "Qual termo corresponde a: \"Proposta comercial formal de valores.\"?",
            "options": [
                "Preparing",
                "Was / Were writing",
                "Sales proposal",
                "Calling"
            ],
            "correctIndex": 2,
            "explanation": "'Sales proposal' significa: Proposta comercial formal de valores.."
        },
        {
            "id": "u8_v_4",
            "question": "Qual termo corresponde a: \"Estava / Estavam escrevendo (Past Continuous).\"?",
            "options": [
                "Was / Were writing",
                "Calling",
                "Preparing",
                "Sales proposal"
            ],
            "correctIndex": 0,
            "explanation": "'Was / Were writing' significa: Estava / Estavam escrevendo (Past Continuous).."
        },
        {
            "id": "u8_v_5",
            "question": "Qual termo corresponde a: \"No transcorrer da chamada telefônica.\"?",
            "options": [
                "Sales proposal",
                "Calling",
                "Preparing",
                "During the call"
            ],
            "correctIndex": 3,
            "explanation": "'During the call' significa: No transcorrer da chamada telefônica.."
        },
        {
            "id": "u8_v_6",
            "question": "Qual termo corresponde a: \"Verba financeira disponível.\"?",
            "options": [
                "Budget",
                "Sales proposal",
                "Calling",
                "Preparing"
            ],
            "correctIndex": 0,
            "explanation": "'Budget' significa: Verba financeira disponível.."
        },
        {
            "id": "u8_v_7",
            "question": "Qual termo corresponde a: \"Estará realizando / organizando (Future Continuous).\"?",
            "options": [
                "Preparing",
                "Will be hosting",
                "Sales proposal",
                "Calling"
            ],
            "correctIndex": 1,
            "explanation": "'Will be hosting' significa: Estará realizando / organizando (Future Continuous).."
        },
        {
            "id": "u8_v_8",
            "question": "Qual termo corresponde a: \"Negociando propostas comerciais.\"?",
            "options": [
                "Calling",
                "Negotiating",
                "Preparing",
                "Sales proposal"
            ],
            "correctIndex": 1,
            "explanation": "'Negotiating' significa: Negociando propostas comerciais.."
        }
    ],
    "grammar": [
        {
            "id": "u8_g_1",
            "question": "Qual a estrutura padrão do Present Continuous?",
            "options": [
                "Sujeito + have + particípio",
                "Sujeito + verbo base",
                "Sujeito + will + verbo",
                "Sujeito + verbo To Be + verbo-ING"
            ],
            "correctIndex": 3,
            "explanation": "Forma-se com o verbo To Be correspondente + o verbo principal com terminação '-ing'."
        },
        {
            "id": "u8_g_2",
            "question": "Como relatar ao gerente que você está finalizando o acordo agora?",
            "options": [
                "I has been finalizing agreement.",
                "I finalizing agreement.",
                "I am finalizing the agreement right now.",
                "I will finalizing agreement."
            ],
            "correctIndex": 2,
            "explanation": "Ação acontecendo no momento da fala exige Present Continuous: 'I am finalizing'."
        },
        {
            "id": "u8_g_3",
            "question": "Qual conjunção é comumente usada para introduzir uma ação que interrompe outra no passado contínuo?",
            "options": [
                "while",
                "so",
                "because",
                "when"
            ],
            "correctIndex": 3,
            "explanation": "Usamos 'when' (quando) para introduzir uma ação curta que interrompeu outra que estava acontecendo."
        },
        {
            "id": "u8_g_4",
            "question": "Como dizer 'Nós estávamos apresentando a proposta comercial quando o cliente chegou'?",
            "options": [
                "We presenting proposal when client arrived.",
                "We was presenting proposal when client arrived.",
                "We were presenting the proposal when the client arrived.",
                "We did presenting proposal when client arrived."
            ],
            "correctIndex": 2,
            "explanation": "Para We usamos 'were' + verbo-ing: 'We were presenting'."
        },
        {
            "id": "u8_g_5",
            "question": "Qual a estrutura correta do Future Continuous?",
            "options": [
                "will + verbo base",
                "going to be + verbo",
                "will have + particípio",
                "will be + verbo-ING"
            ],
            "correctIndex": 3,
            "explanation": "Forma-se com 'will be' + verbo principal no gerúndio (com terminação -ing)."
        },
        {
            "id": "u8_g_6",
            "question": "Como descrever o que você estará fazendo amanhã de manhã em prol de um cliente?",
            "options": [
                "I will presenting our commercial solution.",
                "I will be presenting our commercial solution tomorrow morning.",
                "I will be present commercial solution.",
                "I present commercial solution tomorrow morning."
            ],
            "correctIndex": 1,
            "explanation": "'I will be presenting' (estarei apresentando) é a conjugação do futuro contínuo correto."
        },
        {
            "id": "u8_g_7",
            "question": "Como formamos o imperativo negativo em inglês?",
            "options": [
                "Usando 'Do not' (ou 'Don't') + verbo na forma base",
                "Adicionando -ing ao verbo",
                "Usando 'No' + verbo",
                "Usando 'Not' + verbo"
            ],
            "correctIndex": 0,
            "explanation": "O imperativo negativo padrão usa a estrutura 'Do not / Don't' + verbo no infinitivo sem to."
        },
        {
            "id": "u8_g_8",
            "question": "Como dar uma instrução negativa de não alterar os preços padrão?",
            "options": [
                "Don't change the standard prices.",
                "No change standard prices.",
                "Change not standard prices.",
                "Not change the standard prices."
            ],
            "correctIndex": 0,
            "explanation": "A instrução proibitiva padrão de negócios usa 'Don't change'."
        }
    ],
    "listening": [
        {
            "id": "u8_l_1",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: The commercial team is _____ clients now.",
            "options": [
                "call",
                "called",
                "calling"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"The commercial team is calling clients now.\" (A equipe comercial está ligando para clientes agora.)."
        },
        {
            "id": "u8_l_2",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: We are _____ the sales proposal.",
            "options": [
                "prepares",
                "prepare",
                "preparing"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"We are preparing the sales proposal.\" (Nós estamos preparando a proposta de vendas.)."
        },
        {
            "id": "u8_l_3",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: I _____ writing the sales report when they called.",
            "options": [
                "was",
                "were",
                "been"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"I was writing the sales report when they called.\" (Eu estava escrevendo o relatório de vendas quando eles ligaram.)."
        },
        {
            "id": "u8_l_4",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: They were _____ the budget during the call.",
            "options": [
                "discuss",
                "discussing",
                "discussed"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"They were discussing the budget during the call.\" (Eles estavam discutindo o orçamento durante a ligação.)."
        },
        {
            "id": "u8_l_5",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: This time tomorrow we will _____ hosting the commercial event.",
            "options": [
                "be",
                "been",
                "is"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"This time tomorrow we will be hosting the commercial event.\" (A esta hora amanhã estaremos realizando o evento comercial.)."
        },
        {
            "id": "u8_l_6",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: They will be _____ during the afternoon.",
            "options": [
                "negotiated",
                "negotiating",
                "negotiate"
            ],
            "correctIndex": 1,
            "explanation": "A frase correta é: \"They will be negotiating during the afternoon.\" (Eles estarão negociando durante a tarde.)."
        },
        {
            "id": "u8_l_7",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: _____ the pricing tables immediately.",
            "options": [
                "Reviewing",
                "Reviews",
                "Review"
            ],
            "correctIndex": 2,
            "explanation": "A frase correta é: \"Review the pricing tables immediately.\" (Revise as tabelas de preços imediatamente.)."
        },
        {
            "id": "u8_l_8",
            "question": "Selecione a palavra correta para preencher a lacuna da frase: Do not _____ proposals without client approval.",
            "options": [
                "send",
                "sends",
                "sending"
            ],
            "correctIndex": 0,
            "explanation": "A frase correta é: \"Do not send proposals without client approval.\" (Não envie propostas sem a aprovação do cliente.)."
        }
    ],
    "pronunciation": [
        {
            "question": "Como pronunciamos o sufixo -ING nas palavras?",
            "options": [
                "-íngue",
                "-iŋ (G final é mudo)",
                "-in",
                "-íngui"
            ],
            "correctIndex": 1,
            "explanation": "No sufixo -ing, o G é mudo e o som é um N nasal (/iŋ/)."
        },
        {
            "question": "Como se pronuncia 'Headache' (dor de cabeça)?",
            "options": [
                "hé-dei-tchi",
                "ri-dé-a-tchi",
                "ré-dei-tchi",
                "hé-deic (som de K final)"
            ],
            "correctIndex": 3,
            "explanation": "Headache pronuncia-se 'hé-deic' com som de K no final e H aspirado."
        },
        {
            "question": "Como se pronuncia 'Cough' (tosse)?",
            "options": [
                "cóg",
                "có-gui",
                "cóf (o gh tem som de F)",
                "cofi"
            ],
            "correctIndex": 2,
            "explanation": "Cough pronuncia-se 'cóf', onde o GH tem som de F."
        },
        {
            "question": "Como se pronuncia a palavra 'Stomachache'?",
            "options": [
                "es-to-ma-ca-che",
                "stã-mã-quei-tchi",
                "stó-ma-quei-tchi",
                "stã-mã-quêic"
            ],
            "correctIndex": 3,
            "explanation": "Stomachache pronuncia-se 'stã-mã-quêic'."
        },
        {
            "question": "Como se pronuncia 'Heart' (coração)?",
            "options": [
                "hârt (com H aspirado)",
                "hãrt",
                "hért",
                "ãrt"
            ],
            "correctIndex": 0,
            "explanation": "Heart pronuncia-se 'hârt' com som de A aberto e H aspirado."
        },
        {
            "question": "Como se pronuncia a palavra 'Body' (corpo)?",
            "options": [
                "bó-de",
                "bã-di",
                "bó-dy",
                "bó-di"
            ],
            "correctIndex": 3,
            "explanation": "Body pronuncia-se 'bó-di'."
        },
        {
            "question": "Como pronunciamos 'Breathe' (respirar)?",
            "options": [
                "brí-ti",
                "bríθ (com TH surdo)",
                "briz",
                "bríð (com TH sonoro e E mudo)"
            ],
            "correctIndex": 3,
            "explanation": "Breathe pronuncia-se 'bríð' com o TH sonoro vibrado."
        },
        {
            "question": "Como se pronuncia 'Emergency'?",
            "options": [
                "i-mér-djen-ci",
                "e-mãr-djen-si",
                "e-mer-gen-cia",
                "i-mãr-djen-si"
            ],
            "correctIndex": 3,
            "explanation": "Emergency pronuncia-se 'i-mãr-djen-si' no inglês."
        }
    ]
};


