const express = require("express");

const Note = require("../models/note.js");

const router = new express.Router();

router.post("/notes", async (req, res) => {
    
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
        
    }
});

router.get("/notes", async (req, res) => {
    try {
        
    } catch (e) {
        
    }
});

router.get("/notes/:id", async (req, res) => {
    try {
        
    } catch (e) {
        
    }
});

router.delete("/notes/:id", async (req, res) => {
    try {
        
    } catch (e) {
        
    }
});

module.exports = router;