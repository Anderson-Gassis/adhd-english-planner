/**
 * CURRICULUM_DATA
 * Complete CEFR syllabus (A1 to C1/C2) with 75 interactive micro-sprints.
 * Built for ADHD cognitive engagement: Bionic reading style (<b>bold</b> prefixes) and click-to-speak (🔊) triggers.
 */

const CURRICULUM_DATA = {
    "A1": [
        {
            title: "O Código de Sobrevivência (Greetings & Identity)",
            lessons: [
                {
                    id: "a1_m1_l1",
                    title: "Corporate Greetings vs. Casual",
                    content: `
                        <p>No <b>ambiente corporativo</b>, a forma como você inicia uma conversa dita o tom da relação profissional. Existem diferenças cruciais entre saudações <b>casuais</b> e <b>formais</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Formal Greetings (Clientes & Diretores):</strong><br>
                            - "Good morning, Mr. Davis. How are you?" <button class="speak-btn" data-text="Good morning, Mr. Davis. How are you?">🔊</button><br>
                            - "Hello everyone. Welcome to the meeting." <button class="speak-btn" data-text="Hello everyone. Welcome to the meeting.">🔊</button>
                        </div>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--primary-glow);">Casual Greetings (Colegas de Equipe):</strong><br>
                            - "Hey guys, ready for the standup?" <button class="speak-btn" data-text="Hey guys, ready for the standup?">🔊</button><br>
                            - "Hi there, how is it going?" <button class="speak-btn" data-text="Hi there, how is it going?">🔊</button>
                        </div>
                        <p><b>Dica TDAH:</b> Evite usar saudações excessivamente formais como "Dear Sir" em chats rápidos como o Slack; prefira "Hi [Name]" ou "Hello team".</p>
                    `,
                    quiz: {
                        question: "Qual saudação é ideal para iniciar uma reunião formal com um cliente externo?",
                        options: [
                            "Hey guys, what's up?",
                            "Good morning everyone. Welcome.",
                            "Hi team, let's start.",
                            "Yo, ready?"
                        ],
                        correctIndex: 1,
                        explanation: "'Good morning everyone. Welcome.' é a alternativa mais polida e profissional para começar uma reunião formal."
                    }
                },
                {
                    id: "a1_m1_l2",
                    title: "Spelling & Phonetic Alphabet",
                    content: `
                        <p>Ao <b>soletrar nomes</b>, e-mails ou senhas em uma chamada profissional, a confusão de letras é muito comum. Para resolver isso, usamos o <b>alfabeto fonético internacional</b> simplificado.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Palavras de Apoio para Letras Confusas:</strong><br>
                            - <b>A</b> as in Apple <button class="speak-btn" data-text="A as in Apple">🔊</button><br>
                            - <b>E</b> as in Email <button class="speak-btn" data-text="E as in Email">🔊</button><br>
                            - <b>I</b> as in Internet <button class="speak-btn" data-text="I as in Internet">🔊</button><br>
                            - <b>G</b> as in Google <button class="speak-btn" data-text="G as in Google">🔊</button><br>
                            - <b>J</b> as in John <button class="speak-btn" data-text="J as in John">🔊</button><br>
                            - <b>Y</b> as in Yellow <button class="speak-btn" data-text="Y as in Yellow">🔊</button>
                        </div>
                        <p>Para o símbolo <b>@</b> dizemos <b>at</b>, e para o ponto <b>.</b> em endereços dizemos <b>dot</b>.</p>
                        <p>Exemplo de e-mail: <b>info@firm.com</b> seria soletrado como: "info <b>at</b> firm <b>dot</b> com" <button class="speak-btn" data-text="info at firm dot com">🔊</button>.</p>
                    `,
                    quiz: {
                        question: "Como você deve ler o e-mail 'sales@tech.com' em inglês?",
                        options: [
                            "sales point tech point com",
                            "sales at tech dot com",
                            "sales to tech dot com",
                            "sales at tech point com"
                        ],
                        correctIndex: 1,
                        explanation: "Usamos 'at' para '@' e 'dot' para o ponto '.' em e-mails."
                    }
                },
                {
                    id: "a1_m1_l3",
                    title: "Countries & Nationalities",
                    content: `
                        <p>Em equipes <b>multiculturais</b>, a primeira pergunta comum é saber de onde a pessoa fala. Aprender a expressar seu <b>país de origem</b> e <b>nacionalidade</b> evita atritos iniciais.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrases to Use:</strong><br>
                            - "I am from Brazil. I am Brazilian." <button class="speak-btn" data-text="I am from Brazil. I am Brazilian.">🔊</button><br>
                            - "She is from the United States. She is American." <button class="speak-btn" data-text="She is from the United States. She is American.">🔊</button><br>
                            - "Our developer is from Germany. He is German." <button class="speak-btn" data-text="Our developer is from Germany. He is German.">🔊</button>
                        </div>
                        <p>Repare que as <b>nacionalidades</b> e <b>países</b> em inglês são sempre escritos com a <b>letra inicial maiúscula</b> (ex: Brazilian, German).</p>
                    `,
                    quiz: {
                        question: "Complete a frase corretamente: 'Our design office is in Munich. The team is _____.'",
                        options: [
                            "German",
                            "germanian",
                            "Germany",
                            "Germanyan"
                        ],
                        correctIndex: 0,
                        explanation: "Munich fica na Alemanha (Germany), logo o time é de nacionalidade alemã (German)."
                    }
                },
                {
                    id: "a1_m1_l4",
                    title: "Introducing Yourself",
                    content: `
                        <p>Uma <b>auto-apresentação profissional</b> deve ser direta, confiante e focada em quem você é na corporação. Siga esta fórmula rápida:</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Pitch de Sobrevivência A1:</strong><br>
                            "Hi, my name is Alex. <b>I am</b> a software developer. <b>I work at</b> ADHD Tech. Nice to meet you all." <button class="speak-btn" data-text="Hi, my name is Alex. I am a software developer. I work at ADHD Tech. Nice to meet you all.">🔊</button>
                        </div>
                        <p>Lembre-se de usar a preposição <b>at</b> ou <b>for</b> para citar a empresa e <b>in</b> para citar o setor ou cidade.</p>
                    `,
                    quiz: {
                        question: "Como você diz 'Eu trabalho na Microsoft como desenvolvedor' em inglês?",
                        options: [
                            "I work on Microsoft as developer",
                            "I work at Microsoft as a developer",
                            "I am developer in Microsoft",
                            "I working at Microsoft developer"
                        ],
                        correctIndex: 1,
                        explanation: "Usamos 'work at [Company]' e 'as a [Profession]' para descrever nosso cargo."
                    }
                },
                {
                    id: "a1_m1_l5",
                    title: "Basic Workplace Objects",
                    content: `
                        <p>Conhecer os <b>nomes de ferramentas e objetos</b> de uso diário no escritório acelera a comunicação técnica e evita gestos desajeitados em reuniões de vídeo.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Vocabulário Vital:</strong><br>
                            - <b>Laptop / Computer</b>: Computador de trabalho. <button class="speak-btn" data-text="Laptop">🔊</button><br>
                            - <b>Headset</b>: Fone com microfone. <button class="speak-btn" data-text="Headset">🔊</button><br>
                            - <b>Desk</b>: Mesa de trabalho. <button class="speak-btn" data-text="Desk">🔊</button><br>
                            - <b>Notebook</b>: Caderno de anotações (não confundir com o laptop!). <button class="speak-btn" data-text="Notebook">🔊</button><br>
                            - <b>Keyboard & Mouse</b>: Teclado e mouse. <button class="speak-btn" data-text="Keyboard and Mouse">🔊</button>
                        </div>
                        <p>Exemplo de uso: "I need a new <b>headset</b> for my Zoom calls." <button class="speak-btn" data-text="I need a new headset for my Zoom calls.">🔊</button></p>
                    `,
                    quiz: {
                        question: "Se você precisa de um fone de ouvido com microfone para reuniões, você pede um...",
                        options: [
                            "notebook",
                            "desk",
                            "headset",
                            "keyboard"
                        ],
                        correctIndex: 2,
                        explanation: "O termo correto para o fone com microfone usado em escritórios e reuniões é 'headset'."
                    }
                }
            ]
        },
        {
            title: "A Engrenagem do Tempo (Daily Routine & Present Simple)",
            lessons: [
                {
                    id: "a1_m2_l1",
                    title: "Days of the Week & Hours",
                    content: `
                        <p>Agendar <b>alinhamentos semanais</b> exige que você conheça bem os dias da semana e a marcação de tempo em inglês.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Dias Úteis (Workdays):</strong><br>
                            Monday, Tuesday, Wednesday, Thursday, Friday. <button class="speak-btn" data-text="Monday, Tuesday, Wednesday, Thursday, Friday">🔊</button>
                        </div>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--primary-glow);">Preposições Corretas:</strong><br>
                            - Usamos <b>on</b> para dias da semana: "on Monday" <button class="speak-btn" data-text="on Monday">🔊</button>.<br>
                            - Usamos <b>at</b> para horários específicos: "at 9:00 AM" <button class="speak-btn" data-text="at nine AM">🔊</button>.
                        </div>
                        <p>Exemplo: "Our sprint meeting is <b>on Wednesday at 2:00 PM</b>." <button class="speak-btn" data-text="Our sprint meeting is on Wednesday at 2:00 PM.">🔊</button></p>
                    `,
                    quiz: {
                        question: "Preencha com as preposições adequadas: 'The meeting is _____ Tuesday _____ 10 AM.'",
                        options: [
                            "at / on",
                            "on / at",
                            "in / at",
                            "on / in"
                        ],
                        correctIndex: 1,
                        explanation: "Usamos 'on' para dias da semana (on Tuesday) e 'at' para horas específicas (at 10 AM)."
                    }
                },
                {
                    id: "a1_m2_l2",
                    title: "Verb To Be & Jobs",
                    content: `
                        <p>O <b>Verbo To Be</b> serve para identificar estados, quem você é e a sua profissão atual.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Present conjugations:</strong><br>
                            - I <b>am</b> (I'm)<br>
                            - He / She / It <b>is</b> (He's / She's)<br>
                            - We / You / They <b>are</b> (We're / They're)
                        </div>
                        <p>No inglês corporativo, sempre usamos <b>artigo indefinido (a/an)</b> antes de cargos no singular:</p>
                        <p>- "I am <b>a</b> project manager." <button class="speak-btn" data-text="I am a project manager.">🔊</button><br>
                        - "She is <b>an</b> analyst." <button class="speak-btn" data-text="She is an analyst.">🔊</button> (usamos 'an' porque 'analyst' inicia com som de vogal).</p>
                    `,
                    quiz: {
                        question: "Escolha a frase gramaticalmente correta em inglês:",
                        options: [
                            "I am manager.",
                            "She are an engineer.",
                            "I am a developer.",
                            "They is analysts."
                        ],
                        correctIndex: 2,
                        explanation: "'I am a developer' conjuga o to be corretamente ('am') e inclui o artigo 'a' antes da profissão."
                    }
                },
                {
                    id: "a1_m2_l3",
                    title: "Simple Present - Work Habits",
                    content: `
                        <p>O <b>Simple Present</b> descreve hábitos, rotinas corporativas e fatos permanentes. Para verbos de ação comuns:</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Verbos Operacionais Comuns:</strong><br>
                            - "I <b>check</b> my emails every morning." <button class="speak-btn" data-text="I check my emails every morning.">🔊</button><br>
                            - "We <b>write</b> reports weekly." <button class="speak-btn" data-text="We write reports weekly.">🔊</button><br>
                            - "They <b>join</b> the daily standup." <button class="speak-btn" data-text="They join the daily standup.">🔊</button>
                        </div>
                        <p>Atenção à regra do <b>He/She/It</b>: adicionamos <b>-s</b> ou <b>-es</b> ao final do verbo:</p>
                        <p>"She <b>checks</b> the code." <button class="speak-btn" data-text="She checks the code.">🔊</button> ou "He <b>writes</b> the document." <button class="speak-btn" data-text="He writes the document.">🔊</button>.</p>
                    `,
                    quiz: {
                        question: "Como fica o verbo na frase: 'He _____ (to send) the daily reports.'?",
                        options: [
                            "send",
                            "sends",
                            "sending",
                            "sendes"
                        ],
                        correctIndex: 1,
                        explanation: "Para a 3ª pessoa do singular (He), adicionamos '-s' ao verbo principal no presente, resultando em 'sends'."
                    }
                },
                {
                    id: "a1_m2_l4",
                    title: "Present Simple Negatives",
                    content: `
                        <p>Para expressar o que você ou o time <b>não fazem</b> na rotina de trabalho, utilizamos os auxiliares negativos <b>don't</b> e <b>doesn't</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Estruturação Prática:</strong><br>
                            - I / You / We / They + <b>don't</b> + verbo: "We <b>don't</b> work on weekends." <button class="speak-btn" data-text="We don't work on weekends.">🔊</button><br>
                            - He / She / It + <b>doesn't</b> + verbo base (sem -s): "He <b>doesn't</b> write tests." <button class="speak-btn" data-text="He doesn't write tests.">🔊</button>
                        </div>
                        <p><b>Nota ADHD:</b> Lembre que após o <b>doesn't</b>, o verbo perde o "-s" da afirmativa: "She checks" vira "She doesn't check" <button class="speak-btn" data-text="She doesn't check">🔊</button>.</p>
                    `,
                    quiz: {
                        question: "Selecione a frase negativa correta:",
                        options: [
                            "He don't work here.",
                            "She doesn't works on Saturdays.",
                            "We doesn't have a meetings.",
                            "They don't write technical documentations."
                        ],
                        correctIndex: 3,
                        explanation: "'They don't write...' está correto porque 'They' pede o auxiliar 'don't' e o verbo fica na forma base."
                    }
                },
                {
                    id: "a1_m2_l5",
                    title: "Simple Questions",
                    content: `
                        <p>Para obter informações de rotina ou pedir confirmações, iniciamos as perguntas com <b>Do</b> ou <b>Does</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Formulação:</strong><br>
                            - "<b>Do</b> you work in Technology?" <button class="speak-btn" data-text="Do you work in Technology?">🔊</button><br>
                            - "<b>Does</b> she need the file?" <button class="speak-btn" data-text="Does she need the file?">🔊</button>
                        </div>
                        <p>Respostas curtas de impacto imediato:<br>
                        - "Yes, I <b>do</b>." / "No, I <b>don't</b>." <button class="speak-btn" data-text="Yes, I do. No, I don't.">🔊</button><br>
                        - "Yes, he <b>does</b>." / "No, he <b>doesn't</b>." <button class="speak-btn" data-text="Yes, he does. No, he doesn't.">🔊</button></p>
                    `,
                    quiz: {
                        question: "Como você pergunta para seu chefe se ele usa o software de tarefas?",
                        options: [
                            "Does you use the task software?",
                            "Do you use the task software?",
                            "Use you the task software?",
                            "You do use the task software?"
                        ],
                        correctIndex: 1,
                        explanation: "Com o pronome 'you', a pergunta no presente inicia com o auxiliar 'Do'."
                    }
                }
            ]
        },
        {
            title: "O Menu do Dia (Survival Vocabulary)",
            lessons: [
                {
                    id: "a1_m3_l1",
                    title: "Office Directions",
                    content: `
                        <p>Para se locomover de forma independente dentro de uma sede física da corporação internacional, aprenda a pedir e compreender direções de caminhos simples.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Vocabulário de Orientação:</strong><br>
                            - <b>Go straight</b>: Siga reto. <button class="speak-btn" data-text="Go straight">🔊</button><br>
                            - <b>Turn left / Turn right</b>: Vire à esquerda / direita. <button class="speak-btn" data-text="Turn left. Turn right.">🔊</button><br>
                            - <b>Next to</b>: Ao lado de.<br>
                            - <b>Where is the meeting room?</b>: Onde fica a sala de reunião? <button class="speak-btn" data-text="Where is the meeting room?">🔊</button>
                        </div>
                        <p>Exemplo de resposta: "Go straight and turn left. The room is next to the elevator." <button class="speak-btn" data-text="Go straight and turn left. The room is next to the elevator.">🔊</button></p>
                    `,
                    quiz: {
                        question: "Se a sala de reuniões fica ao lado da lanchonete, dizemos que ela está:",
                        options: [
                            "next to the cafeteria",
                            "turn right from cafeteria",
                            "under the cafeteria",
                            "straight in cafeteria"
                        ],
                        correctIndex: 0,
                        explanation: "'Next to' significa literalmente 'ao lado de', adequado para a indicação."
                    }
                },
                {
                    id: "a1_m3_l2",
                    title: "Airport Directions",
                    content: `
                        <p>Em aeroportos, encontrar portões de embarque, balcões de informações ou esteiras de bagagem pode causar estresse. Use estas frases-foco:</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Termos Importantes:</strong><br>
                            - <b>Gate</b>: Portão de embarque.<br>
                            - <b>Baggage claim</b>: Restituição de bagagem. <button class="speak-btn" data-text="Baggage claim">🔊</button><br>
                            - <b>Where is gate 15?</b>: Onde fica o portão 15? <button class="speak-btn" data-text="Where is gate 15?">🔊</button><br>
                            - "Excuse me, where is immigration?" <button class="speak-btn" data-text="Excuse me, where is immigration?">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Onde os passageiros retiram suas malas despachadas após o voo?",
                        options: [
                            "Immigration counter",
                            "Baggage claim area",
                            "Security control",
                            "Boarding gate"
                        ],
                        correctIndex: 1,
                        explanation: "Baggage claim significa 'esteira de bagagem' ou 'área de restituição de malas'."
                    }
                },
                {
                    id: "a1_m3_l3",
                    title: "Numbers & Money",
                    content: `
                        <p>Saber falar de <b>valores, custos e números</b> é crucial em qualquer compra, pagamento ou transação básica de viagem de negócios.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Formas de Falar Valores:</strong><br>
                            - $15.50: "Fifteen dollars and fifty cents" <button class="speak-btn" data-text="Fifteen dollars and fifty cents">🔊</button><br>
                            - $2,500: "Two thousand five hundred dollars" <button class="speak-btn" data-text="Two thousand five hundred dollars">🔊</button><br>
                            - "How much is this?" (Quanto custa isso?) <button class="speak-btn" data-text="How much is this?">🔊</button>
                        </div>
                        <p>Métodos de pagamento: <b>by credit card</b> (por cartão) ou <b>in cash</b> (em dinheiro).</p>
                    `,
                    quiz: {
                        question: "Como se pergunta o valor de um software de tarefas em inglês?",
                        options: [
                            "How money is this software?",
                            "How cost this software?",
                            "How much is this software?",
                            "What price has this software?"
                        ],
                        correctIndex: 2,
                        explanation: "A estrutura padrão para perguntar preços em inglês é 'How much is [something]?'."
                    }
                },
                {
                    id: "a1_m3_l4",
                    title: "Dates & Ordinal Numbers",
                    content: `
                        <p>Datas de reuniões ou prazos de entrega utilizam números ordinais em inglês. A ordem da data é sempre <b>Mês / Dia</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Números Ordinais Importantes:</strong><br>
                            - 1st (first) <button class="speak-btn" data-text="first">🔊</button><br>
                            - 2nd (second) <button class="speak-btn" data-text="second">🔊</button><br>
                            - 3rd (third) <button class="speak-btn" data-text="third">🔊</button><br>
                            - 4th (fourth) <button class="speak-btn" data-text="fourth">🔊</button>
                        </div>
                        <p>Exemplo de data por extenso: <b>October 3rd</b> (3 de outubro) dizemos: "October <b>third</b>" <button class="speak-btn" data-text="October third">🔊</button>.</p>
                        <p>Para anos como 2026, dividimos em dois blocos de dezenas: "twenty twenty-six" <button class="speak-btn" data-text="twenty twenty-six">🔊</button>.</p>
                    `,
                    quiz: {
                        question: "Como você escreve por extenso a data de entrega 'June 1st'?",
                        options: [
                            "June one",
                            "June first",
                            "June once",
                            "June of one"
                        ],
                        correctIndex: 1,
                        explanation: "Datas utilizam números ordinais em inglês. 1st é abreviação para 'first'."
                    }
                },
                {
                    id: "a1_m3_l5",
                    title: "Coffee Break & Food",
                    content: `
                        <p>Para socializar em intervalos ou pedir um café rápido em hotéis e aeroportos, utilize a estrutura polida <b>I would like...</b> (Gostaria de...).</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrases to order:</strong><br>
                            - "I would like a coffee, please." <button class="speak-btn" data-text="I would like a coffee, please.">🔊</button><br>
                            - "Can I have a bottle of water?" <button class="speak-btn" data-text="Can I have a bottle of water?">🔊</button><br>
                            - "Is this gluten-free?" (Isso é sem glúten?) <button class="speak-btn" data-text="Is this gluten-free?">🔊</button>
                        </div>
                        <p>Abreviamos "I would like" para "I'd like" <button class="speak-btn" data-text="I'd like">🔊</button> de forma natural.</p>
                    `,
                    quiz: {
                        question: "Qual frase expressa de maneira profissional e polida o pedido de um expresso?",
                        options: [
                            "Give me an espresso.",
                            "I want an espresso now.",
                            "I would like an espresso, please.",
                            "I like espresso, thank you."
                        ],
                        correctIndex: 2,
                        explanation: "'I would like... please' é a maneira mais polida e aceita no ambiente internacional para fazer pedidos de comida ou bebida."
                    }
                }
            ]
        }
    ],
    "A2": [
        {
            title: "O Passageiro Internacional (Travel & Directions)",
            lessons: [
                {
                    id: "a2_m1_l1",
                    title: "Airport Check-in & Baggage",
                    content: `
                        <p>Ao chegar ao aeroporto para uma viagem de negócios internacional, você precisará passar pelo balcão de check-in e descrever o status das suas bagagens.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Diálogo Típico:</strong><br>
                            - Agente: "Are you checking any bags today?" <button class="speak-btn" data-text="Are you checking any bags today?">🔊</button><br>
                            - Passageiro: "Yes, I have one suitcase to check and one carry-on bag." <button class="speak-btn" data-text="Yes, I have one suitcase to check and one carry-on bag.">🔊</button><br>
                            - Agente: "Place it on the scale, please." <button class="speak-btn" data-text="Place it on the scale, please.">🔊</button>
                        </div>
                        <p><b>carry-on bag</b>: Mala de bordo (que vai com você na cabine).<br><b>suitcase to check</b>: Mala grande para despachar.</p>
                    `,
                    quiz: {
                        question: "Como chamamos a mala menor que levamos conosco no interior do avião?",
                        options: [
                            "Checked bag",
                            "Carry-on bag",
                            "Heavy weight baggage",
                            "Cargo suitcase"
                        ],
                        correctIndex: 1,
                        explanation: "'Carry-on bag' (ou hand luggage) é o termo oficial para bagagens de cabine."
                    }
                },
                {
                    id: "a2_m1_l2",
                    title: "Customs & Immigration",
                    content: `
                        <p>A entrevista da imigração no exterior é direta. O oficial de segurança precisa certificar seu <b>motivo de viagem</b> e tempo de estadia.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Common Questions & Answers:</strong><br>
                            - Officer: "What is the purpose of your visit?" <button class="speak-btn" data-text="What is the purpose of your visit?">🔊</button><br>
                            - You: "I am here <b>on business</b>. I am attending a tech conference." <button class="speak-btn" data-text="I am here on business. I am attending a tech conference.">🔊</button><br>
                            - Officer: "Where are you staying?" <button class="speak-btn" data-text="Where are you staying?">🔊</button><br>
                            - You: "At the Hilton Hotel downtown." <button class="speak-btn" data-text="At the Hilton Hotel downtown.">🔊</button>
                        </div>
                        <p><b>Dica TDAH:</b> Lembre de dizer <b>on business</b> (a negócios) e nunca "for business".</p>
                    `,
                    quiz: {
                        question: "Selecione a resposta ideal para a pergunta: 'What is the purpose of your visit?'",
                        options: [
                            "I am here for make a tourism.",
                            "I am here on business for a project.",
                            "I visit my friends in company.",
                            "Yes, I want to travel."
                        ],
                        correctIndex: 1,
                        explanation: "'I am here on business...' responde diretamente e usa a preposição correta 'on business'."
                    }
                },
                {
                    id: "a2_m1_l3",
                    title: "Hotel Check-in & Issues",
                    content: `
                        <p>Fazer o check-in exige a apresentação da confirmação de reserva. Caso o quarto apresente falhas, você deve reportar de forma simples e firme.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrases to check-in:</strong><br>
                            - "Hi, I have a reservation under the name Anderson." <button class="speak-btn" data-text="Hi, I have a reservation under the name Anderson.">🔊</button>
                        </div>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--danger);">Reclamações Comuns (Workplace Issues):</strong><br>
                            - "The Wi-Fi in my room is not working." <button class="speak-btn" data-text="The Wi-Fi in my room is not working.">🔊</button><br>
                            - "There are no clean towels in the bathroom." <button class="speak-btn" data-text="There are no clean towels in the bathroom.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Como você reporta que o ar condicionado do quarto não está funcionando?",
                        options: [
                            "The air conditioner is off.",
                            "The air conditioner is not working.",
                            "I don't like air conditioner.",
                            "Air conditioner is broken forever."
                        ],
                        correctIndex: 1,
                        explanation: "'Is not working' é a expressão mais natural e profissional para reportar qualquer mau funcionamento em hotéis ou escritórios."
                    }
                },
                {
                    id: "a2_m1_l4",
                    title: "Asking for Help in the Street",
                    content: `
                        <p>Se você se perder no caminho para um escritório ou conferência internacional, use perguntas diretas para se reorientar rapidamente.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Estrutura Polida:</strong><br>
                            - "Excuse me, how do I get to the train station?" <button class="speak-btn" data-text="Excuse me, how do I get to the train station?">🔊</button><br>
                            - "Is there a pharmacy near here?" (Há farmácia por perto?) <button class="speak-btn" data-text="Is there a pharmacy near here?">🔊</button><br>
                            - "Where is the nearest subway entrance?" <button class="speak-btn" data-text="Where is the nearest subway entrance?">🔊</button>
                        </div>
                        <p><b>nearest</b>: O mais próximo de onde você está.</p>
                    `,
                    quiz: {
                        question: "Qual é a forma polida de iniciar uma pergunta de direção na rua com um desconhecido?",
                        options: [
                            "Hey you, tell me...",
                            "Where is...",
                            "Excuse me, how do I get to...",
                            "Help me now, please..."
                        ],
                        correctIndex: 2,
                        explanation: "Começar com 'Excuse me' e depois perguntar o trajeto ('how do I get to...') demonstra polidez e é socialmente esperado."
                    }
                },
                {
                    id: "a2_m1_l5",
                    title: "Public Transportation",
                    content: `
                        <p>A mobilidade urbana global nas grandes sedes corporativas é baseada em metrô, trens ou ônibus expressos.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Termos Operacionais:</strong><br>
                            - <b>Subway / Metro</b>: Metrô.<br>
                            - <b>Fare</b>: Tarifa de transporte.<br>
                            - <b>One-way ticket</b>: Passagem de ida. <button class="speak-btn" data-text="One-way ticket">🔊</button><br>
                            - <b>Round-trip ticket</b>: Passagem de ida e volta. <button class="speak-btn" data-text="Round-trip ticket">🔊</button>
                        </div>
                        <p>Exemplo de uso: "I need a <b>one-way ticket</b> to London Victoria station." <button class="speak-btn" data-text="I need a one-way ticket to London Victoria station.">🔊</button></p>
                    `,
                    quiz: {
                        question: "Se você quer comprar um bilhete de metrô apenas para ir ao escritório (sem volta), você pede por um:",
                        options: [
                            "Round-trip ticket",
                            "One-way ticket",
                            "Free ticket",
                            "Bus pass ticket"
                        ],
                        correctIndex: 1,
                        explanation: "'One-way ticket' é a passagem padrão de ida simples."
                    }
                }
            ]
        },
        {
            title: "A Linha do Tempo (Past Simple & Life Events)",
            lessons: [
                {
                    id: "a2_m2_l1",
                    title: "Regular Verbs in the Past",
                    content: `
                        <p>Para reportar o que você <b>concluiu ontem</b> na sua jornada diária, usamos o passado simples. Os verbos regulares recebem a terminação <b>-ed</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Exemplos Regulares no Trabalho:</strong><br>
                            - work -> <b>worked</b>: "Yesterday I worked until late." <button class="speak-btn" data-text="Yesterday I worked until late.">🔊</button><br>
                            - finish -> <b>finished</b>: "I finished the presentation." <button class="speak-btn" data-text="I finished the presentation.">🔊</button><br>
                            - deploy -> <b>deployed</b>: "We deployed the hotfix." <button class="speak-btn" data-text="We deployed the hotfix.">🔊</button>
                        </div>
                        <p><b>Atenção à pronúncia do ED:</b> O 'e' quase nunca é pronunciado como vogal isolada; dizemos /workt/ e /finisht/.</p>
                    `,
                    quiz: {
                        question: "Complete a frase corretamente: 'Last night, she _____ the system metrics.'",
                        options: [
                            "analyse",
                            "analyseds",
                            "analyzed",
                            "analysing"
                        ],
                        correctIndex: 2,
                        explanation: "'Analyzed' é o passado simples regular do verbo analyze (regular, recebe '-ed')."
                    }
                },
                {
                    id: "a2_m2_l2",
                    title: "Irregular Verbs in the Past",
                    content: `
                        <p>Muitos dos verbos de ação mais comuns no ambiente de negócios são <b>irregulares</b> e mudam de forma no passado.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Verbos Irregulares Vitais:</strong><br>
                            - send -> <b>sent</b>: "I sent the email." <button class="speak-btn" data-text="I sent the email.">🔊</button><br>
                            - write -> <b>wrote</b>: "He wrote the documentation." <button class="speak-btn" data-text="He wrote the documentation.">🔊</button><br>
                            - run -> <b>ran</b>: "We ran the test scripts." <button class="speak-btn" data-text="We ran the test scripts.">🔊</button><br>
                            - meet -> <b>met</b>: "I met the new client." <button class="speak-btn" data-text="I met the new client.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual é a forma de passado do verbo 'write' na frase: 'Yesterday, the CTO _____ a post.'?",
                        options: [
                            "writed",
                            "wrote",
                            "written",
                            "wroted"
                        ],
                        correctIndex: 1,
                        explanation: "O verbo 'write' é irregular no passado simples e assume a forma 'wrote'."
                    }
                },
                {
                    id: "a2_m2_l3",
                    title: "Structuring Past Experiences",
                    content: `
                        <p>Ao contar histórias ou relatar o progresso de tarefas concluídas, use <b>marcadores temporais de passado</b> como: <b>yesterday</b>, <b>ago</b> e <b>last</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Time Expressions:</strong><br>
                            - "two days <b>ago</b>" (dois dias atrás) <button class="speak-btn" data-text="two days ago">🔊</button><br>
                            - "<b>last</b> week" (semana passada) <button class="speak-btn" data-text="last week">🔊</button><br>
                            - "in 2024" (em 2024) <button class="speak-btn" data-text="in twenty twenty-four">🔊</button>
                        </div>
                        <p>Exemplo de reporte de sprint: "We completed the migration <b>three days ago</b>." <button class="speak-btn" data-text="We completed the migration three days ago.">🔊</button></p>
                    `,
                    quiz: {
                        question: "Como traduzimos 'Fizemos a auditoria de segurança na semana passada'?",
                        options: [
                            "We made the audit last week.",
                            "We did the audit in the last week.",
                            "We do the audit ago one week.",
                            "We did the audit last week."
                        ],
                        correctIndex: 3,
                        explanation: "'We did the audit last week' usa 'did' (passado de do) e a expressão temporal direta 'last week' sem o artigo 'the'."
                    }
                },
                {
                    id: "a2_m2_l4",
                    title: "Telling your Career Story",
                    content: `
                        <p>Conseguir resumir sua trajetória de carreira em inglês de forma direta ajuda a captar novas oportunidades internacionais.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Modelo de Pitch Curto:</strong><br>
                            "I studied computer science. I started my career in 2020. I worked as a frontend engineer for three years, and then I joined this company." <button class="speak-btn" data-text="I studied computer science. I started my career in 2020. I worked as a frontend engineer for three years, and then I joined this company.">🔊</button>
                        </div>
                        <p>Use o verbo <b>started</b> para início de carreira e <b>worked as</b> para seu cargo.</p>
                    `,
                    quiz: {
                        question: "Se você quer dizer que sua carreira começou em 2021, a frase ideal é:",
                        options: [
                            "I start my career since 2021.",
                            "I started my career in 2021.",
                            "I had start my career in 2021.",
                            "I am starting career at 2021."
                        ],
                        correctIndex: 1,
                        explanation: "'I started my career in 2021' está correto porque utiliza passado simples 'started' e a preposição de tempo 'in' para anos."
                    }
                },
                {
                    id: "a2_m2_l5",
                    title: "Past Simple Questions",
                    content: `
                        <p>Para interrogar sobre tarefas do passado em uma reunião diária (daily standup), iniciamos a frase com o auxiliar de passado <b>Did</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Formação de Perguntas:</strong><br>
                            - "<b>Did</b> you finish the design?" <button class="speak-btn" data-text="Did you finish the design?">🔊</button><br>
                            - "What time <b>did</b> they deploy the project?" <button class="speak-btn" data-text="What time did they deploy the project?">🔊</button>
                        </div>
                        <p><b>Nota Crítica:</b> Ao usar <b>Did</b>, o verbo principal da pergunta permanece em sua forma <b>base</b> (sem -ed ou irregularidade).</p>
                    `,
                    quiz: {
                        question: "Qual pergunta abaixo está gramaticalmente correta em inglês?",
                        options: [
                            "Did they sent the client email?",
                            "Did they send the client email?",
                            "Sent they the client email?",
                            "Does they sent the client email?"
                        ],
                        correctIndex: 1,
                        explanation: "Com o auxiliar de passado 'Did', o verbo 'send' retorna ao infinitivo sem 'to' (send)."
                    }
                }
            ]
        },
        {
            title: "O Mercado e o Consumo (Shopping & Money)",
            lessons: [
                {
                    id: "a2_m3_l1",
                    title: "Making Purchases",
                    content: `
                        <p>Em compras corporativas simples (licenças de software, passagens), é comum necessitar confirmar faturas (<b>invoices</b>) e recibos (<b>receipts</b>).</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Frases para Compras:</strong><br>
                            - "I want to purchase the annual plan." <button class="speak-btn" data-text="I want to purchase the annual plan.">🔊</button><br>
                            - "Can you send the invoice to our accounting department?" <button class="speak-btn" data-text="Can you send the invoice to our accounting department?">🔊</button><br>
                            - "We need a receipt for tax deduction purposes." <button class="speak-btn" data-text="We need a receipt for tax deduction purposes.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Como se chama a 'fatura' de cobrança profissional em inglês?",
                        options: [
                            "receipt",
                            "ticket",
                            "invoice",
                            "bill card"
                        ],
                        correctIndex: 2,
                        explanation: "'Invoice' é o termo oficial corporativo para fatura ou nota fiscal de cobrança de serviços."
                    }
                },
                {
                    id: "a2_m3_l2",
                    title: "Asking and Negotiating Prices",
                    content: `
                        <p>Negociar pequenos descontos em compras corporativas de maior volume é comum. Use termos que mostram intenção de parceria comercial.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Uso de Termos:</strong><br>
                            - "Do you offer any corporate discounts?" <button class="speak-btn" data-text="Do you offer any corporate discounts?">🔊</button><br>
                            - "What is the final price for 50 licenses?" <button class="speak-btn" data-text="What is the final price for 50 licenses?">🔊</button><br>
                            - "Is this price negotiable?" <button class="speak-btn" data-text="Is this price negotiable?">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual pergunta demonstra intenção de desconto para empresas?",
                        options: [
                            "Give me discount now.",
                            "Do you offer any corporate discounts?",
                            "Is this cheap or expensive?",
                            "Can I pay in cash?"
                        ],
                        correctIndex: 1,
                        explanation: "'Do you offer any corporate discounts?' é a maneira polida e padrão de iniciar uma negociação corporativa."
                    }
                },
                {
                    id: "a2_m3_l3",
                    title: "Comparatives",
                    content: `
                        <p>Para tomar decisões técnicas, comparamos as ferramentas do mercado. Usamos <b>comparativos</b> para qualificar o que é superior.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Adjetivos Curtos (recebem -er + than):</strong><br>
                            - "This software is <b>faster than</b> that one." <button class="speak-btn" data-text="This software is faster than that one.">🔊</button><br>
                            - "The old server is <b>cheaper than</b> the new cloud." <button class="speak-btn" data-text="The old server is cheaper than the new cloud.">🔊</button>
                        </div>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--primary-glow);">Adjetivos Longos (usam more + adjetivo + than):</strong><br>
                            - "This system is <b>more expensive than</b> ours." <button class="speak-btn" data-text="This system is more expensive than ours.">🔊</button>
                        </div>
                        <p>Adjetivo irregular importante: good -> <b>better than</b> (melhor que).</p>
                    `,
                    quiz: {
                        question: "Complete a frase: 'Version B is _____ (fast) than Version A.'",
                        options: [
                            "more fast",
                            "faster",
                            "fastest",
                            "more faster"
                        ],
                        correctIndex: 1,
                        explanation: "Como 'fast' é um adjetivo curto de uma sílaba, seu comparativo correto é 'faster'."
                    }
                },
                {
                    id: "a2_m3_l4",
                    title: "Superlatives",
                    content: `
                        <p>Quando descrevemos o <b>melhor</b>, o <b>pior</b> ou a opção <b>mais avançada</b> do mercado, usamos superlativos.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Adjetivos Curtos (recebem the + -est):</strong><br>
                            - "This is the <b>fastest</b> database on the market." <button class="speak-btn" data-text="This is the fastest database on the market.">🔊</button>
                        </div>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--primary-glow);">Adjetivos Longos (usam the most + adjetivo):</strong><br>
                            - "This is <b>the most expensive</b> service plan." <button class="speak-btn" data-text="This is the most expensive service plan.">🔊</button>
                        </div>
                        <p>Irregulares: the best (o melhor) / the worst (o pior).</p>
                    `,
                    quiz: {
                        question: "Como você diz em inglês: 'Essa é a melhor ferramenta para nossa equipe'?",
                        options: [
                            "This is the more good tool for our team.",
                            "This is the best tool for our team.",
                            "This is the most good tool for our team.",
                            "This is the better tool for our team."
                        ],
                        correctIndex: 1,
                        explanation: "O superlativo de 'good' é irregular e assume a forma 'the best'."
                    }
                },
                {
                    id: "a2_m3_l5",
                    title: "Expressing Preferences",
                    content: `
                        <p>Para escolher uma opção técnica ou justificar decisões em reuniões, utilize estruturas profissionais de preferência.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrases:</strong><br>
                            - "I <b>prefer</b> AWS <b>to</b> Google Cloud." <button class="speak-btn" data-text="I prefer AWS to Google Cloud.">🔊</button> (Atenção: usamos 'prefer X to Y' e não 'than').<br>
                            - "I <b>would rather</b> use Python." <button class="speak-btn" data-text="I would rather use Python.">🔊</button> (Eu prefiro/preferiria usar Python).
                        </div>
                    `,
                    quiz: {
                        question: "Qual preposição usamos com o verbo 'prefer' ao comparar duas coisas? Ex: 'I prefer this design _____ that one.'",
                        options: [
                            "than",
                            "to",
                            "for",
                            "more"
                        ],
                        correctIndex: 1,
                        explanation: "A regência do verbo 'prefer' exige a preposição 'to' ao ligar dois itens comparados."
                    }
                }
            ]
        }
    ],
    "B1": [
        {
            title: "Conectando os Pontos (Present Perfect & Life Experiences)",
            lessons: [
                {
                    id: "b1_m1_l1",
                    title: "Introducing Present Perfect",
                    content: `
                        <p>O <b>Present Perfect</b> é o divisor de águas do intermediário. Ele conecta o passado com o presente, sendo usado para ações em um tempo <b>indefinido</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Estrutura:</strong><br>
                            Have / Has + Verbo no Particípio Passado (3ª coluna).
                        </div>
                        <p>Exemplo profissional: "I <b>have finished</b> the task." <button class="speak-btn" data-text="I have finished the task.">🔊</button> (Não importa a hora ou o dia exato, o foco é na conclusão da tarefa agora).</p>
                        <p>Comparação de impacto: "I finished yesterday" vs. "I have finished".</p>
                    `,
                    quiz: {
                        question: "Selecione a frase correta que usa o Present Perfect:",
                        options: [
                            "I have finished the presentation yesterday.",
                            "She has deployed the database code.",
                            "We had finished the meeting already.",
                            "They has worked here before."
                        ],
                        correctIndex: 1,
                        explanation: "'She has deployed...' está correto. Com 'she' usamos 'has' e o particípio 'deployed' sem marcador temporal específico."
                    }
                },
                {
                    id: "b1_m1_l2",
                    title: "Present Perfect vs. Past Simple",
                    content: `
                        <p>A maior dúvida dos estudantes de inglês. Lembre-se desta regra visual simples para seu cérebro com TDAH:</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Past Simple (Ação Datada/Finalizada):</strong><br>
                            - "We migrated the database <b>last month</b>." <button class="speak-btn" data-text="We migrated the database last month.">🔊</button>
                        </div>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--primary-glow);">Present Perfect (Tempo não especificado/Ação conecta ao Presente):</strong><br>
                            - "We <b>have migrated</b> the database." <button class="speak-btn" data-text="We have migrated the database.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Selecione a frase correta para descrever uma ação que aconteceu ontem:",
                        options: [
                            "I have sent the invoice yesterday.",
                            "I sent the invoice yesterday.",
                            "I was sent the invoice yesterday.",
                            "I have send the invoice yesterday."
                        ],
                        correctIndex: 1,
                        explanation: "Quando a data é especificada ('yesterday'), devemos usar estritamente o Past Simple ('sent')."
                    }
                },
                {
                    id: "b1_m1_l3",
                    title: "Life Experiences & Travel",
                    content: `
                        <p>Use o Present Perfect para falar sobre <b>países visitados</b>, <b>cursos feitos</b> ou <b>projetos vividos</b> sem datar as ocorrências.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Examples:</strong><br>
                            - "I <b>have been to</b> the United States three times." <button class="speak-btn" data-text="I have been to the United States three times.">🔊</button> (Eu estive nos EUA 3 vezes).<br>
                            - "She <b>has worked</b> with international clients before." <button class="speak-btn" data-text="She has worked with international clients before.">🔊</button> (Ela já trabalhou com clientes internacionais antes).
                        </div>
                        <p>Usamos a palavra <b>ever</b> em perguntas: "Have you <b>ever</b> managed a remote team?" <button class="speak-btn" data-text="Have you ever managed a remote team?">🔊</button></p>
                    `,
                    quiz: {
                        question: "Como você pergunta a um colega se ele já trabalhou com o framework Angular na vida?",
                        options: [
                            "Did you ever work with Angular?",
                            "Have you ever worked with Angular?",
                            "Have you ever work with Angular?",
                            "Do you work with Angular in past?"
                        ],
                        correctIndex: 1,
                        explanation: "'Have you ever worked...?' é a estrutura padrão do Present Perfect para perguntar sobre experiências de vida."
                    }
                },
                {
                    id: "b1_m1_l4",
                    title: "Duration using For and Since",
                    content: `
                        <p>Para descrever <b>atividades que começaram no passado e continuam até hoje</b> (como seu emprego atual), usamos Present Perfect acompanhado de <b>for</b> ou <b>since</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">For (Duração):</strong><br>
                            - "I have worked here <b>for</b> five years." <button class="speak-btn" data-text="I have worked here for five years.">🔊</button>
                        </div>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--primary-glow);">Since (Início):</strong><br>
                            - "I have worked here <b>since</b> 2021." <button class="speak-btn" data-text="I have worked here since 2021.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Preencha a lacuna: 'We have used this CRM tool _____ three months.'",
                        options: [
                            "since",
                            "for",
                            "ago",
                            "during"
                        ],
                        correctIndex: 1,
                        explanation: "'Three months' indica uma duração de tempo, logo usamos a preposição 'for'."
                    }
                },
                {
                    id: "b1_m1_l5",
                    title: "Shadowing Practice Module",
                    content: `
                        <p>O <b>Shadowing</b> consiste em ouvir um nativo e tentar repetir imediatamente por cima da voz dele, mantendo o mesmo ritmo e entonação. Ajuda o cérebro TDAH a mapear o sotaque de forma auditiva.</p>
                        <p>Escute as frases e repita em voz alta:</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            - "I've been working on this project for a while." <button class="speak-btn" data-text="I've been working on this project for a while.">🔊</button><br>
                            - "Honestly, we haven't decided the final layout yet." <button class="speak-btn" data-text="Honestly, we haven't decided the final layout yet.">🔊</button><br>
                            - "Have you seen the new sprint backlog?" <button class="speak-btn" data-text="Have you seen the new sprint backlog?">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "O que significa 'I haven't decided the final layout yet'?",
                        options: [
                            "Eu já decidi o layout final.",
                            "Eu não decidi o layout final ainda.",
                            "Eu nunca vou decidir o layout final.",
                            "Eu decidi o layout final ontem."
                        ],
                        correctIndex: 1,
                        explanation: "'Haven't... yet' indica que a ação de decidir ainda não foi concluída até o presente momento."
                    }
                }
            ]
        },
        {
            title: "O Próximo Passo (Future Plans & Predictions)",
            lessons: [
                {
                    id: "b1_m2_l1",
                    title: "Future with Will",
                    content: `
                        <p>Utilizamos o auxiliar <b>Will</b> para expressar decisões tomadas na hora da fala, promessas corporativas ou previsões de mercado incertas.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Examples:</strong><br>
                            - "I <b>will send</b> the report immediately." <button class="speak-btn" data-text="I will send the report immediately.">🔊</button> (Decisão espontânea na reunião).<br>
                            - "We <b>will launch</b> version 2 next year." <button class="speak-btn" data-text="We will launch version 2 next year.">🔊</button> (Previsão geral).
                        </div>
                        <p>Abreviamos "I will" como "I'll" <button class="speak-btn" data-text="I'll">🔊</button> em e-mails e falas casuais.</p>
                    `,
                    quiz: {
                        question: "Qual frase expressa uma decisão de momento tomada em uma reunião?",
                        options: [
                            "I am going to check the server load.",
                            "I checked the server load yesterday.",
                            "I'll check the server load right now.",
                            "I check the server load always."
                        ],
                        correctIndex: 2,
                        explanation: "'I'll check...' expressa uma decisão instantânea usando a contração de 'will'."
                    }
                },
                {
                    id: "b1_m2_l2",
                    title: "Future with Going to",
                    content: `
                        <p>Utilizamos <b>Going to</b> para planos de carreira estruturados e intenções <b>previamente agendadas</b>.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Estrutura:</strong><br>
                            Subject + Be (am/is/are) + <b>going to</b> + Verbo base.
                        </div>
                        <p>Exemplo: "We <b>are going to migrate</b> to AWS next month." <button class="speak-btn" data-text="We are going to migrate to AWS next month.">🔊</button> (Isso já foi decidido e planejado pela diretoria).</p>
                    `,
                    quiz: {
                        question: "Complete a lacuna indicando um plano fechado: 'She _____ present the dashboard tomorrow.'",
                        options: [
                            "is going to",
                            "will to",
                            "go to",
                            "going to"
                        ],
                        correctIndex: 0,
                        explanation: "Com 'she', usamos a forma correspondente do verbo to be ('is') seguida de 'going to'."
                    }
                },
                {
                    id: "b1_m2_l3",
                    title: "Career Goals",
                    content: `
                        <p>Durante entrevistas ou feedbacks de alinhamento com seu mentor, saber expressar suas metas de carreira é essencial.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Metas de Carreira:</strong><br>
                            - "In the next two years, I want to lead a design team." <button class="speak-btn" data-text="In the next two years, I want to lead a design team.">🔊</button><br>
                            - "I plan to obtain a Scrum master certification." <button class="speak-btn" data-text="I plan to obtain a Scrum master certification.">🔊</button><br>
                            - "I intend to work for an international enterprise." <button class="speak-btn" data-text="I intend to work for an international enterprise.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual alternativa expressa corretamente a intenção de tirar uma certificação em inglês?",
                        options: [
                            "I plan to get a certification.",
                            "I make a certification future.",
                            "I will to pass certification.",
                            "I am certificate my skill."
                        ],
                        correctIndex: 0,
                        explanation: "'I plan to get a certification' é estruturalmente correto e soa muito profissional."
                    }
                },
                {
                    id: "b1_m2_l4",
                    title: "Making Market Predictions",
                    content: `
                        <p>Prever tendências de negócios ou comportamento de usuários é comum em reuniões estratégicas de produto.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Expressões Úteis:</strong><br>
                            - "I believe AI will transform customer support." <button class="speak-btn" data-text="I believe AI will transform customer support.">🔊</button><br>
                            - "Our customer base is likely to grow." <button class="speak-btn" data-text="Our customer base is likely to grow.">🔊</button> (provavelmente crescerá).<br>
                            - "Cloud costs are expected to decrease." <button class="speak-btn" data-text="Cloud costs are expected to decrease.">🔊</button> (espera-se que caiam).
                        </div>
                    `,
                    quiz: {
                        question: "O que expressa a frase: 'The inflation is likely to rise.'?",
                        options: [
                            "A inflação com certeza vai subir.",
                            "A inflação provavelmente vai subir.",
                            "A inflação subiu ontem.",
                            "A inflação não pode subir."
                        ],
                        correctIndex: 1,
                        explanation: "'Is likely to...' expressa probabilidade ou forte tendência de acontecer."
                    }
                },
                {
                    id: "b1_m2_l5",
                    title: "Scheduling Future Meetings",
                    content: `
                        <p>Para agendar e convocar o time para discussões em inglês, usamos verbos de convite e preposições de tempo precisas.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Verbos de Agendamento:</strong><br>
                            - <b>schedule</b>: Agendar.<br>
                            - <b>postpone / push back</b>: Adiar.<br>
                            - <b>bring forward</b>: Antecipar.<br>
                            - "Let's schedule our next alignment meeting for Friday." <button class="speak-btn" data-text="Let's schedule our next alignment meeting for Friday.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Como você pede para adiar uma reunião em inglês?",
                        options: [
                            "Can we bring forward the meeting?",
                            "Can we postpone the meeting?",
                            "Can we make the meeting later?",
                            "Can we schedule the meeting now?"
                        ],
                        correctIndex: 1,
                        explanation: "'Postpone' é o verbo oficial para adiar um compromisso ou reunião."
                    }
                }
            ]
        },
        {
            title: "Vida Digital e Opiniões (Social Media & Arguments)",
            lessons: [
                {
                    id: "b1_m3_l1",
                    title: "Agreeing and Disagreeing",
                    content: `
                        <p>Em debates técnicos, expressar sua concordância ou discordância de forma polida preserva a harmonia do time.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Agreeing (Concordar):</strong><br>
                            - "I agree with you on this point." <button class="speak-btn" data-text="I agree with you on this point.">🔊</button><br>
                            - "That makes total sense to me." <button class="speak-btn" data-text="That makes total sense to me.">🔊</button>
                        </div>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--danger);">Disagreeing (Discordar polidamente):</strong><br>
                            - "I see your point, but I have a different opinion." <button class="speak-btn" data-text="I see your point, but I have a different opinion.">🔊</button><br>
                            - "I'm not sure about that approach." <button class="speak-btn" data-text="I'm not sure about that approach.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual frase expressa discordância polida em uma reunião?",
                        options: [
                            "You are wrong.",
                            "I disagree completely with this bad design.",
                            "I see your point, but I have a different view.",
                            "I don't care about your idea."
                        ],
                        correctIndex: 2,
                        explanation: "'I see your point, but...' valida o argumento alheio antes de introduzir uma contraproposta, soando diplomático."
                    }
                },
                {
                    id: "b1_m3_l2",
                    title: "Sharing Opinions Online",
                    content: `
                        <p>No Slack, Teams ou e-mails, expressar ideias exige clareza e o uso de marcadores opinativos formais.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Marcadores Opinativos:</strong><br>
                            - "In my opinion, we should focus on the UX." <button class="speak-btn" data-text="In my opinion, we should focus on the UX.">🔊</button><br>
                            - "From my perspective, this tool is too complex." <button class="speak-btn" data-text="From my perspective, this tool is too complex.">🔊</button><br>
                            - "To be honest, I think the deadline is short." <button class="speak-btn" data-text="To be honest, I think the deadline is short.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Como você diz 'Sob a minha perspectiva...' para introduzir uma ideia profissional?",
                        options: [
                            "Under my perspective",
                            "In my visual",
                            "From my perspective",
                            "For my look"
                        ],
                        correctIndex: 2,
                        explanation: "'From my perspective' é a locução padrão e profissional em inglês."
                    }
                },
                {
                    id: "b1_m3_l3",
                    title: "Structured Connectors",
                    content: `
                        <p>Conectores conectam ideias em parágrafos mais densos, elevando a escrita corporativa do nível básico para o intermediário.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Conectores Indispensáveis:</strong><br>
                            - <b>However</b> (No entanto): "The system is fast; however, it is expensive." <button class="speak-btn" data-text="The system is fast; however, it is expensive.">🔊</button><br>
                            - <b>Furthermore</b> (Além disso): "It has clean design; furthermore, it is free." <button class="speak-btn" data-text="It has clean design; furthermore, it is free.">🔊</button><br>
                            - <b>Therefore</b> (Portanto): "We need results; therefore, we must work." <button class="speak-btn" data-text="We need results; therefore, we must work.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual conector expressa contraste entre duas ideias no texto?",
                        options: [
                            "Furthermore",
                            "Therefore",
                            "However",
                            "Additionally"
                        ],
                        correctIndex: 2,
                        explanation: "'However' introduz um contraste ou ressalva em relação à ideia dita anteriormente."
                    }
                },
                {
                    id: "b1_m3_l4",
                    title: "Explaining a Technical Issue",
                    content: `
                        <p>Ao reportar um bug ou incidente técnico para a equipe de tecnologia, utilize termos claros que facilitem o diagnóstico rápido.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Termos Técnicos:</strong><br>
                            - "There is a <b>bug</b> in the signup script." <button class="speak-btn" data-text="There is a bug in the signup script.">🔊</button><br>
                            - "The server crashed due to high traffic." <button class="speak-btn" data-text="The server crashed due to high traffic.">🔊</button><br>
                            - "The database is slow today." <button class="speak-btn" data-text="The database is slow today.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Como você diz 'O servidor caiu devido ao tráfego excessivo'?",
                        options: [
                            "The server crashed due to high traffic.",
                            "The server drop down on traffic.",
                            "The server failed with traffic high.",
                            "The server broke because traffic."
                        ],
                        correctIndex: 0,
                        explanation: "'Crashed due to high traffic' descreve de maneira tecnicamente apropriada e natural o evento."
                    }
                },
                {
                    id: "b1_m3_l5",
                    title: "Elevator Pitch Basic",
                    content: `
                        <p>O <b>Elevator Pitch</b> é uma apresentação ultra-rápida (menos de 1 min) da sua solução ou projeto profissional, excelente para treinar foco no TDAH.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Modelo de Pitch B1:</strong><br>
                            "We are developing a productivity app for ADHD professionals. It uses micro-timers to keep focus. It solves the procrastination problem." <button class="speak-btn" data-text="We are developing a productivity app for ADHD professionals. It uses micro-timers to keep focus. It solves the procrastination problem.">🔊</button>
                        </div>
                        <p>Divida em 3 blocos: <b>O que é</b>, <b>como funciona</b> e <b>o problema que resolve</b>.</p>
                    `,
                    quiz: {
                        question: "Qual das partes NÃO é obrigatória em um Elevator Pitch básico?",
                        options: [
                            "O problema que você resolve",
                            "Como a solução funciona",
                            "A história completa do desenvolvimento",
                            "O que é o seu produto ou serviço"
                        ],
                        correctIndex: 2,
                        explanation: "A história do desenvolvimento é longa e irrelevante para um pitch curto de foco instantâneo."
                    }
                }
            ]
        }
    ],
    "B2": [
        {
            title: "Agilidade & Engenharia de Projetos (Business Vocabulary)",
            lessons: [
                {
                    id: "b2_m1_l1",
                    title: "Agile & Scrum Framework",
                    content: `
                        <p>No ambiente corporativo global moderno, metodologias ágeis ditam a rotina. Dominar os termos do <b>Scrum</b> e <b>Kanban</b> é um pré-requisito.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Agile Key Terms:</strong><br>
                            - <b>Sprint Backlog</b>: Tarefas prioritárias do ciclo.<br>
                            - <b>Sprint Planning</b>: Planejamento do período de foco.<br>
                            - <b>User Story</b>: Requisitos sob a ótica do usuário final. <button class="speak-btn" data-text="User Story">🔊</button><br>
                            - <b>Retrospective</b>: Reunião de melhoria de processos. <button class="speak-btn" data-text="Retrospective">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual é a reunião focada em revisar erros e melhorar processos ocorridos na última sprint?",
                        options: [
                            "Sprint Planning",
                            "Daily Standup",
                            "Sprint Retrospective",
                            "Review Backlog"
                        ],
                        correctIndex: 2,
                        explanation: "A 'Sprint Retrospective' serve especificamente para avaliar a performance do time e melhorá-la no ciclo seguinte."
                    }
                },
                {
                    id: "b2_m1_l2",
                    title: "Project Deliverables & Deadlines",
                    content: `
                        <p>Alinhar entregáveis (<b>deliverables</b>) e gerenciar prazos (<b>deadlines</b>) exige comandos firmes, precisos e assertivos em inglês.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrases to check alignment:</strong><br>
                            - "What are the core <b>deliverables</b> for this sprint?" <button class="speak-btn" data-text="What are the core deliverables for this sprint?">🔊</button><br>
                            - "Is the team going to meet the <b>deadline</b>?" <button class="speak-btn" data-text="Is the team going to meet the deadline?">🔊</button> (O time vai bater a data limite?)
                        </div>
                        <p>Expressão de perigo: "We cannot <b>miss the deadline</b>." <button class="speak-btn" data-text="We cannot miss the deadline.">🔊</button> (Não podemos perder o prazo).</p>
                    `,
                    quiz: {
                        question: "Como dizemos em inglês 'bater o prazo final'?",
                        options: [
                            "lose the deadline",
                            "miss the deadline",
                            "meet the deadline",
                            "run the deadline"
                        ],
                        correctIndex: 2,
                        explanation: "A colocalização (collocation) padrão para cumprir um prazo em inglês é 'meet the deadline'."
                    }
                },
                {
                    id: "b2_m1_l3",
                    title: "Passive Voice in Reports",
                    content: `
                        <p>Em relatórios profissionais sêniores, é comum utilizarmos a <b>Voz Passiva</b> para dar destaque ao **resultado do projeto** em vez de destacar quem o executou.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Active Voice (Foco no Autor):</strong><br>
                            - "We deployed the server successfully." <button class="speak-btn" data-text="We deployed the server successfully.">🔊</button>
                        </div>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--primary-glow);">Passive Voice (Foco no Evento/Produto):</strong><br>
                            - "The server <b>was deployed</b> successfully." <button class="speak-btn" data-text="The server was deployed successfully.">🔊</button> (Mais neutro e impessoal).
                        </div>
                    `,
                    quiz: {
                        question: "Passe a frase 'The QA team tested the features' para a voz passiva:",
                        options: [
                            "The features was tested by QA team.",
                            "The features were tested by the QA team.",
                            "QA team was tested the features.",
                            "The features tested by the QA team."
                        ],
                        correctIndex: 1,
                        explanation: "Como 'features' está no plural, usamos 'were tested' para concordar corretamente no passado passivo."
                    }
                },
                {
                    id: "b2_m1_l4",
                    title: "Explaining Project Failures",
                    content: `
                        <p>Ao reportar um atraso crítico ou falha estrutural, o tom ideal deve focar na resolução transparente do problema, mantendo a calma técnica.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrases:</strong><br>
                            - "We experienced some technical issues during migration." <button class="speak-btn" data-text="We experienced some technical issues during migration.">🔊</button><br>
                            - "Unfortunately, the deploy failed due to a server overload." <button class="speak-btn" data-text="Unfortunately, the deploy failed due to a server overload.">🔊</button><br>
                            - "However, the team is actively investigating the root cause." <button class="speak-btn" data-text="However, the team is actively investigating the root cause.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual termo é comumente usado para definir a 'causa raiz' de um problema técnico?",
                        options: [
                            "base cause",
                            "root cause",
                            "start reason",
                            "ground problem"
                        ],
                        correctIndex: 1,
                        explanation: "'Root cause' (causa raiz) é o termo padrão para o fator originador de uma falha de sistema."
                    }
                },
                {
                    id: "b2_m1_l5",
                    title: "Agile Simulation Challenge",
                    content: `
                        <p>Simulador de crise sob pressão de prazos. Suponha que seu sprint backlog esteja atrasado e o cliente cobrando. Qual o tom diplomático?</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Exemplo de Resposta de Crise:</strong><br>
                            "Although we faced minor bottlenecks, we restructured our backlog. Therefore, the MVP release is still on track for Friday." <button class="speak-btn" data-text="Although we faced minor bottlenecks, we restructured our backlog. Therefore, the MVP release is still on track for Friday.">🔊</button>
                        </div>
                        <p><b>on track</b>: No caminho esperado, dentro do cronograma.</p>
                    `,
                    quiz: {
                        question: "Se um projeto está correndo no prazo e sem riscos de atraso, dizemos que ele está:",
                        options: [
                            "out of track",
                            "on track",
                            "behind schedule",
                            "off track"
                        ],
                        correctIndex: 1,
                        explanation: "'On track' significa que o andamento está correspondendo perfeitamente ao plano inicial."
                    }
                }
            ]
        },
        {
            title: "A Arte da Persuasão (Phrasal Verbs & Idioms)",
            lessons: [
                {
                    id: "b2_m2_l1",
                    title: "Business Phrasal Verbs - Part 1",
                    content: `
                        <p>Phrasal Verbs dão fluidez e eliminam a fala mecânica. Domine o primeiro bloco essencial para reuniões diárias:</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrasal Verbs:</strong><br>
                            - <b>bring up</b>: Mencionar / sugerir um assunto. "He <b>brought up</b> the budget issue." <button class="speak-btn" data-text="He brought up the budget issue.">🔊</button><br>
                            - <b>call off</b>: Cancelar. "They decided to <b>call off</b> the deployment." <button class="speak-btn" data-text="They decided to call off the deployment.">🔊</button><br>
                            - <b>point out</b>: Chamar atenção / destacar. "I want to <b>point out</b> a security risk." <button class="speak-btn" data-text="I want to point out a security risk.">🔊</button><br>
                            - <b>back up</b>: Dar suporte / apoiar. "I will <b>back up</b> your idea in the meeting." <button class="speak-btn" data-text="I will back up your idea in the meeting.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Se o seu time cancelou uma reunião de alinhamento de última hora, qual verbo é usado?",
                        options: [
                            "call off",
                            "bring up",
                            "point out",
                            "back up"
                        ],
                        correctIndex: 0,
                        explanation: "'Call off' é o phrasal verb para cancelar."
                    }
                },
                {
                    id: "b2_m2_l2",
                    title: "Business Phrasal Verbs - Part 2",
                    content: `
                        <p>Mais quatro Phrasal Verbs cruciais para descrever ações de implementação técnica e investigação:</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrasal Verbs:</strong><br>
                            - <b>carry out</b>: Executar / implementar. "We need to <b>carry out</b> the instructions." <button class="speak-btn" data-text="We need to carry out the instructions.">🔊</button><br>
                            - <b>set up</b>: Configurar / instalar. "Please, <b>set up</b> the new dev workspace." <button class="speak-btn" data-text="Please, set up the new dev workspace.">🔊</button><br>
                            - <b>look into</b>: Investigar / analisar. "The team is <b>looking into</b> the memory leak." <button class="speak-btn" data-text="The team is looking into the memory leak.">🔊</button><br>
                            - <b>pull off</b>: Conseguir realizar algo difícil. "We managed to <b>pull off</b> the release." <button class="speak-btn" data-text="We managed to pull off the release.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual phrasal verb descreve a ação de configurar ou instalar um novo ambiente?",
                        options: [
                            "look into",
                            "carry out",
                            "set up",
                            "pull off"
                        ],
                        correctIndex: 2,
                        explanation: "'Set up' significa configurar, estruturar ou instalar um ambiente técnico."
                    }
                },
                {
                    id: "b2_m2_l3",
                    title: "Common Corporate Idioms",
                    content: `
                        <p>Nativos usam expressões idiomáticas a todo instante. Entendê-las evita que seu cérebro traduza de forma literal e se confunda.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Idioms:</strong><br>
                            - <b>get the ball rolling</b>: Iniciar a atividade. "Let's <b>get the ball rolling</b>." <button class="speak-btn" data-text="Let's get the ball rolling.">🔊</button><br>
                            - <b>touch base</b>: Alinhar rapidamente com alguém. "I want to <b>touch base</b> with you tomorrow." <button class="speak-btn" data-text="I want to touch base with you tomorrow.">🔊</button><br>
                            - <b>double-check</b>: Revisar com cautela. "Please <b>double-check</b> the client bill." <button class="speak-btn" data-text="Please double-check the client bill.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "O que significa o idioma 'get the ball rolling' no trabalho?",
                        options: [
                            "Jogar futebol com o time",
                            "Dar início ao projeto ou atividade",
                            "Rolar as tarefas para a próxima sprint",
                            "Cometer um erro primário"
                        ],
                        correctIndex: 1,
                        explanation: "'Get the ball rolling' é uma metáfora esportiva muito usada para indicar o início de ações ou projetos."
                    }
                },
                {
                    id: "b2_m2_l4",
                    title: "Sounding Natural & Professional",
                    content: `
                        <p>Evitar respostas secas de sim/não e utilizar estruturas que atenuam afirmações torna sua oratória natural.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Exemplos:</strong><br>
                            - Em vez de: "No, I don't agree." -> Diga: "I'm not sure that would work." <button class="speak-btn" data-text="I'm not sure that would work.">🔊</button><br>
                            - Em vez de: "Yes, I'll do it." -> Diga: "Absolutely, I will take care of that." <button class="speak-btn" data-text="Absolutely, I will take care of that.">🔊</button><br>
                            - Em vez de: "I don't know." -> Diga: "Let me check and get back to you." <button class="speak-btn" data-text="Let me check and get back to you.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Se você não sabe a resposta para uma pergunta técnica do cliente, como responder profissionalmente?",
                        options: [
                            "I don't know the server status.",
                            "Let me check and get back to you shortly.",
                            "Ask the frontend developer, not me.",
                            "I have no idea about that."
                        ],
                        correctIndex: 1,
                        explanation: "'Let me check and get back to you...' demonstra pró-atividade e responsabilidade sem expor ignorância direta."
                    }
                },
                {
                    id: "b2_m2_l5",
                    title: "Persuading Key Stakeholders",
                    content: `
                        <p>Vender ideias ou convencer investidores e chefias exige realçar o <b>ROI (Retorno sobre Investimento)</b> das soluções propostas.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrases:</strong><br>
                            - "This update will reduce our operational costs by 20%." <button class="speak-btn" data-text="This update will reduce our operational costs by 20%.">🔊</button><br>
                            - "Implementing this tool will increase team efficiency." <button class="speak-btn" data-text="Implementing this tool will increase team efficiency.">🔊</button>
                        </div>
                        <p>Evite focar apenas em aspectos técnicos; traduza tecnologia em <b>benefícios de negócios</b>.</p>
                    `,
                    quiz: {
                        question: "Qual argumento é ideal para convencer um stakeholder financeiro?",
                        options: [
                            "We want to use new code framework because it's cool.",
                            "This implementation will decrease latency and improve user retention by 15%.",
                            "The old system has ugly CSS styling.",
                            "This is a request from our developers."
                        ],
                        correctIndex: 1,
                        explanation: "Conectar dados de performance a métricas de negócio (user retention) é o melhor caminho persuasivo."
                    }
                }
            ]
        },
        {
            title: "Resolução de Conflitos (Diplomatic English)",
            lessons: [
                {
                    id: "b2_m3_l1",
                    title: "Second Conditional",
                    content: `
                        <p>A <b>Second Conditional</b> descreve situações hipotéticas do presente/futuro que são improváveis de acontecer agora.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Estrutura:</strong><br>
                            If + Past Simple, would + Verbo base.
                        </div>
                        <p>Exemplo em negociação: "If we <b>had</b> more resources, we <b>would deliver</b> earlier." <button class="speak-btn" data-text="If we had more resources, we would deliver earlier.">🔊</button> (Mas não temos recursos agora).</p>
                    `,
                    quiz: {
                        question: "Complete a frase hipotética: 'If the budget _____ larger, we _____ hire more designers.'",
                        options: [
                            "is / will",
                            "was / would",
                            "were / would",
                            "had / will"
                        ],
                        correctIndex: 2,
                        explanation: "No subjuntivo do inglês (conditionals), preferimos o uso de 'were' para todas as pessoas gramaticais acompanhado de 'would' na principal."
                    }
                },
                {
                    id: "b2_m3_l2",
                    title: "Third Conditional",
                    content: `
                        <p>A <b>Third Conditional</b> expressa arrependimentos passados e cenários que já aconteceram e não podem ser alterados.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Estrutura:</strong><br>
                            If + Past Perfect (had + particípio), would have + Particípio.
                        </div>
                        <p>Exemplo de análise pós-crise: "If we <b>had tested</b> the code, we <b>would have avoided</b> the crash." <button class="speak-btn" data-text="If we had tested the code, we would have avoided the crash.">🔊</button></p>
                    `,
                    quiz: {
                        question: "Como você expressa um arrependimento de um projeto passado que falhou?",
                        options: [
                            "If we work hard, we would win.",
                            "If we had invested more time, the release would have succeeded.",
                            "If we have time, we will deploy.",
                            "If we tested, we would avoid bugs."
                        ],
                        correctIndex: 1,
                        explanation: "Usa a estrutura do Third Conditional: 'If we had invested' (Past Perfect) e 'would have succeeded' (condicional perfeito)."
                    }
                },
                {
                    id: "b2_m3_l3",
                    title: "Softening Difficult Feedback",
                    content: `
                        <p>Dar feedbacks difíceis exige atenuadores linguísticos para focar nas soluções e no comportamento, nunca em acusações pessoais.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Atenuadores de Feedback:</strong><br>
                            - "Perhaps we could try a different layout next time." <button class="speak-btn" data-text="Perhaps we could try a different layout next time.">🔊</button><br>
                            - "I noticed some inconsistencies in the reports." <button class="speak-btn" data-text="I noticed some inconsistencies in the reports.">🔊</button><br>
                            - "It might be helpful to document the API." <button class="speak-btn" data-text="It might be helpful to document the API.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Selecione a maneira ideal de apontar um erro de documentação de um liderado:",
                        options: [
                            "Your documentation has mistakes, fix it.",
                            "I noticed some gaps in the docs; it might be helpful to add examples.",
                            "Why did you write this bad document?",
                            "The documentation is wrong here."
                        ],
                        correctIndex: 1,
                        explanation: "A frase usa 'I noticed' e 'it might be helpful', suavizando o atrito e mantendo o tom construtivo."
                    }
                },
                {
                    id: "b2_m3_l4",
                    title: "Diplomatic Disagreement",
                    content: `
                        <p>Discordar de uma diretriz do chefe exige que você use o <b>inglês diplomático</b> para contrapor sem gerar insubordinação.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Disagreement Structures:</strong><br>
                            - "I respect your approach; however, I worry about the deadline." <button class="speak-btn" data-text="I respect your approach; however, I worry about the deadline.">🔊</button><br>
                            - "With all due respect, I believe we have a better option." <button class="speak-btn" data-text="With all due respect, I believe we have a better option.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual expressão é ideal para discordar educadamente de um cliente sênior?",
                        options: [
                            "No, your design is bad.",
                            "With all due respect, I think we should consider the migration costs.",
                            "I think you don't know the technology.",
                            "We must change this immediately."
                        ],
                        correctIndex: 1,
                        explanation: "'With all due respect' é a frase idiomática diplomática mais aceita para discordar de autoridades no trabalho."
                    }
                },
                {
                    id: "b2_m3_l5",
                    title: "Negotiating a Solution",
                    content: `
                        <p>Chegar a um acordo exige ceder em algum ponto em troca de benefícios mútuos (<b>trade-offs</b>).</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Vocabulary:</strong><br>
                            - <b>Compromise</b>: Chegar a um meio termo.<br>
                            - <b>Trade-off</b>: Relação de troca de benefícios.<br>
                            - "If you approve the budget, we can complete it in two weeks." <button class="speak-btn" data-text="If you approve the budget, we can complete it in two weeks.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "O que significa a palavra 'compromise' no inglês de negociação?",
                        options: [
                            "Comprometer-se com o chefe",
                            "Chegar a um acordo/meio termo cedendo partes",
                            "Fazer uma promessa contratual rígida",
                            "Ter um compromisso de horário"
                        ],
                        correctIndex: 1,
                        explanation: "'Compromise' é um falso amigo (false friend). Não significa compromisso de agenda, mas sim um acordo amigável com concessões mútuas."
                    }
                }
            ]
        }
    ],
    "C1/C2": [
        {
            title: "O C-Level Context (Advanced Analytics & KPIs)",
            lessons: [
                {
                    id: "c1_m1_l1",
                    title: "Venture Capital & Funding",
                    content: `
                        <p>Discussões estratégicas de C-Levels em empresas globais envolvem captação de recursos (<b>funding rounds</b>), diluição de capital (<b>equity</b>) e valor de mercado (<b>valuation</b>).</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">C-Level Terms:</strong><br>
                            - <b>Series A funding</b>: Primeira grande rodada de investimentos.<br>
                            - <b>Pre-money valuation</b>: Valor de mercado estimado antes de novos investimentos.<br>
                            - "We are raising our Series B round at a fifty million valuation." <button class="speak-btn" data-text="We are raising our Series B round at a fifty million valuation.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "O que representa o termo 'valuation' em rodadas de Venture Capital?",
                        options: [
                            "A taxa de juros do banco",
                            "A avaliação do valor de mercado da empresa",
                            "O número de ações vendidas",
                            "A auditoria contábil anual"
                        ],
                        correctIndex: 1,
                        explanation: "'Valuation' define o valor monetário total atribuído à startup ou empresa pelo mercado."
                    }
                },
                {
                    id: "c1_m1_l2",
                    title: "Advanced Financial Analytics",
                    content: `
                        <p>Analisar o balanço financeiro corporativo exige domínio de siglas e termos de rentabilidade de alta performance.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Financial Indicators:</strong><br>
                            - <b>EBITDA</b>: Lucro antes de juros, impostos, depreciação e amortização.<br>
                            - <b>Gross Margin</b>: Margem bruta.<br>
                            - <b>Bottom Line</b>: Lucro líquido consolidado (linha final do balanço). <button class="speak-btn" data-text="Bottom Line">🔊</button><br>
                            - "We must improve our gross margins to achieve profitability." <button class="speak-btn" data-text="We must improve our gross margins to achieve profitability.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Como os executivos chamam informalmente o 'lucro líquido consolidado' de uma empresa?",
                        options: [
                            "Top line",
                            "Bottom line",
                            "Gross profit",
                            "EBITDA line"
                        ],
                        correctIndex: 1,
                        explanation: "'Bottom line' refere-se ao resultado líquido na base do balanço financeiro, sendo sinônimo de lucro líquido."
                    }
                },
                {
                    id: "c1_m1_l3",
                    title: "Presenting KPIs",
                    content: `
                        <p>Executivos de tecnologia fundamentam discursos em métricas cruciais de retenção e custo de aquisição.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Core KPIs:</strong><br>
                            - <b>Churn Rate</b>: Taxa de cancelamento de clientes.<br>
                            - <b>CAC (Customer Acquisition Cost)</b>: Custo de Aquisição de Clientes.<br>
                            - <b>LTV (Lifetime Value)</b>: Valor gerado por um cliente ao longo do tempo. <button class="speak-btn" data-text="LTV">🔊</button><br>
                            - "Our LTV to CAC ratio is currently three to one, which is healthy." <button class="speak-btn" data-text="Our LTV to CAC ratio is currently three to one, which is healthy.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Se o seu produto tem alta evasão de usuários, qual métrica está alarmante?",
                        options: [
                            "CAC rate",
                            "Churn rate",
                            "LTV value",
                            "Valuation rate"
                        ],
                        correctIndex: 1,
                        explanation: "O 'Churn rate' mede a porcentagem de clientes que cancelam ou deixam de assinar o serviço."
                    }
                },
                {
                    id: "c1_m1_l4",
                    title: "Macroeconomic Vocabulary",
                    content: `
                        <p>Ao negociar parcerias globais, entender oscilações de mercado e políticas macroeconômicas é indispensável.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Macro terms:</strong><br>
                            - <b>Bear market</b>: Mercado em queda generalizada.<br>
                            - <b>Bull market</b>: Mercado em alta e otimista.<br>
                            - <b>Interest rate</b>: Taxa de juros.<br>
                            - "Due to rising interest rates, capital allocation became conservative." <button class="speak-btn" data-text="Due to rising interest rates, capital allocation became conservative.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Como definimos um mercado financeiro que está em queda persistente e pessimista?",
                        options: [
                            "Bull market",
                            "Bear market",
                            "Stagflation market",
                            "Venture market"
                        ],
                        correctIndex: 1,
                        explanation: "O termo 'Bear market' (mercado do urso, que ataca de cima para baixo) designa os mercados em tendência de baixa."
                    }
                },
                {
                    id: "c1_m1_l5",
                    title: "Writing an Executive Summary",
                    content: `
                        <p>O <b>Executive Summary</b> é a porta de entrada de relatórios extensos. C-levels exigem sínteses de alto impacto visual e concisão extrema.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Modelo C-Level:</strong><br>
                            "This report outlines our expansion plan. By optimizing our tech stack, we intend to scale operations globally, aiming for a 35% margin improvement." <button class="speak-btn" data-text="This report outlines our expansion plan. By optimizing our tech stack, we intend to scale operations globally, aiming for a 35% margin improvement.">🔊</button>
                        </div>
                        <p>Seja objetivo: mencione o **objetivo**, as **ações chaves** e o **resultado esperado**.</p>
                    `,
                    quiz: {
                        question: "Qual característica define o sucesso de um Executive Summary?",
                        options: [
                            "Mapear todos os detalhes técnicos do projeto",
                            "Concisão e exposição imediata dos benefícios financeiros",
                            "Ter mais de 10 páginas",
                            "Apresentar a biografia dos fundadores"
                        ],
                        correctIndex: 1,
                        explanation: "Um Executive Summary serve para poupar tempo da gerência, exigindo alta síntese e foco no resultado financeiro e operacional."
                    }
                }
            ]
        },
        {
            title: "Oratória de Alto Impacto (Pitching & Public Speaking)",
            lessons: [
                {
                    id: "c1_m2_l1",
                    title: "Storytelling Frameworks",
                    content: `
                        <p>Apresentações que engajam utilizam estruturas narrativas conhecidas como a **Jornada do Herói** ou **Tensão-Resolução** (padrão TED Talks).</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Narrative Formula:</strong><br>
                            1. Present the Status Quo.<br>
                            2. Introduce the Bottleneck (Conflict).<br>
                            3. Unveil your solution (The Hero).<br>
                            - "We had a robust CRM, yet user churn persisted. That is when we developed our predictive AI." <button class="speak-btn" data-text="We had a robust CRM, yet user churn persisted. That is when we developed our predictive AI.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual das opções descreve o primeiro passo de uma estrutura clássica de storytelling?",
                        options: [
                            "Apresentar a solução inovadora",
                            "Apresentar a situação atual (Status Quo) e o contexto",
                            "Pedir investimentos financeiros",
                            "Mostrar gráficos de performance técnica"
                        ],
                        correctIndex: 1,
                        explanation: "Toda narrativa de impacto começa contextualizando o ouvinte sobre o estado atual ('status quo') antes do conflito surgir."
                    }
                },
                {
                    id: "c1_m2_l2",
                    title: "Voice Modulation & Pauses",
                    content: `
                        <p>A oratória executiva sênior valoriza a modulação de voz e o <b>uso estratégico de pausas</b>. O silêncio gera hiperfoco e autoridade.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Techniques:</strong><br>
                            - <b>Lower the pitch</b>: Diminuir o tom de voz para transmitir gravidade técnico-científica.<br>
                            - <b>The dramatic pause</b>: Parar de falar por 2 segundos após um dado de forte impacto.<br>
                            - "Our profit rose by ninety percent. [Pause] This was our best year." <button class="speak-btn" data-text="Our profit rose by ninety percent. This was our best year.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual é o principal objetivo do uso de pausas intencionais na oratória pública?",
                        options: [
                            "Esquecer a próxima linha da fala",
                            "Dar tempo de respiração e destacar a importância da última frase dita",
                            "Evitar interações com a audiência",
                            "Alongar a duração da reunião"
                        ],
                        correctIndex: 1,
                        explanation: "O silêncio estratégico cria expectativa e destaca a relevância do argumento anterior na mente do ouvinte."
                    }
                },
                {
                    id: "c1_m2_l3",
                    title: "Eliminating Filler Words",
                    content: `
                        <p>Vícios de linguagem como "uhm", "like", "so", "actually" em excesso destroem a autoridade discursiva no ambiente corporativo sênior.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Como treinar para ADHD:</strong><br>
                            Substitua o vício verbal por uma **respiração curta em silêncio**. Em vez de dizer "We need to, uhm, scale...", prefira "We need to [silence] scale..." <button class="speak-btn" data-text="We need to scale.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Como chamamos as palavras vazias de preenchimento (vícios de linguagem) em inglês?",
                        options: [
                            "Base words",
                            "Filler words",
                            "Vocal terms",
                            "Stop variables"
                        ],
                        correctIndex: 1,
                        explanation: "'Filler words' (palavras de preenchimento) é o termo oficial em oratória para esses vícios de fala."
                    }
                },
                {
                    id: "c1_m2_l4",
                    title: "Handling Q&A Under Pressure",
                    content: `
                        <p>Ao defender projetos perante investidores ou conselhos, gerenciar a rodada de perguntas e respostas (<b>Q&A</b>) exige calma técnica e assertividade.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Phrases to stall or defend:</strong><br>
                            - "That is a valid question. Let me share the data." <button class="speak-btn" data-text="That is a valid question. Let me share the data.">🔊</button> (Ganha tempo polidamente).<br>
                            - "We have simulated that scenario, and our mitigation plan is ready." <button class="speak-btn" data-text="We have simulated that scenario, and our mitigation plan is ready.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Qual resposta é ideal para lidar com um questionamento agressivo de um investidor?",
                        options: [
                            "I don't think you understand our tech stack.",
                            "That's an excellent question. Let me address the core data to clarify.",
                            "We don't have time for this question.",
                            "Your argument is wrong, we are perfect."
                        ],
                        correctIndex: 1,
                        explanation: "Validar a pergunta do interlocutor antes de rebatê-la com dados é a melhor tática de oratória defensiva."
                    }
                },
                {
                    id: "c1_m2_l5",
                    title: "Pitch Delivery",
                    content: `
                        <p>O pitch final de captação de investimento sênior deve fundir paixão técnica, realismo de mercado e urgência de oportunidade.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Pitch Final Executive:</strong><br>
                            "We are solving the ADHD focus gap. With a scalable architecture and a growing TAM, we are raising two million dollars to accelerate growth. Join us." <button class="speak-btn" data-text="We are solving the ADHD focus gap. With a scalable architecture and a growing TAM, we are raising two million dollars to accelerate growth. Join us.">🔊</button>
                        </div>
                        <p><b>TAM</b>: Total Addressable Market (Mercado total disponível).</p>
                    `,
                    quiz: {
                        question: "O que representa o acrônimo 'TAM' comumente usado em apresentações para investidores?",
                        options: [
                            "Total active managers",
                            "Total Addressable Market",
                            "Target Acquisition Method",
                            "Technical Asset Management"
                        ],
                        correctIndex: 1,
                        explanation: "'Total Addressable Market' mede a oportunidade total de receita anual disponível para seu produto no mundo."
                    }
                }
            ]
        },
        {
            title: "Negociações Complexas e Ironia (Nuances & Maestria)",
            lessons: [
                {
                    id: "c1_m3_l1",
                    title: "Understanding Irony & Sarcasm",
                    content: `
                        <p>Em cargos de alto nível sênior, a ironia sutil ou observações sarcásticas em reuniões são usadas para testar postura ou amenizar tensões.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Context:</strong><br>
                            - Se o sistema falhou e o CTO diz: "Excellent deploy today, team." <button class="speak-btn" data-text="Excellent deploy today, team.">🔊</button> (Obviamente, é irônico. Reaja focando na correção e não se ofenda pessoalmente).<br>
                            - Diga: "We are already rolling back to resolve the issue." <button class="speak-btn" data-text="We are already rolling back to resolve the issue.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Se um diretor diz 'Our database seems to run on steam today' (parece rodar a vapor hoje), ele quer dizer que:",
                        options: [
                            "O banco está incrivelmente rápido",
                            "O banco de dados está lento ou ineficiente",
                            "O banco de dados é ecológico",
                            "O servidor está superaquecido"
                        ],
                        correctIndex: 1,
                        explanation: "É uma expressão irônica/metafórica indicando que o sistema está operando de forma arcaica e lenta."
                    }
                },
                {
                    id: "c1_m3_l2",
                    title: "US vs. UK Business Differences",
                    content: `
                        <p>Negociar com americanos exige assertividade e foco rápido. Com britânicos, exige atenuação extrema, polidez e uso do 'understatement'.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">UK Understatement (Atenuação Britânica):</strong><br>
                            - Britânico diz: "We have a slight problem." <button class="speak-btn" data-text="We have a slight problem.">🔊</button> (Na verdade, o servidor explodiu e o problema é gravíssimo).<br>
                            - Britânico diz: "I'm a bit disappointed." <button class="speak-btn" data-text="I'm a bit disappointed.">🔊</button> (Ele está extremamente irritado).
                        </div>
                        <p>Mapeie essas nuances culturais para evitar erros graves de avaliação de status.</p>
                    `,
                    quiz: {
                        question: "Se o seu cliente britânico avalia seu projeto como 'Quite interesting' (Bastante interessante), sob a etiqueta britânica isso muitas vezes significa:",
                        options: [
                            "Ele amou e vai assinar o contrato",
                            "Ele achou mediano ou não se impressionou",
                            "Ele achou um lixo completo",
                            "Ele não quer ver a apresentação"
                        ],
                        correctIndex: 1,
                        explanation: "Na cultura de negócios do Reino Unido, 'quite interesting' é frequentemente um elogio morno que disfarça falta de entusiasmo real."
                    }
                },
                {
                    id: "c1_m3_l3",
                    title: "High-Stakes Negotiation Tactics",
                    content: `
                        <p>Negociações sêniores (M&A, acordos globais de SLA) são baseadas em táticas de ancoragem (<b>anchoring</b>) e concessões estratégicas.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Vocabulary & Strategy:</strong><br>
                            - <b>BATNA (Best Alternative to a Negotiated Agreement)</b>: Sua melhor alternativa caso o acordo falhe.<br>
                            - <b>Walk-away price</b>: Seu preço limite de saída da mesa.<br>
                            - "To move forward, we must align on the SLA terms." <button class="speak-btn" data-text="To move forward, we must align on the SLA terms.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "O que representa o acrônimo de negociação 'BATNA'?",
                        options: [
                            "Best Alternative to a Negotiated Agreement",
                            "Budget Allocation Technical Negotiating Asset",
                            "Base Agreement To New Alliance",
                            "Business Asset Target New Agreement"
                        ],
                        correctIndex: 0,
                        explanation: "BATNA é o plano B caso a negociação atual falhe completamente, definindo seu poder de barganha."
                    }
                },
                {
                    id: "c1_m3_l4",
                    title: "Cultural Background & Idiomatic Nuances",
                    content: `
                        <p>Líderes globais expressam visões estratégicas utilizando metáforas culturais ricas. Mantenha seu repertório atualizado.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">Advanced Metaphors:</strong><br>
                            - <b>Helicopter view</b>: Visão holística de cima do negócio. <button class="speak-btn" data-text="Helicopter view">🔊</button><br>
                            - <b>Boil the ocean</b>: Tentar fazer coisas demais ao mesmo tempo de forma inútil.<br>
                            - "We shouldn't try to <b>boil the ocean</b> in this MVP." <button class="speak-btn" data-text="We shouldn't try to boil the ocean in this MVP.">🔊</button>
                        </div>
                    `,
                    quiz: {
                        question: "Se o CEO pede para o time ter uma 'helicopter view' do projeto, o que ele está solicitando?",
                        options: [
                            "Mapear todos os mínimos detalhes de cada linha de código",
                            "Uma visão macro, abrangente e estratégica de todo o ecossistema",
                            "Comprar um drone para tirar fotos do escritório",
                            "Acelerar o desenvolvimento sob risco de queda do sistema"
                        ],
                        correctIndex: 1,
                        explanation: "'Helicopter view' significa ver a operação 'de cima', obtendo um panorama geral sem se perder no microdetalhamento."
                    }
                },
                {
                    id: "c1_m3_l5",
                    title: "The Masterclass Summary",
                    content: `
                        <p>Parabéns! Você percorreu toda a trilha educacional modularizada. A fluência não é a perfeição gramatical mecânica, mas sim a capacidade de articular valor, liderar pessoas e resolver crises de forma clara e profissional.</p>
                        <div style="margin: 14px 0; padding: 12px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: 8px;">
                            <strong style="color: var(--secondary);">A Epifania da Maestria:</strong><br>
                            "I no longer translate. I formulate my thoughts, express technical values, and lead global projects with absolute confidence." <button class="speak-btn" data-text="I no longer translate. I formulate my thoughts, express technical values, and lead global projects with absolute confidence.">🔊</button>
                        </div>
                        <p>Agora, realize a <b>Prova de Nível</b> para consolidar seus aprendizados e celebrar sua progressão de forma definitiva!</p>
                    `,
                    quiz: {
                        question: "Qual é o principal pilar da fluência executiva internacional?",
                        options: [
                            "Memorizar todas as regras gramaticais antigas",
                            "Articular ideias de forma clara, segura e que gere valor de negócios",
                            "Falar sem sotaque algum, imitando perfeitamente um americano",
                            "Escrever e-mails longos e rebuscados"
                        ],
                        correctIndex: 1,
                        explanation: "Gerar valor, manter a clareza e articular ideias profissionais em equipe é o pilar definitivo da fluência executiva de sucesso."
                    }
                }
            ]
        }
    ]
};
