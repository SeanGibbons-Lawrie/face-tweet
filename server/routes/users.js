import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const groups = await db.getGroups()
    //const users2 = await db.getMember()
    res.render('index', { groups : groups  })
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})
router.get('/group/:id', async(req,res)=>{
  const id = req.params.id
  const members= await db.getMember(id)
  console.log(members)
  res.render('group',members)
})

export default router
