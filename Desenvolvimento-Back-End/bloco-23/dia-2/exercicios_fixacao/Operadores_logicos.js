// 1) Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5 , 
// essa query também deve retornar restaurantes que não possuem o campo avaliação.
db.restaurants.find({ rating: { $not: { $lte: 5 } }}).count();

// 2) Selecione e faça a contagem dos restaurante em que a avaliação seja maior ou igual a 6 , 
// ou restaurantes localizados no bairro Brooklyn .
db.restaurants.find({ rating: { $not: { $lte: 5 } }}).count();

// 3) Selecione e faça a contagem dos restaurantes localizados nos bairros Queens , 
// Staten Island e Broklyn e possuem avaliação maior que 4 . borough
db.restaurants.find({
  $and: [
    {
      borough: {$in: ["Queens", "Staten Island", "Broklyn"]}
    },
    {
      rating: {$gt: 4}
    }
  ]
});

// 4) Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1 , 
// nem o campo culinária seja do tipo American .
db.restaurants.find({
    $nor: [
      {
        rating: {
          $eq: 1
        }
      },
      {
        cuisine: {
        $eq: "American"
        }
      }
    ]
});

// 5) Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10, 
// e esteja localizado no bairro Brooklyn ou não possuem culinária do tipo Delicatessen .
db.restaurants.find({
  $and: [
    {
      $or: [
        {
          rating: { $gt: 6, $lt: 10}
        }
      ]
    },
    {
      $or: [
        {cuisine: { $ne: "Delicatessen" }},
        {borough: "Brooklyn"}
      ]
    }
  ]
}).count();