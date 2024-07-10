require("dotenv").config();


const { getDataPostulants } = require("./functions/getDataPostulants");
const { getCvHiringRoom } = require("./pupeteer/downloadCvHR");
const { readJsonFile } = require ("./functions/insertDataPostulants");
    // search username input


/* getDataPostulants() */

/* getCvHiringRoom();
 */

readJsonFile();
