
CREATE DATABASE ProspectosClientes;  

use ProspectosClientes;

create table estatus(
 idEstatus PRIMARY KEY AUTO_INCREMENT,
 nombre varchar(50)
);

create table prospecto(
 idProspecto PRIMARY KEY AUTO_INCREMENT,
 nombre varchar(100) not null,
 primerApellido varchar(100) not null,
 segundoApellido varchar(100) null,
 calle varchar(100) not null,
 numero varchar(10) not null,
 colonia varchar(100) not null,
 codigoPostal varchar(10) not null,
 telefono varchar(14) not null,
 RFC varchar(13) not null,
 idEstatus int not null,
 observaciones varchar(600) null,
 evaluado char(1) null,
 created_at timestamp default CURRENT_TIMESTAMP,
    
FOREIGN KEY(idEstatus) REFERENCES Estatus(idEstatus)
);

create table documento(
idDocumento  PRIMARY KEY AUTO_INCREMENT,
nombre varchar(150) not null,
referencia varchar(190) null,
created_at timestamp default CURRENT_TIMESTAMP
);

create table documentoProspecto(
idProspecto int not null,
idDocumento int not null,

FOREIGN KEY(idProspecto) REFERENCES Prospecto(idProspecto),
FOREIGN KEY(idDocumento) REFERENCES Documento(idDocumento)
);

insert into Estatus values('Enviado');
insert into Estatus values('Autorizado');
insert into Estatus values('Rechazado');
