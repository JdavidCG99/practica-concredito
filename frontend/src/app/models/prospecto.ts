export interface Prospecto{
    id?: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    calle: string;
    numero: string;
    colonia: string;
    codigoPostal: string;
    telefono: string;
    RFC: string;
    nombreDocumentos?: any;
    documentos?: any;
    observaciones?: string;
}
