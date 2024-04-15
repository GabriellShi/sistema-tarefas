 -- DROP DATABASE IF EXISTS tarefas_db;

-- Cria banco de dados
CREATE DATABASE tarefas_db;

-- Seleciona banco de  dados para uso
USE tarefas_db;

-- Cria tabela de usuário
CREATE TABLE tarefas(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nome_tarefa VARCHAR(100) NOT NULL,
    data VARCHAR(100) NOT NULL,
    tempo VARCHAR(100) NOT NULL,
    observacao TEXT(1000) NOT NULL,
    prioridade VARCHAR(100) NOT NULL,
    recorrente VARCHAR(100) NOT NULL,
    estado VARCHAR(50) DEFAULT 'pendente'
);

SELECT * FROM tarefas;

-- DROP TABLE tarefas; 


ALTER TABLE tarefas
DROP COLUMN remainingTime;

ALTER TABLE tarefas
DELETE estado VARCHAR(50) DEFAULT 'pendente';

