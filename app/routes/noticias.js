const dbConnection=require('../../config/dbConnection');//importação do arquivo dbConnection;

module.exports=function(app){//exportação do modulo, como parametro a rota app;

var connection=dbConnection(); //executando a conexão do dbconnection sem parametros para o arquivo noticias.ejs, para que conecte com o banco de dados;

app.get('/noticias',function(req,res){//rota para a rota noticias com os parametros req res;

	connection.query('select * from noticias', function(error, result){//a variavel que criamos onde selecionamos o bancode dados da tabela noticias;
		//a function possui dois parametros o primeiro pode trazer o erro e/ou a enderização do arquivo noticias.ejs
		if(error){
			console.log(error)
		};
		//res.send(result);//resposta do query para cliente;
		res.render('noticias/noticias.ejs',{noticias:result});//renderização da tela noticias.ejs juntamente com o envio da variavel result;
	});
});
}
 //os objetos jason são aqueles entre {};