module.exports=function(app){
//rota para a página principal do app;
app.get('/',function(req,res){
	res.render('home/index.ejs');
});
}

//RESPOSTA: exportação do arquivo para a rota da pagina principal por meio de .get e parametros res e req (resposta e requisição);