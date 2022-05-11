function validaLogin(usuario,senha){
   // alert(`Você digitou ${usuario} ${senha}`)
   if(!usuario){
       alert('È obrigatorio informar o usuário');
       return false
   }
   if(!senha){
       alert('È obrigátorio iformar a senha');
       return false
   }
   if(usuário==='aluno@fatecitu.edu.br' && senha==='123456'){
       console.log ("vai carregar o menu")
       //carregaremos uma nova pagina
       window.location.href='http://127.0.0.1:5500/menu.html'
   }else{
       console.error("error na autenticação")
       alert('Os dados de autenticação são inválidos!')
   }
}