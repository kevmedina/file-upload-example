const express = require('express');
const router = express.Router();

const Dragon = require('../../models/Dragon.model');
const uploadCloud = require('../../config/cloudinary-setup');


// Dragon home page
router.get('/', (req, res, next) => {
  Dragon.find()
  .then(allDragons => {
    res.render('dragons/dragons-home', { dragons: allDragons });
  })
  .catch(err => next(err));
});

// our create router for the new dragon
router.post('/create', uploadCloud.single('image'), (req, res, next) => {
  console.log({ body: req.body, file: req.file });
  const dragonInputInfo = req.body;
  dragonInputInfo.image = req.file.url;

  Dragon.create(dragonInputInfo)
  .then(newlyCreatedDragon => {
    console.log(`The newly created dragon: ${newlyCreatedDragon}`);
    res.redirect('back');
  })
  .catch(err => next(err));
});

module.exports = router;