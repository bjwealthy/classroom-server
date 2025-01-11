
import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'classroom-bjwealthy-classroom.g.aivencloud.com',
    port: '15044',
    user: 'avnadmin',
    password: 'AVNS_eJM3jK18_Jnu5vZzeLV',
    database: 'defaultdb'
})

con.connect(function(err){
    if(err){
        console.log('db wahala dey')
        return;
    }else{
        console.log('server connected to mysql db')
    }
})

export default con;

/*
import mysql from 'mysql';
const connection = mysql.createConnection({
    host: 'localhost',     // host for connection
    port: 3306,            // default port for mysql is 3306
    database: 'studentms',      // database from which we want to connect our node application
    user: 'root',          // username of the mysql connection
    password: ''       // password of the mysql connection
});

// executing connection
connection.connect(function(err) {
    if (err) {
        console.log("error occurred while connecting");
    } else {
        console.log("connection created with mysql successfully");
    }
});
export default connection;
*/
