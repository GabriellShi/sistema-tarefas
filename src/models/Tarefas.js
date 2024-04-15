const db = require("../config/sequelize");
const Sequelize = require("sequelize");

const Tarefas = db.define(
  "Tarefas",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    nome_tarefa: {
      type: Sequelize.DataTypes.STRING(100),
    },

    data: {
      type: Sequelize.DataTypes.STRING(100),
    },

    tempo: {
        type: Sequelize.DataTypes.STRING(100),
    },

    observacao: {
      type: Sequelize.DataTypes.TEXT(1000),
    },

    prioridade: {
        type: Sequelize.DataTypes.STRING(100),
    },

    recorrente: {
        type: Sequelize.DataTypes.STRING(100),
    },

    estado: {
      type: Sequelize.DataTypes.STRING(50),
      defaultValue: "pendente" // pode ser 'iniciada', 'pausada', 'concluída'
    },

 //* ------------------------------*//
  },

  {
    tableName: "tarefas", // Defina o nome da tabela aqui
    timestamps: false, // Isso desativará as colunas de timestamps
  }
);

module.exports = Tarefas;
