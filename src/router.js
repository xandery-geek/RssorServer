const express = require('express')
const router = express.Router()


// GET METHODS
router.get('/user', ()=>{})
router.get('/user/all', ()=>{})
router.post('/user/forgt', ()=>{})
router.get('/category', ()=>{})

router.get('/favorite', ()=>{})

router.get('/rss', ()=>{})
// /rss/[all | readed | unreaded]
router.get(/^\/rss\/(\w+)$/, ()=>{})
router.get('/rss/refreash', ()=>{})

router.get('/article', ()=>{})

// POST METHODS
router.post('/register', ()=>{})
router.post('/login', ()=>{})
router.post('/logout', ()=>{})
router.post('/reset', ()=>{})

router.post('/category/new', ()=>{})
router.post('/category/delete', ()=>{})
router.post('/category/rename', ()=>{})

router.post('/rss/new', ()=>{})
router.post('/rss/delete', ()=>{})
router.post('/rss/update', ()=>{})

router.post('/article/readed', ()=>{})
router.post('/article/star', ()=>{})

module.exports = router
