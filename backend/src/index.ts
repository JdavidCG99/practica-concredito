import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import prospectosRoutes from './routes/prospectosRoutes'
class Server {

    public app: Application; 

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/api/prospectos',prospectosRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server corriendo');
        });
    }
}

const server = new Server();
server.start();