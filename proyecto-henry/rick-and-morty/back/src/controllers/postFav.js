const {Favorite} = require('../DB_connection')


const postFav = async (req, res) =>{


    try {
        const {id, name, origin, status, image, species, gender} = req.body
        
        if(!id || !name || !origin || !status || !image || !species || !gender){
            return res.status(401).send('Faltan Datos')
        }
        
         await Favorite.findOrCreate({where: {id},
            defaults:{ name, origin, status, image, species, gender}})

            const favs = await Favorite.findAll();
            res.json(favs)
        
    } catch (error) {
        return res.status(500).json(error.message)
    }


}

module.exports = postFav