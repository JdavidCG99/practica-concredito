"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection((err, connection) => {
    //if (err) throw err; connection.release(); 
    console.log('DB is connected');
});
/*pool.getConnection()
    .then(connection =>{
        bool.releaseConnection(connection);
        console.log('base conectada');
    });
    //esta es la buena
  

   pool.then((r: any) => r.getConnection().then((connection:any)=>{
    r.releaseConnection(connection);
    console.log('Conexion exitosa.')
}));*/
exports.default = pool;
