CREATE TABLE postulant (
    id VARCHAR(24) PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(100),
    fecha_nacimiento DATE,
    telefono_fijo VARCHAR(20),
    telefono_celular VARCHAR(20),
    dni VARCHAR(20),
    cuil VARCHAR(20),
    genero VARCHAR(20),
    foto_perfil VARCHAR(255),
    presentacion_postulante TEXT,
    nacionalidad VARCHAR(50),
    fecha_postulacion DATE,
    fecha_aplicacion TIMESTAMP,
    fuente VARCHAR(50),
    legajo VARCHAR(50),
    salario_pretendido DECIMAL,
    vacante_id VARCHAR(50),
    etapa VARCHAR(50),
    vacante_nombre VARCHAR(100),
    disponibilidad_horaria VARCHAR(50),
    disponibilidad_relocacion BOOLEAN,
    calificacion DECIMAL
);

CREATE TABLE address (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    pais VARCHAR(50),
    provincia VARCHAR(50),
    ciudad VARCHAR(50),
    direccion VARCHAR(255),
    pais_id INT,
    provincia_id INT,
    ciudad_id INT
);

CREATE TABLE social_media (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    linkedin VARCHAR(255),
    facebook VARCHAR(255),
    twitter VARCHAR(255),
    google_plus VARCHAR(255),
    skype VARCHAR(255),
    website VARCHAR(255)
);

CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    empresa VARCHAR(100),
    puesto VARCHAR(100),
    mes_desde INT,
    ano_desde INT,
    mes_hasta INT,
    ano_hasta INT,
    trabajo_actual BOOLEAN,
    pais VARCHAR(50),
    area VARCHAR(100),
    sub_area VARCHAR(100),
    industria VARCHAR(100),
    seniority VARCHAR(50),
    descripcion TEXT
);

CREATE TABLE education (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    institucion VARCHAR(100),
    titulo VARCHAR(100),
    mes_desde INT,
    ano_desde INT,
    mes_hasta INT,
    ano_hasta INT,
    estudio_actual BOOLEAN,
    pais VARCHAR(50),
    area VARCHAR(100),
    nivel VARCHAR(50),
    estado VARCHAR(50),
    descripcion TEXT
);

CREATE TABLE skill (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    tipo VARCHAR(50),
    nombre VARCHAR(100),
    nivel VARCHAR(50),
    calificacion VARCHAR(50),
    descripcion TEXT
);

CREATE TABLE comment (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    vacante VARCHAR(100),
    usuario VARCHAR(50),
    comentario TEXT,
    fecha DATE
);

CREATE TABLE rejection (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    vacante_id VARCHAR(50),
    razon TEXT,
    fecha_rechazo DATE
);

CREATE TABLE tag (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    nombre VARCHAR(50),
    creado_por VARCHAR(50),
    fecha_creacion DATE
);


CREATE TABLE attachment (
    id SERIAL PRIMARY KEY,
    postulant_id VARCHAR(24) REFERENCES postulant(id),
    tipo VARCHAR(50),
    url VARCHAR(255)
);
