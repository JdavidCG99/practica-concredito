import {Request , Response } from 'express';
import pool from '../database';
import relacion from "./ProspectoDocumentoController";
class ProspectosController{

    
    public async index  (req :Request, res : Response) : Promise<void>{
        
        try{
            await pool.query('SELECT * FROM prospecto', function(error,results,fields){
                if (error){
                    console.log(error);
                    res.json({message: 'Error al obtener datos'});
                }
                console.log(results);
                res.json(results);
            });
        }catch(error){
            res.json({message: 'Error en el servidor'}); 
        }

    }

    public async show  (req :Request, res : Response) : Promise<any>{

        try{
            await pool.query('SELECT * FROM prospecto WHERE idProspecto = ?', [req.params.id] , function(error,results,fields){
                if (error){
                    console.log(error);
                    res.json({message: 'Error al obtener datos'});
                }
                console.log(results);
                if(results.length > 0){
                    res.json(results[0]);
                }
                res.status(404).json({message: "Prospecto no encontrado"});
            });
        }catch(error){
            res.json({message: 'Error en el servidor'}); 
        }

    }

    public async store  (req :Request, res : Response) : Promise<void>{
        try{
            var datos = req.body;
            var nombreDocumentos = req.body['nombreDocumentos'];
            var documentos = req.body['documentos'];
            delete datos['documentos'];
            delete datos['nombreDocumentos'];
            
            const guardado = () => {
                return new Promise((resolve , reject) => {
                    pool.query('INSERT INTO prospecto SET ?' , [datos] , function(error,results){
                        if (error) {
                            console.log(error);
                            res.json({message: 'Error al guardar'});
                        }else{
                            console.log("Prospecto agregado");
                            resolve(results['insertId']);
                        }
                    });
                });
            } 
            const idSave = await guardado();
            console.log("porsp guardado :" + idSave);     

            for(var y = 1; y <= nombreDocumentos.length; y++){
                const documentoParaGuardar = {"nombre": nombreDocumentos[y-1],"referencia": documentos[y-1],"idProspecto": idSave};

                pool.query('INSERT INTO documentos SET ?' , [documentoParaGuardar] , function(error,results){
                    if (error) {
                        console.log(error);
                        res.json({message: 'Error al guardar documento'});
                    }else{
                        console.log("Documento agregado");
                    }
                });
            }
            res.json({message: 'Prospecto guardado con exito'});  

        }catch(error){
            res.json({message: 'Error en el servidor'}); 
        }
    }

    public async update  (req :Request, res : Response) : Promise<void>{
        try{
            var datos = req.body;
            await pool.query('UPDATE prospecto SET ? WHERE idProspecto = ?' , [datos ,req.params.id] , function(error,results){
                if (error) {
                    console.log(error);
                    res.json({message: 'Error al actualizar'});
                }else{
                    console.log("Prospecto actualizado");
                    res.json({message: 'Prospecto actualizado con exito'}); 
                }
            });
        }catch(error){
            res.json({message: 'Error en el servidor'}); 
        }
    }

    public async evaluar(req :Request, res : Response) : Promise<void>{
        try{
            var datos = req.body;
            console.log(req.body);
            console.log(datos);
            var evaluado = {evaluado: "1"};
            datos = Object.assign(datos,evaluado);
            await pool.query('UPDATE prospecto SET ? WHERE idProspecto = ?' , [datos ,req.params.id] , function(error,results){
                if (error) {
                    console.log(error);
                    res.json({message: 'Error al actualizar'});
                }else{
                    console.log("Prospecto actualizado");
                    res.json({message: 'Prospecto actualizado con exito'}); 
                }
            });
        }catch(error){
            res.json({message: 'Error en el servidor'}); 
        }
    }
   
}

export const prospectosController = new ProspectosController();

export default prospectosController;