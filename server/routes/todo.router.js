const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    queryText = `SELECT * FROM "chekov-list" ORDER BY "priority", "id";`;
    pool.query(queryText)
    .then((result) => {
        console.log('GET /chekov-list successful');
        res.send(result.rows);
    }).catch((error) => {
        console.log('GET /chekov-list error', error);
        res.sendStatus(500);
    })
})
// POST
router.post('/', (req, res) => {
    let todo = req.body;
    let queryText = `
    INSERT INTO "chekov-list" ("priority", "title", "description", "duedate")
    VALUES ($1, $2, $3, $4);
    `;
    pool.query(queryText, [todo.priority, todo.task, todo.description, todo.duedate])
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
    DELETE FROM "chekov-list" WHERE "id" = $1;
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
    UPDATE "chekov-list" SET "completed" = NOT "completed",
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