const router = require('express').Router();
const userRoutes = require('./user-routes');
// const thoughtRoutes = require('./thought-routes');

// add prefix of `/users` 
router.use('/users', userRoutes);
// router.use('/thoughts', thoughtRoutes);
// router.use('./')

module.exports = router;
