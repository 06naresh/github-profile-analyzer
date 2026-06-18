const express = require('express');
const { analyzeProfile, getAllProfiles, getProfileByUsername } = require('../controllers/profileController');

const router = express.Router();

router.get('/analyze/:username', analyzeProfile);
router.get('/', getAllProfiles);
router.get('/:username', getProfileByUsername);

module.exports = router;
