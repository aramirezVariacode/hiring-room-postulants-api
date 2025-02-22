const fs = require("fs");
const postulantService = require("../services/postulantService");
const { querySqlService } = require("../services/querySqlService");

/* const postulants = [
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
        website: null,
      },
      direccion: {
        pais: "Chile",
        provincia: "Región Metropolitana",
        ciudad: "Pirque",
        direccion: null,
        paisId: 1007,
        provinciaId: 77,
        ciudadId: 162397,
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
          descripcion:
            "Definir la estrategia de producto, alineando roadmaps entre productos (Remuneraciones, Asistencia y Gestión de Personas), disminuyendo en un 50% caídas del sistema Responsable del crecimiento del equipo, en terminos profesionales, estableciendo metas y planes de acción medibles, mejorando el eNPS en 20 puntos Definir prioridades de alto nivel en función a los objetivos de la compañia",
        },
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
          descripcion: null,
        },
      ],
      conocimientos: [
        {
          tipo: "Idiomas",
          nombre: "Inglés",
          nivel: "Avanzado",
          calificacion: null,
          descripcion: "Oral. Nivel: Avanzado",
        },
        {
          tipo: "Idiomas",
          nombre: "Inglés",
          nivel: "Avanzado",
          calificacion: null,
          descripcion: "Escrito. Nivel: Avanzado",
        },
        {
          tipo: "Idiomas",
          nombre: "Portugués",
          nivel: "Básico",
          calificacion: null,
          descripcion: "Oral. Nivel: Básico",
        },
        {
          tipo: "Idiomas",
          nombre: "Portugués",
          nivel: "Básico",
          calificacion: null,
          descripcion: "Escrito. Nivel: Básico",
        },
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
          fechaCreacion: "08-05-2024",
        },
      ],
      reportes: null,
      adjuntos: {},
    },
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
      fotoPerfil:
        "https://variacode.hiringroom.com/data/accounts/variacode/postulants/663bf6f53475a9bb9abf7739.webp",
      presentacionPostulante: null,
      redesSociales: {
        linkedin: "Almendraaltamirano",
        facebook: null,
        twitter: null,
        googlePlus: null,
        skype: null,
        website: null,
      },
      direccion: {
        pais: "Chile",
        provincia: "Región Metropolitana",
        ciudad: "Las Condes",
        direccion: null,
        paisId: 1007,
        provinciaId: 77,
        ciudadId: 128258,
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
          descripcion:
            "Liderando equipos de diseño y contenido - Proponiendo y ejecutando plan de marketing - A cargo también de Trade Marketing y equipo punto de venta - Análisis y reportes de kpis en digital; meta ads, google ads, analytics.",
        },
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
          descripcion: null,
        },
      ],
      conocimientos: [
        {
          tipo: "Idiomas",
          nombre: "Inglés",
          nivel: "Avanzado",
          calificacion: null,
          descripcion: "Oral. Nivel: Avanzado",
        },
        {
          tipo: "Idiomas",
          nombre: "Inglés",
          nivel: "Avanzado",
          calificacion: null,
          descripcion: "Escrito. Nivel: Avanzado",
        },
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
          fechaCreacion: "08-05-2024",
        },
      ],
      reportes: null,
      adjuntos: {},
    },
  },
  {
    postulant: {
      id: "662930da77ca2646a65e67f5",
      nombre: "Vita",
      apellido: "Maksymyshyn",
      email: null,
      fechaNacimiento: null,
      telefonoFijo: null,
      telefonoCelular: null,
      dni: null,
      cuil: null,
      genero: null,
      fotoPerfil:
        "https://variacode.hiringroom.com/data/accounts/variacode/postulants/662930da77ca2646a65e67f5.webp",
      presentacionPostulante: null,
      redesSociales: {
        linkedin: "https://linkedin.com/in/vita-maksymyshyn-9b99a8151/",
        facebook: null,
        twitter: null,
        googlePlus: null,
        skype: null,
        website: null,
      },
      direccion: {
        pais: "Ucrania",
        provincia: null,
        ciudad: null,
        direccion: null,
        paisId: null,
        provinciaId: null,
        ciudadId: null,
      },
      nacionalidad: null,
      experienciasLaborales: [
        {
          empresa: "Newfold Digital Ukraine · Jornada completa",
          puesto: "Account Manager",
          mesDesde: 10,
          añoDesde: 2020,
          mesHasta: null,
          añoHasta: null,
          trabajoActual: true,
          pais: null,
          area: null,
          subArea: null,
          industria: null,
          seniority: null,
          descripcion: null,
        },
        {
          empresa: "Wrike",
          puesto: "Renewals Manager",
          mesDesde: 10,
          añoDesde: 2018,
          mesHasta: 3,
          añoHasta: 2020,
          trabajoActual: null,
          pais: null,
          area: null,
          subArea: null,
          industria: null,
          seniority: null,
          descripcion: null,
        },
        {
          empresa: "Tomermedia",
          puesto: "Customer Success Manager",
          mesDesde: 12,
          añoDesde: 2017,
          mesHasta: 9,
          añoHasta: 2018,
          trabajoActual: null,
          pais: null,
          area: null,
          subArea: null,
          industria: null,
          seniority: null,
          descripcion: null,
        },
        {
          empresa: "Helpware",
          puesto: "Manager Account",
          mesDesde: 3,
          añoDesde: 2016,
          mesHasta: 9,
          añoHasta: 2017,
          trabajoActual: null,
          pais: null,
          area: null,
          subArea: null,
          industria: null,
          seniority: null,
          descripcion: null,
        },
        {
          empresa: "Bayer",
          puesto: "Administrative Assistant",
          mesDesde: 4,
          añoDesde: 2014,
          mesHasta: 3,
          añoHasta: 2016,
          trabajoActual: null,
          pais: null,
          area: null,
          subArea: null,
          industria: null,
          seniority: null,
          descripcion: null,
        },
      ],
      estudios: [
        {
          institucion: null,
          titulo: "Master's degree, Accounting and Auditing",
          mesDesde: null,
          añoDesde: null,
          mesHasta: null,
          añoHasta: null,
          estudioActual: null,
          pais: null,
          area: null,
          nivel: null,
          estado: null,
          descripcion: null,
        },
      ],
      conocimientos: [
        {
          tipo: "Personalizado",
          nombre: "Linkedin Skill",
          nivel: null,
          calificacion: null,
          descripcion: "Business Case Preparation",
        },
        {
          tipo: "Personalizado",
          nombre: "Linkedin Skill",
          nivel: null,
          calificacion: null,
          descripcion: "Data Analytics",
        },
      ],
      referencias: null,
      fechaPostulacion: "24-04-2024",
      fechaAplicacion: null,
      fuente: "added",
      legajo: "no specify",
      salarioPretendido: null,
      vacanteId: "66040f7dd7a84e772b7b05ec",
      etapa: "Wade inter",
      vacanteNombre: "Renewals Manager/Contractor - Portugal",
      disponibilidadHoraria: "no specify",
      disponibilidadRelocacion: false,
      calificacion: null,
      comentarios: null,
      rechazado: [
        {
          vacanteId: "66040f7dd7a84e772b7b05ec",
          razon: "Por cierre de vacante",
          fechaRechazo: "08-05-2024",
        },
      ],
      tags: [
        {
          nombre: "ANI",
          creadoPor: "anigle",
          fechaCreacion: "24-04-2024",
        },
      ],
      reportes: null,
      adjuntos: {
        Vita: "https://variacode.hiringroom.com/app/postulant/downloadCV/662930da77ca2646a65e67f5/bda43c08c2ee8f95208ae71af26b49a9.pdf",
      },
    },
  },
  {
    postulant: {
      id: "663bc82e3475a966d1beedb9",
      nombre: "María",
      apellido: "Briceño",
      email: "mauxbriceno@gmail.com",
      fechaNacimiento: "25-02-1986",
      telefonoFijo: "944519133",
      telefonoCelular: null,
      dni: "260779796",
      cuil: null,
      genero: "femenino",
      fotoPerfil: null,
      presentacionPostulante: null,
      redesSociales: {
        linkedin: "linkedin.com/in/maria-auxiliadora-briceño-garcia-28562278",
        facebook: null,
        twitter: null,
        googlePlus: null,
        skype: null,
        website: null,
      },
      direccion: {
        pais: "Chile",
        provincia: "Región VII",
        ciudad: "Talca",
        direccion: null,
        paisId: 1007,
        provinciaId: 73,
        ciudadId: 8087,
      },
      nacionalidad: "Chile",
      experienciasLaborales: null,
      estudios: null,
      conocimientos: [
        {
          tipo: "Idiomas",
          nombre: "Inglés",
          nivel: "Intermedio",
          calificacion: null,
          descripcion: "Oral. Nivel: Intermedio",
        },
        {
          tipo: "Idiomas",
          nombre: "Inglés",
          nivel: "Intermedio",
          calificacion: null,
          descripcion: "Escrito. Nivel: Intermedio",
        },
      ],
      referencias: null,
      fechaPostulacion: "08-05-2024",
      fechaAplicacion: null,
      fuente: "linkedinjobs",
      legajo: null,
      salarioPretendido: null,
      vacanteId: "6627d7bf7d06111c19727bf3",
      etapa: "En revisión",
      vacanteNombre: "HRBP - Compensation",
      disponibilidadHoraria: null,
      disponibilidadRelocacion: null,
      calificacion: null,
      comentarios: [
        {
          vacante: "HRBP - Compensation",
          usuario: "mleon",
          comentario:
            "ha rechazado al postulante por el motivo <strong>No alcanza el nivel requerido de inglés</strong> con el comentario <strong></strong>",
          fecha: "08-05-2024",
        },
      ],
      rechazado: [
        {
          vacanteId: "6627d7bf7d06111c19727bf3",
          razon: "No alcanza el nivel requerido de inglés",
          fechaRechazo: "08-05-2024",
        },
      ],
      tags: [
        {
          nombre: "Secundaria completa",
          creadoPor: "María Briceño",
          fechaCreacion: "08-05-2024",
        },
      ],
      reportes: null,
      adjuntos: {},
    },
  },
]; */

const readJsonFileAndInsertData = () => {
  fs.readFile(
    "./jsonFilesData/total-postulantes.json",
    "utf-8",
    async (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const postulants = JSON.parse(data);

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
          fecha_nacimiento: formatDateString(fechaNacimiento),
          telefono_fijo: telefonoFijo,
          telefono_celular: telefonoCelular,
          dni,
          cuil,
          genero,
          foto_perfil: fotoPerfil,
          presentacion_postulante: presentacionPostulante,
          nacionalidad,
          fecha_postulacion: formatDateString(fechaPostulacion),
          fecha_aplicacion: formatDateString(fechaAplicacion),
          fuente,
          legajo,
          salario_pretendido: salarioPretendido,
          vacante_id: vacanteId,
          etapa,
          vacante_nombre: vacanteNombre,
          disponibilidad_horaria: disponibilidadHoraria,
          disponibilidad_relocacion: disponibilidadRelocacion,
          calificacion,
        };

        await querySqlService.insert("postulant", postulantData);

        //////////////////////////////// insertar en tabla address

        const {
          pais,
          provincia,
          ciudad,
          direccion,
          paisId,
          provinciaId,
          ciudadId,
        } = item.postulant.direccion;

        const addressData = {
          postulant_id: id,
          pais,
          provincia,
          ciudad,
          direccion,
          pais_id: paisId,
          provincia_id: provinciaId,
          ciudad_id: ciudadId,
        };

        await querySqlService.insert("address", addressData);

        //////////////////////// insertar en tabla social_media

        const { linkedin, facebook, twitter, googlePlus, skype, website } =
          item.postulant.redesSociales;

        const socialMediaData = {
          postulant_id: id,
          linkedin,
          facebook,
          twitter,
          google_plus: googlePlus,
          skype,
          website,
        };

        await querySqlService.insert("social_media", socialMediaData);

        //////////////////////////////   insertar en tabla experience

        if (item.postulant.experienciasLaborales !== null) {
          for (const itemExperience of item.postulant.experienciasLaborales) {
            const {
              empresa,
              puesto,
              mesDesde, 
              añoDesde,
              mesHasta,
              añoHasta,
              trabajoActual,
              pais: paisExperience,
              area,
              subArea,
              industria,
              seniority,
              descripcion,
            } = itemExperience;

            const experienceData = {
              postulant_id: id,
              empresa,
              puesto,
              mes_desde: removeNonNumber(mesDesde),
              ano_desde: removeNonNumber(añoDesde),
              mes_hasta: removeNonNumber(mesHasta),
              ano_hasta: removeNonNumber(añoHasta),
              trabajo_actual: trabajoActual,
              pais: paisExperience,
              area,
              sub_area: subArea,
              industria,
              seniority,
              descripcion: removeNullCharacters(descripcion),
            };
            await querySqlService.insert("experience", experienceData);
          }
        }

        //////////////////////////////   insertar en tabla education

        if (item.postulant.estudios !== null) {
          for (const itemEducation of item.postulant.estudios) {
            const {
              institucion,
              titulo,
              mesDesde: mesDesdeEducation,
              añoDesde: añoDesdeEducation,
              mesHasta: mesHastaEducation,
              añoHasta: añoHastaEducation,
              estudioActual,
              pais,
              area,
              nivel,
              estado,
              descripcion,
            } = itemEducation;

            const educationData = {
              postulant_id: id,
              institucion,
              titulo,
              mes_desde: mesDesdeEducation,
              ano_desde: añoDesdeEducation,
              mes_hasta: mesHastaEducation,
              ano_hasta: añoHastaEducation,
              estudio_actual: estudioActual,
              pais,
              area,
              nivel,
              estado,
              descripcion,
            };
            await querySqlService.insert("education", educationData);
          }
        }
        //////////////////////////////   insertar en tabla skill

        if (item.postulant.conocimientos !== null) {
          for (const itemSkill of item.postulant.conocimientos) {
            const {
              tipo,
              nombre,
              nivel: nivelSkill,
              calificacion,
              descripcion: descripcionSkill,
            } = itemSkill;

            const conocimientoData = {
              postulant_id: id,
              tipo,
              nombre,
              nivel: nivelSkill,
              calificacion,
              descripcion: descripcionSkill,
            };
            await querySqlService.insert("skill", conocimientoData);
          }
        }

        ///////////////// insertar tabla comentarios

        if (item.postulant.comentarios !== null) {
          for (const itemComment of item.postulant.comentarios) {
            const { vacante, usuario, comentario, fecha } = itemComment;

            const commentData = {
              postulant_id: id,
              vacante,
              usuario,
              comentario,
              fecha: formatDateString(fecha),
            };
            await querySqlService.insert("comment", commentData);
          }
        }

        ///////////////// insertar tabla rejection

        if (item.postulant.rechazado !== null) {
          if (Array.isArray(item.postulant.rechazado)) {
            for (const itemReejction of item.postulant.rechazado) {
              const { vacanteId, razon, fechaRechazo } = itemReejction;

              const rejectionData = {
                postulant_id: id,
                vacante_id: vacanteId,
                razon,
                fecha_rechazo: formatDateString(fechaRechazo),
              };
              await querySqlService.insert("rejection", rejectionData);
            }
          } else {
            const rejectionData = {
              postulant_id: id,
              vacante_id: null,
              razon: item.postulant.rechazado,
              fecha_rechazo: null,
            };
            await querySqlService.insert("rejection", rejectionData);
          }
        }

        ///////////////// insertar tabla tags

        if (item.postulant.tags !== null) {
          for (const itemTag of item.postulant.tags) {
            const { nombre, creadoPor, fechaCreacion } = itemTag;

            const tagData = {
              postulant_id: id,
              nombre,
              creado_por: creadoPor,
              fecha_creacion: formatDateString(fechaCreacion),
            };
            await querySqlService.insert("tag", tagData);
          }
        }

        ///////////////// insertar tabla attachment

        if (
          item.postulant.adjuntos !== null &&
          Object.keys(item.postulant.adjuntos).length > 0
        ) {
          Object.entries(item.postulant.adjuntos).forEach(
            async ([key, value]) => {
              const adjuntosData = {
                postulant_id: id,
                tipo: key,
                url: value,
              };
              await querySqlService.insert("attachment", adjuntosData);
            }
          );
        }

        console.log(JSON.stringify(item.postulant, null, 2));
      }

      console.log("realizado");
    }
  );
};

/* function formatDateString(dateString) {
  if (!dateString) return null;
  const [day, month, year] = dateString.split("-");
  return `${year}-${month}-${day}`;
}
 */
const formatDateString = (dateString) => {
  if (!dateString || typeof dateString !== "string") return null;
  const [day, month, year] = dateString.split("-");
  return `${year}-${month}-${day}`;
};

const removeNullCharacters = (input) => {
  if (input === null || input === undefined) {
    return input;
  }
  return input.replace(/\u0000/g, "");
};

const removeNonNumber = (input) => {
  if (input === null || typeof input !== "number") {
    return null;
  }
  return input;
};

module.exports = {
  readJsonFileAndInsertData,
};
