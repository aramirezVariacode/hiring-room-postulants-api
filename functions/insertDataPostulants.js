const fs = require("fs");
const postulantService = require("../services/postulantService");
const {querySqlService} = require("../services/querySqlService");
   const readJsonFile =  () =>{
     fs.readFile(
       "./jsonFilesData/total-postulantes.json",
       "utf-8",
       (err, data) => {
         if (err) {
           console.log(err);
           return;
         }

        /*  const postulants = JSON.parse(data); */

        const postulants = [
            {
  postulant: {
    id: "663bf750124273af7a4d186f",
    nombre: "Sebastian",
    apellido: "Larroulet",
    email: "sebastian.larroulet@gmail.com",
    fechaNacimiento: "11-11-1989",
    telefonoFijo: "949436062",
    telefonoCelular: null,
    dni: "173254407",
    cuil: null,
    genero: "masculino",
    fotoPerfil: null,
    presentacionPostulante: null,
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/sebastianlarroulet/",
      facebook: null,
      twitter: null,
      googlePlus: null,
      skype: null,
      website: null
    },
    direccion: {
      pais: "Chile",
      provincia: "Región Metropolitana",
      ciudad: "Pirque",
      direccion: null,
      paisId: 1007,
      provinciaId: 77,
      ciudadId: 162397
    },
    nacionalidad: "Chile",
    experienciasLaborales: [
      {
        empresa: "Talana",
        puesto: "Head of Product",
        mesDesde: 8,
        añoDesde: 2022,
        mesHasta: 4,
        añoHasta: 2024,
        trabajoActual: false,
        pais: "Chile",
        area: "Tecnología, Sistemas y Telecomunicaciones",
        subArea: "Liderazgo de Proyecto",
        industria: null,
        seniority: "Senior",
        descripcion: "Definir la estrategia de producto, alineando roadmaps entre productos (Remuneraciones, Asistencia y Gestión de Personas), disminuyendo en un 50% caídas del sistema Responsable del crecimiento del equipo, en terminos profesionales, estableciendo metas y planes de acción medibles, mejorando el eNPS en 20 puntos Definir prioridades de alto nivel en función a los objetivos de la compañia"
      }
    ],
    estudios: [
      {
        institucion: "U. Adolfo Ibáñez",
        titulo: "Ingenieria Comercial",
        mesDesde: 3,
        añoDesde: 2008,
        mesHasta: 12,
        añoHasta: 2012,
        estudioActual: false,
        pais: "Chile",
        area: "Ing. Comercial",
        nivel: "Universitario",
        estado: "Graduado",
        descripcion: null
      }
    ],
    conocimientos: [
      {
        tipo: "Idiomas",
        nombre: "Inglés",
        nivel: "Avanzado",
        calificacion: null,
        descripcion: "Oral. Nivel: Avanzado"
      },
      {
        tipo: "Idiomas",
        nombre: "Inglés",
        nivel: "Avanzado",
        calificacion: null,
        descripcion: "Escrito. Nivel: Avanzado"
      },
      {
        tipo: "Idiomas",
        nombre: "Portugués",
        nivel: "Básico",
        calificacion: null,
        descripcion: "Oral. Nivel: Básico"
      },
      {
        tipo: "Idiomas",
        nombre: "Portugués",
        nivel: "Básico",
        calificacion: null,
        descripcion: "Escrito. Nivel: Básico"
      }
    ],
    referencias: null,
    fechaPostulacion: "08-05-2024",
    fechaAplicacion: null,
    fuente: "talent",
    legajo: null,
    salarioPretendido: null,
    vacanteId: "6602ebd356d62c134afb1f0e",
    etapa: "En revisión",
    vacanteNombre: "Tech Project Manager",
    disponibilidadHoraria: null,
    disponibilidadRelocacion: null,
    calificacion: null,
    comentarios: null,
    rechazado: "no",
    tags: [
      {
        nombre: "Secundaria completa",
        creadoPor: "Sebastian Larroulet",
        fechaCreacion: "08-05-2024"
      }
    ],
    reportes: null,
    adjuntos: {}
  }
},
{
  postulant: {
    id: "663bf6f53475a9bb9abf7739",
    nombre: "Almendra",
    apellido: "Altamirano",
    email: "almendraaltamirano@gmail.com",
    fechaNacimiento: "04-08-1993",
    telefonoFijo: "987997007",
    telefonoCelular: null,
    dni: "185693651",
    cuil: null,
    genero: "femenino",
    fotoPerfil: "https://variacode.hiringroom.com/data/accounts/variacode/postulants/663bf6f53475a9bb9abf7739.webp",
    presentacionPostulante: null,
    redesSociales: {
      linkedin: "Almendraaltamirano",
      facebook: null,
      twitter: null,
      googlePlus: null,
      skype: null,
      website: null
    },
    direccion: {
      pais: "Chile",
      provincia: "Región Metropolitana",
      ciudad: "Las Condes",
      direccion: null,
      paisId: 1007,
      provinciaId: 77,
      ciudadId: 128258
    },
    nacionalidad: "Chile",
    experienciasLaborales: [
      {
        empresa: "Nutrimarket",
        puesto: "Analista de marketing y contenido",
        mesDesde: 3,
        añoDesde: 2022,
        mesHasta: null,
        añoHasta: null,
        trabajoActual: true,
        pais: "Chile",
        area: "Marketing y Publicidad",
        subArea: "Marketing",
        industria: "Farmacéutica",
        seniority: "Senior",
        descripcion: "Liderando equipos de diseño y contenido - Proponiendo y ejecutando plan de marketing - A cargo también de Trade Marketing y equipo punto de venta - Análisis y reportes de kpis en digital; meta ads, google ads, analytics."
      }
    ],
    estudios: [
      {
        institucion: "U. del Desarrollo",
        titulo: "Ingeniería comercial",
        mesDesde: 3,
        añoDesde: 2012,
        mesHasta: 12,
        añoHasta: 2017,
        estudioActual: false,
        pais: "Chile",
        area: "Ing. Comercial",
        nivel: "Universitario",
        estado: "Graduado",
        descripcion: null
      }
    ],
    conocimientos: [
      {
        tipo: "Idiomas",
        nombre: "Inglés",
        nivel: "Avanzado",
        calificacion: null,
        descripcion: "Oral. Nivel: Avanzado"
      },
      {
        tipo: "Idiomas",
        nombre: "Inglés",
        nivel: "Avanzado",
        calificacion: null,
        descripcion: "Escrito. Nivel: Avanzado"
      }
    ],
    referencias: null,
    fechaPostulacion: "08-05-2024",
    fechaAplicacion: null,
    fuente: "linkedinjobs",
    legajo: null,
    salarioPretendido: null,
    vacanteId: "662fd4791c12bb62aa85e825",
    etapa: "En revisión",
    vacanteNombre: "Digital Marketing Lead",
    disponibilidadHoraria: null,
    disponibilidadRelocacion: null,
    calificacion: null,
    comentarios: null,
    rechazado: "no",
    tags: [
      {
        nombre: "Secundaria completa",
        creadoPor: "Almendra Altamirano",
        fechaCreacion: "08-05-2024"
      }
    ],
    reportes: null,
    adjuntos: {}
  }
}

        ]

         for (const item of postulants) {

            //TODO: implenetar las funciones para insertar data a la base de datos

            //insertar postulantes

            const {
              id,
              nombre,
              apellido,
              email,
              fechaNacimiento,
              telefonoFijo,
              telefonoCelular,
              dni,
              cuil,
              genero,
              fotoPerfil,
              presentacionPostulante,
              nacionalidad,
              fechaPostulacion,
              fechaAplicacion,
              fuente,
              legajo,
              salarioPretendido,
              vacanteId,
              etapa,
              vacanteNombre,
              disponibilidadHoraria,
              disponibilidadRelocacion,
              calificacion,
            } = item.postulant;

            const postulantData = {
              id,
              nombre,
              apellido,
              email,
              fecha_nacimiento : fechaNacimiento,
              telefono_fijo : telefonoFijo,
              telefono_celular : telefonoCelular,
              dni,
              cuil,
              genero,
              foto_perfil : fotoPerfil,
              presentacion_postulante : presentacionPostulante,
              nacionalidad,
              fecha_postulacion : fechaPostulacion,
              fecha_aplicacion : fechaAplicacion,
              fuente,
              legajo,
              salario_pretendido : salarioPretendido,
              vacante_id : vacanteId,
              etapa,
              vacante_nombre : vacanteNombre,
              disponibilidad_horaria : disponibilidadHoraria,
              disponibilidad_relocacion : disponibilidadRelocacion,
              calificacion,
            };
            
           querySqlService.insert("postulant", postulantData);
           console.log("registros")
        
         }
       }
     );

   }

 



module.exports = {
    readJsonFile
}