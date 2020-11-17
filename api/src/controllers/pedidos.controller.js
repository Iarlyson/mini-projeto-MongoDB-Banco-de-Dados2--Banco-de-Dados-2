require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
    { useUnifiedTopology: true });

client.connect(
        console.log("Base de Dados no Mongodb nosql conectado com sucesso!!")
);
    

exports.criarpedido =  async (req, res) => {
    const id = parseInt(req.params.id);
    const {produto, preco} = parseInt(req.body);
   
    const produtos = {
        cliente: id,
        dataehora: new Date(),
        produto: produto,
        preco: preco
    };
        const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidos');
        pedidos.insertOne(produtos).then(
    
    res.status(201).send({
        message: "Usuário novo Cadastrado",
        body: {
        },
    }));
}

exports.listapedidosdecliente =  async (req, res) => {
    const id = parseInt(req.params.id);
    const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidos');
    const filter = { cliente: id  };
    const resultado = pedidos.find(filter).forEach();
    res.status(200).send(resultado);
}


exports.listapedidosdeproduto =  async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await client.connect();
      const pessoas = client.db(`${process.env.MONGO_DATABASE}`).collection('pessoa');

       //const filter = { idade: { $gt: 20 } };
       await pessoas.find().forEach(p => console.log(p));
   } finally {
       await client.close();
   }
    
}


//exports.atualizarPedido =  async (req, res) => {
//    try {
//        await client.connect();
//}
//        const pessoas = client.db(`${process.env.MONGO_DATABASE}`).collection('pessoa');
//

//        await pessoas.insertOne(obj).then(console.log('INSERIDO!'));
//    } finally {
//        await client.close();
//    }
//}




//async function deletePessoa(filter){
//    try{
//   await client.connect();

//        const pessoas = client.db(`${process.env.MONGO_DATABASE}`).collection('pessoa');
//
//        const result = await pessoas.deleteOne(filter);
//        console.log(`${result.deletedCount} documentos Removidos`);
//    }finally{
//        await client.close();
//    }
//}


