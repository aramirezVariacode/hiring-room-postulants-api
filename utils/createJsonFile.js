const fs = require("fs");
const createJsonFile = (data, fileName) => {
  const jsonContent = JSON.stringify(data, null, 2); // Convertir el objeto a JSON formateado

  fs.writeFile(`${fileName}.json`, jsonContent, "utf8", function (err) {
    if (err) {
      console.log("Ocurrió un error al guardar el archivo JSON:", err);
    } else {
      console.log("Archivo JSON guardado con éxito!");
    }
  });
};

module.exports = {
  createJsonFile,
};
