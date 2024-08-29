const puppeteer = require("puppeteer");
/* 
const { DEFAULT_INTERCEPT_RESOLUTION_PRIORITY } = require("puppeteer");
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(
  AdblockerPlugin({
    // Optionally enable Cooperative Mode for several request interceptors
    interceptResolutionPriority: DEFAULT_INTERCEPT_RESOLUTION_PRIORITY,
  })
);
 */
let browser = null;




const candidates = [
  {
    "postulant": {
      "id": "6691affe912e5a38052205f8",
      "nombre": "Max",
      "apellido": "Ortiz",
      "email": "max.ortiz.b@usach.cl",
      "fechaNacimiento": "28-03-2001",
      "telefonoFijo": "999213992",
      "telefonoCelular": null,
      "dni": "20694471-4",
      "cuil": null,
      "genero": "masculino",
      "fotoPerfil": null,
      "presentacionPostulante": null,
      "redesSociales": {
        "linkedin": null,
        "facebook": null,
        "twitter": null,
        "googlePlus": null,
        "skype": null,
        "website": null
      },
      "direccion": {
        "pais": "Chile",
        "provincia": "Región Metropolitana",
        "ciudad": "Las Condes",
        "direccion": "Los pozos 6855",
        "paisId": 1007,
        "provinciaId": 77,
        "ciudadId": 128258
      },
      "nacionalidad": "Chile",
      "experienciasLaborales": [
        {
          "empresa": "Usach",
          "puesto": "Ayudante calculo 1",
          "mesDesde": 3,
          "añoDesde": 2023,
          "mesHasta": null,
          "añoHasta": null,
          "trabajoActual": true,
          "pais": "Chile",
          "area": "Ingenierías",
          "subArea": "Ingeniería Química",
          "industria": "Educación",
          "seniority": "Junior",
          "descripcion": "Realizacion de clases, auditoria alumnos y correccion de evaluaciones"
        }
      ],
      "estudios": null,
      "conocimientos": [
        {
          "tipo": "Idiomas",
          "nombre": "Inglés",
          "nivel": "Avanzado",
          "calificacion": null,
          "descripcion": "Oral. Nivel: Avanzado"
        },
        {
          "tipo": "Idiomas",
          "nombre": "Inglés",
          "nivel": "Intermedio",
          "calificacion": null,
          "descripcion": "Escrito. Nivel: Intermedio"
        },
        {
          "tipo": "Idiomas",
          "nombre": "Español",
          "nivel": "Nativo",
          "calificacion": null,
          "descripcion": "Oral. Nivel: Nativo"
        },
        {
          "tipo": "Idiomas",
          "nombre": "Español",
          "nivel": "Nativo",
          "calificacion": null,
          "descripcion": "Escrito. Nivel: Nativo"
        },
        {
          "tipo": "Idiomas",
          "nombre": "Alemán",
          "nivel": "Básico",
          "calificacion": null,
          "descripcion": "Oral. Nivel: Básico"
        },
        {
          "tipo": "Idiomas",
          "nombre": "Alemán",
          "nivel": "Básico",
          "calificacion": null,
          "descripcion": "Escrito. Nivel: Básico"
        }
      ],
      "referencias": null,
      "fechaPostulacion": "12-07-2024",
      "fechaAplicacion": null,
      "fuente": "linkedinjobs",
      "legajo": null,
      "salarioPretendido": null,
      "vacanteId": "6668bf795af3e4a3071b11e9",
      "etapa": "En revisión",
      "vacanteNombre": "Data Entry Associate - Part time",
      "disponibilidadHoraria": null,
      "disponibilidadRelocacion": null,
      "calificacion": null,
      "comentarios": null,
      "rechazado": "no",
      "tags": [
        {
          "nombre": "Secundaria completa",
          "creadoPor": "Max Ortiz",
          "fechaCreacion": "12-07-2024"
        }
      ],
      "reportes": null,
      "adjuntos": {}
    }
  },
  // Puedes agregar más objetos aquí
];

  

const getCvHiringRoom = async (postulantId) => {
  try {
    browser = await puppeteer.launch({
      headless: false,
      executablePath: process.env.EXECUTABLE_PATH,
      defaultViewport: null,
      slowMo: 10,
      args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"
    );

/*       await page.setViewport({
        width: 3024,
        height: 1964,
        deviceScaleFactor: 1,
      });
 */
    await page.goto("https://variacode.hiringroom.com/app/main/login");
    await delay(500);

    //search username input
    await page.waitForSelector("#login-email");

    const inputUsername = await page.$("#login-email");
    await inputUsername.click();
    await page.type("#login-email", process.env.HR_USERNAME);

    //search password input
    await page.waitForSelector("#login-password");
    const inputPassword = await page.$("#login-password");
    await inputPassword.click();
    await page.type("#login-password", process.env.HR_PASSWORD);

    //login button
    await page.waitForSelector("#submit_login");
    const loginButton = await page.$("#submit_login");
    await loginButton.click();

    await page.waitForNavigation();

    const bodyPage = await page.$("body");
    await bodyPage.click();

 
    for(const candidate of candidates){
      await page.goto(
        `https://variacode.hiringroom.com/app/postulant/getPostulant/${candidate.postulant.id}/${candidate.postulant.vacanteId}`
      );
     await page.waitForSelector(".files")

      const filesTab = await page.$(".files");
      await filesTab.click();
      // Espera a que el elemento esté disponible en la página
      await page.waitForSelector('div.linkDownload a[target="_blank"]');
      page.click('div.linkDownload a[target="_blank"]');

      await delay(900000);
    }
    await delay(1000);

    await browser.close();
  } catch (error) {
    console.error("Error occurred:", error);
    return "No content for this search";
  }
};

const delay = (miliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, miliseconds);
  });
};

module.exports = {
  getCvHiringRoom,
};
