import mysql from 'mysql';

// const con = mysql.createConnection({
//     host: 'classroom-bjwealthy-classroom.g.aivencloud.com',
//     port: '15044',
//     user: 'avnadmin',
//     password: 'AVNS_eJM3jK18_Jnu5vZzeLV',
//     database: 'defaultdb'
const con = mysql.createConnection({
    host: 'sql.freedb.tech',
    port: '3306',
    user: 'freedb_bjwealthy',
    password: '9Kyc@*#X9psX*bY',
    database: 'freedb_bjwealthy-classroom-db'
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
