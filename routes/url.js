import express from "express";
import { handleGenerateshortUrl,handleGetUrl,handleGetUrlClicks } from "../controllers/url.js";
const Router = express.Router();


Router.post('/',handleGenerateshortUrl);
Router.get('/:id',handleGetUrl)
Router.get('/clicks/:id',handleGetUrlClicks)

export {Router};