const bd = require('./bd')


const postagens = bd.seq.define('check', {
    id: {
     primaryKey: true,
     autoIncrement: true,
     unique: true,
     type: bd.sequelize.INTEGER,
     allowNull: false
    },
    titulo: {
      type: bd.sequelize.STRING,
      allowNull: false
    },
    descricao: {
     type: bd.sequelize.STRING,
     allowNull: false,
    },
    status: {
      type: bd.sequelize.STRING,
      allowNull:false,
    },
    responsavel: {
     type: bd.sequelize.STRING,
    
    },
    prazo: {
       type: bd.sequelize.DATEONLY,
     
    },
    data: {
     type: bd.sequelize.DATEONLY,
     
    },
    createdAt: {
    allowNull: false,
    type: bd.sequelize.DATE
    },
    updatedAt: {
       allowNull: false,
       type: bd.sequelize.DATE
    }

})
//postagens.sync({force:true})
module.exports = postagens


