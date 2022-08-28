const db = require('../database/models')
const {Op} = require('sequelize')

const homeController = {
    homeGet: async (req,res) =>{
        const livros = await db.Livro.findAll({
            where:{
                ano_lancamento: {[Op.gte]:'2011'}
            }
        })
        res.render('home', {livros})
    }
}

module.exports = homeController