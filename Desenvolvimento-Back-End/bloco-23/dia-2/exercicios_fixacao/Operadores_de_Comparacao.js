// 1) Selecione e faça a contagem dos restaurantes presentes nos bairros 
// (campo borough ) Queens , Staten Island e Bronx .

db.restaurants.filter({
  borough: {
    $in: ["Queens", "Staten Island", "Brooklyn"]
  }
}).count()

// 2) Selecione e faça a contagem dos restaurantes que não possuem culinária 
// (campo cuisine ) do tipo American .

db.restaurants.find({ cuisine: { $ne: "American" } }).count();

// 3) Selecione e faça a contagem dos restaurantes que possuem avaliação (campo rating ) 
// maior ou igual a 8 .

db.restaurants.find({ rating: { $gte: 8 } }).count();

// 4) Selecione e faça a contagem dos restaurantes que possuem avaliação menor que 4 .
db.restaurants.find({ rating: { $lt: 4 } }).count();

// 5) Selecione e faça a contagem dos restaurantes que não possuem as avaliações 5 , 6 e 7 .
db.restaurants.find({ rating: { $nin: [5, 6, 7] } }).count();