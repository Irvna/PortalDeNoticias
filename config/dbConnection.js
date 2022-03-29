const mysql=require('mysql');//importação do módulo mysql;

module.exports=function(){//executa uma função com o banco de dados
	return mysql.createConnection({//o createConnection tem no caso de 1 parametros, contando os ponto e virgulas
		//esse parametro tem 4
		host:'localhost',
		user:'root',
		password:'ifms',
		database:'portal_noticias'
	});//cria conexão com o banco de dados portal_noticias;
}