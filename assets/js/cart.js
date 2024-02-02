const backend = "http://localhost:8080";

const getCartList = async (userId) => {
    let response = await axios.get(
        backend + "/cart/find/" + userId
  );

  return response.data;
};