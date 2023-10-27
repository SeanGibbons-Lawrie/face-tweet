import express from 'express'
import fsPromises from 'node:fs'
import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const groups = await db.getGroups()
    //const users2 = await db.getMember()
    res.render('index', { groups: groups })
    console.log(groups)
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }

})
router.get('/group/:id', async (req, res) => {
  const id = req.params.id

  const members= await db.getGroupMembers(id)
 console.log({members:members})
  res.render('group',{members:members})

})
router.get('/member/:id', async(req,res)=>{
  const id = req.params.id

  const member = await db.getMemberGroups(id) 


  console.log({member:member})
  res.render('member',{member:member})
})

export default router
