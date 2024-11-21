import express from "express";

import { getBook } from "../controller/book.controller.js";

const bookrouter= express.Router()

bookrouter.get("/", getBook);

export default bookrouter;