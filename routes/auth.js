const express = require('express');
const crypto = require('crypto');
const router = express.Router();

const hash = (txt) =>
    crypto.createHash('md5').update(txt).digest('hex');

router.get('/', (req, res) => {
    res.render('level1', {
        title: 'Access Gateway',
        error: req.query.e
    });
});

router.post('/auth', (req, res) => {
    const input = req.body.password || '';

    if (hash(input.toLowerCase()) === hash(process.env.SECRET_WORD)) {
        return res.render('level2', { title: 'Verification', error: false });
    }

    res.redirect('/?e=1');
});

router.post('/verify', (req, res) => {
    const val = req.body.count;

    if (val === '16') {
        return res.redirect('/data?flag=0');
    }

    res.render('level2', { title: 'Verification', error: true });
});

module.exports = router;