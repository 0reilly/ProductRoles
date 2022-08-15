const { Pool } = require('pg')
require("dotenv").config();


const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addons

}


 const devConfig = {
     connectionString: 'postgresql://doadmin:AVNS_ew-haBYnJvt3FdJPWfR@app-2098ae8e-75c9-49de-97bd-4161eeb9563f-do-user-11086637-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=require',
}

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = {

  query: (text, params) => pool.query(text, params),
}
