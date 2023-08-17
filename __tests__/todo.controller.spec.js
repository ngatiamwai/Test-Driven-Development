import request from 'supertest'
import app from '../server'


describe('Todos', ()=>{
    it('should get all the todos', async()=>{
        const res = await request(app).get('/')
        expect(res.status).toBe(200)
        expect(res.body.todos).toBeInstanceOf(Array)
    })

    it('should get a single todo', async()=>{
        const res = await request(app).get('/todos/1')
        expect(res.statusCode).toBe(200)
        expect(res.body.todo).toEqual(
            expect.objectContaining({
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            completed: expect.any(Boolean)
            })
    )
    })

    it('should throw error if todo not found', async()=>{
        const res = await request(app).get('/todos/uih1')
        expect(res.statusCode).toBe(404)
        expect(res.body.error).toBe('Todo not found')
    })
})