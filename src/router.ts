import {Router} from 'express';

const router = Router();
// Product
router.get('/product',(req,res,next) => {
    res.status(200).json({message: req.hey_be_quiet})
})
router.get('/product/:id',() => {})
router.put('/product/:id',() => {})
router.post('/product/',() => {})
router.delete('/product/:id',() => {})



// Update

router.get('/update',() => {})
router.get('/update/:id',() => {})
router.put('/update/:id',() => {})
router.post('/update/',() => {})
router.delete('/update/:id',() => {})


// Update Point

router.get('/updatepoint',() => {})
router.get('/updatepoint/:id',() => {})
router.put('/updatepoint/:id',() => {})
router.post('/updatepoint/',() => {})
router.delete('/updatepoint/:id',() => {})


export default router
