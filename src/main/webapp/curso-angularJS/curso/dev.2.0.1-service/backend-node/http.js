var router = require('./router');

var app = router(3412);

//criando a váriavel operadora inserindo alguns dados
var operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
    {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
    {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
    {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
    {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

//criando váriavel contatos e inserindo alguns dados
var contatos = [
    {nome: "Pedro", telefone: "999999",data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "blue"},
    {nome: "Guilherme", telefone: "999999", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}, cor: "red"},
    {nome: "Romer", telefone: "999999",data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, cor: "pink"},
    {nome: "Rafael", telefone: "999999",data: new Date(), operadora: {nome: "GVT", codigo: 25, categoria: "Fixo"}, cor: "black"},
];

app.interceptor(function (req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*');
	next();
});

app.interceptor(function (req, res, next){
	res.setHeader('Access-Control-Allow-Methods','*');
	next();
});

app.interceptor(function (req, res, next){
	res.setHeader('Access-Control-Expose-Headers','*');
	next();
});

app.interceptor(function (req, res, next){
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	next();
});
//formatar carset=UTF-8 para gravar letras com acentos
app.interceptor(function (req, res, next) {
	res.setHeader('Content-Type', 'application/json;charset=UTF-8');
	next();
  });

app.get('/contatos', function (req, res){
	res.write(JSON.stringify(contatos));
	res.end();
});

app.get('/operadoras', function (req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.post('/contatos', function (req, res){
	var contato = req.body;
	console.log(contato);
	contatos.push(JSON.parse(contato));
	res.end();
});

app.options('/contatos', function (req, res){
	res.end();
});
