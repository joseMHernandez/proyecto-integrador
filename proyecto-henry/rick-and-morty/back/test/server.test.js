const app = require('../src/app');
const session = require('supertest');
//const { response } = require('../src/app');

const agent = session(app)
describe('Test de RUTAS', ()=>{


    describe( 'GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async ()=>{
            const response = await agent.get('/rickandmorty/character/1')
            expect(response.statusCode).toEqual(200)
        })

     it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" "image"`, async ()=>{
        const response = await agent.get('/rickandmorty/character/1')
       
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('species')
        expect(response.body).toHaveProperty('gender')
        expect(response.body).toHaveProperty('status')
        expect(response.body).toHaveProperty('origin')
        expect(response.body).toHaveProperty('image')

     })           

     it('Si hay un error responde con status: 500', async ()=>{
        const response = await agent.get('/rickandmorty/character/0000000000')
        expect(response.statusCode).toEqual(500)
     })

     it('GET /rickandmorty/login', async()=>{
const response = await agent.get('/rickandmorty/Login?email=email@email.com&password=12345678')
expect(response.body.access).toEqual(true) 
     })

     it('GET /rickandmorty/login', async()=>{
        const response = await agent.get('/rickandmorty/Login?email=email@email.com&password=12345')
        expect(response.body.access).toBeFalsy() 
             })
             
     
 

     describe('POST /rickandmorty/fav', ()=>{
         const character1 = {id: 1, name: 'NOMBRE 1'}
         const character2 = {id: 2, name: 'NOMBRE 2'}
         it('devuelve el arreglo enviado por body', async ()=>{
             const response = await agent.post('/rickandmorty/fav').send(character1)
             expect(response.body).toContainEqual(character1)
     
         })

         it('devuelve el arreglo por body con dos personajes', async ()=>{
            const response = await agent.post('/rickandmorty/fav').send(character2)
            expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(character2)
    
        })
      })


      describe('DELETE /rickandmorty/fav/:id', ()=>{
        
        const character1 = {id: 1, name: 'NOMBRE 1'}
        const character2 = {id: 2, name: 'NOMBRE 2'}
        it('devuelve los personajes existentes luego de un ID invalido', async ()=>{
            const response = await agent.delete('/rickandmorty/fav/00000000')
            expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(character2)

    
        })

        it('se elimina un personaje favorito ', async ()=>{
           const response = await agent.delete('/rickandmorty/fav/1')
           expect(response.body).not.toContainEqual(character1)
          
   
       })


     })
 
  
     

    })
})


