/* const http = require("http");
const {getCharById} = require('./controllers/getCharById')
const PORT = 3001;



http.createServer((req, res)=>{

 res.setHeader('Access-Control-Allow-Origin', '*')

  const {url} = req
  if(url.includes('/rickandmorty/character')){
      const id = Number(url.split('/').at(-1 ))
      
      getCharById(res, id)

  }else{
    res.writeHead(404, {'Content-Type': 'application/json'})
    return res.end(JSON.stringify({error: 'Character not found'}))
   }


}).listen(PORT, 'localhost', null, ()=>{
  console.log(`listening to port ${PORT}`)
}) */

require('dotenv').config()
//const {PORT} = process.env
const {conn} = require('./DB_connection')
const server = require('./app')

const PORT = 3001

conn.sync({
  force: false
}).then(()=>{

  server.listen(PORT, ()=>{
    console.log(`Server raised on port ${PORT}`)
  })  
}).catch(err=>{
  console.log(err)
})    


