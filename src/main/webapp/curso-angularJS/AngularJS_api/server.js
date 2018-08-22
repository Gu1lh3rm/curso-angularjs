var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var operadoras = [
	{operadora_nome: "Oi", operadora_codigo: 14, operadora_categoria: "Celular", operadora_preco: 2},
	{operadora_nome: "Vivo",operadora_codigo: 15, operadora_categoria: "Celular", operadora_preco: 1},
	{operadora_nome: "Tim", operadora_codigo: 41, operadora_categoria: "Celular", operadora_preco: 3},
	{operadora_nome: "GVT", operadora_codigo: 25, operadora_categoria: "Fixo", operadora_preco: 1},
	{operadora_nome: "Embratel", operadora_codigo: 21, operadora_categoria: "Fixo", operadora_preco: 2}
];

var contatos = [
  {contato_id: 1, contato_nome: "Bruno", contato_telefone: "9999-2222", contato_data: new Date(), operadoras: operadoras[0]},
  {contato_id: 2, contato_nome: "Sandra", contato_telefone: "9999-3333", contato_data: new Date(), operadoras: operadoras[1]},
  {contato_id: 3, contato_nome: "Mariana", contato_telefone: "9999-9999", contato_data: new Date(), operadoras: operadoras[2]}
];


app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/api/contatos/:contato_id', function(req, res) {
  contatos.forEach(function (contato) {
  	if (contato.contato_id == req.params.contato_id) {
  		res.json(contato);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/api/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/api/operadoras', function(req, res) {
  res.json(operadoras);
});

app.listen(process.env.PORT || 8080);
