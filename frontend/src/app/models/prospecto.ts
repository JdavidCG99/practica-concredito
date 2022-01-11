export interface Prospecto{
    id?: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    calle: string;
    numero: number;
    colonia: string;
    codigoPostal: string;
    telefono: number;
    RFC: string;
    nombreDocumentos?: any;
    documentos?: any;
}
