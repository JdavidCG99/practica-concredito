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
            
            await pool.query('INSERT INTO prospecto SET ?' , [datos] , function(error,results){
                if (error) {
                    console.log(error);
                    res.json({message: 'Error al guardar'});
                }else{
                    console.log("Prospecto agregado");
                    //relacion.setProspecto(results['insertId']);
                    //console.log(results['insertId']);
                    
                    //return 1;
                }
            });
            //console.log(v);
            
            //select max(id) from prof
            //console.log("estos es la respuesta : " + p);
            

            for(var y = 1; y <= nombreDocumentos.length; y++){
                var documentoParaGuardar = {"nombre": nombreDocumentos[y-1],"referencia": documentos[y-1]};
                //console.log(documentoParaGuardar);
                pool.query('INSERT INTO documento SET ?' , [documentoParaGuardar] , function(error,results){
                    if (error) {
                        console.log(error);
                        res.json({message: 'Error al guardar documento'});
                    }else{
                        console.log("Documento agregado");

                        pool.query('SELECT MAX(idProspecto) as idProspecto,MAX(idDocumento) as idDocumento FROM prospecto,Documento', function(error,results2,fields){
                            if (error){
                                console.log(error);
                                res.json({message: 'Error al obtener datos'});
                            }
                            console.log(results2[0]['idProspecto']+1);
                            console.log(results['insertId']);
                            //res.json(results);

                            var relacion = {
                                "idProspecto": results2[0]['idProspecto']+1,
                                "idDocumento": results2[0]['idDocumento']+y
                            };
                            console.log(relacion);
                            pool.query('INSERT INTO documentoprospecto SET ?' , [relacion] , function(error,results){
                                if (error) {
                                    console.log(error);
                                }else{
                                    console.log("Documento agregado");
                                }
                            });
                        }); 
                        //relacion.setDocumento(results['insertId']);
                    }
                });
                //SELECT MAX(idProspecto) as idProspecto,MAX(idDocumento) as idDocumento FROM prospecto,documento
            }
            res.json({message: 'Prospecto guardado con exito'});  

        }catch(error){
            res.json({message: 'Error en el servidor'}); 
        }
    }

    public async update  (req :Request, res : Response) : Promise<void>{
        try{
            console.log(req.body);
            await pool.query('UPDATE prospecto SET ?' , [req.body] , function(error,results){
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