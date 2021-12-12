"use strict";
exports.__esModule = true;
var express_1 = require("express");
var posts_1 = require("../controllers/posts");
var router = express_1.Router();
router.get('/posts', posts_1.getPosts);
exports["default"] = router;
