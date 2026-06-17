-- SQL SCHEMA MIGRATION: EDTECH INTERACTIVE LEARNING ENGINE
-- Target: PostgreSQL (Supabase)
-- Author: Solutions Architect / Senior Software Engineer
-- Description: Sets up the tables for dynamic, duplicate-free exams and interactive gamified activities.

BEGIN;

-- =========================================================================
-- 1. EXTENSIONS SETUP
-- =========================================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =========================================================================
-- 2. TABLES CREATION
-- =========================================================================

-- Tabela: questions
-- Armazena os exercícios interativos de múltipla escolha, áudio e escrita.
CREATE TABLE IF NOT EXISTS public.questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type VARCHAR(50) NOT NULL CHECK (type IN ('multiple_choice', 'audio', 'text_input')),
    context_text TEXT NOT NULL,
    media_url TEXT, -- Link para arquivo de áudio (.mp3) ou imagem de pronúncia
    options JSONB, -- Array de alternativas (para múltipla escolha ou escuta com opções)
    correct_answer TEXT NOT NULL, -- Valor esperado da resposta correta ou padrão Regex de validação
    category VARCHAR(100) NOT NULL, -- Categoria pedagógica (ex: 'INTRO', 'U1', 'U2')
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela: exams
-- Registra as sessões de prova ativas e concluídas dos alunos.
CREATE TABLE IF NOT EXISTS public.exams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID NOT NULL, -- Relacionado ao identificador do usuário do aluno
    category VARCHAR(100) NOT NULL, -- Nível do exame (ex: 'INTRO', 'U1', 'PLACEMENT')
    score INTEGER DEFAULT 0, -- Quantidade de acertos obtidos
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela: exam_questions (Tabela Relacional - Mapeamento das questões do exame)
-- REGRA DE OURO CONTRA DUPLICIDADE: A chave primária composta (exam_id, question_id)
-- garante por restrição única ('Unique Constraint') que NENHUMA questão seja repetida no mesmo exame.
CREATE TABLE IF NOT EXISTS public.exam_questions (
    exam_id UUID NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
    student_answer TEXT, -- Resposta fornecida pelo aluno
    is_correct BOOLEAN, -- Flag de validação da resposta
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (exam_id, question_id)
);

-- =========================================================================
-- 3. INDEXES
-- =========================================================================
CREATE INDEX IF NOT EXISTS idx_questions_category ON public.questions(category);
CREATE INDEX IF NOT EXISTS idx_exams_student ON public.exams(student_id);
CREATE INDEX IF NOT EXISTS idx_exam_questions_exam_id ON public.exam_questions(exam_id);

-- =========================================================================
-- 4. INITIAL SEED (CARGA INICIAL DE EXEMPLO)
-- =========================================================================

-- Limpeza de registros de testes anteriores
DELETE FROM public.questions WHERE category = 'INTRO_TEST';

-- Inserção de 3 questões representativas dos formatos interativos
INSERT INTO public.questions (type, context_text, media_url, options, correct_answer, category)
VALUES 
-- Questão 1: Múltipla Escolha (Ditongos & Fonemas do material Sandra Bassani - Som 'aim' / 'wait')
(
    'multiple_choice',
    'Observe a tabela de pronúncias especiais da página 12. O ditongo representado pela letra "A" em palavras como "aim", "wait" e "play" possui qual som fonético correspondente?',
    'https://urhihhmdaapwotalcfga.supabase.co/storage/v1/object/public/media/vowel_sound_ei.png',
    '["[ei] (Ex: late, make, play)", "[a:] (Ex: army, car, park)", "[æ] (Ex: cat, apple, travel)", "[ai] (Ex: find, smile, my)"]',
    '[ei] (Ex: late, make, play)',
    'INTRO_TEST'
),

-- Questão 2: Exercício de Escuta/Listening (Abreviações e Pronúncia da Unidade 1)
-- Requer a validação de reprodução de áudio completa antes do envio da resposta.
(
    'audio',
    'Ouça o áudio e selecione a palavra correta para preencher a lacuna da frase formal de atendimento: "Excuse me, ______ Vargas is waiting for the meeting."',
    'https://urhihhmdaapwotalcfga.supabase.co/storage/v1/object/public/media/audio_u1_l2_miss.mp3',
    '["Miss (Senhorita)", "Mr. (Senhor)", "Mrs. (Senhora)", "Ms. (Miz)"]',
    'Miss (Senhorita)',
    'INTRO_TEST'
),

-- Questão 3: Exercício de Digitação/Escrita (Caso Genitivo da Unidade 2)
-- Validado por Regex flexível que aceita variações com ou sem pontuação final e caixa.
(
    'text_input',
    'Traduza a frase no seu caderno e digite o correspondente em inglês usando o Caso Genitivo (''S) adequado para a posse: "O carro de Frank está na garagem."',
    NULL,
    NULL,
    '^(Frank''s car is in the garage|frank''s car is in the garage)\.?$',
    'INTRO_TEST'
);

COMMIT;
