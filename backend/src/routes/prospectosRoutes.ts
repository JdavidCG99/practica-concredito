import {Router} from 'express';

class ProspectosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', (req , res) => res.send('hello'));
    }
}

const prospectosRoutes =  new ProspectosRoutes();
export default prospectosRoutes.router;