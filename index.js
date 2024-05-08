require("dotenv").config();
const fs = require("fs");
const { getPostulants, getPostulantById } = require("./api/postulants");

const getData = async () => {

     let postulantes = [];
for (let index = 0; index < 438; index++) {

 await getPostulants(index).then(async ({ data }) => {
    const ids = data.curriculums.map((item) => item.id);
   
    for (const id of ids) {
      let postulantData = await getPostulantById(id).then(({ data }) => data);
      postulantes.push(postulantData);
    }
    const postulantesConLinkedin = postulantes.filter(
      (postulante) => postulante.postulant.redesSociales.linkedin !== null
    );
    const postulantesSinLinkedin = postulantes.filter(
      (postulante) => postulante.postulant.redesSociales.linkedin === null
    );

    const postulantesConAdjunto = postulantes.filter(
      (postulante) => postulante.postulant.adjuntos !== null
    );

        const postulantessinAdjunto = postulantes.filter(
          (postulante) => postulante.postulant.adjuntos === null
        );








         const postulantesConLinkedinYadjunto = postulantes.filter(
           (postulante) =>
             postulante.postulant.redesSociales.linkedin !== null &&
             postulante.postulant.adjuntos !== null
         );
         const conLinkedinYSinAdjunto = postulantes.filter(
           (postulante) =>
             postulante.postulant.redesSociales.linkedin !== null &&
             postulante.postulant.adjuntos === null
         );

         const postulantesConAdjuntoSinLinkedin = postulantes.filter(
           (postulante) =>
             postulante.postulant.redesSociales.linkedin === null &&
             postulante.postulant.adjuntos !== null
         );

         const postulanteSinAdjuntoYSinLinkedin = postulantes.filter(
           (postulante) =>
             postulante.postulant.adjuntos === null &&
             postulante.postulant.redesSociales.linkedin === null
         );


    /* 
 console.log(JSON.stringify(postulantes, null, 2)); */
    guardarJSON(postulantes);

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
  });
}



}

getData();
const guardarJSON = (data) => {
  const jsonContent = JSON.stringify(data, null, 2); // Convertir el objeto a JSON formateado

  fs.writeFile("output.json", jsonContent, "utf8", function (err) {
    if (err) {
      console.log("Ocurrió un error al guardar el archivo JSON:", err);
    } else {
      console.log("Archivo JSON guardado con éxito!");
    }
  });
};
