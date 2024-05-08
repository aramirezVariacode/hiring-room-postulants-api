require("dotenv").config();
const { default: axios } = require("axios");


const api = axios.create({ baseURL: process.env.HIRING_ROOM_API_URL });

module.exports = { api };
