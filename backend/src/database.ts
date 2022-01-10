import mysql from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

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
export default pool;