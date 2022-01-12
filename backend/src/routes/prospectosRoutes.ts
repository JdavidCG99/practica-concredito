import {Router} from 'express';
import { prospectosController } from '../controllers/ProspectosControllers';
class ProspectosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',prospectosController.index);
        this.router.get('/estatus',prospectosController.estatus);
        this.router.post('/',prospectosController.store);
        this.router.put('/:id',prospectosController.update);
        this.router.put('/evaluar/:id',prospectosController.evaluar);
        this.router.get('/:id',prospectosController.show);
        this.router.get('/documents/:id',prospectosController.getDocumentos);
    }
}

const prospectosRoutes =  new ProspectosRoutes();
export default prospectosRoutes.router;