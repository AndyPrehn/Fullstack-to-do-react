const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    queryText = `SELECT * FROM "todo" ORDER BY "priority", "id";`;
    pool.query(queryText)
    .then((result) => {
        console.log('GET /todo successful');
        res.send(result.rows);
    }).catch((error) => {
        console.log('GET /todo error', error);
        res.sendStatus(500);
    })
})
// POST
router.post('/', (req, res) => {
    let todo = req.body;
    let queryText = `
    INSERT INTO "todo" ("objective", "deadline")
    VALUES ($1, $2);
    `;
    pool.query(queryText, [todo.objective, todo.deadline])
    .then(() => {
        console.log('Successful POST')
        res.sendStatus(200);
    }).catch((error) => {
        console.error('POST req', error);
        res.sendStatus(500);
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    console.log('DELETE', req.params);
    let queryText = `
    DELETE FROM "todo" WHERE "id" = $1;
    `;
    pool.query(queryText, [req.params.id])
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in Delete', error);
        res.sendStatus(500);
    })
});

// PUT
router.put('/:id', (req, res) => {
    console.log('PUT req', req.params);
    let date = new Date();
    date = date.toISOString();
    const queryText =`
    UPDATE "todo" SET "completed" = NOT "completed",
    "date_completed" = $2
    WHERE "id" = $1;
    `;
    pool.query(queryText, [req.params.id, date])
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.error(' Error in PUT ', error);
        res.sendStatus(500);
    })
})


module.exports = router;