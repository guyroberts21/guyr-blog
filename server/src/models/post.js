"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var postSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports["default"] = mongoose_1.model('Todo', postSchema);
