const app=require('./config/server.js');//importação do modulo express do arquivo server.js;
const rotaHome=require('./app/routes/home')(app);//importação do da rota principal;
const rotaNoticias=require('./app/routes/noticias')(app);//importação do da rota de noticias;
const rotaAdmin=require('./app/routes/admin')(app);//importação do da rota de formulario;
//Cria um servidor rodando na porta 3000;
app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});

//variavel (app) significa, executando a variavel rotaHome passando de parametro (app);