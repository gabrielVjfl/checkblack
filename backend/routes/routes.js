const express = require('express')

let router = express()

const Postagens = require('../models/lista')

const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({
    extended: true
}))
router.use(bodyParser.json())

router.get('/teste', (req,res) => {
    res.send('Teste')
})
router.post('/postar', async(req,res) => {

  const {titulo, descricao, status, responsavel, prazo, data} = req.body


  // if
  
  // else

  try {

const list = await Postagens.create(req.body)

     return res.send({list})
   
    }

    catch(err) {
     res.status(400).send({error: "Ocorreu um erro tente novamente!, veja se vc preencheu os campos corretamente"})
     console.log(err)
    }

})

router.get('/todo', async (req,res) => {
   await Postagens.findAll().then((suc) => {
        res.send(suc)


    }).catch((err) => {
        res.send({erro: 'Deu erro'})
        console.log(err)
    })
})
// Buscar pelo id
router.get('/buscar/:id', async (req,res) => {

    try {

    
    let acharPostagem = await Postagens.findOne({where: {id: req.params.id}})

         if(!await acharPostagem) {
             res.send({Erro: 'Postagem não encontrada'})
         }
         else {
             res.send(acharPostagem)
         }

    }

  catch(err) {

  }
    

})

router.get('/editar/:id', async(req,res) => {

    try {

    let acharPostagem = await Postagens.findOne({where: {id: req.params.id}})
            
        if(!await acharPostagem) {
            res.send({erro: 'Não tem esse id '})
        }

        else {
            res.send(acharPostagem)
        }

    }
    catch(err) {
        res.send({err: 'Deu erro'})
    }
       
})



router.delete('/deletar/:id', async(req, res) => {

    try {

   let lista = await Postagens.destroy({where: {id: req.params.id}})
          
        if(!await lista) {
            res.send({erro: 'Não tem!'})
        }

        else {
            res.status(200).send({sucess: 'Excluido!'})
        }

    }
    
    catch(err) {
         res.status(400).send({erro: 'deu erro'})
    }


    })
    



router.put('/alterar/:id', async(req,res) => {

    try {

    const {titulo, descricao, status, responsavel, data, prazo} = req.body

   // fazer a validação pra ver se tem usuario

   let lista = await Postagens.update(req.body, {where: {id: req.params.id}})
        
   if(!await lista) {
       res.send({erro: 'Não encontrado!'})
   }
   else {
       res.send({sucesso: 'Alterado!'})
   }

    }

    catch(err) {
       res.send({err: 'Deu erro'})
    }


})
// contagem
router.get('/count', (req,res) => {
    Postagens.count().then((registros) => {
        res.send({registros})

    }).catch((err) => {
        res.send({err:'Deu erro'})
    })

    
})


module.exports = router