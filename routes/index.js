var router = require('express').Router();

router.get('/', (req, res)=>{
   res.send('Welcome SiteMate API');
});

router.use('/item', require('./item').default);


module.exports = router;


