const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    const flag = req.query.flag;

    if (flag === '1') {
        res.cookie('auth_token', 'basic', { httpOnly: false });
        return res.render('level3_success', { title: 'Granted' });
    }

    res.render('level3', {
        title: 'System Node',
        access: flag || '0'
    });
});

router.get('/panel', (req, res) => {
    res.render('level4', { title: 'Control Panel' });
});

router.get('/admin', (req, res) => {
    if (req.cookies.auth_token === 'root') {
        return res.render('level5', { title: 'Core Access' });
    }

    res.status(403).send('403 // ACCESS DENIED');
});

module.exports = router;