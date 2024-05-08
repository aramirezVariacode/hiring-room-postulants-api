const { api } = require("./axios")
 const getPostulants = async (pageNumber) => {
try {
        const res = await api.get("/postulants", {
          params: { page:pageNumber , pageSize: 100, token: process.env.TOKEN },
        });
        return res;
} catch (error) {
    console.log(error);
}
};

const getPostulantById = async (id) => {
    try {
        const res = await api.get(`/postulants/${id}`, { params: { token: process.env.TOKEN } });
        return res;
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getPostulants, getPostulantById }