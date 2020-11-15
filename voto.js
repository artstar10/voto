// o script pode ser executado com node.js baixar em https://nodejs.org/en/
const nome = "Arthur";
const idade = 24;

console.log("Bem vindo ao sistema de urna eletrônica! "+nome);

// condição para votar
if (idade >= 18){
    console.log('Você é obrigado a votar pois você tem '+idade+" anos");
 }else if(idade <= 17){
     console.log('Seu voto é opcional, pois você tem '+idade+" anos");
 }

 // função de retorno de documentos
 function DocumentosObrigatorios(){
     const rg = "00.000.000-0";
     const tituloDeEleitor = "000-000-000-00";
     const meusDocumentos = "RG: "+rg+"\n"+"Titulo de Eleitor: "+tituloDeEleitor;
     console.log(meusDocumentos)
 }
 DocumentosObrigatorios();// chamada da função 

 //função de justificativa de voto
 function justificarVoto(){
     const aplicativo = 'E-título';
     const localidade = 'Cartório';
     console.log("Seu voto pode ser justificado pelo aplicativo "+aplicativo+" ou no "+localidade+" eleitoral")
 }
 justificarVoto()