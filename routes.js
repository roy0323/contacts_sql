const express = require('express');
const router = express.Router();
const sql = require('./sql');

router.post('/createContact', (req, res) => {
    const { first_name, last_name, email, mobile_number, data_store } = req.body;
    if (data_store === 'DATABASE') {
        const contact = { first_name, last_name, email, mobile_number };
        const sql = 'INSERT INTO contacts SET ?';
        sql.query(sql, contact, (err, result) => {
            if (err) throw err;
            res.send('Contact added to database');
        });
    } 
});

router.get('/getContact', (req, res) => {
    const { contact_id, data_store } = req.query;
    console.log('contact_id:', contact_id);
    console.log('data_store:', data_store);

    if (data_store === 'DATABASE') {
        const sql = `SELECT * FROM contacts WHERE id = ?`;
        sql.query(sql, [contact_id], (err, result) => {
            if (err) {
                console.error('Database query error:', err);
                return res.status(500).send('Database query error');
            }
            console.log('Query result:', result);
            res.json(result);
        });
    } else {
        res.status(400).send('Unsupported data store');
    }
});


router.post('/updateContact', (req, res) => {
    const { contact_id, new_email, new_mobile_number, data_store } = req.body;
    if (data_store === 'DATABASE') {
        const sql = `UPDATE contacts SET email = '${new_email}', mobile_number = '${new_mobile_number}' WHERE id = ${contact_id}`;
        sql.query(sql, (err, result) => {
            if (err) throw err;
            res.send('Contact updated in database');
        });
    }
});

router.post('/deleteContact', (req, res) => {
    const { contact_id, data_store } = req.body;
    if (data_store === 'DATABASE') {
        const sql = `DELETE FROM contacts WHERE id = ${contact_id}`;
        sql.query(sql, (err, result) => {
            if (err) throw err;
            res.send('Contact deleted from database');
        });
    }
});

module.exports = router;
