"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prospectosController = void 0;
const database_1 = __importDefault(require("../database"));
class ProspectosController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('SELECT * FROM prospecto', function (error, results, fields) {
                    if (error) {
                        console.log(error);
                        res.json({ message: 'Error al obtener datos' });
                    }
                    console.log(results);
                    res.json(results);
                });
            }
            catch (error) {
                res.json({ message: 'Error en el servidor' });
            }
        });
    }
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('SELECT * FROM prospecto WHERE idProspecto = ?', [req.params.id], function (error, results, fields) {
                    if (error) {
                        console.log(error);
                        res.json({ message: 'Error al obtener datos' });
                    }
                    console.log(results);
                    if (results.length > 0) {
                        res.json(results[0]);
                    }
                    res.status(404).json({ message: "Prospecto no encontrado" });
                });
            }
            catch (error) {
                res.json({ message: 'Error en el servidor' });
            }
        });
    }
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var datos = req.body;
                var nombreDocumentos = req.body['nombreDocumentos'];
                var documentos = req.body['documentos'];
                delete datos['documentos'];
                delete datos['nombreDocumentos'];
                yield database_1.default.query('INSERT INTO prospecto SET ?', [datos], function (error, results) {
                    if (error) {
                        console.log(error);
                        res.json({ message: 'Error al guardar' });
                    }
                    else {
                        console.log("Prospecto agregado");
                        //relacion.setProspecto(results['insertId']);
                        //console.log(results['insertId']);
                        //return 1;
                    }
                });
                //console.log(v);
                //select max(id) from prof
                //console.log("estos es la respuesta : " + p);
                for (var y = 1; y <= nombreDocumentos.length; y++) {
                    var documentoParaGuardar = { "nombre": nombreDocumentos[y - 1], "referencia": documentos[y - 1] };
                    //console.log(documentoParaGuardar);
                    database_1.default.query('INSERT INTO documento SET ?', [documentoParaGuardar], function (error, results) {
                        if (error) {
                            console.log(error);
                            res.json({ message: 'Error al guardar documento' });
                        }
                        else {
                            console.log("Documento agregado");
                            database_1.default.query('SELECT MAX(idProspecto) as idProspecto,MAX(idDocumento) as idDocumento FROM prospecto,Documento', function (error, results2, fields) {
                                if (error) {
                                    console.log(error);
                                    res.json({ message: 'Error al obtener datos' });
                                }
                                console.log(results2[0]['idProspecto'] + 1);
                                console.log(results['insertId']);
                                //res.json(results);
                                var relacion = {
                                    "idProspecto": results2[0]['idProspecto'] + 1,
                                    "idDocumento": results2[0]['idDocumento'] + y
                                };
                                console.log(relacion);
                                database_1.default.query('INSERT INTO documentoprospecto SET ?', [relacion], function (error, results) {
                                    if (error) {
                                        console.log(error);
                                    }
                                    else {
                                        console.log("Documento agregado");
                                    }
                                });
                            });
                            //relacion.setDocumento(results['insertId']);
                        }
                    });
                    //SELECT MAX(idProspecto) as idProspecto,MAX(idDocumento) as idDocumento FROM prospecto,documento
                }
                res.json({ message: 'Prospecto guardado con exito' });
            }
            catch (error) {
                res.json({ message: 'Error en el servidor' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield database_1.default.query('UPDATE prospecto SET ?', [req.body], function (error, results) {
                    if (error) {
                        console.log(error);
                        res.json({ message: 'Error al actualizar' });
                    }
                    else {
                        console.log("Prospecto actualizado");
                        res.json({ message: 'Prospecto actualizado con exito' });
                    }
                });
            }
            catch (error) {
                res.json({ message: 'Error en el servidor' });
            }
        });
    }
}
exports.prospectosController = new ProspectosController();
exports.default = exports.prospectosController;
