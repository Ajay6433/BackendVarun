const express = require('express');
const router = require('express').Router();

const {createTodo} = require('../controller/todo.controller');

router.post('/', createTodo);

module.exports = router;
