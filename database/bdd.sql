
CREATE DATABASE ProspectosClientes;  

use ProspectosClientes;

create table estatus(
 idEstatus int PRIMARY KEY AUTO_INCREMENT,
 nombre varchar(50)
);

create table prospecto(
 idProspecto int PRIMARY KEY AUTO_INCREMENT,
 nombre varchar(100) not null,
 primerApellido varchar(100) not null,
 segundoApellido varchar(100) null,
 calle varchar(100) not null,
 numero varchar(10) not null,
 colonia varchar(100) not null,
 codigoPostal varchar(10) not null,
 telefono varchar(14) not null,
 RFC varchar(13) not null,
 idEstatus int DEFAULT 1,
 observaciones varchar(600) null,
 evaluado char(1) DEFAULT 0,
 created_at timestamp default CURRENT_TIMESTAMP,
    
FOREIGN KEY(idEstatus) REFERENCES Estatus(idEstatus)
);

create table documentos(
idDocumento int PRIMARY KEY AUTO_INCREMENT,
nombre varchar(150) not null,
referencia varchar(190) null,
idProspecto int not null,
created_at timestamp default CURRENT_TIMESTAMP,
    
FOREIGN KEY(idProspecto) REFERENCES Prospecto(idProspecto)
);


insert into Estatus values(1,'Enviado');
insert into Estatus values(2,'Autorizado');
insert into Estatus values(3,'Rechazado');