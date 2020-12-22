const cors = require('cors');
var app = require("express")(); app.use(cors());
var bodyParser = require("body-parser");
//app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true}));


 
var questions = [
    {
      question: 'What is your name?',
      options: ['Rashmi', 'Nitish', 'Poonam', 'Priyallll'],
      answer: 'Rashmi'
    },
    {
      question: 'Where do you Live?',
      options: ['India', 'Hungary', 'USA', 'Nigeria'],
      answer: 'Hungary'
    },
    {
      question: 'Who is PM of India?',
      options: ['Ghandi', 'Mordi', 'Gagan', 'Kumar'],
      answer: 'Mordi'
    }
  ]

//Get All List of Questions
app.get("/quiz/questions", function(req, res){
    res.json(questions);
});

//Get Particular Question
app.get("/quiz/questions/:id", function(req, res){
    var id = req.params.id;
    var q = questions.find(x => x.id == id);
    res.json(q);
});

//Get options
app.get("/quiz/questions/:id/options", function(req, res){
    var id = req.params.id;
    var q = questions.find(x => x.id == id);
    res.json(q.options);
    
});

//Get Answers
app.get("/quiz/questions/:id/answer", function(req, res){
    var id = req.params.id;
    var q = questions.find(x => x.id == id);
    res.json(q.answer);
    
});

// PORT
app.listen(5000, () => console.log("RESTful Serveices Starts..."));