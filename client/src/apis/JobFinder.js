import axios from "axios";
require("dotenv").config();


console.log(process.env.PORT)


export default axios.create({
    baseURL: "https://productroles.herokuapp.com/api/v1/jobs"
});