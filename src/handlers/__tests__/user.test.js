import * as user from '../user'

describe('user handler', () => { 
    it('should create a new user', async () => {
        const req = {body: {username: 'idk', password: 'hi'}}
        const res = {json({token}) {
          console.log(token,'token')
            expect(token).toBeTruthy()
        }}


      await user.createNewUser(req,res,()  =>{})
    })
 })