const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
        title: String,

        content: {
            type: String,
            required: true,
        },
        pinned: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;