"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProspectosControllers_1 = require("../controllers/ProspectosControllers");
class ProspectosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ProspectosControllers_1.prospectosController.index);
        this.router.get('/estatus', ProspectosControllers_1.prospectosController.estatus);
        this.router.post('/', ProspectosControllers_1.prospectosController.store);
        this.router.put('/:id', ProspectosControllers_1.prospectosController.update);
        this.router.put('/evaluar/:id', ProspectosControllers_1.prospectosController.evaluar);
        this.router.get('/:id', ProspectosControllers_1.prospectosController.show);
        this.router.get('/documents/:id', ProspectosControllers_1.prospectosController.getDocumentos);
    }
}
const prospectosRoutes = new ProspectosRoutes();
exports.default = prospectosRoutes.router;
