 //require('dotenv').config()
const axios = require('axios')
//const { response } = require('express')
/*
const {URL} = process.env

const getCharById = (res, id) =>{

axios(`${URL}/${id}`)
.then(({data})=>{
const {
    name, gender, species, origin = origin.name, image, status
} = data
const character = {
    id,
    name,
    gender,
    species,
    origin,
    image,
    status
}

res.writeHead(200, {'Content-Type': 'application/json'})
return res.end(JSON.stringify(character))


})
.catch((err)=>{
    res.writeHead(500, {'Content-Type': 'text/plain'})
   return res.end(JSON.stringify(err.message))

})

}


module.exports = {
    getCharById
}
 */

const URL = 'https://rickandmortyapi.com/api/character'
const getCharById = async (req, res) =>{
    try{
    const {id} = req.params

    const { data } = await axios(`${URL}/${id}`)

    const { 
        name,
        status, 
        species, 
        origin = origin.name,
        image,
        gender} = data
    const character = {
        id, 
        name,
        status, 
        species, 
        origin,
        image,
        gender

    }

    return name ?
    res.json(character) : res.status(404).json({message: error})
    
}catch(err){
    return res.status(500).json({message: err})
}





/*     const {id} = req.params
    axios(`${URL}/${id}`).then(({data})=>{
      
        const {
            id, 
            name,
            status, 
            species, 
            origin = origin.name,
            image,
            gender,
            error
        } = data
        const character = {
            id, 
            name,
            status, 
            species, 
            origin,
            image,
            gender

        }
        return name ?
        res.json(character) : res.status(404).json({message: error})
    }).catch((err)=>{
        return res.status(500).json({message: err})
    }) */
}


module.exports = getCharById

