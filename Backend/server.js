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
    });
})


app.post('/dashboard', (req, res) => {
    const sql = `
  SELECT vehicle.*, reservation.ReservationStartDate
  FROM vehicle 
  JOIN reservation ON vehicle.VehicleID = reservation.VehicleID
  WHERE reservation.ReservationStartDate > CURDATE()
`;

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        console.log(data);
        return res.json(data);
    });
})

app.post('/dashboard1', (req, res) => {
    const sql = `
  SELECT vehicle.*, reservation.ReservationEndDate
  FROM vehicle 
  JOIN reservation ON vehicle.VehicleID = reservation.VehicleID
  WHERE reservation.ReservationEndDate < CURDATE()
`;

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
})

// app.post('/booking', (req, res) => {
//     const sql = "insert into rental_transaction (CustomerID, VehicleID, RentalStartDate, RentalEndDate, TotalFee) values (?, ?, ?, ?, ?)"
//     const values = [req.body.CustomerID, req.body.VehicleID, req.body.RentalStartDate, req.body.RentalEndDate, req.body.TotalFee];

//     db.query(sql, values, (err, data) => {
//         if (err) {console.log(err); return res.json(err); };
//         console.log(data);
//         return res.json(data);
//     });
// })

app.post('/booking', (req, res) => {
    console.log("Received booking request:", req.body);

    const sql = `
        INSERT INTO reservation (CustomerID, VehicleID, ReservationStartDate, ReservationEndDate) 
        VALUES (?, ?, ?, ?)
    `;
    const values = [
        req.body.CustomerID, 
        req.body.VehicleID, 
        req.body.RentalStartDate, 
        req.body.RentalEndDate
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log("Error inserting data:", err);
            return res.status(500).json({ error: "Database error", details: err });
        }
        console.log("Insert successful:", data);
        return res.status(201).json({ success: true, data });
    });
});


// app.post('/booking3', (req, res) => {
//         const sql = "select TransactionID from rental_transaction"
//         db.query(sql, (err, data) => {
//             if (err) return res.json(err);
//             return res.json(data);
//         })
//     })


// app.post('/booking2', (req, res) => {

//     const sql = 'INSERT INTO payment(TransactionID, PaymentDate, Amount, PaymentMethod, amountReceived) values (?, ?, ?, ?, ?)';
//     const values = [req.body.TransactionID, req.body.PaymentDate, req.body.Amount, req.body.PaymentMethod, req.body.amountReceived]

//     db.query(sql, values, (err, data) => {
//         if (err) {
//             console.log("Error inserting data:", err);
//             return res.status(500).json({ error: "Database error", details: err });
//         }
//         console.log("Insert successful:", data);
//         return res.status(201).json({ success: true, data });
//     });
// });



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
    const sql = "insert into vehicle (LicensePlate, Make, Model, Year, OwnerID, transmission, Type, PickUpLocation, bookStatus, price) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    const values = [req.body.LicensePlate, req.body.Make, req.body.Model, req.body.Year, req.body.CustomerID, req.body.transmission, req.body.VehicleType, req.body.pickup, 0, req.body.price];

    const sql2 = 'insert into owner values (?, ?, ? )'
    const values2 = [req.body.CustomerID, req.body.name, req.body.phone];
    console.log(values)
    db.query(sql2, values2, (err, data) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                // return res.json("Duplicate Entry");
            }
        } return res.json(err);
    })
    db.query(sql, values, (err, data) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.json("Duplicate Entry");
            }
        } return res.json(err)
    })

})



app.post('/searchcar', (req, res) => {
    const sql = "SELECT v.* FROM vehicle v LEFT JOIN reservation r ON v.VehicleID = r.VehicleID AND ( (r.ReservationStartDate <= ? AND r.ReservationEndDate >= ?) ) WHERE v.bookStatus = 0 AND r.ReservationID IS NULL AND v.PickUpLocation = ?"
    const values = [req.body.ReservationEndDate, req.body.ReservationStartDate, req.body.pickupLocation];
    db.query(sql, values, (err, data) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.json("Duplicate Entry");
            }
        } return res.json(data)
    })
})

    


app.listen(8081, () => {
    console.log('listening on 8081');
})