require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM customer WHERE email = ? AND password = ? ";
    const values = [req.body.email, req.body.password];
    db.query(sql, values, (err, data) => {
        if (err) return res.json(1);
        return res.json(data);
    })
})

app.post('/update', (req, res) => {
    const sql = "UPDATE customer SET FirstName = ?, LastName = ? WHERE Email = ? ";
    const values = [req.body.fname, req.body.lname, req.body.email];
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.post('/signup', (req, res) => {
    const sql = "insert into customer (FirstName, LastName, Email, password) VALUES (?, ?, ?, ?)";
    const values = [req.body.firstname, req.body.lastname, req.body.email, req.body.password];
    db.query(sql, values, (err, data) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.json(2);
            }
            return res.json({ status: "error", message: "An error occurred" });
        }
        return res.json(data);
    })
})

app.post('/rentyourcar', (req, res) => {
    const sql = "insert into vehicle (LicensePlate, Make, Model, Year, OwnerID, transmission) values (?, ?, ?, ?, ?, ?)"
    const values = [req.body.LicensePlate, req.body.Make, req.body.Model, req.body.Year, req.body.CustomerID, req.body.transmission];
    console.log(values)
    db.query(sql, values, (err, data) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.json("Duplicate Entry");
            }
        } return res.json(err);
        return res.json(data);
    })
})


app.listen(8081, () => {
    console.log('listening on 8081');
})