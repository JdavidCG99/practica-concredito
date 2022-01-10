import {Request , Response } from 'express';
import pool from '../database';

class ProspectosDocumentoController{
    idProspecto = null;
    idDocumento = null;

    constructor(){
    }

    public setProspecto(idProspecto: any){
        this.idProspecto = idProspecto;
    }
    public setDocumento(idDocumento: any){
        this.idDocumento = idDocumento;
    }

    public async save(){
        try{
            var relacion = {
                "idProspecto": this.idProspecto,
                "idDocumento": this.idDocumento
            };
            console.log(relacion);
            await pool.query('INSERT INTO documentoprospecto SET ?' , [relacion] , function(error,results){
                if (error) {
                    console.log(error);
                }else{
                    console.log("Documento agregado");
                }
            });
            return true;
        }catch{
            return false;
        }
        
    }
}
const relacion = new ProspectosDocumentoController();
export default relacion;