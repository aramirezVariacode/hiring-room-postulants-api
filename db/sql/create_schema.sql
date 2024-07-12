CREATE TABLE postulant (
    id VARCHAR(24) PRIMARY KEY,
    nombre TEXT,
    apellido TEXT,
    email TEXT,
    fecha_nacimiento DATE,
    telefono_fijo TEXT,
    telefono_celular TEXT,
    dni TEXT,
    cuil TEXT,
    genero TEXT,
    foto_perfil TEXT,
    presentacion_postulante TEXT,
    nacionalidad TEXT,
    fecha_postulacion DATE,
    fecha_aplicacion TIMESTAMP,
    fuente TEXT,
    legajo TEXT,
    salario_pretendido DECIMAL,
    vacante_id TEXT,
    etapa TEXT,
    vacante_nombre TEXT,
    disponibilidad_horaria TEXT,
    disponibilidad_relocacion BOOLEAN,
    calificacion DECIMAL
);

CREATE TABLE address (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    pais TEXT,
    provincia TEXT,
    ciudad TEXT,
    direccion VARCHAR(255),
    pais_id INT,
    provincia_id INT,
    ciudad_id INT
);

CREATE TABLE social_media (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    linkedin TEXT,
    facebook TEXT,
    twitter TEXT,
    google_plus TEXT,
    skype TEXT,
    website TEXT
);

CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    empresa TEXT,
    puesto TEXT,
    mes_desde INT,
    ano_desde INT,
    mes_hasta INT,
    ano_hasta INT,
    trabajo_actual BOOLEAN,
    pais TEXT,
    area TEXT,
    sub_area TEXT,
    industria TEXT,
    seniority TEXT,
    descripcion TEXT
);

CREATE TABLE education (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    institucion TEXT,
    titulo TEXT,
    mes_desde INT,
    ano_desde INT,
    mes_hasta INT,
    ano_hasta INT,
    estudio_actual BOOLEAN,
    pais TEXT,
    area TEXT,
    nivel TEXT,
    estado TEXT,
    descripcion TEXT
);

CREATE TABLE skill (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    tipo TEXT,
    nombre TEXT,
    nivel TEXT,
    calificacion TEXT,
    descripcion TEXT
);

CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    vacante TEXT,
    usuario TEXT,
    comentario TEXT,
    fecha DATE
);

CREATE TABLE rejection (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    vacante_id TEXT,
    razon TEXT,
    fecha_rechazo DATE
);

CREATE TABLE tag (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    nombre TEXT,
    creado_por TEXT,
    fecha_creacion DATE
);


CREATE TABLE attachment (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    tipo TEXT,
    url TEXT
);
