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
                yield database_1.default.query('SELECT p.*,e.nombre as nombreEstatus FROM prospecto as p inner join estatus as e on p.idEstatus = e.idEstatus', function (error, results, fields) {
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
                const guardado = () => {
                    return new Promise((resolve, reject) => {
                        database_1.default.query('INSERT INTO prospecto SET ?', [datos], function (error, results) {
                            if (error) {
                                console.log(error);
                                res.json({ message: 'Error al guardar' });
                            }
                            else {
                                console.log("Prospecto agregado");
                                resolve(results['insertId']);
                            }
                        });
                    });
                };
                const idSave = yield guardado();
                console.log("porsp guardado :" + idSave);
                for (var y = 1; y <= nombreDocumentos.length; y++) {
                    const documentoParaGuardar = { "nombre": nombreDocumentos[y - 1], "referencia": documentos[y - 1], "idProspecto": idSave };
                    database_1.default.query('INSERT INTO documentos SET ?', [documentoParaGuardar], function (error, results) {
                        if (error) {
                            console.log(error);
                            res.json({ message: 'Error al guardar documento' });
                        }
                        else {
                            console.log("Documento agregado");
                        }
                    });
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
                var datos = req.body;
                yield database_1.default.query('UPDATE prospecto SET ? WHERE idProspecto = ?', [datos, req.params.id], function (error, results) {
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
    evaluar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var datos = req.body;
                console.log(req.body);
                console.log(datos);
                var evaluado = { evaluado: "1" };
                datos = Object.assign(datos, evaluado);
                yield database_1.default.query('UPDATE prospecto SET ? WHERE idProspecto = ?', [datos, req.params.id], function (error, results) {
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
