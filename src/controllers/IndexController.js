
// Configuração para conexão com o banco de dados
const fs = require("fs");
const { Sequelize } = require("../config/sequelize"); 
const db = require("../config/sequelize");

const Tarefas = require("../models/Tarefas");



const indexController = {
  index: async (req, res) => {
try {

    //*Variavel que chama todos os dados da tabela Tarefas*//
    const tarefas = await Tarefas.findAll({
        order: [['prioridade', 'DESC']],

    });

    


    res.render("index", {
      title: "Tarefas",
      tarefas,
    });

} catch (error) {
    console.error(error);
    return res.status(500).render("error", {
      title: "Erro",
      message: "Ocorreu um erro ao carregar as tarefas em index",
    });
  }
  },
  show: async (req, res) => {
    try {
        const { id } = req.params;
        const detailsTarefas = await Tarefas.findByPk(id);

        if (!detailsTarefas) {
            return res.status(404).render("error", {
                title: "Erro",
                message: "Tarefa não encontrada",
            });
        }

        res.render("tarefaViews", {
            title: "Visualização de Tarefa",
            detailsTarefas,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).render("error", {
            title: "Erro",
            message: "Ocorreu um erro ao carregar os detalhes da Tarefa",
        });
    }
},

updateEstado: async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    const tarefa = await Tarefas.findByPk(id);

    if (!tarefa) {
      return res.status(404).render("error", {
        title: "Erro",
        message: "Tarefa não encontrada",
      });
    }

    await tarefa.update({ estado });

    console.log(req.body);

    res.json({ message: 'Estado atualizado com sucesso' }); // Responde com JSON

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar o estado da Tarefa' }); // Responde com JSON
  }
},

updateTempoRestante: async (req, res) => {
  try {
      const { id } = req.params;
      const { tempoRestante } = req.body; // Recebe o novo tempo restante

      const tarefa = await Tarefas.findByPk(id);

      if (!tarefa) {
          return res.status(404).render("error", {
              title: "Erro",
              message: "Tarefa não encontrada",
          });
      }

      await tarefa.update({ tempo: tempoRestante }); // Atualiza o tempo restante

      res.json({ message: 'Tempo restante atualizado com sucesso' });

  } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar o tempo restante da Tarefa' });
  }
},



  create: async (req, res) => {
     res.render("tarefaCreate", {
      title: "Criação da Tarefa",
    });
  },

  store: async (req, res) => {

    //*Recebe os dados do formulario de criação de tarefas e salva na tabela Tarefas do banco de dados *//
    const {nome_tarefa, data, tempo, observacao, prioridade, recorrente } = req.body;
    console.log(req.body);

    // Convertendo o tempo de 'HH:MM' para segundos
const [hours, minutes] = tempo.split(':').map(Number);
const tempoInSeconds = (hours * 3600) + (minutes * 60);
    try{

       //* Salva os dados recebidos na tabela Tarefas do Banco de daods *//
       const NewTarefa = await Tarefas.create({
        nome_tarefa, 
        data, 
        tempo: tempoInSeconds,  // Armazenando o tempo em segundos
        observacao, 
        prioridade, 
        recorrente
    });


        res.redirect("/index");
    } catch (error) {
      console.error(error); // Adicione essa linha para registrar o erro no console
      res.render("/index", {
        title: "Erro",
        message: "Erro ao criar Tarefa!",
        NewTarefa,
      });
    }
  },



  edit: async (req, res) => {
    res.render("", {
      title: "",
    });
  },
  update: async (req, res) => {
    res.render("", {
      title: "",
    });

},

  delete: async (req, res) => {
    res.render("", {
      title: "",
    });
  },

  destroy: async (req, res) => {
    res.render("", {
      title: "",
    });
  },
};

module.exports = indexController;
