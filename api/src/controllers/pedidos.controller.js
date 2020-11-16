require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
    { useUnifiedTopology: true });

client.on("connect", () => {
        console.log("Base de Dados no Mongodb nosql conectado com sucesso!!");
});
    


exports.listapedidosdecliente =  async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);

    try {
        await client.connect();
      const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidos');

       //const filter = { idade: { $gt: 20 } };
       await pedidos.find().forEach(p => console.log(p));
   } finally {
       await client.close();
   }
    
}


//exports.listapedidosdepedidos =  async (req, res) => {
//    const id = parseInt(req.params.id);
//    console.log(id);
//
//    try {
//        await client.connect();
//      const pessoas = client.db(`${process.env.MONGO_DATABASE}`).collection('pessoa');
//
//       //const filter = { idade: { $gt: 20 } };
//       await pessoas.find().forEach(p => console.log(p));
//   } finally {
//       await client.close();
//   }
//    
//}

exports.criarpedido =  async (req, res) => {
    const id = parseInt(req.params.id);
    const {idProduto, preco, datahora } = req.body;
    const produtos = {
        
        idcCliente: id,

    };

    try {
        await client.connect();
        const pedidos = client.db(`${process.env.MONGO_DATABASE}`).collection('pedidos');
        await pedidos.insertOne(produtos).then(console.log('INSERIDO!'));
    } finally {
        await client.close();
    }
    //exports.atualizarPedido =  async (req, res) => {
//    try {
    //        await client.connect();
}
//        const pessoas = client.db(`${process.env.MONGO_DATABASE}`).collection('pessoa');
//

//        await pessoas.insertOne(obj).then(console.log('INSERIDO!'));
//    } finally {
//        await client.close();
//    }
//}




//async function deletePessoa(filter){//    try{//        await client.connect();

//        const pessoas = client.db(`${process.env.MONGO_DATABASE}`).collection('pessoa');
//
//        const result = await pessoas.deleteOne(filter);
//        console.log(`${result.deletedCount} documentos Removidos`);
//    }finally{
//        await client.close();
//    }
//}


