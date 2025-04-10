let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let studentSchema = require('../models/Student');

// CREATE Student
router.post('/students', (req, res, next) => {
  studentSchema.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      return next(error);
    });
});

// READ Students
router.get('/', (req, res) => {
  studentSchema.find()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      return next(error);
    });
});

// Get Single Student
router.get('/update-student/:id', (req, res) => {
  studentSchema.findById(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error(error);
      return next(error);
    });
});

// Update Student
router.put('/students/:id', (req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  })
    .then(data => {
      res.json(data);
      console.log('Student updated successfully !');
    })
    .catch(error => {
      console.error(error);
      return next(error);
    });
});

// Delete Student
router.delete('/students/:id', (req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id)
    .then(data => {
      res.status(200).json({
        msg: data
      });
    })
    .catch(error => {
      console.error(error);
      return next(error);
    });
});

module.exports = router;
