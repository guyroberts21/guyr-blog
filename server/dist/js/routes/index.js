"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_1 = require("../controllers/posts");
const router = express_1.Router();
router.get('/posts', posts_1.getPosts);
exports.default = router;
