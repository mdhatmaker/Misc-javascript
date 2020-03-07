'use strict';
var express = require('express');
var router = express.Router();

// https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-edgehtml/get-started
// https://itnext.io/pwa-splash-screen-and-icon-generator-a74ebb8a130
// https://www.pwabuilder.com/
// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction
// https://developers.google.com/web/tools/puppeteer/


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
