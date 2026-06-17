# Arquitetura do Banco de Dados: Provas e Aprendizagem Ativa

Esta pasta contém o script SQL para migração e carga de dados iniciais para a plataforma de aprendizagem ativa Sandra Bassani.

## Conteúdo
*   `schema.sql`: Script DDL para criação das tabelas `questions`, `exams` e `exam_questions`, além de DML com carga de dados de semente (seed) contendo 3 tipos de questões interativas.

## Estrutura de Tabelas

### `questions`
Armazena todos os exercícios interativos do curso:
*   `type`: Mapeia a interação na interface (`multiple_choice`, `audio` ou `text_input`).
*   `media_url`: Caminho para suporte visual (imagem) ou sonoro (áudio nativo).
*   `options`: JSON contendo as alternativas da pergunta.
*   `correct_answer`: Texto simples da resposta correta ou padrão Regex de validação para campos de texto livre.

### `exams`
Registra cada tentativa de exame do aluno para rastreamento de progresso e estatísticas de proficiência.

### `exam_questions`
Tabela relacional de associação com chave composta:
*   Chave Primária: `PRIMARY KEY (exam_id, question_id)`
*   **Finalidade:** Garante integridade referencial e impede fisicamente a inserção ou sorteio duplicado de qualquer questão no mesmo exame (resolvendo o bug de repetições).
