const { api } = require("./axios");

const loginHR = async () =>{
    try {
        const res = await api.post("/authenticate/login/users", {
          grand_type: "password",
          client_id: "variatalent",
          client_secret: process.env.HR_CLIENT_SECRET,
          username: process.env.HR_USERNAME,
          password: process.env.HR_PASSWORD,
        });

        return res;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    loginHR
}
