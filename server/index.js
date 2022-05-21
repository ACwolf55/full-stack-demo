const express = require('express')
const Sequelize = require('sequelize')
const app = express()
const PORT = 5000

const sequelize = new Sequelize('Heroku Postgres URI here', {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
  
app.get('/test',(req,res)=>{

    sequelize.query('SELECT * from sampletable').then((dbRes)=>{
        console.log(dbRes)
        return res.send(dbRes[0])
    })
})



app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))