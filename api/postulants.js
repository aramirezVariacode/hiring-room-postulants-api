const { api } = require("./axios");
const getPostulants = async (pageNumber, token) => {
  try {
    const res = await api.get("/postulants", {
      params: { page: pageNumber, pageSize: 100, token: token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

const getPostulantById = async (id, token) => {
  try {
    const res = await api.get(`/postulants/${id}`, {
      params: { token: token },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPostulants, getPostulantById };
