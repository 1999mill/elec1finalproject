const express = require("express");
const cors = require("cors");
const mysql = require("mysql");


const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO user (`Name`, `Device`) VALUES (?, ?)";
    const values = [
        req.body.name,
        req.body.device
    ];

    db.query(sql, values, (err, result) => {  // Change 'res' to 'result'
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("Data inserted successfully:", result);
        return res.json({ message: "Data inserted successfully" });
    });
});

app.put('/update/:id', (req, res) => {
    const sql = "UPDATE user SET `Name` = ?, `Device` = ? WHERE user.`ID` = ?";
    const values = [
        req.body.name,
        req.body.device
    ];
    const id = req.params.id;

    db.query(sql, [...values, id], (err, result) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("Data updated successfully:", result);
        return res.json({ message: "Data updated successfully" });
    });
});

app.delete('/User/:id', (req, res) => {
    const sql = "DELETE FROM user WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        console.log("Data deleted successfully:", result);
        return res.json({ message: "Data deleted successfully" });
    });
});



app.listen(8081, ()=>{
    console.log("listening");

})