var database = require("../database/config")

function autenticar(credenciais) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", credenciais.email, credenciais.senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${credenciais.email}' AND senha = '${credenciais.senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(credenciais) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", credenciais.email, credenciais.senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario VALUES (null, '${credenciais.email}', '${credenciais.senha}', ${credenciais.permissao}, ${credenciais.fkEmpresa} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarPermissao(permissao){
    var instrucao = `SELECT autoridade from PERMISSAO where id = ${permissao}`
    return database.executar(instrucao)
}

function puxarPermissoes(){
    console.log("ACESSEI O USUARIO MODEL PUXAR PERMISSOES")
    var instrucao = `select * from permissao`
    return database.executar(instrucao)
}

module.exports = {
    autenticar,
    cadastrar,
    puxarPermissoes,
    verificarPermissao
};