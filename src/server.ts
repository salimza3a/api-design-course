import express from 'express'
import router from './router';

import morgan from 'morgan'
import { protect } from './modules/auth';
import { createNewUser, signIn } from './handlers/user';

const customLogger = (message) => (req,res,next) => {
    console.log(`Hello from ${message}`)
    next()
}


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))
app.use(customLogger('Jack Dorsey'))

app.get('/',(req,res,next) => {
    res.status(200).json({message: 'hello'})
    console.log('hello')
})

app.use('/api',protect,router)

app.post('/user', createNewUser)
app.post('/signin', signIn)
export default app