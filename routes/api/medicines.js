const express = require('express');
const router = express.Router();

//medicine model
const Medicine = require('../../models/Medicine');

//GET api/medicines route to get all medicines
router.get('/', (req, res) => {
    Medicine.find()
        .sort({ date: -1 })
        .then(medicines => res.json(medicines))
});

//GET api/medicines/id route to get a medicine
router.get('/:id', (req, res) => {
    Medicine.findById(req.params.id)
        .then(medicine => res.json({ medicine}))
        .catch(err => res.status(404).json({ success: false }));
});

//POST api/medicines route to add medicine
router.post('/', (req, res) => {
    const newMedicine = new Medicine({
        name: req.body.name
        // generic_name: req.body.generic_name,
        // general_information: req.body.general_information,
        // side_effects: req.body.side_effects
    });
    newMedicine.save().then(medicine => res.json(medicine));
});    

//PUT api/medicines/id route to update a medicine
router.put('/:id', (req, res) => {
    Medicine.findByIdAndUpdate(req.params.id, req.body)
        .then(medicine => res.json(medicine))
        .catch(err => res.status(404).json({ success: false }));
});    
 
//DELETE api/medicines/id route to delete a medicine
router.delete('/:id', (req, res) => {
    Medicine.findById(req.params.id)
        .then(medicine => medicine.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({ success: false }));
});    

module.exports = router;