require('dotenv').config();
const redis = require("redis");

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

client.on("connect", function(error){
    console.log("Base de Dados no Redis nosql conectado com sucesso!!");
});


// Criar Carrinho no banco redis 

exports.criarcarrinho = async (req, res) => {
    var atual = []
    const id = parseInt(req.params.id);
    const {codigo, quantidade} = req.body;
    const produtos = {
        
        codigo: codigo,
        quantidade: quantidade,
        
    };


    client.get(id, function(err, reply){
        
    //Atualizar Carrinho
    if(reply != null){
        atual = JSON.parse(reply)
        console.log("Carrinho já existe");
        atual.push(produtos)      
        client.setex(id, 3600, JSON.stringify(atual), function(err, resp){
            if(err) throw err;
            console.log(resp);
       });
        res.status(201).send({
            message: "Carrinho atualizado!",
            body: {
              product: { id}
            },
          });
    
    //Criar um novo carrinho

    }else{

    atual.push(produtos)
    client.setex(id, 3600, JSON.stringify(atual), function(err, resp){
    if(err) throw err;
    console.log(resp);
    }); 
  
    res.status(201).send({
      message: "Carrinho criado no Redis",
      body: {
        product: { id}
      },
    });
    }
    });
};

// Lista todo carrinho do usuário

exports.listarCarrinho = async (req, res) => {
    const id = parseInt(req.params.id);
    client.get(id, function(err, reply){
    if(reply != null){
        const teste = JSON.parse(reply);
        res.status(200).send(teste);
    }else{
        console.log("Chave Não encontrada");
    }
});
};


// Apagar Carrinho pelo id

exports.excluirCarrinho = async (req, res) => {
    const id = parseInt(req.params.id);
    client.del(id, function(err, resp){
        if(err) throw err;
        console.log(resp)
});
    res.status(201).send({
        message: "Carrinho Excluido",
        body: {
        product: { id}
    },
  });
};