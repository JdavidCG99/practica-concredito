import {Router} from 'express';
import { prospectosController } from '../controllers/ProspectosControllers';
class ProspectosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',prospectosController.index);
        this.router.post('/',prospectosController.store);
        this.router.put('/:id',prospectosController.update);
        this.router.get('/:id',prospectosController.show);
    }
}

const prospectosRoutes =  new ProspectosRoutes();
export default prospectosRoutes.router;