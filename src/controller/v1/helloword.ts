import express from 'express';

const router = express.Router();
 
router.get('/', (req, res) => {
  res.send('Hello v1.0 GET API ');
});

router.get('/', (req, res) => {
    res.send('Hello v1.0 POST API ');
  });
 
 
module.exports = router;