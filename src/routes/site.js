const { Router } = require('express');
const express = require('express')
const router = express.Router();


const siteController = require('../Controllers/SiteController');

    router.get('/',siteController.index);
    router.get('/login',siteController.login);
    router.post('/login',siteController.checklogin);
    router.get('/register',siteController.register);
    router.post('/register',siteController.signup);
module.exports = router;