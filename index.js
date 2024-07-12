require("dotenv").config();


const { getDataPostulants } = require("./functions/getDataPostulants");
const { getCvHiringRoom } = require("./pupeteer/downloadCvHR");
const { readJsonFile } = require ("./functions/insertDataPostulants");
    // search username input


//obtener los postulantes
/*  getDataPostulants()  */


 readJsonFile();
 


//pupeteer
/* getCvHiringRoom();
 */