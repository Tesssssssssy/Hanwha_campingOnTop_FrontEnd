const backend = "http://localhost:8080/api/v1";

const getHouseList = async (page, size) => {
  let response = await axios.get(
    backend + "/house/list?page=" + page + "&size=" + size
  );

  return response.data;
};

const createHouse = async (data) => {
  let formData = new FormData();

  let json = JSON.stringify(data);
  formData.append("postCreateHouseDtoReq", new Blob([json], { type: "application/json" }));

  Array.from(images).map((images) => {
    formData.append("uploadFiles", images);
  });

  let response = await axios.post(
    backend + "/house/create",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
