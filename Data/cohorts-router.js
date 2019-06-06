const db = require("./cohorts-model"); //has both tables

const router = require('express').Router();

//install knex and driver

router.get('/:id/students', (req,res) =>{
    db.getStudents(req.params.id)
    .then(students => {
        res.status(200).json(students)
    })
    .catch(error =>{
        res.status(500).json(error)
    })
})

//configure knex
router.get('/', (req, res) => {
  // get the cohorts from the database
  db.find()
  .then(cohorts => {
    res.status(200).json(cohorts)
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

router.get('/:id', (req, res) => {
  db.findById(req.params.id)
  .then(cohorts =>{
    if(cohorts ===  undefined){
      res.status(404).json({message: 'cohort not found'})
    }
    res.status(200).json(cohorts)
  })
  .catch(error =>{
    res.status(500)
  })
});

router.post('/', (req, res) => {
  db.add(req.body)
  .then(ids =>{
    res.status(201).json(ids)
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.put('/:id', (req, res) => {
  db.update(req.body,req.params.id)
 
  .then(count => { // get number of changes back
    if (count > 0){
      res.status(200).json({message: "updated"})
    }
    res.status(404).json({message:"not updated"})
  })
    .catch(error => {
      res.status(500).json(error)
    
    })
})

router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
  .then(count => { // get number of changes back
    if (count > 0){
      res.status(200).json({message: "cohort deleted"})
    }
    res.status(404).json({message:" cohort not deleted"})
  })
    .catch(error => {
      res.status(500).json(error)
    
    })
});

module.exports = router;