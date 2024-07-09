
const { createJsonFile } = require("../utils/createJsonFile");
const { getPostulants, getPostulantById } = require("../api/postulants");
const { loginHR } = require("../api/loginHiringRoom");
const getDataPostulants = async () => {
 
    let token = null;
    const {data} = await loginHR();
    token = data.token;
    if(data.token){
         let postulantes = [];
         for (let index = 0; index < 88; index++) {
           console.log(`Cargando pagina ${index}`);
           await getPostulants(index,token).then(async ({ data }) => {
             const ids = data.curriculums.map((item) => item.id);

             for (const id of ids) {
               let postulantData = await getPostulantById(id,token).then(
                 ({ data }) => data
               );
               postulantes.push(postulantData);
             }
           });
         }




         //TODO.... base de datos








         //guarda el total de postulantes
         createJsonFile(postulantes, "total-postulantes");

         //////////////////////////////////////////////////////////////////

         const postulantesConLinkedin = postulantes.filter(
           (postulante) => postulante.postulant.redesSociales.linkedin !== null
         );
         createJsonFile(postulantesConLinkedin, "postulantes-con-linkedin");

         //////////////////////////////////////////////////////////////////

         const postulantesSinLinkedin = postulantes.filter(
           (postulante) => postulante.postulant.redesSociales.linkedin === null
         );

         createJsonFile(postulantesSinLinkedin, "postulantes-sin-linkedin");

         //////////////////////////////////////////////////////////////////

         const postulantesConAdjunto = postulantes.filter(
           (postulante) => postulante.postulant.adjuntos !== null
         );

         createJsonFile(postulantesConAdjunto, "postulantes-con-adjunto");

         //////////////////////////////////////////////////////////////////

         const postulantessinAdjunto = postulantes.filter(
           (postulante) => postulante.postulant.adjuntos === null
         );

         createJsonFile(postulantessinAdjunto, "postulantes-sin-adjunto");

         //////////////////////////////////////////////////////////////////

         const postulantesConLinkedinYadjunto = postulantes.filter(
           (postulante) =>
             postulante.postulant.redesSociales.linkedin !== null &&
             postulante.postulant.adjuntos !== null
         );

         createJsonFile(
           postulantesConLinkedinYadjunto,
           "postulantes-con-linkedin-y-adjunto"
         );

         //////////////////////////////////////////////////////////////////

         const conLinkedinYSinAdjunto = postulantes.filter(
           (postulante) =>
             postulante.postulant.redesSociales.linkedin !== null &&
             postulante.postulant.adjuntos === null
         );

         createJsonFile(
           conLinkedinYSinAdjunto,
           "postulantes-con-linkedin-y-sin-adjunto"
         );
         //////////////////////////////////////////////////////////////////

         const postulantesConAdjuntoSinLinkedin = postulantes.filter(
           (postulante) =>
             postulante.postulant.redesSociales.linkedin === null &&
             postulante.postulant.adjuntos !== null
         );

         createJsonFile(
           postulantesConAdjuntoSinLinkedin,
           "postulantes-con-adjunto-y-sin-linkedin"
         );

         //////////////////////////////////////////////////////////////////

         const postulanteSinAdjuntoYSinLinkedin = postulantes.filter(
           (postulante) =>
             postulante.postulant.adjuntos === null &&
             postulante.postulant.redesSociales.linkedin === null
         );

         createJsonFile(
           postulanteSinAdjuntoYSinLinkedin,
           "postulantes-sin-adjunto-y-sin-linkedin"
         );

         //////////////////////////////////////////////////////////////////

         /* 
 console.log(JSON.stringify(postulantes, null, 2)); */
         console.log("total de Postulantes");
         console.log(postulantes.length);
         console.log("---------------------------------");
         console.log("Postulantes con linkedin");
         console.log(postulantesConLinkedin.length);
         console.log("---------------------------------");
         console.log("Postulantes sin linkedin");
         console.log(postulantesSinLinkedin.length);
         console.log("---------------------------------");

         console.log("Postulantes con adjunto");
         console.log(postulantesConAdjunto.length);
         console.log("---------------------------------");
         console.log("Postulantes sin adjunto");
         console.log(postulantessinAdjunto.length);

         console.log("---------------------------------");

         console.log("Postulantes con linkedin y adjunto");
         console.log(postulantesConLinkedinYadjunto.length);
         console.log("---------------------------------");
         console.log("Postulantes con linkedin y sin adjunto");
         console.log(conLinkedinYSinAdjunto.length);
         console.log("---------------------------------");

         console.log("Postulantes con adjunto y sin linkedin");
         console.log(postulantesConAdjuntoSinLinkedin.length);
         console.log("---------------------------------");
         console.log("Postulantes sin datos");
         console.log(postulanteSinAdjuntoYSinLinkedin.length);

    }else{
        console.log("Error login");
    }

 
}


module.exports = {
    getDataPostulants
}
