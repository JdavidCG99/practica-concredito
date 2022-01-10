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
const database_1 = __importDefault(require("../database"));
class ProspectosDocumentoController {
    constructor() {
        this.idProspecto = null;
        this.idDocumento = null;
    }
    setProspecto(idProspecto) {
        this.idProspecto = idProspecto;
    }
    setDocumento(idDocumento) {
        this.idDocumento = idDocumento;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var relacion = {
                    "idProspecto": this.idProspecto,
                    "idDocumento": this.idDocumento
                };
                console.log(relacion);
                yield database_1.default.query('INSERT INTO documentoprospecto SET ?', [relacion], function (error, results) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log("Documento agregado");
                    }
                });
                return true;
            }
            catch (_a) {
                return false;
            }
        });
    }
}
const relacion = new ProspectosDocumentoController();
exports.default = relacion;
