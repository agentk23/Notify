const express = require('express');
const db = require('../models/db');
const Note = db.notes;
const router = express.Router();
var url = require('url');

// get one note by id
router.get('/:id', (req, res) => {
    let id = req.params.id;
    try {
        (async () => {
            const getNote = await Note.findByPk(id);
            if (getNote) {
                res.status(200).json(getNote);
            }
            else {
                res.status(404).json({ message: "No note found" });
            }
        })();

    }
    catch (error) {
        res.status(400).json(error);
    }
});
router.get('/', (req, res) => {
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;
    let uuid = query.uid;
    try {
        (async () => {
            const getNote = await Note.findAll({
                where: { uuid: uuid }
            });
            if (query) {
                res.status(200).json(getNote);
            }
            else {
                res.status(404).json({ message: "No notes found" });
            }
        })();

    }
    catch (error) {
        res.status(400).json(error);
    }
});
router.put('/:id', (req, res) => {
    let body = req.body;
    let id = req.body.noteID;
    try {
        (async () => {
            await Note.update({
                title: body.title,
                content: body.content
            }, {
                where: { noteID: id }
            });
        })()
        .then(() => {
            res.status(200).json({ message: "Note updated" });
            });
    }
    catch (error) {
        res.status(400).json(error);
    }

});



    router.post('/', (req, res) => {
        let body = req.body;
        try {
            (async () => {
                await Note.create({
                    uuid: body.uid,
                    title: body.title,
                    content: body.content
                });
            })()
                .then(() => {
                    res.status(200).json({ message: "Note created" });
                });
        } catch (error) {
            res.status(400).json(error);
        }
    });


    module.exports = router;
