///importando o mysql
import mysql from 'mysql'

///exportando o banco de dados
export const db = mysql.createConnection({
   host: "localhost",
   user: "root", 
   password: "squad6",
   database: "crud"
});

