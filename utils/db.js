
import mysql from 'mysql';

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'studentms'
    // host: 'classroom-bjwealthy-classroom.g.aivencloud.com',
    // user: 'avnadmin',
    // password: 'AVNS_eJM3jK18_Jnu5vZzeLV',
    // database: 'defaultdb'
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
