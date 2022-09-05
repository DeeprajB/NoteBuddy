const express = require("express");

const Note = require("../models/note.js");

const router = new express.Router();

router.post("/create", async (req, res) => {
    
    try {
        const title = req.body.title;
        const content = req.body.content;
        const pinned = req.body.pinned;
        const note = await Note.create({
            title: title,
            content: content,
            pinned: pinned
        });
        res.json({note: note})
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
});

router.get("/getall/:pageno", async (req, res) => {
    try {
        const notes = await (await Note.find().sort( { pinned: -1, updatedAt: -1 } ))
        const pageCount = Math.ceil(notes.length / 6);
        let page = req.params.pageno;
        if (!page) { page = 1;}
        if (page > pageCount) {
            page = pageCount
        }
        res.json({
            "page": page,
            "pageCount": pageCount,
            "notes": notes.slice(page * 6 - 6, page * 6)
        });
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
});

router.get("/note/:id", async (req, res) => {
    try {
    const noteId = req.params.id;
    const note = await Note.findById(noteId);
    res.json({ note });   
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
});

router.delete("/note/:id", async (req, res) => {
    try {
    const noteId = req.params.id;
    await Note.deleteOne({ id: noteId });
    res.json({ success: "Note has been deleted!" });
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
});

router.patch("/note/:id", async (req, res) => {
    try {

    const noteId = req.params.id;
    const { title, content, pinned } = req.body;
    await Note.findByIdAndUpdate(noteId, {
        title,
        content,
        pinned
    });
    const note = await Note.findById(noteId);
    res.json({ note });
    } catch (e) {
        console.log(e)
        res.status(500).send(e);
    }
});

module.exports = router;