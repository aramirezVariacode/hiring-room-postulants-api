require("dotenv").config();


const { getDataPostulants } = require("./functions/getDataPostulants");
const { getCvHiringRoom } = require("./pupeteer/downloadCvHR");
const { readJsonFileAndInsertData } = require ("./functions/insertDataPostulants");
    // search username input


//obtener los postulantes
/*  getDataPostulants()  */ 

  /*readJsonFileAndInsertData(); */
 


//pupeteer
 getCvHiringRoom();
