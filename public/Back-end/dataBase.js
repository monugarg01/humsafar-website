const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const query = 'SELECT * FROM `prediction_table`.`new_table`;'


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Chinna@2811',
    database: 'prediction_table',
    debug: false
});

pool.getConnection((err, connection) => {
    if (err) throw err;
    app.get('/test', (req, res) => {
        connection.query(query, (err, results) => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.json(results)
            };
        });
    });
    app.post('/test1', (req, res)=>{
        let alldata = req.body.allData;
        let values = Object.values(alldata)
        console.log("----->",Object.values(alldata))
        const query1 = "INSERT INTO prediction_table.new_table(prediction_description,prediction_image_link,match_name,league,date,time,Stadium,match_report,telegram_link,Instagram_link,facebook_link,Wicket_Keeper1,Batsman1,all_rounder_1,Baller1,Wicket_Keeper2,Batsman2,all_rounder_2,Baller2,Team_1_playing,Team_2_playing,prediction_id) VALUES (?)";
        connection.query(query1,[values],(err, results) => {
            if (err) {
                console.log(err)
                return res.send(err)
            }
            else {
                console.log(results)
                return res.json(results)
            };
        });
        // connection.query("INSERT INTO `names` (name) VALUES (?)", username.toString(), function(err, result){
        //     if(err) throw err;
        //         console.log("1 record inserted");
        //     });
        // res.send(username);
        
    });
});


app.listen(3000, () => {
    console.log('MySchema SQL server listening on PORT 3000');
});
