module.exports=function(app){
//rota para a página do formulário de inclusão de noticia;
app.get('/formularioinclusaonoticia',(req,res)=>{
	res.render('admin/form_add_noticia.ejs');
});
}

//para exportar função que seria o caso, precisamos colocar function. 
//RESPOSTA: exportação do arquivo para a rota da pagina de formulario de noticias por meio de .get e parametros res e req (resposta e requisição);