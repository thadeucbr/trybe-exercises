// Exercícios de fixação

// Operador $limit

// Utilizando o banco de dados agg_example , faça os seguintes exercícios:
// Selecione todas as transações feitas pelo cliente chamado "Dave America";
db.transactions.aggregate(
  [
    {
      $match: {
        from: "Dave America"
      }
    }
  ]
);
// Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";
db.transactions.aggregate(
  [
    {
      $match: {
        $or: [
          {value: {
            $gt: 700, $lt: 6000
          }},
          {to: "Lisa Simpson"}
        ]
      }
    }
  ]
);
// Selecione três transações com o valor acima de 1000.
db.transactions.aggregate(
  [
    {
      $match: {
        value: {
          $gt: 1000
        }
      }
    },
    {
      $limit: 3
    }
  ]
);


// Selecione todos os bancos;
db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank"
      }
    }
  ]
);
// Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        valorTotal: {
          $sum: "$value"
        },
        transacoes: {
          $sum: 1
        }
      }
    }
  ]
);
// Selecione o valor total de transações;
db.transactions.aggregate(
  [
    {
      $group: {
        _id: null,
        totalTransacoes: {
          $sum: "$value"
        }
      }
    }
  ]
);
// Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate(
  [
    {
      $group: {
        _id: "$bank",
        valorTotalTransacoes: {
          $sum: "$value"
        }
      }
    },
    {
      $match: {
        valorTotalTransacoes: {
          $gt: 1000
        }
      }
    }
  ]
);

// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate(
  [
    {
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "from",
        as: "transacoesFeitas"
      }
    }
  ]
);
// Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate(
  [
    {
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "to",
        as: "transacoesRecebidas"
      }
    },
    {
      $limit: 4
    }
  ]
);
// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate(
  [
    {
      $match: {
        State: "Florida"
      }
    },
    {
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "to",
        as: "transacoesRecebidas"
      }
    }
  ]
);
